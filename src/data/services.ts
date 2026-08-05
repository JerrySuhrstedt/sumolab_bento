export interface ServiceFaq {
	question: string;
	answer: string;
}

export interface ServiceInclude {
	title: string;
	description: string;
}

export interface Service {
	slug: string;
	name: string;
	shortName: string;
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
	tagline: "Executive-level marketing leadership to drive predictable growth, without the full-time CMO cost.",
	summary:
		"Board-level marketing leadership: strategy, direction, and accountability at the executive table. A Fractional CMO works at the highest strategic level, involved in leadership discussions and long-term brand and growth strategy, without the cost of a full-time hire.",
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
			description: "Senior-level marketing leadership at a fraction of the cost of a full-time CMO. No long-term contracts, no overhead.",
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
			question: "How is a Fractional CMO different from a Fractional Marketing Director?",
			answer:
				"Both operate under the same fractional model. A Fractional CMO typically works at a higher strategic level, involved with executive leadership, board discussions, and long-term brand and growth strategy. A Fractional Marketing Director works closer to the operational side, guiding strategy while also overseeing execution, systems, and day-to-day marketing.",
		},
		{
			question: "How is a Fractional CMO different from a marketing agency?",
			answer:
				"An agency executes tasks. A Fractional CMO owns the strategy and leads the marketing function, including priorities, budgets, messaging, vendor oversight, and performance management.",
		},
		{
			question: "How much does a full-time CMO cost compared to this?",
			answer:
				"A full-time Marketing Director or CMO often costs $150,000 to $300,000 per year once salary, benefits, bonuses, and overhead are included. A Fractional CMO gives you that same senior-level thinking at a fraction of the cost.",
		},
		{
			question: "Can this convert to a full-time hire later?",
			answer:
				"Yes. Many companies use a fractional engagement to build the function and clarify what a full-time hire should own before making that investment.",
		},
		{
			question: "What size company is this built for?",
			answer: "Established businesses generating $5M to $50M in annual revenue with real marketing activity already underway.",
		},
	],
};

export const fractionalMarketingDirector: Service = {
	slug: "fractional-marketing-director",
	name: "Fractional Marketing Director",
	shortName: "Fractional Marketing Director",
	tagline: "Executive-level marketing leadership to drive predictable growth, without the full-time Marketing Director cost.",
	summary:
		"An experienced marketing leader who sets strategy and also oversees execution, systems, and day-to-day marketing operations, on a fractional basis. You get senior leadership closer to the operational work, without the cost, delay, or risk of a full-time hire.",
	situation:
		"Your marketing looks busy, but results feel random. Leads fluctuate. Messaging changes by channel. Vendors execute without a unified plan. Sales and marketing operate on different assumptions. You end up paying for activity instead of outcomes.",
	symptoms: [
		"Marketing decisions still route through the founder or CEO",
		"Multiple vendors and freelancers with no one coordinating the work",
		"Activity is happening, but priorities shift month to month",
		"No one is accountable for whether marketing is working",
		"Budget is being spent without a clear line to business goals",
	],
	includes: [
		{
			title: "Executive leadership without full-time cost",
			description: "Senior-level marketing leadership at a fraction of the cost of a full-time Marketing Director. No long-term contracts, no overhead.",
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
		"Get a focused plan and priorities within the first weeks of the engagement.",
		"Meet on a regular cadence for direction, review, and hands-on execution.",
		"Scale involvement up or down as your needs change.",
	],
	outcomes: [
		"Lower cost than hiring a full-time executive",
		"Immediate access to senior-level experience",
		"Marketing organized into a system instead of scattered tactics",
		"Better-coordinated team, agencies, and vendors",
		"Less founder time spent managing marketing day to day",
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
			question: "How is this different from hiring an agency?",
			answer:
				"An agency executes campaigns. A Fractional Marketing Director sets the strategy, coordinates everyone executing it, including your agencies, and is accountable for the outcome.",
		},
		{
			question: "How is this different from a Fractional CMO?",
			answer:
				"Both operate under the same fractional model. A Fractional Marketing Director typically works closer to the operational side of marketing, guiding strategy but also overseeing execution, systems, and day-to-day marketing. A Fractional CMO usually works at a higher strategic level involved with board discussions and long-term brand strategy.",
		},
		{
			question: "Can this convert to a full-time hire later?",
			answer:
				"Yes. Many companies use a fractional engagement to build the function and clarify what a full-time hire should own before making that investment.",
		},
		{
			question: "What size company is this built for?",
			answer: "Established businesses generating $5M to $50M in annual revenue with real marketing activity already underway.",
		},
	],
};

export const fractionalAIAdvisor: Service = {
	slug: "fractional-ai-advisor",
	name: "Fractional AI Advisor",
	shortName: "Fractional AI Advisor",
	tagline: "Senior business judgment applied to AI, pointed at the one or two places it can actually move profit.",
	summary:
		"AI leadership for owners who are done experimenting. I bring senior business judgment to the one question most consultants can't answer: where AI actually belongs in your business. Working across every function, finance, operations, marketing, sales, HR, I find the highest-payoff place to start, put AI to work, and prove the return. Not a technologist. An operator who's run twelve companies and knows what moves profit.",
	situation:
		"You've been told to \"experiment with AI,\" so you have: a chatbot pilot here, an automation tool there, a subscription finance never asked for. None of it is tied to a plan, and MIT found that 95% of corporate AI projects like this return nothing. The tools aren't the problem. The absence of business judgment pointing them is.",
	symptoms: [
		"AI initiatives exist in pockets, marketing, ops, support, with no one connecting them to a strategy",
		"Leadership feels pressure to \"do something with AI\" without a clear read on where it actually pays off",
		"Tools get purchased before the problem they're solving is fully understood",
		"No one senior enough is accountable for whether AI spend produces a return",
		"The business relies on hype and vendor pitches instead of operating experience",
	],
	includes: [
		{
			title: "Business-wide AI opportunity mapping",
			description:
				"A full read of your business, finance, operations, marketing, sales, HR, to find the one or two places AI can actually move profit, instead of a scattershot pilot with no plan behind it.",
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
		"Start with a full read of your business, finance, operations, marketing, sales, HR, to find where AI can actually move profit.",
		"Get a focused starting point and a plan within the first weeks, not a 40-page roadmap.",
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
			question: "How is this different from a Fractional CMO or Fractional Marketing Director?",
			answer:
				"Those two are marketing-specific. A Fractional AI Advisor engagement looks across the whole business, finance, operations, marketing, sales, HR, to find where AI belongs, not just inside the marketing function.",
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
		{
			question: "Can this convert to a full-time hire or a different engagement later?",
			answer:
				"Yes. Many clients start here, then bring me on for broader Fractional CMO or Marketing Director leadership once the AI work proves out, or vice versa.",
		},
	],
};

export const services: Service[] = [fractionalAIAdvisor, fractionalMarketingDirector, fractionalCMO];

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((service) => service.slug === slug);
}
