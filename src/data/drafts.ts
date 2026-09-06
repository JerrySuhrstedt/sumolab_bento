import type { InsightArticle } from './insights';

/**
 * Article drafts awaiting Jerry's final approval. Each renders at /drafts/<slug>/
 * (noindexed, not in the sitemap, not linked from the blog index) so the exact
 * live layout can be reviewed. On final approval the object moves to insights.ts
 * and the URL becomes /blog/<slug>/.
 */
export const drafts: InsightArticle[] = [
];
