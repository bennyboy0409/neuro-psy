import type { Frage } from "../types";

// ============================================================
//  NACHZÜGLER-Fragen zu Kapitel 1, 3 und 8.
//  Schwerpunkt: Kapitel 1 (Was ist Psychologie?, S. 9-18),
//  ergänzt um ausgelassene Themen aus Kapitel 3 und 8.
//  Nur Inhalte, die im Lernskript belegt sind.
//  Format: GENAU 4 Aussagen, jede einzeln richtig/falsch,
//  mindestens eine richtig.
// ============================================================

export const nachzuegler138: Frage[] = [
  // ---------------------- Kapitel 1 ----------------------
  {
    id: "N1-1", teil: "A", kapitel: 1, thema: "Definition", quelle: "generiert", schwierigkeit: 1,
    stem: "Welche Aussagen zur ==Definition der Psychologie== sind korrekt?",
    aussagen: [
      { text: "Das Wort Psychologie setzt sich aus den griechischen Wörtern psyche (Seele, Gemüt) und logos (Kunde, Wissenschaft) zusammen.", istRichtig: true },
      { text: "Wörtlich übersetzt bedeutet Psychologie Seelenkunde.", istRichtig: true },
      { text: "Allgemein versteht man unter Psychologie die Wissenschaft vom Erleben und Verhalten des Menschen.", istRichtig: true },
      { text: "Kognitive Prozesse, also Prozesse, welche das Denken betreffen, fallen ausdrücklich nicht unter diese Definition.", istRichtig: false },
    ],
    erklaerung: "a) richtig — ==psyche== = Seele/Gemüt, ==logos== = Kunde/Wissenschaft. b) richtig — die wörtliche Übersetzung lautet ==Seelenkunde==. c) richtig — das ist die gängige wissenschaftliche Definition (Gazzaniga et al., 2017): ==Wissenschaft vom Erleben und Verhalten==. d) falsch — ==kognitive Prozesse== fallen ausdrücklich mit darunter.",
    merksatz: "==psyche + logos== = Seelenkunde; heute: Wissenschaft vom ==Erleben und Verhalten== — Kognition inklusive.",
    beleg: "Kap. 1.1, S. 10",
  },
  {
    id: "N1-2", teil: "A", kapitel: 1, thema: "Definition", quelle: "generiert", schwierigkeit: 2,
    stem: "Was gilt laut Infobox für den Begriff ==Kognition==?",
    aussagen: [
      { text: "Der Begriff ist aus dem Lateinischen von cognoscere abgeleitet, was (er-)kennen bedeutet.", istRichtig: true },
      { text: "Kognition ist ein Sammelbegriff für mentale Fähigkeiten und Prozesse, mit denen Informationen aufgenommen, verarbeitet und gespeichert werden.", istRichtig: true },
      { text: "Aufmerksamkeit und Wahrnehmung zählen laut Skript nicht zur Kognition.", istRichtig: false },
      { text: "Kognition bezeichnet im Skript ausschließlich die Leistungen des Gedächtnisses.", istRichtig: false },
    ],
    erklaerung: "a) richtig — lateinisch ==cognoscere== = (er-)kennen. b) richtig — Kognition ist ein ==Sammelbegriff== für mentale Fähigkeiten und Prozesse der Informations==aufnahme, -verarbeitung und -speicherung==. c) falsch — ==Aufmerksamkeit== und ==Wahrnehmung== werden ausdrücklich als Beispiele genannt. d) falsch — dazu zählen u. a. auch ==Schlussfolgern==, ==Denken== und ==Problemlösen==; Kognition ist Standardvokabular der Psychologie.",
    merksatz: "Kognition = ==aufnehmen, verarbeiten, speichern== — Aufmerksamkeit, Wahrnehmung, Gedächtnis, Denken, Problemlösen.",
    beleg: "Kap. 1.1, Infobox 1.1, S. 10",
  },
  {
    id: "N1-3", teil: "A", kapitel: 1, thema: "Teildisziplinen", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Psychologie als Wissenschaft== und zu den ==Methodenfächern== treffen zu?",
    aussagen: [
      { text: "Die Psychologie als empirische Wissenschaft ist sowohl grundlagen- als auch anwendungsorientiert.", istRichtig: true },
      { text: "Sie ist eine bereichsübergreifende Wissenschaft, die Elemente aus den Geistes-, Sozial- und insbesondere Naturwissenschaften vereint.", istRichtig: true },
      { text: "Die kognitive Neurowissenschaft versucht, psychologische Prozesse anhand neuronaler Mechanismen zu erklären.", istRichtig: true },
      { text: "Zu den Methodenfächern zählen Ethik, Wissenschaftstheorie, Methodenlehre und Statistik.", istRichtig: true },
    ],
    erklaerung: "a) richtig — Gesetzmäßigkeiten ergründen (Grundlage) und daraus Schlüsse für ==Verhaltensveränderung in Praxisfeldern== ziehen (Anwendung). b) richtig — kennzeichnend ist der ==bereichsübergreifende== Charakter; der naturwissenschaftliche Fokus wurde zuletzt stärker. c) richtig — sie erklärt psychologische Prozesse über die ==Organisation des Gehirns== (Mausfeld, 2010). d) richtig — die ==Methodenfächer== bilden das Grundgerüst psychologischer Forschung.",
    merksatz: "Methodenfächer = ==Ethik + Wissenschaftstheorie + Methodenlehre + Statistik== — das Grundgerüst der Forschung.",
    beleg: "Kap. 1.2, S. 11",
  },
  {
    id: "N1-4", teil: "A", kapitel: 1, thema: "Teildisziplinen", quelle: "generiert", schwierigkeit: 2,
    stem: "Was untersuchen die einzelnen ==Grundlagenfächer== (Teil 1)?",
    aussagen: [
      { text: "Die Biologische Psychologie befasst sich mit den physischen Abläufen im Körper, die den psychischen Phänomenen zugrunde liegen, besonders mit Prozessen im Nervensystem.", istRichtig: true },
      { text: "Die Allgemeine Psychologie untersucht Prozesse, die allen Menschen gemein sind, etwa Wahrnehmung, Denken, Lernen, Gedächtnis, Sprache, Emotion und Motivation.", istRichtig: true },
      { text: "Die Entwicklungspsychologie beschränkt sich auf Veränderungen in Kindheit und Jugend.", istRichtig: false },
      { text: "Die Entwicklungspsychologie fragt unter anderem, in welchem Alter sich spezielle kognitive Funktionen entwickeln.", istRichtig: true },
    ],
    erklaerung: "a) richtig — Fokus auf ==physische Abläufe==, vor allem im ==Nervensystem== (Kapitel 4). b) richtig — die Allgemeine Psychologie sucht ==allgemeingültige Gesetzmäßigkeiten== (Kapitel 5). c) falsch — sie betrachtet Veränderungen psychischer Prozesse ==im Laufe des gesamten Lebens==. d) richtig — auch die Frage, welche ==Faktoren== die Entwicklung beeinflussen, gehört dazu.",
    merksatz: "Biologische = ==im Körper verankert==; Allgemeine = ==allen gemein==; Entwicklungs = ==ganze Lebensspanne==.",
    beleg: "Kap. 1.2, S. 11-12",
  },
  {
    id: "N1-5", teil: "A", kapitel: 1, thema: "Teildisziplinen", quelle: "generiert", schwierigkeit: 2,
    stem: "Was untersuchen die ==Grundlagenfächer== (Teil 2) und wie ist die Aufteilung zu bewerten?",
    aussagen: [
      { text: "Die Sozialpsychologie untersucht, welche Wirkung die Interaktion mit anderen Personen auf Erleben, Fühlen und Verhalten hat.", istRichtig: true },
      { text: "Die Differentielle und Persönlichkeitspsychologie betrachtet ausschließlich Unterschiede zwischen Personen, nicht aber innerhalb einer Person.", istRichtig: false },
      { text: "Die Aufteilung in Grundlagenfächer ist künstlich; es ergeben sich Überschneidungen zwischen den Fächern.", istRichtig: true },
      { text: "Ein Phänomen wie Wahrnehmung lässt sich immer genau einem einzigen Grundlagenfach zuordnen.", istRichtig: false },
    ],
    erklaerung: "a) richtig — im Zentrum stehen ==soziale Einflüsse== (Kapitel 7). b) falsch — sie untersucht Unterschiede ==zwischen== Personen ==und innerhalb== einer Person, z. B. zu verschiedenen Zeitpunkten. c) richtig — die Richtungen haben sich teilweise ==unabhängig voneinander== entwickelt. d) falsch — ein Phänomen kann Inhalt ==mehrerer== Grundlagenfächer sein, die sich unterschiedlichen Aspekten widmen (Beispiel Wahrnehmung, Tabelle 1.1).",
    merksatz: "Sozial = ==vom Gefüge beeinflusst==; Differentiell = ==Unterschiede zwischen UND innerhalb==; die Aufteilung selbst ist ==künstlich==.",
    beleg: "Kap. 1.2, S. 11-12",
  },
  {
    id: "N1-6", teil: "A", kapitel: 1, thema: "Teildisziplinen", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu den ==Anwendungsfächern== sind korrekt?",
    aussagen: [
      { text: "Die Pädagogische Psychologie befasst sich mit der Beschreibung und Erklärung psychologischer Komponenten in Erziehungs- und Bildungsprozessen.", istRichtig: true },
      { text: "In der AOW-Psychologie geht es um Erleben und Verhalten im Beruf und in Unternehmen, um Marktforschung und um Beratung, etwa bei Personalauswahl oder Marketing.", istRichtig: true },
      { text: "Die Klinische Psychologie befasst sich mit psychischen Störungen, ausdrücklich aber nicht mit deren Prävention.", istRichtig: false },
      { text: "Die Gesundheitspsychologie entwickelt gesundheitserhaltende und -fördernde Maßnahmen und berücksichtigt dabei biologische, psychische und soziale Faktoren.", istRichtig: true },
    ],
    erklaerung: "a) richtig — typische Fragen: Wie lässt sich ==Lernmotivation== steigern, wie kann Wissen effektiv vermittelt werden. b) richtig — AOW steht für ==Arbeit, Organisation, Wirtschaft==. c) falsch — Betätigungsfelder sind psychische Störungen ==und deren Prävention, Behandlung und Rehabilitation==. d) richtig — Themen sind u. a. ==Ernährung und Bewegung, Rauchen, Alkoholkonsum und Stress==.",
    merksatz: "Anwendungsfächer bringen psychologisches Wissen in ==Berufsfeldern== zur Anwendung — Pädagogische, AOW, Klinische, Gesundheits.",
    beleg: "Kap. 1.2, S. 12-13",
  },
  {
    id: "N1-7", teil: "A", kapitel: 1, thema: "Teildisziplinen", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==Psychologischen Diagnostik== und zum Verhältnis von ==Grundlage und Anwendung== treffen zu?",
    aussagen: [
      { text: "Die Psychologische Diagnostik wird in Curricula häufig als Anwendungsfach geführt, kann aber auch als Fertigkeit gesehen werden, die in verschiedensten Anwendungsfächern eingesetzt wird.", istRichtig: true },
      { text: "Im Idealfall sollten Grundlagenforschung und Anwendung einem Zwei-Stufen-Modell folgen, bei dem theoretische Erkenntnisse in der Praxis Anwendung finden.", istRichtig: true },
      { text: "In den Anwendungsfächern selbst wird keine Forschung mehr betrieben.", istRichtig: false },
      { text: "Die Therapieevaluation ist ein Beispiel für Forschung, die ausschließlich in den Grundlagenfächern stattfindet.", istRichtig: false },
    ],
    erklaerung: "a) richtig — sie nimmt eine ==Sonderrolle== ein: Anwendungsfach und zugleich ==Fertigkeit==, um Entscheidungen fundiert zu treffen. b) richtig — das ==Zwei-Stufen-Modell== beschreibt genau diesen Übergang. c) falsch — auch in den Anwendungsfächern wird ==geforscht==. d) falsch — die ==Therapieevaluation== ist gerade das Beispiel für Forschung ==im Anwendungsfach==: Methoden werden erforscht, bei Evidenz angewandt und anschließend evaluiert.",
    merksatz: "Diagnostik = ==Anwendungsfach UND Fertigkeit==; Theorie zur Praxis = ==Zwei-Stufen-Modell==, aber Anwendung forscht selbst mit.",
    beleg: "Kap. 1.2, S. 13",
  },
  {
    id: "N1-8", teil: "A", kapitel: 1, thema: "Ansätze", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==psychodynamischen== und zum ==behavioristischen Ansatz== sind korrekt?",
    aussagen: [
      { text: "Der psychodynamische Ansatz nimmt an, dass Verhalten durch starke innere Kräfte (Triebe) beeinflusst wird und ein Versuch ist, den Konflikt zwischen persönlichen Bedürfnissen und sozialen Erfordernissen zu lösen.", istRichtig: true },
      { text: "Als Begründer des psychodynamischen Ansatzes gilt John Watson.", istRichtig: false },
      { text: "Der behavioristische Ansatz erklärt Verhalten über beobachtbare Reize, Reaktionen und Konsequenzen; nicht direkt beobachtbare mentale Prozesse werden nicht berücksichtigt.", istRichtig: true },
      { text: "Der psychodynamische Ansatz wurde nach Freud nicht mehr weiterentwickelt.", istRichtig: false },
    ],
    erklaerung: "a) richtig — Grundannahme sind ==innere Kräfte (Triebe)== und der ==Konflikt Bedürfnis gegen soziale Erfordernis==. b) falsch — Begründer ist ==Sigmund Freud==; ==John Watson== gilt als Begründer des ==Behaviorismus==. c) richtig — der Fokus liegt auf ==genauer Beschreibung und Überprüfung des Beobachtbaren==. d) falsch — er wurde ==von anderen Psycholog:innen weiterentwickelt== und hat viele Bereiche der Psychologie nachhaltig beeinflusst, u. a. durch die Betonung ==unbewusster Prozesse==.",
    merksatz: "Freud = ==psychodynamisch (Triebe, Unbewusstes)==; Watson = ==behavioristisch (Reiz, Reaktion, Konsequenz)==.",
    beleg: "Kap. 1.3, S. 14",
  },
  {
    id: "N1-9", teil: "A", kapitel: 1, thema: "Ansätze", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==humanistischen Ansatz== treffen zu?",
    aussagen: [
      { text: "Er entwickelte sich ab 1950 als Alternative zu den psychodynamischen und behavioristischen Ansichten.", istRichtig: true },
      { text: "Der Mensch wird als aktives Wesen gesehen, dessen Hauptaufgabe es ist, nach positiver Entwicklung zu streben.", istRichtig: true },
      { text: "Der Ansatz verfolgt eine holistische Herangehensweise und bezieht neben Psyche, Körper und Verhalten auch soziale und kulturelle Faktoren ein.", istRichtig: true },
      { text: "Zentrale Elemente des humanistischen Ansatzes sind Reiz, Reaktion und Verstärkung.", istRichtig: false },
    ],
    erklaerung: "a) richtig — er entstand ==ab 1950== als Gegenentwurf. b) richtig — Vertreter:innen wie ==Carl Rogers==, ==Abraham Maslow== und ==Charlotte Bühler== betonten die natürliche Tendenz zu geistiger Weiterentwicklung und Gesundheit. c) richtig — ==holistisch== heißt: der Mensch ==als Ganzes== steht im Mittelpunkt. d) falsch — zentrale Elemente sind ==Freiheit==, ==das Selbst== (Selbstverwirklichung, Selbstbewusstsein) sowie ==Bedürfnisse, Interessen und Ziele==; Reiz-Reaktion-Verstärkung gehört zum Behaviorismus.",
    merksatz: "Humanistisch = ==ab 1950==, ==holistisch==, ==Freiheit + Selbst + Bedürfnisse/Interessen/Ziele==.",
    beleg: "Kap. 1.3, S. 14-15",
  },
  {
    id: "N1-10", teil: "A", kapitel: 1, thema: "Ansätze", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==kognitiven== und zum ==biologisch-neurowissenschaftlichen Ansatz== sind korrekt?",
    aussagen: [
      { text: "Der kognitive Ansatz sieht Verhalten wie der Behaviorismus als vollständiges Resultat externer Bedingungen.", istRichtig: false },
      { text: "Der biologisch-neurowissenschaftliche Ansatz geht davon aus, dass psychische Phänomene auf biochemische Vorgänge im Körper zurückgeführt werden können, an denen unter anderem Gene, Nervensystem und Hormonsystem beteiligt sind.", istRichtig: true },
      { text: "Der kognitive Ansatz hat in den letzten Jahrzehnten stark an Bedeutung verloren.", istRichtig: false },
      { text: "Die verschiedenen Ansätze schließen einander zwingend aus; eine Kombination mehrerer Perspektiven ist nicht vorgesehen.", istRichtig: false },
    ],
    erklaerung: "a) falsch — genau umgekehrt: laut kognitivem Ansatz ist Verhalten ==nur bedingt== Resultat externer Bedingungen, weil Menschen ==denken== und davon Gebrauch machen. b) richtig — beteiligt sind ==Gene, Nervensystem und Hormonsystem==; Fortschritte in der Hirnforschung führten zu den ==kognitiven Neurowissenschaften==. c) falsch — er ist ==zum dominierenden Ansatz== der Psychologie geworden, besonders sichtbar in der Allgemeinen Psychologie. d) falsch — die Ansätze können sich ==ergänzen==; werden mehrere Perspektiven kombiniert, spricht man vom ==eklektischen Ansatz==.",
    merksatz: "Kognitiv = ==Denken statt nur Umwelt==, heute dominierend; biologisch = ==Gene, Nerven, Hormone==; kombiniert = ==eklektisch==.",
    beleg: "Kap. 1.3, S. 15",
  },
  {
    id: "N1-11", teil: "A", kapitel: 1, thema: "Ethik", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu den ==ethischen Grundsätzen der APA== sind korrekt?",
    aussagen: [
      { text: "Die American Psychological Association hat fünf ethische Grundsätze formuliert, an die sich Psycholog:innen in Forschung, Praxis und Lehre halten sollen.", istRichtig: true },
      { text: "Der Grundsatz Wohltätigkeit und Nicht-Schaden bezieht sich ausdrücklich nur auf Menschen, nicht auf Tiere.", istRichtig: false },
      { text: "Der Grundsatz Integrität verbietet unrechtmäßige Handlungen wie Betrug, absichtliche Falschdarstellung von Fakten und Täuschung.", istRichtig: true },
      { text: "Das Milgram-Experiment dürfte heutzutage in seiner ursprünglichen Form nicht mehr durchgeführt werden.", istRichtig: true },
    ],
    erklaerung: "a) richtig — es sind ==fünf== Grundsätze (APA, 2017). b) falsch — er verfolgt das Wohl aller ==Personen und Tiere==, mit denen Psycholog:innen durch Praxis oder Forschung Kontakt haben. c) richtig — geboten sind ==Ehrlichkeit, Genauigkeit und Wahrhaftigkeit==. d) richtig — ältere Untersuchungen achteten nur mangelhaft auf ==Integrität==; das ==Milgram-Experiment== (1963) ist das Skript-Beispiel dafür.",
    merksatz: "Fünf APA-Grundsätze; ==Integrität== ist der, an dem Milgram heute scheitern würde.",
    beleg: "Kap. 1.5, S. 17-18",
  },
  {
    id: "N1-12", teil: "A", kapitel: 1, thema: "Ethik", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Ethikkommission==, ==Gerechtigkeit== und ==Respekt== treffen zu?",
    aussagen: [
      { text: "Studien müssen im Forschungsbereich häufig erst von einer Ethikkommission hinsichtlich der Erfüllung ethischer Standards positiv begutachtet werden.", istRichtig: true },
      { text: "Das Machtverhältnis zwischen Psycholog:innen und Patient:innen gilt in der Praxis als mögliche Gefahrenquelle für unethisches Verhalten.", istRichtig: true },
      { text: "Der Grundsatz Gerechtigkeit besagt, dass jede Person in gleichem Ausmaß von den Erkenntnissen der Psychologie und deren Anwendung profitieren sollte.", istRichtig: true },
      { text: "Der Grundsatz Respekt für die Rechte und Würde von Personen umfasst das Recht auf Privatsphäre, Vertraulichkeit und Selbstbestimmung sowie die Berücksichtigung individueller, kultur- und rollenspezifischer Unterschiede.", istRichtig: true },
    ],
    erklaerung: "a) richtig — die ==Ethikkommission== prüft Studien vorab. b) richtig — das ==Machtverhältnis== in der Praxis ist eine benannte Gefahrenquelle. c) richtig — dazu gehört auch, die ==Grenzen der eigenen Kompetenz== zu erkennen, damit mögliche Voreingenommenheit nicht zu ungerechtem Verhalten führt. d) richtig — auf solchen Unterschieden basierende ==Vorurteile== sind zu eliminieren.",
    merksatz: "Ethik hat zwei Orte: ==Ethikkommission== (Forschung) und ==Machtverhältnis== (Praxis).",
    beleg: "Kap. 1.5, S. 17-18",
  },

  // ---------------------- Kapitel 3 ----------------------
  {
    id: "N3-1", teil: "A", kapitel: 3, thema: "Forschungsprozess", quelle: "generiert", schwierigkeit: 2,
    stem: "Was unterscheidet ==quantitative== und ==qualitative Forschung==?",
    aussagen: [
      { text: "Quantitative Forschung hat zum Ziel, psychologische Phänomene messbar und damit vergleichbar zu machen.", istRichtig: true },
      { text: "Die qualitative Forschung ist derzeit der in der Psychologie vorherrschende Ansatz.", istRichtig: false },
      { text: "In der quantitativen Forschung ist man weniger an Einzelpersonen als an Gruppen von Personen interessiert.", istRichtig: true },
      { text: "Bei der qualitativen Forschung stehen Messbarkeit und Mittelwertbildung im Vordergrund.", istRichtig: false },
    ],
    erklaerung: "a) richtig — ==messbar und vergleichbar== machen ist das quantitative Ziel. b) falsch — vorherrschend ist zurzeit die ==quantitative== Forschung. c) richtig — durch die Untersuchung mehrerer Personen wird ein für die Gruppe ==typischer (repräsentativer) Wert== ermittelt. d) falsch — bei der qualitativen Forschung stehen ==sinnverstehende und interpretative== Aspekte im Vordergrund, z. B. offene Fragen statt einer Skala von 1 bis 10.",
    merksatz: "Quantitativ = ==messen und vergleichen== (Gruppen); qualitativ = ==verstehen und interpretieren== (individuelle Antworten).",
    beleg: "Kap. 3.1.3, S. 54",
  },
  {
    id: "N3-2", teil: "A", kapitel: 3, thema: "Forschungsprozess", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==wissenschaftlichen Forschungsprozess== sind korrekt?",
    aussagen: [
      { text: "Der übliche Ansatz im quantitativen Paradigma ist der hypothesenprüfende Ansatz: Es wird eine Hypothese aufgestellt und anschließend überprüft.", istRichtig: true },
      { text: "Operationalisierung und Untersuchungsplanung erfolgen erst nach der Datenerhebung.", istRichtig: false },
      { text: "Bei der Datenaufbereitung werden die Daten gesichtet, auf Plausibilität geprüft und für die eigentliche Analyse vorbereitet.", istRichtig: true },
      { text: "Den Abschluss bildet die Publikation und/oder Präsentation der Ergebnisse.", istRichtig: true },
    ],
    erklaerung: "a) richtig — der ==hypothesenprüfende Ansatz== ist der Regelfall (Renner et al., 2012). b) falsch — die Reihenfolge lautet: 1 Fragestellung, 2 theoretische Einbettung und Hypothesen, 3 ==Operationalisierung und Untersuchungsplanung==, 4 ==Durchführung und Datenerhebung==, 5 Datenaufbereitung und -analyse, 6 Interpretation und Diskussion, 7 Publikation. c) richtig — dazu zählt z. B. das Digitalisieren von Fragebogendaten. d) richtig — ==Schritt 7==; so haben auch andere Forschende Zugang zu den Erkenntnissen.",
    merksatz: "Sieben Schritte: ==Frage - Hypothese - Planung - Erhebung - Analyse - Interpretation - Publikation==.",
    beleg: "Kap. 3.1.3, S. 54-55",
  },
  {
    id: "N3-3", teil: "A", kapitel: 3, thema: "Stichproben", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Population und Stichprobenarten== treffen zu?",
    aussagen: [
      { text: "Die Population (Grundgesamtheit) ist die Gesamtheit der Fälle, über die in einer Studie etwas ausgesagt werden soll.", istRichtig: true },
      { text: "Bei einer Zufallsstichprobe hat jede Person, die der Population angehört, die gleiche Chance, in die Stichprobe aufgenommen zu werden.", istRichtig: true },
      { text: "Gelegenheitsstichproben sind in der psychologischen Forschung selten, weil sie aufwendiger sind als Zufallsstichproben.", istRichtig: false },
      { text: "Ein Selection Bias entsteht dadurch, dass die Auswahl der Stichprobe vollständig zufällig erfolgt ist.", istRichtig: false },
    ],
    erklaerung: "a) richtig — eine ==Vollerhebung== ist praktisch nie möglich, deshalb zieht man ==Stichproben== als Teilmenge. b) richtig — Zufallsstichproben erfüllen am ehesten die ==Repräsentativität==, die wiederum Voraussetzung für die ==externe Validität== ist. c) falsch — ==Gelegenheitsstichproben== sind der Regelfall, weil sie ==wesentlich einfacher umzusetzen== sind (z. B. Studierende, Online-Umfragen). d) falsch — der ==Selection Bias== ist eine Verzerrung, die entsteht, weil die Auswahl ==nicht völlig zufällig== erfolgt ist.",
    merksatz: "Zufallsstichprobe = ==gleiche Chance für alle==; Gelegenheitsstichprobe = ==bequem, aber Selection Bias==.",
    beleg: "Kap. 3.3.3, S. 67-68",
  },
  {
    id: "N3-4", teil: "A", kapitel: 3, thema: "Skalenniveaus", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Intervall- und Verhältnisskala== sind korrekt?",
    aussagen: [
      { text: "Bei einer Intervallskala sind Rangordnung und Abstände definiert, ein natürlicher Nullpunkt fehlt jedoch.", istRichtig: true },
      { text: "Weil die Temperatur in Grad Celsius intervallskaliert ist, kann man sagen, dass 8 Grad Celsius doppelt so warm sind wie 4 Grad Celsius.", istRichtig: false },
      { text: "Bei einer Verhältnisskala (Ratio-Skala) erlaubt der natürliche Nullpunkt auch Aussagen über Verhältnisse, etwa eine dreimal so lange Reaktionszeit.", istRichtig: true },
      { text: "Variablen mit Intervall- oder Verhältnisskalenniveau zählen zu den kontinuierlichen Variablen.", istRichtig: true },
    ],
    erklaerung: "a) richtig — gleiche Unterschiede in den Messwerten bedeuten gleiche Unterschiede in den ==Merkmalsausprägungen==; auch psychische Merkmale wie Intelligenz werden meist ==intervallskaliert== behandelt (es gibt keine ==keine Intelligenz==). b) falsch — Verhältnisaussagen sind bei der Intervallskala ==nicht== erlaubt, weil der ==natürliche Nullpunkt== fehlt. c) richtig — Beispiele sind ==Kelvin==, Längen- und Gewichtsmaße sowie die ==Reaktionszeit==. d) richtig — nominal und ordinal sind dagegen ==kategoriale== Variablen.",
    merksatz: "Intervall = ==Abstände ja, Verhältnisse nein==; Verhältnis = ==natürlicher Nullpunkt==, also auch doppelt/dreimal so viel.",
    beleg: "Kap. 3.3.2, S. 64-66",
  },
  {
    id: "N3-5", teil: "A", kapitel: 3, thema: "Zusammenhangsmaße", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Streudiagramm== und ==Korrelation== sind korrekt?",
    aussagen: [
      { text: "Im Streudiagramm repräsentiert jeder Punkt eine Versuchseinheit, in der Psychologie in der Regel eine Person.", istRichtig: true },
      { text: "Der Korrelationskoeffizient eignet sich auch dafür, U-förmige (quadratische) Zusammenhänge zu quantifizieren.", istRichtig: false },
      { text: "Ein Korrelationskoeffizient von 0 entspricht einer perfekten negativen Korrelation.", istRichtig: false },
      { text: "Je mehr die eingekreiste Punktwolke einer Kreisform ähnelt, desto höher ist die Korrelation.", istRichtig: false },
    ],
    erklaerung: "a) richtig — auf den Achsen stehen die Ausprägungen der beiden Variablen, jeder ==Punkt== ist eine Versuchseinheit. b) falsch — ==r== quantifiziert nur den ==linearen== Zusammenhang und ist für nichtlineare (U-förmige) Verläufe ungeeignet. c) falsch — ==0== heißt ==kein linearer Zusammenhang==; ==-1== ist die perfekte negative Korrelation. d) falsch — genau umgekehrt: je ==kreisförmiger==, desto ==geringer== die Korrelation; je schmaler die ==Ellipse==, desto höher; bei perfekter Korrelation liegen alle Punkte auf einer ==Linie==.",
    merksatz: "r liegt zwischen ==-1 und 1==, misst nur ==linear==; ==Kreis = schwach==, ==schmale Ellipse = stark==.",
    beleg: "Kap. 3.5.4, S. 84-87",
  },

  // ---------------------- Kapitel 8 ----------------------
  {
    id: "N8-1", teil: "A", kapitel: 8, thema: "Mischel", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==kognitiven Persönlichkeitsmodell nach Mischel== treffen zu?",
    aussagen: [
      { text: "Mischel verstand Persönlichkeit als kognitives Verarbeitungssystem, das durch individuelle Lernerfahrungen und Sozialisierung geprägt wird.", istRichtig: true },
      { text: "Er postulierte fünf miteinander interagierende Persönlichkeitsvariablen, die Cognitive social learning person variables.", istRichtig: true },
      { text: "Zu diesen Variablen zählen unter anderem Ergebniserwartungen, subjektive Werte sowie Selbstregulationssysteme und Pläne.", istRichtig: true },
      { text: "Mischel lehnte vorangegangene Persönlichkeitsmodelle ab und entwickelte seinen Ansatz vollständig unabhängig von ihnen.", istRichtig: false },
    ],
    erklaerung: "a) richtig — Persönlichkeit als ==kognitives Verarbeitungssystem== (Mischel, 1973). b) richtig — es sind ==fünf== Variablen, die ==miteinander interagieren==. c) richtig — die fünf sind: ==Konstruktionskompetenz==, ==Kodierung und Kategorisierung von Ereignissen==, ==Ergebniserwartungen==, ==subjektive Werte==, ==Selbstregulationssysteme und Pläne==. d) falsch — Mischel verfolgte einen ==integrativen== Ansatz und kombinierte verschiedene vorangegangene Modelle; er zählt mit Rotter, Bandura und Kelly zum ==Neobehaviorismus==, der die ==Wechselwirkung zwischen Person und Situation== würdigt.",
    merksatz: "Mischel = ==integrativ==, fünf Personvariablen: ==Kompetenz, Kodierung, Erwartung, Werte, Selbstregulation==.",
    beleg: "Kap. 8.2.4, S. 251, 254",
  },
  {
    id: "N8-2", teil: "A", kapitel: 8, thema: "Mischel", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Belohnungsaufschub== und zum ==Marshmallow-Test== sind korrekt?",
    aussagen: [
      { text: "Untersucht wurde die Fähigkeit zum Belohnungsaufschub (delay of gratification) bei Kindern im Alter von circa 3,5 bis 6 Jahren.", istRichtig: true },
      { text: "Die Kinder hatten die Wahl zwischen einer kleinen, sofort verfügbaren Belohnung und der doppelten Menge, sofern sie bereit waren zu warten.", istRichtig: true },
      { text: "Die Versuchsleitung blieb während der Wartezeit im Raum, um das Verhalten der Kinder direkt zu protokollieren.", istRichtig: false },
      { text: "Kinder mit höherer Selbstkontrolle wurden zehn Jahre später von ihren Eltern als weniger sozial kompetent eingeschätzt.", istRichtig: false },
    ],
    erklaerung: "a) richtig — der ==Belohnungsaufschub== beschreibt den Verzicht auf eine sofortige Verstärkung zugunsten einer ==höherwertigen, zeitlich versetzten==. b) richtig — angeboten wurden z. B. Brezel, Kekse oder Marshmallow. c) falsch — die Versuchsleitung ==verließ den Raum für circa 15 Minuten==; gemessen wurde, wie lange die Kinder widerstehen konnten. d) falsch — sie wurden zehn Jahre später als ==akademisch und sozial kompetenter== eingeschätzt, zeigten bessere schulische Leistungen und konnten besser mit ==Frustration und Stress== umgehen. Beobachtet wurden dabei ==Ablenkungsstrategien==: Augen zuhalten, mit Händen und Füßen spielen, singen oder mit sich selbst sprechen.",
    merksatz: "Marshmallow-Test = ==warten für die doppelte Menge==; wer länger wartete, war 10 Jahre später ==kompetenter==.",
    beleg: "Kap. 8.2.4, S. 254-255",
  },
  {
    id: "N8-3", teil: "A", kapitel: 8, thema: "Kelly", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Kellys persönlichen Konstrukten== und zum ==Rep-Test== treffen zu?",
    aussagen: [
      { text: "Kellys Modell beruht auf der Kritik daran, Menschen auf vorgegebenen theoretischen Dimensionen einzuordnen.", istRichtig: true },
      { text: "Er verfolgte den Ansatz einer Psychologie der persönlichen Konstrukte, also Persönlichkeit anhand einzigartiger mentaler Konstrukte zu beschreiben.", istRichtig: true },
      { text: "Kelly betonte, dass sich persönliche Konstrukte im Laufe des Lebens verändern können.", istRichtig: true },
      { text: "Im Rep-Test werden aus den Elementen zufällig Dreiergruppen gebildet und die Testperson bestimmt, welche zwei Elemente einander ähnlich sind und sich damit vom dritten unterscheiden.", istRichtig: true },
    ],
    erklaerung: "a) richtig — er kritisierte diese ==dogmatische Rigidität== und ließ stattdessen jede Person ==individuell passende Dimensionen== heranziehen. b) richtig — persönliche Konstrukte sind ==individuelle Muster== aus eigenen Erfahrungen, Vorstellungen und Interpretationen. c) richtig — was an einem Punkt im Leben funktioniert, braucht bei geänderten ==Lebensumständen== möglicherweise Anpassung. d) richtig — der ==Role construct repertory test== (Rep-Test, Kelly 1955) erhebt zuerst ==Elemente== (Bezugspersonen zu bedeutenden sozialen Rollen wie Mutter, Vater, Chefin) und leitet daraus über die Dreiergruppen die ==Konstrukte== ab. Ergebnis sind ==keine standardisierten==, sondern individuelle Beschreibungen.",
    merksatz: "Kelly = ==eigene Dimensionen statt vorgegebener==; Rep-Test = ==Elemente in Dreiergruppen, zwei ähnlich gegen eines==.",
    beleg: "Kap. 8.2.4, S. 255-256",
  },
];
