import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deploys to GitHub Pages at https://sharathsphd.github.io/tech-web/
// (site/base are ignored by Vercel, which serves from the domain root —
// BASE_PATH env lets CI override).
const base = process.env.BASE_PATH ?? '/tech-web';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://sharathsphd.github.io',
  base,
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap()],
});
