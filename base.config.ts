import { Config } from "@/types/_config";
import { getURL } from "@/utils/main";

// Base Configuration
const _config: Config = {
    // Metadata
    meta: {
        origin: 'https://nextjs-base-template.vercel.app', // Site origin
        title: 'Next.js base template', // Site title
        description: "This Next.js base template is designed as an easy starting point for Next.js projects. It comes with features such as theme switching, i18n (internationalization), and automatic sitemap generation, allowing developers to start their projects quickly.", // Site description
        authors: {
            name: 'Fun117', // Author's name
            url: 'https://fun117.vercel.app/' // Author's URL
        },
        Image: { icon: "/favicon.ico", apple: "/favicon.png" }, // Icon images
        cardImage: 'https://nextjs-base-template.vercel.app/brand/nextjs/twitter-card.png', // Card image
        robots: 'follow, index', // Robots meta tag content
        url: getURL(), // Site URL
    },
    // i18n Configuration
    i18n: {
        namespaces: [
            "translation", // Translation file namespaces
            "site", // Site-specific translation file namespaces
        ],
        defaultLocale: 'ja', // Default language
        locales: [
            'ja', // Japanese
            'en', // English
        ],
        path: 'i18n', // Path to translation files
        localeConfigs: {
            ja: {
                label: '日本語', // Japanese label
                htmlLang: 'ja-JP', // HTML lang attribute value
                path: 'ja', // Path
            },
            en: {
                label: 'English', // English label
                htmlLang: 'en-US', // HTML lang attribute value
                path: 'en', // Path
            },
        }
    },
    // Sitemap Configuration
    sitemap: {
        excludedDirs: [
            'error', // Directory for error pages
            'not-found', // Directory for 404 pages
        ],
    },
};

// If you update the languages in i18n, you need to manually update the config in src/middleware.ts.
// (If the locales array in i18n is changed, you need to update the matcher section in middleware.ts)

export default _config;
