# Editorial routine (runs at 5:00 a.m. Phoenix, in the cloud)

Purpose: advance every article Jerry approved on sumolab.co/admin/ to the next stage.
Jerry is the single approver. This routine never approves anything; it only does Claude's work.

Prerequisites in the cloud environment: DATABASE_URL (Neon), FAL_KEY (fal.ai, optional
but expected), git push access to main. Pushing main triggers the Cloudflare deploy.

Steps, in order. Stop after step 6. Never do more than 2 outlines and 2 drafts per run.

1. `npm ci` (if node_modules is missing), then `node scripts/editorial-cli.mjs board`.
2. For each article in `published` with no live_url: the object should already be in
   `src/data/insights.ts` (Jerry's final approval is given on the board; the move from
   drafts.ts to insights.ts is Claude's job). If it is still in `src/data/drafts.ts`,
   move the object to the top of the `insights` array, set publishedAt to today, remove it
   from drafts.ts, add one natural link to it from its target_page if a sentence fits,
   then `node scripts/editorial-cli.mjs set-live <id> https://sumolab.co/blog/<slug>/ "Published by the routine."`
   Append a row to docs/editorial/published-log.csv.
   Indexing: the routine cannot drive Search Console. Leave indexing_requested_at empty; Claude
   requests indexing in an interactive session and stamps it with `indexing-requested <id>`, then
   `indexed <id>` once Search Console shows the URL on Google. The board shows which are pending.
3. For each article in `idea_approved` (max 2): run `node scripts/editorial-cli.mjs context <id>`,
   read docs/editorial/article-prompt.md and docs/editorial/voice-rules.md, write the Phase 1
   brief to a temp file, then `node scripts/editorial-cli.mjs outline <id> <file> "<one-line note>"`.
4. For each article in `outline_approved` (max 2): `start <id>`, then write the article per
   Phase 2 into `src/data/drafts.ts` (with targetKeyword, faqs, keyPoints), generate the hero
   with `node scripts/hero-image.mjs <slug> "<scene>"` (if FAL_KEY is missing, use
   `/photos/who-its-for-hero.jpg` and say so in the note), run `npm run build`, open
   `dist/client/drafts/<slug>/index.html` and confirm the Draft QA panel shows every check
   passing (search for the ✕ mark; fix and rebuild until none remain), then
   `draft-ready <id> https://sumolab.co/drafts/<slug>/ "<QA summary>"`.
5. If anything changed in the repo: `npm run build` must succeed, then commit with a clear
   message and `git push origin main`. Never force-push. Never edit files outside
   src/data/drafts.ts, src/data/insights.ts, public/blog/, the target landing page's one
   link sentence, and docs/editorial/published-log.csv.
6. Print a short summary: what moved, what was skipped and why.

Rules that override everything: no em dashes anywhere; no banned words; internal links only
to URLs that exist in dist/client after the build; never invent proof; never touch
wrangler.jsonc, package.json, or any page outside the list above.
