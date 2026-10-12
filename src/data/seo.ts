// 搜索引擎文案：每頁一份獨立的標題、描述、H1 與介紹
// 關鍵詞依據 Google 搜索建議（2026-10-12）：
// "free online tools"、"free online image/video/text tools"、"no sign up"、"online ocr free"、
// "add watermark to photo online free"、"full page screenshot online"、"learn chinese chess online" 等
import { tools } from './tools';
import type { Locale } from '../i18n/routes';
import { SEO_I18N } from './seo.i18n';

const count = tools.length;

export interface PageSeo {
  title: string;
  description: string;
  keywords: string;
}

export const HOME_SEO: PageSeo = {
  title: 'Free Online Tools, No Sign-up: Image, Video & Text | OumaShu',
  description: `A hand-picked directory of ${count} free online tools that run in your browser: image compressor, OCR, watermark, video to GIF, screen recorder and more. No sign-up.`,
  keywords:
    'free online tools, free browser tools, online tools no sign up, free image tools, free video tools, free text tools, online ocr, image compressor, video to gif, screen recorder online',
};

export interface CategorySeo {
  title: string;       // <title>，約 50–60 字元
  description: string; // meta description，150–160 字元以內
  h1: string;
  intro: string;       // 頁首介紹，1–3 句，寫真實功能
  keywords: string;
}

export const CATEGORY_SEO: Record<string, CategorySeo> = {
  image: {
    title: 'Free Online Image Tools: Compress, OCR & Watermark | OumaShu',
    description:
      'Free online image tools in your browser: image compressor, OCR, add watermark, AI upscaler, drawing editor, meme slicer and more. No sign-up needed.',
    h1: 'Free Online Image Tools',
    intro:
      'Compress JPG, PNG and WebP, pull text out of screenshots with OCR, add a watermark, upscale a blurry photo, slice a meme into a grid or take a full-page screenshot. Most of these image tools process files locally in your browser, so nothing is uploaded.',
    keywords:
      'free online image tools, image compressor online, online ocr free, add watermark to photo online free, ai image upscaler, full page screenshot online, online drawing tool, meme grid maker',
  },
  video: {
    title: 'Free Online Video Tools: Video to GIF & Screen Recorder | OumaShu',
    description:
      'Free online video tools: convert video to GIF and record your screen, webcam and audio right in the browser. Nothing to install and no sign-up.',
    h1: 'Free Online Video Tools',
    intro:
      'Turn a clip into a GIF or record your screen, webcam and microphone without installing anything. Both tools run in the browser.',
    keywords: 'free online video tools, video to gif converter, online screen recorder, record screen online free, no install',
  },
  audio: {
    title: 'Free Online Audio Tools: Extract & Trim Audio from Video | OumaShu',
    description:
      'Extract audio from video, trim it and convert between formats online for free. Runs in your browser with no sign-up.',
    h1: 'Free Online Audio Tools',
    intro:
      'MediaTrim pulls the audio track out of a video, trims it and converts the format, all inside your browser.',
    keywords: 'free online audio tools, extract audio from video online, audio trimmer online, video to mp3 online',
  },
  text: {
    title: 'Free Online Text Tools: Markdown Editor & Word Counter | OumaShu',
    description:
      'Free online text tools: a Markdown editor with live preview and PDF/Word export, plus word count, dedupe and simplified/traditional Chinese conversion.',
    h1: 'Free Online Text Tools',
    intro:
      'Write Markdown with a live preview and export it to PDF, HTML or Word, or clean up text: count words, remove duplicate lines, check word frequency and convert between simplified and traditional Chinese. Text stays in your browser.',
    keywords:
      'free online text tools, online markdown editor, word counter online, remove duplicate lines online, simplified to traditional chinese converter',
  },
  education: {
    title: 'AI Language Practice & EPUB eBook Translator | OumaShu',
    description:
      'Practice a foreign language with AI conversations and PDF Q&A, or translate EPUB eBooks while keeping the original layout. Free online learning tools.',
    h1: 'Free Online Learning Tools',
    intro:
      'Practice speaking a new language with an AI conversation partner, quiz yourself on a PDF, or translate an EPUB eBook into another language while keeping its formatting.',
    keywords: 'free online learning tools, ai language practice, epub translator online, translate ebook online',
  },
  'workplace-slack': {
    title: 'Stealth Novel Readers for Work: Disguised Reading Apps | OumaShu',
    description:
      'Read novels at work without standing out: a web reader disguised as a Microsoft Word document and a Windows reader that hides in the taskbar title.',
    h1: 'Stealth Reading Tools for Work',
    intro:
      'Two readers for a quiet break at your desk. Work Whale shows a novel inside a page that looks like Microsoft Word, and StealthNovel is a Windows reader that hides text in the taskbar title.',
    keywords: 'novel reader disguised as word, stealth reader, read novels at work, boss key reader',
  },
  search: {
    title: 'Free Cloud Drive & Document Search Engines | OumaShu',
    description:
      'Search engines for shared cloud-drive links and Feishu (Lark) documents. Find files and docs that ordinary web search misses. Free to use.',
    h1: 'Cloud Drive & Document Search',
    intro:
      'PanSou searches shared cloud-drive links across many channels at once, and Feisoo finds public Feishu (Lark) documents.',
    keywords: 'cloud drive search engine, netdisk search, feishu document search, lark docs search',
  },
  resources: {
    title: 'Best Free Resource Directories: FMHY, Wotaku & More | OumaShu',
    description:
      'Hand-picked directories of free resources on the internet: FMHY, the Wotaku anime and manga index, and a curated software and course collection.',
    h1: 'Free Resource Directories',
    intro:
      'Large, well-maintained indexes of free things on the internet: FMHY for almost everything, Wotaku for anime, manga and games, and a curated storage room of software and courses.',
    keywords: 'fmhy, free media heck yeah, wotaku, free resources directory, anime manga index',
  },
  entertainment: {
    title: 'Free MBTI Personality Test & Character Database | OumaShu',
    description:
      'Take a free 68-question MBTI personality test, browse MBTI types of anime, manga and game characters, or read about Chinese metaphysics and fortune telling.',
    h1: 'Personality Tests & Fun Sites',
    intro:
      'A free 68-question MBTI test, a database of MBTI types for anime, comic, game and novel characters, and a blog about Chinese metaphysics.',
    keywords: 'free mbti test, mbti personality test online, anime character mbti database, acgn personality database',
  },
  social: {
    title: 'Free Anonymous Chat Room, No Registration | OumaShu',
    description:
      'Create a temporary chat room instantly with no registration, share messages and files in real time, or find a sleep buddy. Free social tools.',
    h1: 'Free Chat & Social Tools',
    intro:
      'CuisineChat opens a temporary chat room in one click, with real-time messages and file sharing and no account. BedMate helps you find a sleep buddy to keep a healthier routine.',
    keywords: 'temporary chat room no registration, anonymous chat room online, free chat room no sign up',
  },
  'file-transfer': {
    title: 'Free P2P File Transfer in the Browser, End-to-End | OumaShu',
    description:
      'Send files and text peer-to-peer from your browser. End-to-end transfer where data does not pass through a server. Free and no sign-up.',
    h1: 'Free P2P File Transfer',
    intro:
      'Send files and text directly between two devices from the browser. The transfer is peer-to-peer, so the data does not go through a server.',
    keywords: 'p2p file transfer browser, send files peer to peer, end to end file transfer online, airdrop alternative web',
  },
  games: {
    title: 'Learn Chinese Chess, Go, Shogi & Rubik’s Cube Online | OumaShu',
    description:
      'Learn Rubik’s cube, chess, Chinese chess (xiangqi), shogi, Go, mahjong, poker and baccarat from zero, then practice on interactive boards. No sign-up.',
    h1: 'Learn Board Games Online',
    intro:
      'Yifang teaches eight classic games from the rules up: Rubik’s cube, chess, Chinese chess (xiangqi), shogi, Go, mahjong, Texas hold’em and baccarat. Each one has an interactive board for practice, in Chinese and English.',
    keywords: 'learn chinese chess online, learn xiangqi, learn go online, learn shogi, rubik’s cube tutorial, mahjong rules',
  },
};

/** 首頁文案（按語言） */
export const homeSeo = (locale: Locale): PageSeo =>
  locale === 'en' ? HOME_SEO : SEO_I18N[locale].home(count);

/** 分類頁文案（按語言）；缺稿時回落到英文 */
export function categorySeo(locale: Locale, id: string, name = id): CategorySeo {
  const local = locale === 'en' ? undefined : SEO_I18N[locale].categories[id];
  return local ?? CATEGORY_SEO[id] ?? {
    title: `Free Online ${name} Tools | OumaShu`,
    description: `Free online ${name.toLowerCase()} tools that run in your browser. No sign-up.`,
    h1: `Free Online ${name} Tools`,
    intro: `Free ${name.toLowerCase()} tools that run in your browser.`,
    keywords: `free online ${name.toLowerCase()} tools`,
  };
}
