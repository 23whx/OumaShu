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

OWN-WORLD: Japanese station signage. Navy sign bands (#14223f) over white panels, one saturated colour per line, OumaShu sakura line #e5608a as brand. Station-number badges are rounded squares with a coloured frame and a bold code. Overpass (highway signage face) for Latin, Zen Kaku Gothic New for Japanese, Overpass Mono only for codes, times and domains. Night mode is a lit board on deep navy.

STORY: The visitor sees the network, reads it in seconds, and either types a need into the search or rides a line. Every tool shows its real screen before they click. They leave knowing it is free and has no sign-up.

FIRST VIEWPORT: The navy top band holds the logo badge, a wide search (/ to focus), the location, time and weather, and the language and theme controls. Below it, the headline runs left and 櫻滿集 sits right. Then the route map fills the width. Lines with more than three stations get their own full-width track; shorter lines pair up in two columns, so the eleven lines fit in about half the height and the network stays inside the first scroll. On phones (≤760px) the map is a compact two-column network of dots and station codes, without names, and it keeps the same dimming. The sign's bottom band holds ← | → links to the first and last lines. Searching dims the stations that don't match; clicking a station rides down to its card.

FORM: Station wayfinding / line map. My first-ranked candidate (the user's pick over roll #6, ekiben). Seed key 344a515b.

Signature interaction: the live route map is the filter. Search and line selection light or dim the stations; hovering a card lights its station.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
