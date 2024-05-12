import { Inter } from "next/font/google";

// next-themes
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

// Layout
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`flex h-full flex-col transition-all duration-300 ease-in-out ${inter.className}`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
