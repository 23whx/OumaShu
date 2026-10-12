---
name: OumaShu
description: A hand-made network of free browser tools, read like a Japanese station map.
colors:
  sign-navy: "#14223f"
  sign-navy-raised: "#1c2d52"
  sign-ink: "#ffffff"
  sign-mute: "#aab6cc"
  paper: "#ffffff"
  platform-panel: "#f4f5f8"
  ink: "#121826"
  card: "#ffffff"
  sakura: "#e5608a"
  sakura-ink: "#c13f6b"
  rule-grey: "#e2e5eb"
  muted-slate: "#586174"
  sign-navy-night: "#0d172c"
  sign-navy-raised-night: "#16233f"
  sign-ink-night: "#f2f5fa"
  sign-mute-night: "#8f9cb5"
  paper-night: "#0a1120"
  platform-panel-night: "#101a2e"
  ink-night: "#e8ecf3"
  card-night: "#111c31"
  sakura-night: "#f07ba0"
  sakura-ink-night: "#f59ab7"
  rule-grey-night: "#22304b"
  muted-slate-night: "#9aa6bb"
  line-im-image: "#e5608a"
  line-vd-video: "#1f7bc1"
  line-au-audio: "#8e5bc9"
  line-tx-text: "#24985a"
  line-ed-education: "#f09a1a"
  line-ws-workplace-slack: "#00a3a6"
  line-sr-search: "#d8433a"
  line-rs-resources: "#a07c2c"
  line-en-entertainment: "#b4498a"
  line-so-social: "#d4a90a"
  line-ft-file-transfer: "#5a6b80"
  line-gm-games: "#3f4a5c"
typography:
  display:
    fontFamily: "Overpass, 'Zen Kaku Gothic New', 'Noto Sans SC', 'PingFang SC', 'Hiragino Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.4rem + 3.2vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  display-cjk:
    fontFamily: "'Zen Kaku Gothic New', 'Hiragino Sans', 'Noto Sans JP', sans-serif"
    fontSize: "clamp(2.1rem, 1.1rem + 2.6vw, 3.4rem)"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "0.01em"
  station-name:
    fontFamily: "'Zen Kaku Gothic New', 'Hiragino Sans', 'Noto Sans JP', sans-serif"
    fontSize: "64px"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "0.14em"
  headline:
    fontFamily: "Overpass, 'Zen Kaku Gothic New', system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Overpass, 'Zen Kaku Gothic New', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Overpass, 'Zen Kaku Gothic New', system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Overpass, 'Zen Kaku Gothic New', system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Overpass, 'Zen Kaku Gothic New', system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 600
    lineHeight: 1
  station-label:
    fontFamily: "Overpass, 'Zen Kaku Gothic New', system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 700
    lineHeight: 1.25
  badge-code:
    fontFamily: "Overpass, 'Zen Kaku Gothic New', system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
  mono:
    fontFamily: "'Overpass Mono', ui-monospace, 'SFMono-Regular', Consolas, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    fontFeature: "tnum"
  ja-subname:
    fontFamily: "'Zen Kaku Gothic New', 'Hiragino Sans', 'Noto Sans JP', sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.15
rounded:
  plate-inner-sm: "4px"
  plate-inner: "5px"
  plate-inner-lg: "6px"
  badge: "8px"
  control: "8px"
  badge-lg: "10px"
  menu: "10px"
  card: "12px"
  pill: "999px"
spacing:
  hairline-gap: "4px"
  chip-gap: "6px"
  inline-gap: "10px"
  phone-gutter: "16px"
  card-gap: "22px"
  head-rule-gap: "24px"
  gutter: "32px"
  column-gap: "48px"
  line-section-gap: "64px"
  container: "1320px"
components:
  station-badge:
    backgroundColor: "{colors.line-im-image}"
    textColor: "{colors.ink}"
    typography: "{typography.badge-code}"
    rounded: "{rounded.badge}"
    padding: "3px"
    size: "34px"
  station-badge-lg:
    backgroundColor: "{colors.line-im-image}"
    textColor: "{colors.ink}"
    rounded: "{rounded.badge-lg}"
    padding: "4px"
    size: "44px"
  station-badge-inline:
    backgroundColor: "{colors.line-im-image}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate-inner-lg}"
    padding: "2.5px"
    height: "26px"
  line-chip:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 12px 0 6px"
    height: "34px"
  line-chip-on:
    backgroundColor: "{colors.sign-navy}"
    textColor: "{colors.sign-ink}"
  line-chip-on-night:
    backgroundColor: "{colors.sign-ink-night}"
    textColor: "{colors.sign-navy-night}"
  station-dot:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.pill}"
    size: "22px"
  station-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px 18px"
  search-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 44px 0 40px"
    height: "40px"
  search-field-night:
    backgroundColor: "{colors.sign-navy-raised-night}"
    textColor: "{colors.ink-night}"
  sign-control:
    backgroundColor: "{colors.sign-navy}"
    textColor: "{colors.sign-ink}"
    rounded: "{rounded.control}"
    padding: "0 9px"
    height: "38px"
  sign-control-hover:
    backgroundColor: "{colors.sign-navy-raised}"
  quiet-button:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "38px"
---

# Design System: OumaShu

## Overview

**Creative North Star: "The Station Board"**

OumaShu is drawn as a railway network posted on a Japanese station wall. Every category is a line with one saturated colour and a two-letter code; every tool is a numbered station (IM 03). Navy sign bands frame the page top and bottom, white plates carry the codes, and the map itself is the filter: searching or picking a line lights the stations that match and dims the rest. Wayfinding replaces the menu.

The system is dense but legible, like real signage: bold Overpass for names, Overpass Mono only for codes and numbers, Zen Kaku Gothic New for Japanese. Surfaces are flat white and pale platform grey with soft navy-tinted shadows; colour comes from the lines, never from gradients. At night the board is lit: deep navy ground, the lines glow, and the sign plates stay paper-white.

This world replaces the earlier sakura-gradient look entirely. Sakura (#e5608a) survives as the brand line and the Image line, not as a wash.

**Key Characteristics:**
- One colour per line, applied to badge frame, track, station ring, heading rule, chip code and card focus pulse.
- Station-number badges: coloured rounded-square frame around a white plate with dark bold code, identical in both themes.
- Navy sign bands (top bar, footer, active chip) bracket the white page.
- Overpass Mono is reserved for codes, times, counts and domains.
- The route map dims instead of hiding; the directory filters.
- Night mode is a lit board, not an inverted page.

## Colors

A white-and-navy signage palette carrying twelve saturated line colours, with sakura as the house line.

### Primary
- **Sign Navy** (sign-navy; night sign-navy-night): the sign band. Sticky top bar, footer, skip link and the active chip. Also the browser `theme-color`.
- **Sign Navy Raised** (sign-navy-raised): hover fill for top-bar controls; the search field ground at night.
- **Sign Ink / Sign Mute** (sign-ink, sign-mute): text on navy. Ink for names, time and footer headings; mute for location, weather and footer body.

### Secondary
- **Sakura** (sakura; night sakura-night): the OumaShu brand line (OS 00) and the Image line. Brand badge frame, 櫻滿集 in the top bar, the station-name sign's lower band, focus outline, caret, selection tint (32%).
- **Sakura Ink** (sakura-ink; night sakura-ink-night): sakura that holds text contrast on white: "Open" link on cards, fact icons, language check mark.

### Tertiary: the line palette
Each category owns exactly one colour and code, defined in `src/data/lines.ts` and passed to components as `--c`:
- **IM Image** (line-im-image), **VD Video** (line-vd-video), **AU Audio** (line-au-audio), **TX Text** (line-tx-text), **ED Education** (line-ed-education), **WS Workplace Slack** (line-ws-workplace-slack), **SR Search** (line-sr-search), **RS Resources** (line-rs-resources), **EN Entertainment** (line-en-entertainment), **SO Social** (line-so-social), **FT File Transfer** (line-ft-file-transfer), **GM Games** (line-gm-games; reserved, no stations shipped yet).
- Lines are ordered biggest-first (IM, VD, AU, TX, ED, WS, SR, RS, EN, SO, FT, GM). A line without metadata falls back to the File Transfer slate.
- Line colours are the same in light and dark themes.

### Neutral
- **Paper** (paper; night paper-night): page ground, sticky chip rail ground.
- **Platform Panel** (platform-panel; night platform-panel-night): the route-map band, screenshot wells, language-menu hover.
- **Card** (card; night card-night): cards, chips, station-dot centres, menus.
- **Ink** (ink; night ink-night): body text. Also the fixed dark text on every white plate in both themes.
- **Muted Slate** (muted-slate; night muted-slate-night): lead paragraph, descriptions, station codes, counts, Japanese sub-names.
- **Rule Grey** (rule-grey; night rule-grey-night): 1px borders, map band edges, dimmed track colour.

### Named Rules
**The One Line, One Colour Rule.** A line colour appears only on things that belong to that line: its badge frame, track, station rings, the 3px rule under its directory heading, its chip code frame, its card hover border (45% mixed into rule grey) and its arrive pulse. Sakura is the single shared value, worn by the house line and the Image line it leads.

**The White Plate Rule.** Codes always sit as Ink (#121826) on a white plate inside a coloured frame, in both themes. Badges, chip codes and the sign-band codes never invert.

**The Sign Band Rule.** Sign Navy is a band, not a fill: top bar, footer, active chip. Content panels stay paper, platform grey or card.

## Typography

**Display Font:** Overpass (with Zen Kaku Gothic New, Noto Sans SC, PingFang SC, Hiragino Sans, Segoe UI, system-ui)
**Body Font:** Overpass, same stack
**Japanese Font:** Zen Kaku Gothic New (with Hiragino Sans, Noto Sans JP)
**Label/Mono Font:** Overpass Mono (with ui-monospace, SFMono-Regular, Consolas), tabular numerals

**Character:** Overpass is a highway-signage face: heavy, open and quick to read at a glance. Zen Kaku Gothic New gives the Japanese names the weight of station kanji, and Overpass Mono turns codes into timetable numerals.

### Hierarchy
- **Display** (800, clamp(2.4rem, 1.4rem + 3.2vw, 4rem), 1.04, -0.03em, max 15ch, balanced): the one hero headline.
- **Display CJK** (Zen Kaku 900, clamp(2.1rem, 1.1rem + 2.6vw, 3.4rem), 1.2, +0.01em, max 13em): replaces Display when the UI is zh-CN, zh-TW or ja-JP.
- **Station Name** (Zen Kaku 900, 64px, 1.1, +0.14em; 52px at ≤1180px): kanji on the station-name sign, with a 17px/600 romanisation tracked at +0.32em beneath it.
- **Headline** (800, 26px, 1.1, -0.015em; 22px on phones): line headings in the directory, followed by the Japanese sub-name at 15px.
- **Title** (800, 17px, 1.25, -0.01em; 15.5px on phones): tool card names.
- **Lead** (400, 19px, 1.55, max 54ch; 17px on phones): hero sub-line, muted.
- **Body** (400, 14px, 1.5): card descriptions, clamped to two lines; footer text at 14px/1.65, max 62ch. The page base is 1.6.
- **Label** (600, 13.5px): chips. Line names on the map are 800/15px (13px on phones); station names 700/12.5px clamped to three lines.
- **Badge Code** (800, 12px, +0.02em; 15px in large badges, 10-11px in compact badges).
- **Mono** (Overpass Mono 500-600, 9-13px, tabular): station codes (10.5px; 9px on phones), counts, the clock, weather, domains, footer base line.

### Named Rules
**The Mono Is For Numbers Rule.** Overpass Mono sets only codes, times, temperatures, counts and domains. Names and sentences never use it.

**The Japanese Sub-name Rule.** Line names carry their Japanese name in Zen Kaku 500, muted, beside or under the local name. When the UI is Japanese, the sub-name is hidden because it would repeat, and Japanese text uses `word-break: auto-phrase` with strict line breaking.

## Layout

A centred 1320px container with 32px gutters (16px on phones). From the top: a sticky 64px navy sign band (brand badge, search capped at 560px, status, controls); a hero grid of headline left and the 400px station-name sign right, 56px apart; the full-width route map band on platform grey; a sticky chip rail directly under the sign band; then the directory, one section per line, 64px apart (44px on phones), with cards on an auto-fill grid of minmax(292px, 1fr) and 22px gaps (12px on phones).

**The route map.** Lines sit in two columns 48px apart. A line with more than three stations spans both columns as a full-width track. Each line row is a 192px label column (170px at ≤960px) plus a track whose stations share equal columns, capped at 150px per station so short lines stay short. On a 1440px screen the eleven lines fit in about half the height.

**Responsive rules.**
- ≤1180px: the station-name sign narrows to 340px and its kanji to 52px.
- ≤960px: the hero stacks (sign up to 400px wide), the map drops to one column, the search pushes right.
- ≤760px: the sign band stops sticking and wraps (brand and controls, then full-width search, then status at 12px). The station-name sign is removed. The map becomes a **compact phone network**: two columns, 14px apart, every line half-width, badges shrink to 26px, Japanese sub-names and station names drop out, and stations become 16px dots with 9px mono codes, capped at 46px each. Dimming still applies. The chip rail sticks to the top of the viewport. Cards turn horizontal: screenshot 38% wide (max 168px, min 112px tall) beside the body.
- The **chip rail** is a single row at every width: it scrolls sideways with no visible scrollbar and fades out over its last 56px.
- Scroll padding is 132px (72px on phones) so anchored sections clear the sticky bars.

## Elevation & Depth

Mostly flat, lifted slightly with soft shadows tinted with navy. Depth comes from tonal bands first (navy band, platform-grey map, white cards) and from two shadow steps second. Shadows answer to state: cards sit on `card` and rise to `lift` on hover.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px rgba(20,34,63,.06), 0 6px 18px -8px rgba(20,34,63,.18)`; night `0 1px 2px rgba(0,0,0,.4), 0 8px 22px -10px rgba(0,0,0,.6)`): resting cards and the station-name sign.
- **Lift** (`box-shadow: 0 2px 4px rgba(20,34,63,.08), 0 18px 36px -14px rgba(20,34,63,.32)`; night `0 2px 6px rgba(0,0,0,.45), 0 22px 40px -16px rgba(0,0,0,.75)`): hovered cards, the language menu.
- **Focus halo** (`box-shadow: 0 0 0 3px` sakura at 35%): the search field while focused.
- **Line glow, night only** (track `0 0 12px -1px` line colour at 75%; dot `0 0 10px -1px` at 80%): the lit-board glow. Removed from dimmed lines and stations.

### Named Rules
**The Lit Board Rule.** In dark mode the page is a lit sign, not an inverted one. The ground goes deep navy (paper-night). Tracks and station rings glow in their line colour, station dots get a navy centre and station names go pure white. The station-name sign stays a paper plate (#f4f6fa) with a soft sakura halo. The active chip inverts to a white plate with navy text. Screenshots dim to `brightness(.78) saturate(.9)` and come back to full on hover. Sakura band text turns dark (#1a0d14).

## Shapes

Rounded squares for signs, circles for stations, pills for chips. Badge frames are 8px (10px large) around a 5px (6px) inner plate. Controls and the search field are 8px, cards and the station-name sign 12px (cards 10px on phones), chips and tags full pills. Tracks are 6px bars with 3px ends (4px on phones). Station dots are 22px rings with a 4.5px line-coloured border (16px with a 3.5px border on phones). Borders are 1px rule grey. The only heavy stroke is the 3px line-colour rule under each directory heading. Icons are inline SVG with a 1.8px round-capped stroke (2.2-2.4px for small emphasis), never filled.

## Components

### Station Badge (signature)
The core sign element. It frames a line or tool code.
- **Shape:** a coloured rounded square (34px, 8px radius, 3px frame) holding a white plate (5px radius) with an 800-weight 12px code in Ink. **Large** is 44px with a 10px radius, 4px frame and 15px code, used for directory headings and the sign. **Inline** (on cards) is 26px tall, auto-width, with a 2.5px frame and an 11px code like "IM 03". **Compact** (phone map) is 26px with a 2px frame and a 10px code.
- **Colour:** the frame takes the line colour, or sakura for the OS house badge. The plate and text never change with the theme.

### Route Map Track and Station
- **Track:** a 6px line-coloured bar at the station-dot centre, running from the first station to the middle of the last. It draws in left to right on load (clip-path, 1.1s, cubic-bezier(.16,1,.3,1), staggered 60ms per line after 120ms). Only when motion is allowed.
- **Station:** a ring dot, with a 12.5px/700 name below it and a muted mono code under that. **Hover, focus, or hovering its card:** the dot scales to 1.3 and fills solid with the line colour (260ms). **Dimmed (no match):** opacity .3 with a slate ring. A line with no lit stations greys its track to rule grey and its label to .4.
- **Line label:** a button holding the badge plus the name (800/15px) and Japanese sub-name. Hover and pressed state is set by `aria-pressed`. Pressing filters the directory to that line and scrolls there.
- **Click a station:** scrolls its card to centre, focuses it and plays the arrive pulse.

### Chips (line filter rail)
- **Style:** 34px pill, 1px rule-grey border, card ground, 600/13.5px label. Each chip holds a mono code plate (2px line-coloured frame, white plate, Ink), the line name and a muted mono count. "All lines" has no code plate.
- **Hover:** the border takes the line colour.
- **On:** sign-navy fill and border with sign-ink text, and the count at .7. At night it inverts to a sign-ink plate with navy text. One chip is on at a time; pressing an active line chip returns to all.

### Cards (station cards)
- **Corner Style:** 12px (10px on phones).
- **Background:** card. A 16:10 screenshot well (platform grey) is cropped from the top. A tool without a screenshot gets a typographic plate: its name in Zen Kaku 900 at 30px, coloured with the line colour mixed 70% into ink, on the line colour at 14% over platform grey.
- **Shadow Strategy:** Card at rest, Lift on hover (see Elevation).
- **Border:** 1px rule grey. On hover it takes the line colour at 45%.
- **Internal Padding:** 16px 18px (12px 14px on phones).
- **Content:** inline badge plus title, a two-line muted description, then a meta row with the mono domain (ellipsis), an optional third-party pill tag, and a sakura-ink "Open" label with an arrow.
- **Hover:** rises 3px (420ms), the screenshot scales to 1.035 (700ms), the arrow nudges 2px up and right. No rise on phones.
- **Arrive:** after a station click, a 5px line-coloured ring blooms and fades over 1.6s, settling back to Card.

### Inputs / Fields
- **Search:** 40px high, 8px radius, white field with Ink text (500/15px), an 18px stroke icon at left and a `/` key hint at right that hides on focus. The `/` key focuses the field from anywhere, and Esc clears it.
- **Focus:** the border turns sakura with a 3px sakura halo at 35%.
- **Night:** sign-navy-raised ground, a 12% sign-ink border, and sign-mute placeholder and icon.

### Navigation
- **Sign band:** sticky navy top bar with the brand (OS badge, OumaShu at 800/19px, 櫻滿集 in sakura), status in sign-mute with the clock in mono sign-ink, and 38px transparent icon controls that fill sign-navy-raised on hover. The language menu is a card with the Lift shadow, a 10px radius and a sakura-ink check on the current locale.
- **Station-name sign (home hero):** a white sign with the large OS 00 badge, the kanji name and the romanisation. Its sakura lower band links ← to the first line and → to the last, each with a code plate.
- **Footer (terminus):** a 6px stripe of every line colour in map order over a navy footer.
- **Global focus:** a 2px sakura outline at 3px offset with a 4px radius.

## Do's and Don'ts

### Do:
- **Do** give every new category a code, one colour from the line palette and a Japanese name in `src/data/lines.ts`, and drive its UI through `--c`.
- **Do** put codes on white plates with Ink text inside a coloured frame, in both themes.
- **Do** keep Overpass Mono for codes, times, counts and domains only, with tabular numerals.
- **Do** dim map stations (.3) and lines (.4, grey track) instead of removing them; hide only directory cards.
- **Do** guard decorative motion with `prefers-reduced-motion` and use the house ease `cubic-bezier(.16, 1, .3, 1)` (200ms for state changes).
- **Do** make dark mode a lit board: glowing line colours, white sign plates, dimmed screenshots that brighten on hover.
- **Do** draw icons as inline SVG with a 1.8px round stroke.

### Don't:
- **Don't** bring back sakura gradients, the leaf-green accent or animated gradient fills; this world replaced them.
- **Don't** use line colours for running text or fills behind text; they are frames, tracks and rings.
- **Don't** give two categories the same line colour (sakura's shared use by the house line and Image is the only exception).
- **Don't** put Sign Navy behind content panels; it is reserved for bands and the active chip.
- **Don't** set small white text on sakura (#e5608a gives 3.3:1); use sakura-ink or dark text instead.
- **Don't** use emoji or icon-font glyphs for icons.
