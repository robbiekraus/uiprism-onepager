# UIPrism OnePager

Public one-pager, pitch deck and brand guide for **UIPrism** — built for the
Vibe Coding Bootcamp Finaler Check-In.

- `index.html` + `assets/` — the product page (deployed to https://uiprism.netlify.app). Static HTML/CSS, English, no third-party requests: fonts (IBM Plex, `assets/fonts/`), video (`assets/video/`, captions in `uiprism-walkthrough.en.vtt`), logo (`assets/brand/`).
- `legal.html` — Imprint and privacy policy (EN translation + authoritative DE). Update whenever the site or the prototype changes what data it processes.
- `deck.html` — the pitch deck **„Bauen im Blindflug"**, 12 slides
  (https://uiprism.netlify.app/deck.html).
  Claude-Design component (`.dc.html` format): `support.js` bootstraps React/Babel from unpkg,
  `deck-stage.js` provides the `<deck-stage>` element, `image-slot.js` the image placeholders.
  Slides are `<section>` siblings; speaker notes live in `data-speaker-notes`.
  The trailing `<script type="text/x-dc">` is the `DCLogic` component — it drives the
  delayed video start on the „Das Produkt" slide and the `<sc-if>` fullscreen video overlay.
  Assets: `icon-blindflug-v3.svg`, `icon-tempolimit-v3.svg`,
  `firefly_viel-weniger-notiztettel-fliegen-ms4txfhb-skch.png`,
  `robbie-portrait-ms4seq60-o2qd.jpg`, `uploads/UIPrism_Ablauf_720p.mp4`,
  plus `Brand/UIPrism-Logos/svg/UIPrism-Logo-Primary.svg` on the „Start" slide.
  Re-sync source: Claude Design project `0df23378-36bf-47de-a4e9-a38367614abb`,
  file `Bauen im Blindflug.dc.html`.
- `deck-lowfi.html` — previous low-fi deck, the version that was live until 28.07.2026
- `deck-lowfi-wip.html` — unfinished rework of the low-fi deck (local WIP, 27.07.2026)
- `brand-guide.md`, `design-tokens.css`, `Brand/` — brand guide & logo assets
- `Screenshots/` — app screenshots used in the low-fi deck

Deployed via Netlify, continuous deployment from the `main` branch.
