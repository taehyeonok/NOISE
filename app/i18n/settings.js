export const fallbackLng = "en";
export const languages = [
  fallbackLng,
  "ko",
  "br",
  "ch",
  "cz",
  "fr",
  "ge",
  "hu",
  "it",
  "pl",
  "pt",
  "ro",
  "ru",
  "sp",
  "tr",
  "uk",
];
export const defaultNS = "common";
export const cookieName = "latsRChecker_i18next";

export function getOptions(lang = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
