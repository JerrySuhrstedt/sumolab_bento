export interface City {
	slug: string;
	name: string;
	state: string;
	/** One-sentence local hook used in the page's hero, grounded in the city's actual business character. */
	hook: string;
	/** A short paragraph on the local business landscape, used to make the page genuinely city-specific rather than a template swap. */
	landscape: string;
	/** A locally-flavored answer to "what kind of business here is a good fit," used in a city-specific FAQ. */
	goodFitNote: string;
	nearby: string[];
}

export const cities: City[] = [
	{
		slug: "phoenix",
		name: "Phoenix",
		state: "AZ",
		hook: "Arizona's capital and the hub of the Valley, home to everything from corporate headquarters to fast-growing independent businesses.",
		landscape:
			"Phoenix is the largest and most diverse economy in the Valley: corporate headquarters, healthcare systems, financial and professional services, real estate, and a steady stream of companies relocating from higher-cost states. That diversity is also why generic playbooks don't hold up here. What works for a downtown professional-services firm doesn't work for a healthcare group or a real estate operator, and a lot of Phoenix businesses end up with plenty of activity that isn't built around who they're actually trying to reach.",
		goodFitNote:
			"Established Phoenix companies, usually $5M to $50M in revenue, that have real activity underway but no senior leader tying it to a coherent growth strategy.",
		nearby: ["Scottsdale", "Tempe", "Mesa"],
	},
	{
		slug: "scottsdale",
		name: "Scottsdale",
		state: "AZ",
		hook: "An affluent, brand-sensitive market built on hospitality, wellness, luxury retail, and a growing base of professional and financial services firms.",
		landscape:
			"Scottsdale runs on brand and reputation. Resorts, wellness and medical practices, luxury retail, real estate, and a growing set of financial and professional services firms all compete for the same affluent, discerning customer base. That raises the bar on positioning and polish, but the underlying problem is usually the same one every other market has: activity without a strategy connecting it to revenue, and none of it tied to a plan a leadership team could actually defend.",
		goodFitNote:
			"Established Scottsdale businesses, usually $5M to $50M in revenue, in hospitality, wellness, real estate, or professional services that need senior, brand-level leadership, not just another vendor executing tasks.",
		nearby: ["Phoenix", "Tempe"],
	},
	{
		slug: "chandler",
		name: "Chandler",
		state: "AZ",
		hook: "A tech and advanced-manufacturing corridor anchored by major semiconductor and engineering employers, with a fast-growing base of B2B and SaaS companies.",
		landscape:
			"Chandler's economy is anchored by semiconductor manufacturing, advanced engineering, and a growing cluster of tech and B2B software companies that have followed that talent base. Running a B2B or technical company looks different from running a consumer brand: longer sales cycles, more stakeholders, and decisions that have to hold up to a technical buyer. A lot of Chandler companies have outgrown founder-led leadership but aren't ready to build a full in-house function to handle that complexity.",
		goodFitNote:
			"Established Chandler businesses, usually $5M to $50M in revenue, in B2B, technical, or manufacturing-adjacent industries that need senior leadership fluent in longer, more complex sales cycles.",
		nearby: ["Tempe", "Gilbert", "Mesa"],
	},
	{
		slug: "tempe",
		name: "Tempe",
		state: "AZ",
		hook: "Home to Arizona State University, with a young workforce, an active startup scene, and established employers built around that talent pipeline.",
		landscape:
			"Tempe's economy is shaped by Arizona State University: a young, high-turnover workforce, an active startup and small-business scene, and established employers that draw on that talent pipeline. Companies here often move fast and experiment constantly, which produces a lot of activity but rarely a coherent strategy behind it. The gap is usually leadership, not effort: someone senior enough to turn constant experimentation into a plan that compounds instead of resetting every quarter.",
		goodFitNote:
			"Established Tempe businesses, usually $5M to $50M in revenue, that already run significant activity but need senior leadership to turn that activity into a consistent, accountable strategy.",
		nearby: ["Phoenix", "Chandler", "Mesa"],
	},
	{
		slug: "mesa",
		name: "Mesa",
		state: "AZ",
		hook: "One of the fastest-growing cities in the Valley, with a diversifying economy spanning aerospace, manufacturing, healthcare, and education.",
		landscape:
			"Mesa has grown well beyond its original footprint, with aerospace and advanced manufacturing, healthcare systems, and a growing education and bioscience sector alongside a large and expanding small-business community. That growth creates a specific leadership gap: companies that scaled quickly on referrals and word of mouth now need a real strategy to keep growing, but haven't had the senior leadership in place to build one.",
		goodFitNote:
			"Established Mesa businesses, usually $5M to $50M in revenue, that have grown on referrals and reputation and now need a deliberate strategy and senior leadership to keep scaling past that.",
		nearby: ["Chandler", "Tempe", "Gilbert"],
	},
	{
		slug: "gilbert",
		name: "Gilbert",
		state: "AZ",
		hook: "One of the fastest-growing suburbs in the country, with a dense base of family-owned and mid-market businesses in healthcare, real estate, and retail.",
		landscape:
			"Gilbert's rapid growth has been driven by families and businesses moving in together: a dense base of healthcare practices, real estate operators, and family-owned and mid-market retail and service businesses. A lot of these companies were built on local reputation in a town that used to be small, and now have to compete for a much bigger, more competitive population without losing the trust that got them here in the first place.",
		goodFitNote:
			"Established Gilbert businesses, usually $5M to $50M in revenue, that built their reputation locally and now need senior leadership to keep growing as the market around them gets more competitive.",
		nearby: ["Chandler", "Mesa"],
	},
];

export function getCityBySlug(slug: string): City | undefined {
	return cities.find((city) => city.slug === slug);
}
