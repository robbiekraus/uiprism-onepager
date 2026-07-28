# UIPrism OnePager

Public one-pager, pitch deck and brand guide for **UIPrism** — built for the
Vibe Coding Bootcamp Finaler Check-In.

- `index.html` — the one-pager (deployed to https://uiprism.netlify.app)
- `deck.html` — the pitch deck **„Bauen im Blindflug"** (https://uiprism.netlify.app/deck.html).
  Claude-Design component (`.dc.html` format): `support.js` bootstraps React/Babel from unpkg,
  `deck-stage.js` provides the `<deck-stage>` element, `image-slot.js` the image placeholders.
  Slides are `<section>` siblings; speaker notes live in `data-speaker-notes`.
  Assets: `icon-blindflug-v3.svg`, `icon-tempolimit-v3.svg`,
  `firefly_viel-weniger-notiztettel-fliegen-ms4txfhb-skch.png`,
  `robbie-portrait-ms4seq60-o2qd.jpg`, `uploads/UIPrism_Ablauf_720p.mp4`
- `deck-lowfi.html` — previous low-fi deck, the version that was live until 28.07.2026
- `deck-lowfi-wip.html` — unfinished rework of the low-fi deck (local WIP, 27.07.2026)
- `brand-guide.md`, `design-tokens.css`, `Brand/` — brand guide & logo assets
- `Screenshots/` — app screenshots used in the low-fi deck

Deployed via Netlify, continuous deployment from the `main` branch.
