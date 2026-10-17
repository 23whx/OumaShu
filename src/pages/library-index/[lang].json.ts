// 首頁搜索框用的圖書館索引：/library-index/en.json、/library-index/zh-tw.json …
// 首頁在使用者第一次聚焦搜索框時才載入，不影響首屏速度
import type { APIRoute } from 'astro';
import { LOCALES, localePath, type Locale } from '../../i18n/routes';
import {
  SECTIONS, SHELVES, callNumber, libCopy, libToolName, shelfPath,
} from '../../data/library';

export function getStaticPaths() {
  return LOCALES.map((l) => ({ params: { lang: l.prefix || 'en' }, props: { locale: l.id } }));
}

export const GET: APIRoute = ({ props }) => {
  const locale = props.locale as Locale;
  const c = libCopy(locale);
  const shelves = SHELVES.map((s) => {
    const copy = c.shelves[s.id];
    const names = s.tools.map((x) => libToolName(x.id, locale));
    return {
      id: s.id,
      code: callNumber(s.id),
      color: SECTIONS[s.section].color,
      name: copy.name,
      intro: copy.intro,
      href: localePath(locale, shelfPath(s.id)),
      count: s.tools.length,
      // 搜索文本：書架名、標題、同義詞、英文 id
      text: [copy.name, copy.title, ...copy.keywords, s.id.replace(/-/g, ' ')].join(' ').toLowerCase(),
      tools: names,
    };
  });
  // 工具名命中時，連到它所在的第一個書架
  const tools: { name: string; shelf: string; href: string; code: string; color: string }[] = [];
  const seen = new Set<string>();
  for (const s of SHELVES) {
    for (const x of s.tools) {
      if (seen.has(x.id)) continue;
      seen.add(x.id);
      tools.push({
        name: libToolName(x.id, locale),
        shelf: c.shelves[s.id].name,
        href: `${localePath(locale, shelfPath(s.id))}#${x.id}`,
        code: callNumber(s.id),
        color: SECTIONS[s.section].color,
      });
    }
  }
  return new Response(JSON.stringify({ shelves, tools }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
