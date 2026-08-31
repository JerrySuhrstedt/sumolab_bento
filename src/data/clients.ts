export interface ClientItem {
	title: string;
	description?: string;
	embedUrl: string;
}

export interface Client {
	slug: string;
	name: string;
	items: ClientItem[];
}

export const clients: Client[] = [
	{
		slug: "avec-amoore",
		name: "Avec Amoore",
		items: [
			{
				title: "Report",
				embedUrl: "https://docs.google.com/document/d/1p_BFkqEQ1HO-ov-IBqPWgKgcMxn5H8lxfEG2BD08xT8/preview",
			},
		],
	},
];
