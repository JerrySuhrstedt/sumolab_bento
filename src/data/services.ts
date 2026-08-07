export interface ServiceFaq {
	question: string;
	answer: string;
}

export interface ServiceInclude {
	title: string;
	description: string;
}

export interface ServiceLink {
	href: string;
	label: string;
}

export interface Service {
	slug: string;
	name: string;
	shortName: string;
	seoTitle?: string;
	seoDescription?: string;
	seoH1?: string;
	serviceType?: string;
	definition?: string;
	situationHeading?: string;
	ctaPhrase?: string;
	includesHeading?: string;
	howItWorksHeading?: string;
	whoItsForHeading?: string;
	faqHeading?: string;
	relatedLinks?: ServiceLink[];
	tagline: string;
	summary: string;
	situation: string;
	symptoms: string[];
	includes: ServiceInclude[];
	howItWorks: string[];
	outcomes: string[];
	whoItsFor: string[];
	whoItsNotFor: string[];
	faqs: ServiceFaq[];
}

export const fractionalCMO: Service = {
	slug: "fractional-cmo",
	name: "Fractional CMO",
	shortName: "Fractional CMO",
	seoTitle: "Fractional CMO Services for $5M–$50M Companies",
	seoDescription:
		"Hire a fractional CMO with 28 years of marketing leadership. SumoLab gives $5M–$50M companies executive strategy, team direction, and accountable growth.",
	seoH1: "Fractional CMO Services for $5M–$50M Companies",
	serviceType: "Fractional CMO services",
	definition:
		"A fractional CMO is a part-time chief marketing officer who owns marketing strategy, budget, team direction, and pipeline accountability for a set number of hours each month. SumoLab's version of the role gives $5M–$50M companies 28 years of executive marketing leadership at a fraction of the $150,000–$300,000 cost of a full-time hire.",
	situationHeading: "Busy marketing. Random results.",
	ctaPhrase: "a fractional CMO",
	includesHeading: "What a fractional CMO does inside your business.",
	howItWorksHeading: "How the engagement works.",
	whoItsForHeading: "Who hires a fractional CMO",
	faqHeading: "Fractional CMO cost, comparisons, and common questions.",
	relatedLinks: [
		{ href: "/services/fractional-marketing-director/", label: "Fractional marketing director — hands-on operational leadership" },
		{ href: "/services/fractional-ai-advisor/", label: "AI marketing consultant — practical AI adoption" },
		{ href: "/fractional-cmo-near-me/", label: "Fractional CMO near me — Phoenix metro" },
		{ href: "/case-studies/", label: "Case studies — results from real engagements" },
		{ href: "/contact/", label: "Book an intro call" },
	],
	tagline: "Executive-level marketing leadership to drive predictable growth, without the full-time CMO cost.",
	summary:
		"A fractional CMO gives you board-level marketing leadership: strategy, direction, and accountability at the executive table — a senior voice in your leadership discussions and long-term brand and growth strategy, without the cost of a full-time hire.",
	situation:
		"Your marketing looks busy, but results feel random. Leads fluctuate. Messaging changes by channel. Vendors execute without a unified plan. Sales and marketing operate on different assumptions. You end up paying for activity instead of outcomes.",
	symptoms: [
		"No senior marketing perspective in leadership or board discussions",
		"Long-term brand and growth strategy isn't clearly owned by anyone",
		"The owner or CEO is making marketing decisions without marketing expertise",
		"Marketing tactics exist, but no unified strategy connects them",
		"The company relies heavily on referrals and wants predictable lead generation",
	],
	includes: [
		{
			title: "Executive leadership without full-time cost",
			description:
				"Senior-level marketing leadership at a fraction of the cost of a full-time chief marketing officer. No long-term contracts, no overhead.",
		},
		{
			title: "Team and vendor direction",
			description:
				"You stop managing marketing like a collection of projects. We lead the function, set priorities, run cadence, and keep execution moving across internal staff and outside partners.",
		},
		{
			title: "Performance tracking and optimization",
			description:
				"Clear reporting on what's working: funnel metrics, cost per lead, conversion rates, and pipeline impact, optimized based on data.",
		},
	],
	howItWorks: [
		"Start with a working session to understand your business, goals, and current marketing setup.",
		"Get a focused strategy and priorities within the first weeks of the engagement.",
		"Meet on a regular cadence for direction, review, and decisions at the leadership level.",
		"Scale involvement up or down as your needs change.",
	],
	outcomes: [
		"Lower cost than hiring a full-time executive",
		"Immediate access to senior-level marketing experience",
		"Strategic leadership without long-term payroll risk",
		"Flexibility to scale marketing leadership as the company grows",
		"An objective, outside perspective on marketing performance",
	],
	whoItsFor: [
		"Companies generating $5M to $50M in annual revenue",
		"Leadership teams that need a senior marketing voice at the table",
		"Businesses too large to run without real marketing leadership, not yet large enough for a full-time CMO",
		"Companies that want long-term brand and growth strategy owned at the executive level",
	],
	whoItsNotFor: [
		"Very early-stage businesses looking for low-cost campaign execution",
		"Companies that need day-to-day, hands-on marketing execution rather than strategic leadership",
	],
	faqs: [
		{
			question: "How much does a fractional CMO cost?",
			answer:
				"A full-time CMO typically costs $150,000–$300,000 per year once salary, benefits, bonuses, and overhead are included. The fractional engagement delivers the same senior-level thinking for a fraction of that, scaled to the hours your business actually needs, with no long-term contract.",
		},
		{
			question: "How is a fractional CMO different from a fractional marketing director?",
			answer:
				"Both operate under the same fractional model. A fractional CMO typically works at a higher strategic level, involved with executive leadership, board discussions, and long-term brand and growth strategy. A fractional marketing director works closer to the operational side, guiding strategy while also overseeing execution, systems, and day-to-day marketing.",
		},
		{
			question: "How is a fractional CMO different from a marketing agency?",
			answer:
				"An agency executes tasks. A fractional CMO owns the strategy and leads the marketing function, including priorities, budgets, messaging, vendor oversight, and performance management.",
		},
		{
			question: "Can the engagement convert to a full-time hire later?",
			answer:
				"Yes. Many companies use a fractional engagement to build the function and clarify what a full-time hire should own before making that investment.",
		},
		{
			question: "What size company is this built for?",
			answer: "Established businesses generating $5M–$50M in annual revenue with real marketing activity already underway.",
		},
	],
};

export const fractionalMarketingDirector: Service = {
	slug: "fractional-marketing-director",
	name: "Fractional Marketing Director",
	shortName: "Fractional Marketing Director",
	seoTitle: "Fractional Marketing Director Services & Cost",
	seoDescription:
		"A fractional marketing director sets strategy and runs your team, vendors, and campaigns part-time. Senior marketing department leadership for $5M–$50M companies.",
	seoH1: "Fractional Marketing Director Services",
	serviceType: "Fractional marketing director services",
	definition:
		"A fractional marketing director is a part-time marketing leader who sets strategy and directly manages execution — your team, agencies, freelancers, campaigns, and reporting — for a set number of hours each month. SumoLab's version gives $5M–$50M companies an experienced marketing department leader without the cost, delay, or risk of a full-time hire.",
	situationHeading: "Activity everywhere. Ownership nowhere.",
	ctaPhrase: "a fractional marketing director",
	includesHeading: "What a fractional marketing director does day to day.",
	howItWorksHeading: "How the engagement works.",
	whoItsForHeading: "Who hires a fractional marketing director",
	faqHeading: "Fractional marketing director cost, comparisons, and common questions.",
	relatedLinks: [
		{ href: "/services/fractional-cmo/", label: "Fractional CMO — board-level marketing strategy" },
		{ href: "/services/fractional-ai-advisor/", label: "AI marketing consultant — practical AI adoption" },
		{ href: "/fractional-cmo-near-me/", label: "Fractional CMO near me — Phoenix metro" },
		{ href: "/case-studies/", label: "Case studies — results from real engagements" },
		{ href: "/contact/", label: "Book an intro call" },
	],
	tagline: "Senior, hands-on marketing department leadership that gets execution moving — without the full-time marketing director cost.",
	summary:
		"A fractional marketing director who sets strategy and oversees execution, systems, and day-to-day marketing operations on a part-time basis. You get senior marketing department leadership closer to the operational work — without the cost, delay, or risk of a full-time hire.",
	situation:
		"You have marketing activity — an agency, a coordinator, maybe both — but no one running the function. Campaigns launch late, vendors wait on decisions, and every priority call still lands on the founder's desk. The work is happening; the management of the work is the bottleneck.",
	symptoms: [
		"Marketing decisions still route through the founder or CEO",
		"Multiple vendors and freelancers with no one coordinating the work",
		"Activity is happening, but priorities shift month to month",
		"No one is accountable for whether marketing is working",
		"Budget is being spent without a clear line to business goals",
	],
	includes: [
		{
			title: "A working leader, not another advisor",
			description:
				"Someone who joins your operating rhythm — weekly standups, campaign calendars, budget reviews — and runs the marketing department the way an employee would, on part-time hours.",
		},
		{
			title: "Your team and vendors, coordinated",
			description:
				"Agencies, freelancers, and in-house staff pulling in one direction, with deadlines enforced, quality checked before anything ships, and no more work stalling while it waits on a decision.",
		},
		{
			title: "An execution system that outlasts the engagement",
			description:
				"Documented processes, campaign templates, and reporting dashboards your team keeps using — the machinery of a real marketing department, built to run without me.",
		},
	],
	howItWorks: [
		"Start with an audit of the marketing function: team, vendors, tools, calendar, and pipeline.",
		"Rebuild the operating rhythm — priorities, owners, and deadlines — in the first 30 days.",
		"Run the department week to week: campaigns, budgets, reviews, and course corrections.",
		"Hand off a documented system, or scale hours to match the season.",
	],
	outcomes: [
		"Campaigns that ship on schedule instead of stalling in review",
		"One coordinated plan across team, agencies, and freelancers",
		"Reporting that says plainly what worked and what didn't",
		"The founder out of day-to-day marketing management",
		"A documented system a future full-time hire can inherit",
	],
	whoItsFor: [
		"Companies generating $5M to $50M in annual revenue",
		"Businesses with marketing activity but no senior leadership",
		"Leadership teams not ready to hire a full-time marketing executive",
		"Companies that need strategy and hands-on oversight of execution, not just advice",
	],
	whoItsNotFor: [
		"Very early-stage businesses looking for low-cost campaign execution",
		"Companies that primarily need board-level brand and growth strategy rather than operational leadership",
	],
	faqs: [
		{
			question: "How much does a fractional marketing director cost?",
			answer:
				"A full-time marketing director often costs $120,000–$200,000 per year once salary, benefits, bonuses, and overhead are included. The fractional model gives you the same senior leadership part-time, at a fraction of that cost, with no long-term contract and the flexibility to scale hours as needs change.",
		},
		{
			question: "How is a fractional marketing director different from hiring an agency?",
			answer:
				"An agency executes campaigns. A fractional marketing director sets the strategy, coordinates everyone executing it, including your agencies, and is accountable for the outcome.",
		},
		{
			question: "How is a fractional marketing director different from a fractional CMO?",
			answer:
				"Both operate under the same fractional model. A fractional marketing director typically works closer to the operational side of marketing, guiding strategy but also overseeing execution, systems, and day-to-day marketing. A fractional CMO usually works at a higher strategic level involved with board discussions and long-term brand strategy.",
		},
		{
			question: "Can this convert to a full-time hire later?",
			answer:
				"Yes. Many companies use an outsourced marketing director engagement to build the function and clarify what a full-time hire should own before making that investment.",
		},
		{
			question: "What size company is this built for?",
			answer: "Established businesses generating $5M–$50M in annual revenue that already have marketing in motion — a team, an agency, or both — and need someone senior running it day to day.",
		},
	],
};

export const fractionalAIAdvisor: Service = {
	slug: "fractional-ai-advisor",
	name: "Fractional AI Advisor",
	shortName: "Fractional AI Advisor",
	seoTitle: "AI Marketing Consultant for Mid-Market Companies",
	seoDescription:
		"Work with an AI marketing consultant who has run twelve companies. Practical AI adoption for marketing teams at $5M–$50M businesses — measured returns, not hype.",
	seoH1: "AI Marketing Consultant for Mid-Market Companies",
	serviceType: "AI marketing consulting",
	definition:
		"An AI marketing consultant helps a company decide where AI belongs in its marketing — content, campaigns, analytics, automation — then puts the tools to work and measures the return. SumoLab's Fractional AI Advisor brings 28 years of operating judgment to practical AI adoption for $5M–$50M companies: marketing first, and the wider business wherever AI actually pays off.",
	includesHeading: "What an AI marketing consultant actually does.",
	howItWorksHeading: "How the AI marketing consulting engagement works.",
	whoItsForHeading: "Who hires an AI marketing consultant",
	faqHeading: "AI marketing consultant vs. AI agency, and other common questions.",
	relatedLinks: [
		{ href: "/services/fractional-cmo/", label: "Fractional CMO — board-level marketing strategy" },
		{ href: "/services/fractional-marketing-director/", label: "Fractional marketing director — hands-on operational leadership" },
		{ href: "/fractional-cmo-near-me/", label: "Fractional CMO near me — Phoenix metro" },
		{ href: "/case-studies/", label: "Case studies — results from real engagements" },
		{ href: "/contact/", label: "Book an intro call" },
	],
	tagline: "An AI marketing consultant who brings senior operator judgment to AI — pointed at the one or two places it can actually move profit across your business.",
	summary:
		"An AI marketing consultant and business operator who brings 28 years of judgment to the one question most consultants can't answer: where AI actually belongs in your business. Not just marketing — finance, operations, sales, HR. I find the highest-payoff place to start, put AI to work, and prove the return. Not a technologist. An operator who's run twelve companies and knows what moves profit.",
	situationHeading: "Everyone's experimenting. Few are earning.",
	ctaPhrase: "an AI marketing consultant",
	situation:
		"You've been told to \"experiment with AI,\" so you have: a chatbot pilot here, an automation tool there, a subscription finance never asked for. None of it is tied to a plan — and MIT's Project NANDA reported in its 2025 State of AI in Business study that 95% of corporate AI pilots like this return nothing. The tools aren't the problem. The absence of business judgment pointing them is.",
	symptoms: [
		"AI initiatives exist in pockets — marketing, ops, support — with no one connecting them to a strategy",
		"Leadership feels pressure to \"do something with AI\" without a clear read on where it actually pays off",
		"Tools get purchased before the problem they're solving is fully understood",
		"No one senior enough is accountable for whether AI spend produces a return",
		"The business relies on hype and vendor pitches instead of operating experience",
	],
	includes: [
		{
			title: "Business-wide AI opportunity mapping",
			description:
				"A full read of your business — finance, operations, marketing, sales, HR — to find the one or two places AI can actually move profit — an AI marketing strategy grounded in numbers, not a scattershot pilot with no plan behind it.",
		},
		{
			title: "Practical implementation, not slide decks",
			description:
				"I put the tools to work myself and stay until they're earning their keep. You get an operator in the work, not a strategy deck and a goodbye.",
		},
		{
			title: "Measurable return, not hype",
			description:
				"Clear before-and-after numbers on cost, time, and output, so you know exactly what AI is worth to the business, not just that it's \"in use.\"",
		},
	],
	howItWorks: [
		"Start with a full read of your business — finance, operations, marketing, sales, HR — to find where AI can actually move profit.",
		"Get a focused starting point and an AI marketing strategy within the first weeks, not a 40-page roadmap.",
		"I put the tools to work directly and prove the return before we expand further.",
		"Scale to the next highest-payoff area once the first one is earning its keep.",
	],
	outcomes: [
		"AI pointed at the part of the business where it actually pays off",
		"A senior operator doing the work, not just advising from the sidelines",
		"Proof of return before further investment, not another pilot that quietly dies",
		"Judgment across the whole business, not a single-function view of what AI should touch",
		"No more spend on tools chosen by hype instead of fit",
	],
	whoItsFor: [
		"Companies generating $5M to $50M in annual revenue",
		"Leadership teams that know AI matters but don't know where to point it first",
		"Businesses that have already tried a pilot or two without seeing a return",
		"Owners who want an operator doing the work, not a slide deck and a consultant who disappears",
	],
	whoItsNotFor: [
		"Very early-stage businesses without existing operations to apply AI to",
		"Companies looking for a pure technologist to build custom software, not senior business judgment",
	],
	faqs: [
		{
			question: "How is an AI marketing consultant different from an AI agency?",
			answer:
				"An AI agency sells implementation: builds, integrations, retainers. AI marketing consulting services start with the business question — where will AI actually move profit? I bring 28 years of operating judgment, pick the highest-payoff starting point, put the tools to work, and prove the return before anything scales.",
		},
		{
			question: "What does AI adoption for marketing teams look like in practice?",
			answer:
				"It usually starts with repetitive, high-volume work: content drafting, campaign reporting, lead follow-up, and research. We pick marketing AI tools that fit your existing stack, train the team on real workflows, and measure time and cost before and after — so adoption is proven, not assumed.",
		},
		{
			question: "How is this different from a fractional CMO or fractional marketing director?",
			answer:
				"Those two are marketing-specific. A Fractional AI Advisor engagement looks across the whole business — finance, operations, marketing, sales, HR — to find where AI belongs, not just inside the marketing function.",
		},
		{
			question: "How is this different from hiring an AI consultant or technologist?",
			answer:
				"A technologist tells you what's technically possible. I bring the business judgment to decide what's actually worth doing, then put it to work and prove the return, not just the technical build.",
		},
		{
			question: "Do I need to already have AI initiatives underway?",
			answer:
				"No. Most clients start here because they don't know where to begin, or already tried something that didn't return anything.",
		},
		{
			question: "What size company is this built for?",
			answer: "Established businesses generating $5M to $50M in annual revenue with real operations to apply AI to.",
		},
	],
};

export const services: Service[] = [fractionalAIAdvisor, fractionalMarketingDirector, fractionalCMO];

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((service) => service.slug === slug);
}
