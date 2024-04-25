
import { Inter } from "next/font/google";

// next-themes
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

// Layout
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html suppressHydrationWarning>
			<body className={`flex h-full flex-col ${inter.className}`}>
				<ThemeProvider attribute="class">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}