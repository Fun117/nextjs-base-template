import type { GetServerSideProps, Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";

// config
import _config from "../../../base.config";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

// next-themes
import { ThemeProvider } from "next-themes";

// i18n
import { LanguageProvider } from "../i18n/client";
import { dir } from "i18next";
import { ServerTranslation, getTranslation } from "../i18n/server";
import { Footer, Header } from "@/components/element/navigation";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export type LayoutProps = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: LayoutProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.lang;
  const { t } = await getTranslation(lang);

  return {
    title: {
      template: `%s | ${t(_config.meta.title)}`,
      default: t(_config.meta.title),
    },
    description: t(_config.meta.description),
    referrer: "origin-when-cross-origin",
    keywords: ["Vercel", "Next.js"],
    authors: [
      { name: _config.meta.authors.name, url: _config.meta.authors.url },
    ],
    creator: _config.meta.authors.name,
    icons: _config.meta.Image,
    generator: "Next.js",
    publisher: "Vercel",
    robots: _config.meta.robots,
    metadataBase: new URL(_config.meta.url),
    alternates: {
      canonical: _config.meta.origin,
      languages: {
        "ja-JP": `${_config.meta.origin}/ja`,
        "en-US": `${_config.meta.origin}/en`,
      },
    },
    openGraph: {
      url: _config.meta.url,
      title: t(_config.meta.title),
      description: t(_config.meta.description),
      images: [_config.meta.cardImage],
      type: "website",
      siteName: t(_config.meta.title),
    },
    twitter: {
      card: "summary_large_image",
      site: `@${_config.meta.authors.name}`,
      creator: `@${_config.meta.authors.name}`,
      title: t(_config.meta.title),
      description: t(_config.meta.description),
      images: [_config.meta.cardImage],
    },
  };
}

// Layout
export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  ServerTranslation(lang, `About`);

  return (
    <html lang={lang} dir={dir(lang)} suppressHydrationWarning>
      <LanguageProvider initialLanguage={lang}>
        <body
          className={`flex w-full min-h-screen h-full flex-col transition-all duration-300 ease-in-out ${inter.className}`}
          suppressHydrationWarning
        >
          <ThemeProvider attribute="class">
            <div className="sticky top-0 left-0 z-[200]">
              <Suspense fallback="...">
                <Header />
              </Suspense>
            </div>
            <div className="flex flex-col w-full h-full transition-all duration-500 ease-in-out">
              <Suspense fallback="...">{children}</Suspense>
            </div>
            <Suspense fallback="...">
              <Footer />
            </Suspense>
          </ThemeProvider>
        </body>
      </LanguageProvider>
    </html>
  );
}
