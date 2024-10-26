import en from './locales/en.json';
import uk from './locales/uk.json';
import pl from './locales/pl.json';

export const ui = {
  en,
  uk,
  pl,
} as const;

export type Language = keyof typeof ui;

export const languages = Object.keys(ui) as Language[];
export const defaultLang = 'en';
export const showDefaultLang = true;
