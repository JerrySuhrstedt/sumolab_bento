import type { InsightArticle } from './insights';

/**
 * Article drafts awaiting Jerry's final approval. Each renders at /drafts/<slug>/
 * (noindexed, not in the sitemap, not linked from the blog index) so the exact
 * live layout can be reviewed. On final approval the object moves to insights.ts
 * and the URL becomes /blog/<slug>/.
 */
export const drafts: InsightArticle[] = [
	{
		slug: "ai-for-small-business",
		imageSrc: "/blog/ai-for-small-business.jpg",
		title: "AI for Small Business: The Smartest Person in the World Can't Tell You What to Ask",
		seoTitle: "AI for Small Business | SumoLab",
		category: "AI adoption",
		publishedAt: "2026-09-26",
		targetKeyword: "ai for small business",
		excerpt:
			"AI for small business made answers free. It did not make questions free, and the question is the part that came from running a company and carrying a payroll.",
		body: [
			"Picture the smartest person in the world sitting in the chair next to you, and you can ask them anything you want, all day, for twenty dollars a month. That's roughly what happened.",
			"The part nobody mentions is that everyone else got the same chair, the same person, and the same twenty dollars.",
			`<h3>What can AI actually do for a small business?</h3>`,
			"AI can draft, summarize, research, analyze and answer questions faster than anyone you could hire. What it can't do is tell you which question matters. That judgment comes from having carried a payroll, and it's the part AI hasn't made cheaper. Start with a job you already do badly.",
			`<h3>Everyone just got handed the same brilliant assistant</h3>`,
			"I use it the way you'd use tools in a garden. You need a shovel to dig a hole and a rake to move leaves. Specific tools, specific jobs. It's not a magic wand and it won't fix a business that's broken for ordinary reasons.",
			"But the assistant is real. It reads faster than you, it doesn't get tired, and it will explain the same thing four different ways until one lands. That's not nothing.",
			"Here's the problem with it being real. Your competitor down the road has the identical assistant. So does the guy who just started last Tuesday. Whatever edge you think you're buying, you're buying it off a shelf that everyone can reach.",
			`<h3>The questions are the scarce thing now</h3>`,
			"AI made answers free. It didn't make questions free.",
			"Asking a good question about your own business requires knowing which number is about to become a problem. That knowledge doesn't come from reading about business. It comes from having been responsible for one.",
			`<h4>What thirty percent means when payroll is Friday</h4>`,
			"My first company was in the late eighties. We manufactured rollerblade wheels, clothing and accessories, with distributors across Asia and Europe and retailers across the United States.",
			"We were the small guy. There was a much larger wheel manufacturer out of Huntington Beach going after an OEM deal with K2 Skates, who were owned by K2 Skis up on Vashon Island. We won it. Took the whole thing, including all their European and German distributors, because we had street credibility and they didn't.",
			"Great story. Here's the one underneath it.",
			"I couldn't read a profit and loss statement. I couldn't read a balance sheet. I did not understand my own margins on products I had designed and priced myself.",
			"What I eventually worked out, the hard way, is that the floor is thirty percent. Below that there isn't enough left to pay your people or your rent, and it doesn't matter how good the product is or how big the logo on the purchase order is.",
			"We made payroll. The K2 business put us on the map, got the attention of some national companies, and the company was ultimately bought by First Team Sports, a publicly held outfit in Anoka, Minnesota. It worked out.",
			"But I didn't learn thirty percent from a book. I learned it because the alternative was telling people there was no check this week. Nobody can hand you that. Not a course, not a consultant, and not the smartest person in the world sitting in the chair next to you.",
			`<h3>Three kinds of people are writing about AI right now</h3>`,
			"People who play with the tools. People who know marketing. People who have run a business and carried the number.",
			"Nearly every article you'll read about AI for small business comes from the first group. A few come from the first two. Almost none come from all three.",
			"That's a filter you can use on everything you read this month, including this page. Before you take advice about where AI belongs in your company, work out whether the person writing it has ever been responsible for the thing they're pointing AI at.",
			"Somebody who has never made payroll can tell you what a tool does. They cannot tell you whether it's worth doing.",
			`<h3>AI didn't change the order of operations</h3>`,
			"Audience. Strategy. Plan. Test. Then tactics.",
			"That order hasn't moved in decades and AI didn't move it. What changed is that tactics got cheap, so people skip the first four and start at the fifth. You can now produce forty blog posts in a weekend for a market you haven't defined, with a message you haven't tested.",
			`Most wasted AI spend is an old mistake with a new invoice. It's the same mistake companies made buying a website they didn't need or a campaign aimed at nobody in particular. If the <a href="/blog/marketing-strategy-for-a-small-business/">strategy underneath it</a> is missing, faster execution just gets you to the wrong place sooner.`,
			"That's the bright shiny object problem, and it's older than I am.",
			`<h3>Where AI for small business actually starts, and it isn't a tool</h3>`,
			"Pick one job you already do badly and expensively. Not the most exciting one. The one that costs you and that you keep putting off.",
			"For most owners that's follow-up. Somebody inquired eleven days ago and nobody called them back. Or it's reading things you don't have time to read: contracts, reports, the sixty-page RFP that came in Friday.",
			`Then ask better questions about it than you would have asked a year ago, and verify what you get back. <a href="/blog/how-to-use-ai-for-marketing/">The five jobs it genuinely does well</a> are a decent starting list, and if you want the comparison, <a href="/blog/best-ai-for-marketing/">the honest answer on which one to use</a> is that it barely matters.`,
			"Measure one number for thirty days. Not activity. A number that shows up in the business.",
			`<h3>What it still can't do for you</h3>`,
			"It can't know your margin.",
			"It can't tell you which customer is worth keeping and which one is quietly costing you money every month.",
			"It can't make a call that costs somebody their job, and it can't sit with that afterward.",
			`I spent a year putting AI to work across four brands at a $50M manufacturer. Content production time dropped thirty-eight percent, which was the number everyone wanted. The thing I remember is that three months in, all four brands had started sounding like the same company. <a href="/blog/ai-marketing-org-to-solo-product/">That whole story is here.</a> No tool caught it. A person reading the output caught it.`,
			`So the first question isn't which AI to buy. It's what you already know that the machine doesn't, and whether anyone in your company is asking it. If nobody is, that's the gap, and it's the one a <a href="/services/fractional-ai-advisor/">fractional AI advisor</a> is actually for. If you're still working out what that role even is, <a href="/blog/what-is-an-ai-consultant/">start here instead</a>.`,
			"Go find the job you keep putting off. Ask it a better question this week.",
		],
		keyPoints: [
			"AI made answers free. It did not make questions free, and question quality comes from having been responsible for a business.",
			"Everyone got the same assistant at the same price, so the tool itself is not an advantage.",
			"The order of operations did not change: audience, strategy, plan, test, then tactics. Most wasted AI spend is skipping to tactics because they got cheap.",
			"Start with one job you already do badly and expensively, verify what the model tells you, and measure one real number for thirty days.",
		],
		faqs: [
			{
				question: "Is AI worth it for a small business?",
				answer:
					"Yes, for specific jobs. Drafting, summarizing long documents, research and follow-up all get faster and cheaper. It is not worth it as a strategy, because your competitors have the identical tool at the identical price. The advantage is in what you ask it, not in owning it.",
			},
			{
				question: "What should a small business use AI for first?",
				answer:
					"The job you already do badly and expensively. For most owners that is follow-up on inquiries, or reading things there is never time to read. Pick one, run it for thirty days, and measure a number that shows up in the business rather than an activity count.",
			},
			{
				question: "How much should a small business spend on AI?",
				answer:
					"Start at twenty dollars a month for a paid account on one tool and go no further until that tool has changed a number you can point to. Most of what gets sold as an AI platform is a wrapper around the same models with a second subscription attached.",
			},
			{
				question: "Will AI replace my marketing person?",
				answer:
					"It replaces some of the typing, not the judgment. Someone still has to decide which market to be in, what to stop spending on, and whether the leads are turning into customers. AI produces more output faster, which is usually the problem rather than the solution.",
			},
		],
	},
	{
		slug: "claude-ai-for-small-business",
		imageSrc: "/blog/claude-ai-for-small-business.jpg",
		title: "Claude AI for Small Business: I Built a Working CRM in Eight Days for $30",
		seoTitle: "Claude AI for Small Business | SumoLab",
		category: "AI adoption",
		publishedAt: "2026-09-26",
		targetKeyword: "claude ai for small business",
		excerpt:
			"Claude AI for small business, tested: eight days and thirty dollars for a working CRM. What made it possible, and why the build was only thirty percent of it.",
		body: [
			"Eight days, about thirty dollars, and I had a working CRM that real people could use. That's the part everybody wants to hear, so there it is up front.",
			"Here's the part that actually matters: building it turned out to be roughly thirty percent of the job.",
			`<h3>Can you build software with Claude AI without being a developer?</h3>`,
			"Partly. I built a working, tested CRM in about eight days for roughly thirty dollars, but I have a technical background and I verified what the model told me against other sources. Without both of those the timeline changes. The build is also only about thirty percent of shipping a product.",
			`<h3>Eight days, thirty dollars, one working application</h3>`,
			`It's called <a href="/jerry/chumley/">Chumley</a>. It's a deliberately simplified CRM for sales reps who aren't technical, which is a group every CRM on the market claims to serve and none of them actually do.`,
			"The problem I was solving is one I'd watched for years. A rep running jobs out of a truck signs up for a CRM, hits the eleventh required field before they can write down a lead, and goes back to a notebook. Every time. The software wasn't too weak, it was too much.",
			"So Chumley is one screen. Deals are cards. A lead goes from nothing to on the board in about ten seconds. There's nothing to configure and nothing to learn.",
			"Fully functional. Tested. Merchant services connected, so it can take money. Completely set up to add users.",
			"Eight days.",
			`<h3>The two things that made eight days possible</h3>`,
			"I want to be careful here, because this is where most articles like this one start lying to you.",
			`<h4>I already knew enough to know what to check</h4>`,
			"I have a pretty technical background. Not a computer science degree, but decades of being close enough to the work to read what came back and have an opinion about it.",
			"If you don't have that, your number isn't eight days. I don't know what your number is, but it isn't mine, and anyone telling you otherwise is selling something.",
			`<h4>I never took its word for it</h4>`,
			"This is the transferable part, and it's the one I'd actually want an owner to take away.",
			"I have no fear of asking questions, and no fear of going and checking the answer somewhere else. When the model told me something, I confirmed it against other resources before I built on top of it.",
			"Most people do one of two things instead. They trust it completely, which is how you end up with a confident, broken application. Or they don't ask at all, because they've decided the whole thing is hype.",
			"Neither works. The useful posture is in between: ask it everything, believe none of it until you've checked.",
			`<h3>What Claude AI for small business is good at, and what it isn't</h3>`,
			"Good at: drafting the whole thing, explaining what it just did in language you can follow, holding a long build in its head across days, and doing the boring wiring nobody wants to do.",
			"Not good at: knowing what your users actually need. It doesn't know that a rep in a truck will abandon the form at field eleven. I knew that, and I knew it because I've spent years around people who run jobs out of trucks.",
			"Also not good at telling you when it's wrong. It's wrong with exactly the same confidence it's right with. That's the whole reason the checking habit isn't optional.",
			`<h3>Then the real work started</h3>`,
			"Chumley has a few users. None of them are real.",
			"It was mostly a lesson for me in how to build an app and do it the right way, all the way through to connecting merchant services. It works. It's ready.",
			"And now the hard part starts, which is sales and marketing. That's probably more like seventy percent of the equation.",
			"Eight days and thirty dollars bought me the thirty percent. The rest is finding the reps who need it, getting in front of them, giving them a reason to switch off a notebook they're comfortable with, and getting them to pay. None of that got cheaper this year. None of it has an eight day version.",
			`<h3>What this means if you're about to pay someone $40K</h3>`,
			"Build the thing. Seriously. The economics changed and they changed in your favor, and if you've been sitting on an idea because the quote was forty thousand dollars, that number deserves a second look.",
			"Then budget for the part that isn't the build, because that's where the money and the time actually go. The software was never the hard part. It's less of the hard part now than it has ever been.",
			`If the question is which model, <a href="/blog/best-ai-for-marketing/">the honest answer</a> is that it matters less than you'd think. And if what you actually need is somebody to work out where AI fits across the whole business rather than just marketing, that's a <a href="/services/fractional-ai-advisor/">fractional AI advisor</a>, or <a href="/blog/what-is-an-ai-consultant/">this explains the role first</a>.`,
			"Go price your idea again. The build quote you got last year is probably wrong now.",
		],
		keyPoints: [
			"A working, tested CRM took about eight days and roughly thirty dollars to build with Claude.",
			"Two things made that possible: an existing technical background, and verifying every answer against other sources instead of trusting it.",
			"The model is wrong with the same confidence it is right, which is why the checking habit is not optional.",
			"Building the product was about thirty percent of the job. Sales and marketing is the other seventy, and none of that got cheaper.",
		],
		faqs: [
			{
				question: "Can a non-technical person build an app with Claude?",
				answer:
					"Something, yes. Something production-ready with payments connected is harder, and my eight days assumed a technical background. The realistic starting point for a non-technical owner is an internal tool that only your team uses, where a mistake costs you an afternoon rather than a customer.",
			},
			{
				question: "What does it actually cost to build software with AI?",
				answer:
					"Chumley cost about thirty dollars in total. That figure covers the model subscription and usage during the build, not hosting at scale, not a domain, and not the sales and marketing that turns a working application into a business. The build is the cheap part now.",
			},
			{
				question: "How do you know when Claude is wrong?",
				answer:
					"You do not, from the output alone. It is wrong with the same confidence it is right. The only reliable method is confirming what it tells you against another source before you build on top of it, which takes minutes and saves days.",
			},
			{
				question: "Is Claude better than ChatGPT for building software?",
				answer:
					"It held a long build together across days without drifting, which is the trait that mattered most to me. That said, the model was not the deciding factor. Knowing what the users needed and checking the work is what made the difference, and that is true whichever one you pick.",
			},
		],
	},
	{
		slug: "what-does-a-marketing-manager-do",
		imageSrc: "/blog/what-does-a-marketing-manager-do.jpg",
		title: "What Does a Marketing Manager Do in a Small Company, and What Can't They Do Alone?",
		seoTitle: "What Does a Marketing Manager Do? | SumoLab",
		category: "Hiring and team",
		publishedAt: "2026-09-26",
		targetKeyword: "what does a marketing manager do",
		excerpt:
			"What does a marketing manager do? They run execution. The week, the four decisions they cannot make, and what breaks when nobody sits above them.",
		body: [
			"Almost everything written about what a marketing manager does was written to attract one, not to help you hire one. Those are different documents.",
			"An owner doesn't need a list of responsibilities. You need to know what this person handles on a Tuesday, and what quietly goes unhandled when there's nobody above them.",
			`<h3>What does a marketing manager do?</h3>`,
			"A marketing manager runs execution. They own the calendar, brief and review the work, manage agencies and freelancers, keep the website and CRM current, and report on what happened. What they don't own is strategy, budget authority, or positioning. In a small company those decisions usually fall back to the owner.",
			`<h3>The job description you'll find everywhere is written for the candidate</h3>`,
			"Search this question and you get recruiting ads. Bullet lists of responsibilities, written by HR, designed to make a role sound appealing to someone applying for it.",
			"That's a fine document. It's just not the one you need when you're deciding whether to spend seventy thousand dollars a year on a person.",
			"I've sat on both sides of this. I've been the marketing manager, and I've been the one signing the offer. What follows is the second view.",
			`<h3>A marketing manager's actual week in a $5M to $50M company</h3>`,
			"They keep the calendar honest. What's going out, when, and did last week's actually go out.",
			"They brief the work and review it before it ships. The agency produces something, the freelancer produces something, and somebody has to read it and say yes or send it back. That's most of the job and it's more valuable than it sounds.",
			"They manage the vendors. The agency, the designer, the person who does the video. Chasing, scheduling, checking the invoice matches what arrived.",
			"They keep the plumbing working. The site doesn't have a broken form, the CRM has the leads in it, the tracking still fires.",
			"They report. What went out, what came in, what it cost.",
			"That's a real job. Done well it's the difference between marketing that happens and marketing that gets talked about. Don't let anyone tell you it's junior work.",
			`<h3>The four decisions they aren't positioned to make</h3>`,
			"This is where it gets uncomfortable, and it's the reason this page exists rather than another responsibility list.",
			"<strong>Which market to be in.</strong> Whether you chase remodels or new construction. Whether the commercial side is worth the overhead. That's a bet on where the company goes, not a marketing task.",
			"<strong>What to stop spending on.</strong> Killing a channel means telling a vendor the relationship is over, and usually telling somebody internally that their idea didn't work. A manager can recommend it. Carrying it is a different thing.",
			"<strong>What the company stands for when a buyer is holding three quotes.</strong> Positioning is the promise the owner has to keep. You can't delegate a promise you're the one making.",
			"<strong>Whether the number is being hit.</strong> Somebody has to own the pipeline number and say out loud when it's short. A manager who doesn't control the budget or the strategy can't be accountable for the result of either.",
			"A good manager will have opinions on all four. Ask them, they're usually right. But they can't carry those decisions, because the people affected don't report to them and the money isn't theirs.",
			`<h3>What it looks like when nobody sits above them</h3>`,
			"You'll recognize this one.",
			"Activity goes up. The calendar is full. The reports are green. There's a newsletter going out, the social accounts are posting, the website got refreshed.",
			"And the pipeline doesn't move.",
			"The manager isn't failing. They're doing exactly the job. The job above them is the one that's vacant, and you're filling it at nine at night between everything else you do.",
			"That gap is the single most common thing I walk into. It rarely looks like a people problem, which is why it goes unfixed for years. It looks like marketing not working.",
			`<h3>Manager, director, or neither yet</h3>`,
			"Under roughly $3M, usually neither. The owner decides and buys execution: a freelancer, an agency, someone part-time. Hiring a manager at that size often just adds a salary between you and the work.",
			`Between $5M and $50M, usually a manager plus somebody senior on part-time hours. The manager runs the week. The senior person sets the direction, kills what isn't working, and owns the number. That's what a <a href="/services/fractional-marketing-director/">fractional marketing director</a> does, and when the question is which markets to be in rather than how to run the plan, it's a <a href="/services/fractional-cmo/">fractional CMO</a>.`,
			`If you're weighing the two titles directly, <a href="/blog/marketing-manager-vs-marketing-director/">the full comparison is here</a> and I won't repeat it. If you're in the $2M to $20M range, <a href="/milliondollarlp/">the part-time marketing director offer</a> was built for exactly this gap.`,
			`<h3>What to ask in the interview</h3>`,
			"These separate a manager who can genuinely run execution from one who's waiting to be told what to do.",
			"<strong>Walk me through last Tuesday.</strong> Not a typical week. An actual day. You'll learn more from this than from any question about strengths.",
			"<strong>What did you kill in your last job, and who did you have to tell?</strong> If nothing was ever killed, nothing was ever really owned.",
			"<strong>Show me something you sent back.</strong> A manager who has never rejected an agency's work isn't reviewing it.",
			"<strong>What number did you report on, and who read it?</strong> You're finding out whether they've been accountable to anyone or just busy.",
			"<strong>What would you need from me to do this well?</strong> The good ones answer this immediately and specifically. It's the closest thing to a tell.",
			`Before you post the role at all, get the strategy settled, because a manager executing an undefined plan is an expensive way to stay busy. <a href="/blog/marketing-strategy-for-a-small-business/">The six decisions that make up a plan</a> take an afternoon, and they'll tell you whether you need a manager, a director, or neither yet.`,
			"Sit down and write out last week's marketing yourself. If the list is long and the pipeline is flat, you don't have an execution problem.",
		],
		keyPoints: [
			"A marketing manager runs execution: the calendar, briefing and reviewing work, managing vendors, keeping the site and CRM honest, and reporting.",
			"They are not positioned to choose the market, kill a channel, set positioning, or own the pipeline number, because the budget and the people are not theirs.",
			"The failure mode is activity up, reports green, pipeline flat. That is not a failing manager, it is a vacant seat above them.",
			"Under roughly $3M, usually neither role. Between $5M and $50M, usually a manager plus a senior person on part-time hours.",
		],
		faqs: [
			{
				question: "What is the difference between a marketing manager and a marketing coordinator?",
				answer:
					"A coordinator executes tasks handed to them. A manager decides what goes on the calendar, briefs the work, and sends it back when it is wrong. The practical test is whether the person can tell an agency no without checking with anyone first.",
			},
			{
				question: "Does a small business need a marketing manager?",
				answer:
					"Under about $3M, usually not. The owner is still deciding and can buy execution directly from a freelancer or agency. Between $5M and $50M a manager earns their salary, provided somebody senior is setting direction above them rather than leaving it to the owner at night.",
			},
			{
				question: "Can a marketing manager do strategy too?",
				answer:
					"Some can, but the structure usually stops them. Strategy means killing channels, setting positioning and owning the number, and all three require budget authority and the standing to tell people their work is over. Without those, a manager can recommend a strategy but cannot carry one.",
			},
			{
				question: "What should a marketing manager report on?",
				answer:
					"Two numbers: cost per qualified lead and cost per new customer. Impressions, followers and engagement are what gets reported when those two look bad. If the monthly report does not contain both, nobody is being held to the result.",
			},
		],
	},
];
