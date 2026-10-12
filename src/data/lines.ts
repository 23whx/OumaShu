// 線路圖：每個分類是一條線路，每個工具是一個站
import { tools, categories, type ToolItem } from './tools';

export interface LineMeta {
  code: string;   // 兩字母線路代碼，例如 IM
  color: string;  // 線路色
  ja: string;     // 站牌上的日文名
}

export const LINE_META: Record<string, LineMeta> = {
  image:             { code: 'IM', color: '#e5608a', ja: '画像' },
  video:             { code: 'VD', color: '#1f7bc1', ja: '動画' },
  audio:             { code: 'AU', color: '#8e5bc9', ja: '音声' },
  text:              { code: 'TX', color: '#24985a', ja: 'テキスト' },
  education:         { code: 'ED', color: '#f09a1a', ja: '教育' },
  'workplace-slack': { code: 'WS', color: '#00a3a6', ja: '職場サボり' },
  search:            { code: 'SR', color: '#d8433a', ja: '検索' },
  resources:         { code: 'RS', color: '#a07c2c', ja: 'リソース' },
  entertainment:     { code: 'EN', color: '#b4498a', ja: 'エンタメ' },
  social:            { code: 'SO', color: '#d4a90a', ja: 'ソーシャル' },
  'file-transfer':   { code: 'FT', color: '#5a6b80', ja: 'ファイル転送' },
  games:             { code: 'GM', color: '#3f4a5c', ja: 'ゲーム' },
};

// 線路在地圖上的順序：最大、最常用的線路在前
const LINE_ORDER = [
  'image', 'video', 'audio', 'text', 'education', 'workplace-slack',
  'search', 'resources', 'entertainment', 'social', 'file-transfer', 'games',
];

export interface Station {
  tool: ToolItem;
  code: string;   // 站號，例如 IM 03
}

export interface Line {
  id: string;
  name: string;
  meta: LineMeta;
  stations: Station[];
}

export function getLines(): Line[] {
  const ordered = [...categories].sort(
    (a, b) => LINE_ORDER.indexOf(a.id) - LINE_ORDER.indexOf(b.id)
  );
  return ordered
    .map((category) => {
      const meta = LINE_META[category.id] ?? { code: category.id.slice(0, 2).toUpperCase(), color: '#5a6b80', ja: '' };
      const stations = tools
        .filter((tool) => tool.category === category.id)
        .map((tool, i) => ({ tool, code: `${meta.code} ${String(i + 1).padStart(2, '0')}` }));
      return { id: category.id, name: category.name, meta, stations };
    })
    .filter((line) => line.stations.length > 0);
}

export function hostOf(url?: string): string {
  if (!url) return '';
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return url;
  }
}
