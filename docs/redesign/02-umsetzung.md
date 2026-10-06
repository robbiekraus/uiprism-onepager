# Umsetzung Website-Relaunch (Stand 06.10.2026)

Entscheidungen Rob (06.10.): Story A "Pipeline", Logo L1 (Reduktion), Schrift IBM Plex, Seite komplett Englisch, Video mit englischen Untertiteln (minimaler Aufwand, Neuaufnahme später), Steuernummer aus dem Impressum der Homepage, Status ehrlich: Beta, mit anderen Designern getestet, nicht durchgängig genutzt.

## Was gebaut ist

- `index.html` + `assets/styles.css`: statische Seite, Englisch, keine Drittanbieter-Anfragen (im Browser geprüft: 0 externe Requests, kein horizontaler Überlauf bei 390 und 1440 px, keine Konsolenfehler).
- Aufbau: Hero, Problem (3 Schmerzpunkte + Anlass), Pipeline (dunkel, 3 Stufen), Walkthrough (Video + Token-Screen), Status (verfügbar / Preview / geplant), Autor, Footer.
- `legal.html`: Impressum und Datenschutz, EN als Übersetzung, DE verbindlich.
- Video: `assets/video/uiprism-walkthrough.mp4` ist das Original ohne die untere Zeile (608 statt 720 px Höhe), weil dort die deutschen Untertitel eingebrannt waren. Englische Untertitel liegen als echte Datei daneben (`.en.vtt`, 24 Cues). Beim Neuaufnehmen nur Video, Poster und VTT tauschen.
- Poster: Bild bei 8,0 s (Import-Dialog), aus dem bereinigten Video.
- Logo: `assets/brand/` (Marke, dunkle Variante, Favicon, Apple-Touch-Icon, 512 px).
- `netlify.toml`: `/docs/*`, `*.md` und `/Screenshots/*` liefern 404, damit interne Notizen nicht öffentlich sind. Vorher war das ganze Repo öffentlich (CLAUDE.md, RESUME.md usw.).

## Inhaltlich korrigiert gegenüber Case-Study-Text (bitte bestätigen)

Die Case Study sagt "cross-references every element with the connected repository". Das ist heute **nicht** das, was die App tut. Stand laut Produkt-Repo: Komponenten werden gegen den **shadcn/ui-Katalog** aufgelöst. Repo-Import steht im UI noch auf "Preview", "eigenes Repo als Katalog" ist Richtung, nicht gebaut. Die Seite sagt deshalb: heute shadcn/ui, eigenes Repo als nächster Schritt, unter "Planned" gelistet.

## Rechtliches: bitte vor Veröffentlichung gegenlesen

1. **KI-Anbieter ist Gemini, nicht Anthropic.** `GET /api/health` auf Prod meldet `ai_provider: gemini`. Der Text nennt Google/Gemini und das kostenlose Kontingent (laut Gemini-Spec). Falls der Key inzwischen ein bezahlter ist, ändert sich der Satz zur Nutzung durch Google.
2. **Aussage zu Googles Bedingungen** (Inhalte im kostenlosen Kontingent dürfen zur Produktverbesserung genutzt und von Menschen geprüft werden) ist nach meinem Kenntnisstand korrekt, aber nicht live nachgeprüft.
3. **Netlify:** Speicherdauer der Logs steht bewusst nicht drin (unbekannt). Drittlandübermittlung: DPF oder Standardvertragsklauseln, nicht verifiziert.
4. **Railway-Entität und Adresse** nicht genannt (nicht verifiziert).
5. **Die App lädt Google Fonts (Inter)** (`web/index.html` im Produkt-Repo). Das steht im Prototyp-Abschnitt. Sauberer: Inter dort self-hosten, dann entfällt der Absatz. Nicht angefasst (anderes Repo).
6. **`deck.html` lädt Google Fonts und unpkg.com.** Steht ebenfalls in der Erklärung. Alternative: Deck offline nehmen oder self-hosten.
7. **Bildrechte-Satz** (KI-gestützte Abbildungen, Art. 50 KI-VO) ist von der Homepage übernommen. Falls die Prisma-Grafik nicht KI-erstellt ist, kann der Satz entfallen oder präzisiert werden.
8. Kontakt auf der Seite ist `hello@robert-kraus.com` (im Impressum belegt). Die alte Adresse `kontakt@uiprism.dev` ist entfallen, weil unklar ist, ob das Postfach existiert.

## Inhaltlich noch offen

- **Statusaussagen** beruhen auf dem Produkt-Repo (Stand 28.07.) und dem Health-Check von heute. Bitte kurz gegenprüfen: Storybook-Export, Figma-Export per Plugin, "Full-page layouts are still being refined".
- **Video:** App-UI im Video bleibt Deutsch (Hinweis steht unter dem Player).
- Die 3 Hero-Aussagen und der Pipeline-Text sind knapp gehalten. Zahlen und Nutzer-Claims gibt es bewusst nicht.
- Logo: die Marke ist ein Vorschlag (Kontur-Prisma). Wortmarke ist Live-Text, kein Outline-SVG.

## Runde 2 (06.10., Rückmeldung Rob)

- **Logo:** App-Icon statt freier Marke: schwarzes Quadrat mit Rundung, Prisma mit Strahlen. Vier Varianten (Schwarz-Blau, Schwarz-Weiß, hell, Indigo-Farbicon), Favicon und Apple-Touch daraus.
- **Problem-Text** neu geschrieben nach UX-Copy-Skill. Material: Positionierungsdokument (`designbridge/docs/2026-07-14-naming-positionierung.md`: "Einbahnstraße", Lücke Quelle -> Library -> Figma UND Code), Pitch-Deck Folie "Der Fall" (Wildwuchs, Anforderungen ohne Design ins Development) und der Anlass aus der Case Study. Keine Zwischenüberschriften, die die Hauptüberschrift wiederholen. Der Satz "Few keep both sides on the same components" ist bewusst weich formuliert, weil die Wettbewerbsrecherche vom 14.07. stammt und nicht neu geprüft wurde.
- **Video-Startscreen** wie auf der Homepage: Titel, Play-Knopf, Prisma-Grafik, blendet beim Start aus (`assets/site.js`).
- **Screens:** sechs große Bilder statt eines kleinen, in vier Reihen (Tokens, Komponenten, Figma, Storybook), jedes mit Vorschau-Popup nach dem Schema der Homepage (Klick, Esc, Schließen-Knopf, Fokus kehrt zurück). Quellen: zwei App-Screenshots, vier Standbilder aus dem Walkthrough (Figma, Storybook). Die Standbilder sind 1280 px breit, das ist die Auflösung des Videos. Bessere Auflösung nur mit neuen Screenshots.
- **About:** kleines rundes Porträt (56 px) neben der Überschrift. Auf der neuen Seite gab es vorher keins. Wenn gar keins gewünscht ist: Zeile mit `class="who"` in `index.html` auf die Überschrift reduzieren.
