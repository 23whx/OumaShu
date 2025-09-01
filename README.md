### OumaShu — 小工具导航目录站（Astro + React）

一个聚合你的多款前端小工具的极简日式导航站，只需购买这一个主域名，其它小工具以主域名的子域方式呈现，统一入口、统一风格、统一 SEO。

- **UI 风格**: 日式简约（Simplicity / 空白 / 细节）
- **主色**: 樱花红、樱花白
- **技术栈**: Astro + React（无后端）
- **示例子站**: [Learn Languages](https://learn-languages-pi.vercel.app/) | [Subtitle Screenshot Generator](https://fake-screenshot-one.vercel.app/)

---

## 目标与定位
- **一站式入口**：集中展示与检索所有已上线（或计划上线）的前端小工具。
- **主域名统一**：仅购买目录站域名，子站通过子域名组织。
- **零后端依赖**：数据静态化/前端驱动，部署与维护成本低。
- **广告变现友好**：内置广告位布局与合规策略，提升 eCPM。

---

## 功能概览
- **工具目录与卡片展示**：名称、简介、标签、图标、跳转链接（子域）。
- **分类与多条件筛选**：按类别/标签/人气/最近更新。
- **站内搜索**：按标题/描述/标签模糊检索。
- **多语言与切换**：简体中文、繁體中文、English、日本語、العربية、Русский；默认英语、自动IP检测、手动切换，并持久化。
- **昼夜模式**：系统跟随 + 手动切换，首屏无闪烁（SSR 注入，持久化）。
- **SEO 完整支持**：站点地图、OG、结构化数据（JSON-LD）、`hreflang`。
- **广告位布局**：列表信息流位、详情页侧栏位、顶部横幅位。
- **分析统计（可选）**：GA4 或 privacy-first 的 Plausible/umami。
- **响应式设计**：移动端优先，自适应栅格。

---

## UI 设计规范
- **配色**
  - 樱花红（主色）: `#E91E63`
  - 樱叶绿（点缀色）: `#4ADE80` 用于细枝末节装饰
  - 樱花白（浅背景）: `#FFF5F7` 或 `#FFFFFF`
  - 深背景: `#0B0B0C` ~ `#121212`
  - 文本灰: `#111827`（浅色主文）/ `#E5E7EB`（深色主文）
  - 分割线: `#E5E7EB`（浅）/ `#1F2937`（深）
- **字体**
  - CJK/日文优先系统字体；英文可用 `Inter`；阿语优先系统/`Noto Sans Arabic`；俄语优先系统西里尔字体。
- **间距与圆角**
  - 全局 8pt 系统，卡片圆角 `12px`。
- **组件**
  - 工具卡片、标签、搜索框、筛选器、分页/更多、顶部导航、底部导航、广告容器、语言切换器、主题切换器。

---

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

---

## 项目已完成

✅ **初始化 Astro 项目并安装依赖**  
✅ **创建项目目录结构（components/locales/layouts/pages/styles/utils）**  
✅ **创建多语言配置和语言包（en/zh-CN/zh-TW/ja-JP/ar/ru）**  
✅ **创建主题系统（樱花红+樱叶绿配色、昼夜模式CSS变量）**  
✅ **创建核心组件（LanguageSwitcher/ThemeToggle/ToolCard/Search/Filters）**  
✅ **创建工具数据模型和示例数据**  
✅ **创建 Base.astro 布局（SEO/hreflang/主题注入）**  
✅ **创建主页和分类页**  
✅ **预置 AdSense 容器组件**  

项目已严格按照文档规范完成基础架构搭建，包含完整的多语言支持、主题系统、组件库和SEO优化。