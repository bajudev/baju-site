// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  experimental: {
    session: true, // ✅ Enables session support
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});