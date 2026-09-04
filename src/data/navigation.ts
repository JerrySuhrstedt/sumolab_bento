export interface NavLink {
	label: string;
	href: string;
}

export interface NavItem {
	label: string;
	href?: string;
	children?: NavLink[];
}

export const primaryNav: NavItem[] = [
	{
		label: "Services",
		href: "/services/",
		children: [
			{ label: "Fractional CMO", href: "/services/fractional-cmo/" },
			{ label: "Fractional Marketing Director", href: "/services/fractional-marketing-director/" },
			{ label: "Fractional AI Advisor", href: "/services/fractional-ai-advisor/" },
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
	] satisfies NavLink[],
};

export const legalNav: NavLink[] = [
	{ label: "Privacy Policy", href: "/privacy/" },
	{ label: "Terms", href: "/terms/" },
];
