# SumoLab Design System

## Company

SumoLab is a one-person fractional-CMO consultancy run by founder **Jerry Suhrstedt**, based in Chandler, Arizona. It sells senior marketing leadership — strategy, execution oversight, systems, and reporting — to established businesses (roughly $5M–$50M revenue) on a part-time/fractional basis, positioned against both full-time CMO hires and marketing agencies. Two service tiers: **Fractional CMO** (board-level strategy) and **Fractional Marketing Director** (hands-on operational leadership). There is one product surface: the marketing website. No app, dashboard, or other software product exists for this brand.

## Sources

- Live site: https://sumolab.co (fetched as rendered text: home, /about, /services — no Figma file or codebase was attached to this project)
- No design files, screenshots, or brand guidelines were provided by the user.

**Access limitation:** this environment could not fetch binary assets (images, the site's logo SVG, webfonts) from the live URL — only rendered text/markup came through. Everything visual in this system (colors, type pairing, layout rhythm, component styling) is an original interpretation of the brand's *positioning and copy*, not a pixel copy of the live site's actual design. The homepage UI kit reproduces the real copy verbatim but uses placeholder blocks for every photo and a plain-type wordmark in place of the real logo.

**Ask:** if you can supply the site's actual logo file, brand color hex values, font files, and/or photography, we can replace the placeholders and tune tokens to match exactly.

## Content fundamentals

- **Voice:** first person from Jerry ("Hi, I'm Jerry Suhrstedt"), second person to the reader ("you know what matters"). Direct, consultative, no fluff.
- **Tone:** confident and matter-of-fact, not hypey. Short declarative sentences used for emphasis: "Strategy. Execution. Design." Sentence fragments punctuate longer paragraphs: "In money. In time. In stress."
- **Casing:** Title Case on nav links, feature list items, and buttons (e.g. "Book a Strategy Call", "Fractional CMO Leadership"). Sentence case on headlines and body copy.
- **Structure:** every section opens with a small uppercase eyebrow label (The gap / Solution / Benefits / What clients say / About / Features / FAQs) then a serif headline, then plain-sans body copy. Consistent problem → solution → proof → CTA arc.
- **No emoji.** Stars (★) are the only decorative glyph, used strictly for testimonial ratings.
- **CTAs** always end in a trailing arrow: "Book a Strategy Call→", "Explore How We Help→", "About Jerry→".
- **No jargon padding.** Claims are backed by concrete distinctions (e.g. "Agencies execute tasks. I own the strategy and hold execution accountable.") rather than adjectives.

## Visual foundations

- **Colors:** deep navy (`--navy-800 #12233F`) as the primary/leadership color for header, hero, and dark sections; a single deep teal accent (`--teal-700 #0F6E5E`) for eyebrow labels, links, and secondary CTAs — evokes growth/clarity without leaning on generic SaaS blue-purple. Background is a warm paper white (`--paper-050`), not stark white, for an editorial/consultative feel rather than a tech-startup one. Gold (`--gold-500`) is reserved for star ratings only.
- **Type:** serif display face (**Newsreader**) for all headlines — conveys seniority/experience; clean grotesque sans (**Karla**) for body copy, UI labels, and buttons. Two families only, no third accent font.
- **Backgrounds:** flat color fields, alternating paper / white / sunken-paper / navy band by section — no gradients, no photographic full-bleed backgrounds, no repeating patterns or textures.
- **Imagery:** a small number of documentary-style photos (founder headshot, client headshots, one or two office/team photos) — not illustration, not stock-y abstract art. Treated as plain rectangles or circles, no filters or color grading implied by the copy.
- **Animation:** none implied by the source; component hover/press states below are the only motion this system defines.
- **Hover states:** solid buttons darken one step (`--color-primary-hover`, `--color-accent-hover`); outlined/secondary buttons fill with a faint sunken tint; ghost/text links underline and shift to the darker link color. No scale, no shadow pop.
- **Press states:** none beyond the hover darkening — no shrink/scale effect defined.
- **Borders:** thin 1px hairlines (`--color-border`) throughout; a slightly stronger border (`--color-border-strong`) on interactive inputs/outlined buttons.
- **Shadows:** very soft and low-contrast (`--shadow-sm` on resting cards, `--shadow-md`/`--shadow-lg` reserved for elevated/hover states) — never a hard drop shadow.
- **Corner radii:** small and consistent — 4px on buttons/inputs, 8px on cards, 14px for larger feature blocks, pill only for tags and the star/label style elements. No large "friendly" rounding.
- **Cards:** white surface, 1px hairline border, 8px radius, very soft shadow — no colored left-border accent (explicitly avoided as an AI-design cliché).
- **Layout:** centered content column (max ~980–1180px), generous vertical section padding (~90px), alternating background bands to separate sections instead of dividing rules.
- **Transparency/blur:** none used.

## Iconography

The source site uses no icon system beyond a checkmark-style bullet for feature lists and star glyphs (★) for ratings, plus a trailing arrow (→) on every CTA. **No icon font, SVG icon set, or icon library was found or provided.** This system does not introduce one; if a future need arises for a broader icon set, the recommendation is **Lucide** (CDN) for its neutral, single-weight stroke style that matches the brand's plain, unadorned type treatment. No emoji are used anywhere in the source content.

## Logo

No logo file could be retrieved (see Access limitation above — the site does serve `sumolab-white.svg`, but this environment could not fetch the binary). Per design-system policy, no logo was drawn or reconstructed. Every place a mark would appear instead renders the wordmark **"SumoLab"** in italic Newsreader. Replace `guidelines/brand-wordmark.card.html` and the wordmark spans in `ui_kits/website/Header.jsx` / `Footer.jsx` once a real logo file is supplied.

## Fonts

Newsreader and Karla are loaded from Google Fonts via `@import` in `tokens/typography.css` (no local font binaries were fetchable in this environment). Swap in self-hosted `@font-face` files if you need this system to work fully offline.

## Index

- `styles.css` — root stylesheet, imports everything below
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`
- `guidelines/` — foundation specimen cards (Colors ×3, Type ×2, Spacing ×2, Brand ×2)
- `components/core/` — `Button`, `Badge`, `Tag`
- `components/content/` — `Card`, `StarRating`, `Testimonial`, `Accordion`, `SectionHeading`
- `components/forms/` — `Input`, `Textarea`, `Select`
- `ui_kits/website/` — homepage recreation (`index.html` + section JSX + `README.md`)
- `thumbnail.html` — project tile
- `SKILL.md` — Claude Code–portable skill version of this system

## Intentional additions

Component list is a from-scratch standard set (no Figma/codebase inventory was available), scoped down to what the marketing site actually needs rather than a full app kit: `Button`, `Badge`, `Tag`, `Card`, `StarRating`, `Testimonial`, `Accordion`, `SectionHeading`, `Input`, `Textarea`, `Select`. No Tabs/Dialog/Toast/Tooltip/Switch — the source has no use for them.
