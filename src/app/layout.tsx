import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";

// metadata config
import meta from "../../metadata.config";

// next-themes
import { ThemeProvider } from "next-themes";
import { getTranslation } from "./i18n/server";

const inter = Inter({ subsets: ["latin"] });

// Layout
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html suppressHydrationWarning>
			<body className={`w-full h-full min-h-screen ${inter.className}`}>
				<ThemeProvider attribute="class">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}