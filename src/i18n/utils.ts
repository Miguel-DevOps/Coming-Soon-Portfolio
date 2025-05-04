import { ui, DEFAULT_LANG } from './ui';
import { LANGUAGES } from './languages';

/**
 * Extracts the language code from the URL path.
 * If the language is not supported, it defaults to the `DEFAULT_LANG`.
 * 
 * @param url - The URL object to extract the language from.
 * @returns The language code (e.g., 'en', 'es').
 */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return DEFAULT_LANG;
}

/**
 * Provides a translation function for the specified language.
 * If a key is not found in the selected language, it falls back to the default language.
 * 
 * @param lang - The language code to use for translations.
 * @returns A function `t` to retrieve translations by key, with optional parameter replacement.
 */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof DEFAULT_LANG], params: Record<string, string | number> = {}) {
    let text: string = ui[lang][key] || ui[DEFAULT_LANG][key];
    // Replace parameters like {name} in the translation string
    for (const param in params) {
      text = text.replace(`{${param}}`, String(params[param]));
    }
    return text;
  }
}

/**
 * Generates a translated URL path for internal links.
 * Removes any existing language prefix and appends the desired language.
 * 
 * @param lang - The target language code (e.g., 'en', 'es').
 * @param path - The original path to translate (default is an empty string).
 * @returns The translated path with the language prefix.
 */
export function getTranslatedPath(lang: keyof typeof ui, path: string = '') {
  // Remove leading/trailing slashes and any existing language prefix
  const cleanPath = path.replace(/^\/|\/$/g, '').replace(/^(en|es)\/?/, '');
  return `/${lang}/${cleanPath}`;
}