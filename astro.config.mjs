// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { tools } from './src/data/tools.ts';
import { LIB_TOOLS, SHELVES } from './src/data/library/catalog.ts';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// AdSense 守門：ads.txt 或任何一頁的 AdSense 代碼缺失時，構建直接失敗，不會帶病上線
const ADSENSE_PUB = 'pub-4880646654838411';
const ADSENSE_SCRIPT = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${ADSENSE_PUB}`;
const adsenseGuard = () => ({
  name: 'adsense-guard',
  hooks: {
    'astro:build:done': ({ dir, logger }) => {
      const out = fileURLToPath(dir);
      const adsTxt = path.join(out, 'ads.txt');
      const line = `google.com, ${ADSENSE_PUB}, DIRECT, f08c47fec0942fa0`;
      const adsLines = fs.existsSync(adsTxt) ? fs.readFileSync(adsTxt, 'utf8').split(String.fromCharCode(10)).map((l) => l.trim()) : [];
      if (!adsLines.includes(line)) {
        throw new Error(`[adsense-guard] dist/ads.txt 缺失或內容不對，應包含：${line}`);
      }
      const pages = [];
      const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
        const p = path.join(d, e.name);
        if (e.isDirectory()) walk(p);
        else if (e.name.endsWith('.html')) pages.push(p);
      });
      walk(out);
      const missing = pages.filter((p) => {
        const head = fs.readFileSync(p, 'utf8').split('</head>')[0];
        return !head.includes(`src="${ADSENSE_SCRIPT}"`) || !head.includes('crossorigin="anonymous"');
      });
      if (missing.length) {
        throw new Error(`[adsense-guard] 這些頁面的 <head> 裡沒有 AdSense 代碼：\n${missing.map((p) => path.relative(out, p)).join('\n')}`);
      }
      logger.info(`ads.txt OK · AdSense code in <head> of all ${pages.length} pages`);
    },
  },
});

// sitemap 的 lastmod：取該頁工具中最新的 updatedAt
const latest = (list) =>
  list.map((t) => t.updatedAt).filter(Boolean).sort().at(-1);

// https://astro.build/config
export default defineConfig({
  site: 'https://oumashu.top',
  integrations: [
    adsenseGuard(),
    react(), 
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      // 每個網址都附上其他語言版本（xhtml:link hreflang）
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', 'zh-cn': 'zh-CN', 'zh-tw': 'zh-TW', ja: 'ja', ar: 'ar', ru: 'ru' },
      },
      serialize(item) {
        // 去掉語言前綴後再判斷頁面類型
        const path = new URL(item.url).pathname.replace(/^\/(zh-cn|zh-tw|ja|ar|ru)(?=\/)/, '');
        const cat = path.match(/^\/categories\/([^/]+)\/$/);
        const guide = path.match(/^\/tools\/([^/]+)\/$/);
        const list = path === '/' ? tools
          : cat ? tools.filter((t) => t.category === cat[1])
          : guide ? tools.filter((t) => t.id === guide[1])
          : [];
        // 圖書館頁：取該書架（或全館）工具的最近核查日期
        const shelf = SHELVES.find((x) => path === `/library/${x.id}/`);
        const libDates = shelf
          ? shelf.tools.map((x) => LIB_TOOLS.find((t) => t.id === x.id).checked)
          : path.startsWith('/library/') ? LIB_TOOLS.map((t) => t.checked) : [];
        const lastmod = libDates.length ? libDates.sort().at(-1) : latest(list);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    })
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
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
