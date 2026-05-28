// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://truegatevisa.com',
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'resolve-dist-favicon',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/dist/favicon.svg' || req.url?.startsWith('/dist/favicon.svg')) {
              req.url = '/favicon.svg';
            }
            next();
          });
        }
      }
    ],
    build: {
      cssMinify: true
    }
  },

  integrations: [react(), sitemap()]
});