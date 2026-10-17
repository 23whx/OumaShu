// 工具圖書館：把目錄（事實）與各語言文案合在一起，給頁面、搜索索引、sitemap 用
import type { Locale } from '../../i18n/routes';
import { dict } from '../../i18n/routes';
import { toolEntry } from '../guides';
import { LIB_TOOLS, SHELVES, SECTIONS, onGitHub, type LibTool, type SectionId, type Shelf } from './catalog';
import type { LibCopy } from './copy/types';
import { en } from './copy/en';
import { zhCN } from './copy/zh-CN';
import { zhTW } from './copy/zh-TW';
import { ja } from './copy/ja-JP';
import { ar } from './copy/ar';
import { ru } from './copy/ru';
import { GROUPS } from './more/index.ts';

export { SECTIONS, SHELVES, LIB_TOOLS, onGitHub };
export type { LibTool, Shelf, SectionId, LibCopy };

const COPY: Record<Locale, LibCopy> = { en, 'zh-CN': zhCN, 'zh-TW': zhTW, 'ja-JP': ja, ar, ru };

// 擴充大類的書架文案寫在 more/*.ts 的書架旁邊，這裡併入各語言的 copy.shelves
for (const [locale, copy] of Object.entries(COPY) as [Locale, LibCopy][]) {
  for (const g of GROUPS) {
    for (const s of g.shelves) {
      copy.shelves[s.id] = { name: s.name[locale], title: s.title[locale], intro: s.intro[locale], keywords: s.kw[locale] };
    }
  }
}

export const LIB_PATH = '/library/';
export const STANDARDS_PATH = '/library/standards/';
export const shelfPath = (id: string) => `/library/${id}/`;

export const libCopy = (locale: Locale): LibCopy => COPY[locale];

const byId = new Map(LIB_TOOLS.map((t) => [t.id, t]));
export const libTool = (id: string): LibTool => byId.get(id)!;

/** 分區順序與每區的書架 */
export const SECTION_IDS = Object.keys(SECTIONS) as SectionId[];
export const shelvesIn = (section: SectionId) => SHELVES.filter((s) => s.section === section);

/** 索書號：分區代碼 + 書架在分區內的序號，例如 IM-03 */
export function callNumber(shelfId: string): string {
  const shelf = SHELVES.find((s) => s.id === shelfId)!;
  const i = shelvesIn(shelf.section).indexOf(shelf);
  return `${SECTIONS[shelf.section].code}-${String(i + 1).padStart(2, '0')}`;
}

/** 書架上的工具數（不重複計算同一工具） */
export const LIB_TOOL_COUNT = new Set(SHELVES.flatMap((s) => s.tools.map((x) => x.id))).size;
export const LIB_SHELF_COUNT = SHELVES.length;

/** 工具在該語言的名稱：本站工具用 locales/*.json 的譯名，其他需要翻譯的看 copy.names */
export function libToolName(id: string, locale: Locale): string {
  const tool = libTool(id);
  if (tool.own) return dict(locale)[id] ?? tool.name;
  return COPY[locale].names[id] ?? tool.name;
}

/** 工具在某個書架上的說明：書架專屬說明優先，否則用工具的一句話介紹 */
export const libNote = (locale: Locale, shelfId: string, id: string): string =>
  COPY[locale].notes[`${shelfId}/${id}`] ?? libTool(id).d?.[locale] ?? anyNote(locale, id);

/** 原有工具放到新書架時，沿用它在其他書架上的說明 */
function anyNote(locale: Locale, id: string): string {
  const key = Object.keys(COPY[locale].notes).find((k) => k.endsWith(`/${id}`));
  return key ? COPY[locale].notes[key] : '';
}

/** 打開工具的網址：本站 imghub 工具跳到對應語言版本 */
export const libToolUrl = (id: string, locale: Locale): string => {
  const tool = libTool(id);
  return tool.own ? toolEntry(id, locale, tool.url) : tool.url;
};

/** 某個書架最近一次核查的日期 */
export const shelfChecked = (shelf: Shelf): string =>
  shelf.tools.map((x) => libTool(x.id).checked).sort().at(-1)!;

export const libraryChecked = (): string => LIB_TOOLS.map((t) => t.checked).sort().at(-1)!;

// ---------- 構建時自檢：資料不完整就讓構建失敗 ----------
(function validate() {
  const problems: string[] = [];
  const seen = new Set<string>();
  for (const t of LIB_TOOLS) {
    if (seen.has(t.id)) problems.push(`重複的工具 id：${t.id}`);
    seen.add(t.id);
    if (!t.url.startsWith('https://')) problems.push(`${t.id} 的網址不是 https`);
    if (t.d) for (const l of Object.keys(COPY)) if (!t.d[l]?.trim()) problems.push(`[${l}] ${t.id} 缺少一句話介紹`);
  }
  const shelfIds = new Set<string>();
  for (const shelf of SHELVES) {
    if (shelfIds.has(shelf.id)) problems.push(`重複的書架 id：${shelf.id}`);
    shelfIds.add(shelf.id);
    if (!shelf.tools.length) problems.push(`書架 ${shelf.id} 是空的`);
    for (const { id } of shelf.tools) if (!byId.has(id)) problems.push(`書架 ${shelf.id} 引用了不存在的工具 ${id}`);
  }
  const used = new Set(SHELVES.flatMap((s) => s.tools.map((x) => x.id)));
  for (const t of LIB_TOOLS) if (!used.has(t.id)) problems.push(`工具 ${t.id} 不在任何書架上`);
  for (const [locale, copy] of Object.entries(COPY)) {
    for (const shelf of SHELVES) {
      const c = copy.shelves[shelf.id];
      if (!c?.name || !c.title || !c.intro || !c.keywords?.length) problems.push(`[${locale}] 缺少書架文案：${shelf.id}`);
      const seenOnShelf = new Set<string>();
      for (const { id } of shelf.tools) {
        if (seenOnShelf.has(id)) problems.push(`書架 ${shelf.id} 重複放了 ${id}`);
        seenOnShelf.add(id);
        if (!libNote(locale as Locale, shelf.id, id)) problems.push(`[${locale}] 缺少說明：${shelf.id}/${id}`);
      }
    }
    for (const key of Object.keys(copy.notes)) {
      const [s, id] = key.split('/');
      if (!SHELVES.some((x) => x.id === s && x.tools.some((y) => y.id === id))) problems.push(`[${locale}] 多餘的說明：${key}`);
    }
    for (const s of SECTION_IDS) if (!copy.sections[s]) problems.push(`[${locale}] 缺少分區名：${s}`);
  }
  if (problems.length) throw new Error(`[library] 圖書館資料有問題：\n${problems.join('\n')}`);
})();
