import en from './locales/en.json';
import uk from './locales/uk.json';
import pl from './locales/pl.json';

export type Language = 'en' | 'uk' | 'pl';

export const languages: ['en', 'uk', 'pl'] = ['en', 'uk', 'pl'];

export const defaultLang = 'en';

export const ui = {
  en,
  uk,
  pl,
} as const;

export const showDefaultLang = true;
