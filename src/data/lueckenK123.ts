import type { Frage } from "../types";

// ============================================================
//  LÜCKEN-Fragen zu Kapitel 1–3 (Teil A)
//  Quelle: offizielles Lernskript, Seiten 9–87.
//  Deckt Themen ab, die in den bisherigen Fragensets fehlten.
//  Format: GENAU 4 Aussagen, jede einzeln richtig/falsch, min. 1 richtig.
// ============================================================

export const lueckenK123: Frage[] = [
  // ================= Kapitel 1 =================
  {
    id: "L1-1", teil: "A", kapitel: 1, thema: "Teildisziplinen", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Systematik der Teildisziplinen== der Psychologie sind korrekt?",
    aussagen: [
      { text: "Innerhalb der Psychologie kann zwischen Methoden-, Grundlagen- und Anwendungsfächern unterschieden werden.", istRichtig: true },
      { text: "Die Methodenfächer beinhalten Themen wie Ethik, Wissenschaftstheorie, Methodenlehre und Statistik.", istRichtig: true },
      { text: "Die Psychologie ist eine bereichsübergreifende Wissenschaft, die Elemente aus Geistes-, Sozial- und Naturwissenschaften vereint.", istRichtig: true },
      { text: "Die Aufteilung in Grundlagenfächer ist künstlich – es ergeben sich Überschneidungen, und ein Phänomen kann Inhalt mehrerer Fächer sein.", istRichtig: true },
    ],
    erklaerung: "(a) richtig: Das Skript unterscheidet ==Methoden-==, ==Grundlagen-== und ==Anwendungsfächer== als Ordnungssystem für Forschung und Lehre. (b) richtig: Die Methodenfächer bilden das ==Grundgerüst== psychologischer Forschung – Ethik, Wissenschaftstheorie, Methodenlehre, Statistik. (c) richtig: Die Psychologie ist ==bereichsübergreifend==; der naturwissenschaftliche Fokus wurde zuletzt stärker (kognitive Neurowissenschaft). (d) richtig: Die Aufteilung ist ausdrücklich als ==künstlich== bezeichnet – Beispiel Wahrnehmung, die in mehreren Fächern vorkommt.",
    merksatz: "==Methoden== = Werkzeug, ==Grundlagen== = Theorie, ==Anwendung== = Praxis – die Grenzen sind fließend.",
    beleg: "Kap. 1.2, S. 11–12",
  },
  {
    id: "L1-2", teil: "A", kapitel: 1, thema: "Teildisziplinen", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Zuordnungen zu ==Grundlagen-== und ==Anwendungsfächern== stimmen?",
    aussagen: [
      { text: "Die Allgemeine Psychologie untersucht Prozesse, die allen Menschen gemein sind, etwa Wahrnehmung, Denken, Lernen und Gedächtnis.", istRichtig: true },
      { text: "Die Sozialpsychologie untersucht Unterschiede im Erleben und Verhalten zwischen einzelnen Personen.", istRichtig: false },
      { text: "Die Klinische Psychologie ist ein Anwendungsfach und befasst sich mit psychischen Störungen sowie deren Prävention, Behandlung und Rehabilitation.", istRichtig: true },
      { text: "In den Anwendungsfächern wird ausschließlich praktisch gearbeitet, geforscht wird dort nicht.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: Die ==Allgemeine Psychologie== sucht allgemeingültige Gesetzmäßigkeiten (Wahrnehmung, Denken, Lernen, Gedächtnis, Sprache, Emotion, Motivation). (b) falsch: Das beschreibt die ==Differentielle und Persönlichkeitspsychologie==; die Sozialpsychologie untersucht ==soziale Einflüsse==, also die Wirkung der Interaktion mit anderen. (c) richtig: Die ==Klinische Psychologie== ist ein Anwendungsfach (Störungen, Prävention, Behandlung, Rehabilitation). (d) falsch: Auch in Anwendungsfächern wird geforscht – Beispiel ==Therapieevaluation==.",
    merksatz: "==Sozial== = die anderen, ==Differentiell== = die Unterschiede – nicht verwechseln.",
    beleg: "Kap. 1.2, S. 11–13",
  },
  {
    id: "L1-3", teil: "A", kapitel: 1, thema: "Ansätze", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==psychodynamischen== und zum ==behavioristischen Ansatz== treffen zu?",
    aussagen: [
      { text: "Der psychodynamische Ansatz nimmt an, dass Verhalten durch starke innere Kräfte (Triebe) beeinflusst wird.", istRichtig: true },
      { text: "Der behavioristische Ansatz erklärt Verhalten über beobachtbare Reize und Reaktionen sowie über beobachtbare Konsequenzen.", istRichtig: true },
      { text: "Als Begründer des behavioristischen Ansatzes gilt Carl Rogers.", istRichtig: false },
      { text: "Im behavioristischen Ansatz stehen die nicht direkt beobachtbaren mentalen Prozesse im Mittelpunkt.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: Grundannahme des ==psychodynamischen== Ansatzes sind innere ==Triebe==; Verhalten ist der Versuch, den Konflikt zwischen Bedürfnissen und sozialen Erfordernissen zu lösen (Begründer: ==Sigmund Freud==). (b) richtig: Der ==Behaviorismus== erklärt über ==Reize, Reaktionen und Konsequenzen==. (c) falsch: Begründer ist ==John Watson==; Carl Rogers gehört zum ==humanistischen== Ansatz. (d) falsch: Mentale Prozesse werden im Behaviorismus gerade ==nicht== berücksichtigt.",
    merksatz: "==Freud== = innere Triebe, ==Watson== = beobachtbares Verhalten, ==Rogers== = humanistisch.",
    beleg: "Kap. 1.3, S. 14",
  },
  {
    id: "L1-4", teil: "A", kapitel: 1, thema: "Ansätze", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==humanistischen==, ==kognitiven== und ==biologisch-neurowissenschaftlichen Ansatz== sind korrekt?",
    aussagen: [
      { text: "Der humanistische Ansatz entwickelte sich ab 1950 als Alternative zu den psychodynamischen und behavioristischen Ansichten.", istRichtig: true },
      { text: "Der kognitive Ansatz sieht Verhalten – im Gegensatz zum Behaviorismus – nur bedingt als Resultat externer Bedingungen.", istRichtig: true },
      { text: "Der biologisch-neurowissenschaftliche Ansatz geht davon aus, dass psychische Phänomene auf biochemische Vorgänge im Körper zurückgeführt werden können.", istRichtig: true },
      { text: "Werden mehrere Perspektiven zur Erklärung eines Phänomens herangezogen, spricht man von einem dualistischen Ansatz.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: Der ==humanistische== Ansatz entstand ab ==1950==; Vertreter sind Carl Rogers, Abraham Maslow und Charlotte Bühler, der Mensch wird ==holistisch== betrachtet. (b) richtig: Menschen handeln, weil sie ==denken== können – der kognitive Ansatz ist in den letzten Jahrzehnten dominierend geworden. (c) richtig: Beteiligt sind u. a. ==Gene==, ==Nervensystem== und ==Hormonsystem==. (d) falsch: Das Kombinieren mehrerer Perspektiven heißt ==eklektischer== Ansatz; „dualistisch“ meint die Trennung von Leib und Seele.",
    merksatz: "Mehrere Blickwinkel gleichzeitig = ==eklektisch== (nicht dualistisch).",
    beleg: "Kap. 1.3, S. 14–15",
  },

  // ================= Kapitel 2 =================
  {
    id: "L2-1", teil: "A", kapitel: 2, thema: "Antike & Mittelalter", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==römischen Antike== und zum ==Mittelalter== sind korrekt?",
    aussagen: [
      { text: "Die Römer gründeten keine eigenen Schulen für philosophisch-psychologische Lehren, trugen die griechischen Lehren aber weiter.", istRichtig: true },
      { text: "Mit dem Einzug des Christentums trat das Ziel, fromm und rechtgläubig zu leben, an die Stelle der Erforschung von Psyche und Geist.", istRichtig: true },
      { text: "Augustinus verortete die Seele in einem einzelnen Körperteil.", istRichtig: false },
      { text: "Thomas von Aquin war ein Hauptvertreter der Scholastik, also der Vereinigung aristotelischen Denkens mit der christlichen Lehre.", istRichtig: true },
    ],
    erklaerung: "(a) richtig: Anders als die Griechen gründeten die Römer keine eigenen Denkschulen, es gab aber Gelehrte, die die griechischen Lehren ==weitertrugen==. (b) richtig: Das Streben nach Erkenntnis wurde vom Ziel abgelöst, ==fromm und rechtgläubig== zu leben. (c) falsch: Für ==Augustinus== war die Seele ==nicht== in einem Körperteil verortet, sondern im ==gesamten Körper== gegenwärtig. (d) richtig: ==Thomas von Aquin== ist Hauptvertreter der ==Scholastik== und beschrieb – auf Aristoteles aufbauend – drei Arten von Seelen.",
    merksatz: "==Augustinus== = Seele im ganzen Körper; ==Thomas von Aquin== = Scholastik (Aristoteles + Christentum).",
    beleg: "Kap. 2.1.2, S. 23–24",
  },
  {
    id: "L2-2", teil: "A", kapitel: 2, thema: "Rationalismus/Empirismus", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Rationalismus== und ==Empirismus== treffen zu?",
    aussagen: [
      { text: "Im Rationalismus kann Wissen ausschließlich durch die Nutzung des Verstandes erkannt werden; René Descartes war ein Hauptvertreter.", istRichtig: true },
      { text: "Descartes vermutete die Verbindung von stofflicher Welt (res extensa) und geistiger Welt (res cogitans) über die Zirbeldrüse.", istRichtig: true },
      { text: "Der Empirismus kennt zwei Quellen der Erkenntnis: die Sensation (Wahrnehmung äußerer Reize) und die Reflexion (Beobachtung des eigenen Denkens).", istRichtig: true },
      { text: "Baruch de Spinoza gilt als einer der Hauptvertreter des Dualismus.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: Im ==Rationalismus== gilt allein die ==Vernunft== als Quelle der Erkenntnis; von Descartes stammt „cogito ergo sum“. (b) richtig: Descartes vermutete die Verbindung von ==res extensa== und ==res cogitans== in der ==Zirbeldrüse==. (c) richtig: Der Empirismus sieht den Geist bei Geburt als ==unbeschriebenes Blatt== und kennt ==Sensation== und ==Reflexion==; John Locke verfasste die erste empiristische Erkenntnistheorie. (d) falsch: ==Spinoza== war Hauptvertreter des ==Monismus== (Einheit von Körper und Seele) – den ==Dualismus== vertrat Descartes.",
    merksatz: "==Descartes== = Verstand + Dualismus + Zirbeldrüse; ==Locke== = Erfahrung, ==Spinoza== = Monismus.",
    beleg: "Kap. 2.1.3, S. 25–26",
  },
  {
    id: "L2-3", teil: "A", kapitel: 2, thema: "18./19. Jahrhundert", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Ausdruckspsychologie== und ==Positivismus== sind korrekt?",
    aussagen: [
      { text: "Die Physiognomik wollte anhand der Ausdrucksmerkmale von Gesicht und Körper auf Charaktereigenschaften schließen; Hauptvertreter war Johann Caspar Lavater.", istRichtig: true },
      { text: "Franz Joseph Gall nahm an, dass sich aus Form und Größe des Schädels die Ausprägung der darunterliegenden Hirnareale abschätzen lasse.", istRichtig: true },
      { text: "Galls Annahmen über den Schluss von der Schädelform auf den Charakter haben sich als richtig erwiesen.", istRichtig: false },
      { text: "Als Begründer des Positivismus gilt Auguste Comte, der auch als Begründer der Soziologie gilt.", istRichtig: true },
    ],
    erklaerung: "(a) richtig: Die ==Physiognomik== schließt von körperlichen Ausdrucksmerkmalen auf den Charakter; ==Lavater== entwickelte dafür Regeln. (b) richtig: Das ist die ==Phrenologie== nach ==Franz Joseph Gall==. (c) falsch: Diese Annahmen stellten sich als ==falsch== heraus – unabhängig davon konnte später gezeigt werden, dass einzelnen Cortexarealen konkrete Aufgaben zugeordnet werden können (z. B. Broca-Areal). (d) richtig: ==Auguste Comte== begründete den ==Positivismus==, der die vorurteilsfreie Erfassung ausschließlich ==überprüfbarer Tatsachen== fordert.",
    merksatz: "==Lavater== = Gesicht, ==Gall== = Schädel – beides widerlegt; ==Comte== = Positivismus.",
    beleg: "Kap. 2.2.2, S. 28–30",
  },
  {
    id: "L2-4", teil: "A", kapitel: 2, thema: "Neubegründung", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==naturwissenschaftlichen Neubegründung== der Psychologie treffen zu?",
    aussagen: [
      { text: "Johann Friedrich Herbart entwickelte mathematische Modelle der Vorstellungen und widerlegte damit Kants Annahme, die Psychologie sei nicht mathematisierbar.", istRichtig: true },
      { text: "Hermann von Helmholtz gilt als Pionier in der Erforschung der Nervenleitgeschwindigkeit.", istRichtig: true },
      { text: "Gustav Theodor Fechner begründete die Psychophysik, die sich in eine äußere und eine innere Psychophysik teilt.", istRichtig: true },
      { text: "Fechner verfolgte ausdrücklich das Ziel, die naturwissenschaftliche Psychologie als eigenständige Disziplin von der Philosophie zu trennen.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: ==Herbart== stellte die Psychologie auf ein ==empirisches Fundament== und widerlegte Kants Annahme, sie sei nicht „mathematisierbar“. (b) richtig: ==Helmholtz== maß die ==Nervenleitgeschwindigkeit== apparativ und erkannte zugleich, dass in jeder Beobachtung Einflüsse der beobachtenden Person stecken. (c) richtig: Die ==äußere== Psychophysik verbindet Sinnesreiz und Empfindung, die ==innere== Körpererregung und Empfindung. (d) falsch: Fechner sah die Psychophysik nur als Untermauerung einer philosophischen Theorie der Seele – eine ==Trennung== von Psychologie und Philosophie lag ihm fern.",
    merksatz: "==Herbart== rechnet, ==Helmholtz== misst, ==Fechner== experimentiert – aber ohne Trennungsabsicht.",
    beleg: "Kap. 2.2.3, S. 32–33",
  },
  {
    id: "L2-5", teil: "A", kapitel: 2, thema: "NS-Zeit", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==Psychologie während des Nationalsozialismus== sind korrekt?",
    aussagen: [
      { text: "Ab 1933 wurde jüdischen Studierenden bzw. Studierenden mit jüdischen Eltern oder Großeltern die Inskription verwehrt, was mit einem Abfall der Doktoratsabschlüsse einherging.", istRichtig: true },
      { text: "Charlotte Bühler, Max Wertheimer und William Stern verloren durch einen Gesetzeserlass ihre Professur.", istRichtig: true },
      { text: "Insgesamt emigrierten circa 35 Prozent der Universitätslehrenden, größtenteils in die USA.", istRichtig: true },
      { text: "Kurt Lewin emigrierte erst nach Kriegsende in die USA.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: Zulassungen wurden politisch und rassistisch verweigert; jüdischen Studierenden wurde die ==Inskription== verwehrt. (b) richtig: Ein Gesetzeserlass ermöglichte die Entlassung von Staatsbeamten jüdischer Abstammung und politisch unerwünschter Personen – betroffen waren u. a. ==Charlotte Bühler==, ==Max Wertheimer== und ==William Stern==. (c) richtig: Rund ==35 %== der Universitätslehrenden und ==15 %== der Mitglieder der Deutschen Gesellschaft für Psychologie emigrierten. (d) falsch: ==Kurt Lewin== legte bereits ==vor== dem Gesetzesbeschluss sein Amt nieder und emigrierte in die USA.",
    merksatz: "Ab ==1933==: Entlassungen und Emigration – ==35 %== der Lehrenden gingen, meist in die USA.",
    beleg: "Kap. 2.3, S. 38",
  },
  {
    id: "L2-6", teil: "A", kapitel: 2, thema: "NS-Zeit", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==inhaltlichen Neuausrichtung== in der NS-Zeit und zur ==Nachkriegszeit== treffen zu?",
    aussagen: [
      { text: "Die Rassenpsychologie verortete geistig-seelische Unterschiede in Abhängigkeit der Rassenzugehörigkeit und geriet in dieser Zeit in den Forschungsfokus.", istRichtig: true },
      { text: "Die Psychologische Diagnostik erlebte vor und während des Zweiten Weltkriegs einen Aufschwung, weil im Bereich der Wehrmacht Leistungstests zur Auslese entwickelt werden mussten.", istRichtig: true },
      { text: "Die Deutsche Gesellschaft für Psychologie blieb nach Kriegsende unverändert bestehen.", istRichtig: false },
      { text: "Die Österreichische Gesellschaft für Psychologie (ÖGP) wurde bereits 1904 gegründet.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: Neu war in dieser Zeit die ==Bewertung==: nicht arische Gruppierungen wurden als „minderwertig“ klassifiziert. (b) richtig: Leistungstests zur Auslese von Luftwaffensoldaten und Führungskandidaten führten zum Aufschwung der ==Psychologischen Diagnostik== und zur ersten ==Diplomprüfungsordnung==. (c) falsch: Nach Kriegsende kam es zur ==Auflösung== der Deutschen Gesellschaft für Psychologie durch die Besatzungsmächte; ab ==1947== wurde sie in den Besatzungszonen wieder gegründet. (d) falsch: Die ==ÖGP== wurde erst ==1993== gegründet – ==1904== war die Gründung der ==Deutschen== Gesellschaft für Psychologie.",
    merksatz: "==1904== DGP, ==1947== Wiedergründung, ==1993== ÖGP – die Diagnostik profitierte, die Wissenschaft verlor.",
    beleg: "Kap. 2.3, S. 38–39",
  },
  {
    id: "L2-7", teil: "A", kapitel: 2, thema: "Würzburger Schule", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Würzburger Schule== sind korrekt?",
    aussagen: [
      { text: "Die Würzburger Schule wurde von Oswald Külpe, einem Schüler Wundts, begründet.", istRichtig: true },
      { text: "Ihre zentrale Fragestellung lautete: Wie laufen Denkvorgänge ab?", istRichtig: true },
      { text: "Sie arbeitete mit methodisch kontrollierter Introspektion, die – anders als bei Wundt – auf höhere geistige Funktionen ausgedehnt wurde.", istRichtig: true },
      { text: "Wundt begrüßte die Methode der Würzburger und übernahm sie in sein eigenes Labor.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: Begründer war ==Oswald Külpe==, ein Schüler Wundts. (b) richtig: Im Zentrum stand die Frage nach dem ==Ablauf von Denkvorgängen==; Probanden bekamen Denksportaufgaben und beschrieben danach ihren Gedankenweg. (c) richtig: Die ==kontrollierte Introspektion== wurde auf ==höhere geistige Funktionen== ausgedehnt. (d) falsch: Wundt kritisierte die Methode als ==Ausfrageexperimente== bzw. Scheinexperimente, weil für ihn nur ==elementare== psychische Prozesse experimentell erfassbar waren.",
    merksatz: "==Külpe== denkt laut – ==Wundt== nennt es „Ausfrageexperiment“; trotzdem Wegbereiterin der Kognitiven Psychologie.",
    beleg: "Kap. 2.4.1, S. 40",
  },
  {
    id: "L2-8", teil: "A", kapitel: 2, thema: "Tiefenpsychologie", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==Tiefenpsychologie== treffen zu?",
    aussagen: [
      { text: "Alfred Adler begründete die Individualpsychologie und wandte sich von Freuds Fokussierung auf die Sexualität ab.", istRichtig: true },
      { text: "Freuds Instanzenmodell beschreibt das Es (triebgesteuert, Lustprinzip), das Über-Ich (soziales Regulativ) und das Ich (Vermittler).", istRichtig: true },
      { text: "Für C. G. Jung ist die Libido eine allgemeine Lebensenergie und nicht nur sexuelle Triebenergie wie bei Freud.", istRichtig: true },
      { text: "Der Begriff des Archetypus stammt von Alfred Adler.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: ==Adler== sah neurotische Verhaltensformen als ==Überkompensation== individueller Unzulänglichkeiten, Motor ist das ==Geltungsstreben==, kompensiert durch das ==Gemeinschaftsgefühl==. (b) richtig: ==Es – Über-Ich – Ich==; das Ich nutzt ==Abwehrmechanismen== wie die Verdrängung. (c) richtig: Für Jung ist die ==Libido== allgemeine ==Lebensenergie==. (d) falsch: Der ==Archetypus== (z. B. die Magna Mater) stammt von ==C. G. Jung==, der auch das ==kollektive Unbewusste== postulierte.",
    merksatz: "==Freud== = Trieb, ==Adler== = Geltung, ==Jung== = Archetypus & kollektives Unbewusstes.",
    beleg: "Kap. 2.4.4, S. 45–46",
  },
  {
    id: "L2-9", teil: "A", kapitel: 2, thema: "Kognitive Wende", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==Kognitiven Wende== sind korrekt?",
    aussagen: [
      { text: "Das Hixon-Symposium 1948 gilt vielfach als Beginn der Kognitiven Wende.", istRichtig: true },
      { text: "Beim Symposium on Information Theory am MIT (11. September 1956) lieferten George Miller, Noam Chomsky sowie Newell und Simon wegweisende Beiträge.", istRichtig: true },
      { text: "George Miller zeigte, dass die Zahl der Einheiten, die Menschen im Kurzzeitgedächtnis behalten können, auf maximal sieben plus/minus zwei beschränkt ist.", istRichtig: true },
      { text: "In der Kognitionspsychologie wird der Mensch als informationsverarbeitendes System betrachtet.", istRichtig: true },
    ],
    erklaerung: "(a) richtig: Das interdisziplinäre ==Hixon-Symposium== (1948, Thema „Cerebral mechanisms in behavior“) gilt als Beginn. (b) richtig: Der ==11. September 1956== ging als Geburtsdatum der Kognitionswissenschaft ein: ==Miller== (Psychologie), ==Chomsky== (Linguistik), ==Newell & Simon== (Computerwissenschaft). (c) richtig: ==7 ± 2== Einheiten. (d) richtig: Der Mensch gilt als ==informationsverarbeitendes System==; Verhalten ist auch Ergebnis ==interner Handlungsziele==, nicht nur externer Bedingungen. Ab den 1970er Jahren wurde die Kognitionspsychologie zur ==dominierenden== Richtung.",
    merksatz: "==1948 Hixon==, ==1956 MIT==: Miller (7±2), Chomsky (Grammatik), Newell & Simon (Logikmaschine).",
    beleg: "Kap. 2.4.5, S. 47–48",
  },

  // ================= Kapitel 3 =================
  {
    id: "L3-1", teil: "A", kapitel: 3, thema: "Alltagspsychologie", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum Unterschied von ==Alltagspsychologie== und ==wissenschaftlicher Psychologie== treffen zu?",
    aussagen: [
      { text: "Alltagspsychologie (Laienpsychologie) beruht auf eigenen Erfahrungen und daraus abgeleiteten vermeintlichen Gesetzmäßigkeiten.", istRichtig: true },
      { text: "Der Rückschaufehler (Hindsight Bias) beschreibt den Eindruck, den Ausgang eines Geschehnisses schon vorher richtig vorausgesagt zu haben.", istRichtig: true },
      { text: "Der Bestätigungsfehler (Confirmation Bias) ist die Neigung, jenen Informationen mehr Bedeutung beizumessen, welche die eigene Überzeugung bestätigen.", istRichtig: true },
      { text: "Heuristiken sind Faustregeln, die als sparsame Strategien immer zu korrekten Urteilen führen.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: Alltagstheorien entstehen aus ==Erfahrung==; die wissenschaftliche Psychologie prüft solche Theorien mit ==wissenschaftlichen Methoden==. (b) richtig: ==Rückschaufehler== – „Ich hab's ja gewusst.“ (c) richtig: ==Bestätigungsfehler== – bestätigende Information zählt mehr als widersprechende. (d) falsch: Heuristiken führen ==in vielen Fällen== zu korrekten Urteilen, sind aber wegen ihrer sparsamen Art ==fehleranfällig==. Erster Schritt Richtung Wissenschaftlichkeit ist das ==kritische Denken==.",
    merksatz: "Heuristiken = ==schnell, aber fehleranfällig== – Wissenschaft ersetzt Bauchgefühl durch ==kritisches Denken==.",
    beleg: "Kap. 3.1.1, S. 51–52",
  },
  {
    id: "L3-2", teil: "A", kapitel: 3, thema: "Hypothesenarten", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu den ==Arten von Hypothesen== sind korrekt?",
    aussagen: [
      { text: "„Linkshändigkeit tritt bei Männern und Frauen unterschiedlich häufig auf“ ist eine ungerichtete Unterschiedshypothese.", istRichtig: true },
      { text: "Bei einer gerichteten Unterschiedshypothese wird zusätzlich spezifiziert, inwiefern sich die Gruppen unterscheiden.", istRichtig: true },
      { text: "Eine negativ gerichtete Zusammenhangshypothese vermutet, dass hohe Werte einer Variable mit niedrigen Werten der anderen Variable einhergehen.", istRichtig: true },
      { text: "Veränderungshypothesen lassen sich mit einem einzigen Erhebungszeitpunkt überprüfen.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: Es wird nur ==ein Unterschied== behauptet, ohne Richtung – also ==ungerichtet==. (b) richtig: Gerichtet wäre: „Linkshändigkeit tritt bei Männern ==häufiger== auf als bei Frauen.“ (c) richtig: ==Negativ gerichtet== = gegenläufig (hoch ↔ niedrig); ==positiv gerichtet== = gleichläufig. „Positiv/negativ“ ist keine Wertung, sondern die ==Richtung==. (d) falsch: ==Veränderungshypothesen== brauchen zur Überprüfung ==mehrere Erhebungszeitpunkte== – das unterscheidet sie von Unterschiedshypothesen.",
    merksatz: "==Unterschied== = Gruppen, ==Zusammenhang== = Variablen, ==Veränderung== = mehrere Zeitpunkte.",
    beleg: "Kap. 3.2.2, S. 59",
  },
  {
    id: "L3-3", teil: "A", kapitel: 3, thema: "Operationalisierung", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Operationalisierung==, ==Stichprobe== und ==Studiendesign== treffen zu?",
    aussagen: [
      { text: "Latente Merkmale können nicht direkt beobachtet werden; stattdessen greift man auf manifeste Merkmale als Indikatoren zurück.", istRichtig: true },
      { text: "Bei einer Zufallsstichprobe hat jede Person der Population die gleiche Chance, in die Stichprobe aufgenommen zu werden.", istRichtig: true },
      { text: "Gelegenheitsstichproben erfüllen die Forderung nach Repräsentativität besonders gut.", istRichtig: false },
      { text: "Felduntersuchungen haben gegenüber Laboruntersuchungen eine geringere interne, aber eine größere externe Validität.", istRichtig: true },
    ],
    erklaerung: "(a) richtig: Die Festlegung der Operationen zur Erfassung eines Merkmals heißt ==Operationalisierung==; das operationalisierte Merkmal ist die ==Variable==. (b) richtig: Gleiche Chance für alle = ==Zufallsstichprobe==; sie erfüllt die ==Repräsentativität== am ehesten. (c) falsch: ==Gelegenheitsstichproben== sind bequem, aber es kann nicht ausgeschlossen werden, dass vor allem Personen mit bestimmten Merkmalsausprägungen teilnehmen (==Selection Bias==). (d) richtig: Im ==Feld== verhalten sich Personen authentischer (größere ==externe Validität==), Störfaktoren lassen sich aber schlechter kontrollieren (geringere ==interne Validität==).",
    merksatz: "==Labor== = Kontrolle (intern), ==Feld== = Echtheit (extern) – ein Tausch, kein Gewinn auf beiden Seiten.",
    beleg: "Kap. 3.3.1/3.3.3/3.3.4, S. 61–70",
  },
  {
    id: "L3-4", teil: "A", kapitel: 3, thema: "Experiment", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==experimentellen Methode== und zur ==zeitlichen Abfolge== sind korrekt?",
    aussagen: [
      { text: "Um die zeitliche Abfolge sicherzustellen, wird die unabhängige Variable von der Versuchsleitung systematisch variiert (manipuliert).", istRichtig: true },
      { text: "Bei einem Between-Subjects-Design durchlaufen alle Versuchspersonen alle Bedingungen des Experiments.", istRichtig: false },
      { text: "Für einen Kausalschluss genügt es, dass zwei Variablen miteinander kovariieren.", istRichtig: false },
      { text: "Die unabhängige Variable ist definitionsgemäß jene Variable, die von der abhängigen Variable beeinflusst wird.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: Durch die ==Manipulation== der UV steht fest, dass die vermutete Ursache ==zeitlich zuerst== auftritt; damit ist auch eine umgekehrte Kausalrichtung ausgeschlossen. (b) falsch: Das beschreibt das ==Within-Subjects-Design==; beim ==Between-Subjects-Design== wird jede Versuchsperson ==per Zufall== nur ==einer== Bedingung zugeordnet. (c) falsch: Neben der ==Kovariation== braucht es (1) die ==zeitliche Abfolge== und (2) den ==Ausschluss anderer Ursachen==. (d) falsch: Umgekehrt – die ==abhängige== Variable (AV) hängt von der ==unabhängigen== Variable (UV) ab.",
    merksatz: "Kausalität = ==Kovariation + Zeitfolge + Ausschluss anderer Ursachen== (alle drei, nicht nur eine).",
    beleg: "Kap. 3.4/3.4.1, S. 71–73",
  },
  {
    id: "L3-5", teil: "A", kapitel: 3, thema: "Konfundierung", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Störvariablen== und deren ==Kontrolle== treffen zu?",
    aussagen: [
      { text: "Von einer Konfundierung spricht man, wenn eine Störvariable als Alternativerklärung infrage kommt, weil sie mit der abhängigen Variable kovariiert.", istRichtig: true },
      { text: "Randomisierung ist die zufällige Zuweisung der Versuchspersonen zu den Versuchsbedingungen und die wichtigste Methode zur Balancierung.", istRichtig: true },
      { text: "Untersuchungen, die alle Kriterien eines Experiments außer der Randomisierung erfüllen, werden als Quasi-Experimente bezeichnet.", istRichtig: true },
      { text: "Parallelisieren kontrolliert – anders als die Randomisierung – gleichzeitig alle bekannten und unbekannten personengebundenen Störvariablen.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: Genau das ist die ==Konfundierung== – z. B. wenn in einer Gruppe zufällig mehr motivierte oder ältere Personen sind. (b) richtig: ==Randomisierung== balanciert bei ausreichend großer Stichprobe die personengebundenen Störvariablen. (c) richtig: Fehlt die Randomisierung, spricht man von ==Quasi-Experimenten== – mit Einbußen bei der ==internen Validität==. (d) falsch: Es ist umgekehrt: ==Parallelisieren== kontrolliert nur ==eine== bekannte Störvariable, die ==Randomisierung== dagegen ==alle== personengebundenen – bekannte wie unbekannte.",
    merksatz: "==Konstant halten== (Ablauf) + ==Balancieren== (Personen) – und Balancieren geht am besten per ==Randomisierung==.",
    beleg: "Kap. 3.4.2, S. 73–75",
  },
  {
    id: "L3-6", teil: "A", kapitel: 3, thema: "Erwartungseffekte", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==Erwartungseffekten== und deren Kontrolle sind korrekt?",
    aussagen: [
      { text: "Reaktivität bzw. der Hawthorne-Effekt beschreibt, dass Versuchspersonen ihr Verhalten allein deshalb verändern, weil sie wissen, dass sie beobachtet werden.", istRichtig: true },
      { text: "Der Rosenthal-Effekt geht auf die Erwartungen der Versuchsleitung zurück und wirkt wie eine selbsterfüllende Prophezeiung.", istRichtig: true },
      { text: "Bei Doppelblindstudien wissen weder die Versuchsperson noch die Versuchsleitung, welcher Versuchsbedingung die Versuchsperson zugeordnet wurde.", istRichtig: true },
      { text: "Der Nocebo-Effekt beschreibt eine positive Veränderung des Gesundheitszustands nach Einnahme eines Scheinmedikaments.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: ==Reaktivität== / ==Hawthorne-Effekt== – benannt nach Untersuchungen in den Hawthorne-Werken; sie gefährdet die ==interne Validität==. (b) richtig: Im Rattenexperiment von Rosenthal und Fode (1963) verbesserten sich die vermeintlich intelligenten Ratten – der ==Rosenthal-Effekt== ist ==unbeabsichtigt==. (c) richtig: ==Doppelblind== kontrolliert den Rosenthal-Effekt; nachträglich muss die Zuordnung aber nachvollziehbar bleiben. (d) falsch: Das beschreibt den ==Placebo-Effekt==; der ==Nocebo-Effekt== meint ==unerwünschte== Wirkungen nach einer nicht wirksamen Behandlung.",
    merksatz: "==Blind== = Versuchsperson weiß nichts, ==Doppelblind== = auch die Versuchsleitung nicht; ==Placebo== positiv, ==Nocebo== negativ.",
    beleg: "Kap. 3.4.3, S. 75–77",
  },
  {
    id: "L3-7", teil: "A", kapitel: 3, thema: "Häufigkeiten", quelle: "generiert", schwierigkeit: 1,
    stem: "Welche Aussagen zu ==Häufigkeiten== und ==Häufigkeitsverteilungen== treffen zu?",
    aussagen: [
      { text: "Absolute Häufigkeiten geben die Anzahl der Werte pro Variablenausprägung an.", istRichtig: true },
      { text: "Relative Häufigkeiten erhält man, indem die absoluten Häufigkeiten durch die Gesamtanzahl der Werte dividiert werden; ihre Summe beträgt immer 1.", istRichtig: true },
      { text: "Prozentuale Häufigkeiten erhält man, indem die relativen Häufigkeiten mit 100 multipliziert werden.", istRichtig: true },
      { text: "Zur Veranschaulichung von Häufigkeitsverteilungen eignen sich vor allem Streudiagramme.", istRichtig: false },
    ],
    erklaerung: "(a) richtig: ==Absolut== = reine Anzahl (z. B. 10 Personen aus Österreich). (b) richtig: ==Relativ== = Anteil (10/20 = 0,50); die Summe aller relativen Anteile ist immer ==1==. (c) richtig: 0,50 · 100 = ==50 %==. (d) falsch: Für Häufigkeitsverteilungen eignen sich ==Histogramme== – x-Achse: Ausprägungen, y-Achse: Häufigkeiten. Bei kontinuierlichen Variablen bildet man dafür ==Intervalle==.",
    merksatz: "==Absolut== = Anzahl, ==relativ== = Anteil (Summe 1), ==prozentual== = mal 100; dargestellt im ==Histogramm==.",
    beleg: "Kap. 3.5.1, S. 78–80",
  },
];
