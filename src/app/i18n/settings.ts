import _config from "../../../base.config";

export const defaultLanguage = _config.i18n.defaultLocale;
export const availableLanguages = _config.i18n.locales;
export const namespaces = _config.i18n.namespaces;

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
