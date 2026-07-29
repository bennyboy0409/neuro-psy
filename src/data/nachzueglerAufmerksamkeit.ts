import type { Frage } from "../types";

// ============================================================
//  NACHZÜGLER-Fragen zu Kapitel 5.2.3 Aufmerksamkeit (S. 128-132).
//  Themen: Definition/Funktion, Unaufmerksamkeitsblindheit
//  (Simons & Chabris, 1999), endogene vs. exogene Aufmerksamkeit,
//  Cueing-Paradigma (Vertiefung: SOA, exogene Variante, Ablauf),
//  Experimentalparadigma (Infobox 5.1), selektive Aufmerksamkeit,
//  Cocktailparty-Effekt, dichotisches Hören (Cherry, 1953),
//  Split-Span-Paradigma (Broadbent, 1954).
//  Nur Inhalte, die im Lernskript belegt sind.
//  Format: GENAU 4 Aussagen, jede einzeln richtig/falsch,
//  mindestens eine richtig.
// ============================================================

export const nachzueglerAufmerksamkeit: Frage[] = [
  {
    id: "NA-1", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 1,
    stem: "Welche Aussagen zur ==Definition und Funktion von Aufmerksamkeit== sind korrekt?",
    aussagen: [
      { text: "Aufmerksamkeit ist laut Skript der Filter, der vorsortiert, welche der physikalischen Reize aus der Umwelt relevant und wichtig für uns sind.", istRichtig: true },
      { text: "Aufmerksamkeitsprozesse sind maßgeblich an unserer Wahrnehmung beteiligt.", istRichtig: true },
      { text: "In einem gegebenen Moment können wir unsere Aufmerksamkeit auf jedes Detail einer Situation gleichzeitig richten.", istRichtig: false },
      { text: "Aufmerksamkeit lässt sich ausschließlich bewusst lenken; eine unwillentliche Lenkung durch plötzliche Reize gibt es nicht.", istRichtig: false },
    ],
    erklaerung: "a) richtig — genau diese ==Filter==-Formulierung verwendet das Skript zur Einführung des Kapitels: Aufmerksamkeit sortiert vor, welche Reize ==relevant und wichtig== sind. b) richtig — das Gorilla-Experiment soll gerade verdeutlichen, dass Aufmerksamkeitsprozesse ==maßgeblich an der Wahrnehmung beteiligt== sind. c) falsch — das Skript stellt ausdrücklich fest, dass wir die Aufmerksamkeit in einem Moment ==nicht auf jedes Detail== richten können; genau deshalb braucht es ==selektive Aufmerksamkeit==. d) falsch — Aufmerksamkeit kann bewusst gelenkt werden (==endogen==), aber manche plötzlich auftretenden Reize ziehen sie ==unwillentlich== auf sich (==exogen==).",
    merksatz: "Aufmerksamkeit = ==Filter vor der Wahrnehmung== — teils bewusst gesteuert (endogen), teils vom Reiz erzwungen (exogen).",
    beleg: "Kap. 5.2.3, S. 128 und 131",
  },
  {
    id: "NA-2", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 2,
    stem: "Wie war das ==Gorilla-Experiment== von Simons und Chabris (1999) aufgebaut?",
    aussagen: [
      { text: "In den Videos waren drei Personen in weißen und drei Personen in schwarzen T-Shirts zu sehen, die sich Bälle zuwarfen.", istRichtig: true },
      { text: "Die Versuchspersonen sollten die Pässe beider Teams zusammengezählt angeben.", istRichtig: false },
      { text: "Während des Videos durchquerte eine Person in einem schwarzen Gorillakostüm etwa 5 Sekunden lang die Szene von rechts nach links.", istRichtig: true },
      { text: "Erst nachdem die Versuchspersonen die Anzahl der gezählten Pässe genannt hatten, wurden sie gefragt, ob ihnen etwas Unerwartetes aufgefallen war.", istRichtig: true },
    ],
    erklaerung: "a) richtig — ==drei== Personen in Weiß, ==drei== in Schwarz, beide Teams warfen sich über das ganze Video hinweg Bälle zu. b) falsch — die Aufgabe war, ==entweder== die Pässe des schwarzen ==oder== die des weißen Teams zu zählen; genau diese Fokussierung ist die experimentelle Manipulation. c) richtig — der Gorilla war rund ==5 Sekunden== sichtbar und ging von ==rechts nach links== durchs Bild. d) richtig — die Frage nach dem Unerwarteten kam ==erst nach== der Nennung der Passzahl.",
    merksatz: "Zählaufgabe zuerst, Gorilla-Frage danach: ==Fokus auf eine Farbe== entscheidet, was überhaupt bewusst gesehen wird.",
    beleg: "Kap. 5.2.3, S. 128-129",
  },
  {
    id: "NA-3", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu den ==Ergebnissen des Gorilla-Experiments== und zur ==Unaufmerksamkeitsblindheit== sind korrekt?",
    aussagen: [
      { text: "Von den Personen, die die Pässe des schwarzen Teams zählen sollten, entdeckten 83 % den Gorilla.", istRichtig: true },
      { text: "Von den Personen, die die Pässe des weißen Teams zählen sollten, entdeckten nur 42 % den Gorilla.", istRichtig: true },
      { text: "Dieses Experiment hat den Begriff der Unaufmerksamkeitsblindheit geprägt.", istRichtig: true },
      { text: "Die auf die weiße Kleidung fokussierte Gruppe entdeckte den Gorilla häufiger, weil der schwarze Gorilla stärker mit ihrem Suchfokus kontrastierte.", istRichtig: false },
    ],
    erklaerung: "a) richtig — ==83 %== in der Bedingung ==schwarzes Team zählen==. b) richtig — nur ==42 %== in der Bedingung ==weißes Team zählen==. c) richtig — das Experiment prägte den Begriff der ==Unaufmerksamkeitsblindheit==. d) falsch — es war genau umgekehrt: Weil die Aufmerksamkeit der einen Gruppe ohnehin auf ==schwarze Kleidung== gerichtet war, fiel es ihr ==leichter==, den schwarzen Gorilla bewusst wahrzunehmen. Die auf Weiß fokussierte Gruppe übersah ihn häufiger.",
    merksatz: "==83 % vs. 42 %== — wer auf Schwarz achtet, sieht den schwarzen Gorilla; ==Unaufmerksamkeitsblindheit== für alles außerhalb des Fokus.",
    beleg: "Kap. 5.2.3, S. 128-129",
  },
  {
    id: "NA-4", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==endogener== und ==exogener Aufmerksamkeit== sind korrekt?",
    aussagen: [
      { text: "Exogene Aufmerksamkeit wird von äußeren Reizen in der Umwelt angezogen.", istRichtig: true },
      { text: "Endogene Aufmerksamkeit ist von innen heraus gesteuert und von kognitiven Prozessen beeinflusst.", istRichtig: true },
      { text: "Endogene Aufmerksamkeit wird von Erwartungen, Bewertungen, Vorwissen und Vorerfahrungen beeinflusst.", istRichtig: true },
      { text: "Dass jemand neben Ihnen plötzlich laut klatscht und Sie hinsehen, ist ein Beispiel für endogene Aufmerksamkeitslenkung.", istRichtig: false },
    ],
    erklaerung: "a) richtig — ==exogen== = von außen, der Reiz zieht die Aufmerksamkeit an (buntes Bild, lautes Klatschen, der eigene Name). b) richtig — ==endogen== = von innen heraus gesteuert, ==kognitiv== beeinflusst (z. B. der Entschluss, im Skript nach Fachwörtern zu suchen). c) richtig — genannt werden ==Erwartungen==, ==Bewertungen==, ==Vorwissen== und ==Vorerfahrungen==. d) falsch — plötzliches lautes Klatschen ist ein ==exogener== Reiz: Er lenkt die Aufmerksamkeit ==unwillentlich== auf sich.",
    merksatz: "==endo== = von innen (Absicht, Vorwissen, Erwartung), ==exo== = von außen (der Reiz reißt die Aufmerksamkeit an sich).",
    beleg: "Kap. 5.2.3, S. 129",
  },
  {
    id: "NA-5", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 3,
    stem: "Im Skript steht im blauen Dreieck (Abbildung 5.5) scheinbar ==Paris in the spring==. Welche Aussage dazu ist korrekt?",
    aussagen: [
      { text: "Der tatsächliche Wortlaut enthält das Wort the doppelt; durch Vorwissen und Erwartung (endogen) wird das doppelte Wort leicht überlesen.", istRichtig: true },
      { text: "Die meisten Personen bemerken die Wortdoppelung bereits beim ersten Lesen.", istRichtig: false },
      { text: "Das Beispiel wird im Skript als Beleg dafür angeführt, dass ausschließlich exogene Reize unsere Wahrnehmung steuern.", istRichtig: false },
      { text: "Das Beispiel zeigt, dass Vorwissen und Erwartungen für die Wahrnehmung keine Rolle spielen.", istRichtig: false },
    ],
    erklaerung: "a) richtig — der echte Wortlaut ist ==Paris in the the spring==; ==Vorwissen== und ==Erwartung== ergänzen den vertrauten Satz, sodass das zweite ==the== überlesen wird. b) falsch — genau darin liegt der Witz der Abbildung: Beim ersten Lesen fällt die Doppelung in der Regel ==nicht== auf. c) falsch — das Beispiel steht ausdrücklich für ==endogene== Einflüsse (von innen: Erwartung, Vorwissen), nicht für exogene. d) falsch — es zeigt das Gegenteil: Vorwissen und Erwartung ==formen== mit, was wir zu sehen glauben.",
    merksatz: "Was wir zu lesen erwarten, lesen wir: ==endogenes Vorwissen== überschreibt den tatsächlichen Reiz.",
    beleg: "Kap. 5.2.3, S. 129 (Abbildung 5.5, Fußnote)",
  },
  {
    id: "NA-6", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==zeitlichen Intervall (SOA)== im Cueing-Paradigma sind korrekt?",
    aussagen: [
      { text: "Das Zeitintervall zwischen dem Erscheinen des Hinweisreizes und dem des Zielreizes wird als Stimulus-Onset-Asynchrony (SOA) bezeichnet.", istRichtig: true },
      { text: "Endogene Hinweisreize sind erst dann wirksam, wenn zwischen Hinweisreiz und Zielreiz mindestens 200 Millisekunden liegen.", istRichtig: true },
      { text: "Exogene Hinweisreize sind bereits bei einer wesentlich kürzeren SOA von etwa 50 Millisekunden wirksam.", istRichtig: true },
      { text: "Exogene Hinweisreize wirken deutlich länger nach als endogene Hinweisreize.", istRichtig: false },
    ],
    erklaerung: "a) richtig — ==SOA== = Stimulus-Onset-Asynchrony, der zeitliche Abstand zwischen Hinweis- und Zielreiz. b) richtig — ==endogene== Cues brauchen mindestens ==200 ms==, weil ihre Bedeutung (z. B. die Pfeilrichtung) erst verarbeitet werden muss. c) richtig — ==exogene== Cues wirken schon ab ca. ==50 ms==, sie ziehen die Aufmerksamkeit unmittelbar an. d) falsch — umgekehrt: ==exogene== Cues wirken oft nur bis zu ==200 ms==, ==endogene== dagegen bis zu ==500 ms==.",
    merksatz: "==Exogen: schnell, aber kurz (50-200 ms). Endogen: langsam, aber ausdauernd (ab 200 ms, bis 500 ms).==",
    beleg: "Kap. 5.2.3, S. 131",
  },
  {
    id: "NA-7", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 2,
    stem: "Wie wurden mit dem Cueing-Paradigma ==exogene Aufmerksamkeitsprozesse== untersucht?",
    aussagen: [
      { text: "Die Hinweisreize wurden nicht zentral in der Mitte, sondern in der Peripherie dargeboten, dort wo der Zielreiz auftauchen wird.", istRichtig: true },
      { text: "Auch in der exogenen Variante war der Hinweisreiz ein Pfeil, dessen Richtungsbedeutung erst im Gehirn verarbeitet werden musste.", istRichtig: false },
      { text: "Die exogenen Hinweisreize führten zu ähnlichen Ergebnissen wie die endogenen Hinweisreize.", istRichtig: true },
      { text: "Aus den Untersuchungen wurde geschlossen, dass nur endogene Hinweisreize die Wahrnehmung beeinflussen.", istRichtig: false },
    ],
    erklaerung: "a) richtig — für die exogene Variante wurde der Aufbau leicht abgewandelt: Cue in der ==Peripherie== statt zentral. b) falsch — der periphere Reiz war ==kein Pfeil==; er wirkte durch sein ==bloßes Erscheinen==, ohne dass eine Bedeutung entschlüsselt werden musste. Genau das macht ihn ==exogen==. c) richtig — die Ergebnisse waren denen mit endogenen Cues ==ähnlich==. d) falsch — gezeigt wurde, dass ==beide== Arten von Hinweisreizen die Wahrnehmung beeinflussen.",
    merksatz: "Zentraler Pfeil = ==endogen== (Bedeutung verarbeiten), Reiz am Zielort = ==exogen== (bloßes Erscheinen). Beide wirken.",
    beleg: "Kap. 5.2.3, S. 130-131",
  },
  {
    id: "NA-8", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==Versuchsablauf und zu den Reaktionszeiten== im Cueing-Paradigma (Posner, 1980) sind korrekt?",
    aussagen: [
      { text: "In der neutralen Bedingung wurde ein neutrales Symbol gezeigt; der Zielreiz erschien danach in 50 % der Fälle rechts und in 50 % links.", istRichtig: true },
      { text: "In der validen Bedingung folgte der Zielreiz in 80 % der Durchläufe auf jener Seite, in die der Pfeil zeigte.", istRichtig: true },
      { text: "Die Reaktionszeiten waren in den invaliden Durchgängen am kürzesten, gefolgt von den neutralen und den validen Durchgängen.", istRichtig: false },
      { text: "Dass die Augen währenddessen auf die Bildschirmmitte fixiert bleiben mussten, diente dazu, Augenbewegungen als Ursache kürzerer Reaktionszeiten auszuschließen.", istRichtig: true },
    ],
    erklaerung: "a) richtig — in der ==neutralen== Bedingung gab es keinen Ortshinweis, der Zielreiz kam ==50:50== links oder rechts. b) richtig — ==valide== = Zielreiz auf der Pfeilseite in ==80 %== der Durchläufe; die restlichen ==20 %== bildeten die ==invalide== Bedingung. c) falsch — die Reihenfolge ist umgekehrt: ==valide== am kürzesten, dann ==neutral==, ==invalide== am längsten. d) richtig — die ==Fixation== der Mitte schließt ==Augenbewegungen== als Erklärung aus, sodass die kürzeren Zeiten auf die ==verlagerte Aufmerksamkeit== zurückgeführt werden können.",
    merksatz: "==valide < neutral < invalide== (Reaktionszeit). Blick bleibt in der Mitte — sonst erklärt die Augenbewegung alles.",
    beleg: "Kap. 5.2.3, S. 129-130",
  },
  {
    id: "NA-9", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 1,
    stem: "Was versteht man laut Infobox 5.1 unter einem ==Experimentalparadigma==?",
    aussagen: [
      { text: "Einen häufig verwendeten experimentellen Aufbau zur experimentellen Untersuchung eines bestimmten Gegenstandes.", istRichtig: true },
      { text: "Das Cueing-Paradigma und das Split-Span-Paradigma werden im Skript als Beispiele für Experimentalparadigmen genannt.", istRichtig: true },
      { text: "Die statistische Auswertungsmethode, mit der die Daten eines Experiments ausgewertet werden.", istRichtig: false },
      { text: "Einen Versuchsaufbau, der laut Definition nur ein einziges Mal für eine einzige Studie eingesetzt werden darf.", istRichtig: false },
    ],
    erklaerung: "a) richtig — genau so definiert Infobox 5.1: ein ==häufig verwendeter experimenteller Aufbau== zur Untersuchung eines bestimmten Gegenstandes. b) richtig — das Skript nennt ausdrücklich das ==Cueing-Paradigma== und das ==Split-Span-Paradigma==. c) falsch — ein Paradigma betrifft den ==Aufbau== der Untersuchung, nicht die Statistik. d) falsch — das Gegenteil ist gemeint: Ein Paradigma ist gerade deshalb ein Paradigma, weil es ==wiederholt== eingesetzt wird und Ergebnisse dadurch vergleichbar werden.",
    merksatz: "Experimentalparadigma = ==bewährtes Standard-Setup==, das immer wieder verwendet wird (Cueing, Split-Span).",
    beleg: "Kap. 5.2.3, Infobox 5.1, S. 131",
  },
  {
    id: "NA-10", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==selektiven Aufmerksamkeit== und zum ==Cocktailparty-Effekt== sind korrekt?",
    aussagen: [
      { text: "Unter selektiver Aufmerksamkeit versteht man jenen Prozess, mittels welchem aus vielen Sinneseindrücken eine Teilmenge selektiert wird.", istRichtig: true },
      { text: "Die übrigen Gespräche im Raum sind weiterhin hörbar, allerdings eher als Geräuschkulisse und nicht dem genauen Inhalt nach.", istRichtig: true },
      { text: "Fällt in einem der anderen Gespräche der eigene Name, wird die Aufmerksamkeit wahrscheinlich eine Zeit lang auf dieses Gespräch gerichtet.", istRichtig: true },
      { text: "Der Cocktailparty-Effekt ist ein Beispiel für selektives Hören.", istRichtig: true },
    ],
    erklaerung: "Alle vier Aussagen sind richtig. a) richtig — das ist die Definition von ==selektiver Aufmerksamkeit==: aus vielen Sinneseindrücken wird eine ==Teilmenge selektiert==. b) richtig — die anderen Gespräche verschwinden nicht, sie werden zur ==Geräuschkulisse==, deren Inhalt nicht erfasst wird. c) richtig — der ==eigene Name== zieht die Aufmerksamkeit auf sich; kehrt man dann zum ursprünglichen Gespräch zurück, dauert es eine Weile, ihm wieder folgen zu können, weil man den Inhalt in der Zwischenzeit ==nicht wahrgenommen== hat. d) richtig — das Szenario ist als ==Cocktailparty-Effekt== bekannt und ein Beispiel für ==selektives Hören==.",
    merksatz: "==Selektive Aufmerksamkeit== = Teilmenge auswählen. Der Rest bleibt hörbar, aber inhaltslos — bis der ==eigene Name== fällt.",
    beleg: "Kap. 5.2.3, S. 131",
  },
  {
    id: "NA-11", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==dichotischen Hören== nach Cherry (1953) sind korrekt?",
    aussagen: [
      { text: "Den Versuchspersonen wurde je ein Text am linken und ein Text am rechten Ohr dargeboten.", istRichtig: true },
      { text: "Die Versuchspersonen sollten einen der beiden Texte laufend zur Darbietung wiedergeben, was ihnen zur eigenen Überraschung recht leicht gelang.", istRichtig: true },
      { text: "Nach dem Inhalt des Textes am anderen Ohr befragt, konnten die Versuchspersonen in der Regel keine Angaben machen.", istRichtig: true },
      { text: "Die beiden Texte wurden bewusst von zwei verschiedenen Sprecherinnen bzw. Sprechern aufgenommen, damit sie leichter unterscheidbar waren.", istRichtig: false },
    ],
    erklaerung: "a) richtig — genau das ist das Paradigma des ==dichotischen Hörens==: zwei Texte, ein Ohr je Text. b) richtig — die Aufgabe war das ==laufende Wiedergeben== eines Textes, und sie gelang überraschend leicht. c) richtig — der Inhalt am ==unbeachteten Ohr== konnte in der Regel nicht berichtet werden: gehört, aber nicht wahrgenommen. d) falsch — die Texte wurden von ==derselben Person== gesprochen; gerade dadurch fällt die Stimme als Unterscheidungsmerkmal weg und die Trennung erfolgt über das ==Ohr== (die Lokalisation).",
    merksatz: "Dichotisches Hören: ein Ohr wird wiedergegeben, das andere ist ==gehört, aber nicht wahrgenommen== — gleiche Stimme, getrennt nur nach Ort.",
    beleg: "Kap. 5.2.3, S. 132",
  },
  {
    id: "NA-12", teil: "A", kapitel: 5, thema: "Aufmerksamkeit", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==Split-Span-Paradigma== von Broadbent (1954) sind korrekt?",
    aussagen: [
      { text: "Broadbent verwendete anstelle von Texten Zahlenpaare, von denen jeweils eine Zahl am linken und simultan eine Zahl am rechten Ohr dargeboten wurde.", istRichtig: true },
      { text: "Beim Wiedergeben nannten die Versuchspersonen meist zuerst die Zahlen der einen Seite und dann die der anderen Seite statt der Zahlenpaare.", istRichtig: true },
      { text: "Sollten die Zahlen in der Reihenfolge der Präsentation, also paarweise, wiedergegeben werden, traten weniger Fehler auf als bei ohrweiser Wiedergabe.", istRichtig: false },
      { text: "Die Ergebnisse wurden so interpretiert, dass die Zahlen vor der Weiterverarbeitung nach ihren physikalischen Eigenschaften — hier der Lokalisation — selektiert werden.", istRichtig: true },
    ],
    erklaerung: "a) richtig — ==Zahlenpaare== von derselben Stimme, eine Zahl links, gleichzeitig eine rechts (z. B. 2-4, 1-9, 8-5). b) richtig — wiedergegeben wurde meist ==ohrweise== (2, 1, 8, 4, 9, 5) und seltener paarweise (2, 4, 1, 9, 8, 5). c) falsch — bei erzwungener ==paarweiser== Wiedergabe traten ==mehr== Fehler auf als bei nach Ohr getrennter Wiedergabe. d) richtig — Deutung: Selektion nach ==physikalischen Eigenschaften== vor der Weiterverarbeitung; die ==Lokalisation== dient als Hinweisreiz, um die Informationen zu trennen.",
    merksatz: "Split-Span: das Gehirn sortiert ==nach Ohr, nicht nach Zeitpunkt== — Selektion nach ==physikalischen Merkmalen== (Ort) vor der Verarbeitung.",
    beleg: "Kap. 5.2.3, S. 132",
  },
];
