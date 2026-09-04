# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# SumoLab Bento: CLAUDE.md

## What this project is

A full rebuild of sumolab.co in a new bento-grid visual style (orange/black/white). **sumolab.co routes to this Cloudflare Workers deployment**: it is the live site. Do not edit the separate older Astro rebuild at `/Volumes/4TB ExtremePro/sumolab_website/`.

## Stack

- **Astro 7** static site, TypeScript strict mode
- **Cloudflare Workers** via `@astrojs/cloudflare` (NOT Cloudflare Pages). Everything is prerendered except one SSR route, `src/pages/api/lead.ts` (`export const prerender = false`). `session: false` in `astro.config.mjs` so no KV binding is needed.
- GitHub repo: `github.com/JerrySuhrstedt/sumolab_bento` (main branch)
- Live URLs: `https://sumolab.co` and `https://sumolab-bento.sumolab.workers.dev` (same deployment)

## Commands

```bash
npm run dev            # dev server at http://localhost:4321 (stale daemon: npx astro dev stop)
npm run build          # astro build, then postbuild prepends trailing-slash 308 rules to dist/client/_redirects
npx wrangler deploy --config dist/server/wrangler.json   # deploy the adapter-generated config
git push origin main   # also triggers a Workers Builds deploy (same command as above)
```

`npm run build` also catches TypeScript errors. There is no separate type-check command.

## Deploy (read before shipping)

- **Two valid paths, same result.** (1) `git push origin main`: Cloudflare Workers Builds runs `npm run build` then `npx wrangler deploy --config dist/server/wrangler.json`. (2) Direct: `npm run build && npx wrangler deploy --config dist/server/wrangler.json`, then push so the repo matches production. Use the direct path to verify before the push lands. Anything pushed to main goes live.
- **Root `wrangler.jsonc` must never contain `main`.** The adapter writes the real entry point into `dist/server/wrangler.json`; a `main` in the root config breaks `astro build`. Always deploy with `--config dist/server/wrangler.json`, never bare `wrangler deploy`.
- **Bindings** live in root `wrangler.jsonc`: `send_email: [{ name: "EMAIL" }]`, `compatibility_flags: ["nodejs_compat"]`. Env access is `import { env } from 'cloudflare:workers'` (Astro v6+), not `Astro.locals.runtime.env`.
- **Secrets:** `DATABASE_URL` (Neon, table `portfolio_leads`) is set with `npx wrangler secret put`; the local copy is `.dev.vars` (gitignored). Never commit the connection string.
- **Email** sends from `notify@notify.sumolab.co` (Cloudflare Email Sending on the `notify` subdomain so the apex SPF is untouched). Notifications go to jerry@sumolab.co, subject "Sumo Lab Form Submittal".
- **Redirects:** hand-written rules live in `public/_redirects`. `scripts/trailing-slash-redirects.mjs` runs as `postbuild` and prepends one 308 rule per prerendered page (135 as of 2026-09-04) so `/path` answers 308, not Cloudflare's default 307. Keep static rules above the `/insights/*` splat rule: rules placed after it stop being applied past roughly the 113th. Supported status codes are 301, 302, 303, 307, 308 (no 410).
- **Local production check:** `npx wrangler dev --config dist/server/wrangler.json --port 8787`, then curl or headless Chrome (`--virtual-time-budget=8000 --window-size=1400,H --screenshot=...`), then `pkill -f "wrangler dev"`. Screenshots against `astro dev` come back blank.
- **After deploy,** verify with curl. The first ten seconds can still serve the previous version. Cache purge needs an API token with purge scope; the wrangler login does not have it.

## Design system

**Colors**
- `--ink-950 #101012`: dark background
- `--paper-050 #F5F2EE`: warm white (page background)
- `--orange-500 #FC5434`: primary accent
- `--orange-600 #E2451F`: hover state
- `--white`: card surface (white)
- `--border`: card border (subtle)
- `--hairline`: divider lines (lighter than border)
- `--surface-sunken`: recessed tile background inside cards
- `--text-secondary` / `--text-muted`: body copy hierarchy
- Token source files live in `/tokens/` (colors.css, typography.css, spacing.css, effects.css)

**Typography**
- Display/UI: **Poppins** 600/700 (via Google Fonts)
- Body: **IBM Plex Sans** 400/500 (via Google Fonts)
- Always answer font-size questions in **rem**, not px (base 16px)

**Radii**
- `--radius-sm` 16px: buttons, inputs
- `--radius-md` 24px: small tiles
- `--radius-lg` 32px: large cards
- Pill (999px): badges

**No shadows.** Flat color fields only.

## Architecture

- `src/layouts/Layout.astro`: root layout, SEO meta, OG tags, canonical URL, GA4 pixel, structured data injection, imports SiteHeader + SiteFooter
- `src/components/SiteHeader.astro`: dark header; transparent-on-hero mode via `transparentOnHero` prop
- `src/components/SiteFooter.astro`: 4-col footer driven by `navigation.ts` + `contact.ts`; LinkedIn/social links render conditionally (null = hidden)
- `src/components/PageHero.astro`: inner-page hero as bento card (NOT full-bleed; 1180px max-width, rounded, `min-height: 460px`). Props: `image`, `eyebrow`, `align` ("left"|"right"), `imagePosition`
- `src/components/Section.astro`: bento card wrapper for content sections. `tone` prop: `white` | `ink` | `accent` | `plain`
- `src/components/LeadForm.astro`: sitewide lead form, posts JSON to `/api/lead`. Optional props: `defaultMessage` (hides the textarea), `downloadHref`/`downloadLabel` (gated download shown on success), `buttonLabel`, `projectSlug`/`projectName`
- `src/pages/api/lead.ts`: the one SSR route: inserts into Neon `portfolio_leads`, emails Jerry via the EMAIL binding
- `src/data/*.ts`: all page content; edit these for copy changes, never hardcode content in components

## Data files (content lives here)

| File | Controls |
|---|---|
| `founder.ts` | Jerry's bio, years of experience, expertise list, LinkedIn URL |
| `contact.ts` | Email, phone, location, social URLs (null = not rendered) |
| `services.ts` | Three services with full copy: fractional-cmo, fractional-marketing-director, fractional-ai-advisor |
| `testimonials.ts` | 20 testimonials with photoSrc; order matters: marketing endorsements first |
| `case-studies.ts` | 7 case studies with metrics |
| `insights.ts` | Blog/article metadata |
| `navigation.ts` | Nav links and footer nav groups |
| `approach.ts` | 5-phase explainer content |
| `cities.ts` | AZ cities for geo SEO pages |

## Homepage section order

`index.astro` renders: Hero → ProblemSolution → CaseStudyMetrics → BenefitsSection → ServicesOverview → TestimonialsSection → FounderFeatures → FAQCTA

Structured data (Schema.org `ProfessionalService`) is defined in `index.astro`, not `Layout.astro`.

## Testimonials carousel

`TestimonialsSection.astro` uses a cloned-tile seamless loop. Tile widths are set by JS (`setWidths()` reads `track.parentElement.offsetWidth`): do NOT use CSS `calc()` on flex-basis, it causes zero-width tiles. Breakpoints: 3 tiles ≤ desktop, 2 ≤ 900px, 1 ≤ 640px.

## Global CSS utilities (`src/styles/global.css`)

`.page-h1`, `.page-h2`, `.page-h3`: shared heading styles  
`.eyebrow-label`: orange uppercase label with dot  
`.lede`: body lead paragraph  
`.dot-list`: orange-dot bullet list  
`.two-col`, `.grid-2`, `.grid-3`: column grid layouts  
`.divider-rows`: stacked rows with top-border dividers  
`.card-cta-row`: flex row for card CTA + heading combos

## Public assets

- `/photos/`: page hero/section photos
- `/team/`: headshots for testimonials and founder (20 files; see `testimonials.ts` for filenames)
- `/insights/`: article images
- `/videos/hero-office-loop.mp4`: homepage hero background video
- `/logos/sumolab-bento.svg`: orange mark + black wordmark

## Analytics & SEO

- **GA4** pixel `G-MXVW8RH6LN` is in `src/layouts/Layout.astro` (fires on every page)
- `astro.config.mjs` must keep `site: 'https://sumolab-bento.sumolab.workers.dev'` or canonical URL generation throws
- Structured data URL in `index.astro` should be `https://sumolab-bento.sumolab.workers.dev`

## SEO Keyword Targets (as of 2026-09-04, from Google Keyword Planner)

Source data: Jerry's Keyword Planner export (US, Aug 2025 to Jul 2026), parsed to
`Jerry-AI-Context/03-projects/sumolab/sumolab-keyword-analysis_09-04-2026.csv`.
One primary keyword per page: exact phrase in title tag, H1, first sentence, at
least one H2/H3, and the meta description.

| Keyword (monthly US searches) | Primary page |
|---|---|
| `fractional CMO` (2,900) + `part-time CMO` (390) + `outsourced CMO` (260) | `/services/fractional-cmo/` |
| `fractional marketing director` | `/services/fractional-marketing-director/` |
| `AI consultant for small business` (590) + `small business AI consultant` (170) + `AI marketing consultant` | `/services/fractional-ai-advisor/` |
| `fractional CMO near me` | `/fractional-cmo-near-me/` |
| `marketing consultant for small business` (590) | `/marketing-consultant-for-small-business/` |
| `marketing for home builders` / `home builder marketing` (320 each) | `/marketing-for-home-builders/` |
| `marketing for construction companies` (590) + `contractor lead generation` (320) | `/marketing-for-construction-companies/` |
| `marketing for remodelers` (320) | `/marketing-for-remodelers/` |
| `marketing strategy for small business` (1,300) + `marketing plan for a small business` (720) | `/blog/marketing-strategy-for-a-small-business/` |
| `marketing manager vs marketing director` (70, competition 0) | `/blog/marketing-manager-vs-marketing-director/` |
| `AI usage policy template` (70) | `/blog/ai-usage-policy-template-small-business/` (gated .docx) |
| `AI for contractors` (110) | `/blog/ai-for-contractors/` |
| `AI training for employees` (320) | section + FAQ on `/services/fractional-ai-advisor/` |

**Do NOT target** (zero search volume): fractional CMO Arizona, fractional CMO Phoenix,
fractional CMO Scottsdale, marketing consultant Chandler AZ, AI marketing consultant
Arizona, fractional AI advisor, fractional CMO $5M business, AI strategy for small
business, and the question-phrased hiring terms ("how to hire a fractional CMO").
Not worth chasing: HVAC/plumbing marketing (bids over $100), "how to get more customers".

**Content rules for every page and article:** no em dashes; keyword in H1, first
sentence, and an H2/H3; no banned words (delve, testament, beacon, revolutionize,
moreover, furthermore, tapestry, crucial, paramount, "in today's digital age");
internal links resolve to real pages; FAQPage schema on landing pages.

## Rules

- **No unsolicited design decisions.** Jerry provides all style direction. Don't choose colors, layouts, or typography on your own initiative.
- **Do not edit `/Volumes/4TB ExtremePro/sumolab_website/`**: that is the old site, not this project.
- Font-size answers always in **rem**.
