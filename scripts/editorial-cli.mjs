// Command-line access to the editorial pipeline for Claude (local sessions and the
// 5 a.m. cloud routine). Reads DATABASE_URL from the environment, else from .dev.vars.
//
//   node scripts/editorial-cli.mjs board
//   node scripts/editorial-cli.mjs show <id>
//   node scripts/editorial-cli.mjs context <id>              # notes, source question, related phrasings, AI prompts
//   node scripts/editorial-cli.mjs outline <id> <file.md>    # saves outline, moves idea_approved -> outline_ready
//   node scripts/editorial-cli.mjs start <id>                # outline_approved -> in_progress
//   node scripts/editorial-cli.mjs draft-ready <id> <url> "<note>"   # in_progress -> draft_ready
//   node scripts/editorial-cli.mjs set-live <id> <url> "<note>"      # records live_url on a published article
//   node scripts/editorial-cli.mjs indexing-requested <id> [note]   # stamps indexing_requested_at (Search Console request done)
//   node scripts/editorial-cli.mjs indexed <id> [note]              # stamps indexed_at (Search Console shows URL is on Google)
//   node scripts/editorial-cli.mjs note <id> "<note>"        # log a note without changing status
import { readFileSync, existsSync } from 'node:fs';
import { neon } from '@neondatabase/serverless';

function dbUrl() {
	if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
	if (existsSync('.dev.vars')) {
		const m = readFileSync('.dev.vars', 'utf8').match(/^DATABASE_URL=(.+)$/m);
		if (m) return m[1].trim().replace(/^"|"$/g, '');
	}
	throw new Error('DATABASE_URL not set and no .dev.vars found');
}
const sql = neon(dbUrl());
const [cmd, idArg, ...rest] = process.argv.slice(2);
const id = Number(idArg);
const ACTOR = 'claude';

async function move(from, to, note, extra = {}) {
	const [cur] = await sql`SELECT status FROM editorial_articles WHERE id = ${id}`;
	if (!cur) throw new Error(`article ${id} not found`);
	if (cur.status !== from) throw new Error(`article ${id} is ${cur.status}, expected ${from}`);
	if (to === 'outline_ready') await sql`UPDATE editorial_articles SET status = ${to}, outline = ${extra.outline}, updated_at = now() WHERE id = ${id}`;
	else if (to === 'draft_ready') await sql`UPDATE editorial_articles SET status = ${to}, draft_url = ${extra.url}, draft_ready_at = now(), updated_at = now() WHERE id = ${id}`;
	else await sql`UPDATE editorial_articles SET status = ${to}, updated_at = now() WHERE id = ${id}`;
	await sql`INSERT INTO editorial_events (article_id, from_status, to_status, note, actor) VALUES (${id}, ${from}, ${to}, ${note}, ${ACTOR})`;
	console.log(`#${id}: ${from} -> ${to}`);
}

if (cmd === 'board') {
	const rows = await sql`SELECT id, status, working_title, target_keyword, slug, draft_url, live_url, indexing_requested_at, indexed_at FROM editorial_articles WHERE status NOT IN ('rejected','killed') ORDER BY status, id`;
	for (const r of rows) console.log(`#${r.id}\t${r.status.padEnd(16)}\t${r.working_title}${r.slug ? `\t[${r.slug}]` : ''}`);
	const todo = rows.filter((r) => ['idea_approved', 'outline_approved', 'published'].includes(r.status) || (r.status === 'indexed' && !r.indexed_at));
	console.log(`\nClaude work: ${todo.length === 0 ? 'none' : todo.map((r) => `#${r.id} ${r.status}`).join(', ')}`);
} else if (cmd === 'show') {
	const [a] = await sql`SELECT * FROM editorial_articles WHERE id = ${id}`; console.log(JSON.stringify(a, null, 2));
	const ev = await sql`SELECT created_at, actor, from_status, to_status, note FROM editorial_events WHERE article_id = ${id} ORDER BY created_at`;
	for (const e of ev) console.log(`${e.created_at.toISOString().slice(0, 16)} ${e.actor.padEnd(6)} ${(e.from_status ?? '-').padEnd(16)} -> ${e.to_status.padEnd(16)} ${e.note ?? ''}`);
} else if (cmd === 'context') {
	const [a] = await sql`SELECT * FROM editorial_articles WHERE id = ${id}`;
	console.log(`# ${a.working_title}\nkeyword: ${a.target_keyword}\ncategory: ${a.category}\ntarget_page: ${a.target_page}\nslug: ${a.slug}\n\nNOTES:\n${a.notes ?? ''}\n\nOUTLINE:\n${a.outline ?? '(none)'}`);
	if (a.question_id) {
		const [q] = await sql`SELECT * FROM editorial_questions WHERE id = ${a.question_id}`;
		console.log(`\nSOURCE QUESTION: ${q.question} (${q.volume}/mo, ${q.competition ?? 'no competition data'}, seed "${q.seed}")`);
		const rel = await sql`SELECT question, volume FROM editorial_questions WHERE seed = ${q.seed} AND source <> 'ai-prompt' AND volume > 0 ORDER BY volume DESC LIMIT 15`;
		console.log('\nRELATED PHRASINGS WITH VOLUME:'); rel.forEach((r) => console.log(`- ${r.question} (${r.volume})`));
		const pr = await sql`SELECT question FROM editorial_questions WHERE seed = ${q.seed} AND source = 'ai-prompt' ORDER BY question`;
		console.log('\nAI PROMPTS (ChatGPT, Gemini):'); pr.forEach((r) => console.log(`- ${r.question}`));
	}
	const notes = await sql`SELECT created_at, actor, to_status, note FROM editorial_events WHERE article_id = ${id} AND note IS NOT NULL ORDER BY created_at`;
	console.log('\nLOG NOTES:'); notes.forEach((n) => console.log(`- [${n.actor} -> ${n.to_status}] ${n.note}`));
} else if (cmd === 'outline') {
	const outline = readFileSync(rest[0], 'utf8');
	await move('idea_approved', 'outline_ready', rest[1] ?? 'Outline written to the Phase 1 brief.', { outline });
} else if (cmd === 'start') {
	await move('outline_approved', 'in_progress', rest[0] ?? 'Drafting to the approved outline.');
} else if (cmd === 'draft-ready') {
	await move('in_progress', 'draft_ready', rest[1] ?? 'Draft ready for final review.', { url: rest[0] });
} else if (cmd === 'set-live') {
	await sql`UPDATE editorial_articles SET live_url = ${rest[0]}, published_at = COALESCE(published_at, now()), updated_at = now() WHERE id = ${id} AND status = 'published'`;
	await sql`INSERT INTO editorial_events (article_id, from_status, to_status, note, actor) VALUES (${id}, 'published', 'published', ${rest[1] ?? 'Live.'}, ${ACTOR})`;
	console.log(`#${id}: live_url set`);
} else if (cmd === 'indexing-requested') {
	await sql`UPDATE editorial_articles SET status = 'indexed', indexing_requested_at = now(), updated_at = now() WHERE id = ${id} AND status = 'published'`;
	await sql`INSERT INTO editorial_events (article_id, from_status, to_status, note, actor) VALUES (${id}, 'published', 'indexed', ${rest[0] ?? 'Submitted to Google Search Console for indexing.'}, ${ACTOR})`;
	console.log(`#${id}: published -> indexed (submitted ${new Date().toISOString()})`);
} else if (cmd === 'indexed') {
	await sql`UPDATE editorial_articles SET indexed_at = now(), updated_at = now() WHERE id = ${id} AND status = 'indexed'`;
	await sql`INSERT INTO editorial_events (article_id, from_status, to_status, note, actor) VALUES (${id}, 'indexed', 'indexed', ${rest[0] ?? 'Google reports the URL is indexed.'}, ${ACTOR})`;
	console.log(`#${id}: indexed at ${new Date().toISOString()}`);
} else if (cmd === 'note') {
	const [a] = await sql`SELECT status FROM editorial_articles WHERE id = ${id}`;
	await sql`INSERT INTO editorial_events (article_id, from_status, to_status, note, actor) VALUES (${id}, ${a.status}, ${a.status}, ${rest[0]}, ${ACTOR})`;
	console.log(`#${id}: note added`);
} else {
	console.log('usage: board | show <id> | context <id> | outline <id> <file> | start <id> | draft-ready <id> <url> [note] | set-live <id> <url> [note] | note <id> <text>');
}
