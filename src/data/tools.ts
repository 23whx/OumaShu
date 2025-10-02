// 工具数据模型和示例数据

export interface ToolItem {
  id: string;
  name: string;
  description: string;
  tags: string[];
  subdomain: string;   // 子域名，例如 "learn" -> https://learn.example.com
  url?: string;        // 完整 URL，便于本地预览
  icon?: string;       // 图标 URL 或 emoji
  featured?: boolean;  // 是否为推荐工具
  thirdParty?: boolean; // 是否为第三方工具
  updatedAt?: string;  // ISO 时间字符串
  category?: string;   // 主要分类
  popularity?: number; // 人气分数 (0-100)
  isNew?: boolean;     // 是否为新工具
  screenshots?: string[]; // 截图 URLs
}

export interface ToolCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color?: string;
}

// 工具分类定义
export const categories: ToolCategory[] = [
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Fun tools and entertainment utilities',
    icon: '🎮',
    color: '#f97316'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Educational tools and learning resources',
    icon: '📚',
    color: '#84cc16'
  },
  {
    id: 'utilities',
    name: 'Utilities',
    description: 'Practical tools and utilities',
    icon: '🔧',
    color: '#06b6d4'
  }
];

// 真实项目数据
export const tools: ToolItem[] = [
  {
    id: 'learn-languages',
    name: 'Learn Languages',
    description: 'AI 对话练习与 PDF 问答训练，提升外语能力的完整解决方案',
    tags: ['语言学习', 'AI', '对话练习', 'PDF分析', '教育'],
    subdomain: 'learn',
    url: 'https://learn-languages-pi.vercel.app/',
    icon: '🌍',
    featured: false,
    updatedAt: '2024-12-01T10:00:00Z',
    category: 'education',
    popularity: 95,
    isNew: false,
    screenshots: [
      '/og/learn-languages-1.jpg',
      '/og/learn-languages-2.jpg'
    ]
  },
  {
    id: 'subtitle-screenshot',
    name: 'Subtitle Screenshot Generator',
    description: '名人背景字幕截图生成器，快速制作有趣的字幕模因图片',
    tags: ['图片生成', '字幕', '模因', '娱乐', '创意'],
    subdomain: 'screenshot',
    url: 'https://fake-screenshot-one.vercel.app/',
    icon: '📸',
    featured: false,
    updatedAt: '2024-11-28T15:30:00Z',
    category: 'entertainment',
    popularity: 88,
    isNew: false,
    screenshots: [
      '/og/subtitle-screenshot-1.jpg'
    ]
  },
  {
    id: 'media-trim',
    name: 'MediaTrim',
    description: '在线视频转音频工具，支持音频剪切、格式转换',
    tags: ['视频转音频', '音频剪切', '格式转换', 'MP3', 'WAV', '在线工具'],
    subdomain: 'media-trim',
    url: 'https://audio-trimmer-converter.vercel.app/',
    icon: '🎵',
    featured: false,
    updatedAt: '2024-12-01T12:00:00Z',
    category: 'utilities',
    popularity: 92,
    isNew: true,
    screenshots: [
      '/og/media-trim-1.jpg'
    ]
  },
  {
    id: 'mbti-test',
    name: 'MBTI Personality Test',
    description: '专业MBTI人格类型测试，68题深度分析，了解你的性格特征和行为模式',
    tags: ['心理测试', 'MBTI', '人格分析', '性格测试', '自我认知'],
    subdomain: 'mbti',
    url: 'https://mbti-one-eta.vercel.app/',
    icon: '🧠',
    featured: false,
    updatedAt: '2024-12-01T11:30:00Z',
    category: 'entertainment',
    popularity: 90,
    isNew: true,
    screenshots: [
      '/og/mbti-test-1.jpg'
    ]
  },
  {
    id: 'video2gif',
    name: 'Video2GIF 转换器',
    description: '在线视频转GIF工具，支持多种视频格式，快速生成高质量GIF动图',
    tags: ['视频转换', 'GIF制作', '动图生成', '格式转换', '在线工具'],
    subdomain: 'video2gif',
    url: 'https://video2gif-brown.vercel.app/',
    icon: '🎬',
    featured: false,
    updatedAt: '2024-12-01T14:00:00Z',
    category: 'utilities',
    popularity: 85,
    isNew: true,
    screenshots: [
      '/og/video2gif-1.jpg'
    ]
  },
  {
    id: 'pic-press',
    name: 'PicPress 图片压缩器',
    description: '免费在线批量图片压缩工具，支持JPG、PNG、WebP、AVIF格式，本地处理保护隐私',
    tags: ['图片压缩', '批量处理', '格式转换', '隐私保护', '本地处理', '在线工具'],
    subdomain: 'pic-press',
    url: 'https://pic-press.vercel.app/',
    icon: '📸',
    featured: false,
    updatedAt: '2024-12-01T15:00:00Z',
    category: 'utilities',
    popularity: 88,
    isNew: true,
    screenshots: [
      '/og/pic-press-1.jpg'
    ]
  },
  {
    id: 'pansou',
    name: 'PanSou 网盘搜索',
    description: '高性能网盘资源搜索API服务，支持TG频道和插件搜索，多频道并发搜索与智能排序',
    tags: ['网盘搜索', '资源搜索', 'API服务', 'TG频道', '并发搜索'],
    subdomain: 'pansou',
    url: 'https://so.252035.xyz/',
    icon: '🔍',
    featured: true,
    thirdParty: true, // 标记为第三方工具
    updatedAt: '2024-12-01T16:00:00Z',
    category: 'utilities',
    popularity: 75,
    isNew: true,
    screenshots: [
      '/og/pansou-1.jpg'
    ]
  },
  {
    id: 'text-grove',
    name: 'TextGrove 文本工具站',
    description: '全功能文本处理工具集，包含字数统计、文本去重、词频统计、简繁转换、文本格式化，本地处理保护隐私',
    tags: ['文本处理', '字数统计', '文本去重', '词频统计', '简繁转换', '格式化', '隐私保护'],
    subdomain: 'text-grove',
    url: 'https://text-grove.vercel.app/',
    icon: '🌲',
    featured: false,
    updatedAt: '2024-12-01T17:00:00Z',
    category: 'utilities',
    popularity: 82,
    isNew: true,
    screenshots: [
      '/og/text-grove-1.jpg'
    ]
  }
];

// 工具筛选和搜索函数
export function filterTools(
  tools: ToolItem[],
  filters: {
    search?: string;
    category?: string;
    tag?: string;
    featured?: boolean;
    isNew?: boolean;
  }
): ToolItem[] {
  return tools.filter(tool => {
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchLower) ||
        tool.description.toLowerCase().includes(searchLower) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchLower));
      if (!matchesSearch) return false;
    }

    if (filters.category && tool.category !== filters.category) {
      return false;
    }

    if (filters.tag && !tool.tags.includes(filters.tag)) {
      return false;
    }

    if (filters.featured && !tool.featured) {
      return false;
    }

    if (filters.isNew && !tool.isNew) {
      return false;
    }

    return true;
  });
}

// 排序函数
export function sortTools(
  tools: ToolItem[],
  sortBy: 'name' | 'popularity' | 'updated' | 'featured'
): ToolItem[] {
  return [...tools].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popularity':
        return (b.popularity || 0) - (a.popularity || 0);
      case 'updated':
        return new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime();
      case 'featured':
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return (b.popularity || 0) - (a.popularity || 0);
      default:
        return 0;
    }
  });
}

// 获取所有标签
export function getAllTags(tools: ToolItem[]): string[] {
  const allTags = tools.flatMap(tool => tool.tags);
  return Array.from(new Set(allTags)).sort();
}

// 获取分类下的工具数量
export function getToolsCountByCategory(tools: ToolItem[], categoryId: string): number {
  return tools.filter(tool => tool.category === categoryId).length;
}

// 获取推荐工具
export function getFeaturedTools(tools: ToolItem[], limit?: number): ToolItem[] {
  const featured = tools.filter(tool => tool.featured);
  return limit ? featured.slice(0, limit) : featured;
}

// 获取最新工具
export function getRecentTools(tools: ToolItem[], limit?: number): ToolItem[] {
  const sorted = sortTools(tools, 'updated');
  return limit ? sorted.slice(0, limit) : sorted;
}

// 获取热门工具
export function getPopularTools(tools: ToolItem[], limit?: number): ToolItem[] {
  const sorted = sortTools(tools, 'popularity');
  return limit ? sorted.slice(0, limit) : sorted;
}
