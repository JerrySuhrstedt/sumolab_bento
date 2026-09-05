// Loads Answer The Public and Keyword Planner exports from the vault into the
// editorial_questions table. Idempotent: reruns update volume/competition and
// never touch a question's status. Usage: node scripts/editorial-import.mjs
import { readFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { neon } from '@neondatabase/serverless';

const DIR = '/Volumes/4TB ExtremePro/Dropbox/Jerrys Vault/Jerry-AI-Context/03-projects/sumolab/seo-content/01-keyword-exports';
const vars = Object.fromEntries(readFileSync('.dev.vars', 'utf8').split('\n').filter((l) => l.includes('=')).map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, '')]; }));
const sql = neon(vars.DATABASE_URL);

const QW = /^(how|what|which|why|when|where|can|does|do|is|are|should|will|who)\b/i;
const OFFTOPIC = /\b(simulator|reddit|pdf|login|salary|salaries|jobs?|hiring|career|resume|internship|course|degree|certification|exam|quiz|template free|game|roblox|sims|minecraft|fortnite)\b/i;

const CATEGORY_BY_SEED = {
	'ai for small business': 'AI adoption', 'ai for marketing': 'AI adoption', 'ai policy': 'AI adoption', 'ai training': 'AI adoption', 'ai consultant': 'AI adoption',
	'marketing strategy': 'Marketing strategy', 'marketing plan': 'Marketing strategy', 'small business marketing': 'Marketing strategy', 'marketing budget': 'Marketing strategy', 'marketing consultant': 'Marketing strategy',
	'lead generation': 'Lead generation', 'get more customers': 'Lead generation', 'google business profile': 'Lead generation', 'contractor leads': 'Lead generation',
	'marketing director': 'Hiring and team', 'marketing manager': 'Hiring and team', 'fractional cmo': 'Hiring and team', 'outsourced marketing': 'Hiring and team',
	'crm for small business': 'Sales and CRM', 'sales process': 'Sales and CRM',
	'home builder marketing': 'Industry', 'contractor marketing': 'Industry', 'remodeler marketing': 'Industry', 'hvac marketing': 'Industry',
};
// Service page a question feeds, by phrase. First match wins. Bonus points when it hits.
const TARGETS = [
	[/fractional cmo|part[- ]time cmo|outsourced cmo|chief marketing officer/i, '/services/fractional-cmo/'],
	[/fractional marketing director|marketing director/i, '/services/fractional-marketing-director/'],
	[/marketing manager/i, '/blog/marketing-manager-vs-marketing-director/'],
	[/ai (consultant|advisor|training|policy|adoption|strategy)|ai for (small business|marketing|business)|small business ai/i, '/services/fractional-ai-advisor/'],
	[/home ?builder|new home|custom home/i, '/marketing-for-home-builders/'],
	[/remodel/i, '/marketing-for-remodelers/'],
	[/contractor|construction|hvac|plumb|electric|roof/i, '/marketing-for-construction-companies/'],
	[/marketing consultant|marketing consulting/i, '/marketing-consultant-for-small-business/'],
	[/marketing (strategy|plan)|small business marketing|marketing budget/i, '/blog/marketing-strategy-for-a-small-business/'],
	[/crm|sales process|pipeline/i, '/blog/5-reasons-your-business-needs-a-crm/'],
	[/lead generation|get more customers|more leads|google business profile/i, '/blog/marketing-strategy-for-a-small-business/'],
];
function categoryFor(seed, text) {
	if (seed && CATEGORY_BY_SEED[seed]) return CATEGORY_BY_SEED[seed];
	if (/\bai\b|artificial intelligence|chatgpt|claude|automation/i.test(text)) return 'AI adoption';
	if (/lead|customer|google business/i.test(text)) return 'Lead generation';
	if (/director|manager|cmo|hire|hiring|outsourc/i.test(text)) return 'Hiring and team';
	if (/crm|sales/i.test(text)) return 'Sales and CRM';
	if (/builder|contractor|remodel|hvac|construction/i.test(text)) return 'Industry';
	if (/marketing/i.test(text)) return 'Marketing strategy';
	return 'Other';
}
function targetFor(text) { for (const [re, page] of TARGETS) if (re.test(text)) return page; return null; }
function compWeight(c) { return c === 'Low' ? 1.0 : c === 'Medium' ? 0.8 : c === 'High' ? 0.6 : 0.9; }
function score(volume, competition, target, verified) {
	const base = verified ? Math.log10(volume + 1) * 20 : 5;
	return Math.round((base * compWeight(competition) + (target ? 15 : 0)) * 10) / 10;
}
function parseVol(v) { v = String(v ?? '').replace(/,/g, '').trim().toUpperCase(); if (v.endsWith('K')) return Math.round(parseFloat(v) * 1000); const n = parseInt(v, 10); return Number.isFinite(n) ? n : 0; }
function decode(buf) { return buf[0] === 0xff && buf[1] === 0xfe ? buf.toString('utf16le').replace(/^﻿/, '') : buf.toString('utf8').replace(/^﻿/, ''); }
function parseCsv(text, delim = ',') {
	const rows = []; let row = [], cell = '', q = false;
	for (let i = 0; i < text.length; i++) {
		const ch = text[i];
		if (q) { if (ch === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += ch; }
		else if (ch === '"') q = true;
		else if (ch === delim) { row.push(cell); cell = ''; }
		else if (ch === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
		else if (ch !== '\r') cell += ch;
	}
	if (cell || row.length) { row.push(cell); rows.push(row); }
	return rows;
}
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

const bank = new Map(); // key -> record
function add(rec) {
	const key = norm(rec.question); if (!key || key.length < 12) return;
	const cur = bank.get(key);
	if (!cur) { bank.set(key, { ...rec, platforms: new Set(rec.platforms) }); return; }
	if (rec.volume > cur.volume) { cur.volume = rec.volume; cur.competition = rec.competition ?? cur.competition; cur.competition_index = rec.competition_index ?? cur.competition_index; cur.cpc = rec.cpc ?? cur.cpc; }
	if (!cur.competition && rec.competition) { cur.competition = rec.competition; cur.competition_index = rec.competition_index; }
	rec.platforms.forEach((p) => cur.platforms.add(p));
	if (!cur.seed && rec.seed) cur.seed = rec.seed;
	if (cur.source !== rec.source) cur.source = 'atp+kp';
}

let files = 0;
for (const f of readdirSync(DIR)) {
	const p = join(DIR, f); const text = decode(readFileSync(p));
	if (f.startsWith('atp-') && f.endsWith('.csv') && !f.includes('ai-prompts')) {
		const rows = parseCsv(text); const h = rows[0].map((c) => c.trim());
		const iK = h.indexOf('Keyword'), iS = h.indexOf('Search Term'), iP = h.indexOf('Platform'), iV = h.indexOf('Search Vol.'), iC = h.indexOf('CPC (US$)'), iM = h.indexOf('Modifier Type');
		for (const r of rows.slice(1)) {
			const kw = (r[iK] || '').trim(); if (!kw) continue;
			if (!QW.test(kw) && r[iM] !== 'Questions') continue; // questions only
			if (OFFTOPIC.test(kw)) continue;
			const vol = parseVol(r[iV]);
			add({ question: kw.replace(/\s+/g, ' '), seed: (r[iS] || '').trim().toLowerCase(), source: 'atp', platforms: [r[iP]], volume: vol, competition: null, competition_index: null, cpc: r[iC] && r[iC] !== '-' ? parseFloat(r[iC]) : null, verified: vol > 0 });
		}
		files++;
	} else if (f.startsWith('atp-ai-prompts') && f.endsWith('.csv')) {
		const rows = parseCsv(text);
		for (const r of rows.slice(1)) { const q = (r[2] || '').trim(); if (!q) continue; add({ question: q, seed: (r[0] || '').trim(), source: 'atp-ai-prompts', platforms: ['AI Prompts'], volume: 0, competition: null, competition_index: null, cpc: null, verified: false }); }
		files++;
	} else if (f.startsWith('keyword-planner') && f.endsWith('.csv')) {
		const lines = text.split('\n'); const hi = lines.findIndex((l) => l.startsWith('Keyword\t') || l.startsWith('Keyword,'));
		if (hi < 0) continue;
		const delim = lines[hi].includes('\t') ? '\t' : ',';
		const rows = parseCsv(lines.slice(hi).join('\n'), delim); const h = rows[0].map((c) => c.trim());
		const iK = h.indexOf('Keyword'), iV = h.indexOf('Avg. monthly searches'), iC = h.indexOf('Competition'), iCI = h.indexOf('Competition (indexed value)');
		for (const r of rows.slice(1)) {
			const kw = (r[iK] || '').trim(); if (!kw || !QW.test(kw) || OFFTOPIC.test(kw)) continue;
			const vol = parseVol(r[iV]); const ci = parseInt(r[iCI], 10);
			add({ question: kw, seed: null, source: 'kp', platforms: ['Google'], volume: vol, competition: r[iC] || null, competition_index: Number.isFinite(ci) ? ci : null, cpc: null, verified: vol > 0 });
		}
		files++;
	}
}
// Keyword Planner volumes verify ATP phrasings that match exactly (already merged by key above).
let inserted = 0, updated = 0;
for (const rec of bank.values()) {
	const text = rec.question; const target = targetFor(text); const category = categoryFor(rec.seed, text);
	const verified = rec.volume > 0; const sc = score(rec.volume, rec.competition, target, verified);
	const key = norm(text); const platforms = [...rec.platforms].join(',');
	const res = await sql`INSERT INTO editorial_questions (question, question_key, seed, source, platforms, category, volume, competition, competition_index, cpc, score, verified, target_page)
		VALUES (${text}, ${key}, ${rec.seed}, ${rec.source}, ${platforms}, ${category}, ${rec.volume}, ${rec.competition}, ${rec.competition_index}, ${rec.cpc}, ${sc}, ${verified}, ${target})
		ON CONFLICT (question_key) DO UPDATE SET seed = COALESCE(editorial_questions.seed, EXCLUDED.seed), source = EXCLUDED.source, platforms = EXCLUDED.platforms, volume = EXCLUDED.volume, competition = EXCLUDED.competition, competition_index = EXCLUDED.competition_index, cpc = EXCLUDED.cpc, score = EXCLUDED.score, verified = EXCLUDED.verified, target_page = EXCLUDED.target_page, category = EXCLUDED.category, updated_at = now()
		RETURNING (xmax = 0) AS inserted`;
	if (res[0]?.inserted) inserted++; else updated++;
}
const [{ n }] = await sql`SELECT count(*)::int AS n FROM editorial_questions`;
const [{ v }] = await sql`SELECT count(*)::int AS v FROM editorial_questions WHERE verified`;
console.log(`files read: ${files} | questions in bank: ${n} (${v} with verified volume) | inserted ${inserted}, updated ${updated}`);
const top = await sql`SELECT question, volume, competition, score, category, target_page FROM editorial_questions WHERE status = 'new' ORDER BY score DESC LIMIT 12`;
for (const r of top) console.log(`  ${String(r.score).padStart(5)}  ${String(r.volume).padStart(5)}  ${(r.competition || '-').padEnd(6)}  ${r.category.padEnd(18)}  ${r.question}  ${r.target_page ? '→ ' + r.target_page : ''}`);
