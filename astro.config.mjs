import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://pete-mcpherson.example.com',
  output: 'static',
  adapter: cloudflare(),
});