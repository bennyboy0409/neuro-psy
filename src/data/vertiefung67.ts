import type { Frage } from "../types";

/**
 * Vertiefungsfragen zu Kapitel 6 (Entwicklungspsychologie) und
 * Kapitel 7 (Sozialpsychologie). Deckt Themen ab, die in den
 * vorherigen Runden offen geblieben sind - alle Inhalte direkt
 * aus dem Lernskript belegt.
 */
export const vertiefung67: Frage[] = [
  // ---------------- Kapitel 7: Sozialer Einfluss ----------------
  {
    id: "V67-1", teil: "A", kapitel: 7, thema: "Chamäleon-Effekt", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Chamäleon-Effekt== (Chartrand & Bargh, 1999) sind korrekt?",
    aussagen: [
      { text: "Der Chamäleon-Effekt bezeichnet das unbewusste Nachahmen von nonverbalen Verhaltensweisen anderer Personen, wie Gesten und Gesichtsausdrücke.", istRichtig: true },
      { text: "Die Gesprächspartner:innen der Versuchspersonen waren echte weitere Versuchspersonen, die zufällig bestimmte Bewegungen zeigten.", istRichtig: false },
      { text: "Die beiden Bedingungen waren: sich regelmäßig über das Gesicht streichen bzw. mit dem Fuß wippen; alle Versuchspersonen durchliefen beide Bedingungen.", istRichtig: true },
      { text: "Die Versuchspersonen zeigten diese Bewegungen signifikant häufiger, als wenn sie alleine im Raum waren.", istRichtig: true },
    ],
    erklaerung: "a) richtig – genau so definiert das Skript den ==Chamäleon-Effekt==: unbewusstes Nachahmen ==nonverbaler== Verhaltensweisen.\nb) falsch – der oder die Gesprächspartner:in war jeweils ein ==Mitglied der Forschungsgruppe== mit einem klaren Auftrag, also eine eingeweihte Person.\nc) richtig – Bedingung 1 = ==über das Gesicht streichen==, Bedingung 2 = ==mit dem Fuß wippen==; es war ein ==Within-Design==, alle durchliefen beide Bedingungen.\nd) richtig – das war das zentrale Ergebnis: die Nachahmung trat ==signifikant häufiger== auf als in der Alleinsituation.",
    merksatz: "==Chamäleon== = ich passe mich unbewusst an, ohne es zu merken – ==nonverbal==, nicht per Meinung.",
    beleg: "Kap. 7.3.2, S. 205",
  },

  // ---------------- Kapitel 7: Gruppendefinition ----------------
  {
    id: "V67-2", teil: "A", kapitel: 7, thema: "Gruppendefinition", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Definition einer Gruppe== im sozialpsychologischen Sinn sind korrekt?",
    aussagen: [
      { text: "Zwei Grundbedingungen sind eine Mehrzahl an Personen und dass diese Personen in irgendeiner Art in Interaktion stehen.", istRichtig: true },
      { text: "Alle Personen, die in Österreich 2020 eine Grippe hatten, wären im sozialpsychologischen Sinn keine Gruppe, weil die Interaktion fehlt.", istRichtig: true },
      { text: "Eine Gruppe im sozialpsychologischen Sinn muss eindeutig aus mehr als zwei Personen bestehen.", istRichtig: false },
      { text: "Johnson und Johnson (2013) kamen zu dem Schluss, dass es eine allgemein gültige Gruppendefinition gibt, der alle Autor:innen folgen.", istRichtig: false },
    ],
    erklaerung: "a) richtig – ==Mehrzahl an Personen== plus ==Interaktion== sind die beiden Grundbedingungen.\nb) richtig – genau dieses Beispiel nennt das Skript: statistisch eine Gruppe, sozialpsychologisch nicht, weil die ==Interaktion fehlt==.\nc) falsch – ob es mehr als zwei Personen sein müssen, ist laut Skript ==unklar==; viele vorgestellte Studien untersuchen Interaktion zwischen nur zwei Personen. Festhalten lässt sich aber, dass die ==Gruppengröße== Einfluss auf Gruppeneffekte haben kann.\nd) falsch – Johnson und Johnson stellten fest, dass es ==keine allgemein gültige Definition== gibt, sondern viele Kriterien, die von verschiedenen Autor:innen angenommen werden, aber nicht zwingend alle gemeinsam.",
    merksatz: "Ohne ==Interaktion== keine Gruppe – und eine ==einheitliche Definition== gibt es nicht.",
    beleg: "Kap. 7.3.6, S. 215–216",
  },
  {
    id: "V67-3", teil: "A", kapitel: 7, thema: "Gruppendefinition", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu den ==Definitionskriterien für Gruppen nach Johnson und Johnson (2013)== sind korrekt?",
    aussagen: [
      { text: "Zu den Kriterien zählen gemeinsame Ziele, gegenseitige Abhängigkeit (Interdependenz) und Interaktion.", istRichtig: true },
      { text: "Wahrnehmung der Zugehörigkeit bedeutet, dass die Mitglieder sich selbst als Teil der Gruppe wahrnehmen.", istRichtig: true },
      { text: "Gegenseitiger Einfluss bedeutet: Jede:r beeinflusst oder kann die anderen beeinflussen und wird bzw. kann von den anderen beeinflusst werden.", istRichtig: true },
      { text: "Motivation bedeutet, dass die Gruppenmitglieder durch die Gruppenmitgliedschaft ein persönliches Bedürfnis befriedigen.", istRichtig: true },
    ],
    erklaerung: "Alle vier Aussagen sind richtig – hier hilft nur, die ==sieben Kriterien== zu kennen:\na) richtig – ==Ziele== (mindestens ein gemeinsames Ziel oder Interesse), ==gegenseitige Abhängigkeit== (was einem Mitglied passiert, wirkt sich auf die anderen aus) und ==Interaktion== (die Mitglieder müssen miteinander interagieren können).\nb) richtig – ==Wahrnehmung der Zugehörigkeit==.\nc) richtig – ==gegenseitiger Einfluss==, wörtlich so im Skript.\nd) richtig – ==Motivation==: die Mitgliedschaft befriedigt ein ==persönliches Bedürfnis==.\nDas siebte, hier nicht genannte Kriterium sind die ==strukturierten Beziehungen==: Interaktionen basieren auf einem bewussten oder unbewussten Set von ==Rollen und Normen==.",
    merksatz: "7 Kriterien: ==Ziele – Abhängigkeit – Interaktion – Zugehörigkeit – Struktur – Einfluss – Motivation==.",
    beleg: "Kap. 7.3.6, S. 216",
  },

  // ---------------- Kapitel 7: Intergruppenprozesse ----------------
  {
    id: "V67-4", teil: "A", kapitel: 7, thema: "Gruppenkohäsion", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Gruppenkohäsion== sind korrekt?",
    aussagen: [
      { text: "Der Grad an Gruppenkohäsion beschreibt das Ausmaß, wie stark eine Gruppe als geschlossene Einheit auftritt.", istRichtig: true },
      { text: "Sie wird bestimmt durch die gegenseitigen Beziehungen zwischen den Gruppenmitgliedern und den Wunsch, Teil der Gruppe zu sein und zu bleiben.", istRichtig: true },
      { text: "Gruppen mit hoher Kohäsion können Ziele leichter festlegen und auch erreichen.", istRichtig: true },
      { text: "Gruppenkohäsion kann laut Skript erst dann entstehen, wenn eine Gruppe einer konkurrierenden Outgroup gegenübersteht.", istRichtig: false },
    ],
    erklaerung: "a) richtig – ==geschlossene Einheit== ist die Kernformulierung der Definition.\nb) richtig – zwei Bestimmungsstücke: die ==gegenseitigen Beziehungen== und der ==Wunsch, dabei zu bleiben==.\nc) richtig – hohe Kohäsion erleichtert das ==Festlegen und Erreichen von Zielen== (Johnson & Johnson, 2013).\nd) falsch – im Ferienlagerexperiment entstand die Kohäsion bereits in ==Phase 1==, in der die beiden Gruppen räumlich getrennt und ohne Kontakt zueinander gemeinsame Aktivitäten und Bauprojekte hatten. Eigene Identitäten, Hierarchien, Rituale und Gruppennamen bildeten sich also ==ohne Outgroup-Kontakt==.",
    merksatz: "==Kohäsion== = wie sehr die Gruppe als ==ein Block== auftritt – entsteht schon durch gemeinsames Tun, nicht erst durch einen Gegner.",
    beleg: "Kap. 7.4.1, S. 222",
  },
  {
    id: "V67-5", teil: "A", kapitel: 7, thema: "Gruppenkonflikt", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Inter- und Intragruppenkonflikt== sind korrekt?",
    aussagen: [
      { text: "Ein Intergruppenkonflikt bezeichnet einen Konflikt zwischen Gruppen (lat. inter = zwischen).", istRichtig: true },
      { text: "Ein Intragruppenkonflikt bezeichnet einen Konflikt innerhalb einer Gruppe (lat. intra = innerhalb).", istRichtig: true },
      { text: "Mit zunehmendem Intergruppenkonflikt sank im Ferienlagerexperiment die Solidarität gegenüber der eigenen Gruppe.", istRichtig: false },
      { text: "Im Ferienlagerexperiment kam es zu Unterbindung und Rüge, wenn ein Teammitglied sich freundlich oder nicht aggressiv gegenüber der anderen Gruppe zeigte.", istRichtig: true },
    ],
    erklaerung: "a) richtig – ==inter== = zwischen, also Konflikt ==zwischen== Gruppen.\nb) richtig – ==intra== = innerhalb, also Konflikt ==innerhalb== einer Gruppe.\nc) falsch – genau umgekehrt: Mit zunehmendem Intergruppenkonflikt ==stieg== die Solidarität gegenüber der eigenen Gruppe.\nd) richtig – wer sich freundlich zur anderen Gruppe verhielt, wurde von der eigenen Gruppe ==gerügt== – ein Beispiel für Normdruck im Konflikt.",
    merksatz: "==inter== = zwischen, ==intra== = innerhalb. Streit nach außen schweißt nach innen ==zusammen==.",
    beleg: "Kap. 7.4.1, S. 223",
  },
  {
    id: "V67-6", teil: "A", kapitel: 7, thema: "Soziale Identität", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==Theorie der Sozialen Identität== nach Tajfel und Turner (2004) sind korrekt?",
    aussagen: [
      { text: "Ob die soziale Identität als positiv wahrgenommen wird, hängt davon ab, ob die eigene Gruppe im Vergleich mit relevanten Outgroups positiv abschneidet.", istRichtig: true },
      { text: "Die Theorie besagt, dass Menschen ihre soziale Identität ausschließlich aus individuellen Leistungen und nicht aus Gruppenzugehörigkeiten ableiten.", istRichtig: false },
      { text: "Nach der Theorie ist es keine plausible Strategie, einer fremden Gruppe zu schaden, weil das die eigene Selbsteinschätzung senken würde.", istRichtig: false },
      { text: "Die Theorie der Sozialen Identität stammt von Sherif und beschreibt vor allem, wie Intergruppenkonflikte wieder befriedet werden können.", istRichtig: false },
    ],
    erklaerung: "a) richtig – der ==soziale Vergleich== mit relevanten Outgroups entscheidet darüber, ob die soziale Identität als positiv erlebt wird.\nb) falsch – im Gegenteil: ==Gruppenzugehörigkeiten== spielen laut der Theorie eine wichtige Rolle dabei, eine positive soziale Identität zu erfahren. Der Ausgangspunkt ist, dass Menschen ein ==positives Selbstbild== konstruieren wollen.\nc) falsch – einer fremden Gruppe zu schaden, ist nach der Theorie sehr wohl eine ==plausible Strategie==, weil dadurch die eigene Gruppe im Vergleich besser dasteht und damit auch die eigene soziale Identität und Selbsteinschätzung aufgewertet wird.\nd) falsch – die Theorie stammt von ==Tajfel und Turner==. Von ==Sherif== stammt das Ferienlagerexperiment (Kap. 7.4.1), in dem die Befriedung durch übergeordnete gemeinsame Ziele gezeigt wurde.",
    merksatz: "Meine Gruppe hoch = ==ich== hoch. Darum lohnt sich Abwertung der Outgroup – so erklärt ==Tajfel & Turner== Diskriminierung.",
    beleg: "Kap. 7.4.3, S. 227",
  },

  // ---------------- Kapitel 7: Stereotype Threat ----------------
  {
    id: "V67-7", teil: "A", kapitel: 7, thema: "Stereotype Threat", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum Experiment von ==Spencer, Steele und Quinn (1999)== zur Bedrohung durch Stereotype sind korrekt?",
    aussagen: [
      { text: "Beide Gruppen absolvierten einen Mathematiktest; die Experimentalgruppe erhielt zusätzlich die Information, dass es Kontroversen über Geschlechtsunterschiede bei mathematischen Aufgaben gibt.", istRichtig: true },
      { text: "In der Experimentalgruppe war die Leistung der Frauen schlechter als die der Männer.", istRichtig: true },
      { text: "Auch in der Kontrollgruppe zeigten sich deutliche Geschlechtsunterschiede zugunsten der Männer.", istRichtig: false },
      { text: "Die Gruppen unterschieden sich schon vor dem Experiment in ihrer tatsächlichen Leistungsfähigkeit.", istRichtig: false },
    ],
    erklaerung: "a) richtig – die Kontrollgruppe wurde ==nur== über den Mathematiktest informiert, die Experimentalgruppe zusätzlich über die ==Kontroverse zu Geschlechtsunterschieden==. Das ist die gesamte Manipulation.\nb) richtig – genau dieser ==Leistungsunterschied== zeigte sich in der Experimentalgruppe.\nc) falsch – in der Kontrollgruppe gab es ==keine== Geschlechtsunterschiede. Erst der Hinweis erzeugt den Effekt.\nd) falsch – die Teilnehmer:innen waren bezüglich ihrer ==tatsächlichen Leistung ausbalanciert==. Genau deshalb lässt sich der Unterschied auf die ==Instruktion== zurückführen.",
    merksatz: "Ein Satz vor dem Test reicht: Der ==Hinweis auf das Stereotyp== erzeugt Angst, es zu erfüllen – und drückt die Leistung.",
    beleg: "Kap. 7.4.3, S. 228",
  },
  {
    id: "V67-8", teil: "A", kapitel: 7, thema: "Stereotype Threat", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum Experiment von ==Steele und Aronson (1995)== sind korrekt?",
    aussagen: [
      { text: "Derselbe Test wurde entweder als Problemlöseaufgabe oder als psychodiagnostisches Instrument zur Ermittlung der intellektuellen Fähigkeit eingeleitet.", istRichtig: true },
      { text: "Untersucht wurden Schwarze Personen in beiden Bedingungen, zusätzlich verglichen mit einer Gruppe Weißer Personen.", istRichtig: true },
      { text: "Am schlechtesten von den drei Gruppen schnitt die Gruppe Schwarzer Personen ab, die annahm, dass ihre intellektuellen Fähigkeiten gemessen werden.", istRichtig: true },
      { text: "Die Bedrohung durch Stereotype lässt sich laut Skript ausschließlich bei Geschlechterstereotypen nachweisen.", istRichtig: false },
    ],
    erklaerung: "a) richtig – die Manipulation war allein die ==Einleitung== des Tests: harmlose ==Problemlöseaufgabe== (Kontrollgruppe) versus ==psychodiagnostische Messung der Intelligenz==.\nb) richtig – Schwarze Personen in beiden Bedingungen plus eine Vergleichsgruppe Weißer Personen.\nc) richtig – die Bedingung ==Intelligenzmessung== führte bei den Schwarzen Personen zum schlechtesten Ergebnis der drei Gruppen.\nd) falsch – dieses Experiment zeigt den Effekt gerade ==jenseits von Geschlecht==; bei Spencer, Steele und Quinn (1999) ging es um Geschlecht, hier um eine andere stigmatisierte Gruppe.",
    merksatz: "Nicht die Aufgabe ändert sich, sondern die ==Ankündigung==: Sobald das eigene Stereotyp im Raum steht, sinkt die Leistung.",
    beleg: "Kap. 7.4.3, S. 229",
  },
  {
    id: "V67-9", teil: "A", kapitel: 7, thema: "Stereotype Threat", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==Erklärung und Auflösung von Stereotype Threat== sind korrekt?",
    aussagen: [
      { text: "Ein Erklärungsansatz ist, dass die Bedrohung durch das Stereotyp Angst und negatives Denken auslöst, wodurch die mögliche Leistung nicht erbracht werden kann.", istRichtig: true },
      { text: "Die kognitiven Effekte des Stereotyps können auch kognitiv wieder aufgelöst werden.", istRichtig: true },
      { text: "Johns, Schmader und Martens (2005) klärten Frauen vor einem Mathematiktest über die Effekte von Stereotype Threat auf; dadurch konnte der Effekt deutlich verringert oder sogar aufgehoben werden.", istRichtig: true },
      { text: "Damit der Effekt entsteht, muss den Betroffenen die ausgelöste Angst explizit bewusst sein.", istRichtig: false },
    ],
    erklaerung: "a) richtig – ==Angst und negatives Denken== binden Kapazität, die dann für die Aufgabe fehlt.\nb) richtig – weil der Effekt ==kognitiv== ist, lässt er sich auch kognitiv angehen.\nc) richtig – die reine ==Aufklärung über den Effekt== reichte, um ihn deutlich zu verringern oder aufzuheben.\nd) falsch – das Skript hält ausdrücklich fest, dass Angst und negatives Denken den Betroffenen ==nicht explizit bewusst== sein müssen.",
    merksatz: "==Wissen über den Effekt schützt vor dem Effekt== – Johns et al. (2005) hebeln Stereotype Threat durch Aufklärung aus.",
    beleg: "Kap. 7.4.3, S. 229",
  },

  // ---------------- Kapitel 7: Prosoziales Verhalten ----------------
  {
    id: "V67-10", teil: "A", kapitel: 7, thema: "Bewertungsangst", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Bewertungsangst== (Latané & Darley, 1970) sind korrekt?",
    aussagen: [
      { text: "Bewertungsangst bezeichnet die Angst vor negativen Bewertungen durch die anderen Anwesenden.", istRichtig: true },
      { text: "Bewertungsangst entsteht gerade durch die Anwesenheit anderer Personen und kann ein Grund sein, warum jemand von einer möglichen Hilfeleistung absieht.", istRichtig: true },
      { text: "Bewertungsangst greift laut Skript nur, solange sich die Zeug:innen ihrer Verantwortung nicht bewusst sind.", istRichtig: false },
      { text: "Bewertungsangst ist im Skript ein anderes Wort für pluralistische Ignoranz.", istRichtig: false },
    ],
    erklaerung: "a) richtig – so definiert das Skript den Begriff.\nb) richtig – die ==Anwesenheit anderer== erzeugt die Angst vor deren Urteil, was Hilfeverhalten hemmt.\nc) falsch – umgekehrt: Das Skript betont, dass ==selbst wenn== sich Zeug:innen ihrer Verantwortung bewusst sind, Hilfe nicht gewährleistet ist – genau hier setzt die Bewertungsangst an.\nd) falsch – ==pluralistische Ignoranz== ist etwas anderes: Alle Anwesenden beobachten einander und warten ab, wodurch alle irrtümlich schließen, die Situation erfordere kein Einschreiten. Davon wieder zu unterscheiden ist die ==Verantwortungsdiffusion==, bei der sich die Verantwortung über alle Anwesenden verteilt.",
    merksatz: "Drei Bremsen beim Helfen: ==pluralistische Ignoranz== (Lagebeurteilung), ==Verantwortungsdiffusion== (Zuständigkeit), ==Bewertungsangst== (Blamage).",
    beleg: "Kap. 7.5.4, S. 234",
  },

  // ---------------- Kapitel 6: Gehirnreifung ----------------
  {
    id: "V67-11", teil: "A", kapitel: 6, thema: "Gehirnreifung", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==Gehirnreifung== und zum ==synaptic pruning== sind korrekt?",
    aussagen: [
      { text: "In den ersten beiden Lebensjahren findet im Gehirn eine Überproduktion an Nervenzellen und Verbindungen statt.", istRichtig: true },
      { text: "Nicht benötigte Zellen und Verbindungen werden parallel dazu durch Zelltod und synaptische Beschneidung (synaptic pruning) wieder entfernt.", istRichtig: true },
      { text: "Die Ausreifung der Nervenzellen und ihrer Verbindungen beginnt erst nach der Geburt.", istRichtig: false },
      { text: "Die Geschwindigkeit, mit der Nervenzellen produziert werden, liegt laut Kolb und Gibb (2011) bei maximal 25.000 Nervenzellen pro Minute.", istRichtig: false },
    ],
    erklaerung: "a) richtig – zuerst wird ==zu viel== angelegt: Überproduktion an Nervenzellen und Verbindungen in den ersten beiden Lebensjahren.\nb) richtig – ==parallel== dazu läuft der Abbauprozess über ==Zelltod== und ==synaptische Beschneidung==.\nc) falsch – die Ausreifung (Wachstum von ==Axonen und Dendriten==) beginnt bereits ==vorgeburtlich==, in der fötalen Phase, und dauert bis lange nach der Geburt an.\nd) falsch – die Zahl lautet maximal ==250.000== Nervenzellen pro Minute, nicht 25.000.",
    merksatz: "Bild aus dem Skript: erst der ==Holzblock== (Überproduktion), dann das ==Wegschnitzen== (pruning) – so entsteht die Figur.",
    beleg: "Kap. 6.2.1, S. 165",
  },

  // ---------------- Kapitel 6: Bindungstypen im Detail ----------------
  {
    id: "V67-12", teil: "A", kapitel: 6, thema: "Bindungstypen", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==Bindungstyp A (unsicher-vermeidend)== sind korrekt?",
    aussagen: [
      { text: "Das Kind holt sich keinen Trost von der Bezugsperson und vermeidet es, Gefühle zu zeigen.", istRichtig: true },
      { text: "Erklärt wird das damit, dass das Kind bereits erfahren hat, dass die Bezugsperson nicht zuverlässig auf seine Bedürfnisse reagiert.", istRichtig: true },
      { text: "Speichelproben zeigten, dass diese Kinder auch körperlich entspannt sind und tatsächlich wenig Stress erleben.", istRichtig: false },
      { text: "Typ A steht in der Reihenfolge vor dem sicheren Typ B, weil die Kinder des Typs A nach außen hin ruhiger auf die Fremde-Situation reagieren.", istRichtig: true },
    ],
    erklaerung: "a) richtig – nach außen ruhig, ==kein Trostsuchen==, ==keine Gefühlsäußerung==.\nb) richtig – für das Kind lohnt es sich nicht, Trost zu suchen, weil die Bezugsperson ==unzuverlässig== reagiert hat.\nc) falsch – genau das Gegenteil zeigte die Messung des Stresshormons ==Cortisol== im Speichel: Die Kinder des Typs A wirken nur ==nach außen== ruhig, haben aber ein ==sehr hohes Stressniveau==.\nd) richtig – das Skript erklärt die Reihenfolge historisch: Typ A wirkte äußerlich ruhiger als Typ B, der weint. Erst spätere Forschung zeigte, dass ==B== das eigentlich sichere Muster ist.",
    merksatz: "Typ A: ==außen ruhig, innen Alarm== – der Cortisol-Befund entlarvt die scheinbare Gelassenheit.",
    beleg: "Kap. 6.4.1, S. 186–188",
  },
  {
    id: "V67-13", teil: "A", kapitel: 6, thema: "Bindungstypen", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Bindungstyp B (sicher gebunden)== sind korrekt?",
    aussagen: [
      { text: "Das Kind weint, wenn die Bezugsperson den Raum verlässt, und sucht sofort Kontakt zu ihr, wenn sie zurückkommt.", istRichtig: true },
      { text: "Dieser Bindungstyp ist von Vertrauen zur Bezugsperson gekennzeichnet.", istRichtig: true },
      { text: "Die Eltern dieses Bindungstyps agieren vorrangig autonom - sie haben sich erfolgreich aus der eigenen Elternbeziehung gelöst und können sich voll auf ihre Rolle als Eltern fokussieren.", istRichtig: true },
      { text: "Bei Bindungstyp B spricht man von einer sicheren Bindung; die Typen A, C und D gelten als unsichere Bindungen.", istRichtig: true },
    ],
    erklaerung: "Alle vier Aussagen sind richtig:\na) richtig – Weinen bei Trennung und ==sofortiges Kontaktsuchen== bei der Rückkehr; das Kind lässt sich auch ==beruhigen==.\nb) richtig – ==Vertrauen== ist das Kennzeichen von Typ B.\nc) richtig – das Skript beschreibt die Eltern des Typs B als ==autonom==: aus der eigenen Elternbeziehung gelöst, voll auf die Elternrolle fokussiert. Bei Typ C sind die Eltern dagegen oft noch in der Beziehung zu den eigenen Eltern ==verhaftet==.\nd) richtig – nur ==B== ist sicher, ==A, C und D== sind unsichere Bindungen.",
    merksatz: "Typ B: ==Protest bei Trennung, Trost bei Rückkehr== – Weinen ist hier das ==gesunde== Zeichen.",
    beleg: "Kap. 6.4.1, S. 186–188",
  },
  {
    id: "V67-14", teil: "A", kapitel: 6, thema: "Bindungstypen", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==Bindungstyp C (unsicher-ambivalent)== sind korrekt?",
    aussagen: [
      { text: "Nach der Rückkehr der Bezugsperson kann das Kind nicht entspannen; es sucht Trost, kann diesen aber nicht annehmen.", istRichtig: true },
      { text: "Die Interpretation lautet, dass das Kind in der Vergangenheit ambivalente Reaktionen - liebevoll bis abweisend - auf die eigenen Bedürfnisäußerungen erlebt hat.", istRichtig: true },
      { text: "Eltern dieses Bindungstyps sind oft noch in der Beziehung mit den eigenen Eltern verhaftet.", istRichtig: true },
      { text: "Bindungstyp C wird im Skript als unsicher-desorganisiert bezeichnet.", istRichtig: false },
    ],
    erklaerung: "a) richtig – das typische Muster: ==Trost suchen, aber nicht annehmen können==.\nb) richtig – ==ambivalente== Reaktionen der Bezugspersonen, also mal liebevoll, mal abweisend.\nc) richtig – im Gegensatz zu den autonomen Eltern des Typs B. Eine mögliche Dynamik: Eltern erhöhen über die Traurigkeit des Kindes den ==eigenen Selbstwert==, und das Kind nimmt das Trösten als ==nicht ehrlich== wahr.\nd) falsch – C heißt ==unsicher-ambivalent==. ==Unsicher-desorganisiert== ist Typ ==D==.",
    merksatz: "Typ C = ==ambivalent==, weil die Eltern ambivalent waren: Das Kind will Trost und kann ihn zugleich nicht annehmen.",
    beleg: "Kap. 6.4.1, S. 187",
  },
  {
    id: "V67-15", teil: "A", kapitel: 6, thema: "Bindungstypen", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==Bindungstyp D (unsicher-desorganisiert)== sind korrekt?",
    aussagen: [
      { text: "Das Kind reagiert konfus, wirft sich schreiend auf den Boden oder friert ein und ist mitunter aggressiv gegenüber der Bezugsperson.", istRichtig: true },
      { text: "Typ D war bereits in der ursprünglichen Einteilung von Ainsworth, Blehar, Waters und Wall (1978) enthalten.", istRichtig: false },
      { text: "Man nimmt an, dass das Verhalten der Eltern für Kinder dieses Bindungstyps gut vorhersagbar ist.", istRichtig: false },
      { text: "Typ D zählt laut Skript zu den sicheren Bindungen.", istRichtig: false },
    ],
    erklaerung: "a) richtig – ==konfuses==, in sich widersprüchliches Verhalten: schreiendes Zusammenbrechen, ==Einfrieren==, teils Aggression gegen die Bezugsperson.\nb) falsch – Typ D wurde erst ==1990 von Mary Main und Judit Solomon== als vierter Bindungstyp hinzugefügt; die ursprüngliche Einteilung von 1978 kannte A, B und C.\nc) falsch – umgekehrt: Das Verhalten der Eltern ist für diese Kinder ==nicht vorhersagbar==. Zusätzlich nimmt man ==Traumatisierungen in den frühen Lebensmonaten== an.\nd) falsch – nur Typ ==B== ist sicher; A, C und D sind ==unsicher==.",
    merksatz: "Typ D = ==Chaos ohne Strategie==, nachträglich (1990, ==Main & Solomon==) ergänzt, weil A/B/C nicht ausreichten.",
    beleg: "Kap. 6.4.1, S. 187–188",
  },
  {
    id: "V67-16", teil: "A", kapitel: 6, thema: "Bindungsforschung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Forschungsstand der Bindungstheorie== sind korrekt?",
    aussagen: [
      { text: "Im Fremde-Situation-Szenario waren die Kinder zwischen 12 und 24 Monaten alt.", istRichtig: true },
      { text: "Verschiedene Studien konnten die Gültigkeit der Bindungstheorie über verschiedene Kulturen hinweg feststellen.", istRichtig: true },
      { text: "Die Bindungsperson muss zwingend die Mutter sein; Väter, Großeltern oder Bezugsbetreuer:innen im Heim können diese Rolle nicht übernehmen.", istRichtig: false },
      { text: "Die Sensitivität der Bindungsperson gilt als zentraler Umweltfaktor, der zu Bindungsunterschieden in der frühen Kindheit führt.", istRichtig: true },
    ],
    erklaerung: "a) richtig – ==12 bis 24 Monate== ist die im Skript genannte Altersspanne für die Fremde-Situation.\nb) richtig – die ==kulturübergreifende Gültigkeit== wurde mehrfach belegt (z. B. Jin et al., 2012; van Ijzendoorn & Kroonenberg, 1990).\nc) falsch – das Skript hält ausdrücklich fest, dass die Bindungsperson ==nicht zwingend die Mutter== sein muss; auch Vater, Großeltern oder Bezugsbetreuer:innen im Heim können diese tragende Rolle erfolgreich übernehmen.\nd) richtig – die ==Sensitivität== (Feinfühligkeit) der Bindungsperson ist der zentrale Umweltfaktor. Weitere bestätigte Annahmen: Bindung als ==generationenübergreifendes== Phänomen und frühe Bindungserfahrung als ==prägend== für die soziale und emotionale Entwicklung.",
    merksatz: "Bindung ist ==robust==: kulturübergreifend gültig, ==nicht mutterfixiert==, und ==Sensitivität== bleibt der Schlüsselfaktor.",
    beleg: "Kap. 6.4.1, S. 186–188",
  },
];
