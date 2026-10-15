// 工具介紹頁：哪些工具有介紹頁、各語言文案、截圖與相關工具
import fs from 'node:fs';
import path from 'node:path';
import type { Locale } from '../../i18n/routes';
import type { Guide, GuideMeta } from './types';
import { en } from './en';
import { zhCN } from './zh-CN';
import { zhTW } from './zh-TW';
import { ja } from './ja-JP';
import { ar } from './ar';
import { ru } from './ru';

export type { Guide, GuideMeta };

const COPY: Record<Locale, Record<string, Guide>> = { en, 'zh-CN': zhCN, 'zh-TW': zhTW, 'ja-JP': ja, ar, ru };

// OumaShu 工具 id → imghub 路徑名
const IMGHUB: Record<string, string> = {
  'image-enhancer': 'image-enhancer',
  'online-drawing': 'online-drawing',
  'pic-press': 'image-compress',
  'image-ocr': 'image-ocr',
  'watermark-adder': 'watermark-adder',
  'ai-watermark-remover': 'ai-watermark-remover',
  'subtitle-screenshot': 'subtitle-generator',
  'meme-slicer': 'meme-slicer',
  'dnd-alignment': 'dnd-alignment',
  'mbti-grid': 'mbti-grid',
  'youtube-thumbnail': 'video-thumbnail',
  'wiggle-studio': 'wiggle-studio',
  'full-page-screenshot': 'screenshot',
};

const imghub = (slug: string) => ({
  en: `https://imghub.oumashu.top/en/tools/${slug}/`,
  zh: `https://imghub.oumashu.top/zh/tools/${slug}/`,
  ja: `https://imghub.oumashu.top/ja/tools/${slug}/`,
});

const RELATED: Record<string, string[]> = {
  'image-enhancer': ['pic-press', 'online-drawing', 'ai-watermark-remover'],
  'online-drawing': ['pic-press', 'watermark-adder', 'wiggle-studio'],
  'pic-press': ['image-enhancer', 'online-drawing', 'meme-slicer'],
  'image-ocr': ['full-page-screenshot', 'online-drawing', 'subtitle-screenshot'],
  'watermark-adder': ['online-drawing', 'pic-press', 'ai-watermark-remover'],
  'ai-watermark-remover': ['image-enhancer', 'online-drawing', 'pic-press'],
  'subtitle-screenshot': ['image-ocr', 'online-drawing', 'pic-press'],
  'meme-slicer': ['online-drawing', 'dnd-alignment', 'pic-press'],
  'dnd-alignment': ['mbti-grid', 'meme-slicer', 'online-drawing'],
  'mbti-grid': ['dnd-alignment', 'online-drawing', 'pic-press'],
  'youtube-thumbnail': ['online-drawing', 'pic-press', 'image-ocr'],
  'wiggle-studio': ['online-drawing', 'pic-press', 'meme-slicer'],
  'full-page-screenshot': ['image-ocr', 'online-drawing', 'pic-press'],
  yifang: ['mbti-test', 'learn-languages', 'ebook-translate'],
};

/** 有介紹頁的工具（順序即站內排列順序） */
export const GUIDE_IDS = Object.keys(RELATED);

const shotsFor = (id: string): string[] => {
  const dir = path.join(process.cwd(), 'public', 'guides', id);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => /^step-\d+\.webp$/.test(f)).sort().map((f) => `/guides/${id}/${f}`);
};

export function guideMeta(id: string): GuideMeta {
  const slug = IMGHUB[id];
  return {
    shots: shotsFor(id),
    related: RELATED[id] ?? [],
    urls: slug
      ? imghub(slug)
      : id === 'yifang'
        ? { en: 'https://yifang.oumashu.top/en/', zh: 'https://yifang.oumashu.top/zh/' }
        : undefined,
  };
}

export const hasGuide = (id: string) => GUIDE_IDS.includes(id);

/** 該語言的文案；缺稿時回落到英文 */
export const guideFor = (id: string, locale: Locale): Guide | undefined => COPY[locale][id] ?? en[id];

/** 打開工具時應去的入口：簡繁中文 → zh、日文 → ja，其餘 → en */
export function toolEntry(id: string, locale: Locale, fallback: string): string {
  const urls = guideMeta(id).urls;
  if (!urls) return fallback;
  const key = locale.startsWith('zh') ? 'zh' : locale === 'ja-JP' ? 'ja' : 'en';
  return urls[key] ?? urls.en ?? fallback;
}

/** 介紹頁的語言無關路徑 */
export const guidePath = (id: string) => `/tools/${id}/`;
