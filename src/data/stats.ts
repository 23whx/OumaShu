// 站點事實：從工具數據算出，文案裡的數字與日期都從這裡取，不手寫
import { tools } from './tools';
import { getLines } from './lines';
import type { Locale } from '../i18n/routes';

export const TOOL_COUNT = tools.length;
export const LINE_COUNT = getLines().length;
export const THIRD_PARTY_COUNT = tools.filter((t) => t.thirdParty).length;
export const OWN_COUNT = TOOL_COUNT - THIRD_PARTY_COUNT;

/** 一組工具中最新的 updatedAt（ISO） */
export const latestUpdate = (list = tools): string | undefined =>
  list.map((t) => t.updatedAt).filter(Boolean).sort().at(-1);

/** 按語言格式化日期，例如 "October 12, 2026"、"2026年10月12日" */
export const formatDate = (iso: string, locale: Locale): string =>
  new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(iso));

export const factValues = (locale: Locale, iso = latestUpdate()) => ({
  tools: TOOL_COUNT,
  lines: LINE_COUNT,
  own: OWN_COUNT,
  third: THIRD_PARTY_COUNT,
  date: iso ? formatDate(iso, locale) : '',
});
