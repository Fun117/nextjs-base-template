import type { GetServerSideProps, Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import { getURL } from "@/utils/main";

// metadata config
import meta from "../../../metadata.config";

// CSS
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// next-themes
import { ThemeProvider } from "next-themes";

// i18n
import { LanguageProvider } from "../i18n/client";
import { dir } from "i18next";
import { ServerTranslation, getTranslation } from "../i18n/server";

const inter = Inter({ subsets: ["latin"] });

export type LayoutProps = {
	params: { lang: string }
}

export async function generateMetadata(
	{ params }: LayoutProps,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const lang = params.lang
	const { t } = await getTranslation(lang);

	return {
		title: {
			template: `%s | ${t(meta.title)}`,
			default: t(meta.title),
		},
		description: t(meta.description),
		referrer: 'origin-when-cross-origin',
		keywords: ['Vercel', 'Next.js',],
		authors: [{ name: meta.authors.name, url: meta.authors.url }],
		creator: meta.authors.name,
		icons: meta.Image,
		generator: "Next.js",
		publisher: 'Vercel',
		robots: meta.robots,
		metadataBase: new URL(meta.url),
		alternates: {
			canonical: meta.origin,
			languages: {
				"ja-JP": `${meta.origin}/ja`,
				"en-US": `${meta.origin}/en`,
			},
		},
		openGraph: {
			url: meta.url,
			title: t(meta.title),
			description: t(meta.description),
			images: [meta.cardImage],
			type: 'website',
			siteName: t(meta.title),
		},
		twitter: {
			card: 'summary_large_image',
			site: `@${meta.authors.name}`,
			creator: `@${meta.authors.name}`,
			title: t(meta.title),
			description: t(meta.description),
			images: [meta.cardImage]
		},
	}
}

// Layout
export default function RootLayout({
	children,
	params: { lang },
}: Readonly<{
	children: React.ReactNode;
	params: { lang: string },
}>) {

	ServerTranslation(lang, `About`)

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