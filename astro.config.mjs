// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://truegatevisa.com',
  vite: {
    server: {
      watch: {
        ignored: ['**/dist/**']
      }
    },
    plugins: [
      tailwindcss(),
      {
        name: 'resolve-dist-favicon',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/dist/favicon.svg' || req.url?.startsWith('/dist/favicon.svg')) {
              try {
                const fs = await import('node:fs/promises');
                const path = await import('node:path');
                const content = await fs.readFile(path.resolve('public/favicon.svg'));
                res.setHeader('Content-Type', 'image/svg+xml');
                res.end(content);
                return;
              } catch (e) {
                // fallback to next
              }
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