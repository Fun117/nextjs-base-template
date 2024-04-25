import { getURL } from "@/utils/main";

// Metadata
const meta = {
    origin: 'https://nextjs-base-template.vercel.app',
	title: 'Next.js base template',
	description: "This Next.js base template is designed as an easy starting point for Next.js projects. It comes with features such as theme switching, i18n (internationalization), and automatic sitemap generation, allowing developers to start their projects quickly.",
	authors: {
		name: 'Fun117',
		url: 'https://fun117.vercel.app/'
	},
	// Image: '/favicon.png',
	Image: { icon: "/favicon.ico", apple: "/favicon.png" },
	cardImage: 'https://nextjs-base-template.vercel.app/brand/nextjs/twitter-card.png',
	robots: 'follow, index',
	url: getURL()
};

export default meta
