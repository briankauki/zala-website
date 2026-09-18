import en from '@/locales/en';
import sw from '@/locales/sw';

export const translations = { en, sw };

export const defaultLocale = 'en';
export const locales = ['en', 'sw'];

export function getTranslation(locale) {
  return translations[locale] || translations[defaultLocale];
}

export function t(locale, key) {
  const keys = key.split('.');
  let value = getTranslation(locale);
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }
  return value || key;
}