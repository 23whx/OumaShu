// 工具介紹頁的數據結構
// 事實來源：imghub 源代碼（src/utils/*、src/components/tools/*、src/i18n/toolGuides.js）與 yifang 的 PRODUCT.md、llms.txt
// 修改工具功能或限制時，請同步更新對應語言的文案

export interface Guide {
  /** 一段獨立成立的定義：工具是什麼、做什麼、在哪裡運行 */
  summary: string;
  features: string[];
  /** 使用步驟，順序與 GuideMeta.shots 的截圖一一對應 */
  steps: string[];
  limits: string[];
  privacy: string;
  faq: [question: string, answer: string][];
}

export interface GuideMeta {
  /** 每一步的截圖（public/guides/{id}/…），數量與 steps 相同 */
  shots: string[];
  related: string[];
  /** 工具在各語言下的實際入口；缺省用 tools.ts 的 url */
  urls?: Partial<Record<'en' | 'zh' | 'ja', string>>;
}
