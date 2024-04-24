import i18nConfig from "../../../i18n.config";

interface LocaleConfig {
    label: string;
    htmlLang: string;
    path: string;
}

export interface I18nConfig {
    defaultLocale: string;
    locales: string[];
    path: string;
    localeConfigs: {
        [key: string]: LocaleConfig;
    };
}

export const defaultLanguage = i18nConfig.defaultLocale;
export const availableLanguages = i18nConfig.locales;

export const namespaces = ['translation', 'test'];

export function getOptions(lng = defaultLanguage) {
    return {
        lng,
        defaultNS: defaultLanguage,
        fallbackLng: defaultLanguage,
        fallbackNS: namespaces[0],
        ns: namespaces,
        supportedLngs: availableLanguages,
    };
}