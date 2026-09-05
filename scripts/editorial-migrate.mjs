// Creates the editorial tables in the Neon database. Idempotent.
// Usage: node scripts/editorial-migrate.mjs   (reads DATABASE_URL from .dev.vars)
import { readFileSync } from 'node:fs';
import { neon } from '@neondatabase/serverless';

const vars = Object.fromEntries(
	readFileSync('.dev.vars', 'utf8').split('\n').filter((l) => l.includes('=')).map((l) => {
		const i = l.indexOf('=');
		return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, '')];
	}),
);
const sql = neon(vars.DATABASE_URL);

await sql`CREATE TABLE IF NOT EXISTS editorial_questions (
	id SERIAL PRIMARY KEY,
	question TEXT NOT NULL,
	question_key TEXT NOT NULL UNIQUE,
	seed TEXT,
	source TEXT,
	platforms TEXT,
	category TEXT,
	volume INTEGER NOT NULL DEFAULT 0,
	competition TEXT,
	competition_index INTEGER,
	cpc NUMERIC,
	score NUMERIC NOT NULL DEFAULT 0,
	verified BOOLEAN NOT NULL DEFAULT false,
	target_page TEXT,
	status TEXT NOT NULL DEFAULT 'new',
	created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
)`;
await sql`CREATE INDEX IF NOT EXISTS editorial_questions_score_idx ON editorial_questions (score DESC)`;
await sql`CREATE INDEX IF NOT EXISTS editorial_questions_status_idx ON editorial_questions (status)`;

await sql`CREATE TABLE IF NOT EXISTS editorial_articles (
	id SERIAL PRIMARY KEY,
	question_id INTEGER REFERENCES editorial_questions(id) ON DELETE SET NULL,
	subject TEXT NOT NULL,
	working_title TEXT NOT NULL,
	target_keyword TEXT,
	category TEXT,
	target_page TEXT,
	slug TEXT,
	status TEXT NOT NULL DEFAULT 'proposed',
	outline TEXT,
	notes TEXT,
	draft_url TEXT,
	live_url TEXT,
	created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
	idea_approved_at TIMESTAMPTZ,
	outline_approved_at TIMESTAMPTZ,
	draft_ready_at TIMESTAMPTZ,
	published_at TIMESTAMPTZ
)`;
await sql`CREATE INDEX IF NOT EXISTS editorial_articles_status_idx ON editorial_articles (status)`;

await sql`CREATE TABLE IF NOT EXISTS editorial_events (
	id SERIAL PRIMARY KEY,
	article_id INTEGER NOT NULL REFERENCES editorial_articles(id) ON DELETE CASCADE,
	from_status TEXT,
	to_status TEXT NOT NULL,
	note TEXT,
	actor TEXT NOT NULL DEFAULT 'jerry',
	created_at TIMESTAMPTZ NOT NULL DEFAULT now()
)`;

const t = await sql`SELECT table_name FROM information_schema.tables WHERE table_name LIKE 'editorial_%' ORDER BY 1`;
console.log('tables:', t.map((r) => r.table_name).join(', '));
