import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getURL } from "@/utils/main";

// CSS
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// next-themes
import { ThemeProvider } from "next-themes";

// i18n
import { LanguageProvider } from "../i18n/client";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });

// Metadata
const meta = {
	title: 'Next.js Base template',
	description: "This Next.js base template is designed as an easy starting point for Next.js projects. It comes with features such as theme switching, i18n (internationalization), and automatic sitemap generation, allowing developers to start their projects quickly.",
	authors: {
		name: 'Fun117',
		url: 'https://fun117.vercel.app/'
	},
	Image: '/favicon.ico',
	cardImage: '/brand/nextjs/twitter-card.png',
	robots: 'follow, index',
	url: getURL()
};

export const metadata: Metadata = {
	title: {
		template: `%s | ${meta.title}`,
		default: meta.title,
	},
	description: meta.description,
	referrer: 'origin-when-cross-origin',
	keywords: ['Vercel', 'Next.js',],
	authors: [{ name: meta.authors.name, url: meta.authors.url }],
	creator: meta.authors.name,
	icons: meta.Image,
	generator: "Next.js",
	publisher: 'Vercel',
	robots: meta.robots,
	metadataBase: new URL(meta.url),
	openGraph: {
		url: meta.url,
		title: meta.title,
		description: meta.description,
		images: [meta.cardImage],
		type: 'website',
		siteName: meta.title
	},
	twitter: {
		card: 'summary_large_image',
		site: `@${meta.authors.name}`,
		creator: `@${meta.authors.name}`,
		title: meta.title,
		description: meta.description,
		images: [meta.cardImage]
	},
};

// Layout
export default function RootLayout({
	children,
	params: { lang },
}: Readonly<{
	children: React.ReactNode;
	params: { lang: string },
}>) {

	return (
		<html lang={lang} dir={dir(lang)} suppressHydrationWarning>
			<LanguageProvider initialLanguage={lang}>
				<body className={`w-full h-full min-h-screen ${inter.className}`}>
					<ThemeProvider attribute="class">
						{children}
					</ThemeProvider>
				</body>
			</LanguageProvider>
		</html>
	);
}