import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk', 'pl'],
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
