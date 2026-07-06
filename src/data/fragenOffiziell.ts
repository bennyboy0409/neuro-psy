import type { Frage } from "../types";

// ============================================================
//  OFFIZIELLE Beispielfragen (Goldstandard)
//  Quelle: avpsy_ba26_Beispielitems.pdf (Uni Wien, Aufnahmepruefung
//  Bachelor Psychologie 2026). Von Hand transkribiert.
//  Erklaerungen sind erlaeuternde Ergaenzungen (nicht im PDF).
// ============================================================

export const fragenOffiziell: Frage[] = [
  // ---------------------- TEIL A ----------------------
  {
    id: "A1",
    teil: "A",
    kapitel: 6,
    thema: "Entwicklung",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Welche der Aussagen über die pränatale Entwicklung eines Menschen ist/sind korrekt?",
    aussagen: [
      { text: "Erst wenn sich die Zygote in der Gebärmutter eingenistet hat, beginnt sie mit der Zellteilung.", istRichtig: false },
      { text: "Sobald sich die Zygote in der Gebärmutter eingenistet hat, beginnt die embryonale Phase.", istRichtig: true },
      { text: "Der erste Herzschlag eines Menschen kann in der fötalen Phase aufgezeichnet werden.", istRichtig: false },
      { text: "In der fötalen Phase liegt der Fokus auf dem Wachstum.", istRichtig: true },
    ],
    erklaerung:
      "Die Zellteilung beginnt schon direkt nach der Befruchtung, also VOR der Einnistung (a falsch). Mit der Einnistung (Nidation) startet die embryonale Phase (b richtig). Der erste Herzschlag liegt bereits in der embryonalen Phase (ca. 5.–6. Woche), nicht erst in der fötalen (c falsch). Ab der fötalen Phase (ab ~9. Woche) geht es v. a. um Wachstum und Reifung (d richtig).",
  },
  {
    id: "A2",
    teil: "A",
    kapitel: 2,
    thema: "Geschichte",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Wobei handelt es sich um korrekte Zuordnungen?",
    aussagen: [
      { text: "Iwan Pawlow ↔ Operante Konditionierung", istRichtig: false },
      { text: "William James ↔ Hermeneutik", istRichtig: false },
      { text: "Franz Joseph Gall ↔ Phrenologie", istRichtig: true },
      { text: "Gustav Theodor Fechner ↔ Psychophysik", istRichtig: true },
    ],
    erklaerung:
      "Pawlow steht für die KLASSISCHE Konditionierung (operante: Thorndike/Skinner) → a falsch. William James gilt als Begründer des Funktionalismus/Pragmatismus, nicht der Hermeneutik → b falsch. Gall begründete die Phrenologie → c richtig. Fechner gilt als Begründer der Psychophysik → d richtig.",
  },
  {
    id: "A3",
    teil: "A",
    kapitel: 3,
    thema: "Methoden & Statistik",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Gegeben sind die Daten D = [1, 2, 3, 5, 6, 7]. Welche/s der Ergebnisse sind/ist in Bezug auf die Daten D korrekt?",
    aussagen: [
      { text: "Median = 4", istRichtig: true },
      { text: "arithmetisches Mittel = 4", istRichtig: true },
      { text: "Interquartilsabstand = 4", istRichtig: true },
      { text: "N = 4", istRichtig: false },
    ],
    erklaerung:
      "Median: bei 6 Werten der Durchschnitt der beiden mittleren (3 und 5) = 4 (a richtig). Mittel: (1+2+3+5+6+7)/6 = 24/6 = 4 (b richtig). Interquartilsabstand: untere Hälfte {1,2,3} → Q1 = 2, obere Hälfte {5,6,7} → Q3 = 6, IQR = 6−2 = 4 (c richtig). N ist die Anzahl der Werte = 6, nicht 4 (d falsch).",
  },
  {
    id: "A4",
    teil: "A",
    kapitel: 3,
    thema: "Methoden & Statistik",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Welche der Anforderungen müssen Hypothesen aufweisen, um als wissenschaftlich zu gelten (nach Hussy et al., 2013)?",
    aussagen: [
      { text: "Begründbarkeit", istRichtig: true },
      { text: "Beweisbarkeit", istRichtig: false },
      { text: "Operationalisierbarkeit", istRichtig: true },
      { text: "präzise und widerspruchsfreie Formulierung", istRichtig: true },
    ],
    erklaerung:
      "Wissenschaftliche Hypothesen müssen begründbar, operationalisierbar (messbar machbar) sowie präzise und widerspruchsfrei formuliert sein (a, c, d richtig). „“ ist KEINE Anforderung – Hypothesen lassen sich nie endgültig beweisen, nur (vorläufig) bestätigen oder widerlegen (b falsch).",
  },
  {
    id: "A5",
    teil: "A",
    kapitel: 4,
    thema: "Biologische Psychologie",
    quelle: "offiziell",
    schwierigkeit: 3,
    stem: "Welche der Aussagen zum Aktionspotenzial von Neuronen ist/sind korrekt?",
    aussagen: [
      { text: "Unter Overshoot versteht man jenen Zustand, bei dem die intrazelluläre Flüssigkeit im Vergleich zur extrazellulären Flüssigkeit positiv geladen ist.", istRichtig: true },
      { text: "Unter Repolarisation versteht man den Abfall der Polarisierung durch den Ausstrom positiv geladener Kaliumionen.", istRichtig: true },
      { text: "Unter Depolarisation versteht man die Veränderung des Membranpotenzials in die negative Richtung.", istRichtig: false },
      { text: "Sowohl exzitatorische als auch inhibitorische Signale steigern die Wahrscheinlichkeit dafür, dass ein Aktionspotenzial ausgelöst wird.", istRichtig: false },
    ],
    erklaerung:
      "Overshoot: kurzzeitig ist das Zellinnere positiver als außen (a richtig). Repolarisation: Kalium (K⁺) strömt aus, die Ladung wird wieder negativer (b richtig). Depolarisation geht in die POSITIVE Richtung (weniger negativ), nicht negativ (c falsch). Inhibitorische (hemmende) Signale SENKEN die Wahrscheinlichkeit eines Aktionspotenzials (d falsch).",
  },
  {
    id: "A6",
    teil: "A",
    kapitel: 6,
    thema: "Entwicklung",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Eriksons Stufenmodell der psychosozialen Entwicklung beschreibt verschiedene Entwicklungsaufgaben. Was trifft auf diese zu?",
    aussagen: [
      { text: "Positives Lösen der aktuellen Krise ist die Grundlage für das Lösen weiterer Entwicklungsaufgaben in anderen Stufen.", istRichtig: true },
      { text: "Im frühen Erwachsenenalter besteht die Herausforderung aus dem Spannungsverhältnis von: Autonomie versus Selbstzweifel.", istRichtig: false },
      { text: "Im ersten Lebensjahr steht das Entwickeln von Vertrauen an erster Stelle.", istRichtig: true },
      { text: "Im Seniorenalter besteht die Krise aus Intimität versus Isolation.", istRichtig: false },
    ],
    erklaerung:
      "Bei Erikson baut jede Stufe auf der vorigen auf – eine gut gelöste Krise erleichtert die nächsten (a richtig). Im 1. Lebensjahr geht es um Urvertrauen vs. Urmisstrauen (c richtig). Im frühen Erwachsenenalter ist die Krise Intimität vs. Isolation (nicht „“) (b falsch). Im Seniorenalter geht es um Integrität vs. Verzweiflung (nicht Intimität vs. Isolation) (d falsch).",
  },
  {
    id: "A7",
    teil: "A",
    kapitel: 5,
    thema: "Lernen",
    quelle: "offiziell",
    schwierigkeit: 3,
    stem: "In welchem/welchen der folgenden Szenarien wird ein Verhalten im Sinne der operanten Konditionierung positiv bestraft?",
    aussagen: [
      { text: "Einem Kind, das ein anderes Kind geschlagen hat, wird sein Lieblingsspielzeug vorübergehend weggenommen.", istRichtig: false },
      { text: "Nachdem eine jugendliche Person beim wöchentlichen Hausputz mitgeholfen hat, wird das bestehende Handyverbot aufgehoben.", istRichtig: false },
      { text: "Ein Hund erhält, nachdem er dem Befehl der Besitzerin Folge geleistet hat, ein Leckerli.", istRichtig: false },
      { text: "Einer Person wird nach einem Ladendiebstahl die Ableistung von Sozialstunden gerichtlich auferlegt.", istRichtig: true },
    ],
    erklaerung:
      "„“ = etwas Unangenehmes wird HINZUGEFÜGT, um ein Verhalten zu verringern. Nur d passt (Sozialstunden werden auferlegt). a = negative Bestrafung (etwas Angenehmes wird entzogen). b = negative Verstärkung (Handyverbot wird entfernt). c = positive Verstärkung (Leckerli wird gegeben).",
  },
  {
    id: "A8",
    teil: "A",
    kapitel: 6,
    thema: "Entwicklung",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Welche der Aussagen bezüglich Piagets Stufenmodell der Entwicklung ist/sind korrekt?",
    aussagen: [
      { text: "Im sensumotorischen Stadium bildet sich die Sprache aus.", istRichtig: false },
      { text: "Im präoperatorischen Stadium lernt das Kind, die Welt in mentalen Repräsentationen abzubilden.", istRichtig: true },
      { text: "Im konkret-operatorischen Stadium können Kinder über abstrakte Theorien und Konzepte nachdenken.", istRichtig: false },
      { text: "Im formal-operatorischen Stadium erlernen Kinder die Prinzipien der Erhaltung.", istRichtig: false },
    ],
    erklaerung:
      "Präoperatorisches Stadium (~2–7 J.): Denken in mentalen Repräsentationen/Symbolen (b richtig). Sprache bildet sich erst gegen Ende des sensumotorischen Stadiums bzw. im Übergang aus (a falsch). Abstraktes/hypothetisches Denken gehört zum FORMAL-operatorischen Stadium (c falsch). Die Erhaltung (Konstanz von Menge/Masse) wird im KONKRET-operatorischen Stadium verstanden (d falsch).",
  },
  {
    id: "A9",
    teil: "A",
    kapitel: 5,
    thema: "Wahrnehmung & Aufmerksamkeit",
    quelle: "offiziell",
    schwierigkeit: 3,
    stem: "Welche der Aussagen zum Cueing-Paradigma ist/sind korrekt?",
    aussagen: [
      { text: "Als abhängige Variable (AV) wurde die Reaktionszeit auf den Zielreiz gemessen.", istRichtig: true },
      { text: "Das Cueing-Paradigma ist ein klassisches Versuchsdesign aus der Gedächtnisforschung.", istRichtig: false },
      { text: "In den validen Bedingungen zeigte der Hinweisreiz immer den Ort an, an dem in der Folge auch der Zielreiz auftauchte.", istRichtig: true },
      { text: "Als endogener Hinweisreiz wurde ein Pfeil in der Mitte des Bildschirms dargeboten.", istRichtig: true },
    ],
    erklaerung:
      "Das Cueing-Paradigma (Posner) stammt aus der AUFMERKSAMKEITSforschung, nicht der Gedächtnisforschung (b falsch). Gemessen wird die Reaktionszeit auf den Zielreiz (a richtig). Valide Bedingung: der Hinweisreiz (Cue) zeigt den korrekten Ort des Zielreizes an (c richtig). Ein zentral dargebotener Pfeil ist ein endogener (Blick nach innen gelenkter) Hinweisreiz (d richtig).",
  },
  {
    id: "A10",
    teil: "A",
    kapitel: 8,
    thema: "Diagnostik",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Welche Arten projektiver Verfahren zum Bestimmen von Persönlichkeitseigenschaften gibt es?",
    aussagen: [
      { text: "Form-Deute-Verfahren", istRichtig: true },
      { text: "Explizite Assoziationstests", istRichtig: false },
      { text: "das Minnesota Multiphasic Personality Inventory (MMPI-2)", istRichtig: false },
      { text: "Verbal-thematische Verfahren", istRichtig: true },
    ],
    erklaerung:
      "Projektive Verfahren nutzen mehrdeutiges Material, in das die Person „“. Dazu zählen Form-Deute-Verfahren (z. B. Rorschach) und verbal-thematische Verfahren (z. B. TAT) (a, d richtig). Projektive Tests arbeiten IMPLIZIT, nicht mit „“ Assoziationstests (b falsch). Das MMPI-2 ist ein Fragebogen (Selbstbericht), kein projektives Verfahren (c falsch).",
  },
  {
    id: "A11",
    teil: "A",
    kapitel: 8,
    thema: "Persönlichkeit",
    quelle: "offiziell",
    schwierigkeit: 1,
    stem: "Welche sind Skalen des sog. Big-Five-Modells?",
    aussagen: [
      { text: "Extraversion", istRichtig: true },
      { text: "Gewissenhaftigkeit", istRichtig: true },
      { text: "Neurotizismus", istRichtig: true },
      { text: "Verträglichkeit", istRichtig: true },
    ],
    erklaerung:
      "Alle vier gehören zu den Big Five (OCEAN): Offenheit, Gewissenhaftigkeit, Extraversion, Verträglichkeit und Neurotizismus. Hier sind vier davon aufgelistet – alle richtig. Die fehlende fünfte Skala ist Offenheit für Erfahrungen.",
  },
  {
    id: "A12",
    teil: "A",
    kapitel: 2,
    thema: "Geschichte",
    quelle: "offiziell",
    schwierigkeit: 3,
    stem: "Welche Ansicht/en über den Körper und die Seele vertraten die Orphiker?",
    aussagen: [
      { text: "Eine Seele braucht nicht zwingend einen Körper.", istRichtig: true },
      { text: "Der Körper wurde gegenüber der Seele als minderwertig betrachtet.", istRichtig: true },
      { text: "Die Seele ist unsterblich.", istRichtig: true },
      { text: "Die Heimat der Seele ist das Diesseits.", istRichtig: false },
    ],
    erklaerung:
      "Die Orphiker sahen die Seele als unsterblich und unabhängig vom Körper an; der Körper galt als „“ der Seele und damit als minderwertig (a, b, c richtig). Die eigentliche Heimat der Seele ist nach dieser Vorstellung das Jenseits, nicht das Diesseits (d falsch).",
  },
  {
    id: "A13",
    teil: "A",
    kapitel: 7,
    thema: "Sozialpsychologie",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Welche der Aussagen zur Sozialpsychologie ist/sind korrekt?",
    aussagen: [
      { text: "Im Unterschied zur Persönlichkeitspsychologie spielen in der Sozialpsychologie situative Faktoren eine wichtige Rolle.", istRichtig: true },
      { text: "Die Soziale-Austausch-Theorie ist ein Erklärungsversuch für den Einfluss von Minderheiten.", istRichtig: false },
      { text: "Sie beschäftigt sich mit Inter- und Intragruppenprozessen.", istRichtig: true },
      { text: "Die Sozialpsychologie beschäftigt sich mit Themen wie Konformität, Stereotypen oder Deindividuation.", istRichtig: true },
    ],
    erklaerung:
      "Die Sozialpsychologie betont die SITUATION (a richtig), untersucht Prozesse zwischen und innerhalb von Gruppen (c richtig) und Themen wie Konformität, Stereotype, Deindividuation (d richtig). Die Soziale-Austausch-Theorie erklärt Beziehungen über Kosten-Nutzen-Abwägungen, NICHT speziell den Einfluss von Minderheiten (b falsch).",
  },
  {
    id: "A14",
    teil: "A",
    kapitel: 4,
    thema: "Biologische Psychologie",
    quelle: "offiziell",
    schwierigkeit: 3,
    stem: "Welche der Zellen befindet/befinden sich in der Retina oder dem Sehnerv?",
    aussagen: [
      { text: "Müller-Zellen", istRichtig: true },
      { text: "Amakrinzellen", istRichtig: true },
      { text: "Ganglienzellen", istRichtig: true },
      { text: "Horizontalzellen", istRichtig: true },
    ],
    erklaerung:
      "Alle vier Zelltypen kommen in der Netzhaut (Retina) vor: Müller-Zellen (Stützzellen), Amakrin- und Horizontalzellen (Verschaltung/Querverbindungen) sowie Ganglienzellen, deren Axone den Sehnerv bilden. Daher sind alle vier richtig.",
  },
  {
    id: "A15",
    teil: "A",
    kapitel: 7,
    thema: "Sozialpsychologie",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Welche der Zuordnungen sozialpsychologischer Experimente ist/sind korrekt?",
    aussagen: [
      { text: "Minimalgruppenparadigma ↔ Experimente von Tajfel", istRichtig: true },
      { text: "Gehorsam gegenüber Autoritäten ↔ Experimente von Milgram", istRichtig: true },
      { text: "Intergruppenprozesse ↔ Experimente von Asch", istRichtig: false },
      { text: "Soziale Rollen ↔ Stanford Gefängnisexperiment", istRichtig: true },
    ],
    erklaerung:
      "Tajfel = Minimalgruppenparadigma (a richtig). Milgram = Gehorsam gegenüber Autoritäten (b richtig). Zimbardo = Stanford-Gefängnisexperiment zu sozialen Rollen (d richtig). Asch untersuchte KONFORMITÄT (Linienurteile), nicht speziell Intergruppenprozesse – diese stehen eher für Sherif/Tajfel (c falsch).",
  },

  // ---------------------- TEIL B ----------------------
  {
    id: "B1",
    teil: "B",
    aufgabentyp: "Datenauswertung",
    thema: "Tabellen lesen",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Vier Fragen werden von fünf Personen bearbeitet und können jeweils mit 1 = stimme zu, 2 = keine Meinung, 3 = stimme nicht zu beantwortet werden. Welche der folgenden Aussagen ist/sind für die erhobenen Daten A zutreffend? (Reihenfolge je Person: Frage 1; Frage 2; Frage 3; Frage 4)",
    stemZusatz: "A = { (1;1;2;1) (2;1;3;1) (3;2;1;1) (1;1;3;3) (2;1;3;1) }",
    aussagen: [
      { text: "Frage 4 erhielt gleich viele Zustimmungen wie Frage 2.", istRichtig: true },
      { text: "„“ war die seltenste Antwort.", istRichtig: false },
      { text: "Die wenigsten Zustimmungen gab es bei Frage 3.", istRichtig: true },
      { text: "Frage 2 erhielt mehr Antworten als Frage 3.", istRichtig: false },
    ],
    erklaerung:
      "Zustimmung (= 1) pro Frage: F1 = 2, F2 = 4, F3 = 1, F4 = 4. Also F4 = F2 = 4 (a richtig) und F3 hat die wenigsten (c richtig). Antworthäufigkeiten insgesamt: „“ (3) kommt 5-mal vor, „“ (2) nur 4-mal – „“ ist die seltenste, nicht „“ (b falsch). Beide Fragen wurden von allen 5 Personen beantwortet, also gleich viele Antworten (d falsch).",
  },
  {
    id: "B2",
    teil: "B",
    aufgabentyp: "Codierung",
    thema: "Statistik-Grundlagen",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Eine „“ ist eine Null-Eins-Codierung kategorialer Variablen. Jede Merkmalsausprägung wird dabei gesondert nach „“ beurteilt. Nehmen Sie an, Sie haben eine Variable mit drei Stufen, z. B. Religion (römisch-katholisch, Islam, ohne Bekenntnis). Welche Kodierung würde eine Person erhalten, für die „“ zutrifft? (Reihenfolge: römisch-katholisch; Islam; ohne Bekenntnis)",
    aussagen: [
      { text: "1  1  0", istRichtig: false },
      { text: "0  0  0", istRichtig: false },
      { text: "0  0  1", istRichtig: true },
      { text: "1  0  0", istRichtig: false },
    ],
    erklaerung:
      "Bei der Reihenfolge (römisch-katholisch; Islam; ohne Bekenntnis) gilt „“. Für eine Person „“ ist nur die dritte Stufe vorhanden: 0  0  1 (c richtig). Alle anderen Muster codieren eine andere oder gar keine Ausprägung.",
  },
  {
    id: "B3",
    teil: "B",
    aufgabentyp: "Begriffe",
    thema: "Statistik-Grundlagen",
    quelle: "offiziell",
    schwierigkeit: 1,
    stem: "Ein Merkmal ist eine Eigenschaft, die zur Beschreibung von Objekten dienen kann. Eine Merkmalsausprägung ist der Wert, den ein Merkmal annehmen kann. Nehmen Sie an, man möchte Euro-Münzen beschreiben. Bei welcher der nachstehenden Angaben handelt es sich um eine Merkmalsausprägung?",
    aussagen: [
      { text: "Material", istRichtig: false },
      { text: "Durchmesser", istRichtig: false },
      { text: "1 Gramm", istRichtig: true },
      { text: "10 Cent", istRichtig: true },
    ],
    erklaerung:
      "„“ und „“ sind MERKMALE (Eigenschaften), noch keine konkreten Werte (a, b falsch). „“ ist eine Ausprägung des Merkmals Gewicht, „“ eine Ausprägung des Merkmals Wert (c, d richtig).",
  },
  {
    id: "B5",
    teil: "B",
    aufgabentyp: "Formel einsetzen",
    thema: "Rechenregeln",
    quelle: "offiziell",
    schwierigkeit: 2,
    stem: "Zu den Regeln für das Rechnen mit Summen gehört auch folgende: Σ(c·Xᵢ) = c·ΣXᵢ, wobei c für eine Konstante steht und Xᵢ für beliebige Werte von X. Wenn man also z. B. jeden Wert Xᵢ mit der Konstante 9 multipliziert, dann bekommt man?",
    aussagen: [
      { text: "9 · (X₁ + X₂ + X₃ + … + Xₙ)", istRichtig: true },
      { text: "Xᵢ · Σ9", istRichtig: false },
      { text: "9 · Σ(9·Xᵢ)", istRichtig: false },
      { text: "9 · ΣXᵢ", istRichtig: true },
    ],
    erklaerung:
      "Σ(9·Xᵢ) = 9·ΣXᵢ – die Konstante 9 darf vor die Summe gezogen werden (d richtig). Und 9·ΣXᵢ ist genau 9·(X₁+X₂+…+Xₙ) (a richtig). Die Varianten b und c verändern den Ausdruck falsch (z. B. multipliziert c zusätzlich noch einmal mit 9).",
  },
  {
    id: "B7",
    teil: "B",
    aufgabentyp: "Skalenniveau",
    thema: "Nominalskala",
    quelle: "offiziell",
    schwierigkeit: 3,
    stem: "Eine Nominalskala bildet nur Gleichheit bzw. Unterschiedlichkeit von Merkmalsausprägungen ab – die Höhe der Zahlen ist egal, gleiche Kategorie = gleiche Zahl, verschiedene Kategorie = verschiedene Zahl. Bei einem Fragebogen wurde die Nationalität der ersten fünf Teilnehmer:innen erhoben. Welche der folgenden Nominalskalierungen der Nationalität ist/sind gemäß dieser Beschreibung korrekt?",
    tabelle: {
      kopf: ["", "TN1", "TN2", "TN3", "TN4", "TN5"],
      zeilen: [
        ["Nationalität", "Deutschland", "Österreich", "Schweiz", "Deutschland", "Italien"],
        ["Skalierung A", "1", "2", "3", "1", "4"],
        ["Skalierung B", "10", "5", "15", "10", "20"],
        ["Skalierung C", "4", "5", "6", "7", "8"],
        ["Skalierung D", "99", "98", "100", "99", "2"],
      ],
    },
    aussagen: [
      { text: "Skalierung D ist korrekt.", istRichtig: true },
      { text: "Skalierung C ist korrekt.", istRichtig: false },
      { text: "Skalierung A ist korrekt.", istRichtig: true },
      { text: "Skalierung B ist korrekt.", istRichtig: true },
    ],
    erklaerung:
      "Regel: TN1 und TN4 (beide Deutschland) müssen dieselbe Zahl haben, alle anderen Nationalitäten verschiedene Zahlen. A (1,2,3,1,4): TN1 = TN4 = 1 ✓ → korrekt. B (10,5,15,10,20): TN1 = TN4 = 10 ✓ → korrekt. D (99,98,100,99,2): TN1 = TN4 = 99 ✓ → korrekt. C (4,5,6,7,8): TN1 = 4, TN4 = 7, obwohl beide Deutschland → falsch.",
  },
  {
    id: "B8",
    teil: "B",
    aufgabentyp: "Formel einsetzen",
    thema: "Verhältnis/Anteil",
    quelle: "offiziell",
    schwierigkeit: 1,
    stem: "Um den Grad der Übereinstimmung (U) zwischen zwei Beobachter:innen zu messen, bildet man das Verhältnis von übereinstimmenden Aussagen zur Gesamtzahl der Aussagen. Nehmen Sie an, die Beobachter:innen stimmen in 90 Fällen überein und in 30 Fällen nicht überein. Der Grad der Übereinstimmung beträgt dann:",
    aussagen: [
      { text: "U = 0,33", istRichtig: false },
      { text: "U = 0,25", istRichtig: false },
      { text: "U = 0,75", istRichtig: true },
      { text: "U = 3,00", istRichtig: false },
    ],
    erklaerung:
      "Gesamtzahl = 90 (übereinstimmend) + 30 (nicht übereinstimmend) = 120. U = übereinstimmend / gesamt = 90/120 = 0,75 (c richtig). 0,33 wäre 30/90, 0,25 wäre 30/120, 3,00 wäre 90/30 – alle falsch.",
  },
];
