import { Robots } from "next/dist/lib/metadata/types/metadata-types";
import { HTMLAttributeAnchorTarget } from "react";
import { URL } from "url";

// authors
interface TypeAuthorSocialAccounts {
  email?: string;
  github?: string | URL;
  linkedin?: string | URL;
  twitter?: string | URL;
  facebook?: string | URL;
  instagram?: string | URL;
  youtube?: string | URL;
  reddit?: string | URL;
  tiktok?: string | URL;
  telegram?: string | URL;
  discord?: string | URL;
  twitch?: string | URL;
}
interface TypeAuthor {
  // Name of the author
  name: string;
  // URL of the author
  url: string;
  // Social accounts of the author
  socialAccounts?: TypeAuthorSocialAccounts;
}

// Metadata
interface Meta {
  // The origin of the site
  origin: string | URL;
  // The title of the site
  title: string;
  // Description of the site
  description: string;
  // Information about the authors
  authors: {
    name: string; // Name of the author
    url: string | URL; // URL of the author
  };
  // URL or path to the image representing the site
  Image: string | object;
  // URL or path to the image used for social media cards
  cardImage: string | URL;
  // Robots meta tag content
  robots: null | string | Robots;
  // URL of the site
  url: string;
}

// i18n
interface LocaleConfig {
  // Label for the locale
  label: string;
  // HTML lang attribute value
  htmlLang: string;
  // Path to locale-specific content
  path: string;
}
interface I18nConfig {
  // List of namespaces for translations
  namespaces: string[];
  // Default locale
  defaultLocale: string;
  // Supported locales
  locales: string[];
  // Path to translation files
  path: string;
  // Configuration for each locale
  localeConfigs: {
    [key: string]: LocaleConfig;
  };
}

// Navigation
interface TypeNavigationUI {
  // URL of the home page
  home_url: string;
  // URL or path to the logo image
  logo?: {
    url?: string | URL; // URL of the logo image
    url_dark?: string | URL; // URL of the dark logo image
    alt?: string; // Alt text for the logo image
  };
  // Label for the site
  label?: string;
  // Style configuration for the navigation UI
  style?: {
    expand?: boolean | string | "sm" | "md" | "lg" | "xl" | "xxl"; // Expansion size
    bg?: string; // Background color
    dataBsTheme?: string; // Bootstrap theme
  };
}
interface TypeNavLink {
  // Label for the navigation link
  label: string;
  // URL of the navigation link
  url: string;
  // Target attribute for the navigation link
  target?: HTMLAttributeAnchorTarget | undefined;
}
interface TypeNavigationContents {
  // Type of navigation content (single link or group)
  type: "one" | "group";
  // Label for the navigation content
  label: string;
  // URL of the navigation content (for single link)
  url?: string;
  // Target attribute for the navigation content (for single link)
  target?: HTMLAttributeAnchorTarget | undefined;
  // List of links (for group)
  links?: TypeNavLink[];
}
interface TypeNavigation {
  // UI configuration for navigation
  ui: TypeNavigationUI;
  // List of navigation contents
  contents: TypeNavigationContents[];
}

// Footer navigation
interface TypeFooterNavigationUI {
  // URL or path to the logo image
  logo?: {
    url?: string | URL; // URL of the logo image
    alt?: string; // Alt text for the logo image
    css?: string; // CSS
  };
  // Label for the site
  label?: string;
  // Style configuration for the navigation UI
  style?: {
    expand?: boolean | string | "sm" | "md" | "lg" | "xl" | "xxl"; // Expansion size
    bg?: string; // Background color
    dataBsTheme?: string; // Bootstrap theme
  };
}
interface TypeFooterNavigationContents {
  // Label for the navigation content
  label: string;
  // URL of the navigation content (for single link)
  url: string;
  // Target attribute for the navigation content (for single link)
  target?: HTMLAttributeAnchorTarget | undefined;
}
interface TypeFooterNavigationContentGroup {
  label: string;
  links: TypeFooterNavigationContents[];
}
interface TypeFooterNavigation {
  // UI configuration for navigation
  ui: TypeFooterNavigationUI;
  // List of navigation contents
  contents: TypeFooterNavigationContentGroup[];
}

// Configuration Interface
export interface Config {
  year: string;
  // Author
  author: TypeAuthor;
  // Metadata configuration
  meta: Meta;
  // Internationalization configuration
  i18n: I18nConfig;
  // Sitemap configuration
  sitemap?: {
    // List of directories to exclude from the sitemap
    excludedDirs?: string[];
  };
  // Navigation configuration
  navigation: TypeNavigation;
  footer?: TypeFooterNavigation;
}
