import { neon } from '@neondatabase/serverless';

export interface WorkerEnv {
	DATABASE_URL: string;
	ADMIN_PASSWORD: string;
}

export async function getEnv(): Promise<WorkerEnv> {
	// Dynamic import so prerendered pages never touch the Cloudflare runtime at build time.
	const mod = await import('cloudflare:workers');
	return mod.env as unknown as WorkerEnv;
}

export async function db() {
	const { DATABASE_URL } = await getEnv();
	return neon(DATABASE_URL);
}

/** Editorial pipeline. Jerry is the single approver at every gate. */
export const STATUSES = [
	'proposed',
	'idea_approved',
	'outline_ready',
	'outline_approved',
	'in_progress',
	'draft_ready',
	'published',
	'rejected',
	'killed',
] as const;
export type Status = (typeof STATUSES)[number];

export const STATUS_LABEL: Record<Status, string> = {
	proposed: 'Idea proposed',
	idea_approved: 'Approved to outline',
	outline_ready: 'Outline ready for review',
	outline_approved: 'Approved to write',
	in_progress: 'Writing',
	draft_ready: 'Draft ready for final review',
	published: 'Published',
	rejected: 'Not approved',
	killed: 'Killed',
};

/** Board columns, left to right. Exits (rejected, killed) sit in a collapsed list. */
export const BOARD: { key: string; title: string; statuses: Status[] }[] = [
	{ key: 'ideas', title: '1. Ideas', statuses: ['proposed'] },
	{ key: 'outline', title: '2. Outline', statuses: ['idea_approved', 'outline_ready'] },
	{ key: 'writing', title: '3. Writing', statuses: ['outline_approved', 'in_progress'] },
	{ key: 'review', title: '4. Final review', statuses: ['draft_ready'] },
	{ key: 'live', title: '5. Published', statuses: ['published'] },
];

/** Actions Jerry can take from each status. Claude moves the Claude-only ones. */
export const ACTIONS: Record<Status, { to: Status; label: string; tone: 'go' | 'stop' | 'neutral'; who: 'jerry' | 'claude' }[]> = {
	proposed: [
		{ to: 'idea_approved', label: 'Approve idea', tone: 'go', who: 'jerry' },
		{ to: 'rejected', label: 'Not approved', tone: 'stop', who: 'jerry' },
	],
	idea_approved: [
		{ to: 'outline_ready', label: 'Outline is ready', tone: 'neutral', who: 'claude' },
		{ to: 'killed', label: 'Kill', tone: 'stop', who: 'jerry' },
	],
	outline_ready: [
		{ to: 'outline_approved', label: 'Approve outline, write it', tone: 'go', who: 'jerry' },
		{ to: 'idea_approved', label: 'Send outline back', tone: 'neutral', who: 'jerry' },
		{ to: 'killed', label: 'Kill', tone: 'stop', who: 'jerry' },
	],
	outline_approved: [
		{ to: 'in_progress', label: 'Start writing', tone: 'neutral', who: 'claude' },
		{ to: 'killed', label: 'Kill', tone: 'stop', who: 'jerry' },
	],
	in_progress: [
		{ to: 'draft_ready', label: 'Draft is ready', tone: 'neutral', who: 'claude' },
		{ to: 'killed', label: 'Kill', tone: 'stop', who: 'jerry' },
	],
	draft_ready: [
		{ to: 'published', label: 'Final approval, publish', tone: 'go', who: 'jerry' },
		{ to: 'in_progress', label: 'Send draft back', tone: 'neutral', who: 'jerry' },
		{ to: 'killed', label: 'Kill', tone: 'stop', who: 'jerry' },
	],
	published: [],
	rejected: [{ to: 'proposed', label: 'Reopen idea', tone: 'neutral', who: 'jerry' }],
	killed: [{ to: 'proposed', label: 'Reopen idea', tone: 'neutral', who: 'jerry' }],
};

export function isStatus(v: unknown): v is Status {
	return typeof v === 'string' && (STATUSES as readonly string[]).includes(v);
}

export const CATEGORIES = [
	'Marketing strategy',
	'Lead generation',
	'AI adoption',
	'Hiring and team',
	'Sales and CRM',
	'Industry',
	'Other',
] as const;

export interface Question {
	id: number;
	question: string;
	seed: string | null;
	source: string | null;
	platforms: string | null;
	category: string | null;
	volume: number;
	competition: string | null;
	competition_index: number | null;
	cpc: string | null;
	score: string;
	verified: boolean;
	target_page: string | null;
	status: string;
}

export interface Article {
	id: number;
	question_id: number | null;
	subject: string;
	working_title: string;
	target_keyword: string | null;
	category: string | null;
	target_page: string | null;
	slug: string | null;
	status: Status;
	outline: string | null;
	notes: string | null;
	draft_url: string | null;
	live_url: string | null;
	created_at: string;
	updated_at: string;
	idea_approved_at: string | null;
	outline_approved_at: string | null;
	draft_ready_at: string | null;
	published_at: string | null;
	indexing_requested_at: string | null;
	indexed_at: string | null;
}

export interface Event {
	id: number;
	article_id: number;
	from_status: string | null;
	to_status: string;
	note: string | null;
	actor: string;
	created_at: string;
}

export function slugify(s: string) {
	return s
		.toLowerCase()
		.replace(/['’]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 80);
}

const STAMP: Partial<Record<Status, string>> = {
	idea_approved: 'idea_approved_at',
	outline_approved: 'outline_approved_at',
	draft_ready: 'draft_ready_at',
	published: 'published_at',
};

/** Move an article to a new status and log the event. Returns the updated row. */
export async function transition(id: number, to: Status, note: string | null, actor = 'jerry') {
	const sql = await db();
	const [cur] = (await sql`SELECT id, status FROM editorial_articles WHERE id = ${id}`) as { id: number; status: Status }[];
	if (!cur) throw new Error('Article not found');
	const allowed = ACTIONS[cur.status].some((a) => a.to === to);
	if (!allowed) throw new Error(`Cannot move from ${cur.status} to ${to}`);
	const stamp = STAMP[to];
	if (stamp === 'idea_approved_at') await sql`UPDATE editorial_articles SET status = ${to}, idea_approved_at = now(), updated_at = now() WHERE id = ${id}`;
	else if (stamp === 'outline_approved_at') await sql`UPDATE editorial_articles SET status = ${to}, outline_approved_at = now(), updated_at = now() WHERE id = ${id}`;
	else if (stamp === 'draft_ready_at') await sql`UPDATE editorial_articles SET status = ${to}, draft_ready_at = now(), updated_at = now() WHERE id = ${id}`;
	else if (stamp === 'published_at') await sql`UPDATE editorial_articles SET status = ${to}, published_at = now(), updated_at = now() WHERE id = ${id}`;
	else await sql`UPDATE editorial_articles SET status = ${to}, updated_at = now() WHERE id = ${id}`;
	await sql`INSERT INTO editorial_events (article_id, from_status, to_status, note, actor) VALUES (${id}, ${cur.status}, ${to}, ${note}, ${actor})`;
	if (to === 'rejected' || to === 'killed') {
		await sql`UPDATE editorial_questions SET status = 'new', updated_at = now() WHERE id = (SELECT question_id FROM editorial_articles WHERE id = ${id})`;
	}
}

export function fmtDateTime(iso: string | null) {
	if (!iso) return '';
	return new Date(iso).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: 'America/Phoenix' }) + ' AZ';
}

export function fmtDate(iso: string | null) {
	if (!iso) return '';
	return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'America/Phoenix' });
}

export function fmtVol(n: number) {
	return n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K` : String(n);
}
