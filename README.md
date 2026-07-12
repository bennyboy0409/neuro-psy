# Neuro — Lern-App für den Psychologie-Aufnahmetest (Uni Wien)

Eine schnelle, schöne Lern-App zur Vorbereitung auf den **Aufnahmetest Bachelor Psychologie** an der Universität Wien. Kein Login, alles im Browser, funktioniert am Handy wie eine echte App.

> Gebaut mit dem Anspruch: **in weniger Zeit mehr behalten** — auf Basis der Lernforschung, nicht nach Bauchgefühl.

## Was drin ist

**7 Lernmodi**
- **Kombi-Session** — dein anpassbarer Plan; das „Neuro-Plan"-Preset verkettet Blitz → Fokus → Brain-Dump
- **Fokus-Session** — wiederholt jedes Item, *bis es heute sitzt* (Successive Relearning), mischt Themen (Interleaving)
- **Blitz** — 45-Sekunden-Speed-Abruf mit Combo-Multiplikator und Rekord
- **Brain-Dump** — freies Erinnern + Selbst-Check (die stärkste Abruf-Form der Forschung)
- **Karteikarten** — 3D-Flip mit Merksätzen
- **Prüfungs-Simulation** — echtes Timing (2,5 Min/Frage), ehrliche Auswertung
- **Fragen üben** — nach Teil, „falsche zuerst"

**Inhalt** — 101 Lern-Einheiten über alle 8 Kapitel: 43 Fragen im offiziellen 4-Aussagen-Format (15 offizielle Beispielfragen + 28 geprüfte) und 52 Karteikarten. Jede mit **Erklärung**, **Merksatz** und farbig markierten Schlüsselwörtern.

**Algorithmus** — SM-2 Spaced Repetition (wie Anki): plant Wiederholungen automatisch ein, „Heute fällig", Fehler-Fokus, Kapitel-Fortschritt, Streak.

## Die Lernwissenschaft dahinter

- **Abruf-Testen** statt Wiederlesen — stärkster belegter Effekt (Dunlosky et al., 2013)
- **Spacing / verteiltes Üben** — zweitstärkster Effekt
- **Successive Relearning** — bis-es-sitzt-Wiederholung, effizienteste dokumentierte Methode (Rawson & Dunlosky)
- **Freies Erinnern** (Brain-Dump) — stärker fürs Langzeitgedächtnis als Wiedererkennen
- **85-%-Regel** — Lerntempo maximal bei ~15 % Fehlern (Wilson et al., 2019)
- **Interleaving** — Themen mischen statt blockweise

## Format-Hinweis

Der echte Test ist **kein** Single-Choice: Jede Frage hat **4 Aussagen**, jede einzeln als *richtig* oder *falsch* zu bewerten. Eine Frage zählt nur als gelöst, wenn **alle 4** korrekt bewertet sind. Genau so funktioniert die App.

## Technik

- Vite + React 19 + TypeScript + Tailwind v4
- Persistenz: `localStorage` (kein Konto nötig)
- Kein Tracking, keine externen Abhängigkeiten zur Laufzeit (offline-tauglich)

## Lokal starten

```bash
npm install
npm run dev
```

## Bauen / Deployen

```bash
npm run build      # erzeugt dist/
```

Deploy erfolgt automatisch via GitHub Actions nach GitHub Pages (`.github/workflows/deploy.yml`), sobald auf `master` gepusht wird.

## Quellen

- Dunlosky, J. et al. (2013). *Improving Students' Learning With Effective Learning Techniques.* Psychological Science in the Public Interest.
- Rawson, K. A., & Dunlosky, J. *The Power of Successive Relearning.*
- Wilson, R. C. et al. (2019). *The Eighty Five Percent Rule for optimal learning.* Nature Communications.

---

Fragen aus Teil A/B stammen teils aus den offiziellen Beispielitems der Universität Wien; generierte Fragen sind als solche gekennzeichnet und orientieren sich am Lernskript-Umfang. Dies ist ein inoffizielles Lern-Tool und steht in keiner Verbindung zur Universität Wien.
