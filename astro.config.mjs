import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: Update site and base for your GitHub Pages deployment
// For user/org site (username.github.io): site = 'https://username.github.io', no base needed
// For project site: site = 'https://username.github.io', base = '/repository-name'
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://SSBaek-YU.github.io';
const BASE_PATH = process.env.PUBLIC_BASE_PATH || '/email-lab';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap(),
  ],
  build: {
    assets: '_assets',
  },
});
