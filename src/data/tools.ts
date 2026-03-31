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
    id: 'resources',
    name: 'Resources',
    description: 'Curated resource collections and directories',
    icon: '/icons/classification/resource.png',
    color: '#f59e0b'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Fun tools and entertainment utilities',
    icon: '/icons/classification/entertainment.png',
    color: '#f97316'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Educational tools and learning resources',
    icon: '/icons/classification/education.png',
    color: '#84cc16'
  },
  {
    id: 'workplace-slack',
    name: 'Workplace Slack',
    description: 'Tools for workplace entertainment and relaxation',
    icon: '/icons/classification/slack.png',
    color: '#6366f1'
  },
  {
    id: 'search',
    name: 'Search',
    description: 'Search engines and discovery tools',
    icon: '/icons/classification/search.png',
    color: '#06b6d4'
  },
  {
    id: 'text',
    name: 'Text',
    description: 'Text processing and editing tools',
    icon: '/icons/classification/text.png',
    color: '#8b5cf6'
  },
  {
    id: 'image',
    name: 'Image',
    description: 'Image processing and editing tools',
    icon: '/icons/classification/image.png',
    color: '#ec4899'
  },
  {
    id: 'video',
    name: 'Video',
    description: 'Video processing and conversion tools',
    icon: '/icons/classification/video.png',
    color: '#ef4444'
  },
  {
    id: 'audio',
    name: 'Audio',
    description: 'Audio processing and conversion tools',
    icon: '/icons/classification/audio.png',
    color: '#10b981'
  },
  {
    id: 'file-transfer',
    name: 'File Transfer',
    description: 'File sharing and transfer tools',
    icon: '/icons/classification/document.png',
    color: '#f59e0b'
  },
  {
    id: 'social',
    name: 'Social',
    description: 'Social networking and communication tools',
    icon: '/icons/classification/socialContact.png',
    color: '#3b82f6'
  },
  {
    id: 'games',
    name: 'Games',
    description: 'Fun games and interactive entertainment',
    icon: '/icons/classification/game.png',
    color: '#a855f7'
  }
];

// 真实项目数据
export const tools: ToolItem[] = [
  {
    id: 'ebook-translate',
    name: 'eBook Translator',
    description: 'AI 驱动的 EPUB 电子书翻译工具，支持多语言翻译，保留原书格式与排版',
    tags: ['电子书翻译', 'EPUB', 'AI翻译', '多语言', '格式保留', '在线工具'],
    subdomain: 'ebook-translate',
    url: 'https://ebook-translate.oumashu.top/',
    icon: '📚',
    featured: false,
    thirdParty: false,
    updatedAt: '2026-03-31T10:00:00Z',
    category: 'education',
    popularity: 88,
    isNew: true,
    screenshots: []
  },
  {
    id: 'learn-languages',
    name: 'Learn Languages',
    description: 'AI 对话练习与 PDF 问答训练，提升外语能力的完整解决方案',
    tags: ['语言学习', 'AI', '对话练习', 'PDF分析', '教育'],
    subdomain: 'learn',
    url: 'https://learn-languages.oumashu.top/',
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
    description: '名人背景字幕截图生成器，快速制作有趣的字幕模因图片，支持双语模式',
    tags: ['图片生成', '字幕', '模因', '娱乐', '创意'],
    subdomain: 'screenshot',
    url: 'https://imghub.oumashu.top/tools/subtitle-generator',
    icon: '📸',
    featured: false,
    updatedAt: '2025-01-01T12:00:00Z',
    category: 'image',
    popularity: 88,
    isNew: true,
    screenshots: [
      '/og/subtitle-screenshot-1.jpg'
    ]
  },
  {
    id: 'pornhub-style',
    name: 'Pornhub Style Logo Generator',
    description: '制作经典的Pornhub风格Logo，支持横向和纵向布局，快速模板',
    tags: ['Logo生成', '风格模仿', '图片设计', '娱乐', '创意'],
    subdomain: 'imghub',
    url: 'https://imghub.oumashu.top/tools/pornhub-style',
    icon: '🎨',
    featured: false,
    updatedAt: '2025-01-01T12:10:00Z',
    category: 'image',
    popularity: 85,
    isNew: true,
    screenshots: []
  },
  {
    id: 'dnd-alignment',
    name: 'DND Alignment Grid Generator',
    description: 'DND阵营九宫格生成器，上传9张图片创建经典的阵营对比图',
    tags: ['九宫格', 'DND', '阵营图', '图片拼接', '娱乐'],
    subdomain: 'imghub',
    url: 'https://imghub.oumashu.top/tools/dnd-alignment',
    icon: '⚔️',
    featured: false,
    updatedAt: '2025-01-01T12:20:00Z',
    category: 'image',
    popularity: 82,
    isNew: true,
    screenshots: []
  },
  {
    id: 'mbti-grid',
    name: 'MBTI Personality Image Generator',
    description: 'MBTI人格图片生成器，选择MBTI类型上传对应图片，生成个性化人格展示图',
    tags: ['MBTI', '人格测试', '图片生成', '心理测试', '创意'],
    subdomain: 'imghub',
    url: 'https://imghub.oumashu.top/tools/mbti-grid',
    icon: '🧠',
    featured: false,
    updatedAt: '2025-01-01T12:30:00Z',
    category: 'image',
    popularity: 86,
    isNew: true,
    screenshots: []
  },
  {
    id: 'meme-slicer',
    name: 'Meme Slicer Tool',
    description: '表情包切片工具，上传图片自定义行列数，批量导出切片图片为ZIP',
    tags: ['图片切片', '表情包', '批量处理', '图片编辑', '创意'],
    subdomain: 'imghub',
    url: 'https://imghub.oumashu.top/tools/meme-slicer',
    icon: '✂️',
    featured: false,
    updatedAt: '2025-01-01T12:40:00Z',
    category: 'image',
    popularity: 80,
    isNew: true,
    screenshots: []
  },
  {
    id: 'youtube-thumbnail',
    name: 'YouTube Thumbnail Downloader',
    description: 'YouTube视频封面下载器，获取YouTube视频的高清缩略图，支持多种分辨率',
    tags: ['YouTube', '缩略图下载', '视频封面', '图片下载', '在线工具'],
    subdomain: 'imghub',
    url: 'https://imghub.oumashu.top/tools/video-thumbnail',
    icon: '📺',
    featured: false,
    updatedAt: '2025-01-01T12:50:00Z',
    category: 'image',
    popularity: 84,
    isNew: true,
    screenshots: []
  },
  {
    id: 'media-trim',
    name: 'MediaTrim',
    description: '在线视频转音频工具，支持音频剪切、格式转换',
    tags: ['视频转音频', '音频剪切', '格式转换', 'MP3', 'WAV', '在线工具'],
    subdomain: 'media-trim',
    url: 'https://audio-trimmer-converter.oumashu.top/',
    icon: '🎵',
    featured: false,
    updatedAt: '2024-12-01T12:00:00Z',
    category: 'audio',
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
    url: 'https://mbti.oumashu.top/',
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
    id: 'efortunetell',
    name: '玄学命理博客',
    description: '专业的中国玄学在线平台，提供八字、奇门遁甲、大六壬等传统占卜服务与命理知识分享',
    tags: ['玄学', '命理', '占卜', '八字', '奇门遁甲', '大六壬', '传统文化'],
    url: 'https://efortunetell.blog/',
    icon: '🔮',
    featured: false,
    thirdParty: false,
    updatedAt: '2026-01-06T10:00:00Z',
    category: 'entertainment',
    popularity: 82,
    isNew: true,
    screenshots: []
  },
  {
    id: 'acgn-personality-database',
    name: 'ACGN人格数据库',
    description: 'ACGN角色人格类型数据库，收录动画、漫画、游戏、小说角色的MBTI人格分类与性格分析',
    tags: ['ACGN', '人格数据库', 'MBTI', '动漫角色', '性格分析', '二次元'],
    url: 'https://acgn-personality-database.top/',
    icon: '🎭',
    featured: false,
    thirdParty: false,
    updatedAt: '2026-01-06T10:00:00Z',
    category: 'entertainment',
    popularity: 85,
    isNew: true,
    screenshots: []
  },
  {
    id: 'video2gif',
    name: 'Video2GIF 转换器',
    description: '在线视频转GIF工具，支持多种视频格式，快速生成高质量GIF动图',
    tags: ['视频转换', 'GIF制作', '动图生成', '格式转换', '在线工具'],
    subdomain: 'video2gif',
    url: 'https://video2gif.oumashu.top/',
    icon: '🎬',
    featured: false,
    updatedAt: '2024-12-01T14:00:00Z',
    category: 'video',
    popularity: 85,
    isNew: true,
    screenshots: [
      '/og/video2gif-1.jpg'
    ]
  },
  {
    id: 'pic-press',
    name: 'PicPress Image Compressor',
    description: '免费在线批量图片压缩工具，支持JPG、PNG、WebP格式，本地处理保护隐私',
    tags: ['图片压缩', '批量处理', '格式转换', '隐私保护', '本地处理', '在线工具'],
    subdomain: 'imghub',
    url: 'https://imghub.oumashu.top/tools/image-compress',
    icon: '🗜️',
    featured: false,
    updatedAt: '2025-01-01T13:00:00Z',
    category: 'image',
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
    featured: false,
    thirdParty: true, // 标记为第三方工具
    updatedAt: '2024-12-01T16:00:00Z',
    category: 'search',
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
    url: 'https://text-grove.oumashu.top/',
    icon: '🌲',
    featured: false,
    updatedAt: '2024-12-01T17:00:00Z',
    category: 'text',
    popularity: 82,
    isNew: true,
    screenshots: [
      '/og/text-grove-1.jpg'
    ]
  },
  {
    id: 'markdown',
    name: 'Markdown Editor',
    description: 'Online Markdown editor with live preview and multi-format export (PDF, HTML, Word, JPG, PNG)',
    tags: ['Markdown', 'Editor', 'Preview', 'PDF', 'HTML', 'Word', 'Export', 'Converter'],
    subdomain: 'markdown',
    url: 'https://markdown.oumashu.top/',
    icon: '📝',
    featured: false,
    updatedAt: '2024-11-18T12:00:00Z',
    category: 'text',
    popularity: 88,
    isNew: true,
    screenshots: []
  },
  {
    id: 'p2p-transfer',
    name: 'P2P 端到端传输',
    description: '安全的端到端文件和文字传输工具，数据不经过服务器，保护隐私安全',
    tags: ['文件传输', '端到端', 'P2P', '隐私保护', '安全传输', '第三方工具'],
    subdomain: 'p2p-transfer',
    url: 'https://transfer.52python.cn/',
    icon: '🔗',
    featured: false,
    thirdParty: true,
    updatedAt: '2024-12-01T18:00:00Z',
    category: 'file-transfer',
    popularity: 78,
    isNew: true,
    screenshots: [
      '/og/p2p-transfer-1.jpg'
    ]
  },
  {
    id: 'work-whale',
    name: 'Work Whale 摸鱼阅读器',
    description: '伪装成Microsoft Word界面的网页端小说阅读器，完美融入办公环境，让你安心摸鱼',
    tags: ['摸鱼神器', '小说阅读', 'Word伪装', '办公隐身', '职场娱乐'],
    subdomain: 'work-whale',
    url: 'https://work-whale.oumashu.top/',
    icon: '🐋',
    featured: false,
    updatedAt: '2024-12-01T19:00:00Z',
    category: 'workplace-slack',
    popularity: 85,
    isNew: true,
    screenshots: [
      '/og/work-whale-1.jpg'
    ]
  },
  {
    id: 'stealth-novel',
    name: 'StealthNovel 隐蔽阅读器',
    description: 'Windows桌面版隐蔽小说阅读器，支持任务栏标题显示和伪装弹窗模式，办公室摸鱼必备神器',
    tags: ['Windows软件', '隐蔽阅读', '任务栏显示', '伪装弹窗', '摸鱼神器', '小说阅读'],
    subdomain: 'stealth-novel',
    url: 'https://work-flatfish.oumashu.top/',
    icon: '🐟',
    featured: false,
    updatedAt: '2024-12-01T20:00:00Z',
    category: 'workplace-slack',
    popularity: 90,
    isNew: true,
    screenshots: [
      '/og/stealth-novel-1.jpg'
    ]
  },
  {
    id: 'bedmate',
    name: 'BedMate 床搭子',
    description: '健康的床搭子互助平台，帮助用户寻找志同道合的睡眠伙伴，改善睡眠质量',
    tags: ['社交平台', '睡眠健康', '互助社区', '生活方式', '健康管理'],
    subdomain: 'bedmate',
    url: 'https://bedmate.ink/',
    icon: '🛏️',
    featured: false,
    thirdParty: false,
    updatedAt: '2024-12-01T21:00:00Z',
    category: 'social',
    popularity: 88,
    isNew: true,
    screenshots: [
      '/og/bedmate-1.jpg'
    ]
  },
  {
    id: 'screen-flow',
    name: 'ScreenFlow 在线录屏',
    description: '免费在线录屏工具，支持屏幕录制、摄像头录制、音频录制，无需安装任何软件',
    tags: ['录屏工具', '屏幕录制', '视频录制', '在线工具', '免费录屏'],
    subdomain: 'screen-flow',
    url: 'https://screen-flow.oumashu.top/',
    icon: '🎥',
    featured: false,
    thirdParty: false,
    updatedAt: '2024-12-02T10:00:00Z',
    category: 'video',
    popularity: 92,
    isNew: true,
    screenshots: [
      '/og/screen-flow-1.jpg'
    ]
  },
  {
    id: 'cuisine-chat',
    name: 'CuisineChat 临时聊天室',
    description: '免费在线临时聊天工具，无需注册，创建即用，支持实时消息、文件分享，注重隐私保护',
    tags: ['在线聊天', '临时聊天室', '即时通讯', '隐私保护', '免注册'],
    subdomain: 'cuisine-chat',
    url: 'https://cuisine-chat.oumashu.top/',
    icon: '💬',
    featured: false,
    thirdParty: false,
    updatedAt: '2024-12-02T10:30:00Z',
    category: 'social',
    popularity: 90,
    isNew: true,
    screenshots: [
      '/og/cuisine-chat-1.jpg'
    ]
  },
  {
    id: 'fmhy',
    name: 'FMHY',
    description: '免费资源集散地 - 互联网上最大的免费资源集合',
    tags: ['资源导航', '免费资源', '工具集合', '索引'],
    url: 'https://fmhy.net/',
    icon: '🌐',
    featured: false,
    thirdParty: true,
    updatedAt: '2024-12-02T11:00:00Z',
    category: 'resources',
    popularity: 95,
    isNew: false,
    screenshots: []
  },
  {
    id: 'axutongxue',
    name: '阿虚同学的储物间',
    description: '阿虚同学的储物间 - 精选学习资源、软件工具、课程资料集合',
    tags: ['学习资源', '课程资料', '软件工具', '资源分享'],
    url: 'https://axutongxue.com/',
    icon: '📦',
    featured: false,
    thirdParty: true,
    updatedAt: '2024-12-02T11:00:00Z',
    category: 'resources',
    popularity: 90,
    isNew: false,
    screenshots: []
  },
  {
    id: 'wotaku',
    name: 'Wotaku',
    description: '御宅族索引 - 动漫、漫画、游戏等御宅文化资源导航',
    tags: ['动漫资源', '漫画', '游戏', '御宅文化', '索引'],
    url: 'https://wotaku.wiki/',
    icon: '🎌',
    featured: false,
    thirdParty: true,
    updatedAt: '2024-12-02T11:00:00Z',
    category: 'resources',
    popularity: 85,
    isNew: false,
    screenshots: []
  },
  {
    id: 'feisoo',
    name: '飞搜侠',
    description: '飞书文档搜索神器 - 快速搜索和发现飞书文档资源',
    tags: ['文档搜索', '飞书', '搜索引擎', '资源发现'],
    url: 'https://www.feisoo.com/',
    icon: '🔍',
    featured: false,
    thirdParty: true,
    updatedAt: '2024-12-02T11:00:00Z',
    category: 'search',
    popularity: 80,
    isNew: false,
    screenshots: []
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
