import type { Frage } from "../types";

// ============================================================
//  NACHZUEGLER Kapitel 4 + 5 — Themen, die in der ersten Runde
//  ausgelassen wurden (Split-Brain, Farbfehlsichtigkeit,
//  Rueckenmark-Details, Augenaufbau, Was-/Wo-Pfad,
//  Enkodierspezifitaet, Recall/Recognition, Amnesie).
//  Format: 4 Aussagen, jede einzeln richtig/falsch, min. 1 richtig.
// ============================================================

export const nachzuegler45: Frage[] = [
  // ---------- Kapitel 4 ----------
  {
    id: "N45-1", teil: "A", kapitel: 4, thema: "Lateralisation", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Split-Brain-Patient:innen== und zur ==Lateralisation== sind korrekt?",
    aussagen: [
      { text: "Bei Split-Brain-Patient:innen sind die Hemisphären getrennt, meist als Folge einer Operation zur Eindämmung epileptischer Anfälle.", istRichtig: true },
      { text: "Die Trennung führt dazu, dass die Betroffenen im Alltag nicht mehr normal gehen, sprechen oder sozial interagieren können.", istRichtig: false },
      { text: "Reize in der linken Gesichtsfeldhälfte werden in der rechten Hemisphäre verarbeitet und können von den Betroffenen nicht benannt werden.", istRichtig: true },
      { text: "Lateralisation bedeutet, dass für manche Prozesse eine Hemisphäre stärker beteiligt ist als die andere.", istRichtig: true },
    ],
    erklaerung: "a) richtig: Die Hemisphären werden getrennt, meist operativ gegen ==Epilepsie==. b) falsch: Die Personen verhalten sich auffällig ==normal== — Gehen, Sprechen und soziale Interaktion sind unauffällig. c) richtig: Wegen der ==kontralateralen== Verarbeitung landet der linke Gesichtsfeldreiz in der ==rechten== Hemisphäre, der die Sprache fehlt (Gazzaniga, Bogen & Sperry, 1962). d) richtig: Genau das ist ==Lateralisation== — die linke Hemisphäre ist sprachdominant, die rechte dominant bei räumlicher Verarbeitung.",
    merksatz: "==Linkes Gesichtsfeld → rechte Hemisphäre → keine Worte==. Sprache links, Raum rechts.",
    beleg: "Kap. 4.3.3 / Infobox 4.3, S. 115",
  },
  {
    id: "N45-2", teil: "A", kapitel: 4, thema: "Rückenmark", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==weißen Substanz des Rückenmarks== sind korrekt?",
    aussagen: [
      { text: "Im Hinterstrang verlaufen die aufsteigenden Nervenbahnen von den peripheren Gebieten zum Gehirn.", istRichtig: true },
      { text: "Im Vorderstrang verlaufen die absteigenden Nervenbahnen vom Gehirn zu den peripheren Gebieten.", istRichtig: true },
      { text: "Im Seitenstrang befindet sich unter anderem die Pyramidenbahn.", istRichtig: true },
      { text: "Die Pyramidenbahn ist ein paariges Faserbündel, das eine zentrale Rolle bei der motorischen Steuerung des Gehirns spielt.", istRichtig: true },
    ],
    erklaerung: "Hier sind ==alle vier== Aussagen richtig. a) und b): ==Hinterstrang aufsteigend== (zum Gehirn), ==Vorderstrang absteigend== (vom Gehirn weg). c) und d): Die ==Pyramidenbahn== liegt im ==Seitenstrang==, ist ==paarig== und dient der ==motorischen Steuerung==.",
    merksatz: "==Hinten hinauf, vorne hinunter== — und seitlich die ==motorische Pyramidenbahn==.",
    beleg: "Kap. 4.3.2, S. 109",
  },
  {
    id: "N45-3", teil: "A", kapitel: 4, thema: "Rückenmark", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Zentralkanal==, ==Wurzeln== und ==Spinalganglion== treffen zu?",
    aussagen: [
      { text: "Der Zentralkanal liegt im Zentrum der grauen Substanz, durchzieht das Rückenmark von oben nach unten und ist mit Liquor gefüllt.", istRichtig: true },
      { text: "Die Vorderwurzel ist der Bereich, in dem die sensorischen Nervenfasern in das Rückenmark eindringen.", istRichtig: false },
      { text: "Das Spinalganglion ist eine Verdickung vor dem Zusammenschluss der dorsalen Wurzelfäden und besteht aus Zellkörpern des peripheren Nervensystems.", istRichtig: true },
      { text: "Der Zentralkanal ist mit Blut gefüllt und verläuft außerhalb der grauen Substanz im Seitenstrang.", istRichtig: false },
    ],
    erklaerung: "a) richtig: kleine, annähernd kreisförmige, ==liquorgefüllte== Öffnung mitten in der grauen Substanz. b) falsch: Vertauscht — die ==Hinterwurzel== ist der sensorische Eingang, die ==Vorderwurzel== der motorische Ausgang. c) richtig: Das ==Spinalganglion== sitzt an den dorsalen Wurzelfäden und enthält Zellkörper des ==peripheren== Nervensystems. d) falsch: Der Zentralkanal liegt ==im Zentrum der grauen Substanz== und ist mit ==Liquor== gefüllt, nicht mit Blut.",
    merksatz: "==Hinten rein (sensorisch), vorne raus (motorisch)== — Spinalganglion sitzt hinten.",
    beleg: "Kap. 4.3.2, S. 109",
  },
  {
    id: "N45-4", teil: "A", kapitel: 4, thema: "Farbfehlsichtigkeit", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Farbfehlsichtigkeit== sind korrekt?",
    aussagen: [
      { text: "Farbfehlsichtigkeit entsteht, wenn Zapfentypen fehlen oder nicht richtig funktionieren.", istRichtig: true },
      { text: "Am häufigsten ist die Rot-Grün-Schwäche, bei der sich das Empfindlichkeitsspektrum der betroffenen Zapfen in Richtung der jeweils anderen Zapfen verschoben hat.", istRichtig: true },
      { text: "Die Rot-Grün-Sehschwäche wird meist im Lauf des Lebens erworben und verschlechtert sich mit dem Alter.", istRichtig: false },
      { text: "Frauen sind deutlich häufiger betroffen als Männer, weil sie zwei X-Chromosomen besitzen.", istRichtig: false },
    ],
    erklaerung: "a) richtig: fehlende oder fehlerhafte ==Zapfentypen==. b) richtig: Bei einer Grün-Sehschwäche ist das Empfindlichkeitsspektrum der Grün-Zapfen in den ==roten Wellenlängenbereich== verschoben, Grün und Rot sind schlechter zu unterscheiden. c) falsch: Die Rot-Grün-Sehschwäche ist ==angeboren== und verändert sich ==nicht== im Lauf der Zeit. d) falsch: ==Männer== sind deutlich häufiger betroffen — das Gen liegt auf dem ==X-Chromosom==, Frauen können den Defekt mit dem zweiten X in der Regel ausgleichen. Ein Hinweis liefern die ==Ishihara-Farbtafeln==.",
    merksatz: "==Angeboren, X-chromosomal, Männer häufiger== — Zapfen fehlen nicht, ihr Spektrum ist verschoben.",
    beleg: "Kap. 4.4.2 / Infobox 4.4, S. 119",
  },
  {
    id: "N45-5", teil: "A", kapitel: 4, thema: "Rezeptives Feld", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==rezeptiven Feld== und zur Signalweiterleitung in der Retina sind korrekt?",
    aussagen: [
      { text: "Das rezeptive Feld ist diejenige Retinafläche, von der aus eine einzelne Nervenzelle beeinflusst werden kann.", istRichtig: true },
      { text: "Das rezeptive Feld bezeichnet den Bereich des visuellen Cortex, in dem ein Reiz verarbeitet wird.", istRichtig: false },
      { text: "Die Bipolarzellen leiten das Signal jeder einzelnen Photorezeptorzelle unverändert und getrennt an den Sehnerv weiter.", istRichtig: false },
      { text: "Jede Ganglienzelle erhält ihr Signal von genau einer einzigen Photorezeptorzelle, weshalb das rezeptive Feld immer nur einen Rezeptor umfasst.", istRichtig: false },
    ],
    erklaerung: "Nur a) ist richtig. a) So definiert das Skript das ==rezeptive Feld== — auch beschreibbar als ==Gesamtheit der Photorezeptorzellen==, die auf diese eine Nervenzelle Einfluss haben. b) falsch: Gemeint ist eine ==Retinafläche==, nicht ein Cortexareal. c) falsch: Bipolarzellen ==kombinieren== die Signale ==mehrerer== Photorezeptorzellen; der Weg ist ==Photorezeptor → Bipolarzelle → Ganglienzelle==, erst die Axone der Ganglienzellen bilden den Sehnerv. d) falsch: Jede Ganglienzelle ==integriert== die Signale einer oder ==mehrerer== Bipolarzellen.",
    merksatz: "Rezeptives Feld = ==alles, was auf eine Nervenzelle einwirken kann== — weil Signale zusammenlaufen.",
    beleg: "Kap. 4.4.2, S. 118-119",
  },
  {
    id: "N45-6", teil: "A", kapitel: 4, thema: "Multiple Sklerose", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Multiplen Sklerose (MS)== sind korrekt?",
    aussagen: [
      { text: "Bei MS wird das Myelin der Axone im zentralen Nervensystem durch das Immunsystem angegriffen; die Zerstörung nennt man Demyelinisierung.", istRichtig: true },
      { text: "Durch den Myelinverlust geht die beschleunigte Informationsweitergabe verloren, außerdem kann es zu Schädigungen von Nervenzellen kommen.", istRichtig: true },
      { text: "MS verläuft ausschließlich in Schüben; rein fortschreitende (progrediente) Verläufe gibt es nicht.", istRichtig: false },
      { text: "MS ist derzeit nicht heilbar, es gibt aber Medikamente, die Dauer, Häufigkeit und Schwere der Schübe reduzieren können.", istRichtig: true },
    ],
    erklaerung: "a) richtig: Angriff des ==Immunsystems== auf das ==Myelin== im ZNS = ==Demyelinisierung==. b) richtig: Erste Folgen sind Sehstörungen, Muskelschwäche und Missempfindungen bis hin zu Lähmungen. c) falsch: Neben dem schubförmigen Verlauf gibt es auch ==progrediente== Verläufe mit andauernder Verschlechterung. d) richtig: ==Nicht heilbar==, aber medikamentös abschwächbar.",
    merksatz: "MS = ==Myelin weg → Signal langsam==; schubförmig ==oder== progredient.",
    beleg: "Kap. 4.2.2 / Infobox 4.1, S. 102",
  },
  {
    id: "N45-7", teil: "A", kapitel: 4, thema: "Aufbau des Auges", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==Aufbau des Auges== treffen zu?",
    aussagen: [
      { text: "Die Cornea (Hornhaut) ist lichtdurchlässig, weil sich in ihr keine Blutgefäße befinden.", istRichtig: true },
      { text: "Die mittlere Augenhaut besteht aus Lederhaut, Cornea und Retina.", istRichtig: false },
      { text: "Als Akkommodation bezeichnet man die durch den Ziliarmuskel bewirkte Veränderung der Linsenform.", istRichtig: true },
      { text: "Je mehr Licht auf die Augen fällt, desto größer wird die Pupille.", istRichtig: false },
    ],
    erklaerung: "a) richtig: Keine ==Blutgefäße== in der Cornea, deshalb lichtdurchlässig; sie bildet mit der Lederhaut die ==äußere Augenhaut==. b) falsch: Lederhaut und Cornea sind die ==äußere==, die Retina die ==innere== Augenhaut. Die ==mittlere== besteht aus ==Aderhaut, Ziliarkörper und Iris==. c) richtig: Der ==Ziliarmuskel== verändert die Wölbung der bikonvexen Linse — die erhöhte Brechkraft braucht man für ==nahe== Objekte. d) falsch: Umgekehrt — ==mehr Licht → kleinere Pupille==, weniger Licht → größere Pupille. Die Iris wirkt als ==Blende==.",
    merksatz: "==Außen: Lederhaut + Cornea, mitte: Aderhaut + Ziliarkörper + Iris, innen: Retina==. Viel Licht = enge Pupille.",
    beleg: "Kap. 4.4.1, S. 116-117",
  },

  // ---------- Kapitel 5 ----------
  {
    id: "N45-8", teil: "A", kapitel: 5, thema: "Visuelle Pfade", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==ventralen== und ==dorsalen Pfad== der visuellen Verarbeitung (ursprüngliches Modell) sind korrekt?",
    aussagen: [
      { text: "Der ventrale Pfad verläuft vom visuellen Cortex zum Temporallappen und ist für die Objekterkennung zuständig.", istRichtig: true },
      { text: "Der ventrale Pfad wird deshalb auch als Was-Pfad bezeichnet.", istRichtig: true },
      { text: "Der dorsale Pfad verläuft vom visuellen Cortex in den Parietallappen und ist für die räumliche Verarbeitung zuständig.", istRichtig: true },
      { text: "Der dorsale Pfad wurde im ursprünglichen Modell als Was-Pfad und der ventrale als Wo-Pfad bezeichnet.", istRichtig: false },
    ],
    erklaerung: "a) bis c) richtig: ==ventral → Temporallappen → welches Objekt== und ==dorsal → Parietallappen → wo das Objekt ist== (Mishkin, Ungerleider & Macko, 1983). d) falsch: Die Zuordnung ist vertauscht — ==ventral = Was-Pfad==, ==dorsal = Wo-Pfad==.",
    merksatz: "==Ventral = Was = Temporallappen==, ==dorsal = Wo = Parietallappen==.",
    beleg: "Kap. 5.2.4, S. 137",
  },
  {
    id: "N45-9", teil: "A", kapitel: 5, thema: "Visuelle Pfade", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur Weiterentwicklung des Zwei-Pfade-Modells durch ==Goodale und Milner (1992)== sind korrekt?",
    aussagen: [
      { text: "Goodale und Milner legen weniger Gewicht auf die Qualität des Inputs und mehr darauf, welchem Zweck die verarbeitete Information dient.", istRichtig: true },
      { text: "Der ventrale Pfad dient der Wahrnehmung von Objekten (Vision for Perception).", istRichtig: true },
      { text: "Der dorsale Pfad ist für die visuelle Kontrolle bei Aktionen wie Erreichen und Greifen zuständig und wird daher besser als Wie-Pfad bezeichnet.", istRichtig: true },
      { text: "Patient:innen mit Schädigungen im dorsalen Pfad konnten die Objekte benennen, hatten aber Schwierigkeiten, nach ihnen zu greifen.", istRichtig: true },
    ],
    erklaerung: "Alle vier Aussagen sind richtig. a) bis c): Der Fokus verschiebt sich von ==was/wo== auf den ==Zweck== der Information: ==Vision for Perception== (ventral) versus ==Vision for Action== (dorsal, ==Wie-Pfad==). d) Genau dieses Muster war der Anlass für das Modell: dorsale Schädigung = ==benennen ja, greifen nein==; bei ventraler Schädigung war es umgekehrt — eine ==doppelte Dissoziation==.",
    merksatz: "==Dorsal = Handeln (Wie/greifen)==, ==ventral = Erkennen (Was/benennen)==.",
    beleg: "Kap. 5.2.4, S. 137-138",
  },
  {
    id: "N45-10", teil: "A", kapitel: 5, thema: "Doppelte Dissoziation", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==doppelten Dissoziation== sind korrekt?",
    aussagen: [
      { text: "Von einer Dissoziation spricht man, wenn eine Person Schwierigkeiten bei Aufgabe A hat, während Aufgabe B normal ausgeführt werden kann.", istRichtig: true },
      { text: "Eine einfache Dissoziation kann auch dadurch zustande kommen, dass Aufgabe A schlicht schwieriger ist als Aufgabe B.", istRichtig: true },
      { text: "Eine doppelte Dissoziation liegt vor, wenn es sowohl Personen gibt, die A können, aber nicht B, als auch Personen, die B können, aber nicht A.", istRichtig: true },
      { text: "Eine doppelte Dissoziation gilt als eindeutiger direkter Beweis dafür, dass zwei verschiedene Prozesse zugrunde liegen.", istRichtig: false },
    ],
    erklaerung: "a) richtig: So ist die einfache ==Dissoziation== definiert. b) richtig: Genau dieses ==Schwierigkeitsproblem== macht die einfache Dissoziation unsicher. c) richtig: Das ist das gesuchte ==Kreuzmuster== der doppelten Dissoziation. d) falsch: Auch die doppelte Dissoziation ist nur ein ==indirekter Rückschluss==, kein direkter Beweis (Eysenck & Keane, 2020).",
    merksatz: "Doppelte Dissoziation = ==zwei gegenläufige Fälle==, aber trotzdem nur ==indirekter== Schluss.",
    beleg: "Kap. 5.2.4 / Infobox 5.3, S. 138",
  },
  {
    id: "N45-11", teil: "A", kapitel: 5, thema: "Enkodierspezifität", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Prinzip der Enkodierspezifität== treffen zu?",
    aussagen: [
      { text: "Die Gedächtnisleistung beim Abruf ist besser, wenn die Zustände während der Enkodierung denen des Abrufs ähnlich sind.", istRichtig: true },
      { text: "Morris, Bransford und Franks (1977) zeigten, dass eine semantische (tiefe) Verarbeitung beim Abruf immer besser abschneidet als eine phonemische.", istRichtig: false },
      { text: "Bei einem Reimtest erkannten die Versuchspersonen mehr Wörter, wenn diese semantisch statt phonemisch enkodiert worden waren.", istRichtig: false },
      { text: "Das Prinzip wurde im Rahmen der Erforschung der Theorie der Verarbeitungstiefe entdeckt.", istRichtig: true },
    ],
    erklaerung: "a) richtig: Kern der ==Enkodierspezifität== ist die ==Passung== zwischen Enkodierung und Abruf. b) falsch: Morris et al. zeigten das Gegenteil — tiefe Verarbeitung wirkt ==nicht zwangsläufig== besser, entscheidend ist die Passung zwischen ==Einpräge- und Abrufaufgabe==. c) falsch: Beim ==Reimtest== kehrte sich der Effekt um — ==phonemisch== enkodierte Wörter wurden ==besser== erkannt. d) richtig: Die Entdeckung fiel in die Forschung zur ==Verarbeitungstiefe==.",
    merksatz: "==Passung schlägt Tiefe==: Reimtest belohnt phonemisches Lernen.",
    beleg: "Kap. 5.4.5, S. 157",
  },
  {
    id: "N45-12", teil: "A", kapitel: 5, thema: "Kontexteffekte", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Kontexteffekten== und zur Taucher-Studie von ==Godden und Baddeley (1975)== sind korrekt?",
    aussagen: [
      { text: "Taucher:innen lernten Wortlisten unter Wasser oder am Ufer; auch der Abfrageort wurde variiert.", istRichtig: true },
      { text: "Die Gedächtnisleistung war besser, wenn Lern- und Abfrageort übereinstimmten, obwohl der Ort für die Aufgabe völlig irrelevant war.", istRichtig: true },
      { text: "Kontext- bzw. Passungseffekte betreffen nur externe Lernumgebungen, nicht innere Zustände der lernenden Person.", istRichtig: false },
      { text: "Eine Erklärung ist, dass beim Enkodieren auch die Kontextbedingungen mitgespeichert werden und beim Abruf als Hinweisreize dienen.", istRichtig: true },
    ],
    erklaerung: "a) und b) richtig: Der klassische ==Passungseffekt== zwischen Lern- und Abrufort. c) falsch: Kontexteffekte betreffen ausdrücklich ==externe Umgebungen und innere Zustände== — an Inhalte, die man in trauriger Stimmung gelernt hat, erinnert man sich in trauriger Stimmung besser. d) richtig: Der Kontext wird ==mitgespeichert== und wirkt beim Abruf als ==Hinweisreiz==.",
    merksatz: "==Gleicher Kontext beim Lernen und Abrufen = bessere Leistung== — außen (Ort) wie innen (Stimmung).",
    beleg: "Kap. 5.4.5, S. 157-158",
  },
  {
    id: "N45-13", teil: "A", kapitel: 5, thema: "Recall und Recognition", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Recall== und ==Recognition== sind korrekt?",
    aussagen: [
      { text: "Beim Wiedererkennen (Recognition) werden gelernte Wörter zusammen mit neuen Distraktorwörtern dargeboten und müssen unterschieden werden.", istRichtig: true },
      { text: "Der Teil A der Aufnahmeprüfung fragt die Inhalte in der Art einer Recognition-Aufgabe ab.", istRichtig: true },
      { text: "Die eigenständige Wiedergabe (Recall) erfordert in der Regel eine geringere Gedächtnisleistung als das Wiedererkennen.", istRichtig: false },
      { text: "Bei der freien Wiedergabe (Free Recall) muss die Darbietungsreihenfolge eingehalten werden, beim Serial Recall ist die Reihenfolge beliebig.", istRichtig: false },
    ],
    erklaerung: "a) richtig: ==Recognition== = alte Wörter von ==Distraktoren== trennen. b) richtig: In Teil A entscheiden Sie pro Aussage, ob sie mit dem Lernstoff übereinstimmt — das entspricht dem ==Wiedererkennen==. c) falsch: Recall erfordert in der Regel eine ==höhere== Gedächtnisleistung als Recognition. d) falsch: Vertauscht — ==Free Recall== = beliebige Reihenfolge, ==Serial Recall== = vorgegebene Reihenfolge.",
    merksatz: "==Recognition = erkennen (leichter)==, ==Recall = selbst produzieren (schwerer)==.",
    beleg: "Kap. 5.4.5 / Infobox 5.7, S. 158",
  },
  {
    id: "N45-14", teil: "A", kapitel: 5, thema: "Amnesie", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Amnesie== und zum Patienten ==H.M.== sind korrekt?",
    aussagen: [
      { text: "Bei einer retrograden Amnesie können Ereignisse (kurz) vor der Hirnverletzung nicht mehr erinnert werden.", istRichtig: true },
      { text: "Bei einer anterograden Amnesie können keine neuen Gedächtnisinhalte mehr eingespeichert werden.", istRichtig: true },
      { text: "Henry Molaison (H.M.) entwickelte nach der Entfernung von Teilen der Temporallappen und des Hippocampus eine ausgeprägte anterograde Amnesie.", istRichtig: true },
      { text: "H.M. schnitt in perzeptiv-motorischen Lernaufgaben gut ab und behielt die erlernten Fähigkeiten auch über ein Jahr hinaus.", istRichtig: true },
    ],
    erklaerung: "Alle vier Aussagen sind richtig. a) ==retrograd = rückwärts gerichtet==, betrifft die Zeit ==vor== der Schädigung. b) ==anterograd = vorwärts gerichtet==, ==neue== Inhalte werden nicht mehr gespeichert. c) Die Operation gegen starke epileptische Anfälle führte zur ==anterograden Amnesie== (Scoville & Milner, 1957). d) Trotz fehlender Fakten- und Ereignisspeicherung blieben ==perzeptiv-motorische== Lernleistungen erhalten — ein Hinweis auf das intakte ==nondeklarative== Gedächtnis.",
    merksatz: "==Retrograd = zurück (Altes weg)==, ==anterograd = vorwärts (Neues geht nicht rein)==. H.M.: Fakten weg, Fertigkeiten da.",
    beleg: "Kap. 5.4.4 / Infobox 5.6, S. 156",
  },
];
