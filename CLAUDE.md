# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# SumoLab Bento — CLAUDE.md

## What this project is

A full rebuild of sumolab.co in a new bento-grid visual style (orange/black/white). **sumolab.co routes to this Cloudflare Workers deployment** — it is the live site. Do not edit the separate older Astro rebuild at `/Volumes/4TB ExtremePro/sumolab_website/`.

## Stack

- **Astro 7** static site, TypeScript strict mode
- **Cloudflare Workers** static asset deployment (NOT Cloudflare Pages)
- GitHub repo: `github.com/JerrySuhrstedt/sumolab_bento` (main branch)
- Live URLs: `https://sumolab.co` and `https://sumolab-bento.sumolab.workers.dev` (same deployment)

## Commands

```bash
# Development
npm run dev          # dev server at http://localhost:4321

# Ship
npm run build        # static build to dist/
npx wrangler deploy  # deploy to Cloudflare Workers (manual — no CI/CD)
git push origin main # push to GitHub after deploying
```

No GitHub → Cloudflare auto-deploy. The full release sequence is always: build → wrangler deploy → git push.

`npm run build` also catches TypeScript errors — there is no separate type-check command.

## Design system

**Colors**
- `--ink-950 #101012` — dark background
- `--paper-050 #F5F2EE` — warm white (page background)
- `--orange-500 #FC5434` — primary accent
- `--orange-600 #E2451F` — hover state
- `--white` — card surface (white)
- `--border` — card border (subtle)
- `--hairline` — divider lines (lighter than border)
- `--surface-sunken` — recessed tile background inside cards
- `--text-secondary` / `--text-muted` — body copy hierarchy
- Token source files live in `/tokens/` (colors.css, typography.css, spacing.css, effects.css)

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

- `src/layouts/Layout.astro` — root layout, SEO meta, OG tags, canonical URL, GA4 pixel, structured data injection, imports SiteHeader + SiteFooter
- `src/components/SiteHeader.astro` — dark header; transparent-on-hero mode via `transparentOnHero` prop
- `src/components/SiteFooter.astro` — 4-col footer driven by `navigation.ts` + `contact.ts`; LinkedIn/social links render conditionally (null = hidden)
- `src/components/PageHero.astro` — inner-page hero as bento card (NOT full-bleed; 1180px max-width, rounded, `min-height: 460px`). Props: `image`, `eyebrow`, `align` ("left"|"right"), `imagePosition`
- `src/components/Section.astro` — bento card wrapper for content sections. `tone` prop: `white` | `ink` | `accent` | `plain`
- `src/data/*.ts` — all page content; edit these for copy changes, never hardcode content in components

## Data files (content lives here)

| File | Controls |
|---|---|
| `founder.ts` | Jerry's bio, years of experience, expertise list, LinkedIn URL |
| `contact.ts` | Email, phone, location, social URLs (null = not rendered) |
| `services.ts` | Three services with full copy: fractional-cmo, fractional-marketing-director, fractional-ai-advisor |
| `testimonials.ts` | 20 testimonials with photoSrc; order matters — marketing endorsements first |
| `case-studies.ts` | 7 case studies with metrics |
| `insights.ts` | Blog/article metadata |
| `navigation.ts` | Nav links and footer nav groups |
| `approach.ts` | 5-phase explainer content |
| `cities.ts` | AZ cities for geo SEO pages |

## Homepage section order

`index.astro` renders: Hero → ProblemSolution → CaseStudyMetrics → BenefitsSection → ServicesOverview → TestimonialsSection → FounderFeatures → FAQCTA

Structured data (Schema.org `ProfessionalService`) is defined in `index.astro`, not `Layout.astro`.

## Testimonials carousel

`TestimonialsSection.astro` uses a cloned-tile seamless loop. Tile widths are set by JS (`setWidths()` reads `track.parentElement.offsetWidth`) — do NOT use CSS `calc()` on flex-basis, it causes zero-width tiles. Breakpoints: 3 tiles ≤ desktop, 2 ≤ 900px, 1 ≤ 640px.

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
- `/team/` — headshots for testimonials and founder (20 files; see `testimonials.ts` for filenames)
- `/insights/` — article images
- `/videos/hero-office-loop.mp4` — homepage hero background video
- `/logos/sumolab-bento.svg` — orange mark + black wordmark

## Analytics & SEO

- **GA4** pixel `G-MXVW8RH6LN` is in `src/layouts/Layout.astro` (fires on every page)
- `astro.config.mjs` must keep `site: 'https://sumolab-bento.sumolab.workers.dev'` or canonical URL generation throws
- Structured data URL in `index.astro` should be `https://sumolab-bento.sumolab.workers.dev`

## Rules

- **No unsolicited design decisions.** Jerry provides all style direction. Don't choose colors, layouts, or typography on your own initiative.
- **Do not edit `/Volumes/4TB ExtremePro/sumolab_website/`** — that is the old site, not this project.
- Font-size answers always in **rem**.
