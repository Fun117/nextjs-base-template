import { I18nConfig } from "@/app/i18n/settings";

const i18nConfig: I18nConfig = {
    namespaces: [
        "translation",
        "site",
    ],
    defaultLocale: 'ja',
    locales: [
        'ja',
        'en',
    ],
    path: 'i18n',
    localeConfigs: {
        ja: {
            label: '日本語',
            htmlLang: 'ja-JP',
            path: 'ja',
        },
        en: {
            label: 'English',
            htmlLang: 'en-US',
            path: 'en',
        },
    }
};

export default i18nConfig;