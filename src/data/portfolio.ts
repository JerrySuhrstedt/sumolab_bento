export interface PortfolioArtifact {
	kind: "image" | "pdf" | "audio" | "video" | "youtube";
	src: string;
	caption?: string;
}

export interface PortfolioProject {
	slug: string;
	name: string;
	category: string;
	sample: boolean;
	problem: string;
	action: string;
	result: string;
	/** 1:1-friendly image for the overview grid. Omit if no image artifact exists (e.g. audio-only projects). */
	thumb?: string;
	artifacts: PortfolioArtifact[];
}

export const portfolioProjects: PortfolioProject[] = [
	{
		slug: "chumley",
		name: "Chumley",
		category: "Branding & Product Development",
		sample: false,
		problem:
			"Independent sales reps and small trade businesses need to track leads and follow up fast, but every CRM on the market is built for sales teams with a full-time admin, not someone running jobs from a truck. They'd sign up, hit the eleventh required field before they could write down a lead, and go back to a notebook.",
		action:
			"Built Chumley from the ground up: the branding, the marketing strategy, and the app itself. One screen. Deals are cards. A lead goes from zero to on the board in about ten seconds, and there's nothing to set up and nothing to learn.",
		result:
			"Chumley is live today at chumley.app, built specifically for the reps and trade businesses that more complicated CRMs were never built for.",
		thumb: "/jerry/chumley/homepage.jpg",
		artifacts: [
			{ kind: "image", src: "/jerry/chumley/homepage.jpg", caption: "chumley.app" },
			{ kind: "youtube", src: "https://www.youtube.com/embed/JIQ_53wlv9M", caption: "Chumley walkthrough" },
		],
	},
	{
		slug: "addaroom",
		name: "AddaRoom",
		category: "Marketing Strategy & Video",
		sample: false,
		problem:
			"AddaRoom, a Seattle-based home remodeling contractor, wanted to grow. Home additions were exactly the kind of project a lot of families needed, but the service wasn't getting any real attention next to their bigger remodel offerings.",
		action:
			"Market research turned up a real, timely trend: more young adults moving back in with their parents. I recommended AddaRoom lean into it directly, then personally wrote the script, produced the video, and worked with an illustrator to tell that story with some humor instead of the usual contractor pitch, and extended it into a paid social campaign built around the same idea.",
		result:
			"AddaRoom got a distinct, story-driven way to sell home additions instead of competing on price with every other remodeler in Seattle.",
		thumb: "/jerry/addaroom/video-thumb.jpg",
		artifacts: [
			{ kind: "youtube", src: "https://www.youtube.com/embed/dcbud2la4dI", caption: "AddaRoom brand video" },
			{ kind: "image", src: "/jerry/addaroom/fb-ad-01.png", caption: "Paid social ad extending the campaign" },
		],
	},
	{
		slug: "diggs-custom-homes",
		name: "Diggs Custom Homes",
		category: "Marketing Campaign",
		sample: false,
		problem:
			"Diggs Custom Homes had a strong product, but nothing to sell it with. All they had were architectural blueprints, hard for a buyer to fall in love with before ground was ever broken.",
		action:
			"Turned their blueprints into photorealistic 3D renderings, then built and ran multiple Facebook ad campaigns around them so prospects could see the home before it existed.",
		result: "Excellent return on ad spend, by Diggs' own numbers, on a campaign that let buyers commit to a home that was still just a set of plans.",
		thumb: "/jerry/diggs-custom-homes/fb-ad-01.png",
		artifacts: [
			{ kind: "image", src: "/jerry/diggs-custom-homes/fb-ad-01.png", caption: "Facebook ad, 3D rendering" },
			{ kind: "image", src: "/jerry/diggs-custom-homes/fb-ad-02.png", caption: "Facebook ad, alternate format" },
		],
	},
	{
		slug: "osista-outer-wear",
		name: "Osista Outer Wear",
		category: "Graphic Design & Branding",
		sample: false,
		problem:
			"A new apparel line had a real idea, clothing for women who connect with brown culture, but no visual identity to launch with.",
		action:
			"Designed the Osista logo and a full run of t-shirt designs, then built and ran the ad campaigns that brought the line to market.",
		result: "Osista launched with a distinct look across product and ads, not a generic apparel-store aesthetic.",
		thumb: "/jerry/osista-outer-wear/fb-ad-01.png",
		artifacts: [
			{ kind: "image", src: "/jerry/osista-outer-wear/fb-ad-01.png", caption: "Facebook ad, mother and daughter" },
			{ kind: "image", src: "/jerry/osista-outer-wear/fb-ad-02.png", caption: "Facebook ad, product shot" },
		],
	},
	{
		slug: "top-notch-cleaning",
		name: "Top Notch Construction Cleaning",
		category: "Graphic Design & Branding",
		sample: false,
		problem: "A local couple running a construction cleaning company wanted to grow, on a real trade-business budget, not an agency retainer.",
		action:
			"Built their branding around Cole himself: a tongue-in-cheek illustrated mark of him flexing, paired with a straightforward tagline, Let Us Do The Dirty Work. No stock photography, no generic cleaning-company look.",
		result: "Cole and his wife loved it, and Top Notch got a brand distinct enough to remember on a budget that couldn't stretch to much else.",
		thumb: "/jerry/top-notch-cleaning/cole-branding.jpg",
		artifacts: [{ kind: "image", src: "/jerry/top-notch-cleaning/cole-branding.jpg", caption: "Brand mark and print ad" }],
	},
	{
		slug: "hiline-homes-radio-jingle",
		name: "HiLine Homes Radio & Jingle",
		category: "Marketing Strategy",
		sample: false,
		problem:
			"HiLine Homes ran offices across Washington, Oregon, and Northern California, and spent real money on TV and radio, but the name wasn't sticking. Prospects couldn't remember who to call.",
		action:
			"Wrote and produced a radio spot, then closed it with a jingle built specifically to be memorable, part of the broader marketing strategy I ran for HiLine.",
		result:
			"The jingle became a real brand asset, memorable enough that a passenger once sang it to the owner on a flight, and it was part of the campaign that took HiLine from 12 to 20 weekly leads per office to 150 to 200, and from 60 to 70 homes a year to over 800 within three years.",
		thumb: "/jerry/hiline-homes-radio-jingle/hiline-logo.png",
		artifacts: [
			{ kind: "image", src: "/jerry/hiline-homes-radio-jingle/hiline-logo.png", caption: "HiLine Homes" },
			{ kind: "audio", src: "/jerry/hiline-homes-radio-jingle/hiline-jingle.mp3", caption: "HiLine Homes radio spot with jingle" },
		],
	},
	{
		slug: "small-diggs",
		name: "Small Diggs",
		category: "Marketing & Branding",
		sample: false,
		problem: "A real estate investor started a new home building company from scratch and needed marketing and branding built from nothing.",
		action: "Produced the full marketing and brand for Small Diggs, including online video content like the one below.",
		result: "Small Diggs launched with a complete, consistent brand and a video library to market with instead of starting from zero.",
		thumb: "/jerry/small-diggs/video-thumb.jpg",
		artifacts: [{ kind: "youtube", src: "https://www.youtube.com/embed/kIqEyuqMWYk", caption: "Small Diggs brand video" }],
	},
	{
		slug: "design-build-nw",
		name: "Design Build NW",
		category: "Web Design",
		sample: false,
		problem: "Design Build NW, a Northwest home designer and builder, needed a website that actually represented the caliber of homes they build.",
		action: "Designed their website end to end, one of more than 100 websites I've designed, developed, and built.",
		result: "Design Build NW got a site built around how homeowners actually shop for a custom builder: dream big, then see the design and build process spelled out clearly.",
		thumb: "/jerry/design-build-nw/homepage-top.jpg",
		artifacts: [{ kind: "image", src: "/jerry/design-build-nw/homepage-top.jpg", caption: "Homepage" }],
	},
	{
		slug: "first-products-judy-trudy",
		name: "First Products: Judy & Trudy",
		category: "Graphic Design & Branding",
		sample: false,
		problem:
			"First Products, a medical supply company in Tacoma, Washington, had been family-owned for 30 years, but its generic name wasn't sticking. Doctors, nurses, and hospital purchasing agents couldn't remember who to call.",
		action:
			"Proposed two cartoon characters, Judy and Trudy, as the new faces of the brand, a Caucasian nurse and an African American nurse, friendly and professional enough to resonate with a medical audience. Worked with an illustrator to bring them to life, then commissioned Judy and Trudy bobblehead dolls and gave them away at medical conferences, trade shows, hospitals, and clinics.",
		result:
			"The company's name became synonymous with the friendly cartoon nurses. The bobbleheads ended up sitting on nursing station desks and in administrative offices across hospitals, a constant physical reminder of the brand that fed a steady rise in sales and new customer acquisition.",
		thumb: "/jerry/first-products-judy-trudy/judy-trudy.jpg",
		artifacts: [{ kind: "image", src: "/jerry/first-products-judy-trudy/judy-trudy.jpg", caption: "Judy & Trudy bobblehead dolls" }],
	},
];
