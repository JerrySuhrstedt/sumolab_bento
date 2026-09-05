import type { InsightArticle } from './insights';

/**
 * Article drafts awaiting Jerry's final approval. Each renders at /drafts/<slug>/
 * (noindexed, not in the sitemap, not linked from the blog index) so the exact
 * live layout can be reviewed. On final approval the object moves to insights.ts
 * and the URL becomes /blog/<slug>/.
 */
export const drafts: InsightArticle[] = [
	{
		slug: "remodeler-marketing-past-clients",
		imageSrc: "/blog/remodeler-marketing-past-clients.jpg",
		title: "Remodeler Marketing: Your Past Clients Are the Lead Source You Keep Ignoring",
		seoTitle: "Remodeler Marketing: Start With Your Past Clients",
		category: "Marketing & Growth",
		publishedAt: "2026-09-08",
		targetKeyword: "remodeler marketing",
		excerpt:
			"Remodeler marketing that works starts with the clients you already have: the annual touch, the review ask, the photo habit, and two numbers that prove it.",
		body: [
			"A remodeler with 300 finished jobs has 300 people who already trusted them with a six-figure check. Most remodeler marketing ignores every one of them. It buys ads to find strangers instead.",
			"I spent 16 years in home building and founded three construction companies. I have watched good remodelers spend $4,000 a month on ads while a spreadsheet of past clients sat untouched in a drawer. This is the case for opening the drawer first.",
			`<h3>What is the best marketing for a remodeling company?</h3>`,
			"The best remodeler marketing works the clients you already have before it buys new ones. Photograph every finished job, ask for the review at the walkthrough, keep an annual touch with every past client, and put the proof on Google and your website. Paid traffic comes after that, aimed at your own ZIP codes.",
			`<h3>Why remodeler marketing keeps buying strangers</h3>`,
			"Referrals built your business. They also arrive in bunches, or not at all. So when a slow quarter hits, the instinct is to buy traffic, and the agency you call is happy to sell it. Agencies sell what they do. Ads are what they do. The cheapest lead source you own never gets a line item, because nobody is paid to work it.",
			"The cost of that shows up in the quoting. You end up bidding against two other remodelers for a homeowner who found all three of you on a list. That homeowner has no reason to trust you over the other two. A past client's neighbor does.",
			`Buying strangers can work when there is a story behind it. When <a href="/jerry/addaroom/">AddaRoom</a>, a Seattle remodeler, wanted to grow its home-additions work, we built the whole campaign on one trend: adult kids moving back in with their parents. It worked because it gave people a reason to call, not because of the budget. Without the story, the same spend buys quotes to compare.`,
			`<h3>The past-client list is a lead source, not a Christmas card list</h3>`,
			"Three systems, each with a date on it. None of them is a hope.",
			"<strong>The annual touch.</strong> One email or one call a year, per client, with one useful thing in it. A photo of their own project a year later. A reminder to reseal the grout before winter. A before-and-after from a job two streets over. Not a discount. You are not a mattress store.",
			"<strong>The repeat-project math.</strong> The kitchen this year becomes the primary bath in three years and the addition when the kids get older. A second project with a client you already know closes at a fraction of what a new lead costs, and it never goes out to bid. Put a follow-up date on every finished job before you close the file.",
			"<strong>The referral ask, at the right moment.</strong> Not \"if you know anyone.\" Ask at the final walkthrough, when they are standing in the finished kitchen, and again 90 days later when they have lived in it. Be specific: \"Who on your street has been talking about a remodel?\" The general ask gets a polite nod. The specific one gets a name.",
			`<h3>Email marketing for past remodeling clients that people actually open</h3>`,
			"The list matters. The platform does not. Any email tool that can hold 300 names and send one message a quarter is enough, so pick whichever one your office already knows.",
			"What goes in the email: a photo of a finished project, one seasonal maintenance item, and a line that says you are booking for the season after next. That is the whole thing. What does not go in: promotions, a newsletter about your team, anything with the word \"exclusive\" in it. Past clients open email from the person who built their kitchen. They delete email from a marketing department.",
			"Send it from your name, not the company name. Reply to every response yourself, the same day. Half the value of the annual touch is the reply that says \"funny you should ask.\"",
			`<h3>Reviews and photos: the two habits that compound</h3>`,
			"Ask for the review at the walkthrough, every time, while the homeowner is standing in the result. Google first, because that is where the next homeowner with a budget is searching. Houzz second if you do design-forward work. Recency beats volume. Eleven reviews from four years ago tell Google you stopped.",
			`Photograph every job, before and after, in daylight, before the furniture goes back. One shoot becomes the review request, the social post, the website gallery, and next year's annual-touch email. The gallery is the sales tool. When we built the website for <a href="/jerry/design-build-nw/">Design Build NW</a>, the whole site was designed to walk a homeowner from the finished photo to \"here is how we do it.\" The photos did the selling. The copy just kept them moving.`,
			"Instagram and Facebook are portfolios, not lead sources, for most remodelers. Post the photos there because it costs nothing. Do not expect the phone to ring from it.",
			`<h3>Local SEO for a remodeler, in the order it matters</h3>`,
			"First, the Google Business Profile: the right primary category, real service areas, and a new project photo every week. That single habit moves you up the map pack faster than anything an agency will sell you.",
			"Second, a project gallery on your website with a short write-up per job: the problem the homeowner had, what you did, what it cost in round numbers if you are brave. Those pages rank for \"kitchen remodel\" plus your town without anyone writing a blog post about kitchen trends.",
			"Third, service-area pages, but only for towns you actually serve and only if you have finished work there to show. A page for a town you have never worked in is a page Google ignores and a homeowner sees through.",
			"That is the list. Blogging for keywords, directory listings, and press releases are not on it.",
			`<h3>How to track whether remodeler marketing is working</h3>`,
			`Two numbers. Booked design consultations and signed design agreements, by source. Not likes, not clicks, not impressions. A one-line note in your CRM per lead, saying where it came from, is all the tracking you need. Review the two numbers monthly. When a source stops producing signed agreements, cut it. The same two-number rule runs the whole <a href="/blog/marketing-strategy-for-a-small-business/">marketing strategy for a small business</a>; a remodeler just has fewer sources to count.`,
			`<h3>Who owns this in your company</h3>`,
			"Every item above is simple. The annual email, the review ask, the photo habit, the profile update. None of it is hard, and none of it happens without one person accountable for it every week. Right now that person is you, and you are between a change order and a subcontractor who did not show.",
			`If you are a remodeler in the $2M to $20M range, the <a href="/milliondollarlp/">part-time marketing director offer</a> exists for exactly this gap: a senior person who runs the list, the reviews, and the one paid channel on a set number of hours a month. Larger firms usually fit a <a href="/services/fractional-marketing-director/">fractional marketing director</a> engagement. Either way, the plan on the <a href="/marketing-for-remodelers/">remodeler marketing page</a> is the one we would run.`,
			"Pull the past-client list this week. Send one email, from you, with one photo in it. That costs nothing, and it is the one job in remodeler marketing that pays before the month is out.",
		],
		keyPoints: [
			"Work the clients you already have before you buy new ones. A remodeler with 300 finished jobs has 300 referral sources and a repeat-project list.",
			"Three systems with dates on them: the annual touch, the repeat-project follow-up, and the referral ask at the walkthrough and again at 90 days.",
			"Reviews and photos compound. Ask at the walkthrough, Google first, and shoot every job before the furniture goes back.",
			"Local SEO in order: Google Business Profile with weekly photos, a project gallery with a write-up per job, service-area pages only where you have finished work.",
			"Track two numbers by source: booked design consultations and signed design agreements. Cut what stops producing the second one.",
		],
		faqs: [
			{
				question: "How do I create an email campaign for past remodeling clients?",
				answer:
					"Keep it to one email a quarter at most, sent from your own name. Include a photo of a finished project, one seasonal maintenance tip, and a line saying which season you are booking for. Skip discounts and newsletters. Reply personally to every response the same day, because the replies are where the next project comes from.",
			},
			{
				question: "Which social media platforms work best for showcasing remodeling projects?",
				answer:
					"Instagram and Facebook, as portfolios rather than lead sources. Post the same before-and-after photos you shoot for Google and your website. Houzz is worth maintaining if you do design-forward work, since homeowners browse it with intent. Expect social media to support the phone call, not to make it.",
			},
			{
				question: "How do I get more online reviews for a remodeling company?",
				answer:
					"Ask at the final walkthrough, every time, while the homeowner is standing in the finished space, and send the Google link that day. Ask again at 90 days if they did not post. Google first, Houzz second. Recent reviews matter more than the total count, so a steady stream of new ones beats a big batch from years ago.",
			},
			{
				question: "How do I track ROI on remodeler marketing?",
				answer:
					"Count booked design consultations and signed design agreements by source, nothing else. Record where each lead came from in one line in your CRM, then review the two numbers monthly. A source that produces consultations but no signed agreements is not working, no matter what its clicks or impressions say.",
			},
		],
	},
];
