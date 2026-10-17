// 站內搜索的統計：使用者停止輸入一會兒後，才把搜索詞送到 GA4
// 只送搜索詞與結果數，不送任何個人資料；GA4 未載入（被擋或拒絕）時什麼都不做

type Gtag = (command: 'event', name: string, params: Record<string, unknown>) => void;

const IDLE_MS = 1500;
let timer: number | undefined;
let lastSent = '';

/**
 * 記錄一次站內搜索。
 * @param where 搜索框所在位置，例如 home、library
 * @param term 搜索詞
 * @param count 結果數，0 時另記一個 search_no_results 事件，方便在 GA4 裡直接看「搜不到的詞」
 */
export function trackSearch(where: string, term: string, count: number) {
  window.clearTimeout(timer);
  const q = term.trim().toLowerCase().slice(0, 100);
  if (q.length < 2) return;
  timer = window.setTimeout(() => {
    const key = `${where}:${q}`;
    if (key === lastSent) return;
    lastSent = key;
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    if (!gtag) return;
    gtag('event', 'search', { search_term: q, search_location: where, result_count: count });
    if (count === 0) gtag('event', 'search_no_results', { search_term: q, search_location: where });
  }, IDLE_MS);
}
