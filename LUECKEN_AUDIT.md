# Vollständigkeits-Audit (Stand: 29.07.2026)

Abgeglichen: Inhaltsverzeichnis des Lernskripts (`data/skript.txt`, S. 5–8) gegen **alle**
Fragen- und Karteikarten-Dateien in `src/data/`.

Datenstand der App zum Zeitpunkt des Audits:
`fragenOffiziell.ts` (21), `fragenGeneriert.ts` (28), `karteikarten.ts` (52),
`lueckenK123.ts` (20), `lueckenK4.ts` (16), `lueckenK5.ts` (16), `lueckenK6.ts` (16),
`lueckenK7.ts` (18), `lueckenK8.ts` (18), `teilB.ts` (24), `teilBDiagramme.ts`, `teilC.ts` (19).

> **Wichtiger Nebenbefund:** `src/data/nachzuegler45.ts` (13 Fragen zu Kap. 4.2.2, 4.3.2,
> 4.3.3, 4.4.1, 4.4.2, 5.2.4, 5.4.4, 5.4.5) existiert, ist aber in `src/lib/auswahl.ts`
> **nicht importiert** — die Fragen erscheinen aktuell nirgends in der App.
> Ein einzeiliger Import + Spread in `alleFragen()` behebt das. Im Audit unten sind diese
> Inhalte als "vorhanden, aber nicht eingebunden" berücksichtigt.

---

## Zusammenfassung

- **Unterkapitel gesamt: 102** (unterste Gliederungsebene, 8 Kapitel)
- **Abgedeckt: 71 (70 %)**
- **Teilweise: 27 (26 %)**
- **Fehlt: 4 (4 %)**

Nach Kapiteln:

| Kapitel | Gesamt | Abgedeckt | Teilweise | Fehlt |
|---|---|---|---|---|
| 1 Was ist Psychologie? | 5 | 5 | 0 | 0 |
| 2 Geschichte | 12 | 9 | 3 | 0 |
| 3 Forschung & Methodenlehre | 16 | 10 | 4 | 2 |
| 4 Biologische Psychologie | 14 | 7 | 5 | 2 |
| 5 Allgemeine Psychologie | 15 | 8 | 7 | 0 |
| 6 Entwicklungspsychologie | 12 | 10 | 2 | 0 |
| 7 Sozialpsychologie | 17 | 13 | 4 | 0 |
| 8 Differentielle & Persönlichkeit | 11 | 9 | 2 | 0 |

**Kurzbefund:** Die Kapitel 1, 6, 7 und 8 sind gut durchgearbeitet. Die größten
inhaltlichen Löcher sitzen in **Kapitel 5 (Allgemeine Psychologie)** und
**Kapitel 4.1/4.2 (Zellebene der Biopsychologie)** — also ausgerechnet dort, wo das
Skript viele Namen, Experimente und Zuordnungslisten liefert, die sich hervorragend für
das 4-Aussagen-Format eignen.

---

## Priorisierte Lückenliste (das sollte zuerst gebaut werden)

| Prio | Unterkapitel | Seiten | Status | Warum wichtig |
|---|---|---|---|---|
| 1 | **5.2.3 Aufmerksamkeit** | 128–131 (4 S.) | TEILWEISE | Die **offizielle** Beispielfrage A9 (Cueing-Paradigma) stammt genau aus diesem Kapitel — es ist also nachweislich prüfungsrelevant. In der App liegt dazu nur **eine Karteikarte** (K5-7). Im Skript stehen Broadbent (Filtertheorie), Cherry (dichotisches Hören/Cocktailparty), Posner (Cueing) und Simons & Chabris (inattentional blindness) — **keiner dieser Namen kommt in irgendeiner Datei vor**. |
| 2 | **7.2.3 Kontrolliertes vs. automatisches Denken** | 197–201 (5 S.) | TEILWEISE | Die einzige Frage (L7-5) belegt nur S. 197–198. S. 198–201 enthalten das **Zwei-System-Modell** und das **Elaboration-Likelihood-Model (Petty & Cacioppo)** mit zentraler/peripherer Route inkl. eigener Infobox 7.1 und Abbildung 7.4. "Elaboration"/"Route" tauchen in keiner Datei auf. Klassisches Zuordnungs-Item. |
| 3 | **7.3.4 Gehorsam gegenüber Autoritäten** | 209–211 (3 S.) | TEILWEISE | Milgram ist DER Klassiker und wird über 3 Seiten mit Versuchsaufbau (Lehrer/Schüler, Stromschläge, Anweisungen des Versuchsleiters) und Ergebnissen ausgebreitet. In der App: **eine Karteikarte** (K7-1) + ein Teilaspekt in G7-2. Keine einzige Lücken-Frage mit Beleg zu 7.3.4. |
| 4 | **5.4.3 Das Arbeitsgedächtnismodell** | 153–154 | TEILWEISE | Nur K5-5 („Kapazität des Arbeitsgedächtnisses"). Die eigentlichen Inhalte — **Baddeley**, zentrale Exekutive, phonologische Schleife, visuell-räumlicher Notizblock — kommen in **keiner** Datei vor. Sehr typisches Prüfungsthema. |
| 5 | **5.3.3 Klassische Konditionierung** | 141–143 | TEILWEISE | Das Grundprinzip (US/UR/CS/CR, Pawlow) ist über G5-1, K5-1, K5-2 abgedeckt. Die im Skript ausführlich behandelten Zusatzkonzepte fehlen: **Little Albert (10 Nennungen!), Watson, Löschung, Reizgeneralisierung, Reizdiskriminierung**. |
| 6 | **7.3.2 Einfluss von Mehrheiten** | 205–206 | TEILWEISE | Asch nur als Karteikarte (K7-2) und Teilaspekt in G7-2/G7-1. Die zentrale Unterscheidung **normativer vs. informationaler sozialer Einfluss** (S. 205 ff.) fehlt vollständig — genau die Art von Begriffspaar, das gerne abgefragt wird. |
| 7 | **4.2.1 Die Bausteine des Nervensystems** | 93–96 (4 S.) | TEILWEISE | Neuron-Aufbau ist über G4-1/K4-1 abgedeckt. **Gliazellen werden im Skript 22× erwähnt** (eigener großer Abschnitt: Astrozyten, Oligodendrozyten, Schwann-Zellen, Mikroglia) — in der App gibt es dazu genau **eine Teilaussage** (Müller-Zellen der Retina, L4-14). |
| 8 | **4.2.3 Die synaptische Übertragung** | 102–103 | TEILWEISE | Nur K4-4 (exzitatorisch/inhibitorisch). Vesikel, Axonterminale, Rezeptoren, Wiederaufnahme kommen nicht vor. Mechanistisches Thema, sehr gut für 4-Aussagen-Fragen geeignet. |
| 9 | **3.1.3 Der wissenschaftliche Forschungsprozess** | 54–55 | **FEHLT** | Quantitative vs. qualitative Forschung und die Phasen des Forschungsprozesses — Grundlagenstoff für Prüfungsteil A **und** B. „quantitativ" kommt in keiner einzigen Datei vor. |
| 10 | **4.1.2 Begriffsabgrenzung** | 89–91 (2,5 S.) | **FEHLT** | Saubere Liste mit **7 Begriffen**: Biopsychologie, Neurowissenschaften, Psychobiologie, Physiologische Psychologie, Neuropsychologie, Psychophysiologie, Kognitive Neurowissenschaft, Psychopharmakologie, Vergleichende Psychologie — jeweils mit Definition und Methode (EEG, MRT, Tierversuch). Das ist ein Zuordnungs-Item, wie es im Aufnahmetest fast schon gebaut ist. Aktuell: **null Treffer**. |
| 11 | **3.1.2 Was gilt als wissenschaftlich?** | 52–54 | **FEHLT** | Döring: **4 Standards der Wissenschaftlichkeit** + 4 Qualitätskriterien + Infobox 3.2 **Replikation/Replikationskrise** (direkte vs. konzeptionelle Replikation). „Replikation" kommt in keiner Datei vor. Aufzählungsstoff = ideales Prüfungsmaterial. |
| 12 | **5.4.4 Das Langzeitgedächtnis** | 155–157 | TEILWEISE | Nur K5-6 (explizit/implizit). Die Untergliederung (episodisch/semantisch, prozedural/Priming) und die **Amnesie-Fälle** stehen im Skript ausführlicher. Eine Frage dazu liegt in `nachzuegler45.ts`, ist aber **nicht eingebunden**. |
| 13 | **8.2.4 Soziale Lerntheorie & kognitive Theorien** | 251–256 (6 S.) | TEILWEISE | L8-13 (Rotter) und L8-14 (Bandura) belegen nur S. 251–253. **Mischel** (8 Nennungen, Person-Situation-Debatte, kognitiv-affektive Konstrukte) auf S. 253–256 fehlt komplett. |
| 14 | **3.5.4 Zusammenhangsmaße** | 84–87 (4 S.) | TEILWEISE | G3-3 behandelt nur „Korrelation ≠ Kausalität". **Kovarianz** (11×), Korrelationskoeffizient, Streudiagramm, Rechenbeispiel fehlen — und Teil B rechnet solche Sachen. |
| 15 | **3.3.4 Studiendesigns** | 69–70 | TEILWEISE | Nur als Teilaussage in L3-3. Quer-/Längsschnitt, Beobachtungs- vs. Korrelationsstudie, Feld vs. Labor — „Längsschnitt" kommt in keiner Datei vor. |
| 16 | **7.4.2 Minimalgruppenparadigma (Tajfel)** | 224–227 (4 S.) | TEILWEISE | Nur K7-4 (Karteikarte). Ingroup/Outgroup (26 Nennungen), Ingroup-Bias, Versuchsablauf (Zahlenpaare, Punkteverteilung) fehlen als Frage. |

---

## Vollständige Tabelle nach Kapiteln

Legende: **A** = ABGEDECKT · **T** = TEILWEISE · **F** = FEHLT.
Relevanz nur für T und F angegeben.

### Kapitel 1 — Was ist Psychologie? (S. 9–18)

| Unterkapitel | Seiten | Status | Anmerkung |
|---|---|---|---|
| 1.1 Definition | 10 | A | K1-1, G1-2 („Erleben & Verhalten", empirische Wissenschaft) |
| 1.2 Teildisziplinen der Psychologie | 11–13 | A | L1-1, L1-2 — Methoden-/Grundlagen-/Anwendungsfächer sauber drin |
| 1.3 Ansätze der Psychologie | 14–15 | A | L1-3, L1-4, K1-5 — alle fünf Ansätze abgedeckt |
| 1.4 Ziele der Psychologie | 15–16 | A | G1-1, K1-2 (Beschreiben/Erklären/Vorhersagen/Verändern) |
| 1.5 Ethische Prinzipien | 17–18 | A | G1-3, K1-4 — dünn (Schwerpunkt informed consent), aber inhaltlich getroffen |

### Kapitel 2 — Geschichte der Psychologie (S. 19–49)

| Unterkapitel | Seiten | Status | Anmerkung |
|---|---|---|---|
| 2.1.1 Ursprünge des Seelenbegriffs | 20–22 | **T** (mittel) | Nur die offizielle Frage A12 (Orphiker). **Platon** und **Homer** kommen in keiner Datei vor, Aristoteles nur beiläufig. 3 Seiten Stoff (Körper-Seele-Zweiteilung, Jenseitsvorstellungen) |
| 2.1.2 Römische Antike & Mittelalter | 23–24 | A | L2-1 |
| 2.1.3 Rationalismus vs. Empirismus | 25–26 | A | L2-2 (Descartes, Locke, Kant) — **Hume** fehlt namentlich |
| 2.2.1 Die Vernunft als Schlüssel zur Wissenschaft | 27–28 | **T** (niedrig) | L2-3 setzt erst bei S. 28 an. Physiognomik, „Seelenzeichenkunde"/„Seelenkrankheitskunde" nur teilweise berührt. Kurzes Kapitel |
| 2.2.2 Entwicklungen im 18./19. Jh. | 28–31 | A | L2-3 (Ausdruckspsychologie, Positivismus), K2-6 (Gall, Fechner) |
| 2.2.3 Naturwiss. Neubegründung | 32–37 (6 S.) | **T** (mittel) | L2-4 belegt nur S. 32–33; K2-1/K2-2/G2-1 decken Wundt 1879 + Strukturalismus/Funktionalismus. S. 34–37 (Introspektion, Ebbinghaus, Gründung der Fachgesellschaften, James, Calkins) sind dünn. **Galton, Weber, Darwin** kommen nirgends vor |
| 2.3 Psychologie im Nationalsozialismus | 38–39 | A | L2-5, L2-6 |
| 2.4.1 Würzburger Schule | 40 | A | L2-7 |
| 2.4.2 Gestaltpsychologie | 41–42 | A | G5-4, K2-4 |
| 2.4.3 Behaviorismus | 43–44 | A | K2-3, G2-2, L1-3 |
| 2.4.4 Tiefenpsychologie | 45–46 | A | L2-8, K2-5 (Freud, Jung, Adler) |
| 2.4.5 Kognitive Wende | 47–48 | A | L2-9 |

### Kapitel 3 — Psychologische Forschung und Methodenlehre (S. 50–87)

| Unterkapitel | Seiten | Status | Anmerkung |
|---|---|---|---|
| 3.1.1 Alltagspsychologie vs. wiss. Psychologie | 51–52 | A | L3-1 (inkl. Bestätigungsfehler, kritisches Denken) |
| 3.1.2 Was gilt als wissenschaftlich? | 52–54 | **F** (mittel-hoch) | 4 Standards nach Döring + Qualitätskriterien + Infobox **Replikationskrise**. Null Treffer in der App |
| 3.1.3 Der wiss. Forschungsprozess | 54–55 | **F** (hoch) | quantitativ vs. qualitativ, Phasen des Forschungsprozesses. Null Treffer |
| 3.2.1 Anforderungen an Hypothesen | 57 | A | Offizielle Frage A4 + K3-6 |
| 3.2.2 Arten von Hypothesen | 57–59 | A | L3-2 |
| 3.3.1 Operationalisierung | 60–61 | A | L3-3 |
| 3.3.2 Messung von Variablen | 62–66 | A | G3-1, K3-1…K3-3, K3-7, G3-4, mehrere Teil-B-Items |
| 3.3.3 Stichproben | 67–68 | **T** (mittel) | Nur eine Teilaussage in L3-3. Population/Stichprobe/Repräsentativität (22 Nennungen im Skript) ohne eigene Frage |
| 3.3.4 Studiendesigns | 69–70 | **T** (mittel-hoch) | s. Prio 15. „Längsschnitt" kommt nirgends vor |
| 3.4.1 Zeitliche Abfolge | 72 | A | L3-4 |
| 3.4.2 Ausschluss von Alternativerklärungen | 73–74 | A | L3-5 (Störvariablen, Konfundierung) |
| 3.4.3 Erwartungseffekte & Kontrolle | 75–77 | A | L3-6 |
| 3.5.1 Häufigkeiten & Verteilungen | 78–80 | A | L3-7, mehrere Teil-B-Items |
| 3.5.2 Maße der zentralen Tendenz | 81 | A | K3-4, G3-2, Teil B (Median/Mittel/Modus) |
| 3.5.3 Maße der Streuung | 82–83 | **T** (mittel) | Nur in Teil B (Quartile/IQR, Ausreißer, z-Wert) und G3-2. Keine Teil-A-Frage zu Varianz/Standardabweichung/Streuungsmaßen |
| 3.5.4 Zusammenhangsmaße | 84–87 | **T** (mittel-hoch) | s. Prio 14. **Kovarianz** und Korrelationskoeffizient fehlen ganz |

### Kapitel 4 — Biologische Psychologie (S. 88–121)

| Unterkapitel | Seiten | Status | Anmerkung |
|---|---|---|---|
| 4.1.1 Warum braucht die Psychologie Biologie? | 88–89 | **F** (niedrig) | Definitorisch/motivierend, wenig Faktenstoff. Trotzdem: null Treffer |
| 4.1.2 Begriffsabgrenzung | 89–91 | **F** (mittel-hoch) | s. Prio 10 — 7-Begriffe-Liste, ideales Zuordnungs-Item |
| 4.1.3 Bekannte Fälle der Hirnforschung | 91–92 | A | L4-1 (Phineas Gage), L4-2 (Patient Tan/Broca) |
| 4.2.1 Bausteine des Nervensystems | 93–96 | **T** (hoch) | s. Prio 7 — **Gliazellen fehlen praktisch ganz** |
| 4.2.2 Ruhe- und Aktionspotenzial | 97–101 | A | Offizielle Frage A5, G4-2, K4-2, K4-3 (+1 Frage in nachzuegler45) |
| 4.2.3 Synaptische Übertragung | 102–103 | **T** (hoch) | s. Prio 8 — nur K4-4 |
| 4.2.4 Neurotransmitter | 104 | **T** (mittel-hoch) | Nur K4-5 (Dopamin/Serotonin/GABA). Keine Teil-A-Frage; Wirkmechanismen/Drogen fehlen |
| 4.3.1 Anatomische Bezugspunkte | 106–107 | A | L4-3, L4-4 (dorsal/ventral/medial/lateral/ipsi-kontralateral) |
| 4.3.2 Das Rückenmark | 108–109 | A | L4-5, L4-6 (+2 in nachzuegler45) |
| 4.3.3 Das Gehirn | 110–114 | A | **Sehr gut**: L4-7…L4-13 (7 Fragen) über alle Hirnabschnitte + Lappen |
| 4.3.4 Das periphere Nervensystem | 115 | **T** (mittel) | Nur K4-6 (Sympathikus/Parasympathikus) + G4-3. Somatisches NS, Hirnnerven, Split-Brain nicht als Frage |
| 4.4.1 Aufbau des Auges | 116–117 | **T** (mittel) | Aktiv in der App nur K4-7 (Stäbchen/Zapfen) + Teilaspekt in A14. Eine passende Frage liegt in `nachzuegler45.ts` — **nicht eingebunden** |
| 4.4.2 Vom Lichteinfall zum neuronalen Signal | 117–119 | A | L4-14, A14 (+2 in nachzuegler45) |
| 4.4.3 Vom Auge zum Gehirn | 120–121 | A | L4-15 (Chiasma opticum), L4-16 (CGL/V1) |

### Kapitel 5 — Allgemeine Psychologie (S. 122–161)

| Unterkapitel | Seiten | Status | Anmerkung |
|---|---|---|---|
| 5.1 Was ist Allgemeine Psychologie? | 122–123 | **T** (niedrig-mittel) | Nur indirekt über L8-3 (Allgemeine vs. Differentielle). Die Themenliste der Allgemeinen Psychologie (Wahrnehmung, Lernen, Gedächtnis, Denken, Emotion, Motivation, Volition) fehlt als eigene Frage |
| 5.2.1 Was versteht man unter Wahrnehmung? | 124–125 | A | L5-1, L5-2 (drei Stufen nach Becker-Carus & Wendt) |
| 5.2.2 Theorien der Wahrnehmung | 125–127 | A | L5-3 (Psychophysik), L5-4 (Signalentdeckungstheorie) |
| 5.2.3 **Aufmerksamkeit** | 128–131 | **T** (hoch) | s. Prio 1 — größte Einzellücke der App |
| 5.2.4 Visuelle Wahrnehmung | 132–137 | A | L5-5…L5-8 (+3 in nachzuegler45: Farbfehlsichtigkeit, rezeptives Feld) |
| 5.3.1 Wie lernen wir? | 138–139 | A | L5-9 |
| 5.3.2 Habituation und Sensitivierung | 140 | A | L5-10 |
| 5.3.3 Klassische Konditionierung | 141–143 | **T** (hoch) | s. Prio 5 — **Little Albert, Löschung, Generalisierung/Diskriminierung fehlen** |
| 5.3.4 Operante Konditionierung | 144–146 | **T** (mittel-hoch) | Verstärkungs-/Bestrafungsmatrix ist über A7 (offiziell), G5-2, K5-3 solide. Aber **Thorndike/Gesetz des Effekts**, Skinner-Box, primäre vs. sekundäre Verstärker sind im Skript ausführlich und in der App kaum präsent |
| 5.3.5 Beobachtungslernen | 147–148 | A | L5-11, L5-12 (Bobo Doll), L5-13 (Bandura 1965) |
| 5.4.1 Enkodierung, Speicherung, Abruf | 150 | A | L5-14 |
| 5.4.2 Das Drei-Speicher-Modell | 151–152 | **T** (mittel) | Nur K5-4 + Teilaspekt G5-3. **Sperling**/sensorisches Gedächtnis fehlt; keine Teil-A-Frage |
| 5.4.3 **Das Arbeitsgedächtnismodell** | 153–154 | **T** (hoch) | s. Prio 4 — **Baddeley kommt in keiner Datei vor** |
| 5.4.4 Das Langzeitgedächtnis | 155–156 | **T** (mittel-hoch) | s. Prio 12 — 1 Frage liegt in nachzuegler45 (nicht eingebunden) |
| 5.4.5 Gedächtniseffekte | 157–160 | A | L5-15 (serieller Positionseffekt), L5-16 (Interferenz/Ebbinghaus) (+3 in nachzuegler45) |

### Kapitel 6 — Entwicklungspsychologie (S. 162–190)

| Unterkapitel | Seiten | Status | Anmerkung |
|---|---|---|---|
| 6.1 Was ist Entwicklungspsychologie? | 163 | A | L6-1, L6-2 (Phasen/Alterstabelle) |
| 6.2.1 Pränatale Entwicklung | 164–166 | **T** (mittel-hoch) | Nur die offizielle Frage A1 (Zygote/embryonal/fötal). Im Skript zusätzlich: **Teratogene/Fehlbildungen**, Einflüsse der Mutter, Wochenverlauf. Prüfungsrelevanz nachweislich hoch (offizielles Beispielitem!), Abdeckung aber nur eine Frage |
| 6.2.2 Entwicklung in der frühen Kindheit | 167–169 | A | L6-3 (Reflexe), L6-4 (visuelle Klippe) |
| 6.2.3 Entwicklung in der Adoleszenz | 170 | A | L6-5, L6-6 |
| 6.2.4 Entwicklung im Erwachsenenalter | 170–171 | A | L6-7 (Inflammaging), L6-8 (Menopause/Andropause) |
| 6.3.1 Piaget | 172–177 | A | G6-1, K6-1…K6-3, offizielle Frage A8, L6-1 |
| 6.3.2 Theory of Mind | 178–179 | A | L6-9, L6-10 (False-Belief/Maxi) |
| 6.3.3 Moralentwicklung | 180–182 | A | **Sehr gut**: L6-11…L6-14 (Kohlberg, Heinz-Dilemma, Stufen/Niveaus) |
| 6.3.4 Kognitive Entwicklung im Erwachsenenalter | 183–184 | A | L6-15 |
| 6.4.1 Bindung | 185–187 | **T** (mittel) | G6-3 + K6-4 decken Ainsworth/Fremde Situation/Bindungstypen. Aber: 3 Seiten Stoff, **keine** Lücken-Frage, **Bowlby** kommt in keiner Datei vor |
| 6.4.2 Eriksons Stufenmodell | 188 | A | Offizielle Frage A6, G6-2, K6-5, K6-6 |
| 6.4.3 Die Suche nach Identität | 189–190 | A | L6-16 (Marcia, Identitätsstatus) |

### Kapitel 7 — Sozialpsychologie (S. 191–234)

| Unterkapitel | Seiten | Status | Anmerkung |
|---|---|---|---|
| 7.1 Was ist Sozialpsychologie? | 191 | A | Offizielle Frage A13 |
| 7.2.1 Schemata | 194–195 | A | L7-1, L7-2 (Kategorien/Prototypen/Skripte) |
| 7.2.2 Priming | 196 | A | L7-3, L7-4 (semantisch/affektiv) |
| 7.2.3 **Kontrolliertes vs. automatisches Denken** | 197–201 | **T** (hoch) | s. Prio 2 — **ELM / Zwei-System-Modell fehlen ganz** |
| 7.3.1 Soziale Erleichterung vs. Hemmung | 202–204 | A | L7-6, L7-7 (Distraction-Conflict-Theory) |
| 7.3.2 Einfluss von Mehrheiten | 205–206 | **T** (hoch) | s. Prio 6 — **normativ/informational fehlt** |
| 7.3.3 Einfluss von Minderheiten | 207–208 | A | L7-8 (Moscovici), L7-9 |
| 7.3.4 **Gehorsam gegenüber Autoritäten** | 209–211 | **T** (hoch) | s. Prio 3 — Milgram nur als Karteikarte |
| 7.3.5 Bewusste soziale Einflussnahme | 212–214 | A | L7-10 (Foot-in-the-door), L7-11 (Reziprozität/Door-in-the-face) |
| 7.3.6 Soziale Rollen und Normen | 215–220 | A | L7-12, L7-13 (Deindividuation), K7-3 (Zimbardo) |
| 7.4.1 Ferienlagerexperiment der Sherifs | 221–223 | A | L7-14, K7-5 |
| 7.4.2 Minimalgruppenparadigma (Tajfel) | 224–226 | **T** (mittel-hoch) | s. Prio 16 — nur K7-4 |
| 7.4.3 Stereotype, Vorurteile, Diskriminierung | 227–228 | A | G7-4, K7-6 |
| 7.5.1 Evolutionspsychologische Erklärung | 230 | A | L7-15 |
| 7.5.2 Empathie-Altruismus-Hypothese | 231–232 | A | L7-16 (Toi & Batson) |
| 7.5.3 Soziale-Austausch-Theorie | 233 | A | L7-17 (Homans) |
| 7.5.4 Situative Determinanten | 233–234 | A | L7-18 (Bystander-Effekt, Latané) |

> Anmerkung: Der **fundamentale Attributionsfehler** (G7-3, K7-7) ist in der App vorhanden,
> hat im Skript-Inhaltsverzeichnis aber kein eigenes Unterkapitel. Kein Defizit, nur zur Einordnung.

### Kapitel 8 — Differentielle und Persönlichkeitspsychologie (S. 235–267)

| Unterkapitel | Seiten | Status | Anmerkung |
|---|---|---|---|
| 8.1.1 Was ist Persönlichkeit? | 237–238 | A | L8-1, L8-2 (Disposition/Temperament) |
| 8.1.2 Allgemeine vs. Differentielle vs. Persönlichkeitspsych. | 239 | A | L8-3 |
| 8.2.1 Trait-Theorien | 240–244 | A | L8-4, L8-5 (Galen/Eysenck), G8-1, K8-1…K8-3, offizielle Frage A11 (Big Five), Allport & Cattell erwähnt |
| 8.2.2 Psychodynamische Theorie | 245–247 | A | L8-6…L8-8 (Instanzen, Eisberg, heutiger Stellenwert) |
| 8.2.3 Humanistische Theorien | 248–250 | A | L8-9…L8-12 (Rogers, Maslow, Bühler) |
| 8.2.4 Soziale Lerntheorie & kognitive Theorien | 251–255 | **T** (mittel-hoch) | s. Prio 13 — **Mischel fehlt komplett** |
| 8.3.1 Persönlichkeitsfragebögen | 257–259 | **T** (mittel) | L8-15 (Cattells L-/Q-/T-Daten) + G8-2/G8-3/K8-5 (Gütekriterien). Die konkreten Verfahren **NEO-Persönlichkeitsinventar** und **MMPI** sowie Vor-/Nachteile von Fragebögen fehlen |
| 8.3.2 Psychologisch-diagnostisches Interview | 260–261 | A | L8-16 |
| 8.3.3 Verhaltensbeobachtung | 262 | A | L8-17 |
| 8.3.4 Objektive Persönlichkeitstests (OPT) | 263–264 | A | L8-18 (inkl. IAT) |
| 8.3.5 Projektive Tests | 265–267 | A | Offizielle Frage A10, K8-4, G8-2 (Rorschach) |

---

## Zusätzliche Beobachtungen (kein Skript-Kapitel, aber relevant)

1. **`nachzuegler45.ts` ist nicht eingebunden** — 13 fertige Fragen liegen brach.
   Fix: Import + Spread in `src/lib/auswahl.ts` (`alleFragen()`).
2. **Belegfeld nicht flächendeckend**: `fragenGeneriert.ts`, `fragenOffiziell.ts` und
   `karteikarten.ts` haben kein `beleg:`-Feld. Dadurch lässt sich die Abdeckung dieser
   3 Dateien (101 Items) nur über Themen/Stems abschätzen. Ein nachträgliches Ergänzen
   der Kapitelbelege würde künftige Audits deutlich präziser machen.
3. **Ungleichgewicht Karteikarte vs. Frage**: Mehrere hochrelevante Themen (Milgram, Asch,
   Tajfel, Arbeitsgedächtnis, Bindung) existieren nur als Karteikarte. Karteikarten
   trainieren Wiedererkennen, der Test verlangt aber die Bewertung von 4 Einzelaussagen —
   diese Themen sollten in Frageform nachgezogen werden.
4. **Teil B und Teil C** sind formatseitig gut aufgestellt (24 + 19 Items), hängen aber
   inhaltlich nicht am Skript-Inhaltsverzeichnis und sind daher hier nicht bewertet.
   Auffällig ist nur, dass Teil B Streuungs- und Zusammenhangsmaße rechnet, für die in
   Teil A das konzeptuelle Gegenstück (3.5.3, 3.5.4) fehlt.
