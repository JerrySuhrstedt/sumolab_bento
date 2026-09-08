export interface Industry {
	href: string;
	name: string;
	/** One line, in Jerry's voice, stating the argument that page actually makes. */
	line: string;
}

/**
 * The industry landing pages, listed on /services/ and /who-its-for/.
 *
 * These pages previously had exactly one internal link each, from the sitewide
 * footer. Footer links carry less weight than body links, and Google discounts
 * them further when the same block repeats on every page. Listing them here
 * gives each page a real contextual link from a relevant page.
 *
 * Order is by keyword cluster size (HVAC 4,490/mo, plumbing 3,370, electrical
 * 1,320, then the three construction pages).
 */
export const industries: Industry[] = [
	{
		href: "/marketing-for-hvac-contractors/",
		name: "HVAC contractors",
		line: "Your ceiling is techs, not leads. More leads sold to a shop booked four weeks out is a longer list of people who called somebody else.",
	},
	{
		href: "/marketing-for-plumbing-contractors/",
		name: "Plumbing contractors",
		line: "Nobody shops for a plumber. They panic and pick, which makes publishing your prices the highest-return thing you can do.",
	},
	{
		href: "/marketing-for-electrical-contractors/",
		name: "Electrical contractors",
		line: "Two businesses on one license. Panel upgrades come from Google. Tenant improvement work comes from a bid list Google can't touch.",
	},
	{
		href: "/marketing-for-construction-companies/",
		name: "Construction companies",
		line: "Tired of living bid to bid. Homeowners, GCs, and property managers do not buy the same way, and one brochure talks to none of them.",
	},
	{
		href: "/marketing-for-home-builders/",
		name: "Home builders",
		line: "From someone who has actually built homes. Sixteen years in the industry and three construction companies founded.",
	},
	{
		href: "/marketing-for-remodelers/",
		name: "Remodelers",
		line: "The work is beautiful and the pipeline is a coin flip. A hundred finished kitchens is a lead source you already paid for.",
	},
];
