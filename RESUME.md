# UIPrism-Deck — Schnellstart-Spickzettel

Stand: 27.07.2026, spätabends. Session wurde hier bewusst gestoppt. Beim Wiedereinstieg:
zuerst dieses File lesen, dann `CLAUDE.md` (Arbeitsregeln!), dann bei Bedarf die verlinkten
Detail-Dateien.

## Die drei Baustellen — wo was liegt

1. **HTML-Deck (Original, git-getrackt):** `Projekte/uiprism-onepager/deck.html`
   Live: https://uiprism.netlify.app/deck.html · Repo: eigenes Git-Repo in diesem Ordner.
2. **Figma-Slides-Neubau (NEU, 27.07., parallel zum HTML-Deck):**
   https://www.figma.com/slides/rFCtzk8JTtZLliz1vEayJR — „UIPrism — Pitch Deck"
3. **Vollständiges Content-/Stil-Briefing für den Figma-Bau:**
   `Projekte/uiprism-pitchdeck-figma/PITCHDECK-BRIEFING.md` (alle 13 Slide-Texte, der
   abgenommene Katamari-Illustrationsstil, offene Entscheidungen)

**Wichtig: zwei Decks laufen bewusst nebeneinander.** Rob hat sich am 27.07. für
„zweigleisig" entschieden — Figma-Slides-Track (dieser Chat) + parallel evtl. Claude Design
(Robs eigene, unabhängige Aktion, nicht von mir begleitet). Nicht eines für obsolet halten,
bis Rob das sagt.

## Ist-Stand Figma-Slides-Deck (27.07., alle 13 Slides angelegt)

Datei-Key: `rFCtzk8JTtZLliz1vEayJR`. Struktur folgt den Kicker-Sektionen des HTML-Decks als
eigene benannte Slide-Grid-Zeilen (Intro · 01 Ausgangslage · 02 Der Auslöser · 03 Die
Reaktion · 04 Die Idee · 05 Hypothese & Ergebnis · 06 Die Journey · 07 Bauen mit KI · 08
Vision & Next Steps · Q&A).

**Solide, nicht mehr anfassen nötig:** Titel (Slide 1, Wortmarke zweifarbig „UI"+„Prism"),
Vorstellung (2), Post-its-Dashboard (3), Prisma-Illustration (7), Terminal+Verbotsschild
(9), Divergenz-Trichter-These (11, dark), Q&A (13).

**Grob/verbesserungswürdig, aber funktional:**
- Katamari-Ball (4): Gesicht ohne Blush/Brauen, Tempolinien schweben unmotiviert im Leerraum.
- Figur allgemein (4/6/10/12): sehr reduziert (Kreis-Kopf, Rechteck-Körper, Strich-Beine),
  kein Charakter-Feinschliff wie in der HTML-Katamari-Animation.
- Blindflug (10): Tastatur-Sichtbarkeit prüfen, Beine wirken kurz/dünn.
- Vision/Ball zerfällt (12): Figur steht jetzt sauber neben dem Ball (war vorher MITTEN im
  Ball — gefixt), aber insgesamt noch grob.

**Bewusst offen, Rob-Entscheidung nötig (siehe PITCHDECK-BRIEFING.md Abschnitt 4):**
1. Slide 5 (Auslöser, dark): Sprechblasen sind nur ein sichtbarer Platzhalter (dunkle
   Kacheln mit hellem Rand) — echte LLM-Logos vs. eigener Stil noch nicht entschieden.
2. Slide 2/7: Echtes Porträtfoto und App-Screenshots fehlen als Bild-Assets (nur Kreis mit
   „RK"-Initialen bzw. keine Screenshots) — bräuchten `upload_assets`, für Tempo ausgelassen.
3. Slide 8: Copy-Zeile „Übergabe an mich" 1:1 aus dem HTML übernommen, OBWOHL Rob selbst
   sagte, er versteht sie nicht mehr — noch klären, nicht selbst umformulieren.
4. Slide 6: Schulterzucken-Idee gebaut, aber nie explizit abgenommen.

## Wichtige technische Falle (Figma Plugin API, Slides) — beim Weiterbauen beachten

**`vectorPaths.data`-Koordinaten sind IMMER lokal, egal wie „absolut" die Zahlen aussehen.**
Figma normalisiert die Bounding-Box eines Vector-Node automatisch auf lokal (0,0) — die
Pfad-Zahlen bestimmen nur Form/Spannweite, NICHT die Canvas-Position. Die Canvas-Position
kommt ausschließlich aus `node.x`/`node.y`. Fehler-Muster, das mir dreimal passiert ist
(Sprechblasen-Schweif Slide 5, Sprechblasen-Spitze Slide 8, Trichter-Kurven Slide 11): große
Zahlen wie `'M 1150 500 C ... 1240 660'` direkt in die Pfad-Daten geschrieben UND dabei
`x=0,y=0` gesetzt (in der Annahme, die großen Zahlen würden die Position ergeben) → landet
sichtbar bei Canvas (0,0) statt bei (1150,500). **Richtig:** Pfad-Daten klein/lokal ab
ungefähr (0,0) halten (z. B. `'M 0 0 C 60 0 70 100 90 160'`), die gewünschte Canvas-Position
separat über `x`/`y` setzen (hier `x=1150,y=500`).

Zweiter Punkt: `use_figma`-Skripte sind atomar — bei einem Fehler wird NICHTS angelegt, der
ganze Batch muss neu geschickt werden (ist mehrfach passiert, z. B. fehlendes Leerzeichen
nach SVG-Pfad-Kommando wie `q13` statt `q 13`).

## Wie ich vorgegangen bin (falls Fortsetzung in neuer Session)

1. `figma:figma-create-new-file` Skill laden → `whoami` für planKey → `create_new_file`
   (editorType `slides`).
2. `figma:figma-use-slides` + `figma:figma-use` Skills laden (immer VOR jedem `use_figma`-Call).
3. Pro Batch 3–4 Slides bauen (Farb-/Font-Preamble jedes Mal neu einfügen, da jeder
   `use_figma`-Call ein frischer JS-Kontext ist), danach validieren (Textclipping/Bounds-
   Check-Skript, liegt im Chatverlauf) und `get_screenshot` für den visuellen Check.
4. Bei jedem Batch mindestens 1 Screenshot ansehen — nicht blind weiterbauen. So wurden alle
   5 Bugs oben gefunden, bevor sie sich durchs ganze Deck gezogen hätten.

## Kritische Session-Learnings (Arbeitsweise, s. auch CLAUDE.md)

- **Bei Fragen/„Stopp" sofort kurz antworten**, nicht erst laufende Tool-Sequenz beenden.
  Siehe `CLAUDE.md` in diesem Ordner + Memory `feedback_answer_first_then_act`.
- **Rob war am 26./27.07. explizit unzufrieden mit Tempo UND Qualität** der Illustrationen.
  Der Figma-Weg mit Batch-Validierung+Screenshot-Checkpoints war die Reaktion darauf —
  bisher kein weiteres negatives Feedback dazu erhalten, aber nicht als „Problem gelöst"
  werten, ohne dass Rob das bestätigt.
- **Nicht ungefragt weiterbauen.** Mehrere Bildideen sind explizit offen (s. oben) — vor
  dem nächsten Batch/Feinschliff erst Rücksprache, nicht durchregieren.

## Offen für den Wiedereinstieg (priorisiert)

1. Rob hat sich das Figma-Deck angeschaut — Feedback einholen, BEVOR weiter poliert wird.
2. Die 4 offenen Entscheidungen oben klären (Slide 5, 2/7-Assets, Slide 8 Copy, Slide 6).
3. Falls „weiterbauen" bestätigt: Charakter-Feinschliff der Figur (Blush, Brauen) + Katamari-
   Ball-Gesicht auf Slide 4/6/10/12 vereinheitlichen — aktuell zu roh für Präsentationsreife.
4. Unabhängig vom Figma-Track weiterhin offen (aus `visual-briefing.md`): Video-Platzhalter
   auf dem One-Pager ist öffentlich sichtbar, Recording-Fallback für die Live-Demo fehlt.
5. Termin nicht vergessen: **Finalpräsentation Di 28.07. / Mi 29.07.** — mit Stand 27.07.
   abends ist das MORGEN bzw. übermorgen.
