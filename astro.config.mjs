// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
// On Cloudflare Pages preview builds, use the unique deploy URL so OG/canonical
// tags self-reference instead of pointing at production rae.partners.
const isProdBranch = process.env.CF_PAGES_BRANCH === 'main';
const site = !isProdBranch && process.env.CF_PAGES_URL
  ? process.env.CF_PAGES_URL
  : 'https://rae.partners';

export default defineConfig({
  site,
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/internal/'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
    mdx()
  ]
});
