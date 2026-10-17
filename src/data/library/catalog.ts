// 工具圖書館：收錄的外部工具與本站自製工具（語言無關的事實部分）
// 每個工具都要過 /library/standards/ 的收錄標準；最早收錄的一批文案在 ./copy/*.ts，
// 之後按大類擴充的網站與書架（連同六種語言的介紹）在 ./more/*.ts
// 只 import 同目錄的 .ts 檔（帶副檔名），scripts/check-library.ts 用 Node 直接讀它

/** 免費程度 */
export type Price =
  | 'free'          // 完全免費
  | 'freemium'      // 免費版夠用，另有付費版
  | 'free-personal'; // 個人與教育用途免費

/** 在哪裡運行 */
export type Runs =
  | 'local'   // 網頁，檔案留在自己的裝置上
  | 'cloud'   // 網頁，檔案上傳到對方伺服器處理
  | 'app'     // 要安裝的軟體
  | 'builtin' // 系統自帶，不用另外裝
  | 'site'    // 素材網站（字型、圖片、圖示），瀏覽下載即可
  | 'web';    // 內容網站（教程、論壇、資料庫、靈感），打開就能看

export type Platform = 'Windows' | 'macOS' | 'Linux' | 'Android' | 'iOS';

export interface LibTool {
  id: string;
  name: string;            // 專有名詞，各語言通用；需要翻譯的寫在 copy 的 names 裡
  url: string;
  price: Price;
  runs: Runs;
  openSource?: string;     // 原始碼網址
  ads?: boolean;           // 免費版有展示廣告或贊助內容
  signupForm?: boolean;    // 下載前要填表（不是帳號）
  platforms?: Platform[];
  own?: boolean;           // OumaShu 自製（id 與 src/data/tools.ts 一致）
  kind?: 'article' | 'channel'; // 一篇好文章／一個影片頻道，不是整個網站
  checked: string;         // 最近一次核查日期
  /** 一句話介紹（各語言）；書架另有專屬說明時以 copy 的 notes 為準 */
  d?: Record<string, string>;
}

export interface Shelf {
  id: string;
  section: SectionId;
  /** 書架上的工具，排在前面的更推薦；tested 表示核查時實際跑過核心功能 */
  tools: { id: string; tested?: boolean }[];
}

export type SectionId =
  | 'image' | 'video' | 'audio' | 'docs' | 'language' | 'design' | 'assets' | 'ai'
  | 'learn' | 'code' | 'security' | 'mystic' | 'entertain' | 'reading' | 'games'
  | 'finance' | 'indie' | 'system' | 'daily' | 'japan' | 'toolbox';

/** 分區：索書號前綴與顏色（前幾個沿用首頁線路色）；這裡的順序就是圖書館裡的排列順序 */
export const SECTIONS: Record<SectionId, { code: string; color: string }> = {
  image: { code: 'IM', color: '#e5608a' },
  video: { code: 'VD', color: '#1f7bc1' },
  audio: { code: 'AU', color: '#8e5bc9' },
  docs: { code: 'DC', color: '#f09a1a' },
  language: { code: 'LG', color: '#00a3a6' },
  design: { code: 'DS', color: '#b4498a' },
  assets: { code: 'AS', color: '#a07c2c' },
  ai: { code: 'AI', color: '#d8433a' },
  learn: { code: 'ED', color: '#c2410c' },
  code: { code: 'PG', color: '#0e7490' },
  security: { code: 'SC', color: '#475569' },
  mystic: { code: 'MY', color: '#7c3aed' },
  entertain: { code: 'EN', color: '#db2777' },
  reading: { code: 'BK', color: '#92400e' },
  games: { code: 'GM', color: '#65a30d' },
  finance: { code: 'FN', color: '#047857' },
  indie: { code: 'ID', color: '#2563eb' },
  system: { code: 'SY', color: '#86b31b' },
  daily: { code: 'DL', color: '#5a6b80' },
  japan: { code: 'JP', color: '#be123c' },
  toolbox: { code: 'TB', color: '#4f46e5' },
};

const D = '2026-10-17';
const DESKTOP: Platform[] = ['Windows', 'macOS', 'Linux'];

const BASE_TOOLS: LibTool[] = [
  // ---------- 圖片 ----------
  { id: 'squoosh', name: 'Squoosh', url: 'https://squoosh.app/', price: 'free', runs: 'local', openSource: 'https://github.com/GoogleChromeLabs/squoosh', checked: D },
  { id: 'tinypng', name: 'TinyPNG', url: 'https://tinypng.com/', price: 'freemium', runs: 'cloud', ads: true, checked: D },
  { id: 'pic-press', name: 'PicPress', url: 'https://imghub.oumashu.top/tools/image-compress', price: 'free', runs: 'local', own: true, ads: true, checked: D },
  { id: 'iloveimg', name: 'iLoveIMG', url: 'https://www.iloveimg.com/remove-background', price: 'freemium', runs: 'cloud', ads: true, checked: D },
  { id: 'photopea', name: 'Photopea', url: 'https://www.photopea.com/', price: 'freemium', runs: 'local', ads: true, checked: D },
  { id: 'macos-preview', name: 'macOS Preview', url: 'https://support.apple.com/guide/preview/prvw15636/mac', price: 'free', runs: 'builtin', platforms: ['macOS'], checked: D },
  { id: 'gimp', name: 'GIMP', url: 'https://www.gimp.org/', price: 'free', runs: 'app', openSource: 'https://gitlab.gnome.org/GNOME/gimp', platforms: DESKTOP, checked: D },
  { id: 'minipaint', name: 'miniPaint', url: 'https://viliusle.github.io/miniPaint/', price: 'free', runs: 'local', openSource: 'https://github.com/viliusle/miniPaint', checked: D },
  { id: 'online-drawing', name: 'Online Drawing', url: 'https://imghub.oumashu.top/tools/online-drawing', price: 'free', runs: 'local', own: true, ads: true, checked: D },
  { id: 'upscayl', name: 'Upscayl', url: 'https://upscayl.org/', price: 'free', runs: 'app', openSource: 'https://github.com/upscayl/upscayl', platforms: DESKTOP, checked: D },
  { id: 'waifu2x', name: 'waifu2x (unlimited)', url: 'https://unlimited.waifu2x.net/', price: 'free', runs: 'local', openSource: 'https://github.com/nagadomi/nunif', ads: true, checked: D },
  { id: 'image-enhancer', name: 'AI Image Enhancer', url: 'https://imghub.oumashu.top/tools/image-enhancer', price: 'free', runs: 'local', own: true, ads: true, checked: D },
  { id: 'image-ocr', name: 'Online OCR', url: 'https://imghub.oumashu.top/tools/image-ocr', price: 'free', runs: 'local', own: true, ads: true, checked: D },
  { id: 'powertoys', name: 'PowerToys Text Extractor', url: 'https://learn.microsoft.com/windows/powertoys/text-extractor', price: 'free', runs: 'app', openSource: 'https://github.com/microsoft/PowerToys', platforms: ['Windows'], checked: D },
  { id: 'pdf24-ocr', name: 'PDF24 OCR', url: 'https://tools.pdf24.org/en/ocr-pdf', price: 'free', runs: 'cloud', ads: true, checked: D },
  { id: 'xnconvert', name: 'XnConvert', url: 'https://www.xnview.com/en/xnconvert/', price: 'free-personal', runs: 'app', platforms: DESKTOP, checked: D },
  { id: 'ezgif', name: 'Ezgif', url: 'https://ezgif.com/', price: 'free', runs: 'cloud', ads: true, checked: D },
  { id: 'video2gif', name: 'Video2GIF', url: 'https://video2gif.oumashu.top/', price: 'free', runs: 'local', own: true, ads: true, checked: D },
  { id: 'sharex', name: 'ShareX', url: 'https://getsharex.com/', price: 'free', runs: 'app', openSource: 'https://github.com/ShareX/ShareX', platforms: ['Windows'], checked: D },

  // ---------- 文件 ----------
  { id: 'pdf24', name: 'PDF24 Tools', url: 'https://tools.pdf24.org/en/', price: 'free', runs: 'cloud', ads: true, checked: D },
  { id: 'ilovepdf', name: 'iLovePDF', url: 'https://www.ilovepdf.com/', price: 'freemium', runs: 'cloud', ads: true, checked: D },
  { id: 'stirling', name: 'Stirling PDF', url: 'https://www.stirling.com/', price: 'freemium', runs: 'app', openSource: 'https://github.com/Stirling-Tools/Stirling-PDF', platforms: DESKTOP, checked: D },
  { id: 'libreoffice', name: 'LibreOffice', url: 'https://www.libreoffice.org/', price: 'free', runs: 'app', openSource: 'https://git.libreoffice.org/core', platforms: DESKTOP, checked: D },
  { id: 'onlyoffice', name: 'ONLYOFFICE Desktop Editors', url: 'https://www.onlyoffice.com/desktop', price: 'free', runs: 'app', openSource: 'https://github.com/ONLYOFFICE/DesktopEditors', platforms: DESKTOP, checked: D },
  { id: 'deepl', name: 'DeepL', url: 'https://www.deepl.com/translator', price: 'freemium', runs: 'cloud', checked: D },
  { id: 'google-translate', name: 'Google Translate', url: 'https://translate.google.com/', price: 'free', runs: 'cloud', checked: D },

  // ---------- 影音 ----------
  { id: 'handbrake', name: 'HandBrake', url: 'https://handbrake.fr/', price: 'free', runs: 'app', openSource: 'https://github.com/HandBrake/HandBrake', platforms: DESKTOP, checked: D },
  { id: 'shutter-encoder', name: 'Shutter Encoder', url: 'https://www.shutterencoder.com/', price: 'free', runs: 'app', openSource: 'https://github.com/paulpacifico/shutter-encoder', platforms: DESKTOP, checked: D },
  { id: 'shotcut', name: 'Shotcut', url: 'https://shotcut.org/', price: 'free', runs: 'app', openSource: 'https://github.com/mltframework/shotcut', platforms: DESKTOP, checked: D },
  { id: 'kdenlive', name: 'Kdenlive', url: 'https://kdenlive.org/', price: 'free', runs: 'app', openSource: 'https://invent.kde.org/multimedia/kdenlive', platforms: DESKTOP, checked: D },
  { id: 'davinci-resolve', name: 'DaVinci Resolve', url: 'https://www.blackmagicdesign.com/products/davinciresolve', price: 'freemium', runs: 'app', signupForm: true, platforms: DESKTOP, checked: D },
  { id: 'obs', name: 'OBS Studio', url: 'https://obsproject.com/', price: 'free', runs: 'app', openSource: 'https://github.com/obsproject/obs-studio', platforms: DESKTOP, checked: D },
  { id: 'screen-flow', name: 'ScreenFlow', url: 'https://screen-flow.oumashu.top/', price: 'free', runs: 'local', own: true, ads: true, checked: D },
  { id: 'audacity', name: 'Audacity', url: 'https://www.audacityteam.org/', price: 'free', runs: 'app', openSource: 'https://github.com/audacity/audacity', platforms: DESKTOP, checked: D },
  { id: 'audiomass', name: 'AudioMass', url: 'https://audiomass.co/', price: 'free', runs: 'local', openSource: 'https://github.com/pkalogiros/AudioMass', checked: D },
  { id: 'media-trim', name: 'MediaTrim', url: 'https://audio-trimmer-converter.oumashu.top/', price: 'free', runs: 'local', own: true, ads: true, checked: D },
  { id: 'buzz', name: 'Buzz', url: 'https://buzzcaptions.com/', price: 'free', runs: 'app', openSource: 'https://github.com/chidiwilliams/buzz', platforms: DESKTOP, checked: D },
  { id: 'subtitle-edit', name: 'Subtitle Edit', url: 'https://www.nikse.dk/subtitleedit', price: 'free', runs: 'app', openSource: 'https://github.com/SubtitleEdit/subtitleedit', platforms: ['Windows', 'Linux'], checked: D },
  { id: 'whisper-web', name: 'Whisper Web', url: 'https://huggingface.co/spaces/Xenova/whisper-web', price: 'free', runs: 'local', openSource: 'https://github.com/xenova/whisper-web', checked: D },

  // ---------- 設計 ----------
  { id: 'excalidraw', name: 'Excalidraw', url: 'https://excalidraw.com/', price: 'free', runs: 'local', openSource: 'https://github.com/excalidraw/excalidraw', checked: D },
  { id: 'tldraw', name: 'tldraw', url: 'https://www.tldraw.com/', price: 'free', runs: 'local', checked: D },
  { id: 'drawio', name: 'draw.io', url: 'https://app.diagrams.net/', price: 'free', runs: 'local', openSource: 'https://github.com/jgraph/drawio', checked: D },
  { id: 'coolors', name: 'Coolors', url: 'https://coolors.co/', price: 'freemium', runs: 'local', ads: true, checked: D },
  { id: 'adobe-color', name: 'Adobe Color', url: 'https://color.adobe.com/', price: 'free', runs: 'local', checked: D },
  { id: 'google-fonts', name: 'Google Fonts', url: 'https://fonts.google.com/', price: 'free', runs: 'site', checked: D },
  { id: 'fontshare', name: 'Fontshare', url: 'https://www.fontshare.com/', price: 'free', runs: 'site', checked: D },
  { id: 'unsplash', name: 'Unsplash', url: 'https://unsplash.com/', price: 'free', runs: 'site', ads: true, checked: D },
  { id: 'pexels', name: 'Pexels', url: 'https://www.pexels.com/', price: 'free', runs: 'site', ads: true, checked: D },
  { id: 'pixabay', name: 'Pixabay', url: 'https://pixabay.com/', price: 'free', runs: 'site', ads: true, checked: D },
  { id: 'icones', name: 'Icônes', url: 'https://icones.js.org/', price: 'free', runs: 'site', openSource: 'https://github.com/antfu-collective/icones', checked: D },
  { id: 'lucide', name: 'Lucide', url: 'https://lucide.dev/', price: 'free', runs: 'site', openSource: 'https://github.com/lucide-icons/lucide', ads: true, checked: D },
  { id: 'tabler-icons', name: 'Tabler Icons', url: 'https://tabler.io/icons', price: 'free', runs: 'site', openSource: 'https://github.com/tabler/tabler-icons', checked: D },
  { id: 'qrcode-monkey', name: 'QRCode Monkey', url: 'https://www.qrcode-monkey.com/', price: 'free', runs: 'cloud', ads: true, checked: D },
  { id: 'goqr', name: 'goQR.me', url: 'https://goqr.me/', price: 'free', runs: 'cloud', ads: true, checked: D },

  // ---------- 開發 ----------
  { id: 'diffchecker', name: 'Diffchecker', url: 'https://www.diffchecker.com/', price: 'freemium', runs: 'cloud', ads: true, checked: D },
  { id: 'winmerge', name: 'WinMerge', url: 'https://winmerge.org/', price: 'free', runs: 'app', openSource: 'https://github.com/WinMerge/winmerge', platforms: ['Windows'], checked: D },
  { id: 'meld', name: 'Meld', url: 'https://meldmerge.org/', price: 'free', runs: 'app', openSource: 'https://gitlab.gnome.org/GNOME/meld', platforms: ['Linux', 'Windows'], checked: D },
  { id: 'regex101', name: 'regex101', url: 'https://regex101.com/', price: 'free', runs: 'local', ads: true, checked: D },
  { id: 'regexr', name: 'RegExr', url: 'https://regexr.com/', price: 'free', runs: 'local', openSource: 'https://github.com/gskinner/regexr', ads: true, checked: D },
  { id: 'cyberchef', name: 'CyberChef', url: 'https://gchq.github.io/CyberChef/', price: 'free', runs: 'local', openSource: 'https://github.com/gchq/CyberChef', checked: D },
  { id: 'transform-tools', name: 'transform.tools', url: 'https://transform.tools/', price: 'free', runs: 'local', openSource: 'https://github.com/ritz078/transform', checked: D },

  // ---------- 日常 ----------
  { id: 'localsend', name: 'LocalSend', url: 'https://localsend.org/', price: 'free', runs: 'app', openSource: 'https://github.com/localsend/localsend', platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'], checked: D },
  { id: 'pairdrop', name: 'PairDrop', url: 'https://pairdrop.net/', price: 'free', runs: 'local', openSource: 'https://github.com/schlagmichdoch/PairDrop', checked: D },
  { id: 'wormhole', name: 'Wormhole', url: 'https://wormhole.app/', price: 'free', runs: 'cloud', checked: D },
  { id: 'time-is', name: 'Time.is', url: 'https://time.is/', price: 'free', runs: 'site', checked: D },
  { id: 'everytimezone', name: 'Every Time Zone', url: 'https://everytimezone.com/', price: 'free', runs: 'site', ads: true, checked: D },
  { id: 'worldtimebuddy', name: 'World Time Buddy', url: 'https://www.worldtimebuddy.com/', price: 'freemium', runs: 'site', ads: true, checked: D },
  { id: 'cloudflare-speed', name: 'Cloudflare Speed Test', url: 'https://speed.cloudflare.com/', price: 'free', runs: 'site', openSource: 'https://github.com/cloudflare/speedtest', checked: D },
  { id: 'fast-com', name: 'FAST.com', url: 'https://fast.com/', price: 'free', runs: 'site', checked: D },
  { id: 'speedtest', name: 'Speedtest by Ookla', url: 'https://www.speedtest.net/', price: 'free', runs: 'site', ads: true, checked: D },
  { id: 'bitwarden-gen', name: 'Bitwarden Password Generator', url: 'https://bitwarden.com/password-generator/', price: 'free', runs: 'local', checked: D },
  { id: 'onepassword-gen', name: '1Password Password Generator', url: 'https://1password.com/password-generator', price: 'free', runs: 'local', checked: D },
  { id: 'keepassxc', name: 'KeePassXC', url: 'https://keepassxc.org/', price: 'free', runs: 'app', openSource: 'https://github.com/keepassxreboot/keepassxc', platforms: DESKTOP, checked: D },

  // ---------- 2026-10：從站長收藏夾篩選後新增 ----------
  // 圖片
  { id: 'inpaint-web', name: 'Inpaint-web', url: 'https://inpaintweb.lxfater.com/', price: 'free', runs: 'local', openSource: 'https://github.com/lxfater/inpaint-web', checked: D },
  { id: 'iopaint', name: 'IOPaint', url: 'https://www.iopaint.com/', price: 'free', runs: 'app', openSource: 'https://github.com/Sanster/IOPaint', platforms: DESKTOP, checked: D },
  { id: 'rmbg-webgpu', name: 'Remove Background WebGPU', url: 'https://huggingface.co/spaces/Xenova/remove-background-webgpu', price: 'free', runs: 'local', openSource: 'https://huggingface.co/spaces/Xenova/remove-background-webgpu/tree/main', checked: D },
  { id: 'google-lens', name: 'Google Lens', url: 'https://images.google.com/', price: 'free', runs: 'cloud', checked: D },
  { id: 'tineye', name: 'TinEye', url: 'https://tineye.com/', price: 'free', runs: 'cloud', checked: D },
  { id: 'saucenao', name: 'SauceNAO', url: 'https://saucenao.com/', price: 'freemium', runs: 'cloud', checked: D },
  { id: 'trace-moe', name: 'trace.moe', url: 'https://trace.moe/', price: 'free', runs: 'cloud', openSource: 'https://github.com/soruly/trace.moe', checked: D },
  { id: 'watermark-adder', name: 'Add Watermark', url: 'https://imghub.oumashu.top/tools/watermark-adder', price: 'free', runs: 'local', own: true, ads: true, checked: D },
  { id: 'full-page-screenshot', name: 'Full Page Screenshot', url: 'https://imghub.oumashu.top/tools/screenshot', price: 'free', runs: 'local', own: true, ads: true, checked: D },
  { id: 'flameshot', name: 'Flameshot', url: 'https://flameshot.org/', price: 'free', runs: 'app', openSource: 'https://github.com/flameshot-org/flameshot', platforms: DESKTOP, checked: D },
  { id: 'vert', name: 'VERT', url: 'https://vert.sh/', price: 'free', runs: 'local', openSource: 'https://github.com/VERT-sh/VERT', checked: D },

  // 影片與音訊
  { id: 'losslesscut', name: 'LosslessCut', url: 'https://losslesscut.app/', price: 'free', runs: 'app', openSource: 'https://github.com/mifi/lossless-cut', platforms: DESKTOP, checked: D },
  { id: 'uvr', name: 'Ultimate Vocal Remover', url: 'https://ultimatevocalremover.com/', price: 'free', runs: 'app', openSource: 'https://github.com/Anjok07/ultimatevocalremovergui', platforms: DESKTOP, checked: D },
  { id: 'vocalremover', name: 'Vocal Remover', url: 'https://vocalremover.org/', price: 'freemium', runs: 'cloud', checked: D },
  { id: 'ttsmaker', name: 'TTSMaker', url: 'https://ttsmaker.com/', price: 'freemium', runs: 'cloud', ads: true, checked: D },
  { id: 'naturalreader', name: 'NaturalReader', url: 'https://www.naturalreaders.com/online/', price: 'freemium', runs: 'cloud', checked: D },

  // 文件與語言
  { id: 'pandoc', name: 'Pandoc', url: 'https://pandoc.org/', price: 'free', runs: 'app', openSource: 'https://github.com/jgm/pandoc', platforms: DESKTOP, checked: D },
  { id: 'stackedit', name: 'StackEdit', url: 'https://stackedit.io/app', price: 'free', runs: 'local', openSource: 'https://github.com/benweet/stackedit', checked: D },
  { id: 'markdown', name: 'Markdown Editor', url: 'https://markdown.oumashu.top/', price: 'free', runs: 'local', own: true, checked: D },
  { id: 'papago', name: 'Papago', url: 'https://papago.naver.com/', price: 'free', runs: 'cloud', checked: D },
  { id: 'pdf-math-translate', name: 'PDFMathTranslate', url: 'https://github.com/PDFMathTranslate/PDFMathTranslate', price: 'free', runs: 'app', openSource: 'https://github.com/PDFMathTranslate/PDFMathTranslate', platforms: DESKTOP, checked: D },
  { id: 'subtitle-translator', name: 'Subtitle Translator', url: 'https://tools.newzone.top/en/subtitle-translator', price: 'free', runs: 'local', openSource: 'https://github.com/rockbenben/subtitle-translator', checked: D },
  { id: 'pyvideotrans', name: 'pyVideoTrans', url: 'https://pyvideotrans.com/', price: 'free', runs: 'app', openSource: 'https://github.com/jianchang512/pyvideotrans', platforms: DESKTOP, checked: D },
  { id: 'jisho', name: 'Jisho', url: 'https://jisho.org/', price: 'free', runs: 'site', checked: D },
  { id: 'weblio', name: 'Weblio', url: 'https://www.weblio.jp/', price: 'free', runs: 'site', ads: true, checked: D },
  { id: 'hiragana-megane', name: 'Hiragana Megane', url: 'https://www.hiragana.jp/', price: 'free', runs: 'cloud', checked: D },
  { id: 'zhconvert', name: 'Fanhuaji', url: 'https://zhconvert.org/', price: 'free', runs: 'cloud', checked: D },
  { id: 'text-grove', name: 'TextGrove', url: 'https://text-grove.oumashu.top/', price: 'free', runs: 'local', own: true, checked: D },

  // 設計與素材
  { id: 'markmap', name: 'markmap', url: 'https://markmap.js.org/repl', price: 'free', runs: 'local', openSource: 'https://github.com/markmap/markmap', checked: D },
  { id: 'realtimecolors', name: 'Realtime Colors', url: 'https://www.realtimecolors.com/', price: 'free', runs: 'local', checked: D },
  { id: 'mixkit', name: 'Mixkit', url: 'https://mixkit.co/', price: 'free', runs: 'site', checked: D },
  { id: 'coverr', name: 'Coverr', url: 'https://coverr.co/', price: 'freemium', runs: 'site', checked: D },
  { id: 'pixabay-audio', name: 'Pixabay Music & Sound Effects', url: 'https://pixabay.com/music/', price: 'free', runs: 'site', ads: true, checked: D },
  { id: 'taira-komori', name: 'Taira Komori Sound Effects', url: 'https://taira-komori.net/freesounden.html', price: 'free', runs: 'site', checked: D },
  { id: 'undraw', name: 'unDraw', url: 'https://undraw.co/illustrations', price: 'free', runs: 'site', checked: D },
  { id: 'irasutoya', name: 'Irasutoya', url: 'https://www.irasutoya.com/', price: 'free', runs: 'site', ads: true, checked: D },
  { id: '100font', name: '100font', url: 'https://www.100font.com/', price: 'free', runs: 'site', checked: D },

  // AI
  { id: 'chatgpt', name: 'ChatGPT', url: 'https://chatgpt.com/', price: 'freemium', runs: 'cloud', checked: D },
  { id: 'perplexity', name: 'Perplexity', url: 'https://www.perplexity.ai/', price: 'freemium', runs: 'cloud', checked: D },
  { id: 'lmarena', name: 'Arena (LMArena)', url: 'https://arena.ai/', price: 'free', runs: 'cloud', checked: D },
  { id: 'ollama', name: 'Ollama', url: 'https://ollama.com/', price: 'free', runs: 'app', openSource: 'https://github.com/ollama/ollama', platforms: DESKTOP, checked: D },
  { id: 'jan', name: 'Jan', url: 'https://www.jan.ai/', price: 'free', runs: 'app', openSource: 'https://github.com/janhq/jan', platforms: DESKTOP, checked: D },

  // 開發
  { id: 'tableconvert', name: 'TableConvert', url: 'https://tableconvert.com/', price: 'freemium', runs: 'local', ads: true, checked: D },
  { id: 'uptime-kuma', name: 'Uptime Kuma', url: 'https://uptime.kuma.pet/', price: 'free', runs: 'app', openSource: 'https://github.com/louislam/uptime-kuma', checked: D },
  { id: 'changedetection', name: 'changedetection.io', url: 'https://changedetection.io/', price: 'freemium', runs: 'app', openSource: 'https://github.com/dgtlmoon/changedetection.io', checked: D },

  // 系統
  { id: 'ventoy', name: 'Ventoy', url: 'https://www.ventoy.net/', price: 'free', runs: 'app', openSource: 'https://github.com/ventoy/Ventoy', platforms: ['Windows', 'Linux'], checked: D },
  { id: 'rufus', name: 'Rufus', url: 'https://rufus.ie/', price: 'free', runs: 'app', openSource: 'https://github.com/pbatard/rufus', platforms: ['Windows'], checked: D },
  { id: 'virustotal', name: 'VirusTotal', url: 'https://www.virustotal.com/', price: 'free', runs: 'cloud', checked: D },
  { id: 'windows-security', name: 'Windows Security', url: 'https://support.microsoft.com/windows/stay-protected-with-windows-security-2ae0363d-0ada-c064-8b56-6a39afb6a963', price: 'free', runs: 'builtin', platforms: ['Windows'], checked: D },
  { id: 'scrcpy', name: 'scrcpy', url: 'https://github.com/Genymobile/scrcpy', price: 'free', runs: 'app', openSource: 'https://github.com/Genymobile/scrcpy', platforms: DESKTOP, checked: D },
  { id: 'escrcpy', name: 'Escrcpy', url: 'https://github.com/viarotel-org/escrcpy', price: 'free', runs: 'app', openSource: 'https://github.com/viarotel-org/escrcpy', platforms: DESKTOP, checked: D },

  // 日常
  { id: 'alternativeto', name: 'AlternativeTo', url: 'https://alternativeto.net/', price: 'free', runs: 'site', ads: true, checked: D },
  { id: 'openalternative', name: 'OpenAlternative', url: 'https://openalternative.co/', price: 'free', runs: 'site', checked: D },
];

const BASE_SHELVES: Shelf[] = [
  { id: 'compress-image', section: 'image', tools: [{ id: 'squoosh' }, { id: 'pic-press' }, { id: 'tinypng' }] },
  { id: 'convert-image', section: 'image', tools: [{ id: 'squoosh' }, { id: 'xnconvert' }, { id: 'vert' }, { id: 'ezgif' }] },
  { id: 'edit-image', section: 'image', tools: [{ id: 'photopea' }, { id: 'gimp' }, { id: 'minipaint' }, { id: 'online-drawing' }] },
  { id: 'remove-background', section: 'image', tools: [{ id: 'iloveimg', tested: true }, { id: 'rmbg-webgpu' }, { id: 'photopea' }, { id: 'macos-preview' }] },
  { id: 'erase-objects', section: 'image', tools: [{ id: 'inpaint-web' }, { id: 'iopaint' }, { id: 'photopea' }] },
  { id: 'upscale-image', section: 'image', tools: [{ id: 'upscayl' }, { id: 'waifu2x' }, { id: 'image-enhancer' }] },
  { id: 'image-to-text', section: 'image', tools: [{ id: 'image-ocr' }, { id: 'powertoys' }, { id: 'pdf24-ocr' }] },
  { id: 'add-watermark', section: 'image', tools: [{ id: 'watermark-adder' }, { id: 'xnconvert' }] },
  { id: 'take-screenshot', section: 'image', tools: [{ id: 'sharex' }, { id: 'flameshot' }, { id: 'full-page-screenshot' }] },
  { id: 'make-gif', section: 'image', tools: [{ id: 'ezgif' }, { id: 'video2gif' }, { id: 'sharex' }] },
  { id: 'reverse-image-search', section: 'image', tools: [{ id: 'google-lens' }, { id: 'tineye' }, { id: 'saucenao' }, { id: 'trace-moe' }] },

  { id: 'compress-video', section: 'video', tools: [{ id: 'handbrake' }, { id: 'shutter-encoder' }] },
  { id: 'edit-video', section: 'video', tools: [{ id: 'shotcut' }, { id: 'davinci-resolve' }, { id: 'kdenlive' }, { id: 'losslesscut' }] },
  { id: 'screen-record', section: 'video', tools: [{ id: 'obs' }, { id: 'sharex' }, { id: 'screen-flow' }] },

  { id: 'edit-audio', section: 'audio', tools: [{ id: 'audacity' }, { id: 'audiomass' }, { id: 'media-trim' }] },
  { id: 'transcribe', section: 'audio', tools: [{ id: 'buzz' }, { id: 'subtitle-edit' }, { id: 'whisper-web' }] },
  { id: 'text-to-speech', section: 'audio', tools: [{ id: 'ttsmaker' }, { id: 'naturalreader' }] },
  { id: 'separate-vocals', section: 'audio', tools: [{ id: 'uvr' }, { id: 'vocalremover' }] },

  { id: 'pdf-tools', section: 'docs', tools: [{ id: 'pdf24' }, { id: 'ilovepdf' }, { id: 'stirling' }] },
  { id: 'office-suite', section: 'docs', tools: [{ id: 'libreoffice' }, { id: 'onlyoffice' }] },
  { id: 'convert-documents', section: 'docs', tools: [{ id: 'pandoc' }, { id: 'libreoffice' }, { id: 'vert' }] },
  { id: 'write-markdown', section: 'docs', tools: [{ id: 'stackedit' }, { id: 'markdown' }] },

  { id: 'translate', section: 'language', tools: [{ id: 'deepl' }, { id: 'google-translate' }, { id: 'papago' }] },
  { id: 'translate-documents', section: 'language', tools: [{ id: 'pdf-math-translate' }, { id: 'google-translate' }, { id: 'deepl' }] },
  { id: 'translate-subtitles', section: 'language', tools: [{ id: 'subtitle-edit' }, { id: 'subtitle-translator' }, { id: 'pyvideotrans' }] },
  { id: 'japanese-dictionary', section: 'language', tools: [{ id: 'jisho' }, { id: 'weblio' }, { id: 'hiragana-megane' }] },
  { id: 'convert-chinese', section: 'language', tools: [{ id: 'zhconvert' }, { id: 'text-grove' }] },

  { id: 'whiteboard', section: 'design', tools: [{ id: 'excalidraw' }, { id: 'drawio' }, { id: 'tldraw' }, { id: 'markmap' }] },
  { id: 'color-palette', section: 'design', tools: [{ id: 'coolors' }, { id: 'realtimecolors' }, { id: 'adobe-color' }] },
  { id: 'qr-code', section: 'design', tools: [{ id: 'qrcode-monkey' }, { id: 'goqr' }] },

  { id: 'stock-photos', section: 'assets', tools: [{ id: 'unsplash' }, { id: 'pexels' }, { id: 'pixabay' }] },
  { id: 'stock-video', section: 'assets', tools: [{ id: 'pexels' }, { id: 'mixkit' }, { id: 'coverr' }, { id: 'pixabay' }] },
  { id: 'illustrations', section: 'assets', tools: [{ id: 'undraw' }, { id: 'irasutoya' }] },
  { id: 'free-sounds', section: 'assets', tools: [{ id: 'pixabay-audio' }, { id: 'mixkit' }, { id: 'taira-komori' }] },
  { id: 'free-fonts', section: 'assets', tools: [{ id: 'google-fonts' }, { id: 'fontshare' }, { id: '100font' }] },
  { id: 'icons', section: 'assets', tools: [{ id: 'icones' }, { id: 'lucide' }, { id: 'tabler-icons' }] },

  { id: 'ai-chat', section: 'ai', tools: [{ id: 'chatgpt' }, { id: 'perplexity' }, { id: 'lmarena' }] },
  { id: 'run-ai-locally', section: 'ai', tools: [{ id: 'ollama' }, { id: 'jan' }] },

  { id: 'compare-text', section: 'code', tools: [{ id: 'diffchecker' }, { id: 'winmerge' }, { id: 'meld' }] },
  { id: 'regex', section: 'code', tools: [{ id: 'regex101' }, { id: 'regexr' }] },
  { id: 'convert-data', section: 'code', tools: [{ id: 'cyberchef' }, { id: 'transform-tools' }, { id: 'tableconvert' }] },
  { id: 'monitor-websites', section: 'code', tools: [{ id: 'uptime-kuma' }, { id: 'changedetection' }] },

  { id: 'bootable-usb', section: 'system', tools: [{ id: 'ventoy' }, { id: 'rufus' }] },
  { id: 'scan-files', section: 'system', tools: [{ id: 'virustotal' }, { id: 'windows-security' }] },
  { id: 'mirror-phone', section: 'system', tools: [{ id: 'scrcpy' }, { id: 'escrcpy' }] },

  { id: 'send-files', section: 'daily', tools: [{ id: 'localsend' }, { id: 'pairdrop' }, { id: 'wormhole' }] },
  { id: 'time-zones', section: 'daily', tools: [{ id: 'everytimezone' }, { id: 'worldtimebuddy' }, { id: 'time-is' }] },
  { id: 'speed-test', section: 'daily', tools: [{ id: 'cloudflare-speed' }, { id: 'fast-com' }, { id: 'speedtest' }] },
  { id: 'password-generator', section: 'daily', tools: [{ id: 'bitwarden-gen' }, { id: 'onepassword-gen' }, { id: 'keepassxc' }] },
  { id: 'find-alternatives', section: 'daily', tools: [{ id: 'alternativeto' }, { id: 'openalternative' }] },
];

/** 是不是 GitHub 上的專案：網站本身或原始碼放在 GitHub（含 GitHub Pages） */
export function onGitHub(t: Pick<LibTool, 'url' | 'openSource'>): boolean {
  return [t.url, t.openSource].some((u) => !!u && /^https:\/\/(github\.com\/|[^/]+\.github\.io\/)/.test(u));
}

// ---------- 合併擴充的大類 ----------
import { GROUPS } from './more/index.ts';
import { ADS } from './more/ads.ts';

/** 擴充網站的核查日期預設值（逐個打開核查的那一天） */
const MORE_CHECKED = '2026-10-17';

export const LIB_TOOLS: LibTool[] = [
  ...BASE_TOOLS,
  ...GROUPS.flatMap((g) => g.sites.map((t) => ({
    ...t,
    ads: t.ads || ADS.has(t.id) || undefined,
    checked: t.checked ?? MORE_CHECKED,
  }))),
];

const SECTION_ORDER = Object.keys(SECTIONS) as SectionId[];
const extend = new Map<string, string[]>();
for (const g of GROUPS) for (const [id, more] of Object.entries(g.extend ?? {})) extend.set(id, [...(extend.get(id) ?? []), ...more]);

/** 所有書架，按分區順序排好；同一分區內先放原有的，再放擴充的 */
export const SHELVES: Shelf[] = [
  ...BASE_SHELVES.map((s) => ({ ...s, tools: [...s.tools, ...(extend.get(s.id) ?? []).map((id) => ({ id }))] })),
  ...GROUPS.flatMap((g) => g.shelves.map((s) => ({
    id: s.id,
    section: s.section,
    tools: s.tools.map((x) => (typeof x === 'string' ? { id: x } : x)),
  }))),
].sort((a, b) => SECTION_ORDER.indexOf(a.section) - SECTION_ORDER.indexOf(b.section));
