// 頁面骨架上的短字串（分類頁、頁尾、語言提示）；工具名稱與首頁文案在 src/locales/*.json
import type { Locale } from './routes';

export interface UiStrings {
  skip: string;
  searchAll: string;
  moreLines: string;
  fullMap: string;
  toolsCount: string;     // {{count}}
  toolsOne: string;
  lineName: string;       // {{name}}
  allTools: string;       // {{name}}
  shotAlt: string;        // {{name}}
  toolListName: string;
  browseByCat: string;
  breadcrumb: string;
  // 語言提示條：用「目標語言」書寫，讓看不懂當前語言的人也能讀懂
  suggest: string;
  suggestGo: string;
  dismiss: string;
  // 工具介紹頁
  guide: {
    link: string;        // 卡片上的「使用說明」
    features: string;
    steps: string;
    limits: string;
    privacy: string;
    faq: string;
    related: string;
    open: string;        // {{name}}
    step: string;        // {{n}}
    stepShot: string;    // {{n}} {{name}}
    free: string;
    titleSuffix: string; // <title> 後綴，例如「How to Use, Features & Limits」
  };
}

export const UI: Record<Locale, UiStrings> = {
  en: {
    skip: 'Skip to main content',
    searchAll: 'Search all tools',
    moreLines: 'More free tools by line',
    fullMap: 'See the full route map →',
    toolsCount: '{{count}} tools',
    toolsOne: '1 tool',
    lineName: '{{name}} line',
    allTools: '{{name}}: all tools',
    shotAlt: 'Screenshot of {{name}}',
    toolListName: 'Free online tools on OumaShu',
    browseByCat: 'Browse tools by category',
    breadcrumb: 'Breadcrumb',
    suggest: 'This page is also in English.',
    suggestGo: 'Read in English',
    dismiss: 'Dismiss',
    guide: {
      link: 'How to use',
      features: 'What it does',
      steps: 'How to use it',
      limits: 'Limits and notes',
      privacy: 'Privacy',
      faq: 'Questions',
      related: 'Related tools',
      open: 'Open {{name}}',
      step: 'Step {{n}}',
      stepShot: '{{name}}, step {{n}}',
      free: 'Free · No sign-up',
      titleSuffix: 'Features, How to Use & Limits',
    },
  },
  'zh-CN': {
    skip: '跳到主要内容',
    searchAll: '搜索全部工具',
    moreLines: '按线路浏览更多免费工具',
    fullMap: '查看完整线路图 →',
    toolsCount: '{{count}} 个工具',
    toolsOne: '1 个工具',
    lineName: '{{name}}线',
    allTools: '{{name}}：全部工具',
    shotAlt: '{{name}} 的截图',
    toolListName: 'OumaShu 收录的免费在线工具',
    browseByCat: '按分类浏览工具',
    breadcrumb: '面包屑导航',
    suggest: '本页有简体中文版。',
    suggestGo: '切换到简体中文',
    dismiss: '关闭',
    guide: {
      link: '使用说明',
      features: '功能',
      steps: '使用步骤',
      limits: '限制与注意事项',
      privacy: '隐私',
      faq: '常见问题',
      related: '相关工具',
      open: '打开{{name}}',
      step: '第 {{n}} 步',
      stepShot: '{{name}} 第 {{n}} 步',
      free: '免费 · 无需注册',
      titleSuffix: '功能、使用方法与限制',
    },
  },
  'zh-TW': {
    skip: '跳到主要內容',
    searchAll: '搜尋全部工具',
    moreLines: '依路線瀏覽更多免費工具',
    fullMap: '查看完整路線圖 →',
    toolsCount: '{{count}} 個工具',
    toolsOne: '1 個工具',
    lineName: '{{name}}線',
    allTools: '{{name}}：全部工具',
    shotAlt: '{{name}} 的截圖',
    toolListName: 'OumaShu 收錄的免費線上工具',
    browseByCat: '依分類瀏覽工具',
    breadcrumb: '導覽路徑',
    suggest: '本頁有繁體中文版。',
    suggestGo: '切換到繁體中文',
    dismiss: '關閉',
    guide: {
      link: '使用說明',
      features: '功能',
      steps: '使用步驟',
      limits: '限制與注意事項',
      privacy: '隱私',
      faq: '常見問題',
      related: '相關工具',
      open: '開啟{{name}}',
      step: '第 {{n}} 步',
      stepShot: '{{name}} 第 {{n}} 步',
      free: '免費 · 免註冊',
      titleSuffix: '功能、使用方法與限制',
    },
  },
  'ja-JP': {
    skip: 'メインコンテンツへ移動',
    searchAll: 'すべてのツールを検索',
    moreLines: 'ほかの路線の無料ツール',
    fullMap: '路線図全体を見る →',
    toolsCount: '{{count}} 個のツール',
    toolsOne: '1 個のツール',
    lineName: '{{name}}線',
    allTools: '{{name}}：すべてのツール',
    shotAlt: '{{name}} のスクリーンショット',
    toolListName: 'OumaShu の無料オンラインツール',
    browseByCat: 'カテゴリーからツールを探す',
    breadcrumb: 'パンくずリスト',
    suggest: 'このページには日本語版があります。',
    suggestGo: '日本語で読む',
    dismiss: '閉じる',
    guide: {
      link: '使い方',
      features: 'できること',
      steps: '使い方',
      limits: '制限と注意点',
      privacy: 'プライバシー',
      faq: 'よくある質問',
      related: '関連ツール',
      open: '{{name}}を開く',
      step: 'ステップ {{n}}',
      stepShot: '{{name}} のステップ {{n}}',
      free: '無料・登録不要',
      titleSuffix: '機能・使い方・制限',
    },
  },
  ar: {
    skip: 'انتقل إلى المحتوى الرئيسي',
    searchAll: 'ابحث في كل الأدوات',
    moreLines: 'المزيد من الأدوات المجانية حسب الخط',
    fullMap: 'اعرض خريطة الخطوط كاملة ←',
    toolsCount: '{{count}} أدوات',
    toolsOne: 'أداة واحدة',
    lineName: 'خط {{name}}',
    allTools: '{{name}}: كل الأدوات',
    shotAlt: 'لقطة شاشة من {{name}}',
    toolListName: 'أدوات مجانية أونلاين على OumaShu',
    browseByCat: 'تصفح الأدوات حسب الفئة',
    breadcrumb: 'مسار التنقل',
    suggest: 'هذه الصفحة متوفرة بالعربية.',
    suggestGo: 'اقرأ بالعربية',
    dismiss: 'إغلاق',
    guide: {
      link: 'طريقة الاستخدام',
      features: 'ما الذي تفعله',
      steps: 'طريقة الاستخدام',
      limits: 'القيود والملاحظات',
      privacy: 'الخصوصية',
      faq: 'أسئلة',
      related: 'أدوات ذات صلة',
      open: 'افتح {{name}}',
      step: 'الخطوة {{n}}',
      stepShot: '{{name}}، الخطوة {{n}}',
      free: 'مجاني · بدون تسجيل',
      titleSuffix: 'الميزات وطريقة الاستخدام والقيود',
    },
  },
  ru: {
    skip: 'Перейти к основному содержанию',
    searchAll: 'Искать по всем инструментам',
    moreLines: 'Другие бесплатные инструменты по линиям',
    fullMap: 'Открыть всю схему линий →',
    toolsCount: 'Инструментов: {{count}}',
    toolsOne: '1 инструмент',
    lineName: 'Линия «{{name}}»',
    allTools: '{{name}}: все инструменты',
    shotAlt: 'Скриншот: {{name}}',
    toolListName: 'Бесплатные онлайн-инструменты на OumaShu',
    browseByCat: 'Инструменты по категориям',
    breadcrumb: 'Навигационная цепочка',
    suggest: 'Эта страница есть на русском.',
    suggestGo: 'Читать на русском',
    dismiss: 'Закрыть',
    guide: {
      link: 'Как пользоваться',
      features: 'Возможности',
      steps: 'Как пользоваться',
      limits: 'Ограничения',
      privacy: 'Конфиденциальность',
      faq: 'Вопросы',
      related: 'Похожие инструменты',
      open: 'Открыть {{name}}',
      step: 'Шаг {{n}}',
      stepShot: '{{name}}, шаг {{n}}',
      free: 'Бесплатно · Без регистрации',
      titleSuffix: 'возможности, инструкция и ограничения',
    },
  },
};
