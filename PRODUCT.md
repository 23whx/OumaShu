# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primarily overseas, English-speaking visitors arriving from Google search. They usually come looking for a specific kind of free online tool (an image compressor, a video-to-GIF converter, a screen recorder, a "slack-off" reader…) and want to recognize the right one quickly and click through to it. Secondary visitors browse the collection out of curiosity.

## Product Purpose
OumaShu (櫻滿集, "a collection full of cherry blossoms") is a directory/hub for a set of free, browser-based mini tools — most built by the owner and hosted on `*.oumashu.top` subdomains — plus a few hand-picked third-party resources. Success: a visitor lands, understands within seconds that this is a curated collection of free web tools, finds the relevant one, and opens it.

## Positioning
A single owner's personal, hand-made collection presented with a Japanese sensibility — not a scraped mega-directory. Every entry is either built by the owner or personally chosen.

## Operating Context
- Static Astro site (no backend), deployed on Vercel at `https://oumashu.top`.
- Tool data lives in `src/data/tools.ts` (name, description, tags, category, url, icon, featured, thirdParty, isNew, popularity). Categories: resources, entertainment, education, workplace-slack, search, text, image, video, audio, file-transfer, social, game.
- Pages: home (`src/pages/index.astro`), per-category pages (`src/pages/categories/[category].astro`), about, privacy.
- Monetized with Google AdSense auto ads, via the script in `src/layouts/Base.astro` (publisher `ca-pub-4880646654838411`). `src/components/AdSlot.astro` exists but no page uses it.

## Capabilities and Constraints
Must keep (confirmed 2026-10-12):
- Six languages, each on its own URL: English at `/`, then `/zh-cn/`, `/zh-tw/`, `/ja/`, `/ar/`, `/ru/` (home + every category page), linked with hreflang. Text is rendered at build time (`src/i18n/`, `src/locales/*.json`, `src/data/seo.i18n.ts`). The language menu is real links; a chosen language is remembered and English pages forward to it. First-time visitors whose browser language differs get a dismissible prompt, never an automatic redirect. The layout stays LTR for every locale, including Arabic (kept on purpose).
- Location / local time / weather widget (ipapi.co + open-meteo).
- Light/dark mode with manual toggle and no flash on load.
- AdSense ad slots.
- Client-side search across tool names, descriptions, and tags; category filtering.

## Brand Commitments
- Name: OumaShu / 櫻滿集 (cherry blossoms in full bloom, gathered). The site is Japanese in identity.
- Existing assets: `public/logo.png`, `public/logo.svg`, `public/favicon.svg`, category icons in `public/icons/classification/`.

## Evidence on Hand
- 27 real tool entries with real URLs. Tool site screenshots may be captured and used as card thumbnails, including third-party sites (approved 2026-10-12).
- No testimonials, user counts, or usage stats exist — do not invent any.

## Product Principles
1. Find-and-go first: a search visitor must reach the right tool in one glance and one click.
2. Curated, not crowded: the collection should feel chosen by a person.
3. Japanese identity is the soul, not a costume.
4. Free and private by default — say it plainly, never oversell.
