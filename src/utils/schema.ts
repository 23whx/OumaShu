// Schema.org 結構化數據（JSON-LD @graph）
// 所有節點用穩定的 @id 互相引用：組織 ← 網站 ← 頁面 ← 工具清單 ← 工具
import fs from 'node:fs';
import path from 'node:path';
import type { ToolItem } from '../data/tools';
import en from '../locales/en.json';

export const SITE_URL = 'https://oumashu.top';
export const SITE_NAME = 'OumaShu';
export const SITE_NAME_JA = '櫻滿集';

type Dict = Record<string, any>;
const t = en as Dict;

export const ids = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  logo: `${SITE_URL}/#logo`,
  ogImage: `${SITE_URL}/#og-image`,
  webpage: (url: string) => `${url}#webpage`,
  toolList: (url: string) => `${url}#tools`,
  breadcrumb: (url: string) => `${url}#breadcrumb`,
  tool: (id: string) => `${SITE_URL}/#tool-${id}`,
};

// Google 認可的 applicationCategory 取值
const APP_CATEGORY: Record<string, string> = {
  image: 'MultimediaApplication',
  video: 'MultimediaApplication',
  audio: 'MultimediaApplication',
  text: 'UtilitiesApplication',
  education: 'EducationalApplication',
  'workplace-slack': 'EntertainmentApplication',
  search: 'UtilitiesApplication',
  resources: 'ReferenceApplication',
  entertainment: 'EntertainmentApplication',
  social: 'CommunicationApplication',
  'file-transfer': 'UtilitiesApplication',
  games: 'GameApplication',
};

const hasShot = (id: string) =>
  fs.existsSync(path.join(process.cwd(), 'public', 'shots', `${id}.webp`));

/** 全站共用：發布者、網站（含站內搜索）、OG 主圖 */
export function siteNodes() {
  return [
    {
      '@type': 'Organization',
      '@id': ids.organization,
      name: SITE_NAME,
      alternateName: SITE_NAME_JA,
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': ids.logo,
        url: `${SITE_URL}/logo.png`,
        caption: SITE_NAME,
      },
      image: { '@id': ids.ogImage },
      email: 'wanghongxiang23@gmail.com',
      sameAs: ['https://x.com/Rollkey4'],
    },
    {
      '@type': 'WebSite',
      '@id': ids.website,
      name: SITE_NAME,
      alternateName: [SITE_NAME_JA, 'OumaShu Tools Directory'],
      url: `${SITE_URL}/`,
      description: t.site.description,
      inLanguage: ['en', 'zh-CN', 'zh-TW', 'ja', 'ar', 'ru'],
      publisher: { '@id': ids.organization },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ImageObject',
      '@id': ids.ogImage,
      url: `${SITE_URL}/og/oumashu-og.jpg`,
      contentUrl: `${SITE_URL}/og/oumashu-og.jpg`,
      width: 1200,
      height: 630,
      caption: 'OumaShu 櫻滿集 — Every free tool, one stop away.',
    },
  ];
}

/** 單個工具：自家工具是 WebApplication，收錄的第三方站點是 WebSite */
export function toolNode(tool: ToolItem, dict: Dict = t) {
  const name = dict[tool.id] ?? tool.name;
  const description = dict[`${tool.id}_desc`] ?? tool.description;
  const image = hasShot(tool.id) ? `${SITE_URL}/shots/${tool.id}.webp` : undefined;

  if (tool.thirdParty) {
    return {
      '@type': 'WebSite',
      '@id': ids.tool(tool.id),
      name,
      description,
      url: tool.url,
      ...(image && { image }),
      isAccessibleForFree: true,
    };
  }

  return {
    '@type': 'WebApplication',
    '@id': ids.tool(tool.id),
    name,
    description,
    url: tool.url,
    ...(image && { image, screenshot: image }),
    applicationCategory: APP_CATEGORY[tool.category ?? ''] ?? 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires a modern web browser with JavaScript enabled.',
    isAccessibleForFree: true,
    publisher: { '@id': ids.organization },
    ...(tool.updatedAt && { dateModified: tool.updatedAt }),
  };
}

/** 工具清單（首頁與分類頁的主體） */
export function toolListNode(pageUrl: string, name: string, list: ToolItem[], dict: Dict = t) {
  return {
    '@type': 'ItemList',
    '@id': ids.toolList(pageUrl),
    name,
    numberOfItems: list.length,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: list.map((tool, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: toolNode(tool, dict),
    })),
  };
}

export function breadcrumbNode(pageUrl: string, trail: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': ids.breadcrumb(pageUrl),
    itemListElement: trail.map((step, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: step.name,
      item: step.url,
    })),
  };
}

export type PageType = 'WebPage' | 'CollectionPage' | 'AboutPage';

/** 當前頁面節點；mainEntity / breadcrumb 由各頁傳入 */
export function pageNode(opts: {
  url: string;
  type?: PageType;
  name: string;
  description: string;
  mainEntityId?: string;
  breadcrumbId?: string;
  inLanguage?: string;
}) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': ids.webpage(opts.url),
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.organization },
    primaryImageOfPage: { '@id': ids.ogImage },
    inLanguage: opts.inLanguage ?? 'en',
    ...(opts.mainEntityId && { mainEntity: { '@id': opts.mainEntityId } }),
    ...(opts.breadcrumbId && { breadcrumb: { '@id': opts.breadcrumbId } }),
  };
}

export function graph(nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
