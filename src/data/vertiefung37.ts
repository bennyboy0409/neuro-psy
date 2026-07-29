import type { Frage } from "../types";

/**
 * Vertiefungsfragen zu Luecken aus dem Vollstaendigkeits-Audit:
 * 7.3.4 Gehorsam, 7.3.2 Mehrheiten, 7.4.2 Minimalgruppenparadigma,
 * 3.1.2 Wissenschaftlichkeit/Replikation, 3.3.4 Studiendesigns, 3.5.4 Zusammenhangsmasse.
 */
export const vertiefung37: Frage[] = [
  // ---------------- 7.3.4 Gehorsam gegenüber Autoritäten ----------------
  {
    id: "V37-1", teil: "A", kapitel: 7, thema: "Gehorsam", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Versuchsaufbau== des Milgram-Experiments (1963) sind korrekt?",
    aussagen: [
      { text: "Das Experiment umfasste drei Rollen: einen Versuchsleiter als Autoritätsperson, einen Schüler als Helfer des Versuchsleiters und einen Lehrer, der die echte Versuchsperson war.", istRichtig: true },
      { text: "Den Versuchspersonen wurde vorab offengelegt, dass in Wahrheit der Gehorsam gegenüber Autoritäten untersucht wird.", istRichtig: false },
      { text: "Der Schüler sollte eine Liste von Wortpaaren auswendig lernen und wurde anschließend vom Lehrer abgeprüft.", istRichtig: true },
      { text: "Sowohl der Schüler als auch der Lehrer waren in den wahren Versuchsaufbau eingeweiht.", istRichtig: false },
    ],
    erklaerung: "a) richtig – die drei Rollen waren ==Versuchsleiter (V)== als Autoritätsperson, ==Schüler (S)== als eingeweihter Helfer und ==Lehrer (L)== als eigentliche Versuchsperson.\nb) falsch – den Versuchspersonen wurde glaubhaft gemacht, es gehe um die ==Effekte von Bestrafung auf das Lernen==; das war eine Coverstory.\nc) richtig – der Schüler lernte Wortpaare, der Lehrer prüfte ab und sollte falsche Antworten bestrafen.\nd) falsch – ==bis auf die Versuchsperson== (den Lehrer) waren alle Beteiligten eingeweiht. Der Lehrer sah sogar mit an, wie der Schüler nebenan an einen Stuhl gebunden und mit einem Stromkabel verbunden wurde.",
    merksatz: "Nur der ==Lehrer== war ahnungslos – alle anderen spielten ihre Rolle nach Drehbuch.",
    beleg: "Kap. 7.3.4, S. 209–210",
  },
  {
    id: "V37-2", teil: "A", kapitel: 7, thema: "Gehorsam", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==Schockgenerator== und zu den Instruktionen im Milgram-Experiment sind korrekt?",
    aussagen: [
      { text: "Die Stromschläge reichten von 15 bis 450 Volt, und bei jeder weiteren falschen Antwort musste eine Stufe höher gegangen werden.", istRichtig: true },
      { text: "Der Bereich von 375 bis 420 Volt war mit ==Gefahr: heftiger Stromstoß== beschriftet, der Bereich von 435 bis 450 Volt mit ==XXX==.", istRichtig: true },
      { text: "Der Schüler erhielt tatsächlich Stromschläge, weshalb seine Reaktionen bei jeder Versuchsperson unterschiedlich ausfielen.", istRichtig: false },
      { text: "Wollte der Lehrer abbrechen, reagierte der Versuchsleiter mit standardisierten Sätzen wie: Der Versuch erfordert, dass Sie weitermachen.", istRichtig: true },
    ],
    erklaerung: "a) richtig – die Skala reichte von ==15 bis 450 Volt==; die unterste Stufe war als leichter Stromschlag bezeichnet, jeder neue Fehler bedeutete eine Stufe mehr.\nb) richtig – 375 bis 420 Volt trugen die Warnung ==Gefahr: heftiger Stromstoß==, 435 bis 450 Volt nur noch ==XXX==.\nc) falsch – der Schüler war eingeweiht, bekam ==keine echten Stromstöße==, und sein Verhalten war ==standardisiert==, also für alle Versuchspersonen gleich.\nd) richtig – der Versuchsleiter antwortete freundlich, aber bestimmt mit vorformulierten Sätzen (auch: Sie haben keine andere Wahl, Sie müssen bitte weitermachen). Der soziale Druck war Teil des Designs.",
    merksatz: "==15 bis 450 Volt==, standardisierte Schüler-Reaktionen, standardisierte Ansagen – alles außer dem Gehorsam war kontrolliert.",
    beleg: "Kap. 7.3.4, S. 210",
  },
  {
    id: "V37-3", teil: "A", kapitel: 7, thema: "Gehorsam", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==ersten Studie== von Milgram (1963) und ihren Ergebnissen sind korrekt?",
    aussagen: [
      { text: "Es nahmen 40 Männer im Alter zwischen 20 und 50 Jahren als Versuchspersonen teil.", istRichtig: true },
      { text: "Der Schüler äußerte sich zunächst nicht; erst nach dem Schlag mit 300 Volt nahm der Lehrer Protest durch die Wand wahr, danach kamen keine Antworten mehr.", istRichtig: true },
      { text: "Alle Teilnehmer waren bereit, Stromschläge von bis zu 300 Volt zu verabreichen.", istRichtig: true },
      { text: "Milgrams Dokumentationen zeigen, dass die Lehrer deutliche Zeichen von Angst und Stress zeigten: Sie zögerten, schwitzten und zitterten.", istRichtig: true },
    ],
    erklaerung: "Alle vier Aussagen treffen zu.\na) richtig – die Stichprobe bestand aus ==40 Männern zwischen 20 und 50 Jahren==.\nb) richtig – in dieser ersten Variante gab es ==keinen direkten Kontakt== zum Schüler; erst ab ==300 Volt== war Protest durch die Wand hörbar, danach schwieg der Schüler ganz.\nc) richtig – ==ausnahmslos alle 40== gingen bis mindestens 300 Volt; 26 der 40 zogen sogar bis zur letzten Stufe durch.\nd) richtig – Gehorsam heißt nicht Gleichgültigkeit: Die Versuchspersonen zeigten starke ==Stresssymptome== und verabreichten die Schläge nicht leichtfertig.",
    merksatz: "==Alle== gingen bis 300 Volt – und litten dabei sichtbar. Gehorsam ist nicht dasselbe wie Grausamkeit.",
    beleg: "Kap. 7.3.4, S. 210–211",
  },
  {
    id: "V37-4", teil: "A", kapitel: 7, thema: "Gehorsam", quelle: "generiert", schwierigkeit: 3,
    stem: "Milgram (1974) berichtete 18 weitere Studien mit ==Variationen== des Aufbaus. Welche Aussagen dazu sind korrekt?",
    aussagen: [
      { text: "Mit abnehmender Distanz zum Schüler sank der Gehorsam; saß der Schüler im gleichen Raum, machten aber immer noch über 30 % der Lehrer bis zum Ende mit.", istRichtig: true },
      { text: "Ob der Versuchsleiter im gleichen Raum anwesend war oder seine Anweisungen per Telefon gab, machte keinen Unterschied.", istRichtig: false },
      { text: "Der Ort spielte keine Rolle: In einem erkennbar heruntergekommenen Gebäude war der Gehorsam genauso hoch wie in den Räumen der Eliteuniversität Yale.", istRichtig: false },
      { text: "Der graduelle Anstieg der Schockstärke begünstigte den Gehorsam, weil der erste kleine Schritt von 15 Volt kaum Hemmungen auslöste.", istRichtig: true },
    ],
    erklaerung: "a) richtig – je ==geringer die Distanz== zum Schüler (verbales Feedback, gleicher Raum), desto niedriger der Gehorsam. Trotzdem machten im gleichen Raum noch ==über 30 %== bis zum Ende mit.\nb) falsch – gab der Versuchsleiter seine Anweisungen ==per Telefon==, waren weniger Lehrer bereit, sehr starke Stromstöße zu verabreichen. Die ==Anwesenheit der Autorität== zählt.\nc) falsch – der Gehorsam war in den ordentlichen Räumen von ==Yale höher==; im heruntergekommenen Gebäude waren es aber immer noch annähernd ==50 %==.\nd) richtig – der ==graduelle Anstieg== erschwert das Aussteigen: Hätte man gleich 450 Volt verlangt, wäre die initiale Hemmschwelle überschritten worden und der Widerstand größer gewesen.",
    merksatz: "==Nähe zum Opfer== senkt den Gehorsam, ==Nähe zur Autorität== und ==kleine erste Schritte== erhöhen ihn.",
    beleg: "Kap. 7.3.4, S. 211",
  },
  {
    id: "V37-5", teil: "A", kapitel: 7, thema: "Gehorsam", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Einordnung== der Milgram-Befunde sind korrekt?",
    aussagen: [
      { text: "Milgram befragte vorab Psychiater und amerikanische Bürger der Mittelschicht; diese vermuteten, dass rund zwei Drittel bis zur maximalen Voltzahl gehen würden.", istRichtig: false },
      { text: "Menschen folgen Befehlen eher, wenn sie die Verantwortung für die Konsequenzen der Autoritätsperson zuschreiben und sich selbst nur als ausführendes Werkzeug wahrnehmen.", istRichtig: true },
      { text: "Milgrams Befunde bestätigten die bis dahin verbreitete Annahme, dass nur Personen mit einer klinisch relevanten Veranlagung zu solchen Handlungen fähig sind.", istRichtig: false },
      { text: "Unkritischer Gehorsam lässt sich unter anderem reduzieren, indem die Eigenverantwortung der handelnden Person bewusst gemacht wird.", istRichtig: true },
    ],
    erklaerung: "a) falsch – die Befragten vermuteten, dass nur etwa ==1 %== bis 450 Volt gehen würde. Tatsächlich waren es ==65 %== – die Vorhersage lag also dramatisch daneben.\nb) richtig – die ==Verantwortungsverschiebung== auf die Autorität (Blass, 1999) ist ein zentraler Mechanismus, zusammen mit dem schnellen Ablauf, der kaum Zeit zum Hinterfragen lässt.\nc) falsch – genau diese Annahme wurde ==widerlegt==. Klinisch unauffällige Personen gingen sehr weit; das lieferte eine mögliche Erklärung dafür, wie nach außen hin unauffällige Bürgerinnen und Bürger am Holocaust beteiligt sein konnten.\nd) richtig – Bewusstmachen der ==Eigenverantwortung== (Kilham und Mann, 1974), Hinterfragen von Expertise und Motiven der Autorität sowie Prüfen der Angemessenheit des Gehorsams in der Situation wirken dem entgegen.",
    merksatz: "Vorhergesagt: ==1 %==. Tatsächlich: ==65 %==. Nicht die Persönlichkeit, sondern die ==Situation== erklärt den Gehorsam.",
    beleg: "Kap. 7.3.4/7.3.5, S. 212",
  },

  // ---------------- 7.3.2 Einfluss von Mehrheiten ----------------
  {
    id: "V37-6", teil: "A", kapitel: 7, thema: "Sozialer Einfluss", quelle: "generiert", schwierigkeit: 2,
    stem: "Konformität lässt sich auf ==normativen== oder ==informationalen== sozialen Einfluss zurückführen. Welche Aussagen sind korrekt?",
    aussagen: [
      { text: "Normativer sozialer Einfluss folgt dem Motto ==Das tut man (nicht)== und zielt darauf ab, soziale Ablehnung zu vermeiden bzw. soziale Anerkennung zu gewinnen.", istRichtig: true },
      { text: "Bei normativem Einfluss wird die Überzeugung der Mehrheit nach außen hin geteilt, während insgeheim die eigene abweichende Überzeugung weiterbestehen kann.", istRichtig: true },
      { text: "Informationaler sozialer Einfluss beruht darauf, dass andere Menschen als Informationsquelle für adäquates Handeln herangezogen werden, nach dem Motto: Das, was die anderen tun, muss richtig sein.", istRichtig: true },
      { text: "Soziale Normen sind universell und gelten unabhängig von Gruppe, Kontext und sozialer Situation.", istRichtig: false },
    ],
    erklaerung: "a) richtig – beim ==normativen== Einfluss wirkt die Macht ==sozialer Normen==, also der Regeln einer Gruppe oder Gesellschaft für akzeptiertes Verhalten. Beispiele aus dem Skript: nicht mit offenem Mund in der Öffentlichkeit gähnen, klatschen wenn andere klatschen.\nb) richtig – deshalb ist normative Konformität oft nur ==äußerliche== Anpassung; innerlich kann die eigene abweichende Überzeugung bestehen bleiben.\nc) richtig – beim ==informationalen== Einfluss dienen andere als ==Informationsquelle==; hier verändert sich eher die tatsächliche Einschätzung.\nd) falsch – welches Verhalten, welche Meinung oder Einstellung als sozial akzeptiert gilt, ==variiert== je nach Gruppe, Kontext und sozialer Situation.",
    merksatz: "==Normativ== = dazugehören wollen (außen angepasst). ==Informational== = es richtig machen wollen (innen überzeugt).",
    beleg: "Kap. 7.3.2, S. 206–207",
  },
  {
    id: "V37-7", teil: "A", kapitel: 7, thema: "Sozialer Einfluss", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Bedingungen erhöhen laut Skript den ==informationalen sozialen Einfluss==?",
    aussagen: [
      { text: "Mehrdeutige oder neue Situationen, die bei der betroffenen Person große Unsicherheit auslösen.", istRichtig: true },
      { text: "Krisensituationen, die Angst auslösen und mit Zeitdruck verbunden sind.", istRichtig: true },
      { text: "Zugeschriebene Expertise der Anwesenden, denen man besonderes Wissen oder Erfahrung unterstellt.", istRichtig: true },
      { text: "Eine hohe Wichtigkeit des Urteils, etwa wenn das Urteil der anderen über die eigene Person besonders bedeutsam ist.", istRichtig: true },
    ],
    erklaerung: "Alle vier Bedingungen werden im Skript genannt.\na) richtig – ==Mehrdeutigkeit== ist der Kernfall. Beispiel aus dem Skript: der erste Besuch einer religiösen Zeremonie, deren Riten und Gebräuche man nicht kennt.\nb) richtig – ==Krisensituationen== mit Angst und Zeitdruck lassen wenig Raum für eigenes Prüfen.\nc) richtig – ==zugeschriebene Expertise== macht die anderen zur glaubwürdigen Informationsquelle.\nd) richtig – ist das ==Urteil wichtig==, steigt die Wahrscheinlichkeit der Anpassung.\nMerke: Hier wirkt nicht die Angst vor Ablehnung, sondern die Annahme, die anderen wüssten es besser.",
    merksatz: "==Unklar, dringend, Experten dabei, wichtig== – vier Verstärker des informationalen Einflusses.",
    beleg: "Kap. 7.3.2, S. 207",
  },
  {
    id: "V37-8", teil: "A", kapitel: 7, thema: "Konformität", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Ablauf== des Asch-Experiments (1956) sind korrekt?",
    aussagen: [
      { text: "Die Aufgabe bestand darin zu identifizieren, welche von drei vorgegebenen Linien unterschiedlicher Länge einer Referenzlinie glich.", istRichtig: true },
      { text: "Die echte Versuchsperson war so platziert, dass sie meist an fünfter Stelle ihr Urteil laut abgab.", istRichtig: true },
      { text: "Die eingeweihten Helfer gaben von Beginn an durchgehend die falsche Antwort.", istRichtig: false },
      { text: "Bearbeiteten die Versuchspersonen dieselbe Aufgabe allein, lag die Fehlerquote bei weniger als 1 %.", istRichtig: true },
    ],
    erklaerung: "a) richtig – es war ein ==Linienvergleich==, also eine objektiv sehr einfache Wahrnehmungsaufgabe.\nb) richtig – die Urteile wurden am Tisch ==nacheinander laut== abgegeben; die echte Versuchsperson kam meist an ==fünfter Stelle== dran und hörte vorher mehrere übereinstimmende Urteile.\nc) falsch – in den ==ersten Durchgängen== antworteten die Eingeweihten ==richtig==. Erst danach kamen die für das Experiment relevanten Durchgänge mit der einheitlich falschen Antwort.\nd) richtig – allein lag die Fehlerquote bei ==unter 1 %==; in der Gruppe schlossen sich die Versuchspersonen dagegen in etwa ==einem Drittel== der Fälle der falschen Mehrheit an.",
    merksatz: "Allein ==unter 1 %== Fehler, in der Gruppe ==ein Drittel== – die Aufgabe war nie das Problem, die Gruppe war es.",
    beleg: "Kap. 7.3.2, S. 205–206",
  },

  // ---------------- 7.4.2 Minimalgruppenparadigma nach Tajfel ----------------
  {
    id: "V37-9", teil: "A", kapitel: 7, thema: "Intergruppenverhalten", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Versuchsaufbau== von Tajfels Minimalgruppen-Experimenten (1970, 1971) sind korrekt?",
    aussagen: [
      { text: "Buben einer Schule im Alter von 14 bis 15 Jahren wurden auf Basis eines trivialen Kriteriums, etwa eines Münzwurfs, anonym und zufällig in zwei Gruppen eingeteilt.", istRichtig: true },
      { text: "Die Kinder wussten, in welcher Gruppe sie selbst waren, nicht aber, wer sonst zur eigenen oder zur anderen Gruppe gehörte.", istRichtig: true },
      { text: "Die beiden Gruppen standen in einer klaren Konkurrenzsituation und verfolgten unterschiedliche Gruppenziele.", istRichtig: false },
      { text: "Die Aufgabe der Buben war es, Geld zwischen jeweils zwei anderen Personen zu verteilen, von denen nur die Gruppenzugehörigkeit bekannt war.", istRichtig: true },
    ],
    erklaerung: "a) richtig – die Gruppenbildung erfolgte ==willkürlich== und ==anonym==; genau das macht die Gruppen minimal.\nb) richtig – jeder Schulkamerad hätte ein beliebiges In- oder Outgroup-Mitglied sein können. Persönliche Sympathien scheiden damit als Erklärung aus.\nc) falsch – es gab ==keine Konkurrenz==, ==keinen Kontakt==, ==keine Gruppeninteraktion== und keine unterschiedlichen Gruppenziele. Es wurden lediglich zwei Gruppen gebildet.\nd) richtig – verteilt wurde entweder zwischen zwei Ingroup-Mitgliedern, zwei Outgroup-Mitgliedern oder je einem Mitglied beider Gruppen.",
    merksatz: "==Münzwurf, anonym, kein Kontakt, keine Konkurrenz== – weniger Gruppe geht nicht. Und es reichte trotzdem.",
    beleg: "Kap. 7.4.2, S. 224",
  },
  {
    id: "V37-10", teil: "A", kapitel: 7, thema: "Intergruppenverhalten", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu den ==Zahlenpaar-Matrizen== und den Ergebnissen bei Tajfel sind korrekt?",
    aussagen: [
      { text: "Die Matrizen stellten an ihren Polen jeweils zwei Aufteilungsstrategien gegenüber, zum Beispiel Fairness gegen maximalen Unterschied zwischen den Gruppen.", istRichtig: true },
      { text: "Die aufteilende Person konnte sich selbst Geld zuteilen, sodass sich die Ergebnisse durch Eigennutz erklären lassen.", istRichtig: false },
      { text: "Gehörten beide Personen derselben Gruppe an, verteilten die Kinder die Ressourcen gerecht und wählten die Strategie Fairness.", istRichtig: true },
      { text: "Standen maximaler gemeinsamer Profit und maximaler Unterschied zur Wahl, entschieden sich die Schüler überwiegend für den maximalen gemeinsamen Profit.", istRichtig: false },
    ],
    erklaerung: "a) richtig – jede Matrize kontrastierte zwei Strategien, etwa ==Fairness== (85 : 85) gegen ==maximalen Unterschied== (85 : 50). Aus der Wahl ließ sich ablesen, welche Strategie den Kindern wichtiger war.\nb) falsch – das aufgeteilte Geld verblieb bei den Empfängern; weder die aufteilende Person noch ihre Gruppe erhielt etwas. ==Eigennutz scheidet als Erklärung aus==.\nc) richtig – Ingroup gegen Ingroup und Outgroup gegen Outgroup wurden ==fair== aufgeteilt. Nur bei gemischten Paaren wurde das Ingroup-Mitglied bevorzugt.\nd) falsch – die Schüler wählten eher die ==maximale Differenz== als den maximalen gemeinsamen Gewinn. Ihnen war der ==relative Vorsprung== wichtiger als der absolute Gewinn der eigenen Gruppe; das bedeutet zugleich Schädigung der Outgroup.",
    merksatz: "Nicht ==mehr für uns==, sondern ==mehr als die== – Tajfels Schüler zahlten für den Abstand.",
    beleg: "Kap. 7.4.2, S. 224–225",
  },
  {
    id: "V37-11", teil: "A", kapitel: 7, thema: "Intergruppenverhalten", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche ==Schlussfolgerungen== zieht das Skript aus dem Minimalgruppenparadigma?",
    aussagen: [
      { text: "Für die Bevorzugung der Ingroup und die Benachteiligung der Outgroup braucht es keine reale Konkurrenzsituation.", istRichtig: true },
      { text: "Anders als nach den Ferienlagerexperimenten des Ehepaars Sherif vermutet, genügen bereits die bloßen Kategorien Ingroup und Outgroup.", istRichtig: true },
      { text: "Gruppenzugehörigkeiten haben laut Skript ausschließlich destruktive Folgen.", istRichtig: false },
      { text: "Eine groß angelegte internationale Studie (van Bavel et al., 2020) zeigte, dass die Identifikation mit der eigenen Nation mit der Unterstützung von Maßnahmen gegen die Ausbreitung von Covid-19 zusammenhing.", istRichtig: true },
    ],
    erklaerung: "a) richtig – die Buben benachteiligten die Outgroup, obwohl weder sie selbst noch ihre Gruppe davon profitierten, keine Antipathien bestanden und keine Konkurrenz vorlag.\nb) richtig – Sherif erklärte Gruppenkonflikte über ==reale Konkurrenz==; Tajfel zeigte, dass schon die ==bloße Kategorisierung== in In- und Outgroup reicht.\nc) falsch – das Skript betont ausdrücklich die ==sinn- und identitätsstiftende== Seite: Orientierung in der Welt, Geborgenheit, Befriedigung des Bedürfnisses nach sozialer Eingebundenheit sowie Selbstdefinition und Selbstwert.\nd) richtig – das ist das Beispiel des Skripts für ==konstruktive== Folgen von Gruppenzugehörigkeit.",
    merksatz: "Gruppen sind nicht böse – sie sind ==mächtig==. Die Folgen können destruktiv und konstruktiv sein.",
    beleg: "Kap. 7.4.2, S. 225–226",
  },

  // ---------------- 3.1.2 Was gilt als wissenschaftlich? ----------------
  {
    id: "V37-12", teil: "A", kapitel: 3, thema: "Wissenschaftlichkeit", quelle: "generiert", schwierigkeit: 2,
    stem: "Döring (2023) beschreibt ==Standards der Wissenschaftlichkeit==. Welche Aussagen dazu sind korrekt?",
    aussagen: [
      { text: "Ein wissenschaftliches Forschungsproblem muss empirisch untersuchbar und auf Basis des aktuellen Forschungsstands theoretisch erklärbar sein.", istRichtig: true },
      { text: "Döring (2023) beschreibt sechs Standards der Wissenschaftlichkeit.", istRichtig: false },
      { text: "Zu den Standards gehört die Orientierung an der Wissenschafts- und Forschungsethik.", istRichtig: true },
      { text: "Die schriftliche Dokumentation muss nur die Ergebnisse umfassen, nicht den gesamten Forschungsprozess.", istRichtig: false },
    ],
    erklaerung: "a) richtig – das ist der erste Standard: das ==wissenschaftliche Forschungsproblem==.\nb) falsch – es sind ==vier== Standards: wissenschaftliches Forschungsproblem, wissenschaftlicher Forschungsprozess, Wissenschafts- und Forschungsethik sowie vollständige schriftliche Dokumentation.\nc) richtig – wird fremdes geistiges Eigentum als eigenes ausgegeben, werden Daten manipuliert oder Untersuchungsteilnehmende geschädigt, ==verliert die Untersuchung den Charakter der Wissenschaftlichkeit==.\nd) falsch – verlangt wird die ==vollständige Dokumentation des gesamten Forschungsprojekts==, damit der Prozess für andere ==nachvollziehbar und replizierbar== ist.",
    merksatz: "==Problem, Prozess, Ethik, Dokumentation== – die vier Standards der Wissenschaftlichkeit.",
    beleg: "Kap. 3.1.2, S. 52–53",
  },
  {
    id: "V37-13", teil: "A", kapitel: 3, thema: "Replikation", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Replikation== und ==Replikationskrise== sind korrekt?",
    aussagen: [
      { text: "Direkte (exakte) Replikationsstudien haben zum Ziel, die Originalstudie so detailliert wie möglich nachzustellen.", istRichtig: true },
      { text: "Bei konzeptionellen Replikationsstudien werden Aspekte der Originalstudie abgewandelt und systematisch variiert, um Generalisierbarkeit bzw. Spezifität der Befunde zu bestimmen.", istRichtig: true },
      { text: "Als Replikationskrise bezeichnet man den Umstand, dass viele wissenschaftliche Erkenntnisse in Replikationsstudien nicht bestätigt werden können.", istRichtig: true },
      { text: "Als Gegenmaßnahme wird empfohlen, den Forschungsprozess und die zugrunde liegenden Daten möglichst wenig offenzulegen.", istRichtig: false },
    ],
    erklaerung: "a) richtig – weicht das Ergebnis ab, kann nachgeforscht werden: Vielleicht war die Replikation nicht detailgetreu, vielleicht war der Originalbefund ein ==Zufallsbefund==.\nb) richtig – Beispiel aus dem Skript: Bei Wahrnehmungsexperimenten wird die ==Dauer der Darbietung== der Reize variiert.\nc) richtig – betroffen ist die Psychologie, aber auch andere Wissenschaften. Als Ursachen gelten unter anderem ==Daten- und Ergebnisfälschungen== sowie der nicht-fachgemäße Umgang mit wissenschaftlichen Methoden.\nd) falsch – genau umgekehrt: Man versucht, den Forschungsprozess ==so transparent wie möglich== zu gestalten, inklusive detaillierter Dokumentation und ==Veröffentlichung der Daten==.",
    merksatz: "==Direkt== = möglichst gleich nachstellen. ==Konzeptionell== = gezielt variieren. Antwort auf die Krise: ==Transparenz==.",
    beleg: "Kap. 3.1.2, Infobox 3.2, S. 53",
  },
  {
    id: "V37-14", teil: "A", kapitel: 3, thema: "Wissenschaftlichkeit", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu den ==Kriterien der wissenschaftlichen Qualität== einer Studie sind korrekt?",
    aussagen: [
      { text: "Inhaltliche Relevanz fragt danach, in welchem Maße eine Studie zum wissenschaftlichen Erkenntnisfortschritt und zur Lösung praktischer Probleme beiträgt.", istRichtig: true },
      { text: "Methodische Strenge bedeutet, dass die angewandten Methoden für das konkrete Forschungsproblem geeignet sind und regelkonform umgesetzt werden.", istRichtig: true },
      { text: "Präsentationsqualität wird anhand von Strukturiertheit, Lesbarkeit und Einhaltung der Standards der Berichterstattung beurteilt.", istRichtig: true },
      { text: "Erfüllt eine Studie eines dieser Kriterien nicht ausreichend, gilt sie automatisch als Studie schlechter Qualität.", istRichtig: false },
    ],
    erklaerung: "a) bis c) richtig – den vier Standards der Wissenschaftlichkeit lassen sich Qualitätskriterien zuordnen: ==inhaltliche Relevanz==, ==methodische Strenge==, ==ethische Strenge== (Ausmaß, in dem die Standards der Wissenschafts- und Forschungsethik erfüllt sind) und ==Präsentationsqualität==.\nd) falsch – das Skript stellt ausdrücklich klar: Die unzureichende Erfüllung eines Kriteriums ist ==nicht automatisch== mit einer Studie schlechter Qualität gleichzusetzen. Die Qualität ergibt sich aus dem ==Zusammenspiel== dieser Faktoren (Döring, 2023).",
    merksatz: "==Relevanz, Methode, Ethik, Präsentation== – vier Kriterien, bewertet wird aber ihr Zusammenspiel.",
    beleg: "Kap. 3.1.2, S. 53–54",
  },

  // ---------------- 3.3.4 Studiendesigns ----------------
  {
    id: "V37-15", teil: "A", kapitel: 3, thema: "Studiendesign", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Studiendesigns== sind korrekt?",
    aussagen: [
      { text: "Zum Design einer Studie gehören die Auswahl der Versuchspersonen, die Wahl der zu vergleichenden Gruppen, die Methoden der Datenerhebung und der zeitliche Horizont.", istRichtig: true },
      { text: "Das Studiendesign ist maßgeblich von der Hypothese vorbestimmt.", istRichtig: true },
      { text: "Bei einer Veränderungshypothese genügt grundsätzlich eine einzige Messung.", istRichtig: false },
      { text: "Liegt eine Unterschiedshypothese vor, müssen mehrere Gruppen gebildet werden, die sich hinsichtlich des ersten Merkmals unterscheiden.", istRichtig: true },
    ],
    erklaerung: "a) richtig – so definiert das Skript das Studiendesign nach Sedlmeier und Renkewitz, inklusive des ==zeitlichen Horizonts==.\nb) richtig – nicht der Geschmack der Forschenden, sondern die ==Hypothese== bestimmt das Design.\nc) falsch – eine ==Veränderungshypothese== verlangt Messungen zu ==mehreren Zeitpunkten==. Beim Test einer Therapiewirkung also mindestens zwei Messungen: vor und nach der Therapie.\nd) richtig – bei einer ==Unterschiedshypothese== werden Gruppen gebildet, die sich im ersten Merkmal unterscheiden; anschließend wird geprüft, ob sie sich auch im zweiten Merkmal unterscheiden.",
    merksatz: "==Unterschiedshypothese== braucht Gruppen, ==Veränderungshypothese== braucht Messzeitpunkte.",
    beleg: "Kap. 3.3.4, S. 69–70",
  },

  // ---------------- 3.5.4 Zusammenhangsmaße ----------------
  {
    id: "V37-16", teil: "A", kapitel: 3, thema: "Korrelation", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==Kovarianz== sind korrekt?",
    aussagen: [
      { text: "Zur Berechnung wird für jede Versuchseinheit der Abstand zum Mittelwert der einen Variable mit dem Abstand zum Mittelwert der anderen Variable multipliziert, über alle Versuchseinheiten aufsummiert und durch deren Anzahl dividiert.", istRichtig: true },
      { text: "Die Kovarianz ist unabhängig von den Maßeinheiten der beiden Variablen.", istRichtig: false },
      { text: "Werden positive Abstände häufig mit negativen Abständen multipliziert, ergibt sich eine negative Kovarianz.", istRichtig: true },
      { text: "Der Korrelationskoeffizient r entsteht, indem die Kovarianz durch das Produkt der Standardabweichungen der beiden Variablen dividiert wird.", istRichtig: true },
    ],
    erklaerung: "a) richtig – das ist Formel 3.4 in Worten: Produkt der ==Mittelwertsabstände==, über alle Versuchseinheiten aufsummiert, geteilt durch N.\nb) falsch – genau das ist der ==Nachteil== der Kovarianz: Sie hängt von den Einheiten ab. Gewicht in Gramm ergibt eine andere Kovarianz als Gewicht in Kilogramm.\nc) richtig – gleichgerichtete Abstände ergeben eine ==positive==, gegenläufige eine ==negative== Kovarianz. Liegt eine Mischung vor, heben sich die Werte auf und die Kovarianz liegt nahe ==null==.\nd) richtig – diese Division ==standardisiert== die Kovarianz. Deshalb heißt r auch das standardisierte Maß der Kovarianz.",
    merksatz: "==r ist die Kovarianz geteilt durch beide Standardabweichungen== – das macht sie einheitenfrei und vergleichbar.",
    beleg: "Kap. 3.5.4, S. 85–86",
  },
  {
    id: "V37-17", teil: "A", kapitel: 3, thema: "Korrelation", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Korrelationskoeffizienten r== sind korrekt?",
    aussagen: [
      { text: "Der Korrelationskoeffizient wird auch Produkt-Moment-Korrelation genannt und setzt mindestens intervallskalierte Daten voraus.", istRichtig: true },
      { text: "Er quantifiziert den Grad des linearen Zusammenhangs und eignet sich ebenso gut für quadratische, im Streudiagramm U-förmige Zusammenhänge.", istRichtig: false },
      { text: "Je weiter r von 0 entfernt liegt, desto höher ist die Korrelation und desto leichter lässt sich auch optisch ein Trend in den Daten erkennen.", istRichtig: true },
      { text: "Je höher die Korrelation ist, desto genauere Vorhersagen lassen sich auf Basis der einen Variable über die andere treffen.", istRichtig: true },
    ],
    erklaerung: "a) richtig – Voraussetzung sind ==mindestens intervallskalierte== Daten; ein anderer Name ist ==Produkt-Moment-Korrelation==.\nb) falsch – r erfasst nur den ==linearen== Zusammenhang. Für nichtlineare, etwa quadratische und damit U-förmige Verläufe ist er ==nicht geeignet==.\nc) richtig – nicht das Vorzeichen, sondern der ==Abstand von null== bestimmt die Stärke.\nd) richtig – je höher die Korrelation, desto ==präziser die Vorhersage== der einen Variable aus der anderen.\nEin linearer Zusammenhang liegt vor, wenn sich mit zunehmender Ausprägung der einen Variable die andere ==in eine Richtung== verändert, nicht abwechselnd.",
    merksatz: "==r misst nur Geraden.== Ein U-förmiger Zusammenhang kann stark sein und trotzdem ein r nahe null liefern.",
    beleg: "Kap. 3.5.4, S. 85–87",
  },
  {
    id: "V37-18", teil: "A", kapitel: 3, thema: "Korrelation", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==Interpretation== von Streudiagrammen und Zusammenhängen sind korrekt?",
    aussagen: [
      { text: "Kreist man die Datenpunkte im Streudiagramm ein und ähnelt die Form eher einem Kreis, spricht das für eine hohe Korrelation.", istRichtig: false },
      { text: "Bei einer perfekten Korrelation liegen die Datenpunkte auf einer Linie.", istRichtig: true },
      { text: "Eine hohe Korrelation zwischen A und B erlaubt bereits den Schluss, dass A die Ursache von B ist.", istRichtig: false },
      { text: "Für einen Kausalschluss muss zusätzlich zur Kovariation gelten, dass A zeitlich nach B auftritt.", istRichtig: false },
    ],
    erklaerung: "a) falsch – umgekehrt: Je mehr die eingekreiste Punktwolke einem ==Kreis== ähnelt, desto ==geringer== die Korrelation. Je mehr sie einer schmalen ==Ellipse== ähnelt, desto höher.\nb) richtig – bei einer perfekten Korrelation liegen alle Datenpunkte exakt auf einer ==Linie==.\nc) falsch – Kovariation allein reicht für einen Kausalschluss nicht aus.\nd) falsch – die Richtung ist vertauscht: Die verursachende Variable A muss zeitlich ==vor== B auftreten, und ==andere Ursachen müssen ausgeschlossen== werden können. Erst dann ist eine Kausalaussage zulässig.",
    merksatz: "==Kreis = schwach, schmale Ellipse = stark.== Kausalität braucht Kovariation plus ==zeitliches Vorher== plus ==Ausschluss anderer Ursachen==.",
    beleg: "Kap. 3.5.4, S. 87; Infobox 3.3, S. 60",
  },
];
