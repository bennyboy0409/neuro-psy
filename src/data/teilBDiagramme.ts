import type { Frage } from "../types";

// ============================================================
//  OFFIZIELLE Teil-B-Aufgaben mit Diagrammen (B4, B6, B9)
//  Quelle: avpsy_ba26_Beispielitems.pdf (Uni Wien).
//  Die Abbildungen sind als SVG nachgebaut (Werte aus dem Original).
//  HINWEIS: In Strings bewusst KEINE typografischen Anfuehrungszeichen.
// ============================================================

export const teilBDiagramme: Frage[] = [
  {
    id: "B4",
    teil: "B",
    aufgabentyp: "Diagramm auswerten",
    thema: "Gedächtnis & Alter",
    quelle: "offiziell",
    schwierigkeit: 3,
    stem:
      "Es gibt 2 Arten von Gedächtnis — ein bewusstes (==explizites==) und ein unbewusstes (==implizites==). Versuchspersonen (20 Jahre) erinnern sich im expliziten Test an ==mehr== Items als im impliziten. Über das Alter hinweg verändert sich nur das ==explizite== Gedächtnis: es ==nimmt im Alter ab==. Das implizite bleibt ==stabil==. Welche der Grafiken spiegelt diesen Zusammenhang wider?",
    aussagen: [
      {
        text: "Grafik 1",
        istRichtig: true,
        grafik: {
          art: "linien",
          xLabels: ["20 Jahre", "80 Jahre"],
          yMax: 12,
          yLabel: "Anzahl erinnerter Items",
          serien: [
            { name: "explizit", stil: "voll", werte: [8, 2] },
            { name: "implizit", stil: "gestrichelt", werte: [5, 5] },
          ],
        },
      },
      {
        text: "Grafik 2",
        istRichtig: false,
        grafik: {
          art: "linien",
          xLabels: ["20 Jahre", "80 Jahre"],
          yMax: 8,
          yLabel: "Anzahl erinnerter Items",
          serien: [
            { name: "explizit", stil: "voll", werte: [7, 7] },
            { name: "implizit", stil: "gestrichelt", werte: [6, 2] },
          ],
        },
      },
      {
        text: "Grafik 3",
        istRichtig: false,
        grafik: {
          art: "linien",
          xLabels: ["20 Jahre", "80 Jahre"],
          yMax: 8,
          yLabel: "Anzahl erinnerter Items",
          serien: [
            { name: "explizit", stil: "voll", werte: [7, 5] },
            { name: "implizit", stil: "gestrichelt", werte: [5, 3] },
          ],
        },
      },
      {
        text: "Grafik 4",
        istRichtig: false,
        grafik: {
          art: "linien",
          xLabels: ["20 Jahre", "80 Jahre"],
          yMax: 8,
          yLabel: "Anzahl erinnerter Items",
          serien: [
            { name: "explizit", stil: "voll", werte: [7, 7] },
            { name: "implizit", stil: "gestrichelt", werte: [3, 3] },
          ],
        },
      },
    ],
    erklaerung:
      "Drei Bedingungen muessen GLEICHZEITIG erfuellt sein: (1) bei 20 Jahren liegt ==explizit ueber implizit==, (2) die explizite Linie ==faellt== zum Alter hin ab, (3) die implizite Linie bleibt ==waagrecht==. Nur ==Grafik 1== erfuellt alle drei (8 auf 2 fallend, implizit konstant bei 5). Grafik 2 laesst die falsche Linie fallen (implizit statt explizit). Grafik 3 laesst ==beide== Linien fallen — implizit muesste stabil bleiben. Grafik 4 haelt ==beide== konstant — explizit muesste abfallen.",
    merksatz:
      "Bei Diagrammauswahl: Bedingungen ==einzeln abhaken== (Startabstand, welche Linie faellt, welche bleibt gleich) — die Grafik, die ==alle== erfuellt, ist die richtige.",
  },
  {
    id: "B6",
    teil: "B",
    aufgabentyp: "Diagramm auswerten",
    thema: "Probabilistische Testtheorie",
    quelle: "offiziell",
    schwierigkeit: 3,
    stem:
      "Items psychologischer Tests werden in der ==Probabilistischen Testtheorie== als Kurven dargestellt. Sie zeigen den Zusammenhang zwischen der Eigenschaftsausprägung E (hier: Intelligenz) und der ==Lösungswahrscheinlichkeit== p(+|E). Dabei bedeutet p(+|E) = 0,00: Lösen unmöglich; p(+|E) = 0,50: 50 % Wahrscheinlichkeit; p(+|E) = 1,00: sicheres Lösen. Welche der folgenden Aussagen ist/sind korrekt?",
    grafik: {
      art: "kurven",
      yLabel: "p(+|E)",
      xLabel: "Intelligenz (je höher, desto intelligenter)",
      kurven: [
        { name: "Item A", wendepunkt: -2, stil: "voll" },
        { name: "Item B", wendepunkt: 0.5, stil: "punkte" },
        { name: "Item C", wendepunkt: 2.5, stil: "gestrichelt" },
        { name: "Item D", wendepunkt: 4, stil: "strichpunkt" },
      ],
    },
    aussagen: [
      { text: "Item D ist das schwerste Item.", istRichtig: true },
      { text: "Bei einer Intelligenzausprägung von E = −8 ist es annähernd unmöglich, Item C zu lösen.", istRichtig: true },
      { text: "Item A ist das leichteste Item.", istRichtig: true },
      { text: "Für Item B gilt: p(+|−2) = 0,50", istRichtig: false },
    ],
    erklaerung:
      "Je ==weiter rechts== eine Kurve liegt, desto ==mehr Intelligenz== braucht man fuer dieselbe Loesungswahrscheinlichkeit — also desto ==schwerer== das Item. Item D liegt am weitesten rechts (a richtig), Item A am weitesten links, ist also am ==leichtesten== (c richtig). Bei E = −8 liegen alle Kurven praktisch bei ==0,00== — auch Item C (b richtig). Item B erreicht p = 0,50 erst bei etwa E = ==+0,5==, nicht bei −2 (d falsch): dort liegt Item B noch nahe null.",
    merksatz:
      "Kurve ==weiter rechts== = ==schwereres== Item. Die Schwierigkeit liest man am ==Wendepunkt bei p = 0,50== ab.",
  },
  {
    id: "B9",
    teil: "B",
    aufgabentyp: "Diagramm auswerten",
    thema: "fMRT-Hemisphärendifferenz",
    quelle: "offiziell",
    schwierigkeit: 3,
    stem:
      "In einem Experiment wurde die Aktivierung in beiden Gehirnhälften gemessen. ==Schwarz== = hohe Aktivierung (Wert 50), ==schraffiert== = mittlere Aktivierung (Wert 30), ==weiß== = niedrige Aktivierung (Wert 10). Messwerte: LINKS — Frontal schwarz (50), Parietal schwarz (50), Okzipital schraffiert (30), Temporal weiß (10). RECHTS — Frontal weiß (10), Parietal weiß (10), Okzipital schwarz (50), Temporal schraffiert (30). In welchem/welchen Diagramm/en wird/werden die Differenz des Aktivierungsmusters korrekt dargestellt?",
    angabeHinweis:
      "Im Original steht hier eine fMRT-Abbildung beider Hemisphären. Die Messwerte sind oben vollständig in Textform angegeben — genau damit lässt sich die Aufgabe lösen.",
    aussagen: [
      {
        text: "Diagramm 1",
        istRichtig: false,
        grafik: {
          art: "balken", titel: "RECHTS minus LINKS",
          kategorien: ["temporal", "okzipital", "parietal", "frontal"],
          werte: [0, 0, 40, 20], min: -40, max: 40,
        },
      },
      {
        text: "Diagramm 2",
        istRichtig: true,
        grafik: {
          art: "balken", titel: "LINKS minus RECHTS",
          kategorien: ["temporal", "okzipital", "parietal", "frontal"],
          werte: [-20, -20, 40, 40], min: -40, max: 40,
        },
      },
      {
        text: "Diagramm 3",
        istRichtig: true,
        grafik: {
          art: "balken", titel: "RECHTS minus LINKS",
          kategorien: ["temporal", "okzipital", "parietal", "frontal"],
          werte: [20, 20, -40, -40], min: -40, max: 40,
        },
      },
      {
        text: "Diagramm 4",
        istRichtig: false,
        grafik: {
          art: "balken", titel: "LINKS minus RECHTS",
          kategorien: ["temporal", "okzipital", "parietal", "frontal"],
          werte: [20, 20, -40, -40], min: -40, max: 40,
        },
      },
    ],
    erklaerung:
      "Zuerst die Differenzen ausrechnen — ==LINKS minus RECHTS==: frontal 50−10 = ==+40==, parietal 50−10 = ==+40==, okzipital 30−50 = ==−20==, temporal 10−30 = ==−20==. ==Diagramm 2== zeigt genau das (b richtig). Fuer ==RECHTS minus LINKS== drehen sich alle Vorzeichen um: frontal ==−40==, parietal ==−40==, okzipital ==+20==, temporal ==+20== — das ist ==Diagramm 3== (c richtig). Diagramm 1 passt zu keiner der beiden Rechnungen. Diagramm 4 zeigt zwar die richtigen Zahlen fuer RECHTS minus LINKS, ist aber mit ==LINKS minus RECHTS== ueberschrieben — Titel und Werte widersprechen sich (d falsch).",
    merksatz:
      "Bei Differenz-Diagrammen IMMER zuerst die ==Blickrichtung im Titel== pruefen (A minus B), dann die Vorzeichen. Gleiche Balken + falscher Titel = falsch.",
  },
];
