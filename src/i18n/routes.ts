// 多語言網址：英文在根目錄，其他語言各有前綴（/zh-cn/、/ja/…）
// 每頁都輸出 hreflang，讓 Google 按搜索者的語言收錄對應版本
import en from '../locales/en.json';
import zhCN from '../locales/zh-CN.json';
import zhTW from '../locales/zh-TW.json';
import ja from '../locales/ja-JP.json';
import ar from '../locales/ar.json';
import ru from '../locales/ru.json';

export type Locale = 'en' | 'zh-CN' | 'zh-TW' | 'ja-JP' | 'ar' | 'ru';

export interface LocaleInfo {
  id: Locale;
  prefix: string;      // 網址前綴，英文為空
  hreflang: string[];  // 第一個是主值；其餘指向同一頁的地區變體
  og: string;          // og:locale
  label: string;       // 語言選單裡的名稱（用該語言書寫）
  short: string;       // 頂欄按鈕上的縮寫
}

export const LOCALES: LocaleInfo[] = [
  { id: 'en', prefix: '', hreflang: ['en'], og: 'en_US', label: 'English', short: 'EN' },
  { id: 'zh-CN', prefix: 'zh-cn', hreflang: ['zh-CN', 'zh-SG'], og: 'zh_CN', label: '简体中文', short: '简' },
  { id: 'zh-TW', prefix: 'zh-tw', hreflang: ['zh-TW', 'zh-HK', 'zh-MO'], og: 'zh_TW', label: '繁體中文', short: '繁' },
  { id: 'ja-JP', prefix: 'ja', hreflang: ['ja'], og: 'ja_JP', label: '日本語', short: '日' },
  { id: 'ar', prefix: 'ar', hreflang: ['ar'], og: 'ar_AR', label: 'العربية', short: 'ع' },
  { id: 'ru', prefix: 'ru', hreflang: ['ru'], og: 'ru_RU', label: 'Русский', short: 'RU' },
];

export const DEFAULT_LOCALE: Locale = 'en';

export const localeInfo = (id: Locale): LocaleInfo => LOCALES.find((l) => l.id === id)!;

/** 非英文語言的路由參數，給 getStaticPaths 用 */
export const PREFIXED = LOCALES.filter((l) => l.prefix);

export const localeFromPrefix = (prefix?: string): Locale =>
  LOCALES.find((l) => l.prefix === prefix)?.id ?? DEFAULT_LOCALE;

/** 把語言無關的路徑（"/"、"/categories/image/"）轉成該語言的路徑 */
export function localePath(locale: Locale, path = '/'): string {
  const { prefix } = localeInfo(locale);
  return prefix ? `/${prefix}${path}` : path;
}

type Dict = Record<string, any>;
const RAW: Record<Locale, Dict> = { en, 'zh-CN': zhCN, 'zh-TW': zhTW, 'ja-JP': ja, ar, ru };

function merge(base: Dict, over: Dict): Dict {
  const out: Dict = { ...base };
  for (const [k, v] of Object.entries(over)) {
    out[k] = v && typeof v === 'object' && !Array.isArray(v) && base[k] && typeof base[k] === 'object'
      ? merge(base[k], v)
      : v ?? base[k];
  }
  return out;
}

const cache = new Map<Locale, Dict>();
/** 該語言的翻譯；缺的字串回落到英文 */
export function dict(locale: Locale): Dict {
  if (!cache.has(locale)) cache.set(locale, locale === 'en' ? en : merge(en, RAW[locale]));
  return cache.get(locale)!;
}

export const fill = (tpl: string, vals: Record<string, string | number>) =>
  tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => String(vals[k] ?? ''));
