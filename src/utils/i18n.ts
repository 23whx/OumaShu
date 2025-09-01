// 国际化配置和工具函数

export type Locale = "zh-CN" | "zh-TW" | "en" | "ja-JP" | "ar" | "ru";

export const SUPPORTED_LOCALES: Locale[] = ["zh-CN", "zh-TW", "en", "ja-JP", "ar", "ru"];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_NAMES: Record<Locale, string> = {
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文", 
  "en": "English",
  "ja-JP": "日本語",
  "ar": "العربية",
  "ru": "Русский"
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  "zh-CN": "🇨🇳",
  "zh-TW": "🇹🇼",
  "en": "🇺🇸",
  "ja-JP": "🇯🇵", 
  "ar": "🇸🇦",
  "ru": "🇷🇺"
};

// 检测浏览器语言偏好
export function detectLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  
  // 从 localStorage 读取用户偏好
  const stored = localStorage.getItem('locale') as Locale;
  if (stored && SUPPORTED_LOCALES.includes(stored)) {
    return stored;
  }
  
  // 从浏览器语言检测
  const browserLang = navigator.language.toLowerCase();
  
  // 精确匹配
  for (const locale of SUPPORTED_LOCALES) {
    if (browserLang === locale.toLowerCase()) {
      return locale;
    }
  }
  
  // 语言前缀匹配
  const langPrefix = browserLang.split('-')[0];
  const localeMap: Record<string, Locale> = {
    'zh': browserLang.includes('tw') || browserLang.includes('hk') || browserLang.includes('mo') ? 'zh-TW' : 'zh-CN',
    'ja': 'ja-JP',
    'ar': 'ar',
    'ru': 'ru',
    'en': 'en'
  };
  
  return localeMap[langPrefix] || DEFAULT_LOCALE;
}

// 动态加载语言包
export async function loadMessages(locale: Locale): Promise<Record<string, any>> {
  try {
    const messages = await import(`../locales/${locale}.json`);
    return messages.default || messages;
  } catch (error) {
    console.warn(`Failed to load messages for locale: ${locale}`, error);
    if (locale !== DEFAULT_LOCALE) {
      return loadMessages(DEFAULT_LOCALE);
    }
    return {};
  }
}

// 检查是否为 RTL 语言
export function isRtl(locale: Locale): boolean {
  return locale === "ar";
}

// 保存语言偏好
export function setLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('locale', locale);
}

// 获取文本方向
export function getTextDirection(locale: Locale): "ltr" | "rtl" {
  return isRtl(locale) ? "rtl" : "ltr";
}

// 格式化数字（考虑语言环境）
export function formatNumber(num: number, locale: Locale): string {
  return new Intl.NumberFormat(locale).format(num);
}

// 格式化日期（考虑语言环境）
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// 简单的消息插值函数
export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return String(values[key] || match);
  });
}

// 获取嵌套对象属性
export function getNestedMessage(messages: Record<string, any>, key: string): string {
  const keys = key.split('.');
  let result = messages;
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      return key; // 如果没找到，返回原始 key
    }
  }
  
  return typeof result === 'string' ? result : key;
}

// 翻译函数
export function t(messages: Record<string, any>, key: string, values?: Record<string, string | number>): string {
  let message = getNestedMessage(messages, key);
  
  if (values) {
    message = interpolate(message, values);
  }
  
  return message;
}

// URL 路径处理（如果需要多语言路由）
export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) {
    return path;
  }
  return `/${locale}${path}`;
}

// 从路径中提取语言
export function getLocaleFromPath(path: string): { locale: Locale; pathname: string } {
  const segments = path.split('/').filter(Boolean);
  
  if (segments.length > 0) {
    const maybeLocale = segments[0] as Locale;
    if (SUPPORTED_LOCALES.includes(maybeLocale)) {
      return {
        locale: maybeLocale,
        pathname: '/' + segments.slice(1).join('/')
      };
    }
  }
  
  return {
    locale: DEFAULT_LOCALE,
    pathname: path
  };
}
