export interface CaseStudy {
	slug: string;
	title: string;
	client: string;
	summary: string;
	problem: string[];
	action: string[];
	result: string[];
	keyTakeaways?: string[];
}

export const caseStudies: CaseStudy[] = [
	{
		slug: "hiline-homes-sales-growth",
		title: "Revitalizing HiLine Homes' Sales Through Dynamic Marketing Strategies",
		client: "HiLine Homes",
		summary: "Weekly sales leads per office grew from 12-20 to 150-200, and annual home sales rose from 60-70 units to over 800 within three years.",
		problem: [
			"HiLine Homes, a semi-custom home builder with 14 offices in Washington, Oregon, Idaho, and California, faced declining sales.",
			"The company had minimal online presence beyond its website, with each office generating only 12-20 sales leads per week, mostly from referrals.",
			"Tasked with developing and executing a strategy to significantly boost lead generation and sales.",
		],
		action: [
			"Devised an aggressive marketing plan focusing on lead generation, including direct mail campaigns, radio, television, email marketing, and a robust Google Ads PPC campaign with engaging landing pages for data collection.",
			"Partnered with “Point-It,” a Seattle agency specializing in pay-per-click advertising, to drive online efforts.",
			"Launched high-impact TV and radio ads featuring a catchy jingle that became a memorable brand asset, memorable enough that a passenger once sang it to the owner on a flight.",
			"Designed and distributed over 20,000 creative t-shirts at state fairs, home and garden shows, and local offices, increasing brand visibility.",
			"Conducted multiple direct mail campaigns and participated in local “Home & Garden” trade shows across all four states.",
		],
		result: [
			"Achieved a significant increase in lead generation through a dynamic marketing strategy combining traditional and digital methods, bolstered by the memorable jingle and widespread t-shirt distribution.",
			"Weekly sales leads per office rose from 12-20 to 150-200.",
			"Within 18 months, sales soared, with annual home sales increasing from 60-70 units to over 800 units within three years.",
			"The initiatives enhanced HiLine Homes' online presence and significantly boosted brand awareness and customer engagement, establishing it as a leading name in the semi-custom home building industry.",
		],
	},
	{
		slug: "stanbrooke-salesforce-sales-process",
		title: "Transforming Stanbrooke Custom Homes' Sales Process with Salesforce",
		client: "Stanbrooke Custom Homes",
		summary: "Annual sales grew from $3 million to $11 million in under three years after overhauling the sales process with Salesforce.",
		problem: [
			"Stanbrooke Custom Homes faced challenges with extended sales cycles and disorganized sales processes.",
			"The sales team used post-it notes, Excel spreadsheets, and Outlook to manage leads, causing inefficiencies.",
			"To compete effectively in the Seattle and Tacoma market, they needed a streamlined sales process.",
		],
		action: [
			"As Director of Marketing and Sales, implemented Salesforce Sales Cloud to overhaul internal procedures.",
			"Ran comprehensive training to ensure the sales team effectively utilized Salesforce.",
			"Enabled real-time prospect tracking, automated follow-ups, and accurate sales and revenue forecasts through customized reports.",
		],
		result: [
			"The integration of Salesforce transformed the sales process, significantly improving efficiency and organization.",
			"Sales grew over 50% year-over-year, driven by data-driven strategies.",
			"Real-time tracking and automation improved pipeline visibility and follow-up consistency.",
			"Annual sales grew from $3 million to $11 million in under three years.",
			"Stanbrooke Custom Homes ranked 6th in Washington State's Top 100 Fastest Growing Companies.",
		],
	},
	{
		slug: "stanbrooke-contractor-shortage",
		title: "Resolving Contractor Shortage at Stanbrooke Custom Homes",
		client: "Stanbrooke Custom Homes",
		summary: "A creative recruiting campaign mobilized framing crews and got every project back on track within 45 days.",
		problem: [
			"Stanbrooke Custom Homes, a Northwest-based custom home builder, faced a severe shortage of framing contractors.",
			"The shortage resulted in the company being unable to start framing after pouring foundations, causing a halt in operations and financial stress since they couldn't bill for incomplete work.",
			"The inability to progress on projects impacted customer bank loans, leading to operational standstills and dissatisfied clients.",
		],
		action: [
			"Collaborated with the construction department and stakeholders to gather crucial information and devise a strategic plan to attract framing contractors.",
			"Launched a creative campaign highlighting the company's status as the “preferred General Contractor to work for.”",
			"Developed a compelling recruiting flier: “Looking for quality framing contractors to work with the Northwest's #1 Home Builder. Free nails included with every job, and pizza delivered by our project superintendents on Friday.” Sent it to all framing contractors in the service area.",
		],
		result: [
			"Achieved a significant increase in contractor engagement through a targeted, creative campaign.",
			"The campaign received an overwhelming positive response, with many framing contractors eager to work with Stanbrooke Custom Homes.",
			"Framing crews mobilized rapidly, with all jobs having lumber delivered and framing labor in progress within 45 days.",
			"The initiative overcame the operational standstill and positioned Stanbrooke as a preferred employer, strengthening long-term contractor relationships.",
		],
	},
	{
		slug: "turning-failure-into-success",
		title: "Turning Failure Into a Multi-Million Dollar Success",
		client: "Chasewood Homes / Stanbrooke Custom Homes",
		summary: "After a business failure and Chapter 13 bankruptcy, a rebuilt partnership grew a new home-building company to $600K-$700K in monthly revenue.",
		problem: [
			"The Collapse of Chasewood Homes: after launching Chasewood Homes, being a great marketer didn't translate into being a great home builder. Despite early success, generating $120K in sales in year one, the business lacked operational efficiency.",
			"A critical mistake in ordering lumber and trusses led to construction delays, financial instability, and ultimately the company's downfall. Customers were left with unfinished homes, ending in the difficult decision to close the business and file for Chapter 13 bankruptcy.",
		],
		action: [
			"Facing the Consequences & Building Smarter: instead of walking away, took responsibility, personally met with customers, helped them navigate completion plans, and made every effort to mitigate the damage, even reaching out years later to make amends.",
			"Co-founded Stanbrooke Custom Homes with a business partner, a CPA who handled finance and operations, while focusing on marketing and sales.",
			"Structured the new business to ensure cash flow stability, operational efficiency, and strategic decision-making from the start.",
		],
		result: [
			"With the right partnership and a clear division of strengths, Stanbrooke Custom Homes flourished, generating between $600K and $700K in monthly revenue.",
			"The business ran smoothly because of the right financial controls, supply chain management, and team alignment.",
			"Stanbrooke was ranked #6 on Washington State's Fastest Growing Companies.",
		],
		keyTakeaways: [
			"Get the right team in place: know your strengths and partner with experts to fill the gaps.",
			"Take responsibility: own your failures, face the consequences, and do right by your customers.",
			"Master cash flow: a profitable business can still fail without proper financial oversight.",
			"Learn and adapt: failures can be stepping stones if you extract lessons and apply them wisely.",
		],
	},
	{
		slug: "rebranding-first-products",
		title: "Rebranding “First Products” with Memorable Cartoon Characters",
		client: "First Products",
		summary: "Two cartoon characters and a set of bobble-head dolls turned a generic 30-year-old brand name into something hospitals actually remembered.",
		problem: [
			"“First Products,” a medical supply company in Tacoma, Washington, faced a branding issue. Despite being a family-owned business for 30 years, its generic name was not memorable to customers.",
			"As the marketing manager, needed to develop a strategy to make the company's name and products more memorable, enhancing brand recognition and customer engagement.",
		],
		action: [
			"Proposed creating two cartoon characters, “Judy & Trudy,” to serve as the new faces of “First Products.” Judy was depicted as a Caucasian nurse and Trudy as an African American nurse, designed to be friendly and engaging.",
			"Collaborated with a skilled illustrator to bring the characters to life with a fun, professional vibe that would resonate with doctors and nurses.",
			"Commissioned “Judy & Trudy” bobble-head dolls, used as promotional giveaways at medical conferences, trade shows, and directly to hospitals and clinics.",
		],
		result: [
			"Created a memorable brand identity by introducing “Judy & Trudy” as the faces of “First Products,” and the characters quickly gained popularity among the target audience.",
			"The company's name became synonymous with the friendly cartoon nurses, resulting in a significant increase in customer recall and engagement.",
			"This rebranding strategy led to a notable increase in customer loyalty and satisfaction, based on feedback from hospital purchasing agents, nurses, and doctors.",
			"The physical presence of the bobble-head dolls in nursing stations and administrative offices served as a constant reminder of the company's products, translating into a steady rise in sales and new customer acquisitions.",
		],
	},
	{
		slug: "altair-global-reporting",
		title: "Streamlining Altair Global's Reporting Process with Salesforce Dashboards",
		client: "Altair Global",
		summary: "A custom Salesforce dashboard eliminated the stressful two-week scramble before every board meeting.",
		problem: [
			"Altair Global, a Dallas-based mobility provider, faced challenges in conveying quarterly and year-to-date metrics to its Board of Directors.",
			"The Senior Vice President of Sales and Marketing experienced a stressful rush two weeks before each meeting to gather, compile, and present the necessary data.",
			"This chaotic process hindered efficient communication and decision-making for the Board.",
		],
		action: [
			"As Salesforce Administrator and Business Analyst, collaborated with key stakeholders to understand the specific requirements and expectations for the Board's metrics.",
			"Conducted a thorough assessment to identify the critical data and metrics needed for effective presentations.",
			"Developed a custom Salesforce dashboard tailored to Altair Global's needs, featuring multiple charts and graphs showcasing real-time metrics aligned with the Board's interests.",
			"Ensured the dashboard provided an on-demand, dynamic resource for up-to-date information, eliminating the need for last-minute data compilation.",
		],
		result: [
			"Significantly improved Altair Global's reporting efficiency with a custom Salesforce dashboard that streamlined the data presentation process.",
			"The frantic two-week period before each Board meeting was virtually eliminated, transforming preparation into a stress-free, efficient task.",
			"Real-time data and insights enabled more informed decision-making by the leadership team.",
			"The Board of Directors gained a clear and comprehensive view of the company's performance, improving the quality and clarity of communication.",
		],
	},
	{
		slug: "marketo-to-pardot-migration",
		title: "Seamless Transition from Marketo to Salesforce Account Engagement (Pardot)",
		client: "Salesforce client",
		summary: "A scoped migration roadmap moved a client from Marketo to Pardot with minimal disruption to marketing operations.",
		problem: [
			"A Salesforce client needed to transition from their existing Marketo marketing automation platform to Salesforce Account Engagement, focusing on Pardot.",
			"The client required a solution that aligned with their immediate marketing needs and long-term goals while ensuring minimal disruption to their operations.",
		],
		action: [
			"Led the discovery phase, conducting an in-depth exploration of the client's existing systems, business processes, and unique requirements.",
			"Developed a strategic roadmap for the transition, ensuring a smooth migration from Marketo to Pardot.",
			"Scoped the project in detail, outlining the scope of work, defining project milestones, and providing a clear, transparent blueprint for the migration process.",
			"Created a detailed, persuasive proposal tailored to the client's specific needs and objectives to secure client approval and guide the migration process.",
		],
		result: [
			"Facilitated a comprehensive understanding of the client's current marketing operations, tailoring a solution that met both immediate and long-term goals.",
			"Delivered a strategic roadmap that ensured a seamless transition from Marketo to Pardot, minimizing disruptions and aligning with the client's vision.",
			"Provided a meticulously scoped project plan with clear milestones and a transparent migration process, enhancing client confidence and clarity.",
			"The client's marketing operations experienced a smooth, efficient transition, resulting in improved marketing automation and alignment with their strategic objectives.",
		],
	},
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
	return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
