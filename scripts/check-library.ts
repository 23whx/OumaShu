// 檢查工具圖書館每個工具的網址還能不能打開，並提醒已經太久沒核查的工具
// 用法：node scripts/check-library.ts（Node 22.6+ 直接執行 TypeScript）
// 只要有網址失效就以非零狀態結束，GitHub Actions 會因此發出通知
import { LIB_TOOLS } from '../src/data/library/catalog.ts';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36 OumaShu-LinkCheck';
const STALE_DAYS = 120; // 超過這麼多天沒核查，就該人工重看一次
// 這些網站會用機器人驗證擋住腳本（401/403/429），不算失效，但要人工確認
const BOT_WALL = new Set([401, 403, 429, 503]);

type Result = { id: string; url: string; status: number | string; final?: string };

async function check(id: string, url: string): Promise<Result> {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(url, {
        redirect: 'follow',
        headers: { 'User-Agent': UA, Accept: 'text/html,*/*' },
        signal: AbortSignal.timeout(25_000),
      });
      res.body?.cancel();
      return { id, url, status: res.status, final: res.url };
    } catch (e) {
      if (attempt === 1) return { id, url, status: (e as Error).name };
    }
  }
  return { id, url, status: 'unknown' };
}

const results: Result[] = [];
const queue = [...LIB_TOOLS];
await Promise.all(
  Array.from({ length: 6 }, async () => {
    for (let t = queue.shift(); t; t = queue.shift()) results.push(await check(t.id, t.url));
  }),
);

const host = (u: string) => new URL(u).hostname.replace(/^www\./, '');
const broken = results.filter((r) => typeof r.status !== 'number' || (r.status >= 400 && !BOT_WALL.has(r.status)));
const walled = results.filter((r) => typeof r.status === 'number' && BOT_WALL.has(r.status));
const moved = results.filter((r) => r.final && typeof r.status === 'number' && r.status < 400 && host(r.final) !== host(r.url));
const now = Date.now();
const stale = LIB_TOOLS.filter((t) => (now - Date.parse(t.checked)) / 86_400_000 > STALE_DAYS);

console.log(`Checked ${results.length} tools.`);
if (moved.length) {
  console.log('\nMoved to another domain (re-check the tool is still the same):');
  for (const r of moved) console.log(`  - ${r.id}: ${r.url} → ${r.final}`);
}
if (walled.length) {
  console.log('\nBlocked by a bot check (open by hand to confirm):');
  for (const r of walled) console.log(`  - ${r.id}: ${r.status} ${r.url}`);
}
if (stale.length) {
  console.log(`\nNot checked for over ${STALE_DAYS} days:`);
  for (const t of stale) console.log(`  - ${t.id} (last checked ${t.checked})`);
}
if (broken.length) {
  console.log('\nBROKEN:');
  for (const r of broken) console.log(`  - ${r.id}: ${r.status} ${r.url}`);
  process.exit(1);
}
console.log('\nNo broken links.');
