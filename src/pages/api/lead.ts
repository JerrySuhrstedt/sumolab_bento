import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { neon } from '@neondatabase/serverless';

export const prerender = false;

interface Env {
	DATABASE_URL: string;
	EMAIL: {
		send: (message: {
			to: string;
			from: { email: string; name?: string };
			subject: string;
			html: string;
			text: string;
		}) => Promise<unknown>;
	};
}

// Two recipients on purpose. Mail from notify.sumolab.co to jerry@sumolab.co
// leaves Cloudflare fine (queued, no bounce, no suppression) but never reaches
// the mailbox, because Google Workspace treats mail arriving from outside that
// claims to be from its own domain as spoofing. The gmail address is on a
// different domain and is verified to land in the inbox, so leads keep flowing
// while that Workspace policy is sorted out.
const NOTIFY_TO = ['jerry@sumolab.co', 'jerrysuhrstedt@gmail.com'];
const NOTIFY_FROM = 'notify@notify.sumolab.co';

function isValidEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const workerEnv = env as unknown as Env;

export const POST: APIRoute = async (context) => {
	let body: Record<string, unknown>;
	try {
		body = await context.request.json();
	} catch {
		return new Response(JSON.stringify({ ok: false, error: 'Invalid request body.' }), { status: 400 });
	}

	// Honeypot: bots fill every field, real users never see or fill this one.
	if (typeof body.company === 'string' && body.company.trim() !== '') {
		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	}

	const name = typeof body.name === 'string' ? body.name.trim() : '';
	const email = typeof body.email === 'string' ? body.email.trim() : '';
	const message = typeof body.message === 'string' ? body.message.trim() : '';
	const projectSlug = typeof body.projectSlug === 'string' ? body.projectSlug.trim() : null;
	const projectName = typeof body.projectName === 'string' ? body.projectName.trim() : null;
	const sourcePath = typeof body.sourcePath === 'string' ? body.sourcePath.trim() : null;

	if (!name || !email || !message) {
		return new Response(JSON.stringify({ ok: false, error: 'Name, email, and message are required.' }), { status: 400 });
	}
	if (!isValidEmail(email)) {
		return new Response(JSON.stringify({ ok: false, error: 'Enter a valid email address.' }), { status: 400 });
	}

	const sql = neon(workerEnv.DATABASE_URL);

	try {
		await sql`
			INSERT INTO portfolio_leads (name, email, message, project_slug, project_name, source_path)
			VALUES (${name}, ${email}, ${message}, ${projectSlug}, ${projectName}, ${sourcePath})
		`;
	} catch (err) {
		console.error('portfolio_leads insert failed', err);
		return new Response(JSON.stringify({ ok: false, error: 'Something went wrong saving your message. Please try again.' }), { status: 500 });
	}

	const projectLine = projectName ? `Project: ${projectName}\n` : '';
	const text = `${projectLine}Name: ${name}\nEmail: ${email}\n\n${message}`;
	const html = `${projectName ? `<p><strong>Project:</strong> ${projectName}</p>` : ''}<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>`;

	// Each recipient sends independently so one failing address cannot stop the other.
	for (const to of NOTIFY_TO) {
		try {
			const sent = await workerEnv.EMAIL.send({
				to,
				from: { email: NOTIFY_FROM, name: 'SumoLab Portfolio' },
				// The name keeps Gmail from threading every lead into one conversation,
				// which hides new ones behind a collapsed thread.
				subject: `Sumo Lab Form Submittal: ${name}`,
				text,
				html,
			});
			// Logged because send() resolves at queue time: a message can be accepted
			// here and still be dropped by the receiving server. `wrangler tail` is the
			// only place that distinction shows up.
			console.log('lead notification queued', to, JSON.stringify(sent ?? null));
		} catch (err) {
			// The lead is already saved; a notification failure shouldn't fail the request.
			console.error('lead notification email failed', to, err);
		}
	}

	return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
