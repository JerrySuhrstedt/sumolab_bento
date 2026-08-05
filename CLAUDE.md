# SumoLab Bento — CLAUDE.md

## What this project is

A full rebuild of sumolab.co in a new bento-grid visual style (orange/black/white). Lives here, reviewed here — **do not touch the live sumolab.co site or the separate Astro rebuild at `/Volumes/4TB ExtremePro/sumolab_website/`.**

## Stack

- **Astro 7** static site, TypeScript strict mode
- **Cloudflare Workers** static asset deployment (NOT Cloudflare Pages)
- GitHub repo: `github.com/JerrySuhrstedt/sumolab_bento` (main branch)
- Live URL: `https://sumolab-bento.sumolab.workers.dev`

## Deploy

```bash
cd "/Volumes/4TB ExtremePro/sumolab bento"
npm run build
npx wrangler deploy
```

No GitHub → Cloudflare auto-deploy. All deploys are manual via wrangler.

## Design system

**Colors**
- `--ink-950 #101012` — dark background
- `--paper-050 #F5F2EE` — warm white
- `--orange-500 #FC5434` — primary accent
- `--orange-600 #E2451F` — hover state
- Token files live in `/tokens/` (colors.css, typography.css, spacing.css, effects.css)

**Typography**
- Display/UI: **Poppins** 600/700 (via Google Fonts)
- Body: **IBM Plex Sans** 400/500 (via Google Fonts)
- Always answer font-size questions in **rem**, not px (base 16px)

**Radii**
- `--radius-sm` 16px — buttons, inputs
- `--radius-md` 24px — small tiles
- `--radius-lg` 32px — large cards
- Pill (999px) — badges

**No shadows.** Flat color fields only.

## Architecture

- `src/layouts/Layout.astro` — root layout, SEO, canonical URL, imports SiteHeader + SiteFooter
- `src/components/SiteHeader.astro` — dark header, transparent-on-hero mode via `transparentHeader` prop
- `src/components/SiteFooter.astro` — 4-col footer, driven by `navigation.ts` + `contact.ts`
- `src/components/PageHero.astro` — inner-page hero as bento card (NOT full-width; constrained to 1180px, rounded)
- `src/components/Section.astro` — bento card wrapper for content sections (tones: white/ink/accent/plain)
- `src/data/*.ts` — all page content (navigation, contact, founder, testimonials, services, case-studies, insights, cities)

## Inner-page heroes

Use `PageHero.astro`, not a full-bleed section. It renders a rounded bento card constrained to 1180px max-width with `min-height: 460px`. Props: `image`, `eyebrow`, `align` ("left"|"right"), `imagePosition`.

## Global CSS utilities (`src/styles/global.css`)

`.page-h1`, `.page-h2`, `.page-h3` — shared heading styles  
`.eyebrow-label` — orange uppercase label with dot  
`.lede` — body lead paragraph  
`.dot-list` — orange-dot bullet list  
`.two-col`, `.grid-2`, `.grid-3` — column grid layouts  
`.divider-rows` — stacked rows with top-border dividers  
`.card-cta-row` — flex row for card CTA + heading combos

## Public assets

- `/photos/` — page hero/section photos
- `/team/` — team headshots (jerry-suhrstedt.png, alek-synkevych.jpg, etc.)
- `/insights/` — article images
- `/videos/hero-office-loop.mp4` — homepage hero video
- `/logos/sumolab-bento.svg` — orange mark + black wordmark

## Rules

- **No unsolicited design decisions.** Jerry provides all style direction. Don't choose colors, layouts, or typography on your own initiative.
- **Do not touch sumolab.co** or `/Volumes/4TB ExtremePro/sumolab_website/`.
- Font-size answers always in **rem**.
- astro.config.mjs must have `site` set or canonical URL generation throws — currently `https://sumolab-bento.sumolab.workers.dev`.
