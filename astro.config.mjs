// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

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
			filter: (page) => !page.includes('/clients/') && !page.includes('/testing/'),
		}),
	],
	prefetch: {
		defaultStrategy: 'hover',
		prefetchAll: true,
	},
	adapter: cloudflare(),
});
