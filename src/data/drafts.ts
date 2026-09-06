import type { InsightArticle } from './insights';

/**
 * Article drafts awaiting Jerry's final approval. Each renders at /drafts/<slug>/
 * (noindexed, not in the sitemap, not linked from the blog index) so the exact
 * live layout can be reviewed. On final approval the object moves to insights.ts
 * and the URL becomes /blog/<slug>/.
 */
export const drafts: InsightArticle[] = [
	{
		slug: "what-is-an-ai-consultant",
		imageSrc: "/blog/what-is-an-ai-consultant.jpg",
		title: "What Is an AI Consultant, and Does a $5M Company Need One?",
		seoTitle: "What Is an AI Consultant? Does a $5M Company Need One",
		category: "Strategy & Leadership",
		publishedAt: "2026-09-06",
		targetKeyword: "what is an ai consultant",
		excerpt:
			"What is an AI consultant? Someone who decides where AI makes you money, then makes it happen and proves it. Four kinds use the title. One fits a $5M company.",
		body: [
			"If you are asking what is an AI consultant, here is the short version: someone you pay to decide where AI will actually make you money, then make it happen and prove it. That is the whole job. Most of what gets sold under the name is either a slide deck or a software subscription, and neither one decides anything.",
			"I spent a year rolling AI into a $50M manufacturer's marketing organization, then built a software product with the same tools by myself. That is the operator's version of the job, and it is the only version a company your size can use.",
			`<h3>What is an AI consultant?</h3>`,
			"An AI consultant helps a company decide where artificial intelligence belongs in its operations, implements the tools, trains the people who will use them, and measures the return. For a $5M to $50M company the job is business judgment first and technology second: finding the one or two places AI pays, not installing it everywhere.",
			`<h3>Four kinds of people use the title, and only one is for you</h3>`,
			"Search the phrase and you will get four very different animals wearing the same badge.",
			"<strong>The enterprise firm.</strong> Accenture-scale. Machine learning deployment, data platforms, six-figure engagements with a steering committee. They are excellent at what they do, and what they do starts at a size you are not.",
			"<strong>The technologist.</strong> Builds custom models and integrations. Tells you what is possible. Cannot tell you what is worth doing, because that requires knowing your margins, your crew capacity, and which customer pays on time.",
			"<strong>The tool reseller.</strong> Sells a subscription with the words \"AI consulting\" attached. The consulting is a demo. The deliverable is an invoice every month whether the tool changed anything or not.",
			"<strong>The operator.</strong> Has run a company. Decides, implements, trains, measures. Leaves when the return is proven and the team can run it. This is the one a small company can use, and it is the rarest of the four.",
			"You can now name what you were offered last month.",
			`<h3>What an AI consultant actually does for a company your size</h3>`,
			"Four steps, in order. Skip one and the project quietly dies, which is what happens to 95% of corporate AI pilots according to MIT's 2025 study.",
			"<strong>Maps where AI pays.</strong> A full read of the business: finance, operations, marketing, sales, HR. Not \"where could we use AI\" but \"where do people wait, retype, or guess.\" The answer is usually two places, and neither is the one the owner expected.",
			`<strong>Implements it inside the systems you already run.</strong> The CRM, the inbox, the forms, the books. Not a new tool with its own login. I wrote about the sequencing in <a href="/blog/ai-for-contractors/">AI for contractors</a>, and the rule holds for every trade: connect AI to where the customer data already lives.`,
			`<strong>Trains the people, not the org chart.</strong> At the manufacturer, the number that got attention was a 38% cut in content production time. The thing that made it happen was prompt libraries built for the specific job each person did, sitting where they already worked. Not a seminar. <a href="/blog/ai-marketing-org-to-solo-product/">The full story is here.</a>`,
			"<strong>Proves the return before scaling.</strong> Hours saved, response time, cost per output, before and after. If the first workflow does not show a number in 30 days, the second one does not get built.",
			`Those four steps are the same ones I list on the <a href="/services/fractional-ai-advisor/">AI advisor page</a>. They are not complicated. They are just rarely done in that order by someone who has to live with the result.`,
			`<h3>What an AI consultant costs, and what the alternative costs</h3>`,
			"An operator engagement runs in the same range as senior fractional marketing leadership: roughly $5,000 to $15,000 a month, scoped to hours, no long-term contract. Enterprise firms start at six figures and bring a team you will never meet.",
			"The expensive option is neither of those. It is the failed pilot: a subscription nobody cancels, six months of a skeptical team working around the tool, and an owner who now believes AI does not work for a company like his. That one costs more than any consultant, because it closes the door.",
			`<h3>Does a $5M company need an AI consultant?</h3>`,
			"Yes, if any of these are true. AI exists in pockets, a chatbot here and an automation there, with nobody connecting them to a plan. Leadership feels pressure to do something with AI and does not know where to point it. A pilot already died and nobody can say why.",
			"No, if the company has no real operations yet to apply it to, or if what you actually want is custom software built. That is a developer, and a good one will tell you so.",
			"The honest middle: most owners between $5M and $50M do not need forty hours a week of AI thinking. They need eight to fifteen, from someone who has carried a number, for as long as it takes to get two workflows earning their keep.",
			`<h3>Questions to ask before you engage an AI consultant</h3>`,
			"Five, and the answers sort the four kinds fast.",
			"Have you run a company? Show me one rollout and the number it produced. Who does the implementation, you or a team I will not meet? What will you tell me not to do? How will we measure return, and by when?",
			`A consultant who can answer all five in plain words is worth a second call. The general version of this list, for any marketing consultant, is on the <a href="/marketing-consultant-for-small-business/">consultant page</a>.`,
			`<h3>Where to start</h3>`,
			`Pick the one process where your people wait or retype the most. That is the first meeting. Before anyone touches a tool, set the account rule: company accounts for company data, training turned off. The <a href="/blog/ai-usage-policy-template-small-business/">AI usage policy template</a> takes twenty minutes to fill in and prevents the most common way these projects go wrong.`,
			"Then list the three most repetitive jobs in the company. Bring that list to the call. An operator will pick one and tell you what it should return in 30 days. A reseller will show you a demo.",
		],
		keyPoints: [
			"An AI consultant decides where AI pays, implements it in the systems you already run, trains the people, and proves the return. Judgment first, technology second.",
			"Four kinds use the title: the enterprise firm, the technologist, the tool reseller, and the operator. Only the operator is built for a $5M company.",
			"The expensive option is not the consultant. It is the failed pilot that convinces an owner AI does not work for a company his size.",
			"Ask five questions: have you run a company, show me one rollout and its number, who implements, what will you tell me not to do, how do we measure return.",
			"Start with the one process where people wait or retype the most, and set the company-account rule before anyone opens a tool.",
		],
		faqs: [
			{
				question: "What are the typical services of an AI strategy advisor?",
				answer:
					"Opportunity mapping across the business, a short starting plan, hands-on implementation inside existing systems, training built around specific jobs, and a before-and-after measurement of time, cost, and output. The good ones also tell you what not to automate, which is often the more valuable half of the advice.",
			},
			{
				question: "What questions should I ask before engaging an AI consultant?",
				answer:
					"Ask whether they have run a company, for one rollout with a number attached, who does the implementation, what they would tell you to stop doing, and how return will be measured and by when. A consultant who answers all five in plain language is an operator. One who answers with a demo is a reseller.",
			},
			{
				question: "How much does AI consulting cost for a small business?",
				answer:
					"An operator-level engagement typically runs $5,000 to $15,000 a month, scoped to a set number of hours with no long-term contract. Enterprise consulting firms start in six figures. The costliest option is a pilot that fails quietly and leaves the team convinced AI does not work for a company their size.",
			},
			{
				question: "What are the steps to engage an AI consultant for automating business processes?",
				answer:
					"List the three most repetitive jobs in the company, set the account rule so company data stays on company accounts, and have a working session on the business rather than the technology. From there the consultant picks one workflow, implements it, and reports a number in about 30 days before anything else gets built.",
			},
		],
	},
	{
		slug: "ai-integration-small-business",
		imageSrc: "/blog/ai-integration-small-business.jpg",
		title: "AI Integration for a Small Business: What to Connect First, and What to Leave Alone",
		seoTitle: "AI Integration for a Small Business: What to Connect First",
		category: "Systems & Automation",
		publishedAt: "2026-09-06",
		targetKeyword: "ai integration",
		excerpt:
			"AI integration for a small business is a sequencing problem. Connect AI to the four places your customer data already lives and it pays inside a month.",
		body: [
			"AI integration in a small business is a sequencing problem, not a shopping problem. Connect AI to the place your customer data already lives and it pays inside a month. Connect it to a chatbot on your homepage and you have bought a toy.",
			"I have done the rollout at a $50M manufacturer and built a CRM with these tools by hand. The order below is the order that worked, and the mistakes are the ones I watched people make with real budgets.",
			`<h3>What is AI integration for a small business?</h3>`,
			"AI integration means connecting an AI model to the systems your company already runs, so it can read, draft, summarize, and route work inside them: the CRM, the inbox, the forms, the accounting file. It is not a separate AI tool with its own login. The value comes from the connection, not the model.",
			`<h3>Why most AI integration projects start in the wrong place</h3>`,
			"The first thing a company buys is usually the most visible thing, because a vendor demoed it. A chatbot. A content generator. A dashboard with the word intelligent in the product name. Three months later there is a subscription, a distracted team, and no data that changed hands.",
			"MIT's Project NANDA found in 2025 that 95% of corporate AI pilots return nothing. Read the failures and they share a pattern. The AI sat next to the business instead of inside it. Nobody's Tuesday got shorter.",
			`<h3>Connect first: the four places your data already lives</h3>`,
			"Each of these produces a number you can measure in 30 days. Do them in this order.",
			`<strong>The CRM.</strong> Lead summaries, next-step drafts, stalled-deal flags. A rep opens a record and the last three touches are already summarized with a suggested next move. I built <a href="/jerry/chumley/">Chumley</a>, a simple sales CRM for one-person sales teams, on exactly this thesis. If you have no CRM, that is the first integration, and <a href="/blog/5-reasons-your-business-needs-a-crm/">here is why</a>.`,
			"<strong>The inbox.</strong> Triage and reply drafts for the shared inbox. Every inquiry gets a draft answer in your voice within minutes, and a person reads it before it goes out. Response time drops from two days to ten minutes. This one change wins more jobs than any ad you will run this year.",
			"The setup is smaller than it sounds. Ten example replies you have already written, a one-page note on what you never promise in writing, and a rule that a human clicks send. That is the whole training set. The tool does the typing. Your judgment stays in the loop, which is where it belonged in the first place.",
			"<strong>The forms and the phone.</strong> Every inquiry captured, classified, and routed. A web form or a missed call becomes a CRM record with a source, a summary, and an owner before anyone has looked at it. This is the capture-before-traffic rule applied to AI: fix the leak before you buy more water.",
			"<strong>The books.</strong> QuickBooks and Xero both have AI features now, and the question I get most is whether they are worth turning on. Yes, for two jobs: flagging transactions that do not fit the pattern, and a rolling cash forecast you actually read. Not for categorizing expenses you already categorize fine.",
			`<h3>Leave alone for now: three integrations that look good in the demo</h3>`,
			"<strong>The homepage chatbot.</strong> A bot that cannot book an appointment or quote a price is an obstacle. A form, a phone number, and a ten-minute human reply beat it every time.",
			"<strong>AI-generated project photos and stock creative.</strong> Customers hire you for real work. A fake kitchen or a fake crew on your site is the fastest way to lose the trust you spent a decade building, and people can tell.",
			"<strong>AI dashboards that restate the CRM.</strong> If the dashboard tells you what the CRM already tells you, with a summary paragraph on top, it is a subscription, not an integration.",
			"All three fail the same test: no data changes hands and no decision gets made faster.",
			`<h3>Google Workspace AI integration, and the account rule that matters more than the feature</h3>`,
			"Eight thousand people a month search for how to integrate AI into Google Workspace. The honest answer is that Gemini is already in it. The real question is which account it runs on.",
			`If your people use AI on personal Gmail accounts, your customer list is training somebody's model. Move company work to Business accounts, turn off data training, and write the rule down. The <a href="/blog/ai-usage-policy-template-small-business/">AI usage policy template</a> covers it in one page. That single decision matters more than any feature Google ships this year.`,
			`<h3>How to sequence AI integration: one connection, one number, thirty days</h3>`,
			"Pick the CRM or the inbox. Connect one workflow. Measure one number: hours saved per week, or minutes to first reply. Read it at 30 days. If it moved, add the next connection. If it did not, you learned something for the price of a month.",
			`This is the same structure that worked in the manufacturer rollout, and the same one I laid out in <a href="/blog/ai-for-contractors/">AI for contractors</a>: one job, one rule, then the next job. Companies that try to integrate everything at once integrate nothing.`,
			`<h3>Who owns AI integration in a company with no IT department</h3>`,
			"The owner, by default, at night, badly. That is not a criticism. It is the gap.",
			`Someone has to map the business, pick the first connection, build it into the tools people already use, train them on it, and read the number. That is the job of the <a href="/services/fractional-ai-advisor/">AI advisor engagement</a>, and it is most of what I do inside one.`,
			"Start today with a list. Write down every system that holds customer data: the CRM, the inbox, the forms, the books, the scheduling tool. Pick the one your people touch most. That is the first integration, and it should not take a quarter.",
		],
		keyPoints: [
			"AI integration means connecting AI to the systems you already run. The value is in the connection, not the model.",
			"Connect first, in order: the CRM, the inbox, the forms and phone, the books. Each produces a number in 30 days.",
			"Leave alone for now: homepage chatbots, AI-generated project photos, and dashboards that restate the CRM. No data changes hands.",
			"The Google Workspace question is really an account question. Company accounts, training off, rule written down.",
			"Sequence it: one connection, one number, thirty days, then the next. Integrating everything at once integrates nothing.",
		],
		faqs: [
			{
				question: "What AI integration features should I look for in a CRM?",
				answer:
					"Three that pay: automatic summaries of each contact's history, drafted next-step emails in your voice, and flags on deals that have gone quiet. Skip predictive scoring until you have a year of clean data. The feature matters less than whether your reps will open the CRM at all, so pick the one they will actually use.",
			},
			{
				question: "What are the best platforms for AI integration in business operations?",
				answer:
					"The ones you already pay for. Google Workspace and Microsoft 365 both ship AI inside mail, documents, and spreadsheets. Most CRMs and accounting tools have it built in. Start by turning on what is there, on company accounts with training off, before adding a separate platform with its own login.",
			},
			{
				question: "How much does AI integration cost for a small business?",
				answer:
					"Often nothing beyond the business-tier subscriptions you already hold, plus the hours to connect one workflow and train the people on it. A hands-on engagement to map, implement, and measure typically runs $5,000 to $15,000 a month for a few months. The expensive version is buying a standalone tool nobody adopts.",
			},
			{
				question: "What are the main benefits of integrating AI into business operations?",
				answer:
					"Faster response to customers, fewer hours spent retyping and summarizing, and decisions made on data that used to sit unread. In practice the first measurable win is usually reply time on inquiries, which drops from days to minutes and shows up as more booked appointments within the first month.",
			},
		],
	},
	{
		slug: "contractor-leads",
		imageSrc: "/blog/contractor-leads.jpg",
		title: "Contractor Leads: Buy Them, Earn Them, or Build the Machine?",
		seoTitle: "Contractor Leads: Buy Them, Earn Them, or Build a Machine",
		category: "Lead Generation",
		publishedAt: "2026-09-06",
		targetKeyword: "contractor leads",
		excerpt:
			"Contractor leads come from three places: you buy them, you earn them, or you build a machine that makes them. The order matters more than the budget.",
		body: [
			"Contractor leads come from exactly three places: you buy them, you earn them, or you build a machine that makes them. Most contractors do the first, complain about it, and never get to the third. I have done all three, and the order matters more than the budget.",
			"I founded three construction companies and spent 16 years in home building. I have paid for leads, waited on referrals, and built the machine. Here is what each one actually costs.",
			`<h3>What is the best way to get contractor leads?</h3>`,
			"Earn them first, buy them as a bridge, and build the machine as soon as cash allows. Earned leads come from reviews, referrals, and a Google Business Profile that is actually maintained. Bought leads from lead-selling platforms are shared with three or four competitors and cost $30 to $150 each. The machine is your own capture, follow-up, and one paid channel.",
			`<h3>Buying contractor leads: what you are actually paying for</h3>`,
			"A homeowner fills out one form on a lead platform. That form is sold to four contractors. The first one to call usually wins. The platforms pay up to $70 a click to find that homeowner, which tells you exactly what the lead is worth to them and roughly what it will cost you.",
			"Exclusive leads run two to three times the shared price. Free contractor leads do not exist. The free trial is the top of a funnel, and the funnel ends at a monthly invoice.",
			"<strong>When buying makes sense.</strong> A new market where nobody knows you. A new trade line you are adding. A slow quarter with crews you need to keep busy. In all three, a bought lead is a bridge to the next referral, and you should treat it that way.",
			"<strong>How to verify lead quality before you spend.</strong> Track two things for 30 days: how fast you called, and your close rate by source. A platform that produces estimates but no signed jobs is not a lead problem. It is telling you something about follow-up or fit, and the number will say which.",
			`<h3>Earning contractor leads: three habits that cost nothing</h3>`,
			"This is where the 480 people a month searching for contractor leads should have started. None of it costs money. All of it costs discipline.",
			"<strong>Reviews at the walkthrough, Google first.</strong> Ask while the homeowner is standing in the finished work, and send the link that day. Recency beats volume. Eleven reviews from four years ago tell Google you stopped.",
			`<strong>The referral ask with a name in it.</strong> Not \"if you know anyone.\" Ask who on their street has been talking about a project. The general ask gets a nod. The specific one gets a name. I covered the whole reactivation system in <a href="/blog/remodeler-marketing-past-clients/">the remodeler article</a>, and it applies to every trade.`,
			"<strong>The Google Business Profile as a weekly job.</strong> Right primary category, real service areas, a new project photo every week. That one habit moves you up the map pack faster than anything an agency will sell you, and it answers every local SEO question you were going to ask.",
			`<h3>Building the contractor lead machine: capture, follow-up, one channel</h3>`,
			"The machine is what turns a bought lead's close rate from one in eight to one in three, because you call first. It has three parts.",
			"<strong>Capture.</strong> Every call and every form lands in a CRM with a source tag. The lead capture form on your website needs four fields: name, phone, what they need, and where. Anything longer loses the homeowner. Anything shorter loses the information you need to call back well.",
			`<strong>Follow-up in ten minutes, not two days.</strong> An AI-drafted reply to every inquiry, reviewed by a person, out the door before the homeowner has finished filling out the next contractor's form. I laid out how to set this up in <a href="/blog/ai-for-contractors/">AI for contractors</a>. It is the single highest-return thing on this page.`,
			"<strong>One paid channel aimed at your buyer.</strong> Homeowners search. General contractors and property managers get referred. Spend where your buyer actually looks, and send the click to a page that answers their question, not to your homepage.",
			`<h3>The supply side nobody talks about: leads for crews, not just customers</h3>`,
			`At Stanbrooke we had foundations poured and no framers to send. I wrote a recruiting flier the way you would write a product ad and sent it to every framing contractor in the service area. Every job had lumber and labor within 45 days. <a href="/case-studies/stanbrooke-contractor-shortage/">The case study is here.</a>`,
			"Contractor lead generation runs both directions. When you are the one who needs subs, the same marketing that finds customers finds crews. Most contractors never think of it that way, and it is why they lose jobs they already won.",
			`<h3>How to read your own contractor lead numbers by source</h3>`,
			`Two numbers, monthly: booked estimates and won jobs, by source. Not clicks, not impressions. When HiLine Homes went from 12 to 20 leads a week per office to 150 to 200, the channels that survived were the ones that produced signed contracts, not the ones that produced traffic. <a href="/case-studies/hiline-homes-sales-growth/">That story is here.</a>`,
			"The bought-lead platform that produces estimates but no wins gets cut. The referral habit that produces three wins a month from eight leads gets more attention. The math runs the marketing, and it only takes a one-line note per lead to have the math.",
			`<h3>Who owns contractor lead generation in your company</h3>`,
			"Right now, you do, at night, between estimates. Every item on this page is simple, and none of it happens without one person accountable for it every week.",
			`If you are a contractor in the $2M to $20M range, the <a href="/milliondollarlp/">part-time marketing director offer</a> was built for exactly this gap. The full plan for a construction company, in the order I would run it, is on the <a href="/marketing-for-construction-companies/">construction marketing page</a>.`,
			"Start this week by pulling last quarter's leads. Tag each one by source. Count the wins. Whatever that list tells you is more useful than anything a lead platform will sell you on the next call.",
		],
		keyPoints: [
			"Contractor leads come from three sources: bought, earned, or built. Earn first, buy as a bridge, build the machine as soon as cash allows.",
			"Bought leads are sold to three or four contractors at once, cost $30 to $150 each, and the first to call wins. Free leads do not exist.",
			"Earned leads cost discipline, not money: reviews at the walkthrough, a referral ask with a name in it, and a Google Business Profile updated weekly.",
			"The machine is capture, ten-minute follow-up, and one paid channel aimed at your buyer. It turns a one-in-eight close rate into one in three.",
			"Read two numbers monthly, booked estimates and won jobs by source, and cut whatever produces the first without the second.",
		],
		faqs: [
			{
				question: "How much do contractor leads cost?",
				answer:
					"Shared leads from the major platforms run $30 to $150 each depending on the trade and the job size, and the same lead goes to three or four contractors. Exclusive leads cost two to three times more. The platforms themselves pay up to $70 a click to find those homeowners, which sets the floor on what you will pay.",
			},
			{
				question: "Are bought contractor leads exclusive?",
				answer:
					"Usually not. The standard product is a shared lead sent to several contractors at once, and the first to call has the advantage. Exclusive leads exist at a higher price, but even then the homeowner has often filled out forms on more than one site. Speed of follow-up matters more than exclusivity.",
			},
			{
				question: "How do I automate follow-up with contractor leads?",
				answer:
					"Route every call and form into a CRM, have AI draft a reply in your voice within minutes, and have a person read it before it goes out. Use a paid business account, not a free one, so customer details stay yours. The goal is a first response in ten minutes, which alone can double a close rate on shared leads.",
			},
			{
				question: "What is the best CRM for managing contractor leads?",
				answer:
					"The one your office will actually open. A contractor's CRM needs four things: a source tag on every lead, a next-step date, a way to log a call in ten seconds from a phone, and a monthly report of estimates and wins by source. Most simple CRMs do this. The expensive ones add features nobody in a truck will use.",
			},
		],
	},
];
