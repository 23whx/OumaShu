// 擴充大類的資料格式：網站的事實與六種語言的一句話介紹寫在一起，書架文案也寫在書架旁邊
import type { LibTool, SectionId } from '../catalog.ts';

export type Loc = 'en' | 'zh-CN' | 'zh-TW' | 'ja-JP' | 'ar' | 'ru';
export type L10n = Record<Loc, string>;

/** 一個網站：與 LibTool 相同，核查日期可省略（用預設），介紹 d 必填 */
export type Site = Omit<LibTool, 'checked' | 'd'> & { checked?: string; d: L10n };

export interface ShelfDef {
  id: string;
  section: SectionId;
  /** 排在前面的更推薦 */
  tools: (string | { id: string; tested?: boolean })[];
  name: L10n;
  title: L10n;
  intro: L10n;
  /** 搜索同義詞 */
  kw: Record<Loc, string[]>;
}

export interface Group {
  sites: Site[];
  shelves: ShelfDef[];
  /** 往原有書架追加的網站：書架 id → 網站 id */
  extend?: Record<string, string[]>;
}

/** 六種語言的固定順序：寫資料時用陣列，省去每條重複寫語言鍵 */
export const LOCS: Loc[] = ['en', 'zh-CN', 'zh-TW', 'ja-JP', 'ar', 'ru'];
export type Six<T = string> = [T, T, T, T, T, T];
const l10n = <T>(a: Six<T>) => Object.fromEntries(LOCS.map((l, i) => [l, a[i]])) as Record<Loc, T>;

/** 一個網站；facts 至少要有 price 與 runs，d 依 LOCS 順序 */
export function site(
  id: string,
  name: string,
  url: string,
  facts: Pick<LibTool, 'price' | 'runs'> & Partial<Omit<LibTool, 'id' | 'name' | 'url' | 'd'>>,
  d: Six,
): Site {
  return { id, name, url, ...facts, d: l10n(d) };
}

/** 一個書架；name/title/intro/kw 都依 LOCS 順序 */
export function shelf(
  id: string,
  section: SectionId,
  tools: ShelfDef['tools'],
  name: Six,
  title: Six,
  intro: Six,
  kw: Six<string[]>,
): ShelfDef {
  return { id, section, tools, name: l10n(name), title: l10n(title), intro: l10n(intro), kw: l10n(kw) };
}
