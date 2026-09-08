export interface NavLink {
	label: string;
	href: string;
}

export interface NavGroup {
	label: string;
	links: NavLink[];
}

export interface NavItem {
	label: string;
	href?: string;
	children?: NavLink[];
	/**
	 * Grouped dropdown, used where a flat list would read as variations of one
	 * thing. The Services menu listed three services all starting with the word
	 * "Fractional", which named the delivery model three times and never said
	 * who the work is for. Groups split it into how the work is done and who it
	 * is done for. `groups` takes precedence over `children` when both exist.
	 */
	groups?: NavGroup[];
}

export const primaryNav: NavItem[] = [
	{
		label: "Services",
		href: "/services/",
		groups: [
			{
				label: "How I work",
				links: [
					{ label: "Fractional CMO", href: "/services/fractional-cmo/" },
					{ label: "Fractional Marketing Director", href: "/services/fractional-marketing-director/" },
					{ label: "Fractional AI Advisor", href: "/services/fractional-ai-advisor/" },
				],
			},
			{
				label: "Who I work with",
				links: [
					{ label: "HVAC contractors", href: "/marketing-for-hvac-contractors/" },
					{ label: "Plumbing contractors", href: "/marketing-for-plumbing-contractors/" },
					{ label: "Electrical contractors", href: "/marketing-for-electrical-contractors/" },
					{ label: "Construction companies", href: "/marketing-for-construction-companies/" },
					{ label: "Home builders", href: "/marketing-for-home-builders/" },
					{ label: "Remodelers", href: "/marketing-for-remodelers/" },
				],
			},
		],
	},
	{
		label: "About",
		href: "/about/",
		children: [
			{ label: "About Jerry", href: "/about/" },
			{ label: "Approach", href: "/approach/" },
			{ label: "Who It's For", href: "/who-its-for/" },
		],
	},
	{ label: "Case Studies", href: "/case-studies/" },
	{ label: "Insights", href: "/blog/" },
	{ label: "Contact", href: "/contact/" },
];

export const primaryCta: NavLink = {
	label: "Book a Strategy Call",
	href: "/contact/",
};

export const footerNav = {
	company: [
		{ label: "About", href: "/about/" },
		{ label: "Approach", href: "/approach/" },
		{ label: "Who It's For", href: "/who-its-for/" },
		{ label: "Case Studies", href: "/case-studies/" },
		{ label: "Insights", href: "/blog/" },
		{ label: "Contact", href: "/contact/" },
	] satisfies NavLink[],
	services: [
		{ label: "Fractional CMO", href: "/services/fractional-cmo/" },
		{ label: "Fractional Marketing Director", href: "/services/fractional-marketing-director/" },
		{ label: "Fractional AI Advisor", href: "/services/fractional-ai-advisor/" },
		{ label: "Marketing Consultant for Small Business", href: "/marketing-consultant-for-small-business/" },
		{ label: "Marketing for Home Builders", href: "/marketing-for-home-builders/" },
		{ label: "Marketing for Construction Companies", href: "/marketing-for-construction-companies/" },
		{ label: "Marketing for Remodelers", href: "/marketing-for-remodelers/" },
		{ label: "Marketing for HVAC Contractors", href: "/marketing-for-hvac-contractors/" },
		{ label: "Marketing for Electrical Contractors", href: "/marketing-for-electrical-contractors/" },
		{ label: "Marketing for Plumbing Contractors", href: "/marketing-for-plumbing-contractors/" },
	] satisfies NavLink[],
};

export const legalNav: NavLink[] = [
	{ label: "Privacy Policy", href: "/privacy/" },
	{ label: "Terms", href: "/terms/" },
];
