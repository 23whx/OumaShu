// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://oumashu.top',
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          'zh-CN': 'zh-CN',
          'zh-TW': 'zh-TW',
          'ja-JP': 'ja-JP',
          ar: 'ar',
          ru: 'ru'
        }
      }
    })
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  },
  server: {
    port: 1596
  },
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          charset: false
        }
      }
    }
  }
});
