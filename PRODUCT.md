# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 static site, TypeScript strict mode. Deployed to Cloudflare Workers (static asset serving, not Pages). Manual deploy via `wrangler deploy`. GitHub: `JerrySuhrstedt/sumolab_bento`.

## Users

**Primary: Business owner or CEO** at an established company ($5M–$50M revenue), overwhelmed by marketing chaos, vetting whether Jerry is the right hire. They are simultaneously the decision-maker and the one doing research.

**Secondary: VP or COO** delegating the initial search on behalf of the CEO. The site must speak to both with equal clarity — the CEO needs to feel understood, the delegate needs enough substance to pass it up the chain.

Both visitors arrive asking: *Is this person credible? Can they solve my specific problem? Is this worth a call?*

## Product Purpose

SumoLab offers fractional marketing leadership — Fractional CMO, Fractional Marketing Director, and Fractional AI Advisor — for established businesses that need senior marketing thinking without a full-time hire. The engagement is ongoing, embedded, and strategic, not a project or a retainer for execution work.

Success means a visitor books a strategy call.

## Positioning

The differentiator is the combination of **26 years of operator experience** (Jerry has built, run, and sold multiple companies) **paired with genuine AI implementation skill** — not AI hype, but applied AI knowledge that connects to real business outcomes. Neighboring agencies or fractional-CMO firms can claim strategy; they cannot truthfully claim both the operator track record and the AI depth together.

The headline proof: *AI won't fix your business. Understanding your business will — and I've spent a lifetime learning both.*

## Operating Context

- Visitors arrive skeptical of marketing consultants who oversell and underdeliver.
- The primary conversion action is booking a strategy call (HubSpot form or direct phone).
- Services are delivered remotely; business is based in Chandler, Arizona.
- Three service lines: Fractional CMO (board-level strategy), Fractional Marketing Director (execution leadership), Fractional AI Advisor (AI applied to business problems).
- City-level SEO pages exist for each service × city (Phoenix metro area).
- The site hosts an Insights blog and Case Studies section — evidence of real work.
- HubSpot is the CRM; contact form uses HubSpot embed.

## Capabilities and Constraints

- Static site — no server-side rendering, no dynamic data outside HubSpot form.
- All page content lives in `src/data/*.ts`; page templates consume it.
- No real social URLs yet (LinkedIn, Facebook, YouTube are unlinked placeholders).
- LinkedIn URL for founder: undecided.
- No pricing published on the site.

## Brand Commitments

- **Orange `#FC5434`** — primary brand accent, non-negotiable.
- **Flat design** — no shadows, no gradients on cards, no elevation metaphors.
- **Inter** — sole typeface, all weights.
- **Bento grid** — the layout language: rounded cards at `--radius-lg` (32px), dark ink or warm white fields, orange as the sole chromatic accent.
- **`--ink-950 #101012`** — dark field color; `--paper-050 #F5F2EE` — warm white field color.
- Voice: Direct, confident, operator-to-operator. No agency fluff, no jargon.

## Evidence on Hand

- Founder headshot: `/team/jerry-suhrstedt.png`
- Hero background video: `/videos/hero-office-loop.mp4` (Kling i2v animated from a real reference photo)
- Case studies: real client work, in `src/data/case-studies.ts`
- Testimonials: in `src/data/testimonials.ts`
- Insights/blog articles: in `src/data/insights.ts`
- Logo: `/logos/sumolab-bento.svg`
- No fabricated benchmarks, pricing, or licensing claims on the site.

## Product Principles

1. **Credibility through specificity** — every claim on the site should be traceable to a real outcome, real experience, or real client. Vague expertise language is anti-pattern.
2. **Operator, not vendor** — the voice and framing always position Jerry as someone who has been inside the problem, not someone selling a solution from outside.
3. **AI as applied judgment, not a feature** — AI capability is presented as knowing where to aim it, not as a tool list or tech stack.
4. **One CTA, repeated** — the entire site funnels toward a single action: book a strategy call.
5. **Earned simplicity** — the bento grid should feel confident and spare, not minimal for its own sake. Every section earns its space.
