export interface NavLink {
	label: string;
	href: string;
}

export const primaryNav: NavLink[] = [
	{ label: "Services", href: "/services" },
	{ label: "Approach", href: "/approach" },
	{ label: "Who It's For", href: "/who-its-for" },
	{ label: "Case Studies", href: "/case-studies" },
	{ label: "About", href: "/about" },
	{ label: "Insights", href: "/insights" },
	{ label: "Contact", href: "/contact" },
];

export const primaryCta: NavLink = {
	label: "Book a Strategy Call",
	href: "/contact",
};

export const footerNav = {
	company: [
		{ label: "About", href: "/about" },
		{ label: "Approach", href: "/approach" },
		{ label: "Who It's For", href: "/who-its-for" },
		{ label: "Case Studies", href: "/case-studies" },
		{ label: "Insights", href: "/insights" },
		{ label: "Contact", href: "/contact" },
	] satisfies NavLink[],
	services: [
		{ label: "Fractional CMO", href: "/services/fractional-cmo" },
		{ label: "Fractional Marketing Director", href: "/services/fractional-marketing-director" },
		{ label: "Fractional AI Advisor", href: "/services/fractional-ai-advisor" },
	] satisfies NavLink[],
};

export const legalNav: NavLink[] = [
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Terms", href: "/terms" },
];
