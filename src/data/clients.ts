export interface ClientItem {
	title: string;
	description?: string;
	embedUrl: string;
}

export interface Client {
	slug: string;
	name: string;
	description: string;
	items: ClientItem[];
}

export const clients: Client[] = [
	{
		slug: "avec-amoore",
		name: "Avec Amoore",
		description:
			"A web presence and SEO audit for Avec Amoore: where your Google, Instagram, and search rankings already stand, and the specific gaps on your website that are holding back the traffic those strong assets should be bringing in.",
		items: [
			{
				title: "Report",
				embedUrl: "https://docs.google.com/document/d/1p_BFkqEQ1HO-ov-IBqPWgKgcMxn5H8lxfEG2BD08xT8/preview",
			},
		],
	},
];
