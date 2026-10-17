// /llms.txt：給 AI 助手的站點導覽（社區提案格式；Google 搜索不使用它，部分 AI 工具會讀）
// 構建時從工具數據生成，與頁面內容保持一致
import type { APIRoute } from 'astro';
import { getLines, hostOf } from '../data/lines';
import { categorySeo } from '../data/seo';
import { FAQ } from '../i18n/faq';
import { LOCALES, fill } from '../i18n/routes';
import { SITE_URL } from '../utils/schema';
import { factValues, formatDate, latestUpdate } from '../data/stats';
import en from '../locales/en.json';
import { hasGuide, guidePath } from '../data/guides';
import {
  SHELVES, LIB_PATH, STANDARDS_PATH, LIB_TOOL_COUNT, LIB_SHELF_COUNT, libCopy, libToolName, shelfPath,
} from '../data/library';

const t = en as Record<string, any>;

export const GET: APIRoute = () => {
  const vals = factValues('en');
  const updated = latestUpdate();
  const out: string[] = [
    '# OumaShu (櫻滿集)',
    '',
    `> ${fill(FAQ.en.items[0][1], vals)}`,
    '',
    `Last updated: ${updated ? formatDate(updated, 'en') : 'unknown'}. Maintainer: Rollkey (https://x.com/Rollkey4).`,
    '',
    '## Key facts',
    '',
    ...FAQ.en.items.slice(1).map(([q, a]) => `- **${q}** ${fill(a, vals)}`),
    '',
    '## Pages',
    '',
    `- [Home: all tools on a route map](${SITE_URL}/)`,
    `- [About OumaShu](${SITE_URL}/about/): who makes it, how tools are chosen, how it is funded`,
    `- [Privacy Policy](${SITE_URL}/privacy/): ads, cookies and data handling`,
    `- Language versions: ${LOCALES.map((l) => `[${l.label}](${SITE_URL}/${l.prefix ? `${l.prefix}/` : ''})`).join(', ')}`,
    '',
  ];

  for (const line of getLines()) {
    const seo = categorySeo('en', line.id, line.name);
    out.push(`## ${seo.h1}`, '', `${seo.intro} Category page: ${SITE_URL}/categories/${line.id}/`, '');
    for (const { tool } of line.stations) {
      const name = t[tool.id] ?? tool.name;
      const desc = t[`${tool.id}_desc`] ?? tool.description;
      const tag = tool.thirdParty ? ' (third-party site)' : '';
      const guide = hasGuide(tool.id) ? ` Guide (features, steps, limits): ${SITE_URL}${guidePath(tool.id)}` : '';
      out.push(`- [${name}](${tool.url})${tag}: ${desc}. Host: ${hostOf(tool.url)}.${guide}`);
    }
    out.push('');
  }

  // 工具圖書館：按用途分類、人工核查過的外部工具
  const lib = libCopy('en');
  out.push(
    '## Tool Library',
    '',
    `${fill(lib.ui.indexLead, { tools: LIB_TOOL_COUNT, shelves: LIB_SHELF_COUNT })} Library: ${SITE_URL}${LIB_PATH} · Selection standard: ${SITE_URL}${STANDARDS_PATH}`,
    '',
  );
  for (const shelf of SHELVES) {
    const names = shelf.tools.map((x) => libToolName(x.id, 'en')).join(', ');
    out.push(`- [${lib.shelves[shelf.id].title}](${SITE_URL}${shelfPath(shelf.id)}): ${names}.`);
  }
  out.push('');

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
