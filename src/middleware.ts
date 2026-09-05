import { defineMiddleware } from 'astro:middleware';
import { isAuthed } from './lib/admin-auth';

// Gate everything under /admin except the login page. Runs only for SSR requests;
// prerendered pages never hit the admin branch, so the Cloudflare import stays lazy.
export const onRequest = defineMiddleware(async (context, next) => {
	const { pathname } = context.url;
	if (!pathname.startsWith('/admin')) return next();
	if (pathname === '/admin/login' || pathname === '/admin/login/') return next();
	const { env } = await import('cloudflare:workers');
	const password = (env as unknown as { ADMIN_PASSWORD?: string }).ADMIN_PASSWORD ?? '';
	if (await isAuthed(context.request.headers.get('cookie'), password)) return next();
	return context.redirect(`/admin/login/?next=${encodeURIComponent(pathname)}`, 302);
});
