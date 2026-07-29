import type { Frage } from "../types";

/**
 * Nachzuegler-Fragen zu Kapitel 6 (Entwicklungspsychologie) und
 * Kapitel 7 (Sozialpsychologie): Themen, die in der ersten Runde
 * ausgelassen wurden. Alle Inhalte direkt aus dem Lernskript belegt.
 */
export const nachzuegler67: Frage[] = [
  // ---------------- Kapitel 6 ----------------
  {
    id: "N67-1", teil: "A", kapitel: 6, thema: "Moralentwicklung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Kritik an Kohlbergs Modell== sind korrekt?",
    aussagen: [
      { text: "Gilligan (1982) kritisierte Kohlberg dafür, die weibliche Perspektive zu vernachlässigen.", istRichtig: true },
      { text: "Gilligan verstand das moralische Konzept von Frauen als eine Moral der Verantwortung, gekennzeichnet durch Fürsorge, jenes von Männern als eine Moral der Gerechtigkeit.", istRichtig: true },
      { text: "Eine Metaanalyse von Jaffee und Hyde (2000) ergab, dass Frauen und Männer exakt dieselben moralischen Orientierungen haben.", istRichtig: false },
      { text: "Snell (1996) kritisierte, dass Kohlbergs Erhebungsinstrumente in erster Linie auf westliche Zeichen moralischen Handelns abzielen.", istRichtig: true },
    ],
    erklaerung: "a) richtig – Gilligan (1982) warf Kohlberg vor, die ==weibliche Perspektive== zu vernachlässigen, und betonte die Verschiedenheit der moralischen Konzepte von Frauen und Männern.\nb) richtig – genau diese Gegenüberstellung beschreibt Gilligan: ==Moral der Verantwortung/Fürsorge== bei Frauen, ==Moral der Gerechtigkeit== bei Männern.\nc) falsch – die Metaanalyse fand sehr wohl ==unterschiedliche moralische Orientierungen==, die Unterschiede waren aber ==nicht besonders groß==.\nd) richtig – Snell kritisierte die ==kulturelle Einseitigkeit==, weil Kohlberg seine Theorie auf Basis ==westlicher Moralkonzepte== entwickelte.",
    merksatz: "Zwei Kritiklinien: ==Geschlecht== (Gilligan – Fürsorge statt Gerechtigkeit) und ==Kultur== (Snell – nur westliche Moral).",
    beleg: "Kap. 6.3.3, S. 183",
  },
  {
    id: "N67-2", teil: "A", kapitel: 6, thema: "Pränatale Entwicklung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Teratogenen== und ==sensiblen Phasen== sind korrekt?",
    aussagen: [
      { text: "Teratogene sind Umwelteinflüsse, die die gesunde Entwicklung des Fötus beeinträchtigen und Schädigungen des Organismus verursachen können.", istRichtig: true },
      { text: "Teratogene können ausschließlich chemischer Natur sein.", istRichtig: false },
      { text: "Sensible Phasen sind Phasen, in denen Teratogene besonders negative Auswirkungen zeigen; meist sind das Phasen starken Wachstums.", istRichtig: true },
      { text: "Wie schwerwiegend die Folgen für das Kind sind, hängt auch von Menge und Dauer der schädlichen Einflüsse ab.", istRichtig: true },
    ],
    erklaerung: "a) richtig – so definiert das Skript ==Teratogene==; Beispiele sind Erkrankungen der Mutter, Luftverschmutzung, ionisierende Strahlung und Suchtmittelkonsum.\nb) falsch – Teratogene können ==biologischer, physikalischer oder chemischer== Natur sein.\nc) richtig – in ==sensiblen Phasen== ist das Ungeborene besonders empfindlich, weil dort starkes Wachstum stattfindet.\nd) richtig – neben dem Zeitpunkt bestimmen auch ==Menge und Dauer== die Schwere der Folgen; unterschieden werden kleinere und große morphologische Defekte.",
    merksatz: "==Teratogen== = schädigender Umwelteinfluss von außen; in ==sensiblen Phasen== (starkes Wachstum) trifft er am härtesten.",
    beleg: "Kap. 6.2.1, S. 165–166",
  },
  {
    id: "N67-3", teil: "A", kapitel: 6, thema: "Pränatale Entwicklung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Alkohol und Medikamenten in der Schwangerschaft== sind korrekt?",
    aussagen: [
      { text: "Das Fetale Alkoholsyndrom (FAS) stellt die ausgeprägteste Form der Fetalen Alkoholspektrumsstörungen (FASD) dar.", istRichtig: true },
      { text: "Zu den möglichen Folgen des FAS zählen Wachstumsstörungen, Gesichtsfehlbildungen, Herzfehler, Bewegungsstörungen und kognitive Beeinträchtigungen.", istRichtig: true },
      { text: "Thalidomid, verkauft unter dem Markennamen Contergan, war in den 1950er Jahren ein beliebtes Beruhigungs- und Schlafmittel für Schwangere; der Zusammenhang mit Fehlbildungen wurde erst Anfang der 1960er Jahre festgestellt.", istRichtig: true },
      { text: "Medikamente, die für die Mutter ungefährlich sind, können dem Ungeborenen grundsätzlich nicht schaden.", istRichtig: false },
    ],
    erklaerung: "a) richtig – ==FAS== ist die schwerste Ausprägung innerhalb des Spektrums ==FASD==.\nb) richtig – genau diese Folgen listet das Skript auf, wobei die Schwere unterschiedlich ausfallen kann.\nc) richtig – der ==Contergan==-Fall ist das bekannteste Medikamentenbeispiel; je nach Einnahmezeitraum zeigten sich unterschiedliche Missbildungen.\nd) falsch – das Skript betont ausdrücklich, dass Medikamente, die ==für die Mutter ungefährlich== sind, beim Ungeborenen ==schwere Schäden== verursachen können.",
    merksatz: "==FAS== = schwerste Form von FASD; ==Contergan== zeigt: harmlos für die Mutter heißt nicht harmlos für das Kind.",
    beleg: "Kap. 6.2.1, S. 166",
  },
  {
    id: "N67-4", teil: "A", kapitel: 6, thema: "Säuglingsentwicklung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==Sinnesentwicklung beim Säugling== sind korrekt?",
    aussagen: [
      { text: "Bereits nach der Geburt verfügt das Kind über alle Sinne, diese sind jedoch unterschiedlich gut ausgebildet.", istRichtig: true },
      { text: "Säuglinge ziehen den Geruch fremder Personen dem Geruch der eigenen Mutter vor.", istRichtig: false },
      { text: "Das Sehvermögen Neugeborener ist im Vergleich zu Erwachsenen hinsichtlich Schärfe, Kontrast- und Farbempfindlichkeit eingeschränkt.", istRichtig: true },
      { text: "Neugeborene bevorzugen gesichtsunähnliche Reize gegenüber menschlichen Gesichtern.", istRichtig: false },
    ],
    erklaerung: "a) richtig – alle Sinne sind vorhanden, aber ==unterschiedlich gut ausgebildet==. Durch die Zeit im Mutterleib kommt das Kind bereits mit einer ==Präferenz für die Stimme der eigenen Mutter== zur Welt, erkennbar am beschleunigten Herzschlag.\nb) falsch – umgekehrt: der Säugling zieht den ==Geruch der eigenen Mutter== dem fremder Personen vor und beruhigt sich in schmerzlichen Situationen schneller am Geruch der eigenen Muttermilch.\nc) richtig – Menschen werden mit weitgehend funktionierendem Sehvermögen geboren, das aber bei ==Schärfe, Kontrast und Farbe== eingeschränkt ist.\nd) falsch – Neugeborene bevorzugen ==menschliche Gesichter==; ebenso gemusterte vor ungemusterten, bewegte vor statischen, dreidimensionale vor zweidimensionalen und neue vor bekannten Reizen.",
    merksatz: "Der Säugling kommt mit ==Präferenz für die eigene Mutter== (Stimme, Gesicht, Geruch) zur Welt; ==Sehen== funktioniert, aber unscharf.",
    beleg: "Kap. 6.2.2, S. 168",
  },
  {
    id: "N67-5", teil: "A", kapitel: 6, thema: "Entwicklungsforschung", quelle: "generiert", schwierigkeit: 3,
    stem: "Wie erforscht die Entwicklungspsychologie, ==was Säuglinge bereits können==? Welche Aussagen sind korrekt?",
    aussagen: [
      { text: "Säuglingen wurden lange nur wenige Fähigkeiten zugeschrieben, weil diese in Alltagssituationen kaum auffallen und als unsystematisch wahrgenommen werden.", istRichtig: true },
      { text: "Zu den präsprachlichen Verhaltensindikatoren zählen Blickdauer, Reaktionszeiten und die Fokussierung des Blicks auf ein Objekt im Unterschied zu einem anderen.", istRichtig: true },
      { text: "Aussagen auf Basis solcher Verhaltensindikatoren sind eindeutig und werden von verschiedenen Forscher:innen einheitlich gedeutet.", istRichtig: false },
      { text: "Der Wissensfortschritt kam dadurch zustande, dass sich die Säuglinge selbst im Laufe der Jahrzehnte verändert haben.", istRichtig: false },
    ],
    erklaerung: "a) richtig – nicht die Kinder haben sich verändert, sondern die ==Zuschreibung==: frühe Fähigkeiten fallen im Alltag kaum auf.\nb) richtig – genau diese ==präsprachlichen Verhaltensindikatoren== nennt das Skript, weil Säuglinge noch nicht sprechen können.\nc) falsch – solche Aussagen sind in vielen Fällen ==Interpretationen== und werden von unterschiedlichen Forscher:innen zum Teil ==divers gedeutet==. Das ist die zentrale Einschränkung dieser Methodik.\nd) falsch – der Fortschritt entstand durch ==ausdifferenzierte experimentelle Bedingungen== und neu gefundene Verhaltensindikatoren.",
    merksatz: "Säuglinge sprechen nicht, also misst man ==Blickdauer und Reaktionszeit== – die Ergebnisse bleiben aber ==Interpretationen==.",
    beleg: "Kap. 6.2.2, S. 169",
  },
  {
    id: "N67-6", teil: "A", kapitel: 6, thema: "Kognition im Alter", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zu ==kognitiven Veränderungen im hohen Erwachsenenalter== sind korrekt?",
    aussagen: [
      { text: "Bei Personen über 65 Jahren korrelieren die Leistungsniveaus verschiedener kognitiver Fähigkeiten stärker miteinander als bei jüngeren Personen.", istRichtig: true },
      { text: "Der Rückgang der kognitiven Fähigkeiten wird häufig überschätzt und als zu früh einsetzend angenommen.", istRichtig: true },
      { text: "Umweltfaktoren wie Ernährung oder körperliche und geistige Aktivität spielen für den kognitiven Alterungsprozess keine Rolle.", istRichtig: false },
      { text: "Dem kognitiven Abbau kann durch gezieltes Training nicht entgegengewirkt werden.", istRichtig: false },
    ],
    erklaerung: "a) richtig – wer im hohen Alter eine überdurchschnittliche Gedächtnisleistung hat, hat eher auch hohe Wortflüssigkeit und visuell-räumliche Fähigkeiten; die Fähigkeiten ==hängen stärker zusammen== als bei Jüngeren (de Frias et al., 2007).\nb) richtig – das Skript betont ausdrücklich die ==Überschätzung== des Abbaus.\nc) falsch – ==Umweltfaktoren== wie Ernährung sowie körperliche und geistige Aktivität spielen eine ==große Rolle==; generell gesunde Personen zeigen meist nur leichte bis gar keine Einbußen.\nd) falsch – dem Abbau kann sehr wohl durch ==gezieltes Training== entgegengewirkt werden.",
    merksatz: "Im Alter rücken die kognitiven Fähigkeiten ==zusammen== – der Abbau wird aber überschätzt und ist ==trainierbar==.",
    beleg: "Kap. 6.3.4, S. 184–185",
  },

  // ---------------- Kapitel 7 ----------------
  {
    id: "N67-7", teil: "A", kapitel: 7, thema: "Beeinflussung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu den ==Judo-Strategien== der bewussten sozialen Einflussnahme sind korrekt?",
    aussagen: [
      { text: "Judo-Strategien sind bewusste Strategien, mit denen die menschliche Informationsverarbeitung in eine bestimmte Richtung gelenkt wird.", istRichtig: true },
      { text: "Zu den im Skript aufgezählten Judo-Strategien zählen das Prinzip sozialer Bewährtheit, das Prinzip der Knappheit, das Kontrastprinzip, die Reziprozitätsnorm und Commitment.", istRichtig: true },
      { text: "Unkritischer Gehorsam gegenüber Autoritäten kann reduziert werden, indem die Eigenverantwortung der handelnden Person bewusst gemacht wird.", istRichtig: true },
      { text: "Professionelles Auftreten, akademische Titel oder Kleidung spielen für die zugeschriebene Expertise einer Person keine Rolle.", istRichtig: false },
    ],
    erklaerung: "a) richtig – Werth und Mayer (2020) bezeichnen sie als ==Judo-Strategien==: Strategien, mit denen man jemanden zu Fall bringt.\nb) richtig – genau diese fünf plus diverse weitere nennt das Skript.\nc) richtig – neben dem Bewusstmachen der ==Eigenverantwortung== (Kilham & Mann, 1974) helfen das Hinterfragen von ==Expertise und Motiven== sowie das Prüfen der ==Angemessenheit== des Gehorsams. Beim Sanitäter im Notfall ist rasches Befolgen sinnvoll, in einer Milgram-artigen Situation nicht.\nd) falsch – genau diese Merkmale führen dazu, dass einer Person ==Expert:innenstatus== zugeschrieben wird und man ihren Anweisungen folgt.",
    merksatz: "==Judo-Strategien== nutzen die eigene Denk-Trägheit als Hebel – Gegenmittel ist ==Eigenverantwortung bewusst machen==.",
    beleg: "Kap. 7.3.5, S. 212",
  },
  {
    id: "N67-8", teil: "A", kapitel: 7, thema: "Beeinflussung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Prinzip sozialer Bewährtheit== sind korrekt?",
    aussagen: [
      { text: "Die Kernidee lautet: Was alle tun, muss gut sein – in mehrdeutigen Situationen verlassen sich Menschen darauf, wie sich andere verhalten.", istRichtig: true },
      { text: "Das Prinzip hängt eng mit dem informationalen sozialen Einfluss zusammen.", istRichtig: true },
      { text: "Bei Friedman und Fireworker (1977) bewerteten Personen einen Wein besser und schätzten ihn teurer ein, wenn sie zuvor die Information erhalten hatten, dass ihn eine unbekannte Mehrheit als fantastisch beschrieben hatte.", istRichtig: true },
      { text: "Das Prinzip wirkt nur dann, wenn die Mehrheit der beurteilenden Person persönlich bekannt ist.", istRichtig: false },
    ],
    erklaerung: "a) richtig – die Kennzeichnung als meistgekauftes Produkt oder fremde Rezensionen ersetzen die eigene Auseinandersetzung mit der Qualität.\nb) richtig – das Skript verweist ausdrücklich auf den ==informationalen sozialen Einfluss== (Kap. 7.3.2): andere dienen als ==Informationsquelle==.\nc) richtig – der Wein wurde besser bewertet und auch ==teurer geschätzt== als ein von anderen als schrecklich beschriebener Wein.\nd) falsch – im Experiment war es ausdrücklich eine ==unbekannte Mehrheit==; persönliche Bekanntheit ist keine Bedingung.",
    merksatz: "==Soziale Bewährtheit== = Abkürzung über die Menge: was viele gut finden, prüfe ich nicht mehr selbst.",
    beleg: "Kap. 7.3.5, S. 213",
  },
  {
    id: "N67-9", teil: "A", kapitel: 7, thema: "Beeinflussung", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==Prinzip der Knappheit== und zur ==Reaktanz== sind korrekt?",
    aussagen: [
      { text: "Knappheit bewirkt eine extremere Beurteilung: tendenziell positive Eigenschaften werden als noch positiver bewertet, wenn es sich um ein seltenes Gut handelt.", istRichtig: true },
      { text: "Reaktanz bezeichnet einen aversiven Zustand, der entsteht, wenn Menschen sich ihrer Freiheit beraubt oder eingeschränkt fühlen.", istRichtig: true },
      { text: "Um Reaktanz zu reduzieren, wird genau entgegen der gegebenen Einschränkung gehandelt.", istRichtig: true },
      { text: "Die Reaktanz-Theorie geht auf Brehm (1966) zurück.", istRichtig: true },
    ],
    erklaerung: "Achtung: hier sind ausnahmsweise ==alle vier== Aussagen richtig.\na) richtig – Ditto und Jemmott (1989) zeigten diese ==extremere Beurteilung== seltener Güter.\nb) richtig – so definiert Infobox 7.4 die ==Reaktanz==.\nc) richtig – Reaktanz äußert sich als ==Trotzreaktion==: man will die eingeschränkte Freiheit wiederherstellen, wodurch die Attraktivität des knappen Guts weiter steigt. Zellinger und Kolleg:innen (1975) fanden einen ==erhöhten== Wunsch nach einem Buch, wenn es als altersbeschränkt gekennzeichnet war.\nd) richtig – die Reaktanz-Theorie stammt von ==Brehm (1966)==.",
    merksatz: "==Was rar ist, muss viel wert sein==: Knappheit macht das Urteil extremer und löst ==Reaktanz== aus – verbotene Frucht schmeckt besser.",
    beleg: "Kap. 7.3.5, S. 213 (Infobox 7.4)",
  },
  {
    id: "N67-10", teil: "A", kapitel: 7, thema: "Beeinflussung", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==Kontrastprinzip== sind korrekt?",
    aussagen: [
      { text: "Das Kontrastprinzip beschreibt, dass Objekte in Abhängigkeit von einem Vergleichsstandard bewertet und Ereignisse kontextabhängig beurteilt werden.", istRichtig: true },
      { text: "Ein mittelmäßiges Produkt wirkt weniger attraktiv, wenn es nur im Vergleich mit schlechteren Produkten präsentiert wird.", istRichtig: false },
      { text: "Kund:innen durchschauen dieses Vorgehen in der Regel und nehmen die Beratung als unfair wahr.", istRichtig: false },
      { text: "Das Kontrastprinzip beruht wie das Door-in-the-face-Prinzip auf der Reziprozitätsnorm.", istRichtig: false },
    ],
    erklaerung: "a) richtig – das ist die Definition; entscheidend ist, ==was als Vergleichsgrundlage== gewählt wird.\nb) falsch – genau umgekehrt: ein mittelmäßiges Produkt erscheint ==schnell attraktiv==, wenn es nur neben schlechteren Produkten präsentiert wird.\nc) falsch – fälschlicherweise nehmen Kund:innen den Prozess tendenziell als ==sehr fair== wahr, weil ihnen die Wahl gelassen wurde und sie sich umfassend beraten fühlen.\nd) falsch – das Kontrastprinzip beruht auf dem ==Vergleichsstandard==, nicht auf Gegenseitigkeit; die ==Reziprozitätsnorm== ist die Grundlage von Door-in-the-face.",
    merksatz: "==Im Vergleich zu ...==: Der Vergleichsanker macht Mittelmaß attraktiv – und fühlt sich für die Kundschaft auch noch fair an.",
    beleg: "Kap. 7.3.5, S. 213",
  },
  {
    id: "N67-11", teil: "A", kapitel: 7, thema: "Beeinflussung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zu ==Commitment== und dem ==Streben nach Konsistenz== sind korrekt?",
    aussagen: [
      { text: "Unter Commitment versteht man das Engagement beziehungsweise die Verpflichtung zu einer Sache.", istRichtig: true },
      { text: "Essenziell für die Entstehung von Commitment ist das menschliche Streben nach Konsistenz.", istRichtig: true },
      { text: "Commitment wird besonders verhaltenswirksam, wenn es aktiv und öffentlich geäußert, mit Anstrengung verbunden und freiwillig eingegangen wird.", istRichtig: true },
      { text: "Das Foot-in-the-door-Prinzip beruht auf Reziprozität und nicht auf Commitment.", istRichtig: false },
    ],
    erklaerung: "a) richtig – so definiert das Skript ==Commitment==.\nb) richtig – Menschen wollen in Aussagen und Handlungen ==konsistent== sein und auch so wahrgenommen werden. Eine nur gedachte Meinung lässt sich leicht ändern, eine ==geäußerte== bindet.\nc) richtig – genau diese vier Bedingungen nennt das Skript.\nd) falsch – ==Door-in-the-face== beruht auf Reziprozität, ==Foot-in-the-door== dagegen auf ==selbstbildkonsistentem Commitment==. Deshalb wirkt Foot-in-the-door auch dann, wenn kleine und große Bitte von ==verschiedenen Personen== kommen, solange sie dasselbe Thema betreffen.",
    merksatz: "==Wer A sagt, muss auch B sagen==: öffentlich geäußertes Commitment bindet ans eigene Selbstbild – der Motor von Foot-in-the-door.",
    beleg: "Kap. 7.3.5, S. 214–215",
  },
  {
    id: "N67-12", teil: "A", kapitel: 7, thema: "Zwei-Prozess-Modelle", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Elaboration-Likelihood-Modell (ELM)== sind korrekt?",
    aussagen: [
      { text: "Das ELM stammt von Petty und Cacioppo (1986) und beschreibt Denkprozesse im Kontext von Einstellungsänderung (Persuasion).", istRichtig: true },
      { text: "Verfügt eine Person über genügend Motivation und Zeit, steigt die Wahrscheinlichkeit, die zentrale Route zu wählen und die Botschaft kritisch und systematisch zu verarbeiten.", istRichtig: true },
      { text: "Die periphere Route ist durch eine besonders sorgfältige, systematische Prüfung der Argumente gekennzeichnet.", istRichtig: false },
      { text: "Zentrale und periphere Route sind zwei voneinander getrennte Systeme, die gleichzeitig arbeiten.", istRichtig: false },
    ],
    erklaerung: "a) richtig – ==Persuasion== meint die Überzeugung, die zu einer Änderung der aktuellen Einstellung führen soll.\nb) richtig – wer ==gewillt und in der Lage== ist, verarbeitet ==systematisch==: das ist die zentrale Route.\nc) falsch – auf der ==peripheren Route== wird ==unsystematisch heuristisch== verarbeitet, mit einfachen Entscheidungsregeln (==Urteilsheuristiken==) und affektiven Prozessen.\nd) falsch – die beiden Routen sind die ==entgegengesetzten Endpunkte eines Kontinuums== der Elaborationswahrscheinlichkeit. Von zwei ==interagierenden Systemen== spricht dagegen das RIM.",
    merksatz: "==ELM = zwei Routen auf einem Kontinuum==, ==RIM = zwei interagierende Systeme== – die klassische Verwechslungsfalle.",
    beleg: "Kap. 7.2.3, S. 198–199",
  },
  {
    id: "N67-13", teil: "A", kapitel: 7, thema: "Zwei-Prozess-Modelle", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==Elaborationswahrscheinlichkeit== und zur Zuordnung der Alltagsbeispiele sind korrekt?",
    aussagen: [
      { text: "Die Elaborationswahrscheinlichkeit ist die Wahrscheinlichkeit, dass eine Person die Argumente einer erhaltenen Botschaft kritisch überprüft.", istRichtig: true },
      { text: "Sie hängt von der Verarbeitungsmotivation, der Verarbeitungskapazität (dem Vorwissen) und der verfügbaren Zeit ab.", istRichtig: true },
      { text: "Wer sich nach einem langen, anstrengenden Arbeitstag von einer als besonders attraktiv und freundlich erlebten Person zum Vereinsbeitritt überreden lässt, verarbeitet auf der zentralen Route.", istRichtig: false },
      { text: "Wer ohne Vorwissen nach dem Grundsatz entscheidet, dass man sich auf Expert:innen verlassen kann, verarbeitet auf der zentralen Route.", istRichtig: false },
    ],
    erklaerung: "a) richtig – so definiert Infobox 7.1 den Begriff.\nb) richtig – die drei Bestimmungsstücke sind ==Motivation==, ==Kapazität/Vorwissen== und ==Zeit==.\nc) falsch – hier wirken ==oberflächliche Eigenschaften== (Attraktivität, Lächeln, Art zu sprechen) statt der Argumente: ==periphere Route==.\nd) falsch – ohne Vorwissen wird auf Basis vorhandener ==Schemata== über Expert:innenwissen entschieden: ebenfalls ==periphere Route==. Zentral wäre das Beispiel mit dem Vormittag im Elektrofachmarkt: hohe persönliche Relevanz, Vorwissen, kein Zeitdruck.",
    merksatz: "Zentrale Route braucht ==Motivation + Kapazität + Zeit==; fehlt eines davon, entscheidet die ==Hülle statt des Inhalts==.",
    beleg: "Kap. 7.2.3, S. 198–199 und S. 202",
  },
  {
    id: "N67-14", teil: "A", kapitel: 7, thema: "Zwei-Prozess-Modelle", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zum ==Reflektiv-Impulsiv-Modell (RIM)== sind korrekt?",
    aussagen: [
      { text: "Das RIM stammt von Strack und Deutsch (2004) und zielt auf die Erklärung von Verhalten ab.", istRichtig: true },
      { text: "Das reflektive System greift als Kontrollmechanismus vor allem auf Inhalte des Langzeitgedächtnisses zurück und läuft nur sequenziell ab.", istRichtig: true },
      { text: "Die Prozesse innerhalb des impulsiven Systems sind schnell, effizient und können auch parallel ablaufen.", istRichtig: true },
      { text: "Das RIM geht wie das ELM von zwei einander ausschließenden Routen aus.", istRichtig: false },
    ],
    erklaerung: "a) richtig – während das ELM die ==Einstellungsänderung== beschreibt, zielt das RIM auf ==Verhalten==.\nb) richtig – das reflektive System entscheidet auf Basis von ==Fakten, möglichen Konsequenzen und Werten==, braucht Zeit und Kapazität und arbeitet daher ==nacheinander==.\nc) richtig – das impulsive System beruht überwiegend auf ==assoziativen Verbindungen== (z. B. Verhaltensschemata) und erfordert kaum Motivation oder Kapazität.\nd) falsch – das RIM geht ausdrücklich von zwei ==interagierenden Systemen== aus, nicht von zwei Routen.",
    merksatz: "==Reflektiv== = langsam, sequenziell, Langzeitgedächtnis. ==Impulsiv== = schnell, parallel, assoziativ.",
    beleg: "Kap. 7.2.3, S. 200",
  },
  {
    id: "N67-15", teil: "A", kapitel: 7, thema: "Zwei-Prozess-Modelle", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zum ==Zusammenspiel der beiden RIM-Systeme== und zur Studie von Hofmann, Rauch und Gawronski (2007) sind korrekt?",
    aussagen: [
      { text: "Die beiden Systeme können entweder synergistisch, also in die gleiche Richtung, oder antagonistisch, also in entgegengesetzte Richtung, arbeiten.", istRichtig: true },
      { text: "Die Experimentalgruppe sollte beim Ansehen eines Kurzfilms jegliche Emotionen unterdrücken, was ihre Selbstregulationsfähigkeit beanspruchte und die kognitiven Ressourcen reduzierte.", istRichtig: true },
      { text: "In der Kontrollgruppe mit hohen kognitiven Ressourcen wurden umso mehr Schokolinsen gegessen, je höher das angegebene Diätstreben war.", istRichtig: false },
      { text: "Das Fazit der Studie lautete, dass bei unzureichender kognitiver Kapazität das reflektive System handlungsleitend ist.", istRichtig: false },
    ],
    erklaerung: "a) richtig – beim Tortenbeispiel liefern beide Systeme entweder ein ==gemeinsames== Ergebnis (annehmen, aber nur ein kleines Stück) oder sie ziehen ==gegeneinander== (annehmen vs. ablehnen).\nb) richtig – die ==Emotionsunterdrückung== war die experimentelle Belastung der Selbstregulation.\nc) falsch – genau umgekehrt: in der Kontrollgruppe wurden ==umso weniger== Schokolinsen gegessen, je höher das Diätstreben war; hier dominierte das ==reflektive== System.\nd) falsch – das Fazit war, dass bei unzureichender Kapazität das ==impulsive== System handlungsleitend ist: je positiver die Einstellung gegenüber Schokolinsen, desto mehr wurde konsumiert.",
    merksatz: "Wenig Kopf-Kapazität, viel Bauch: bei ==erschöpften Ressourcen== übernimmt das ==impulsive System==.",
    beleg: "Kap. 7.2.3, S. 201",
  },
  {
    id: "N67-16", teil: "A", kapitel: 7, thema: "Stereotype", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==selbsterfüllenden Prophezeiung== im Zusammenhang mit Stereotypen sind korrekt?",
    aussagen: [
      { text: "Selbsterfüllende Prophezeiungen sind sich selbstverstärkende Schleifen; die alleinige Existenz eines Stereotyps kann zu seiner Bewahrheitung führen.", istRichtig: true },
      { text: "Beispiel: Das Stereotyp, Mädchen seien weniger mathematisch begabt, führt zu geringerer Förderung durch Lehrpersonen, wodurch tatsächlich geringere Fähigkeiten ausgebildet werden und das Stereotyp bestätigt erscheint.", istRichtig: true },
      { text: "Studien im Bildungskontext (Madon, Jussim & Eccles, 1997) zeigen, dass sich Erwartungshaltungen von Lehrpersonen besonders auf die Leistung schwacher Schüler:innen auswirken.", istRichtig: true },
      { text: "Stereotype stellen die affektive Komponente der Voreingenommenheit dar.", istRichtig: false },
    ],
    erklaerung: "a) richtig – Banks (1988) zeigte, dass die bloße Existenz eines Stereotyps zu dessen ==Bewahrheitung== führen kann.\nb) richtig – das ist das Beispiel aus dem Skript: die ==Benachteiligung== erzeugt genau den Zustand, den das Stereotyp behauptet hat.\nc) richtig – der Effekt trifft vor allem ==leistungsschwache== Schüler:innen.\nd) falsch – Stereotype sind die ==kognitive== Komponente (Überzeugungen darüber, wie Gruppen sind). Die ==affektive== Komponente ist das ==Vorurteil==, die ==Verhaltenskomponente== ist die ==Diskriminierung==.",
    merksatz: "==Stereotyp = Kopf, Vorurteil = Bauch, Diskriminierung = Hand== – und die selbsterfüllende Prophezeiung schließt den Kreis.",
    beleg: "Kap. 7.4.3, S. 227–228",
  },
];
