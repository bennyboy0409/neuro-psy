import type { Frage } from "../types";

// ============================================================
//  GENERIERTE Fragen (Teil A) — kanonisches Psychologie-Wissen,
//  am Umfang des Lernskripts orientiert. Bewusst konservativ
//  (nur eindeutige Fakten). quelle = "generiert" (kein Offiziell-Siegel).
//  Format: 4 Aussagen, jede einzeln richtig/falsch, min. 1 richtig.
// ============================================================

export const fragenGeneriert: Frage[] = [
  // ---------- Kapitel 1 ----------
  {
    id: "G1-1", teil: "A", kapitel: 1, thema: "Grundlagen", quelle: "generiert", schwierigkeit: 1,
    stem: "Welche Aussagen zu den ==Zielen der Psychologie== treffen zu?",
    aussagen: [
      { text: "Zu den Zielen gehört das Beschreiben von Erleben und Verhalten.", istRichtig: true },
      { text: "Ein Ziel ist das Erklären von Zusammenhängen (Ursachen).", istRichtig: true },
      { text: "Die Psychologie will Verhalten auch vorhersagen und verändern.", istRichtig: true },
      { text: "Als reine Geisteswissenschaft verzichtet die Psychologie auf empirische Überprüfung.", istRichtig: false },
    ],
    erklaerung: "Die vier Ziele sind ==Beschreiben, Erklären, Vorhersagen, Verändern== (a, b, c richtig). Psychologie ist eine ==empirische== Wissenschaft — sie prüft an Daten, verzichtet also nicht darauf (d falsch).",
    merksatz: "4 Ziele: ==Beschreiben → Erklären → Vorhersagen → Verändern== — und immer ==empirisch==.",
  },
  {
    id: "G1-2", teil: "A", kapitel: 1, thema: "Wissenschaft", quelle: "generiert", schwierigkeit: 2,
    stem: "Was kennzeichnet die Psychologie als ==empirische Wissenschaft==?",
    aussagen: [
      { text: "Aussagen werden an systematischer Beobachtung und Daten überprüft.", istRichtig: true },
      { text: "Hypothesen müssen prinzipiell widerlegbar sein.", istRichtig: true },
      { text: "Der gesunde Menschenverstand reicht als wissenschaftlicher Beleg.", istRichtig: false },
      { text: "Wissenschaftliches Vorgehen folgt der wissenschaftlichen Methode und definierten Standards.", istRichtig: true },
    ],
    erklaerung: "Empirisch heißt: ==an Daten prüfbar== (a). Eine Anforderung an Hypothesen ist die ==prinzipielle Widerlegbarkeit== (b) — Achtung, das Skript sagt ==Widerlegbarkeit==, nicht Falsifikation. Der ==gesunde Menschenverstand== liegt oft falsch und ist kein Beleg (c falsch). Wissenschaft folgt der ==wissenschaftlichen Methode== und festgelegten ==Standards== (d).",
    merksatz: "Empirisch = ==an Daten prüfbar== + ==prinzipiell widerlegbar== (Skript-Wort!) — nicht Bauchgefühl.",
    beleg: "Kap. 3.1.1–3.1.2, S. 51–53; Kap. 3.2.1, S. 57",
  },
  {
    id: "G1-3", teil: "A", kapitel: 1, thema: "Ethik", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche der folgenden zählen zu den ==ethischen Grundsätzen== der Psychologie (nach APA)?",
    aussagen: [
      { text: "Wohltätigkeit und Nicht-Schaden", istRichtig: true },
      { text: "Integrität", istRichtig: true },
      { text: "Respekt für die Rechte und Würde von Personen", istRichtig: true },
      { text: "Maximierung des Erkenntnisgewinns, notfalls auch gegen die Interessen der Teilnehmenden", istRichtig: false },
    ],
    erklaerung: "Das Skript nennt fünf Grundsätze: ==Wohltätigkeit und Nicht-Schaden==, ==Loyalität und Verantwortung==, ==Integrität==, ==Gerechtigkeit== sowie ==Respekt für die Rechte und Würde von Personen== (a, b, c richtig). Ein Grundsatz, der Erkenntnis über die Interessen der Teilnehmenden stellt, existiert nicht — im Gegenteil, ==Nicht-Schaden== hat Vorrang (d falsch). Zu ==Integrität== gehört ausdrücklich, dass keine Täuschung oder Falschdarstellung ausgeführt werden darf.",
    merksatz: "Fünf Grundsätze: ==Wohltätigkeit/Nicht-Schaden==, ==Loyalität/Verantwortung==, ==Integrität==, ==Gerechtigkeit==, ==Respekt für Rechte und Würde==.",
    beleg: "Kap. 1.5, S. 17–18",
  },

  // ---------- Kapitel 2 ----------
  {
    id: "G2-1", teil: "A", kapitel: 2, thema: "Geschichte", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Entstehung der wissenschaftlichen Psychologie== sind korrekt?",
    aussagen: [
      { text: "Wilhelm Wundt gründete 1879 in Leipzig das erste psychologische Labor.", istRichtig: true },
      { text: "Damit gilt 1879 als Beginn der Psychologie als eigenständige Wissenschaft.", istRichtig: true },
      { text: "Wundt nutzte u. a. die Methode der Introspektion.", istRichtig: true },
      { text: "Vor Wundt gab es keinerlei Beschäftigung mit psychologischen Fragen.", istRichtig: false },
    ],
    erklaerung: "==Wundt 1879 Leipzig== = erstes Labor und Startpunkt der eigenständigen Wissenschaft (a, b), Methode ==Introspektion== (c). Psychologische Fragen gab es aber schon lange in der Philosophie (d falsch).",
    merksatz: "==Wundt 1879 Leipzig== = Startpunkt; die Fragen sind aber uralt (Philosophie).",
  },
  {
    id: "G2-2", teil: "A", kapitel: 2, thema: "Schulen", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Zuordnungen zu den ==Schulen der Psychologie== sind korrekt?",
    aussagen: [
      { text: "Behaviorismus ↔ nur beobachtbares Verhalten (Reiz-Reaktion).", istRichtig: true },
      { text: "Psychoanalyse ↔ Bedeutung des Unbewussten (Freud).", istRichtig: true },
      { text: "Gestaltpsychologie ↔ 'Das Ganze ist mehr als die Summe seiner Teile'.", istRichtig: true },
      { text: "Funktionalismus ↔ Zerlegung des Bewusstseins in kleinste Elemente.", istRichtig: false },
    ],
    erklaerung: "Behaviorismus (a), Psychoanalyse (b) und Gestaltpsychologie (c) sind korrekt zugeordnet. Die Zerlegung in Elemente ist der ==Strukturalismus==, nicht der Funktionalismus (d falsch).",
    merksatz: "Elemente zerlegen = ==Strukturalismus==; Funktion/Zweck = ==Funktionalismus==.",
  },
  {
    id: "G2-3", teil: "A", kapitel: 2, thema: "Personen", quelle: "generiert", schwierigkeit: 1,
    stem: "Welche ==Personen-Zuordnungen== sind korrekt?",
    aussagen: [
      { text: "Iwan Pawlow ↔ klassische Konditionierung.", istRichtig: true },
      { text: "B. F. Skinner ↔ operante Konditionierung.", istRichtig: true },
      { text: "John Watson ↔ Begründer des Behaviorismus.", istRichtig: true },
      { text: "Sigmund Freud ↔ Begründer des Behaviorismus.", istRichtig: false },
    ],
    erklaerung: "Pawlow (klassisch, a), Skinner (operant, b) und Watson (Behaviorismus, c) stimmen. Freud begründete die ==Psychoanalyse==, nicht den Behaviorismus (d falsch).",
    merksatz: "Behaviorismus = ==Watson/Skinner/Pawlow==; Freud = ==Psychoanalyse==.",
  },

  // ---------- Kapitel 3 ----------
  {
    id: "G3-1", teil: "A", kapitel: 3, thema: "Skalenniveau", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu den ==Skalenniveaus== sind korrekt?",
    aussagen: [
      { text: "Eine Nominalskala unterscheidet nur Kategorien, ohne Rangordnung.", istRichtig: true },
      { text: "Bei einer Ordinalskala gibt es eine Rangordnung, aber keine interpretierbaren Abstände.", istRichtig: true },
      { text: "Die Intervallskala besitzt einen absoluten Nullpunkt.", istRichtig: false },
      { text: "Nur die Verhältnisskala erlaubt Aussagen wie 'doppelt so viel'.", istRichtig: true },
    ],
    erklaerung: "Nominal = Kategorien (a), Ordinal = Rangordnung ohne echte Abstände (b). Die Intervallskala hat ==keinen absoluten Nullpunkt== (c falsch) — den hat nur die ==Verhältnisskala==, weshalb nur dort 'doppelt so viel' sinnvoll ist (d).",
    merksatz: "Absoluter Nullpunkt nur bei ==Verhältnisskala== → nur da 'doppelt so viel'.",
  },
  {
    id: "G3-2", teil: "A", kapitel: 3, thema: "Deskriptive Statistik", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==deskriptiven Statistik== treffen zu?",
    aussagen: [
      { text: "Der Median ist robuster gegenüber Ausreißern als das arithmetische Mittel.", istRichtig: true },
      { text: "Das arithmetische Mittel ist die Summe aller Werte geteilt durch ihre Anzahl.", istRichtig: true },
      { text: "Der Modus ist der am häufigsten vorkommende Wert.", istRichtig: true },
      { text: "Die Standardabweichung ist ein Lagemaß (Maß der zentralen Tendenz).", istRichtig: false },
    ],
    erklaerung: "Median (a), Mittel (b) und Modus (c) sind korrekt beschrieben. Die ==Standardabweichung== ist ein ==Streuungsmaß==, kein Lagemaß (d falsch).",
    merksatz: "==Median/Mittel/Modus== = Lage; ==Standardabweichung/Varianz== = Streuung.",
  },
  {
    id: "G3-3", teil: "A", kapitel: 3, thema: "Korrelation", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Korrelation und Kausalität== sind korrekt?",
    aussagen: [
      { text: "Ein Korrelationskoeffizient r kann Werte zwischen -1 und +1 annehmen.", istRichtig: true },
      { text: "Eine Korrelation belegt bereits eine Ursache-Wirkungs-Beziehung.", istRichtig: false },
      { text: "Ein r nahe 0 spricht für keinen (linearen) Zusammenhang.", istRichtig: true },
      { text: "Für kausale Aussagen ist in der Regel ein Experiment nötig.", istRichtig: true },
    ],
    erklaerung: "r liegt zwischen −1 und +1 (a), nahe 0 = kein linearer Zusammenhang (c), Ursache klärt man per ==Experiment== (d). ==Korrelation ist nicht gleich Kausalität== (b falsch).",
    merksatz: "==Korrelation ≠ Kausalität==; r ∈ [−1, +1]; Ursache zeigt das ==Experiment==.",
  },
  {
    id: "G3-4", teil: "A", kapitel: 3, thema: "Versuchsdesign", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Versuchsdesign und Gütekriterien== sind korrekt?",
    aussagen: [
      { text: "Die unabhängige Variable (UV) wird vom Versuchsleiter manipuliert.", istRichtig: true },
      { text: "Die abhängige Variable (AV) wird gemessen.", istRichtig: true },
      { text: "Reliabilität meint, ob ein Test das misst, was er messen soll.", istRichtig: false },
      { text: "Randomisierung (zufällige Zuteilung) hilft, Störvariablen zu kontrollieren.", istRichtig: true },
    ],
    erklaerung: "UV wird manipuliert (a), AV gemessen (b), Randomisierung kontrolliert Störvariablen (d). Ob ein Test das Richtige misst, ist die ==Validität==, nicht die Reliabilität (c falsch).",
    merksatz: "==UV manipulieren, AV messen==; ==Reliabilität== = genau, ==Validität== = misst das Richtige.",
  },

  // ---------- Kapitel 4 ----------
  {
    id: "G4-1", teil: "A", kapitel: 4, thema: "Neuron", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Neuron== sind korrekt?",
    aussagen: [
      { text: "Dendriten empfangen Signale, das Axon leitet sie weiter.", istRichtig: true },
      { text: "An der Synapse erfolgt die Übertragung meist chemisch über Neurotransmitter.", istRichtig: true },
      { text: "Die Myelinschicht verlangsamt die Erregungsleitung.", istRichtig: false },
      { text: "Das Soma ist der Zellkörper des Neurons.", istRichtig: true },
    ],
    erklaerung: "Dendrit empfängt, Axon leitet (a), Synapse überträgt chemisch (b), Soma = Zellkörper (d). ==Myelin beschleunigt== die Leitung (saltatorische Erregung), verlangsamt sie nicht (c falsch).",
    merksatz: "Weg: ==Dendrit → Soma → Axon → Synapse==; ==Myelin = schneller==.",
  },
  {
    id: "G4-2", teil: "A", kapitel: 4, thema: "Aktionspotenzial", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==Aktionspotenzial== sind korrekt?",
    aussagen: [
      { text: "Bei der Depolarisation strömen Natriumionen (Na⁺) in die Zelle.", istRichtig: true },
      { text: "Bei der Repolarisation strömen Kaliumionen (K⁺) aus der Zelle.", istRichtig: true },
      { text: "Ein Aktionspotenzial folgt dem Alles-oder-nichts-Prinzip.", istRichtig: true },
      { text: "Unterschwellige Reize lösen ein abgeschwächtes Aktionspotenzial aus.", istRichtig: false },
    ],
    erklaerung: "Na⁺ rein (Depolarisation, a), K⁺ raus (Repolarisation, b), ==Alles-oder-nichts== (c). Unterschwellige Reize lösen ==gar kein== Aktionspotenzial aus — es gibt kein 'abgeschwächtes' (d falsch).",
    merksatz: "==Na⁺ rein==, ==K⁺ raus==, ==alles-oder-nichts== (ab der Schwelle).",
  },
  {
    id: "G4-3", teil: "A", kapitel: 4, thema: "Nervensystem", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Nervensystem== sind korrekt?",
    aussagen: [
      { text: "Das zentrale Nervensystem (ZNS) besteht aus Gehirn und Rückenmark.", istRichtig: true },
      { text: "Der Sympathikus aktiviert den Körper (Kampf oder Flucht).", istRichtig: true },
      { text: "Der Parasympathikus ist für Erholung und Verdauung zuständig.", istRichtig: true },
      { text: "Das somatische Nervensystem steuert ausschließlich unwillkürliche Organe.", istRichtig: false },
    ],
    erklaerung: "ZNS = Gehirn + Rückenmark (a), Sympathikus aktiviert (b), Parasympathikus beruhigt (c). Das ==somatische== NS steuert die ==willkürliche== Muskulatur; unwillkürliche Organe steuert das vegetative NS (d falsch).",
    merksatz: "==Sympathikus== = Gas, ==Parasympathikus== = Bremse; ==somatisch = willkürlich==.",
  },
  {
    id: "G4-4", teil: "A", kapitel: 4, thema: "Visuelles System", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==visuellen System== sind korrekt?",
    aussagen: [
      { text: "Zapfen sind für das Farbsehen bei Tageslicht zuständig.", istRichtig: true },
      { text: "Stäbchen ermöglichen das Sehen bei geringem Licht (Dämmerung).", istRichtig: true },
      { text: "Am blinden Fleck treten die Axone der Ganglienzellen als Sehnerv aus.", istRichtig: true },
      { text: "In der Fovea (Sehgrube) befinden sich überwiegend Stäbchen.", istRichtig: false },
    ],
    erklaerung: "Zapfen = Farbe/Tag (a), Stäbchen = Dämmerung (b), blinder Fleck = Sehnerv-Austritt (c). In der ==Fovea== sitzen überwiegend ==Zapfen== (schärfstes Sehen), nicht Stäbchen (d falsch).",
    merksatz: "==Zapfen== = Farbe/Tag (Fovea), ==Stäbchen== = Dämmerung.",
  },

  // ---------- Kapitel 5 ----------
  {
    id: "G5-1", teil: "A", kapitel: 5, thema: "Lernen", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Konditionierung== sind korrekt?",
    aussagen: [
      { text: "Bei der klassischen Konditionierung wird ein neutraler Reiz mit einem unkonditionierten Reiz gekoppelt.", istRichtig: true },
      { text: "Bei der operanten Konditionierung wirkt Verhalten über seine Konsequenzen.", istRichtig: true },
      { text: "Extinktion (Löschung) tritt auf, wenn der konditionierte Reiz wiederholt ohne den unkonditionierten dargeboten wird.", istRichtig: true },
      { text: "Positive Verstärkung bedeutet, einen unangenehmen Reiz hinzuzufügen.", istRichtig: false },
    ],
    erklaerung: "Klassisch = Reiz-Reiz-Kopplung (a), operant = Verhalten-Konsequenz (b), Extinktion durch Weglassen des US (c). Positive Verstärkung heißt, etwas ==Angenehmes hinzuzufügen== (d falsch — das Beschriebene wäre positive Bestrafung).",
    merksatz: "Klassisch = ==Reiz-Reiz==, operant = ==Verhalten-Konsequenz==; pos. Verstärkung = ==Angenehmes dazu==.",
  },
  {
    id: "G5-2", teil: "A", kapitel: 5, thema: "Verstärkung", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Verstärkung und Bestrafung== sind korrekt?",
    aussagen: [
      { text: "Negative Verstärkung entfernt einen unangenehmen Reiz und erhöht dadurch das Verhalten.", istRichtig: true },
      { text: "Bestrafung zielt darauf ab, ein Verhalten zu verringern.", istRichtig: true },
      { text: "Bei negativer Bestrafung wird ein angenehmer Reiz entzogen.", istRichtig: true },
      { text: "Verstärkung und Bestrafung führen beide zu einer Zunahme des Verhaltens.", istRichtig: false },
    ],
    erklaerung: "Negative Verstärkung = Unangenehmes weg → Verhalten ↑ (a). Bestrafung senkt Verhalten (b), negative Bestrafung = Angenehmes entziehen (c). ==Verstärkung erhöht, Bestrafung senkt== — nicht beide erhöhen (d falsch).",
    merksatz: "==Verstärkung → Verhalten ↑==, ==Bestrafung → Verhalten ↓==. negativ = etwas wird weggenommen.",
  },
  {
    id: "G5-3", teil: "A", kapitel: 5, thema: "Gedächtnis", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Gedächtnis== sind korrekt?",
    aussagen: [
      { text: "Das Kurzzeit-/Arbeitsgedächtnis hat eine begrenzte Kapazität (ca. 7 ± 2 Einheiten).", istRichtig: true },
      { text: "Prozedurales Gedächtnis (Fertigkeiten) gehört zum impliziten Gedächtnis.", istRichtig: true },
      { text: "Das episodische Gedächtnis speichert persönlich erlebte Ereignisse.", istRichtig: true },
      { text: "Das sensorische Register speichert Informationen über mehrere Stunden.", istRichtig: false },
    ],
    erklaerung: "KZG ≈ 7 ± 2 (a), prozedural = implizit (b), episodisch = Erlebtes (c). Das ==sensorische Register== hält Information nur ==Millisekunden bis ~1 Sekunde==, nicht Stunden (d falsch).",
    merksatz: "==sensorisch (ms) → KZG (7±2) → LZG==; prozedural = implizit, episodisch = Erlebtes.",
  },
  {
    id: "G5-4", teil: "A", kapitel: 2, thema: "Gestaltpsychologie", quelle: "generiert", schwierigkeit: 2,
    beleg: "Kap. 2.4.2 (Gestaltpsychologie), S. 41",
    stem: "Welche Aussagen zu den ==Gestaltgesetzen== sind korrekt?",
    aussagen: [
      { text: "Nach dem Gesetz der Nähe werden nahe beieinanderliegende Elemente als zusammengehörig gesehen.", istRichtig: true },
      { text: "Das Gesetz der Ähnlichkeit gruppiert ähnliche Elemente.", istRichtig: true },
      { text: "Wahrnehmung ist ein rein passives Abbild der Reize ohne Organisation.", istRichtig: false },
      { text: "Nach dem Gesetz der Geschlossenheit werden unvollständige Figuren ergänzt.", istRichtig: true },
    ],
    erklaerung: "Nähe (a), Ähnlichkeit (b) und Geschlossenheit (d) sind Gestaltgesetze. Wahrnehmung ist ==aktiv organisierend==, kein passives Abbild (c falsch).",
    merksatz: "Gestaltgesetze: ==Nähe, Ähnlichkeit, Geschlossenheit==; Wahrnehmung ==organisiert aktiv==.",
  },

  // ---------- Kapitel 6 ----------
  {
    id: "G6-1", teil: "A", kapitel: 6, thema: "Piaget", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Piagets Stadien== sind korrekt?",
    aussagen: [
      { text: "Objektpermanenz entwickelt sich im sensumotorischen Stadium.", istRichtig: true },
      { text: "Im präoperatorischen Stadium zeigt sich Animismus: unbelebte Dinge werden als lebendig gedacht.", istRichtig: true },
      { text: "Die Erhaltung (Mengenkonstanz) wird im konkret-operatorischen Stadium verstanden.", istRichtig: true },
      { text: "Abstrakt-hypothetisches Denken ist schon im präoperatorischen Stadium voll ausgeprägt.", istRichtig: false },
    ],
    erklaerung: "Objektpermanenz = ==sensumotorisch== (a; Achtung: das Skript schreibt sensuMotorisch). Im ==präoperatorischen== Stadium zeigt sich ==Animismus== — unbelebten Dingen werden Absichten und Leben zugeschrieben (b). Die ==Erhaltung== wird im ==konkret-operatorischen== Stadium verstanden (c). Abstrakt-hypothetisches Denken kommt erst im ==formal-operatorischen== Stadium (d falsch).",
    beleg: "Kap. 6.3.1, S. 173–177",
    merksatz: "sensomotorisch=Objektpermanenz · präop.=egozentrisch · konkret=Erhaltung · formal=abstrakt.",
  },
  {
    id: "G6-2", teil: "A", kapitel: 6, thema: "Erikson", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Eriksons psychosozialen Stufen== sind korrekt?",
    aussagen: [
      { text: "Im ersten Lebensjahr geht es um Urvertrauen vs. Urmisstrauen.", istRichtig: true },
      { text: "Das Modell umfasst die gesamte Lebensspanne bis ins Alter.", istRichtig: true },
      { text: "Im Jugendalter steht die Identitätsfindung (Identität vs. Rollenkonfusion) im Zentrum.", istRichtig: true },
      { text: "Jede Stufe ist unabhängig davon, ob die vorherige bewältigt wurde.", istRichtig: false },
    ],
    erklaerung: "1. Jahr = Urvertrauen (a), gesamte Lebensspanne (b), Jugend = Identität (c). Die Stufen ==bauen aufeinander auf== — eine gut gelöste Krise erleichtert die nächste (d falsch).",
    merksatz: "Erikson: ganze Lebensspanne, Stufen ==bauen aufeinander auf==; Jugend = ==Identität==.",
  },
  {
    id: "G6-3", teil: "A", kapitel: 6, thema: "Bindung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Bindungstheorie== sind korrekt?",
    aussagen: [
      { text: "Die 'Fremde Situation' (Ainsworth) erfasst Bindungsmuster.", istRichtig: true },
      { text: "Ein sicher gebundenes Kind lässt sich nach einer Trennung gut trösten.", istRichtig: true },
      { text: "Unsicher-vermeidend gebundene Kinder zeigen bei Belastung kaum Bindungsverhalten.", istRichtig: true },
      { text: "Bindungsmuster sind angeboren und unabhängig von der Feinfühligkeit der Bezugsperson.", istRichtig: false },
    ],
    erklaerung: "Die ==Fremde Situation== misst Bindung (a), sicher = gut tröstbar (b), unsicher-vermeidend = wenig Bindungsverhalten (c). Bindung entsteht v. a. über die ==Feinfühligkeit== der Bezugsperson, ist nicht angeboren (d falsch).",
    merksatz: "==Fremde Situation== (Ainsworth) misst Bindung; sie entsteht über ==Feinfühligkeit==.",
  },

  // ---------- Kapitel 7 ----------
  {
    id: "G7-1", teil: "A", kapitel: 7, thema: "Experimente", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche ==Zuordnungen sozialpsychologischer Experimente== sind korrekt?",
    aussagen: [
      { text: "Milgram ↔ Gehorsam gegenüber Autoritäten.", istRichtig: true },
      { text: "Asch ↔ Konformität (Anpassung an die Mehrheit).", istRichtig: true },
      { text: "Zimbardo ↔ Stanford-Gefängnisexperiment (soziale Rollen).", istRichtig: true },
      { text: "Sherif ↔ Minimalgruppenparadigma.", istRichtig: false },
    ],
    erklaerung: "Milgram = Gehorsam (a), Asch = Konformität (b), Zimbardo = Rollen (c). Das ==Minimalgruppenparadigma== stammt von ==Tajfel==; Sherif steht für den realistischen Gruppenkonflikt (Robbers Cave) (d falsch).",
    merksatz: "Milgram=Gehorsam · Asch=Konformität · Zimbardo=Rollen · ==Tajfel===Minimalgruppen · Sherif=Robbers Cave.",
  },
  {
    id: "G7-2", teil: "A", kapitel: 7, thema: "Konformität", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Konformität und Gehorsam== sind korrekt?",
    aussagen: [
      { text: "Im Milgram-Experiment gingen etwa zwei Drittel bis zur höchsten Schockstufe.", istRichtig: true },
      { text: "Beim Asch-Experiment lag die Fehlerquote allein unter 1 Prozent, in der Gruppe schloss sich rund ein Drittel der falschen Mehrheit an.", istRichtig: true },
      { text: "Beim informationalen sozialen Einfluss passt man sich an, weil man die anderen für besser informiert hält.", istRichtig: true },
      { text: "Gehorsam gegenüber Autorität war bei Milgram die Ausnahme (unter 10 Prozent).", istRichtig: false },
    ],
    erklaerung: "Bei Milgram gingen ==rund 65 Prozent== bis zur höchsten Stufe (a) — also keine Ausnahme (d falsch). Bei ==Asch== lag die Fehlerquote allein ==unter 1 Prozent==, in der Gruppe schloss sich ==etwa ein Drittel== der falschen Mehrheit an (b). Beim ==informationalen== sozialen Einfluss übernimmt man die Meinung, weil man die anderen für ==besser informiert== hält — im Unterschied zum ==normativen== Einfluss, bei dem man dazugehören will (c).",
    merksatz: "==Milgram 65 Prozent== · ==Asch: ein Drittel== · ==normativ== = dazugehören, ==informational== = die wissen es besser.",
    beleg: "Kap. 7.3.2, S. 205–207; Kap. 7.3.4, S. 212",
  },
  {
    id: "G7-4", teil: "A", kapitel: 7, thema: "Stereotype", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Stereotypen, Vorurteilen und Gruppen== sind korrekt?",
    aussagen: [
      { text: "Ein Stereotyp ist die kognitive Komponente (Überzeugung über eine Gruppe).", istRichtig: true },
      { text: "Ein Vorurteil umfasst die (meist negative) emotionale Bewertung.", istRichtig: true },
      { text: "Diskriminierung bezeichnet das konkrete benachteiligende Verhalten.", istRichtig: true },
      { text: "Deindividuation führt in Gruppen typischerweise zu mehr Selbstkontrolle.", istRichtig: false },
    ],
    erklaerung: "Stereotyp = Denken (a), Vorurteil = Fühlen (b), Diskriminierung = Handeln (c). ==Deindividuation== senkt die Selbstaufmerksamkeit → ==weniger== Kontrolle, nicht mehr (d falsch).",
    merksatz: "==Stereotyp (Denken) → Vorurteil (Fühlen) → Diskriminierung (Handeln)==; Deindividuation = weniger Kontrolle.",
  },

  // ---------- Kapitel 8 ----------
  {
    id: "G8-1", teil: "A", kapitel: 8, thema: "Big Five", quelle: "generiert", schwierigkeit: 1,
    stem: "Welche Aussagen zum ==Big-Five-Modell== sind korrekt?",
    aussagen: [
      { text: "Das Modell umfasst fünf Hauptdimensionen der Persönlichkeit.", istRichtig: true },
      { text: "Neurotizismus beschreibt die Neigung zu negativen Emotionen und emotionaler Instabilität.", istRichtig: true },
      { text: "Offenheit für Erfahrungen ist eine der fünf Dimensionen.", istRichtig: true },
      { text: "Die fünf Dimensionen sind zweigeteilt: man hat sie oder man hat sie nicht.", istRichtig: false },
    ],
    erklaerung: "Fünf Dimensionen (a), Neurotizismus = negative Emotionen (b), Offenheit gehört dazu (c). Die Dimensionen sind ==kontinuierlich== (Ausprägung auf einem Spektrum), nicht 'entweder/oder' (d falsch).",
    merksatz: "==OCEAN==, fünf ==Dimensionen== auf einem Kontinuum — nicht 'hat man / hat man nicht'.",
  },
  {
    id: "G8-2", teil: "A", kapitel: 8, thema: "Diagnostik", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==psychologischen Diagnostik== sind korrekt?",
    aussagen: [
      { text: "Projektive Verfahren (z. B. Rorschach) nutzen mehrdeutiges Material.", istRichtig: true },
      { text: "Persönlichkeitsfragebögen liefern Q-Daten, also Selbstbeurteilungen.", istRichtig: true },
      { text: "Das MMPI ist ein projektives Verfahren.", istRichtig: false },
      { text: "Objektive Persönlichkeitstests (OPT) heißen so, weil dabei keine Selbstbeurteilung erfolgt.", istRichtig: true },
    ],
    erklaerung: "Projektive Verfahren nutzen ==mehrdeutiges== Material (a). Fragebögen liefern nach Cattell ==Q-Daten== (Questionnaire), also ==Selbstbeurteilungen== (b). Das ==MMPI== ist ein Fragebogen, kein projektives Verfahren (c falsch). ==OPT== heißen ==objektiv==, weil die Person ihr Verhalten nicht selbst einschätzt, sondern das Verhalten direkt gemessen wird (d).",
    merksatz: "Cattell: ==L-Daten== (Lebensdaten) · ==Q-Daten== (Fragebogen/Selbstbericht) · ==T-Daten== (objektive Tests). ==OPT== = objektiv, weil ==keine Selbstbeurteilung==.",
    beleg: "Kap. 8.3.1, S. 257; Kap. 8.3.4, S. 263",
  },
  {
    id: "G8-3", teil: "A", kapitel: 8, thema: "Gütekriterien", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu den ==Gütekriterien psychologischer Tests== sind korrekt?",
    aussagen: [
      { text: "Objektivität bedeutet, dass das Ergebnis unabhängig vom Testleiter ist.", istRichtig: true },
      { text: "Reliabilität meint die Messgenauigkeit bzw. Zuverlässigkeit.", istRichtig: true },
      { text: "Validität meint, ob der Test das misst, was er messen soll.", istRichtig: true },
      { text: "Objektivität, Reliabilität und Validität zählen zu den Nebengütekriterien.", istRichtig: false },
    ],
    erklaerung: "==Objektivität== = unabhängig vom Testleiter (a), ==Reliabilität== = Messgenauigkeit (b), ==Validität== = misst das Richtige (c). Diese drei sind die ==Hauptgütekriterien==, nicht die Nebengütekriterien (d falsch).",
    merksatz: "==Hauptgütekriterien==: Objektivität, Reliabilität, Validität — in dieser Reihenfolge aufeinander aufbauend.",
    beleg: "Kap. 8.3, S. 257",
  },
];
