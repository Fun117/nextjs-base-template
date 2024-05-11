import { Config } from "@/types/_config";
import { getURL } from "@/utils/main";

// Base Configuration
const _config: Config = {
  year: "2024",
  // Author
  author: {
    name: "Fun117",
    url: "https://fun117.vercel.app/",
    socialAccounts: {
      email: "fun117.kun@gmail.com",
      github: "https://github.com/Fun117",
      twitter: "https://twitter.com/Fun_117",
      youtube: "https://www.youtube.com/channel/UCT34DhsVlYoyV8Y4c-MTTrQ",
      reddit: "https://www.reddit.com/user/_Fun117/",
      discord: "https://discord.com/users/990984460365365258/",
    },
  },
  // Metadata
  meta: {
    origin: "https://nextjs-base-template.vercel.app", // Site origin
    title: "Next.js base template", // Site title
    description:
      "This Next.js base template is designed as an easy starting point for Next.js projects. It comes with features such as theme switching, i18n (internationalization), and automatic sitemap generation, allowing developers to start their projects quickly.", // Site description
    authors: {
      name: "Fun117", // Author's name
      url: "https://fun117.vercel.app/", // Author's URL
    },
    Image: { icon: "/favicon.ico", apple: "/favicon.png" }, // Icon images
    cardImage:
      "https://nextjs-base-template.vercel.app/brand/nextjs/twitter-card.png", // Card image
    robots: "follow, index", // Robots meta tag content
    url: getURL(), // Site URL
  },
  // i18n Configuration
  i18n: {
    namespaces: [
      "translation", // Translation file namespaces
      "site", // Site-specific translation file namespaces
    ],
    defaultLocale: "ja", // Default language
    locales: [
      "ja", // Japanese
      "en", // English
    ],
    path: "i18n", // Path to translation files
    localeConfigs: {
      ja: {
        label: "日本語", // Japanese label
        htmlLang: "ja-JP", // HTML lang attribute value
        path: "ja", // Path
      },
      en: {
        label: "English", // English label
        htmlLang: "en-US", // HTML lang attribute value
        path: "en", // Path
      },
    },
  },
  // Sitemap Configuration
  sitemap: {
    excludedDirs: [
      "error", // Directory for error pages
      "not-found", // Directory for 404 pages
    ],
  },
  navigation: {
    ui: {
      home_url: "/",
      logo: {
        url: "/brand/vercel/vercel-icon-light.png",
        alt: "Vercel Logo",
      },
      label: "Next.js base",
      style: {
        bg: "primary",
        dataBsTheme: "dark",
      },
    },
    contents: [
      {
        type: "one",
        label: "Home",
        url: "/",
      },
      {
        type: "one",
        label: "About",
        url: "/about",
      },
      {
        type: "group",
        label: "Development",
        links: [
          {
            label: "Author",
            url: "https://fun117.vercel.app/",
            target: "_blank",
          },
          {
            label: "Repository",
            url: "https://github.com/Fun117/nextjs-base-template",
            target: "_blank",
          },
        ],
      },
    ],
  },
  footer: {
    ui: {
      label: "Fun117",
      logo: {
        url: "/brand/fun117/fun117_1080x1080.png",
        alt: "Fun117 Logo",
        css: "border overflow-hidden rounded-full shadow-sm",
      },
      style: {
        bg: "primary",
        dataBsTheme: "dark",
      },
    },
    contents: [
      {
        label: "Site link",
        links: [
          {
            label: "Home",
            url: "/",
          },
          {
            label: "About",
            url: "/about",
          },
        ],
      },
      {
        label: "Development",
        links: [
          {
            label: "Next.js",
            url: "https://nextjs.org/",
            target: "_blank",
          },
          {
            label: "next-themes",
            url: "https://github.com/pacocoursey/next-themes",
            target: "_blank",
          },
          {
            label: "i18next",
            url: "https://www.i18next.com/",
            target: "_blank",
          },
          {
            label: "Lucide React",
            url: "https://lucide.dev/",
            target: "_blank",
          },
          {
            label: "React Bootstrap",
            url: "https://react-bootstrap.netlify.app/",
            target: "_blank",
          },
          {
            label: "Sitemap",
            url: "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap",
            target: "_blank",
          },
        ],
      },
    ],
  },
};

// If you update the languages in i18n, you need to manually update the config in src/middleware.ts.
// (If the locales array in i18n is changed, you need to update the matcher section in middleware.ts)

export default _config;
