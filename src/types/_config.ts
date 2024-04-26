import { Robots } from "next/dist/lib/metadata/types/metadata-types";
import { URL } from "url";

interface meta {
    origin: string | URL,
    title: string,
    description: string,
    authors: {
        name: string,
        url: string | URL,
    },
    Image: string | object,
    cardImage: string | URL,
    robots: null | string | Robots,
    url: string,
}

interface LocaleConfig {
    label: string;
    htmlLang: string;
    path: string;
}

interface I18nConfig {
    namespaces: string[];
    defaultLocale: string;
    locales: string[];
    path: string;
    localeConfigs: {
        [key: string]: LocaleConfig;
    };
}

export interface Config {
    meta: meta;
    i18n: I18nConfig;
    sitemap?: {
        excludedDirs?: string[];
    };
}