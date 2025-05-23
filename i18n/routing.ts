import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt'
});

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;