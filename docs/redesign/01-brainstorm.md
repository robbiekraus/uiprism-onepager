# UIPrism Website: Research & Brainstorm (Gate 1)

Stand: 06.10.2026 · Zweck: Rob wählt 3 Dinge (Abschnitt 8), danach läuft die Umsetzung ohne ihn durch.

## 1. Vorgaben (von Rob, verbindlich)

- Seite komplett **Englisch**.
- Ton und Layout **seriös**: UIPrism ist eine technische Pipeline, die Abläufe real beschleunigt. Kein Spielplatz für Designer.
- **Ehrlicher Status:** Gestartet als Bootcamp-Prototyp, mit anderen Designern getestet, wird nicht durchgängig genutzt. Rob entwickelt die **Beta** weiter. Keine Nutzer-Claims.
- Das Design-System der Homepage (robert-kraus.com) gilt **nicht** für UIPrism. Von dort kommen nur Inhalte und Assets (Case Study, Poster, Grafik).
- Impressum und Datenschutz müssen **dringend** korrigiert und veröffentlicht werden.

## 2. Diagnose Ist-Stand (uiprism.netlify.app)

| Befund | Beleg |
|---|---|
| Hero hat ~110 Wörter Fließtext vor Video und Produkt | Live-Scrape 06.10. |
| Dieselbe Aussage ("Repo als Single Source of Truth, Export nach Figma") steht 3x: Hero, "Die Lösung", Schritt 02 | dito |
| "Das Problem" ist ein Absatz ohne konkrete Schmerzen | dito |
| Reihenfolge ohne Spannungsbogen: Produkt, Video, Screens, Ablauf, Stack, Team | dito |
| Screenshots tragen erfundene URLs (`app.uiprism.dev`, `figma.com/file/uiprism-sync`) | dito |
| Seite ist Deutsch, Case Study auf der Homepage Englisch | dito |
| Eine Seite aus gebündeltem HTML (560 KB `index.html`, React per CDN) | Repo |

## 3. Quellmaterial (Homepage-Repo `robert-kraus-website`, `v3/`)

- Case Study `case-studies/uiprism.html`: ~300 Wörter, saubere Struktur Starting point, Approach, Result. Nennt einen echten Anlass (Baukostenmanagement-Plattform ohne Design-System).
- Assets: `assets/video/uiprism-ablauf-poster.jpg` (neuer Startscreen), `assets/video/uiprism-ablauf-720p.mp4`, `assets/images/illustrations/ill-prism.webp` (neue Grafik), 7 Screens in `assets/images/case-uiprism/`.

### Eignung der neuen Assets (ehrliche Einschätzung)

| Asset | Problem für "seriös" | Empfehlung |
|---|---|---|
| **Poster** | Deutsche App-UI und deutsche Untertitel. Links ein angeschnittenes Finder-Fenster auf violettem Desktop, sichtbarer privater Dateiname ("Bildschirmfoto … 17.48.06", "Neuer Ordner"). Das Modal verdeckt den Hero-Text der App. | Übernehmen, aber neu aufnehmen: App im englischen UI, nur App-Fenster, kein Desktop, englische Untertitel. Der Moment (Import-Dialog mit Drop-Zone) ist richtig gewählt. |
| **ill-prism.webp** | Bunter Regenbogen-Prisma-Körper im 3D-Look, wirkt wie ein Album-Cover, nicht wie Infrastruktur. Widerspricht auch der eigenen Brand-Regel "Spektrum nur sparsam". | Als kleines Motiv oder als Herkunft des Logos nutzen, nicht als Hero. Hero wird ein Pipeline-Diagramm (Abschnitt 4). |
| **Screens (7)** | Echte App-Screens, gut. | Behalten. Erfundene Browser-URLs in den Rahmen entfernen. |

## 4. Story-Linie: drei Varianten

Gemeinsam: lineare Geschichte, eine Aussage pro Abschnitt, kein Intro-Fließtext. Hero höchstens 25 Wörter.

### A) "Pipeline" (Empfehlung)
Der Besucher versteht das System, bevor er es bewertet.

1. **Hero:** Ein Satz Nutzen, ein Diagramm *Input → Abgleich → Output*, ein CTA.
2. **Problem** (der Pain-Point-Block, siehe unten).
3. **Pipeline:** die 3 Stufen, jede mit echtem Screen.
4. **Proof:** Walkthrough-Video (2 Min.).
5. **Case Study:** der Baukosten-Anlass, 1 Absatz, Link zur vollen Fassung.
6. **Status & Beta:** was heute geht, was Preview ist, was kommt.
7. **CTA & Autor.**

### B) "Drift"
Beginnt mit den Kosten, wenn Design und Code auseinanderlaufen. Emotionaler, aber schwerer ohne belastbare Zahlen. Wir haben keine, und erfinden wollen wir keine.

### C) "Walkthrough zuerst"
Video im Hero, Text nur als Untertitel zum Gesehenen. Schnell, aber das Video muss dann makellos sein, und ohne Ton bleibt die Seite wortarm. Erst nach neuem Poster und Re-Recording tragfähig.

### Pain Points (Entwurf, nur belegbar Formuliertes)
- Wireframes, Screenshots und URLs kommen in jeder Form. Jemand übersetzt sie von Hand in Komponenten.
- Dieselben Elemente werden mehrfach nachgebaut, jedes Mal ein bisschen anders.
- Design und Repository laufen auseinander, ohne dass es jemand bemerkt, bis es teuer wird.
- Zeit, die für konzeptionelle Arbeit fehlt, geht in Übersetzung.

### Entwurf Hero (EN, ohne Hype, ohne Gedankenstriche)
> **Turn any UI source into design-system components.**
> UIPrism reads screenshots, URLs and wireframes, checks every element against your code repository, and writes structured components to Figma and Storybook.
> *Beta · [Open the prototype] · [Watch the walkthrough]*

### Status-Block (EN, ehrlich)
> UIPrism is in beta. It started as a bootcamp prototype and has been tested with other designers, but it is not in continuous use yet. Image import and the Figma plugin work. URL and repository import are in preview.

## 5. Branding (eigenständig, nicht Homepage)

Ist: Prisma-Mark mit 5-Farben-Spektrum, Inter, Indigo `#6366F1`, Slogan "Map your UI, automatically." (Brand-Mini-Guide, Richtung "Clarity").
Rob nennt Logo und Schrift einen Schnellschuss. Meine Einschätzung: Das Konzept (Prisma zerlegt Licht in ein Spektrum, UI wird in ein System zerlegt) trägt. Die Ausführung ist zu dekorativ.

### Logo
| Option | Beschreibung | Urteil |
|---|---|---|
| L1 Reduktion (Empfehlung) | Gleiche Idee, geometrisch verschärft: einfarbiges Prisma, ein Strahl, 3 bis 5 saubere Linien in Indigo-Abstufungen. Das volle Spektrum nur in einem einzigen Diagramm. | Seriös, skaliert bis Favicon |
| L2 Nur Wortmarke | "UIPrism" ohne Symbol, "UI" und "Prism" in zwei Gewichten | Sehr ruhig, verliert die Idee |
| L3 Bestehend behalten | nur sauber nachzeichnen | Schnellster Weg, löst die Kritik nicht |

### Schrift
| Option | Charakter |
|---|---|
| T1 IBM Plex Sans + Plex Mono (Empfehlung) | Technisch, nüchtern, Mono passt zu Pipeline-Labels und Code |
| T2 Inter + JetBrains Mono | Neutral, heutiger Standard, wenig Eigenständigkeit |
| T3 Geist + Geist Mono | Modern, "Dev-Tool"-Look, näher an Vercel-Ästhetik |

Alle self-hosted (kein Google-Fonts-Aufruf, siehe Rechtliches).

### Layout-Prinzipien
- Raster, Haarlinien, viel Weißraum, Diagramme statt Illustrationen.
- Echte Produkt-Screens als Beweis, keine Maskottchen, keine Verlaufsflächen.
- Mono-Schrift für Pipeline-Beschriftungen.
- Ein dunkler Abschnitt (Pipeline) als Kontrast, sonst hell.

## 6. Referenzen (Recherche)

- **Knapsack** (knapsack.cloud): Headline als klares Problem ("Your AI has no idea what good looks like."), danach Prinzipien und nummerierte Schritte *Collect, Connect, Evaluate*. Gut: Problem vor Lösung, Prozess als Treppe. Zu übernehmen: Struktur. Nicht: Logo-Wand (wir haben keine Kunden).
- **Supernova** (supernova.io): "One platform. Four jobs.", Integrationsleiste (Figma, Storybook, GitHub), Kundenstorys als Beweis. Zu übernehmen: Integrations-Reihe als Vertrauenssignal der Technik. Nicht: Zitate, wir haben keine.
- **Chromatic / Storybook-Umfeld:** Ein einziger konkreter Nutzen ("did this change break the UI?"). Zu übernehmen: eine Frage als Kern.
- Noch offen (nächster Schritt, wenn gewünscht): Linear, Stripe Docs, Vercel für Typografie und Diagrammstil.

## 7. Rechtliches: sofort zu erledigen (unabhängig vom Redesign)

Die Seite `uiprism.netlify.app/legal.html` existiert (HTTP 200), ist aber fehlerhaft:

| # | Befund | Fix |
|---|---|---|
| 1 | `[Steuernummer hier eintragen]` steht live als Platzhalter | Echte Angaben aus dem aktuellen Impressum der Homepage übernehmen |
| 2 | Nennt **TMG** und **RStV**, die seit 2024 durch **DDG** und **MStV** ersetzt sind | Paragrafen aktualisieren (Vorlage: Homepage `v3/legal.html`) |
| 3 | Behauptet Google-Fonts-Nutzung, die Seite lädt aber keine | Absatz streichen |
| 4 | Verschweigt `unpkg.com` (React-CDN): jeder Aufruf überträgt die IP an Dritte | Entweder React self-hosten (empfohlen, löst es sauber) oder in der Erklärung nennen |
| 5 | Nennt die App nur als "Link". Die App verarbeitet aber hochgeladene Screenshots und sendet sie an die **Anthropic-API** (Claude Vision), gehostet auf **Railway** | Eigener Abschnitt: Zweck, Empfänger, Drittlandübermittlung, Speicherdauer |
| 6 | Seite meldet "Stand: September 2026", Nachträge fehlen | Datum nach Korrektur setzen |
| 7 | Deutsch only, Seite wird Englisch | Englische Fassung als Übersetzung, deutsche bleibt verbindlich (wie auf der Homepage) |

**Wichtig:** Ich liefere einen Entwurf, aber keine Rechtsberatung. Vor Veröffentlichung sollte Rob insbesondere Punkt 5 (Datenfluss zu Anthropic/Railway, Speicherdauer) gegenprüfen oder prüfen lassen.

## 8. Entscheidungen für Gate 1 (Rob, ca. 5 Min.)

1. **Story:** A "Pipeline" (empfohlen), B oder C?
2. **Logo:** L1 Reduktion (empfohlen), L2 oder L3?
3. **Schrift:** T1 Plex (empfohlen), T2 oder T3?

Alles andere entscheide ich nach den Empfehlungen oben. Antwort "alles wie empfohlen" reicht.

## 9. Ablauf nach Gate 1

| Schritt | Inhalt | Modell |
|---|---|---|
| 1 | Rechtstexte korrigieren und veröffentlichen (kann sofort parallel zu 2 laufen) | Sonnet, Entwurf prüft Opus |
| 2 | Texte final (EN), Wortbudget pro Abschnitt | Opus |
| 3 | Logo L1 als SVG, Favicon, App-Icon | Opus (Entscheidung), Sonnet (Exporte) |
| 4 | Neue Seite als statisches HTML ohne Fremd-CDN, Assets eingebaut | Sonnet |
| 5 | Visueller Check im Browser (Desktop + Mobil), Kontrast, Lighthouse | Sonnet, Review Opus |
| 6 | Gate 2: Rob nimmt ab, dann Merge nach `main` (Netlify deployt automatisch) | Rob |

Rob muss neu aufnehmen oder liefern: das **englische Walkthrough-Video** (Abschnitt 3).
