// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { insights } from './src/data/insights.ts';

// <lastmod> per article URL, so Google can tell a rewritten post from one that
// has not moved in two years. Articles are the only pages with a trustworthy
// modification date in the data; every other route is emitted without a
// lastmod on purpose. A date we cannot back up (a build timestamp, say) makes
// Google distrust and ignore lastmod across the whole sitemap.
const articleLastmod = new Map(
	insights.map((a) => [`/blog/${a.slug}/`, `${a.updatedAt ?? a.publishedAt}T00:00:00.000Z`]),
);

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
				const lastmod = articleLastmod.get(new URL(item.url).pathname);
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
