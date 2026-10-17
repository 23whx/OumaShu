// 工具圖書館的各語言文案
import type { SectionId } from '../catalog';

export interface ShelfCopy {
  name: string;        // 短名，用在書架卡片與導覽
  title: string;       // 書架頁 H1
  intro: string;       // 書架頁導語（一兩句）
  keywords: string[];  // 搜索同義詞：用戶可能怎麼描述這件事
}

export interface StandardItem {
  title: string;
  text: string;
}

export interface LibCopy {
  ui: {
    library: string;            // 導覽上的「工具圖書館」
    indexTitle: string;         // 首頁 H1
    indexLead: string;          // {{tools}} {{shelves}}
    indexMetaTitle: string;
    indexMetaDesc: string;      // {{tools}} {{shelves}}
    searchPlaceholder: string;
    searchLabel: string;
    noResults: string;          // {{q}}
    toolsCount: string;         // {{count}}
    toolsOne: string;
    shelfMetaTitle: string;     // {{title}} {{count}}
    shelfMetaDesc: string;      // {{intro}} {{names}}
    open: string;               // {{name}}
    source: string;             // 原始碼
    price: { free: string; freemium: string; 'free-personal': string };
    runs: { local: string; cloud: string; app: string; builtin: string; site: string; web: string };
    article: string;            // 標在「一篇文章」上
    channel: string;            // 標在「影片頻道」上
    moreOnShelf: string;        // {{count}}：書架上精簡列表的標題
    noSignup: string;
    signupForm: string;
    openSource: string;
    ads: string;
    own: string;
    tested: string;             // {{date}}
    checked: string;            // {{date}}
    pick: string;               // 排第一的工具上的「首選」
    ownNote: string;            // 本站自製工具的揭露說明
    moreShelves: string;        // {{section}}
    allShelves: string;
    standardsLink: string;
    suggestTitle: string;
    suggestText: string;
    suggestCta: string;
    reportText: string;         // 工具失效或資訊有誤
    browseLibrary: string;      // 首頁搜索框下的連結
    groupOwn: string;           // 首頁搜索建議的分組名
    groupLibrary: string;
    shelfHit: string;           // {{count}}：搜索建議裡書架列的前綴，後面接工具名
  };
  sections: Record<SectionId, string>;
  shelves: Record<string, ShelfCopy>;
  /** 需要翻譯的工具名（其餘用 catalog 的 name；本站工具用 locales/*.json） */
  names: Record<string, string>;
  /** 每個書架上每個工具的推薦理由與注意事項：鍵為 "書架/工具" */
  notes: Record<string, string>;
  standards: {
    metaTitle: string;
    metaDesc: string;
    title: string;
    lead: string;
    rulesTitle: string;
    rules: StandardItem[];
    checkTitle: string;
    check: string[];
    leftOutTitle: string;
    leftOut: StandardItem[];
    labelsTitle: string;
    labelsLead: string;
    /** 每個標籤的解釋，鍵與 ui 的標籤一致：free freemium free-personal local cloud app builtin site web openSource github ads tested */
    labels: Record<string, string>;
    updated: string;            // {{date}}
  };
}
