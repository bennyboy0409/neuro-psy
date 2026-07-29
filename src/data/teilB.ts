import type { Frage } from "../types";

// ============================================================
//  TEIL B — Methodik / formal-analytisches Denken (generiert)
//  Stil an den offiziellen B-Aufgaben orientiert:
//  kleine Zahlen, Kopfrechnen genügt, kein Taschenrechner.
//  Format: GENAU 4 Aussagen, jede einzeln richtig/falsch,
//  mindestens eine richtig.
// ============================================================

export const teilB: Frage[] = [
  // ---------- Kennwerte ----------
  {
    id: "TB-1", teil: "B", aufgabentyp: "Kennwerte", thema: "Median/Mittel/Modus", quelle: "generiert", schwierigkeit: 1,
    stem: "Gegeben ist die Datenreihe D. Welche Aussagen treffen zu?",
    stemZusatz: "D = [2, 3, 3, 5, 7]",
    aussagen: [
      { text: "Der Modus ist 3.", istRichtig: true },
      { text: "Der Median ist 4.", istRichtig: false },
      { text: "Das arithmetische Mittel ist 4.", istRichtig: true },
      { text: "Die Spannweite ist 7.", istRichtig: false },
    ],
    erklaerung:
      "a) ==Modus== = häufigster Wert. Die 3 kommt zweimal vor, alle anderen einmal → Modus = 3 (richtig). b) ==Median==: die Reihe ist schon sortiert, n = 5 → der ==3. Wert== = 3, nicht 4 (falsch). c) ==Mittel== = (2+3+3+5+7) / 5 = 20 / 5 = ==4== (richtig). d) ==Spannweite== = größter − kleinster Wert = 7 − 2 = ==5==, nicht 7 (falsch).",
    merksatz: "==Modus== = häufigster Wert, ==Median== = mittlerer Wert (sortiert!), ==Spannweite== = max ==minus== min.",
  },
  {
    id: "TB-2", teil: "B", aufgabentyp: "Kennwerte", thema: "Gerade Anzahl", quelle: "generiert", schwierigkeit: 2,
    stem: "Gegeben ist die Datenreihe E mit sechs Werten. Welche Aussagen treffen zu?",
    stemZusatz: "E = [2, 4, 4, 6, 8, 12]",
    aussagen: [
      { text: "Der Median ist 5.", istRichtig: true },
      { text: "Das arithmetische Mittel ist kleiner als der Median.", istRichtig: false },
      { text: "Der Modus ist 6.", istRichtig: false },
      { text: "Die Spannweite beträgt 10.", istRichtig: true },
    ],
    erklaerung:
      "a) n = 6 ist ==gerade== → Median = Mittel der beiden mittleren Werte = (4 + 6) / 2 = ==5== (richtig). b) Summe = 2+4+4+6+8+12 = 36, Mittel = 36 / 6 = ==6==. 6 ist ==größer== als 5, nicht kleiner (falsch). c) Häufigster Wert ist die ==4== (zweimal), nicht 6 (falsch). d) 12 − 2 = ==10== (richtig).",
    merksatz: "Bei ==gerader== Anzahl: Median = ==Durchschnitt der beiden mittleren== Werte.",
  },
  {
    id: "TB-3", teil: "B", aufgabentyp: "Kennwerte", thema: "Ausreißer", quelle: "generiert", schwierigkeit: 2,
    stem: "Die Datenreihe F enthält einen sehr hohen Wert (Ausreißer). Welche Aussagen treffen zu?",
    stemZusatz: "F = [3, 4, 5, 6, 32]",
    aussagen: [
      { text: "Das arithmetische Mittel beträgt 10.", istRichtig: true },
      { text: "Der Median beträgt 5.", istRichtig: true },
      { text: "Der Median wird durch den Ausreißer 32 stark nach oben gezogen.", istRichtig: false },
      { text: "Vier der fünf Werte liegen unter dem arithmetischen Mittel.", istRichtig: true },
    ],
    erklaerung:
      "a) Summe = 3+4+5+6+32 = ==50==, Mittel = 50 / 5 = ==10== (richtig). b) Sortiert, n = 5 → 3. Wert = ==5== (richtig). c) Der Median zählt nur die ==Position==, nicht die Höhe des Werts — er bleibt bei 5, egal ob dort 32 oder 300 steht. Der ==Mittelwert== ist der empfindliche Kennwert (falsch). d) Unter 10 liegen 3, 4, 5 und 6 → ==vier== Werte (richtig).",
    merksatz: "==Ausreißer== verzerren den ==Mittelwert==, der ==Median== bleibt stabil.",
  },
  {
    id: "TB-4", teil: "B", aufgabentyp: "Kennwerte", thema: "Quartile/IQR", quelle: "generiert", schwierigkeit: 3,
    stem: "Gegeben ist die Datenreihe G. Q1 = Median der unteren Hälfte, Q3 = Median der oberen Hälfte. Welche Aussagen treffen zu?",
    stemZusatz: "G = [1, 3, 5, 7, 9, 11, 13, 15]",
    aussagen: [
      { text: "Der Median beträgt 8.", istRichtig: true },
      { text: "Der Interquartilsabstand (Q3 − Q1) beträgt 8.", istRichtig: true },
      { text: "Die Spannweite beträgt 15.", istRichtig: false },
      { text: "Mittelwert und Median sind gleich groß.", istRichtig: true },
    ],
    erklaerung:
      "a) n = 8 (gerade) → Median = (7 + 9) / 2 = ==8== (richtig). b) Untere Hälfte [1, 3, 5, 7] → Q1 = (3+5)/2 = ==4==; obere Hälfte [9, 11, 13, 15] → Q3 = (11+13)/2 = ==12==; IQR = 12 − 4 = ==8== (richtig). c) Spannweite = 15 − 1 = ==14==, nicht 15 (falsch — Spannweite ist die ==Differenz==, nicht der größte Wert). d) Summe = 64, Mittel = 64 / 8 = ==8== = Median (richtig, die Reihe ist symmetrisch).",
    merksatz: "==IQR== = Q3 − Q1 = die ==mittleren 50 %==. Erst halbieren, dann in jeder Hälfte den Median suchen.",
  },

  // ---------- Datenauswertung ----------
  {
    id: "TB-5", teil: "B", aufgabentyp: "Datenauswertung", thema: "Häufigkeiten zählen", quelle: "generiert", schwierigkeit: 1,
    stem: "Zehn Personen beantworten eine Frage mit 1 = stimme zu, 2 = keine Meinung, 3 = stimme nicht zu. Welche Aussagen treffen für die Daten A zu?",
    stemZusatz: "A = { 1, 2, 1, 3, 2, 1, 1, 3, 2, 1 }",
    aussagen: [
      { text: "Die Antwort 1 wurde genau so oft gegeben wie 2 und 3 zusammen.", istRichtig: true },
      { text: "Der Modus ist 1.", istRichtig: true },
      { text: "Die Antwort 3 macht 30 % aller Antworten aus.", istRichtig: false },
      { text: "Die Antwort 2 wurde viermal gegeben.", istRichtig: false },
    ],
    erklaerung:
      "Auszählen: ==1 → 5×==, ==2 → 3×==, ==3 → 2×== (zusammen 10 ✓). a) 5 = 3 + 2 → genau gleich viele (richtig). b) 5 ist die größte Häufigkeit → ==Modus = 1== (richtig). c) 2 von 10 = ==20 %==, nicht 30 % (falsch). d) Die 2 kam ==dreimal== vor (falsch).",
    merksatz: "Erst eine ==Strichliste== pro Antwortmöglichkeit machen, dann erst die Aussagen prüfen.",
  },
  {
    id: "TB-6", teil: "B", aufgabentyp: "Datenauswertung", thema: "Antwortmuster", quelle: "generiert", schwierigkeit: 3,
    stem: "Vier Fragen werden von vier Personen bearbeitet, jeweils mit 1 = stimme zu, 2 = keine Meinung, 3 = stimme nicht zu. Welche Aussagen treffen für die Daten B zu? (Reihenfolge je Person: Frage 1; 2; 3; 4)",
    stemZusatz: "B = { (2;1;1;3) (1;1;2;2) (3;1;1;1) (2;2;1;3) }",
    aussagen: [
      { text: "Frage 2 und Frage 3 erhielten gleich viele Zustimmungen.", istRichtig: true },
      { text: "„Stimme zu“ war insgesamt die häufigste Antwort.", istRichtig: true },
      { text: "„Stimme nicht zu“ kam insgesamt fünfmal vor.", istRichtig: false },
      { text: "Frage 1 erhielt mehr Zustimmungen als Frage 4.", istRichtig: false },
    ],
    erklaerung:
      "==Spalten== auszählen (Zustimmung = die 1er): F1 = 1, F2 = 3, F3 = 3, F4 = 1. a) F2 = F3 = ==3== (richtig). b) Gesamt: ==1 → 8×==, 2 → 5×, 3 → 3× (zusammen 16 = 4 Personen × 4 Fragen ✓) → „stimme zu“ ist am häufigsten (richtig). c) Die 3 kam ==dreimal== vor, nicht fünfmal (falsch — fünfmal kam die 2). d) F1 = 1 und F4 = 1 → ==gleich viele==, nicht mehr (falsch).",
    merksatz: "In der Klammer steht eine ==Person==, gefragt ist meist die ==Frage== — also ==spaltenweise== zählen.",
  },

  // ---------- Tabellen lesen ----------
  {
    id: "TB-7", teil: "B", aufgabentyp: "Tabellen lesen", thema: "Kreuztabelle", quelle: "generiert", schwierigkeit: 2,
    stem: "Die Tabelle zeigt das Prüfungsergebnis von 50 Personen. Welche Aussagen treffen zu?",
    tabelle: {
      kopf: ["", "männlich", "weiblich", "Gesamt"],
      zeilen: [
        ["bestanden", "12", "18", "30"],
        ["nicht bestanden", "8", "12", "20"],
        ["Gesamt", "20", "30", "50"],
      ],
    },
    aussagen: [
      { text: "Insgesamt haben 60 % der Personen bestanden.", istRichtig: true },
      { text: "Bei den männlichen Personen liegt die Bestehensquote bei 60 %.", istRichtig: true },
      { text: "Die Bestehensquote der weiblichen Personen ist höher als die der männlichen.", istRichtig: false },
      { text: "Absolut haben mehr weibliche als männliche Personen bestanden.", istRichtig: true },
    ],
    erklaerung:
      "a) 30 von 50 = 30 / 50 = ==0,6 = 60 %== (richtig). b) 12 von 20 = ==60 %== (richtig). c) Weiblich: 18 von 30 = ==60 %== — also ==gleich==, nicht höher (falsch). d) 18 > 12 → in ==absoluten Zahlen== mehr, obwohl die Quote gleich ist (richtig).",
    merksatz: "==Quote== = Zeile / Spaltensumme. ==Absolute Zahl== und ==Prozent== können verschiedene Geschichten erzählen.",
  },
  {
    id: "TB-8", teil: "B", aufgabentyp: "Tabellen lesen", thema: "Anteile vergleichen", quelle: "generiert", schwierigkeit: 2,
    stem: "Die Tabelle zeigt Anmeldungen und Abschlüsse in drei Kursen. Welche Aussagen treffen zu?",
    tabelle: {
      kopf: ["", "Kurs A", "Kurs B", "Kurs C"],
      zeilen: [
        ["angemeldet", "40", "25", "35"],
        ["abgeschlossen", "30", "20", "7"],
      ],
    },
    aussagen: [
      { text: "Insgesamt haben sich 100 Personen angemeldet.", istRichtig: true },
      { text: "Kurs C hat die niedrigste Abschlussquote.", istRichtig: true },
      { text: "Kurs B hat die höchste Abschlussquote.", istRichtig: true },
      { text: "In absoluten Zahlen haben in Kurs A die meisten Personen abgeschlossen.", istRichtig: true },
    ],
    erklaerung:
      "a) 40 + 25 + 35 = ==100== (richtig). Quoten: A = 30/40 = ==75 %==, B = 20/25 = ==80 %==, C = 7/35 = ==20 %==. b) 20 % ist die kleinste Quote (richtig). c) 80 % ist die größte Quote (richtig). d) Absolut: 30 > 20 > 7 → Kurs A (richtig). Hier sind ausnahmsweise ==alle vier== Aussagen richtig.",
    merksatz: "==Quote== immer durch die ==eigene== Anmeldezahl teilen — nie zwei absolute Zahlen direkt vergleichen.",
  },

  // ---------- Skalenniveau ----------
  {
    id: "TB-9", teil: "B", aufgabentyp: "Skalenniveau", thema: "Skalen erkennen", quelle: "generiert", schwierigkeit: 2,
    stem: "==Nominal== = nur Kategorien, ==ordinal== = Rangordnung, ==intervall== = gleiche Abstände, ==verhältnis== = zusätzlich absoluter Nullpunkt. Welche Zuordnungen sind korrekt?",
    aussagen: [
      { text: "Die Schulnote (1 bis 5) ist mindestens ordinalskaliert.", istRichtig: true },
      { text: "Die Temperatur in Grad Celsius ist verhältnisskaliert.", istRichtig: false },
      { text: "Das Geschlecht ist nominalskaliert.", istRichtig: true },
      { text: "Die Körpergröße in cm ist nur ordinalskaliert.", istRichtig: false },
    ],
    erklaerung:
      "a) Noten bilden eine ==Rangordnung== (1 besser als 2), also mindestens ordinal (richtig). b) Grad Celsius hat ==keinen absoluten Nullpunkt== (0 °C heißt nicht „keine Wärme“) → nur ==Intervallskala== (falsch). c) Kategorien ohne Rangordnung → ==nominal== (richtig). d) Körpergröße hat gleiche Abstände ==und== einen echten Nullpunkt → ==Verhältnisskala==, das höchste Niveau (falsch).",
    merksatz: "Merkreihe ==NOIV==: Nominal → Ordinal → Intervall → Verhältnis. ==Echter Nullpunkt== = Verhältnisskala.",
  },
  {
    id: "TB-10", teil: "B", aufgabentyp: "Skalenniveau", thema: "Ordinalskala", quelle: "generiert", schwierigkeit: 2,
    stem: "Bei einem Wettlauf werden nur die Platzierungen festgehalten (1., 2., 3. …). Eine ==Ordinalskala== bildet eine Rangordnung ab, sagt aber nichts über die ==Abstände==. Welche Aussagen treffen zu?",
    aussagen: [
      { text: "Man darf sagen, dass Platz 1 besser war als Platz 3.", istRichtig: true },
      { text: "Der Abstand zwischen Platz 1 und 2 ist genauso groß wie zwischen Platz 2 und 3.", istRichtig: false },
      { text: "Der Median der Platzierungen ist ein sinnvoller Kennwert.", istRichtig: true },
      { text: "Ein arithmetisches Mittel der Platzierungen ist streng genommen nicht zulässig.", istRichtig: true },
    ],
    erklaerung:
      "a) ==Rangordnung== ist erlaubt (richtig). b) Der Erste kann 10 Sekunden vor dem Zweiten liegen und der Zweite 1 Sekunde vor dem Dritten — die ==Abstände sind unbekannt== (falsch). c) Der Median braucht nur eine ==Reihenfolge==, also ordinal erlaubt (richtig). d) Das Mittel setzt ==gleiche Abstände== voraus (Intervallniveau) und ist ordinal nicht zulässig (richtig).",
    merksatz: "==Ordinal==: Reihenfolge ja, ==Abstände nein== → ==Median== erlaubt, ==Mittelwert== nicht.",
  },
  {
    id: "TB-11", teil: "B", aufgabentyp: "Skalenniveau", thema: "Nominalskala", quelle: "generiert", schwierigkeit: 3,
    stem: "Eine ==Nominalskala== bildet nur Gleichheit/Unterschiedlichkeit ab: gleiche Kategorie = gleiche Zahl, verschiedene Kategorie = verschiedene Zahl; die Höhe der Zahl ist egal. Welche Skalierungen der Haarfarbe sind korrekt?",
    tabelle: {
      kopf: ["", "P1", "P2", "P3", "P4", "P5"],
      zeilen: [
        ["Haarfarbe", "blond", "braun", "blond", "schwarz", "braun"],
        ["Skalierung A", "1", "2", "1", "3", "2"],
        ["Skalierung B", "7", "7", "7", "7", "7"],
        ["Skalierung C", "5", "9", "5", "2", "9"],
        ["Skalierung D", "1", "2", "3", "4", "5"],
      ],
    },
    aussagen: [
      { text: "Skalierung A ist korrekt.", istRichtig: true },
      { text: "Skalierung B ist korrekt.", istRichtig: false },
      { text: "Skalierung C ist korrekt.", istRichtig: true },
      { text: "Skalierung D ist korrekt.", istRichtig: false },
    ],
    erklaerung:
      "Regel: ==P1 = P3 (beide blond)== und ==P2 = P5 (beide braun)==, P4 (schwarz) muss eine eigene Zahl haben. a) A: 1, 2, 1, 3, 2 → passt (richtig). b) B gibt ==allen dieselbe 7==, unterscheidet also nicht zwischen verschiedenen Farben (falsch). c) C: 5, 9, 5, 2, 9 → blond = 5/5, braun = 9/9, schwarz = 2 → passt; dass die Zahlen krumm sind, stört nicht (richtig). d) D gibt blond zwei ==verschiedene== Zahlen (1 und 3) (falsch).",
    merksatz: "==Nominal==: gleich = gleiche Zahl, verschieden = verschiedene Zahl. ==Welche== Zahl ist egal.",
  },

  // ---------- Codierung ----------
  {
    id: "TB-12", teil: "B", aufgabentyp: "Codierung", thema: "Dummy-Codierung", quelle: "generiert", schwierigkeit: 2,
    stem: "Eine ==Dummy-Codierung== ist eine 0/1-Codierung: pro Ausprägung ==vorhanden = 1 / nicht vorhanden = 0==. Die Variable Ausbildungsabschluss hat vier Stufen (Pflichtschule; Lehre; Matura; Studium). Welche Codierung erhält eine Person mit ==Lehre==? (Reihenfolge wie oben)",
    aussagen: [
      { text: "0  1  0  0", istRichtig: true },
      { text: "1  0  0  0", istRichtig: false },
      { text: "0  0  1  0", istRichtig: false },
      { text: "1  1  0  0", istRichtig: false },
    ],
    erklaerung:
      "Die Reihenfolge ist Pflichtschule; ==Lehre==; Matura; Studium. „Lehre“ ist die ==zweite== Stelle → dort eine ==1==, überall sonst ==0== → ==0 1 0 0== (a richtig). b) setzt Pflichtschule, c) setzt Matura, d) setzt zwei Stufen gleichzeitig — eine Person hat aber nur ==einen== Abschluss (alle falsch).",
    merksatz: "==Dummy== = genau ==eine 1== an der Stelle der zutreffenden Kategorie, sonst nur ==Nullen==.",
  },
  {
    id: "TB-13", teil: "B", aufgabentyp: "Codierung", thema: "Umpolen", quelle: "generiert", schwierigkeit: 2,
    stem: "Ein Item auf einer Skala von 1 bis 5 muss ==umgepolt== werden. Dafür gilt: neuer Wert = 6 − alter Wert. Welche Aussagen treffen zu?",
    aussagen: [
      { text: "Aus dem Wert 2 wird der Wert 4.", istRichtig: true },
      { text: "Aus dem Wert 5 wird der Wert 0.", istRichtig: false },
      { text: "Der Wert 3 bleibt unverändert.", istRichtig: true },
      { text: "Allgemein gilt: neuer Wert = (Maximum + Minimum) − alter Wert.", istRichtig: true },
    ],
    erklaerung:
      "a) 6 − 2 = ==4== (richtig). b) 6 − 5 = ==1==, nicht 0 — die Skala beginnt ja bei 1 (falsch). c) 6 − 3 = ==3==, die ==Mitte bleibt liegen== (richtig). d) Maximum + Minimum = 5 + 1 = ==6== — genau die Konstante aus der Formel (richtig).",
    merksatz: "==Umpolen==: Konstante = ==Max + Min==, dann Konstante ==minus== alter Wert. Die Mitte bleibt gleich.",
  },

  // ---------- Mengenlogik ----------
  {
    id: "TB-14", teil: "B", aufgabentyp: "Mengenlogik", thema: "UND/ODER/Schnittmenge", quelle: "generiert", schwierigkeit: 2,
    stem: "Von 50 Schülerinnen und Schülern lernen 30 Spanisch, 20 Französisch und 8 lernen beide Sprachen. Welche Aussagen treffen zu?",
    aussagen: [
      { text: "42 Personen lernen mindestens eine der beiden Sprachen.", istRichtig: true },
      { text: "8 Personen lernen keine der beiden Sprachen.", istRichtig: true },
      { text: "22 Personen lernen nur Spanisch.", istRichtig: true },
      { text: "12 Personen lernen Spanisch, aber nicht Französisch.", istRichtig: false },
    ],
    erklaerung:
      "a) ==Mindestens eine== = 30 + 20 − 8 = ==42== (die 8 wurden doppelt gezählt, richtig). b) 50 − 42 = ==8== lernen keine (richtig). c) Nur Spanisch = 30 − 8 = ==22== (richtig). d) Spanisch ohne Französisch ist genau „nur Spanisch“ = ==22==. Die 12 sind „nur ==Französisch==“ (20 − 8) (falsch).",
    merksatz: "==A oder B== = A + B ==minus== beide. ==Nur A== = A ==minus== beide.",
  },
  {
    id: "TB-15", teil: "B", aufgabentyp: "Mengenlogik", thema: "UND/NICHT", quelle: "generiert", schwierigkeit: 3,
    stem: "Regel: Zugelassen wird, wer die Prüfung bestanden hat ==UND== das Formular abgegeben hat. Welche Aussagen folgen zwingend aus dieser Regel?",
    aussagen: [
      { text: "Wer das Formular abgegeben, aber die Prüfung nicht bestanden hat, wird nicht zugelassen.", istRichtig: true },
      { text: "„Nicht zugelassen“ heißt: Prüfung nicht bestanden ODER Formular nicht abgegeben.", istRichtig: true },
      { text: "Wer die Prüfung bestanden hat, wird auf jeden Fall zugelassen.", istRichtig: false },
      { text: "Wer nicht zugelassen wurde, hat sicher beide Bedingungen nicht erfüllt.", istRichtig: false },
    ],
    erklaerung:
      "a) Bei ==UND== müssen ==beide== Bedingungen erfüllt sein — eine allein reicht nicht (richtig). b) Die Verneinung von „A UND B“ ist „==nicht A ODER nicht B==“ — es genügt, dass ==eine== Bedingung fehlt (richtig). c) Ohne Formular keine Zulassung, also nicht „auf jeden Fall“ (falsch). d) Es reicht ==eine== fehlende Bedingung; beide müssen nicht fehlen (falsch).",
    merksatz: "Verneinung von ==UND== wird zu ==ODER==: „nicht (A und B)“ = „nicht A oder nicht B“.",
  },

  // ---------- Wahrscheinlichkeit ----------
  {
    id: "TB-16", teil: "B", aufgabentyp: "Wahrscheinlichkeit", thema: "Laplace", quelle: "generiert", schwierigkeit: 1,
    stem: "In einer Urne liegen 3 rote, 4 blaue und 5 grüne Kugeln. Es wird ==eine== Kugel blind gezogen. Welche Aussagen treffen zu?",
    aussagen: [
      { text: "P(rot) = 0,25", istRichtig: true },
      { text: "P(grün) = 5/12", istRichtig: true },
      { text: "P(nicht grün) = 7/12", istRichtig: true },
      { text: "P(rot oder blau) = 1/2", istRichtig: false },
    ],
    erklaerung:
      "==Gesamt== = 3 + 4 + 5 = ==12==. a) 3/12 = 1/4 = ==0,25== (richtig). b) 5/12 (richtig). c) ==Gegenwahrscheinlichkeit==: 1 − 5/12 = ==7/12== (richtig). d) rot oder blau = (3 + 4)/12 = ==7/12==, das ist mehr als 1/2 = 6/12 (falsch).",
    merksatz: "==P== = günstige / ==alle==. ==Nicht A== = 1 − P(A). Sich ausschließende Fälle darf man ==addieren==.",
  },
  {
    id: "TB-17", teil: "B", aufgabentyp: "Wahrscheinlichkeit", thema: "Zwei Versuche", quelle: "generiert", schwierigkeit: 2,
    stem: "Eine faire Münze (Kopf/Zahl) wird ==zweimal== geworfen. Welche Aussagen treffen zu?",
    aussagen: [
      { text: "P(zweimal Kopf) = 1/4", istRichtig: true },
      { text: "P(mindestens einmal Kopf) = 1/2", istRichtig: false },
      { text: "P(genau einmal Kopf) = 1/2", istRichtig: true },
      { text: "Der zweite Wurf wird vom Ergebnis des ersten Wurfs beeinflusst.", istRichtig: false },
    ],
    erklaerung:
      "Die vier gleich wahrscheinlichen Fälle sind ==KK, KZ, ZK, ZZ==. a) Nur KK → ==1/4== (richtig; auch 1/2 · 1/2). b) Alles außer ZZ → 3 von 4 = ==3/4==, nicht 1/2 (falsch). c) KZ und ZK → 2 von 4 = ==1/2== (richtig). d) Münzwürfe sind ==unabhängig== — die Münze hat kein Gedächtnis (falsch).",
    merksatz: "Bei zwei Würfen ==alle 4 Fälle aufschreiben==. „Mindestens einmal“ = ==1 − keinmal==.",
  },

  // ---------- Formeln ----------
  {
    id: "TB-18", teil: "B", aufgabentyp: "Formel einsetzen", thema: "Mittelwert-Formel", quelle: "generiert", schwierigkeit: 2,
    stem: "Für das arithmetische Mittel gilt x̄ = (1/n) · ΣXᵢ. Gegeben ist die Reihe X. Welche Aussagen treffen zu?",
    stemZusatz: "X = [4, 6, 8, 10, 12]",
    aussagen: [
      { text: "ΣXᵢ = 40", istRichtig: true },
      { text: "x̄ = 8", istRichtig: true },
      { text: "Σ(Xᵢ − x̄) = 0", istRichtig: true },
      { text: "Addiert man zu jedem Wert 2, steigt x̄ auf 10.", istRichtig: true },
    ],
    erklaerung:
      "a) 4+6+8+10+12 = ==40== (richtig). b) 40 / 5 = ==8== (richtig). c) Abweichungen: −4, −2, 0, +2, +4 → Summe ==0==; das gilt ==immer==, weil der Mittelwert der Schwerpunkt ist (richtig). d) Neue Reihe [6, 8, 10, 12, 14], Summe = 50, 50 / 5 = ==10== — eine Konstante ==verschiebt== den Mittelwert um genau diese Konstante (richtig). Hier sind ==alle vier== Aussagen richtig.",
    merksatz: "==Summe der Abweichungen vom Mittelwert = 0==. Plus c bei allen Werten ⇒ Mittelwert ==plus c==.",
  },
  {
    id: "TB-19", teil: "B", aufgabentyp: "Formel einsetzen", thema: "Summen-Rechenregeln", quelle: "generiert", schwierigkeit: 3,
    stem: "Es gilt Σ(Xᵢ + c) = ΣXᵢ + n·c und Σ(c·Xᵢ) = c·ΣXᵢ. Gegeben: n = 6, ΣXᵢ = 30, c = 4. Welche Aussagen treffen zu?",
    aussagen: [
      { text: "Σ(Xᵢ + 4) = 54", istRichtig: true },
      { text: "Σ(Xᵢ + 4) = 34", istRichtig: false },
      { text: "Σ4 (über i = 1 bis 6) = 4", istRichtig: false },
      { text: "Σ(2·Xᵢ) = 32", istRichtig: false },
    ],
    erklaerung:
      "a) 30 + ==6 · 4== = 30 + 24 = ==54== (richtig). b) Hier wurde die 4 nur ==einmal== addiert statt ==n-mal== — der klassische Fehler (falsch). c) Eine Konstante ==6-mal== aufsummiert ergibt 6 · 4 = ==24==, nicht 4 (falsch). d) Faktor ==vor== die Summe ziehen: 2 · 30 = ==60==, nicht 32 (falsch — hier wurde 2 fälschlich addiert).",
    merksatz: "==Plus c== bei jedem Wert ⇒ ==+ n·c==. ==Mal c== bei jedem Wert ⇒ ==· c== (nur einmal).",
  },
  {
    id: "TB-20", teil: "B", aufgabentyp: "Formel einsetzen", thema: "z-Wert umstellen", quelle: "generiert", schwierigkeit: 2,
    stem: "Der z-Wert ist definiert als z = (x − M) / s. Ein Test hat M = 100 und s = 15. Welche Aussagen treffen zu?",
    aussagen: [
      { text: "Für x = 130 ist z = 2.", istRichtig: true },
      { text: "Für x = 100 ist z = 0.", istRichtig: true },
      { text: "Umgestellt gilt x = z · s + M.", istRichtig: true },
      { text: "Für x = 85 ist z = 1.", istRichtig: false },
    ],
    erklaerung:
      "a) (130 − 100) / 15 = 30 / 15 = ==2== (richtig). b) (100 − 100) / 15 = ==0== — wer genau im Mittel liegt, hat z = 0 (richtig). c) Erst ==mal s==, dann ==plus M== — die korrekte Umstellung (richtig). d) (85 − 100) / 15 = −15 / 15 = ==−1==; unter dem Mittelwert ist z ==negativ== (falsch).",
    merksatz: "==z== sagt: wie viele ==Streuungen== über (+) oder unter (−) dem Mittelwert. ==z = 0== = genau Mittelwert.",
  },

  // ---------- Anteile / Verhältnisse ----------
  {
    id: "TB-21", teil: "B", aufgabentyp: "Anteile", thema: "Verhältnis", quelle: "generiert", schwierigkeit: 1,
    stem: "In einer Gruppe von 60 Personen ist das Verhältnis Frauen : Männer = ==2 : 1==. Welche Aussagen treffen zu?",
    aussagen: [
      { text: "In der Gruppe sind 40 Frauen.", istRichtig: true },
      { text: "Der Anteil der Männer beträgt 1/3.", istRichtig: true },
      { text: "Der Anteil der Frauen beträgt 3/4.", istRichtig: false },
      { text: "Es sind doppelt so viele Männer wie Frauen.", istRichtig: false },
    ],
    erklaerung:
      "2 : 1 heißt ==3 Anteile== insgesamt → ein Anteil = 60 / 3 = ==20==. a) Frauen = 2 · 20 = ==40== (richtig). b) Männer = 20 von 60 = ==1/3== (richtig). c) Frauen = 40 von 60 = ==2/3==, nicht 3/4 (falsch). d) Es ist ==umgekehrt==: doppelt so viele Frauen wie Männer (falsch).",
    merksatz: "Verhältnis a : b ⇒ zuerst ==Anteile addieren== (a + b), dann Gesamtzahl durch diese Summe teilen.",
  },
  {
    id: "TB-22", teil: "B", aufgabentyp: "Anteile", thema: "Prozentveränderung", quelle: "generiert", schwierigkeit: 3,
    stem: "Ein Kurs kostet 200 Euro. Der Preis wird zuerst um ==25 % gesenkt== und danach um ==20 % erhöht==. Welche Aussagen treffen zu?",
    aussagen: [
      { text: "Nach der Senkung kostet der Kurs 150 Euro.", istRichtig: true },
      { text: "Nach der Erhöhung kostet der Kurs wieder 200 Euro.", istRichtig: false },
      { text: "Der Endpreis liegt 10 % unter dem Ausgangspreis.", istRichtig: true },
      { text: "Eine Senkung um 25 % und eine Erhöhung um 20 % heben sich immer gegenseitig auf.", istRichtig: false },
    ],
    erklaerung:
      "a) 25 % von 200 = 50 → 200 − 50 = ==150== (richtig). b) 20 % von ==150== = 30 → 150 + 30 = ==180==, nicht 200 (falsch). c) 180 von 200 = ==90 %==, also ==10 % unter== dem Ausgangspreis (richtig). d) Prozente beziehen sich immer auf den ==aktuellen== Wert; deshalb heben sie sich nicht auf (falsch).",
    merksatz: "Prozent immer vom ==aktuellen Grundwert==. Erst −25 %, dann +20 % ist nicht ±0.",
  },

  // ---------- Begriffe ----------
  {
    id: "TB-23", teil: "B", aufgabentyp: "Begriffe", thema: "Merkmal/Ausprägung", quelle: "generiert", schwierigkeit: 1,
    stem: "Ein ==Merkmal== ist eine Eigenschaft; eine ==Merkmalsausprägung== ist der konkrete Wert, den ein Merkmal annimmt. Studierende werden beschrieben. Welche Aussagen treffen zu?",
    aussagen: [
      { text: "„Geschlecht“ ist ein Merkmal.", istRichtig: true },
      { text: "„21 Jahre“ ist eine Merkmalsausprägung.", istRichtig: true },
      { text: "„Studienrichtung“ ist eine Merkmalsausprägung.", istRichtig: false },
      { text: "„Psychologie“ ist eine Ausprägung des Merkmals Studienrichtung.", istRichtig: true },
    ],
    erklaerung:
      "a) Eine ==Eigenschaft== ohne konkreten Wert → Merkmal (richtig). b) Ein ==konkreter Wert== des Merkmals Alter → Ausprägung (richtig). c) „Studienrichtung“ ist wieder nur die ==Eigenschaft==, also ein ==Merkmal==, keine Ausprägung (falsch). d) Psychologie ist ein ==konkreter Wert== dieses Merkmals (richtig).",
    merksatz: "==Merkmal== = die Frage („Welche Studienrichtung?“), ==Ausprägung== = die Antwort („Psychologie“).",
  },
  {
    id: "TB-24", teil: "B", aufgabentyp: "Begriffe", thema: "UV/AV", quelle: "generiert", schwierigkeit: 2,
    stem: "In einem Experiment wird untersucht, wie sich die Schlafdauer (4 Stunden vs. 8 Stunden) auf die Gedächtnisleistung auswirkt. Die ==unabhängige Variable (UV)== wird von den Forschenden festgelegt, die ==abhängige Variable (AV)== wird gemessen. Welche Aussagen treffen zu?",
    aussagen: [
      { text: "Die Schlafdauer ist die unabhängige Variable.", istRichtig: true },
      { text: "Die Gedächtnisleistung ist die abhängige Variable.", istRichtig: true },
      { text: "Die unabhängige Variable hat hier zwei Ausprägungen.", istRichtig: true },
      { text: "Die abhängige Variable wird von den Forschenden aktiv festgelegt.", istRichtig: false },
    ],
    erklaerung:
      "a) Die Schlafdauer wird von den Forschenden ==vorgegeben== → UV (richtig). b) Die Gedächtnisleistung wird ==gemessen== → AV (richtig). c) Die Stufen sind ==4 Stunden== und ==8 Stunden==, also zwei Ausprägungen (richtig). d) Festgelegt wird nur die ==UV==; die AV ist das ==Ergebnis== und wird gemessen (falsch).",
    merksatz: "==UV== = was ich ==einstelle== (Ursache), ==AV== = was ich ==ablese== (Wirkung).",
  },
];
