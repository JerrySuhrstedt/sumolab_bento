/**
 * Real testimonials from the live sumolab.co site. Quote-to-name pairing
 * was confirmed directly from the page's testimonial carousel markup
 * (image, quote, name, and title appear together per slide, in this order).
 */
export interface Testimonial {
	quote: string;
	name: string;
	title: string;
	photoSrc: string;
}

export const testimonials: Testimonial[] = [
	{
		quote:
			"Jerry's mentorship, approachable nature, and positive attitude stand out. He is an excellent mentor and coach, always willing to share his expertise and help team members increase their skill sets.",
		name: "Alek Synkevych",
		title: "CEO, RevBit",
		photoSrc: "/team/alek-synkevych.jpg",
	},
	{
		quote:
			"Jerry is one of a kind, talks the talk and actually backs it up by walking the walk! If you need someone who understands marketing, there's not many out there that are better!",
		name: "Khero Witey",
		title: "Associate VP, Third Republic",
		photoSrc: "/team/khero-witey.jpg",
	},
	{
		quote:
			"It's rare to find an individual as knowledgeable and driven as Jerry. It always struck me how much of an executor on any project Jerry is. I would line up to have Jerry on my team any day.",
		name: "Jonathan Cisneros",
		title: "Agency Owner",
		photoSrc: "/team/jonathan-cisneros.jpg",
	},
	{
		quote:
			"His skills, work ethic, and collaborative spirit contribute to the success of any organization. Don't miss the opportunity to work with Jerry, a true pro who consistently delivers outstanding results.",
		name: "Doug Crew",
		title: "Systems Consultant",
		photoSrc: "/team/doug-crew.jpg",
	},
];
