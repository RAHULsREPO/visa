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
        name: 'ignore-dist-favicon',
        resolveId(id) {
          if (id.replace(/\\/g, '/').includes('dist/favicon.svg')) {
            return 'virtual-dist-favicon';
          }
          return null;
        },
        load(id) {
          if (id === 'virtual-dist-favicon') {
            return 'export default ""';
          }
          return null;
        },
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url?.includes('dist/favicon.svg')) {
              try {
                const fs = await import('node:fs/promises');
                const path = await import('node:path');
                const content = await fs.readFile(path.resolve('public/favicon.svg'));
                res.setHeader('Content-Type', 'image/svg+xml');
                res.end(content);
                return;
              } catch (e) {
                // ignore
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