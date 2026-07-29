import type { Frage } from "../types";

// ============================================================
//  VERTIEFUNG Kapitel 4 + 5 — Unterkapitel, die bisher gefehlt
//  haben oder nur oberflaechlich abgedeckt waren:
//  4.1.2 Begriffsabgrenzung, 4.2.1 Gliazellen,
//  4.2.3 Synaptische Uebertragung, 5.3.3 Klassische
//  Konditionierung (Vertiefung), 5.4.3 Arbeitsgedaechtnismodell,
//  5.4.4 Langzeitgedaechtnis.
//  Format: 4 Aussagen, jede einzeln richtig/falsch, min. 1 richtig.
// ============================================================

export const vertiefung45: Frage[] = [
  // ---------- 4.1.2 Begriffsabgrenzung ----------
  {
    id: "V45-1", teil: "A", kapitel: 4, thema: "Begriffsabgrenzung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Abgrenzung== der Biologischen Psychologie von verwandten Begriffen sind korrekt?",
    aussagen: [
      { text: "Biopsychologie ist eine Abkürzung für Biologische Psychologie und wird synonym dazu verwendet.", istRichtig: true },
      { text: "Die Neurowissenschaften sind ein Teilgebiet der Biologischen Psychologie und werden ausschließlich von Psycholog:innen betrieben.", istRichtig: false },
      { text: "Die Psychobiologie beschäftigt sich mit den psychologischen Auswirkungen biologischer Prozesse, ist aber ein Teilgebiet der Biologie.", istRichtig: true },
      { text: "Für die Biologische Psychologie gibt es eine allgemeingültige Unterteilung in Unterbereiche, die in allen Lehrbüchern identisch ist.", istRichtig: false },
    ],
    erklaerung: "a) richtig: ==Biopsychologie== ist schlicht die Kurzform und wird ==synonym== verwendet. b) falsch: Es ist umgekehrt — die Biologische Psychologie ist Teil der ==Neurowissenschaften==, und diese sind ein ==übergeordnetes interdisziplinäres== Forschungsfeld, an dem auch Medizin, Biologie, Physik und Chemie beteiligt sind. c) richtig: Die ==Psychobiologie== fragt nach den psychologischen Auswirkungen biologischer Prozesse, gehört aber zur ==Biologie==, nicht zur Psychologie. d) falsch: Eine ==allgemeingültige== Unterteilung gibt es nicht; die Darstellung im Skript folgt Pinel, Barnes und Pauli (2019).",
    merksatz: "==Biopsychologie = dasselbe==, ==Psychobiologie = Biologie==, ==Neurowissenschaften = das große Dach==.",
    beleg: "Kap. 4.1.2, S. 89-90",
  },
  {
    id: "V45-2", teil: "A", kapitel: 4, thema: "Begriffsabgrenzung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Zuordnungen zu den ==Teilbereichen der Biologischen Psychologie== sind korrekt?",
    aussagen: [
      { text: "Die Physiologische Psychologie versucht neuronale Mechanismen des Verhaltens möglichst direkt zu erklären, meist über elektrische Stimulation oder chirurgische Eingriffe, häufig im Tierversuch.", istRichtig: true },
      { text: "Die Neuropsychologie untersucht an Menschen die psychologischen Auswirkungen von Schädigungen am Gehirn und ist stark anwendungsorientiert.", istRichtig: true },
      { text: "Die Psychophysiologie arbeitet mit nicht-invasiven Methoden wie dem EEG und untersucht unter anderem Muskelspannung, Augenbewegungen und Herzrate.", istRichtig: true },
      { text: "Die Kognitive Neurowissenschaft ist der älteste Bereich der Biologischen Psychologie und arbeitet vor allem mit chirurgischen Eingriffen am Menschen.", istRichtig: false },
    ],
    erklaerung: "a) richtig: ==Physiologische Psychologie== = direkter Zugriff auf die Struktur (Stimulation, Eingriffe), oft im ==Tierversuch==. b) richtig: ==Neuropsychologie== = Menschen mit ==Hirnschädigungen== nach Unfällen, Erkrankungen oder Operationen; anwendungsorientiert, weil daraus Diagnostik und ==Rehabilitation== entstehen. c) richtig: ==Psychophysiologie== = Zusammenhang von physiologischer Aktivität und psychologischen Prozessen, ==nicht-invasiv== (EEG, Muskelspannung, Augenbewegungen, Herzrate); typische Themen sind Stress, Emotion und biologische Rhythmen. d) falsch: Die ==Kognitive Neurowissenschaft== ist ein ==junger== Bereich und arbeitet mit ==Bildgebung== (z. B. MRT), nicht mit chirurgischen Eingriffen.",
    merksatz: "==Physiologisch = eingreifen==, ==Neuropsychologie = Schädigung==, ==Psychophysiologie = messen ohne Eingriff==.",
    beleg: "Kap. 4.1.2, S. 90",
  },
  {
    id: "V45-3", teil: "A", kapitel: 4, thema: "Begriffsabgrenzung", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Kognitiver Neurowissenschaft==, ==Psychopharmakologie== und ==Vergleichender Psychologie== sind korrekt?",
    aussagen: [
      { text: "Die Kognitive Neurowissenschaft erforscht die neuronalen Grundlagen der Kognition und nutzt dafür vor allem funktionelle und strukturelle Bildgebung wie die Magnetresonanztomografie.", istRichtig: true },
      { text: "Die Psychopharmakologie ist ein rein psychologisches Fach, an dem keine anderen Berufsgruppen beteiligt sind.", istRichtig: false },
      { text: "In der Vergleichenden Psychologie wird das Erleben verschiedener Altersgruppen innerhalb des Menschen verglichen.", istRichtig: false },
      { text: "Die genannten Hauptbereiche sind völlig voneinander abgegrenzte Gebiete ohne inhaltliche Überschneidungen.", istRichtig: false },
    ],
    erklaerung: "a) richtig: ==Kognitive Neurowissenschaft== = neuronale Grundlagen der ==Kognition== mit ==Bildgebung== (MRT). b) falsch: Die ==Psychopharmakologie== ist ausdrücklich ==interdisziplinär== — neben Psycholog:innen sind auch Ärzt:innen und Pharmakolog:innen beteiligt. c) falsch: Die ==Vergleichende Psychologie== vergleicht das Verhalten ==verschiedener Spezies==, um Evolution, Genetik und adaptives Verhalten zu verstehen. d) falsch: Die Bereiche haben unterschiedliche ==Schwerpunkte==, überschneiden sich inhaltlich aber häufig.",
    merksatz: "==Vergleichend heißt Arten vergleichen==, nicht Altersgruppen — und die Teilbereiche ==überlappen==.",
    beleg: "Kap. 4.1.2, S. 90-91",
  },

  // ---------- 4.2.1 Gliazellen ----------
  {
    id: "V45-4", teil: "A", kapitel: 4, thema: "Gliazellen", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu den ==Funktionen von Gliazellen== sind korrekt?",
    aussagen: [
      { text: "Während der embryonalen Entwicklung unterstützen Gliazellen neu gebildete Neuronen dabei, den richtigen Ort im Gehirn zu finden.", istRichtig: true },
      { text: "Gliazellen können überschüssige Neurotransmitter und andere Substanzen aus dem synaptischen Spalt aufnehmen.", istRichtig: true },
      { text: "Gliazellen sind am Gehirnstoffwechsel beteiligt: Sie bereiten Nährstoffe für die Neuronen auf und entsorgen Abfallmaterial beschädigter oder abgestorbener Neuronen.", istRichtig: true },
      { text: "Nach heutigem Wissensstand haben Gliazellen ausschließlich eine stützende Funktion für die Neuronen.", istRichtig: false },
    ],
    erklaerung: "a) bis c) richtig: Gliazellen leiten neue Neuronen an ihren ==Zielort==, nehmen überschüssige ==Neurotransmitter== aus dem synaptischen Spalt auf und sind am ==Gehirnstoffwechsel== beteiligt (Nährstoffe aufbereiten, Abfall entsorgen). d) falsch: Genau das dachte man ==früher==. Heute weiß man, dass es viele Arten von Gliazellen gibt und sie an deutlich ==mehr Prozessen== beteiligt sind — man vermutet sogar eine aktive Rolle bei der neuronalen Kommunikation über die ==Ionenkonzentration==. Deshalb heißen sie auch die vergessenen Zellen.",
    merksatz: "Gliazellen sind ==keine bloße Stütze==: Wegweiser, Putztrupp, Türsteher und Mitredner bei der Signalübertragung.",
    beleg: "Kap. 4.2.1, S. 95-96",
  },
  {
    id: "V45-5", teil: "A", kapitel: 4, thema: "Gliazellen", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Astrozyten== und zur ==Anzahl der Gliazellen== sind korrekt?",
    aussagen: [
      { text: "Astrozyten sind an der Blut-Hirn-Schranke beteiligt und umgeben die Blutgefäße im Gehirn mit Fett.", istRichtig: true },
      { text: "Giftstoffe, die nicht fettlöslich sind, können diese Barriere nicht überwinden und richten daher keinen Schaden im Gehirn an.", istRichtig: true },
      { text: "Neuere Studien belegen, dass es im Nervensystem etwa zehnmal so viele Gliazellen wie Neuronen gibt.", istRichtig: false },
      { text: "Im Kleinhirn gibt es mehr Gliazellen als Neuronen, im Großhirn dagegen weniger.", istRichtig: false },
    ],
    erklaerung: "a) und b) richtig: ==Astrozyten== bilden einen Teil der ==Blut-Hirn-Schranke==, indem sie die Blutgefäße mit ==Fett== umgeben — was nicht ==fettlöslich== ist, kommt nicht durch. c) falsch: Das ==zehnfache== Verhältnis war die ==alte== Annahme; neuere Studien deuten auf ==etwa gleich viele== Gliazellen wie Neuronen hin. d) falsch: Es ist genau ==umgekehrt== — im ==Kleinhirn weniger== Gliazellen als Neuronen, im ==Großhirn mehr==.",
    merksatz: "==Kleinhirn: viele Neuronen, wenig Glia== — ==Großhirn: mehr Glia als Neuronen==. Insgesamt etwa 1:1.",
    beleg: "Kap. 4.2.1, S. 95-96",
  },
  {
    id: "V45-6", teil: "A", kapitel: 4, thema: "Gliazellen", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Myelin==, ==Oligodendrozyten== und ==Schwann-Zellen== sind korrekt?",
    aussagen: [
      { text: "Im zentralen Nervensystem bilden Oligodendrozyten das Myelin, im peripheren Nervensystem übernehmen die Schwann-Zellen diese Aufgabe.", istRichtig: true },
      { text: "Ein Oligodendrozyt kann mehrere Myelinsegmente bilden, oft auch an mehr als einem Axon, während jede Schwann-Zelle nur ein Myelinsegment bildet.", istRichtig: true },
      { text: "Das Myelin schützt vor mechanischer Beanspruchung und erhöht die Leitungsgeschwindigkeit von Nervenimpulsen deutlich.", istRichtig: true },
      { text: "Die unmyelinisierten Stellen zwischen den Myelinsegmenten nennt man Ranvier-Schnürringe.", istRichtig: true },
    ],
    erklaerung: "Hier sind ==alle vier== Aussagen richtig. a) ==ZNS = Oligodendrozyten==, ==PNS = Schwann-Zellen==. b) Der ==Oligodendrozyt== ist der Vielarbeiter (mehrere Segmente, oft an mehreren Axonen), die ==Schwann-Zelle== schafft ==genau ein== Segment. c) Myelin = Fettschicht mit ==Schutz==- und ==Tempo==-Funktion; andere Namen sind Markscheide, Myelinscheide oder Myelinschicht. d) Die Schicht ist nicht durchgängig, sondern ==segmentiert== — die Lücken sind die ==Ranvier-Schnürringe==.",
    merksatz: "==Oligo = viele Segmente, Schwann = ein Segment==. Myelin schützt und beschleunigt.",
    beleg: "Kap. 4.2.1, S. 96",
  },

  // ---------- 4.2.3 Synaptische Uebertragung ----------
  {
    id: "V45-7", teil: "A", kapitel: 4, thema: "Synaptische Übertragung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu den ==Arten von Synapsen== sind korrekt?",
    aussagen: [
      { text: "Bei elektrischen Synapsen, auch gap junctions genannt, stoßen zwei gegenüberliegende Ionenkanäle so aneinander, dass eine Art Röhre entsteht, durch die Ionen und kleine Moleküle wandern können.", istRichtig: true },
      { text: "Bei elektrischen Synapsen ist die Informationsübertragung grundsätzlich in beide Richtungen möglich und läuft sehr schnell ab.", istRichtig: true },
      { text: "Im menschlichen Gehirn erfolgt die synaptische Übertragung meist über elektrische Synapsen.", istRichtig: false },
      { text: "Bei chemischen Synapsen berühren sich die Zellmembranen der sendenden und der empfangenden Zelle direkt.", istRichtig: false },
    ],
    erklaerung: "a) und b) richtig: ==Elektrische Synapsen== = ==gap junctions==: eine Röhre aus zwei Ionenkanälen, Übertragung in ==beide Richtungen== und ==sehr schnell==. c) falsch: Im menschlichen Gehirn läuft die Übertragung ==meist== über ==chemische== Synapsen; für die Informationsverarbeitung im ZNS spielen sie die weit größere Rolle. d) falsch: Bei chemischen Synapsen berühren sich die Membranen gerade ==nicht== — dazwischen liegt der ==synaptische Spalt==, den chemische Stoffe überbrücken.",
    merksatz: "==Elektrisch = direkte Röhre, beide Richtungen, schnell==. ==Chemisch = Spalt, ein Weg, aber der Normalfall im Gehirn==.",
    beleg: "Kap. 4.2.3, S. 102-103",
  },
  {
    id: "V45-8", teil: "A", kapitel: 4, thema: "Synaptische Übertragung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Ablauf der chemischen synaptischen Übertragung== sind korrekt?",
    aussagen: [
      { text: "Wenn ein Aktionspotenzial in der Axonterminale ankommt und die Zellmembran depolarisiert wird, öffnen sich dort spannungsgesteuerte Calciumkanäle.", istRichtig: true },
      { text: "Die einströmenden Calciumionen bewirken, dass die synaptischen Vesikel mit der Zellmembran verschmelzen und Neurotransmitter in den synaptischen Spalt freigesetzt werden.", istRichtig: true },
      { text: "Die Freisetzung des Vesikelinhalts in den synaptischen Spalt nennt man Exocytose.", istRichtig: true },
      { text: "Die Membran des synaptischen Vesikels geht bei der Freisetzung verloren und kann nicht wiederverwendet werden.", istRichtig: false },
    ],
    erklaerung: "a) richtig: Das Aktionspotenzial depolarisiert die Membran der Axonterminale, dadurch öffnen sich ==spannungsgesteuerte Calciumkanäle== — der Bauplan entspricht den Natriumkanälen, nur eben für ==Calcium==. b) richtig: Die einströmenden ==Calciumionen== lassen die ==synaptischen Vesikel== mit der präsynaptischen Membran fusionieren. c) richtig: Dieser Vorgang heißt ==Exocytose==. d) falsch: Die ==Vesikelmembran== wird später ==zurückgewonnen== und füllt sich erneut mit Neurotransmittern.",
    merksatz: "==AP → Calcium rein → Vesikel fusionieren → Exocytose== — und die Vesikelhülle wird recycelt.",
    beleg: "Kap. 4.2.3, S. 103",
  },
  {
    id: "V45-9", teil: "A", kapitel: 4, thema: "Synaptische Übertragung", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==postsynaptischen Rezeptoren== und ==postsynaptischen Potenzialen== sind korrekt?",
    aussagen: [
      { text: "Ein Neurotransmitter kann nur dann an ein Rezeptorprotein binden, wenn er aufgrund seiner räumlichen Gestalt an die Bindungsstelle passt — man spricht vom Schlüssel-Schloss-Prinzip.", istRichtig: true },
      { text: "Werden über die Rezeptoren Natriumkanäle geöffnet, kommt es zu einer Depolarisation und damit zu einem exzitatorischen postsynaptischen Potenzial.", istRichtig: true },
      { text: "Werden Kalium- oder Chloridkanäle geöffnet, wird die Membran hyperpolarisiert und es entsteht ein inhibitorisches postsynaptisches Signal.", istRichtig: true },
      { text: "Ob in der Nähe des Axonhügels ein Aktionspotenzial ausgelöst wird, hängt allein vom stärksten einzelnen exzitatorischen Signal ab.", istRichtig: false },
    ],
    erklaerung: "a) richtig: Rezeptoren bestehen aus einem ==Protein== mit Bindungsstellen für bestimmte Neurotransmitter — ==Schlüssel-Schloss-Prinzip==. b) richtig: ==Natrium== rein bedeutet ==Depolarisation== und damit ein ==exzitatorisches== postsynaptisches Potenzial. c) richtig: ==Kalium== oder ==Chlorid== führen zur ==Hyperpolarisation== und damit zu einem ==inhibitorischen== postsynaptischen Signal. d) falsch: Depolarisationen und Hyperpolarisationen laufen an vielen Stellen der Dendriten und am Soma ==gleichzeitig== ab; entscheidend ist die ==Summe== der exzitatorischen und inhibitorischen Signale.",
    merksatz: "==Natrium = Gas geben (exzitatorisch)==, ==Kalium/Chlorid = bremsen (inhibitorisch)== — und die ==Summe== entscheidet.",
    beleg: "Kap. 4.2.3, S. 103-104",
  },
  {
    id: "V45-10", teil: "A", kapitel: 4, thema: "Synaptische Übertragung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Entfernung der Neurotransmitter== aus dem synaptischen Spalt sind korrekt?",
    aussagen: [
      { text: "Die Neurotransmitter müssen aus dem synaptischen Spalt entfernt werden, damit eine erneute synaptische Übertragung stattfinden kann.", istRichtig: true },
      { text: "Die Mehrheit der Neurotransmitter wird nach der Freisetzung wieder in die präsynaptischen Endknöpfchen aufgenommen und wiederverwertet.", istRichtig: true },
      { text: "Ein Teil der Neurotransmitter wird in der Synapse von Enzymen abgebaut.", istRichtig: true },
      { text: "Astrozyten können Neurotransmitter aufnehmen, abbauen und die Abbauprodukte an die Neurone weitergeben, damit daraus neue Neurotransmitter gebildet werden.", istRichtig: true },
    ],
    erklaerung: "Hier sind ==alle vier== Aussagen richtig. a) Sobald die Rezeptoren aktiviert sind, ist die Arbeit der Neurotransmitter getan — der Spalt muss ==frei== werden. b) Der Hauptweg ist die ==Wiederaufnahme== in die präsynaptischen Endknöpfchen (Wiederverwertung). c) Der Rest wird von ==Enzymen== abgebaut (Enzyme sind meist Proteine und beschleunigen biochemische Abläufe). d) Oder er wird von ==Astrozyten== aufgenommen, die die ==Abbauprodukte== an die Neurone zurückgeben.",
    merksatz: "Drei Wege aus dem Spalt: ==Wiederaufnahme==, ==Enzym-Abbau==, ==Astrozyten==.",
    beleg: "Kap. 4.2.3, S. 104",
  },

  // ---------- 5.3.3 Klassische Konditionierung (Vertiefung) ----------
  {
    id: "V45-11", teil: "A", kapitel: 5, thema: "Klassische Konditionierung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Löschung (Extinktion)== und ==Spontanremission== sind korrekt?",
    aussagen: [
      { text: "Wird der konditionierte Reiz wiederholt ohne den unkonditionierten Reiz dargeboten, nimmt die konditionierte Reaktion ab, bis sie schließlich nicht mehr auftritt.", istRichtig: true },
      { text: "Bei der Löschung wird die konditionierte Reaktion vollständig verlernt und dauerhaft aus dem Gedächtnis entfernt.", istRichtig: false },
      { text: "Bei der Spontanremission löst der konditionierte Reiz einige Zeit nach der Löschung erneut eine konditionierte Reaktion aus.", istRichtig: true },
      { text: "Diese wiederauftretende Reaktion ist besonders stark und bleibt auch ohne erneute Paarung mit dem unkonditionierten Reiz dauerhaft bestehen.", istRichtig: false },
    ],
    erklaerung: "a) richtig: CS ohne UCS bedeutet, dass der CS nichts mehr ==ankündigt== — die CR nimmt ab bis zur ==Löschung (Extinktion)==. b) falsch: Die Reaktion wird ==nicht vergessen oder verlernt==, sondern nur ==abgeschwächt== und in der Folge nicht mehr gezeigt. c) richtig: Genau das zeigt die ==Spontanremission== — der CS löst später wieder eine CR aus, die alte Assoziation ist also noch da. d) falsch: Diese Erholung ist ==schwach== und verschwindet ==rasch==, wenn CS und UCS nicht wieder gepaart werden. Werden sie gepaart, wird die CR ==schnell wieder== gelernt. Löschung ist deshalb selbst eine Form des ==Lernens==, die zusätzlich gespeichert wird.",
    merksatz: "==Löschung überschreibt nicht, sie legt eine zweite Notiz obendrauf== — die Spontanremission beweist es.",
    beleg: "Kap. 5.3.3, S. 142-143",
  },
  {
    id: "V45-12", teil: "A", kapitel: 5, thema: "Klassische Konditionierung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum Experiment mit ==Little Albert== sind korrekt?",
    aussagen: [
      { text: "Das Experiment stammt von John B. Watson und seiner Assistentin Rosalie Rayner und gilt sowohl ethisch als auch methodisch als äußerst umstritten.", istRichtig: true },
      { text: "Bei den ersten Tests im Alter von etwa neun Monaten zeigte Albert bereits eine deutliche Furchtreaktion auf die weiße Ratte.", istRichtig: false },
      { text: "Das laute Geräusch, auf das Albert reagierte, wurde durch das Schlagen eines Hammers auf eine Eisenstange erzeugt.", istRichtig: true },
      { text: "Nach der Konditionierung fürchtete sich Albert ausschließlich vor der weißen Ratte, nicht jedoch vor ähnlichen Objekten.", istRichtig: false },
    ],
    erklaerung: "a) richtig: ==Watson== und ==Rosalie Rayner== wollten prüfen, ob sich emotionale Reaktionen konditionieren lassen; das Experiment wäre heute ==nicht mehr zulässig==. b) falsch: Bei den ersten Tests mit etwa ==neun Monaten== zeigte Albert bei Ratte, Hase, Hund, Affe, Masken und brennendem Zeitungspapier ==keine== Furcht. c) richtig: Er reagierte auf das laute Geräusch von ==Hammer auf Eisenstange== — und zwar umso heftiger, je öfter es dargeboten wurde. d) falsch: Albert reagierte danach auch auf einen weißen Hasen, einen Pelzmantel, praktisch alles ==Weiße mit Fell== — das ist ==Reizgeneralisierung==.",
    merksatz: "==Ratte + Krach = Angst vor allem, was weiß ist und Fell hat==.",
    beleg: "Kap. 5.3.3, S. 143-144",
  },
  {
    id: "V45-13", teil: "A", kapitel: 5, thema: "Klassische Konditionierung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Reizgeneralisierung== und ==Reizdiskrimination== sind korrekt?",
    aussagen: [
      { text: "Unter Reizgeneralisierung versteht man, dass auch zum konditionierten Reiz ähnliche Reize eine konditionierte Reaktion auslösen können.", istRichtig: true },
      { text: "Je ähnlicher der Reiz dem konditionierten Reiz ist, desto stärker fällt die Reaktion aus.", istRichtig: true },
      { text: "Die Reizgeneralisierung stellt einen Sicherheitsfaktor dar, da wichtige Reize in der Natur selten in exakt gleicher Form auftreten.", istRichtig: true },
      { text: "Beim Diskriminationstraining werden beide ähnlichen Reize gleichermaßen mit dem unkonditionierten Reiz gepaart.", istRichtig: false },
    ],
    erklaerung: "a) bis c) richtig: ==Reizgeneralisierung== = ähnliche Reize lösen die CR mit aus, und zwar umso stärker, je ==ähnlicher== sie sind. Das ist evolutionär sinnvoll, weil gefährliche Reize in der Natur nie exakt gleich aussehen — ein ==Sicherheitsfaktor==. d) falsch: Beim ==Diskriminationstraining== wird ==nur einer== der beiden ähnlichen Reize mit dem UCS gepaart. Auf den anderen wird zunächst noch reagiert, die Reaktion nimmt aber ab, bis der Organismus gelernt hat, welcher Reiz zählt. So entsteht die ==Reizdiskrimination==, das Gegenstück zur Generalisierung.",
    merksatz: "==Generalisierung: über einen Kamm scheren==. ==Diskrimination: nur einer wird gepaart==.",
    beleg: "Kap. 5.3.3, S. 144",
  },

  // ---------- 5.4.3 Arbeitsgedaechtnismodell ----------
  {
    id: "V45-14", teil: "A", kapitel: 5, thema: "Arbeitsgedächtnis", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Arbeitsgedächtnismodell von Baddeley und Hitch== sind korrekt?",
    aussagen: [
      { text: "Baddeley und Hitch (1974) ersetzten unter Berücksichtigung der Kritik am Modell von Atkinson und Shiffrin den Begriff des Kurzzeitspeichers durch den des Arbeitsgedächtnisses.", istRichtig: true },
      { text: "Das Arbeitsgedächtnis wird nach diesem Modell nur für Gedächtnisaufgaben benötigt, nicht aber für andere komplexe Aufgaben wie Kopfrechnen.", istRichtig: false },
      { text: "In der überarbeiteten Form nach Baddeley (2000) setzt sich das Arbeitsgedächtnis aus vier Komponenten zusammen.", istRichtig: true },
      { text: "Im Vergleich zum Drei-Speicher-Modell von Atkinson und Shiffrin hat das Arbeitsgedächtnismodell empirischen Studien der letzten Jahre schlechter standgehalten.", istRichtig: false },
    ],
    erklaerung: "a) richtig: Das Modell ist eine Antwort auf die ==Kritik== am Drei-Speicher-Modell; aus dem ==Kurzzeitspeicher== wird das ==Arbeitsgedächtnis==. b) falsch: Gerade weil dieser Speicher auch für ==andere komplexe Aufgaben== (z. B. ==Kopfrechnen==) gebraucht wird, wählten sie den neuen Begriff. c) richtig: Nach ==Baddeley (2000)== sind es ==vier== Komponenten. d) falsch: Das Arbeitsgedächtnismodell hat ==besser== standgehalten — etwa lassen sich selektive Gedächtnisausfälle bei Hirnschädigungen damit plausibler erklären.",
    merksatz: "==Arbeitsgedächtnis statt Kurzzeitspeicher==, weil dort auch ==gearbeitet== und nicht nur gelagert wird.",
    beleg: "Kap. 5.4.3, S. 153-155",
  },
  {
    id: "V45-15", teil: "A", kapitel: 5, thema: "Arbeitsgedächtnis", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu den ==Komponenten des Arbeitsgedächtnisses== sind korrekt?",
    aussagen: [
      { text: "Die zentrale Exekutive ist für die Kontrolle der Aufmerksamkeit und die Koordination der Informationen aus den anderen Bestandteilen zuständig.", istRichtig: true },
      { text: "Die phonologische Schleife verarbeitet und speichert kurzfristig sprachbasierte Informationen, auch geschriebene Wörter, die beim Lesen still gesprochen werden.", istRichtig: true },
      { text: "Der visuell-räumliche Notizblock ist für visuelle und räumliche Informationen zuständig und ermöglicht es etwa, sich einen beschriebenen Weg gedanklich vorzustellen.", istRichtig: true },
      { text: "Zentrale Exekutive, phonologische Schleife und visuell-räumlicher Notizblock verfügen jeweils über eine unbegrenzte Kapazität.", istRichtig: false },
    ],
    erklaerung: "a) richtig: Die ==zentrale Exekutive== ist der komplexeste Bestandteil; die übrigen Komponenten gelten als ihre ==Hilfssysteme==. Durch sie werden komplexe Aktivitäten wie Problemlösen oder zwei Aufgaben gleichzeitig möglich. b) richtig: Die ==phonologische Schleife== ist für ==sprachbasierte== Information zuständig — gesprochene Sprache und still mitgesprochene Schrift. c) richtig: Der ==visuell-räumliche Notizblock== funktioniert ähnlich, aber für ==visuelle und räumliche== Information. d) falsch: Alle drei haben eine nur ==limitierte Kapazität== und arbeiten weitgehend ==unabhängig== voneinander.",
    merksatz: "==Chefin (zentrale Exekutive) + Sprachnotiz + Bildnotiz== — alle drei mit begrenztem Platz.",
    beleg: "Kap. 5.4.3, S. 153-154",
  },
  {
    id: "V45-16", teil: "A", kapitel: 5, thema: "Arbeitsgedächtnis", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==episodischen Puffer== sind korrekt?",
    aussagen: [
      { text: "Der episodische Puffer wurde erst rund 25 Jahre nach der Veröffentlichung des ersten Modells als vierte Komponente ergänzt.", istRichtig: true },
      { text: "Er dient als Schnitt- und Speicherstelle zwischen den anderen Komponenten des Arbeitsgedächtnisses sowie zwischen Arbeitsgedächtnis, Wahrnehmung und Langzeitgedächtnis.", istRichtig: true },
      { text: "Der episodische Puffer war bereits im ursprünglichen Modell von Baddeley und Hitch (1974) enthalten.", istRichtig: false },
      { text: "Der episodische Puffer ersetzt die zentrale Exekutive als Kontrollinstanz des Arbeitsgedächtnisses.", istRichtig: false },
    ],
    erklaerung: "a) und c): Der ==episodische Puffer== kam erst mit ==Baddeley (2000)== dazu, also rund ==25 Jahre== nach dem ersten Modell — im Modell von 1974 war er also ==nicht== enthalten. b) richtig: Er ist die ==Schnitt- und Speicherstelle==; dadurch können Informationen aus dem ==Langzeitgedächtnis== mit aktuellen Informationen verknüpft werden. d) falsch: Die ==zentrale Exekutive== bleibt die Kontrollinstanz, der Puffer ==ersetzt== sie nicht.",
    merksatz: "==Episodischer Puffer = Steckdose zum Langzeitgedächtnis==, kein neuer Chef.",
    beleg: "Kap. 5.4.3, S. 154",
  },

  // ---------- 5.4.4 Langzeitgedaechtnis ----------
  {
    id: "V45-17", teil: "A", kapitel: 5, thema: "Langzeitgedächtnis", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur Unterscheidung von ==explizitem== und ==implizitem Gedächtnis== sind korrekt?",
    aussagen: [
      { text: "Als explizit werden Gedächtnisinhalte bezeichnet, die bewusst abgerufen werden können; eine andere Bezeichnung dafür ist deklaratives Gedächtnis.", istRichtig: true },
      { text: "Die Inhalte des impliziten Gedächtnisses, auch non-deklaratives Gedächtnis genannt, sind nicht bewusst zugänglich.", istRichtig: true },
      { text: "Nach Squire (1992) umfasst das prozedurale Gedächtnis das gesamte non-deklarative Gedächtnis; weitere Inhalte gibt es dort nicht.", istRichtig: false },
      { text: "Grundlage für die Untergliederung waren Patient:innen mit Gedächtnisverlust, die sowohl beim Faktenwissen als auch bei motorischen Aufgaben stark eingeschränkt waren.", istRichtig: false },
    ],
    erklaerung: "a) und b) richtig: ==explizit = deklarativ = bewusst abrufbar==, ==implizit = non-deklarativ = nicht bewusst zugänglich==. c) falsch: Der Begriff ==prozedurales Gedächtnis== wird zwar oft synonym zu implizit verwendet, aber ==Squire (1992)== postulierte, dass das non-deklarative Gedächtnis ==mehr== enthält als nur automatisierte Fähigkeiten und Gewohnheiten. d) falsch: Genau der ==Gegensatz== war ausschlaggebend (Cohen & Squire, 1980): Einschränkungen beim Speichern und Erinnern von ==Faktenwissen==, ==nicht jedoch== bei der Ausübung ==motorischer== Aufgaben.",
    merksatz: "==Fakten weg, Fertigkeiten da== — dieser Gegensatz begründet die Trennung explizit/implizit.",
    beleg: "Kap. 5.4.4, S. 155-156",
  },
  {
    id: "V45-18", teil: "A", kapitel: 5, thema: "Langzeitgedächtnis", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu den ==Untersystemen des Langzeitgedächtnisses== sind korrekt?",
    aussagen: [
      { text: "Zum non-deklarativen Gedächtnis gehören nach Squire (1992) neben dem prozeduralen Gedächtnis auch die Resultate klassischer und operanter Konditionierung.", istRichtig: true },
      { text: "Auch nicht-assoziatives Lernen wie Habituation und Sensitivierung sowie Erwartungen und Priming zählen zum non-deklarativen Gedächtnis.", istRichtig: true },
      { text: "Tulving (1972) unterschied innerhalb des expliziten Gedächtnisses das semantische und das episodische Gedächtnis.", istRichtig: true },
      { text: "Das episodische Gedächtnis speichert Inhalte persönlicher Erlebnisse samt deren zeitlich-räumlichen Verknüpfungen und hat immer einen Bezug zur eigenen Person.", istRichtig: true },
    ],
    erklaerung: "Hier sind ==alle vier== Aussagen richtig. a) und b): Das ==non-deklarative== Gedächtnis umfasst ==prozedurales== Gedächtnis (z. B. Radfahren, Zehnfingerschreiben), Resultate ==klassischer und operanter Konditionierung==, ==nicht-assoziatives Lernen== (Habituation, Sensitivierung) sowie ==Erwartungen== und ==Priming==. c) ==Tulving (1972)== teilte das explizite Gedächtnis in ==semantisch== und ==episodisch==. d) Im ==semantischen== Gedächtnis liegt ==Faktenwissen== (z. B. Kriegsende 1945), im ==episodischen== die eigenen ==Erlebnisse== mit ==Zeit- und Ortsbezug== — immer mit Bezug zur eigenen Person und oft von ==Emotionen== begleitet.",
    merksatz: "==Semantisch = Lexikon, episodisch = Tagebuch==. Alles Implizite darunter: Können, Konditionierung, Priming.",
    beleg: "Kap. 5.4.4, S. 155-157",
  },
];
