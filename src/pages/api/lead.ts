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

const NOTIFY_TO = 'jerry@sumolab.co';
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

	try {
		const projectLine = projectName ? `Project: ${projectName}\n` : '';
		await workerEnv.EMAIL.send({
			to: NOTIFY_TO,
			from: { email: NOTIFY_FROM, name: 'SumoLab Portfolio' },
			subject: 'Sumo Lab Form Submittal',
			text: `${projectLine}Name: ${name}\nEmail: ${email}\n\n${message}`,
			html: `${projectName ? `<p><strong>Project:</strong> ${projectName}</p>` : ''}<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>`,
		});
	} catch (err) {
		// The lead is already saved; a notification failure shouldn't fail the request.
		console.error('lead notification email failed', err);
	}

	return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
