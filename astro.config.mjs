// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { insights } from './src/data/insights.ts';
import { portfolioProjects } from './src/data/portfolio.ts';

// <lastmod> per URL, so Google can tell a rewritten page from one that has not
// moved in two years. Articles carry updatedAt/publishedAt; portfolio projects
// carry updatedAt seeded from git blame. Every other route is emitted without a
// lastmod on purpose. A date we cannot back up (a build timestamp, say) makes
// Google distrust and ignore lastmod across the whole sitemap.
// Portfolio pages whose canonical points at a case study. Listing a
// non-canonical URL in the sitemap sends Google a signal that contradicts the
// canonical tag, so they are filtered out below. The pages stay live.
const nonCanonicalPaths = new Set(
	portfolioProjects.filter((p) => p.caseStudySlug).map((p) => `/jerry/${p.slug}/`),
);

const lastmodByPath = new Map([
	...insights.map((a) => [`/blog/${a.slug}/`, `${a.updatedAt ?? a.publishedAt}T00:00:00.000Z`]),
	...portfolioProjects
		.filter((p) => p.updatedAt)
		.map((p) => [`/jerry/${p.slug}/`, `${p.updatedAt}T00:00:00.000Z`]),
]);

// https://astro.build/config
export default defineConfig({
	site: 'https://sumolab.co',
	// Astro's Cloudflare adapter auto-provisions a KV session driver unless
	// disabled. Nothing on the site uses Astro sessions, so this avoids
	// requiring a KV namespace binding that would otherwise go unused.
	session: false,
	integrations: [
		sitemap({
			// /trellivance-test/ is a static file in public/, so Astro never
			// discovers it as a route. It's a verified, working page (schema
			// and content already checked) — listing it here avoids touching
			// that file just to fix an unrelated sitemap gap.
			customPages: ['https://sumolab.co/trellivance-test/'],
			// Client report pages are unlisted — shared directly with one
			// client, never meant to be publicly discoverable or indexed.
			// /testing/ pages are scratch pages for trying things out, not
			// real site content.
			filter: (page) => !page.includes('/clients/') && !page.includes('/testing/') && !page.includes('/drafts/') && !page.includes('/admin/'),
			serialize: (item) => {
				const path = new URL(item.url).pathname;
				if (nonCanonicalPaths.has(path)) return undefined;
				const lastmod = lastmodByPath.get(path);
				return lastmod ? { ...item, lastmod } : item;
			},
		}),
	],
	prefetch: {
		defaultStrategy: 'hover',
		prefetchAll: true,
	},
	adapter: cloudflare(),
});
