import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import vercelServerless from '@astrojs/vercel/serverless';

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
  output: 'server',
  adapter: vercelServerless(),
});
