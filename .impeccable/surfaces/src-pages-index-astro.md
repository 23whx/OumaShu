---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/layouts/Base.astro"]
---

# Home — tool directory

Scope: `src/pages/index.astro` and the shared shell in `src/layouts/Base.astro`; category pages inherit the tokens.
Visitor mode: Operate. A search visitor finds the right free tool and opens it; a browser wanders the lines.
Proof/content: 27 real tools, real site screenshots in `public/shots/<tool-id>.webp` (efortunetell has none; it gets a typographic card).
Constraints: 6 locales (client-side switch, LTR kept), location/time/weather widget, light/dark/system theme without flash, AdSense auto-ads script, client search.

## Direction contract

THESIS: OumaShu is a railway network. Each category is a coloured line with a two-letter code, each tool a numbered station (IM 03). It refuses the default directory sidebar and grid of emoji rows: wayfinding replaces the menu.

OWN-WORLD: Japanese station wayfinding, set in ink and vermilion. The header is light: a translucent white band with blur, a hairline rule, a 朱印 seal (櫻) and 櫻滿集 in Mincho. Location, time and weather sit in a mono pill. One saturated colour per line, with each line's colour used only in the map, the badges and the chips. 朱 #c8372d is the brand and accent; sakura #e5608a is only the Image line. The station-number badge is a rounded square with a coloured frame. Overpass for Latin, Zen Kaku Gothic New for Japanese, Shippori Mincho for the seal and the brand name, Overpass Mono only for codes, times and domains. Night mode is a lit board on ink #0c0c0d. (Revised 2026-10-12 at the user's request: the navy #14223f sign band read as dated and corporate; variant C was chosen over A/B in a side-by-side comparison.)

STORY: The visitor sees the network, reads it in seconds, and either types a need into the search or rides a line. Every tool shows its real screen before they click. They leave knowing it is free and has no sign-up.

FIRST VIEWPORT: The light glass header holds the 朱印 seal and 櫻滿集 lockup, a wide search (/ to focus), the location, time and weather, and the language and theme controls. Below it, the headline runs left and 櫻滿集 sits right. Then the route map fills the width. Lines with more than three stations get their own full-width track; shorter lines pair up in two columns, so the lines fit in about half the height and the network stays inside the first scroll. On phones (≤760px) the map is a compact two-column network of dots and station codes, without names, and it keeps the same dimming. The sign's bottom band holds ← | → links to the first and last lines. Searching dims the stations that don't match; clicking a station rides down to its card.

FORM: Station wayfinding / line map. My first-ranked candidate (the user's pick over roll #6, ekiben). Seed key 344a515b.

Signature interaction: the live route map is the filter. Search and line selection light or dim the stations; hovering a card lights its station.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
