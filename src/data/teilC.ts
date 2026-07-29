import type { Frage, Lesetext } from "../types";

// ============================================================
//  PRUEFUNGSTEIL C — Englisches Textleseverstaendnis (25 % des Tests)
//  Format: englischer Fachtext, Fragen auf DEUTSCH, 4 Aussagen.
//  Texte eigens verfasst (Stil: Monitor on Psychology), inhaltlich
//  an gesicherter Fachliteratur orientiert.
//  HINWEIS: In Strings bewusst KEINE deutschen Anfuehrungszeichen.
// ============================================================

export const lesetexte: Lesetext[] = [
  {
    id: "C1",
    titel: "Why sleep is the brain's memory workshop",
    quelle: "Übungstext im Stil eines Fachartikels (Monitor on Psychology)",
    glossar: [
      { begriff: "consolidation", erklaerung: "Konsolidierung — Festigung einer Gedächtnisspur" },
      { begriff: "slow-wave sleep", erklaerung: "Tiefschlaf mit langsamen Hirnwellen" },
      { begriff: "hippocampus", erklaerung: "Hirnstruktur, zentral für neues episodisches Lernen" },
      { begriff: "retention", erklaerung: "Behaltensleistung" },
      { begriff: "cue", erklaerung: "Hinweisreiz" },
      { begriff: "interference", erklaerung: "Störung durch konkurrierende Gedächtnisinhalte" },
    ],
    absaetze: [
      "For a long time, sleep was regarded as a passive state in which the brain simply shut down to save energy. Research over the past three decades has overturned this view. Far from being idle, the sleeping brain replays and reorganises what was learned during the day. Psychologists now describe sleep as an active workshop in which fragile new memories are strengthened and integrated into existing knowledge.",
      "The key process is called memory consolidation. When we learn something new, the information is first stored in a fragile form that depends heavily on the hippocampus. During sleep — particularly during deep slow-wave sleep — patterns of neural activity recorded during learning are spontaneously replayed. This replay is thought to gradually transfer the memory into the cortex, where it becomes more stable and less vulnerable to interference.",
      "Experimental evidence supports this account. In a classic type of study, participants learn a list of word pairs and are then tested either after a period of sleep or after an equally long period of daytime wakefulness. Retention is typically better in the sleep condition. Importantly, the advantage cannot be explained simply by the passage of time, because both groups wait the same number of hours before being tested.",
      "Researchers have also shown that consolidation can be influenced from the outside. In targeted memory reactivation studies, a sound or a smell is presented while participants learn a set of items. The same cue is then played quietly during subsequent slow-wave sleep. Items associated with the cue are remembered better than items that were not cued, even though participants report no awareness of having heard anything during the night.",
      "Not all memories benefit equally. Sleep appears to favour information that the learner expects to need again. When participants are told before sleeping that they will be tested the following day, the sleep benefit is larger than when they believe the material is no longer relevant. This suggests that consolidation is selective rather than indiscriminate, and that it interacts with motivation and expectation.",
      "These findings have practical implications for students. Cramming through the night before an examination sacrifices exactly the process that would stabilise the newly learned material. Distributing study across several days, with normal sleep between sessions, allows repeated cycles of consolidation. Sleep, in other words, is not lost study time — it is part of the studying.",
    ],
  },
  {
    id: "C2",
    titel: "Under pressure: what stress does to body and mind",
    quelle: "Übungstext im Stil eines Fachartikels (Monitor on Psychology)",
    glossar: [
      { begriff: "appraisal", erklaerung: "Bewertung — wie eine Situation eingeschätzt wird" },
      { begriff: "fight-or-flight response", erklaerung: "Kampf-oder-Flucht-Reaktion des Körpers" },
      { begriff: "cortisol", erklaerung: "Stresshormon, das Energiereserven mobilisiert" },
      { begriff: "allostatic load", erklaerung: "allostatische Last — Abnutzung durch dauerndes Anpassen" },
      { begriff: "coping", erklaerung: "Bewältigung — der Umgang mit einer Belastung" },
      { begriff: "buffering hypothesis", erklaerung: "Pufferhypothese — Unterstützung dämpft die Wirkung von Belastung" },
    ],
    absaetze: [
      "In everyday language, stress is something that happens to us: a deadline, an examination, a difficult conversation. Psychologists use the word more precisely. Stress is not the event itself but the relationship between a demand and the resources a person believes they have to meet it. The transactional model captures this idea in two steps. In primary appraisal, the person asks whether a situation is threatening, challenging or irrelevant. In secondary appraisal, they ask whether they can cope with it. The same examination may therefore be a manageable challenge for one student and an overwhelming threat for another, without any difference in the objective demand.",
      "When a situation is appraised as threatening, the body reacts within seconds. The sympathetic branch of the nervous system triggers the release of adrenaline: the heart beats faster, breathing deepens, blood is directed towards the muscles, and attention narrows to the source of danger. This pattern is often called the fight-or-flight response. A slower hormonal pathway, the hypothalamic-pituitary-adrenal axis, follows within minutes and leads to the release of cortisol, which mobilises energy reserves. Neither reaction is a malfunction. Both prepare the organism for short-term action, and both are meant to switch off again once the demand has passed.",
      "Problems arise when the switch is never fully thrown. Modern demands — job insecurity, caregiving, lasting conflict at home — usually cannot be solved by running or fighting, and they may continue for months. Researchers describe the cumulative wear that results as allostatic load: the price the body pays for adapting over and over again. Chronic activation is associated with disturbed sleep, elevated blood pressure and a less effective immune response. Wounds tend to heal more slowly, and people under long-term strain report more frequent infections. These are statistical associations across groups, however, not a guarantee that any individual will fall ill.",
      "How people respond matters as much as what they face. Coping is usually divided into two broad strategies. Problem-focused coping targets the situation itself: making a plan, gathering information, asking for a deadline to be moved. Emotion-focused coping targets the reaction: reframing the event, seeking comfort, accepting what cannot be changed. Neither is superior in general. The decisive factor appears to be the fit between strategy and situation. When a stressor is controllable, problem-focused efforts tend to be more useful; when it is genuinely uncontrollable, insisting on control can prolong distress, and emotion-focused strategies become more adaptive. Most people use both kinds of strategy, often within the same day and sometimes within the same hour.",
      "Social relationships belong to the most consistently documented protective factors. According to the buffering hypothesis, support does not simply raise well-being across the board; it weakens the link between high stress and poor health, so its effect is largest precisely when demands are high. Interestingly, what people believe about the support available to them often predicts outcomes better than a count of how many people are actually around them. A large network that feels unhelpful offers little protection, whereas a single reliable confidant can matter a great deal. Support itself takes several forms: practical assistance, useful information, and the plain experience of being taken seriously.",
      "Two features of a situation reliably reduce the strength of the stress reaction: predictability and control. Knowing when an unpleasant event will occur, and having some influence over it, lowers the response even when the event itself remains unchanged. This principle underlies many practical measures — giving employees a say in their schedules, telling patients what a procedure will involve, breaking a large task into steps that can actually be finished. Regular physical activity, sufficient sleep and relaxation techniques are recommended as well. None of this removes the demands of life, and stress research does not promise a stress-free existence. Its more modest message is that appraisal, coping and support are the parts of the process that can be changed.",
    ],
  },
];

export const fragenTeilC: Frage[] = [
  {
    id: "C1-1", teil: "C", textId: "C1", thema: "Hauptaussage", quelle: "generiert", schwierigkeit: 1,
    stem: "Welche Aussagen geben die ==Kernaussage== des Textes korrekt wieder?",
    aussagen: [
      { text: "Schlaf gilt heute als aktiver Prozess, in dem Gedächtnisinhalte gefestigt werden.", istRichtig: true },
      { text: "Die frühere Sicht, Schlaf sei ein rein passiver Zustand, wurde durch die Forschung widerlegt.", istRichtig: true },
      { text: "Der Text argumentiert, dass Schlaf für das Lernen kaum eine Rolle spielt.", istRichtig: false },
      { text: "Im Schlaf wird am Tag Gelerntes wiederholt und in vorhandenes Wissen eingebaut.", istRichtig: true },
    ],
    erklaerung:
      "Absatz 1: Schlaf galt lange als ==passive state==, diese Sicht wurde laut Text widerlegt (overturned) — a und b richtig. Das schlafende Gehirn ==replays and reorganises== das am Tag Gelernte und integriert es in bestehendes Wissen — d richtig. Die Aussage, Schlaf spiele kaum eine Rolle, ist das ==Gegenteil== der Textaussage — c falsch.",
    merksatz: "Kernbotschaft: Schlaf ist keine Pause vom Lernen, sondern ein ==aktiver Teil== davon.",
  },
  {
    id: "C1-2", teil: "C", textId: "C1", thema: "Konsolidierung", quelle: "generiert", schwierigkeit: 2,
    stem: "Was sagt der Text über die ==Gedächtniskonsolidierung== (memory consolidation)?",
    aussagen: [
      { text: "Neu Gelerntes ist zunächst in einer fragilen Form gespeichert.", istRichtig: true },
      { text: "Diese frühe Speicherung hängt stark vom Hippocampus ab.", istRichtig: true },
      { text: "Die Konsolidierung findet laut Text vor allem im Wachzustand statt.", istRichtig: false },
      { text: "Durch die Verlagerung in den Cortex wird die Erinnerung stabiler.", istRichtig: true },
    ],
    erklaerung:
      "Absatz 2: Information wird zuerst in einer ==fragile form== gespeichert und hängt vom ==hippocampus== ab (a, b richtig). Die Verlagerung in den ==cortex== macht sie stabiler und weniger störanfällig (d richtig). Die Konsolidierung geschieht laut Text ==während des Schlafs==, besonders im Tiefschlaf — nicht im Wachzustand (c falsch).",
    merksatz: "Weg der Erinnerung: fragil im ==Hippocampus== → im Schlaf wiederholt → stabil im ==Cortex==.",
  },
  {
    id: "C1-3", teil: "C", textId: "C1", thema: "Studiendesign", quelle: "generiert", schwierigkeit: 3,
    stem: "Was lässt sich über die im dritten Absatz beschriebene ==Studienanordnung== sagen?",
    aussagen: [
      { text: "Die Teilnehmenden lernen eine Liste von Wortpaaren.", istRichtig: true },
      { text: "Eine Gruppe wird nach einer Schlafphase getestet, die andere nach gleich langer Wachzeit.", istRichtig: true },
      { text: "Die Behaltensleistung ist üblicherweise in der Schlafbedingung besser.", istRichtig: true },
      { text: "Der Unterschied lässt sich dadurch erklären, dass die Schlafgruppe länger wartet.", istRichtig: false },
    ],
    erklaerung:
      "Absatz 3 nennt eine Liste von ==word pairs== (a richtig) und den Vergleich Schlaf gegen gleich lange Wachzeit (b richtig); die ==retention== ist in der Schlafbedingung typischerweise besser (c richtig). Der Text betont ausdrücklich, dass beide Gruppen ==gleich lange== warten — die Zeit kann den Unterschied also NICHT erklären (d falsch).",
    merksatz: "Beide Gruppen warten ==gleich lang== — deshalb liegt der Vorteil am ==Schlaf==, nicht an der Zeit.",
  },
  {
    id: "C1-4", teil: "C", textId: "C1", thema: "Gezielte Reaktivierung", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen zur ==targeted memory reactivation== treffen laut Text zu?",
    aussagen: [
      { text: "Während des Lernens wird ein Geräusch oder ein Geruch dargeboten.", istRichtig: true },
      { text: "Derselbe Hinweisreiz wird später leise im Tiefschlaf abgespielt.", istRichtig: true },
      { text: "Die Teilnehmenden berichten, den Reiz in der Nacht bewusst gehört zu haben.", istRichtig: false },
      { text: "Mit dem Reiz verknüpfte Inhalte werden besser erinnert als nicht verknüpfte.", istRichtig: true },
    ],
    erklaerung:
      "Absatz 4: Ein ==cue== (Ton oder Geruch) begleitet das Lernen (a) und wird im ==slow-wave sleep== leise wiederholt (b); die damit verknüpften Items werden besser behalten (d). Ausdrücklich heißt es, die Teilnehmenden berichten ==no awareness== — sie bemerken den Reiz also nicht bewusst (c falsch).",
    merksatz: "Hinweisreiz im Schlaf wirkt — und zwar ==ohne bewusstes Wahrnehmen==.",
  },
  {
    id: "C1-5", teil: "C", textId: "C1", thema: "Selektivität", quelle: "generiert", schwierigkeit: 2,
    stem: "Was sagt der Text darüber, ==welche Inhalte== vom Schlaf besonders profitieren?",
    aussagen: [
      { text: "Alle Gedächtnisinhalte profitieren gleichermaßen vom Schlaf.", istRichtig: false },
      { text: "Bevorzugt werden Inhalte, die man voraussichtlich wieder brauchen wird.", istRichtig: true },
      { text: "Die Ankündigung eines Tests am Folgetag verstärkt den Schlafeffekt.", istRichtig: true },
      { text: "Konsolidierung steht laut Text in Wechselwirkung mit Motivation und Erwartung.", istRichtig: true },
    ],
    erklaerung:
      "Absatz 5 beginnt mit dem Satz, dass ==nicht alle== Erinnerungen gleichermaßen profitieren — a ist damit klar falsch. Bevorzugt wird, was man wieder braucht (b), die Testankündigung vergrößert den Effekt (c), und die Konsolidierung ist ==selective== und steht in Wechselwirkung mit Motivation und Erwartung (d).",
    merksatz: "Konsolidierung ist ==selektiv==: Was als wichtig gilt, wird bevorzugt gefestigt.",
  },
  {
    id: "C1-6", teil: "C", textId: "C1", thema: "Schlussfolgerung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche ==praktischen Schlussfolgerungen== zieht der Text für Lernende?",
    aussagen: [
      { text: "Durchlernen in der Nacht vor der Prüfung opfert genau den festigenden Prozess.", istRichtig: true },
      { text: "Auf mehrere Tage verteiltes Lernen erlaubt wiederholte Konsolidierungszyklen.", istRichtig: true },
      { text: "Schlaf sollte als verlorene Lernzeit betrachtet werden.", istRichtig: false },
      { text: "Der Text bezeichnet Schlaf als Teil des Lernens.", istRichtig: true },
    ],
    erklaerung:
      "Absatz 6: ==Cramming== in der Nacht davor opfert die Konsolidierung (a); verteiltes Lernen mit Schlaf dazwischen erlaubt mehrere Zyklen (b). Der Schlusssatz sagt ausdrücklich, Schlaf sei ==not lost study time==, sondern Teil des Lernens — d richtig, c ist das Gegenteil.",
    merksatz: "Schlaf ist ==keine verlorene Lernzeit==, sondern Teil des Lernens — verteilt lernen schlägt Nachtschicht.",
  },
  {
    id: "C1-7", teil: "C", textId: "C1", thema: "Wortverständnis", quelle: "generiert", schwierigkeit: 2,
    stem: "Der Text nennt Erinnerungen nach der Konsolidierung ==less vulnerable to interference==. Was ist damit gemeint?",
    aussagen: [
      { text: "Sie sind weniger anfällig dafür, durch andere Inhalte gestört zu werden.", istRichtig: true },
      { text: "Sie lassen sich nicht mehr abrufen.", istRichtig: false },
      { text: "Sie sind widerstandsfähiger geworden.", istRichtig: true },
      { text: "Sie sind vollständig gegen jedes Vergessen geschützt.", istRichtig: false },
    ],
    erklaerung:
      "==vulnerable== heißt anfällig oder verletzlich, ==interference== ist die Störung durch andere Gedächtnisinhalte. ==less vulnerable== bedeutet also: weniger störanfällig, widerstandsfähiger (a, c richtig). Es heißt weder, dass ein Abruf unmöglich wird (b), noch dass ==vollständiger== Schutz besteht — 'less' ist ein Vergleich, kein Absolutwert (d falsch).",
    merksatz: "==less vulnerable== = weniger anfällig — ein ==Vergleich==, keine völlige Sicherheit.",
  },
  {
    id: "C1-8", teil: "C", textId: "C1", thema: "Kritisches Lesen", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen lassen sich aus dem Text ==NICHT== ableiten (gehen also über ihn hinaus)?",
    aussagen: [
      { text: "Schlaf spielt bei der Festigung von Gedächtnisinhalten eine Rolle.", istRichtig: false },
      { text: "Je länger jemand schläft, desto besser sind die Prüfungsnoten.", istRichtig: true },
      { text: "Tiefschlaf wird mit dem Wiederabspielen neuronaler Muster in Verbindung gebracht.", istRichtig: false },
      { text: "Geräusche im Schlaf können jeden beliebigen Lerninhalt zuverlässig verankern.", istRichtig: true },
    ],
    erklaerung:
      "Gefragt ist, was NICHT im Text steht. a und c stehen ausdrücklich drin — sie sind ableitbar und daher hier als falsch zu markieren. Eine ==Je-länger-desto-besser==-Beziehung zu Noten wird nirgends behauptet (b geht darüber hinaus). Ebenso wenig, dass Hinweisreize ==jeden beliebigen== Inhalt zuverlässig verankern — der Text sagt nur, dass gecuete Items besser erinnert werden (d geht darüber hinaus).",
    merksatz: "Vorsicht bei ==Übertreibungen== (jeder, immer, je mehr desto) — die stehen selten so im Text.",
  },

  // ---------------- Text C2: Stress und Gesundheit ----------------
  {
    id: "C2-1", teil: "C", textId: "C2", thema: "Hauptaussage", quelle: "generiert", schwierigkeit: 1,
    stem: "Welche Aussagen geben die ==Kernaussage== des Textes korrekt wieder?",
    aussagen: [
      { text: "Stress entsteht laut Text aus dem Verhältnis von Anforderung und den Ressourcen, die eine Person bei sich sieht.", istRichtig: true },
      { text: "Die kurzfristige Stressreaktion ist sinnvoll, die dauerhafte Aktivierung dagegen belastend.", istRichtig: true },
      { text: "Der Text beschreibt Stress ausschließlich als körperlichen Vorgang ohne psychische Anteile.", istRichtig: false },
      { text: "Bewertung, Bewältigung und soziale Unterstützung beeinflussen, wie sich eine Belastung auswirkt.", istRichtig: true },
    ],
    erklaerung:
      "Absatz 1 definiert Stress als ==relationship between a demand and the resources== einer Person — a richtig. Absatz 2 nennt die akute Reaktion ausdrücklich ==no malfunction==, Absatz 3 beschreibt die Kosten der Dauer-Aktivierung (==allostatic load==) — b richtig. Der Schlusssatz von Absatz 6 nennt ==appraisal, coping and support== als veränderbare Teile des Prozesses — d richtig. Rein körperlich ist der Text gerade nicht, er beginnt mit der ==Bewertung== — c falsch.",
    merksatz: "Nicht das Ereignis macht den Stress, sondern die ==Bewertung== plus das, was man an ==Ressourcen== zu haben glaubt.",
  },
  {
    id: "C2-2", teil: "C", textId: "C2", thema: "Bewertung", quelle: "generiert", schwierigkeit: 2,
    stem: "Was sagt der Text über die ==Bewertung== (appraisal) einer Situation?",
    aussagen: [
      { text: "In der primären Bewertung wird geprüft, ob eine Situation bedrohlich, herausfordernd oder irrelevant ist.", istRichtig: true },
      { text: "In der sekundären Bewertung geht es um die Frage, ob man mit der Situation zurechtkommt.", istRichtig: true },
      { text: "Dieselbe Prüfung löst laut Text bei allen Studierenden dieselbe Reaktion aus.", istRichtig: false },
      { text: "Ob etwas als Herausforderung oder als Bedrohung erlebt wird, kann sich unterscheiden, ohne dass die objektive Anforderung anders ist.", istRichtig: true },
    ],
    erklaerung:
      "Absatz 1 beschreibt das ==transactional model== in zwei Schritten: ==primary appraisal== (bedrohlich, herausfordernd oder irrelevant) und ==secondary appraisal== (kann ich das bewältigen) — a und b richtig. Ausdrücklich heißt es, dieselbe Prüfung könne für eine Person eine machbare Herausforderung, für eine andere eine Bedrohung sein — ==without any difference in the objective demand==: d richtig, c ist das Gegenteil und damit falsch.",
    merksatz: "Zwei Fragen: ==Ist das gefährlich?== (primär) und ==Schaffe ich das?== (sekundär).",
  },
  {
    id: "C2-3", teil: "C", textId: "C2", thema: "Akute Stressreaktion", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen zur ==akuten Stressreaktion== treffen laut Text zu?",
    aussagen: [
      { text: "Der sympathische Teil des Nervensystems löst die Ausschüttung von Adrenalin aus.", istRichtig: true },
      { text: "Der Text bezeichnet die akute Stressreaktion als Fehlfunktion des Körpers.", istRichtig: false },
      { text: "Die langsamere Hormonachse führt innerhalb von Minuten zur Ausschüttung von Cortisol.", istRichtig: true },
      { text: "Die Aufmerksamkeit weitet sich dabei auf die gesamte Umgebung aus.", istRichtig: false },
    ],
    erklaerung:
      "Absatz 2: Der ==sympathetic branch== schüttet Adrenalin aus (a richtig), die langsamere ==hypothalamic-pituitary-adrenal axis== folgt in Minuten und setzt ==cortisol== frei (c richtig). Der Text sagt ausdrücklich ==Neither reaction is a malfunction== — b falsch. Und die Aufmerksamkeit ==narrows to the source of danger==, sie verengt sich also, statt sich zu weiten — d falsch.",
    merksatz: "Zwei Tempi: ==Adrenalin in Sekunden==, ==Cortisol in Minuten== — beides ist normal, nicht defekt.",
  },
  {
    id: "C2-4", teil: "C", textId: "C2", thema: "Chronischer Stress", quelle: "generiert", schwierigkeit: 3,
    stem: "Was lässt sich dem Text über ==chronischen Stress== entnehmen?",
    aussagen: [
      { text: "Als allostatic load bezeichnet der Text die aufsummierte Abnutzung durch immer neues Anpassen.", istRichtig: true },
      { text: "Dauerhafte Aktivierung wird mit gestörtem Schlaf, erhöhtem Blutdruck und schwächerer Immunabwehr in Verbindung gebracht.", istRichtig: true },
      { text: "Der Text garantiert, dass Menschen unter Dauerbelastung erkranken.", istRichtig: false },
      { text: "Moderne Belastungen lassen sich laut Text meist durch Kämpfen oder Fliehen lösen.", istRichtig: false },
    ],
    erklaerung:
      "Absatz 3 definiert ==allostatic load== als den Preis fürs wiederholte Anpassen (a) und nennt Schlafstörungen, erhöhten Blutdruck und schwächere Immunantwort (b). Er schränkt aber ein: es handle sich um ==statistical associations across groups==, ==not a guarantee== für die einzelne Person — c falsch. Und moderne Belastungen können gerade ==nicht== durch Kämpfen oder Fliehen gelöst werden — d falsch.",
    merksatz: "==Zusammenhang in Gruppen== ist nicht ==Schicksal im Einzelfall== — auf solche Einschränkungen im Text achten.",
  },
  {
    id: "C2-5", teil: "C", textId: "C2", thema: "Bewältigung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche Aussagen über die beiden ==Bewältigungsstrategien== (coping) sind laut Text richtig?",
    aussagen: [
      { text: "Problemorientiertes Coping richtet sich auf die Situation selbst, etwa durch Planen oder Informationssuche.", istRichtig: true },
      { text: "Emotionsorientiertes Coping richtet sich auf die eigene Reaktion, etwa durch Umdeuten oder Trost suchen.", istRichtig: true },
      { text: "Problemorientiertes Coping ist laut Text ganz allgemein die bessere Strategie.", istRichtig: false },
      { text: "Bei wirklich unkontrollierbaren Belastungen kann das Beharren auf Kontrolle das Leiden verlängern.", istRichtig: true },
    ],
    erklaerung:
      "Absatz 4 beschreibt ==problem-focused coping== als Ansatz an der Situation (a) und ==emotion-focused coping== als Ansatz an der eigenen Reaktion (b). Ausdrücklich heißt es ==Neither is superior in general== — entscheidend ist der ==fit== zwischen Strategie und Lage: c falsch. Bei Unkontrollierbarem kann ==insisting on control== das Leiden verlängern — d richtig.",
    merksatz: "Nicht die Strategie an sich zählt, sondern die ==Passung==: kontrollierbar → anpacken, unkontrollierbar → umdeuten.",
  },
  {
    id: "C2-6", teil: "C", textId: "C2", thema: "Soziale Unterstützung", quelle: "generiert", schwierigkeit: 3,
    stem: "Was sagt der Text über ==soziale Unterstützung== und die Pufferhypothese?",
    aussagen: [
      { text: "Ein großes Netzwerk schützt laut Text immer besser als eine einzelne Vertrauensperson.", istRichtig: false },
      { text: "Die Pufferhypothese besagt, dass Unterstützung den Zusammenhang zwischen hoher Belastung und schlechter Gesundheit abschwächt.", istRichtig: true },
      { text: "Was Menschen über die verfügbare Unterstützung glauben, sagt Ergebnisse oft besser vorher als die reine Zahl der Personen um sie herum.", istRichtig: true },
      { text: "Soziale Beziehungen gehören laut Text zu den am schlechtesten belegten Schutzfaktoren.", istRichtig: false },
    ],
    erklaerung:
      "Absatz 5 nennt Beziehungen ==most consistently documented protective factors== — d ist das Gegenteil und falsch. Die ==buffering hypothesis== schwächt den Zusammenhang zwischen hoher Belastung und schlechter Gesundheit ab, wirkt also besonders bei hoher Belastung — b richtig. Die ==wahrgenommene== Unterstützung sagt oft mehr voraus als die Anzahl der Kontakte (c). Und ein großes, aber nicht hilfreiches Netz bietet laut Text ==little protection==, während eine einzelne verlässliche Person viel bewirken kann — a falsch.",
    merksatz: "Der Puffer wirkt dort, wo es ==drückt== — und ==gefühlte== Unterstützung schlägt die bloße Anzahl.",
  },
  {
    id: "C2-7", teil: "C", textId: "C2", thema: "Wortverständnis", quelle: "generiert", schwierigkeit: 3,
    stem: "Absatz 3 beginnt mit ==Problems arise when the switch is never fully thrown==. Was ist damit gemeint?",
    aussagen: [
      { text: "Die Stressreaktion wird nie ganz abgeschaltet.", istRichtig: true },
      { text: "Der Körper kehrt zu schnell in den Ruhezustand zurück.", istRichtig: false },
      { text: "Gemeint ist die dauerhafte Aktivierung, die im weiteren Absatz beschrieben wird.", istRichtig: true },
      { text: "Es geht wörtlich um einen defekten Lichtschalter.", istRichtig: false },
    ],
    erklaerung:
      "==to throw a switch== heißt einen Schalter umlegen; die Wendung ist ein ==Bild==, kein wörtlicher Schalter — d falsch. Sie knüpft an den letzten Satz von Absatz 2 an (beide Reaktionen sollen wieder ==switch off==) und leitet die ==chronic activation== ein — a und c richtig. Ein zu schnelles Zurückkehren in Ruhe wäre das Gegenteil des beschriebenen Problems — b falsch.",
    merksatz: "Bildhafte Wendungen immer aus dem ==Satz davor und danach== erschließen, nicht wörtlich nehmen.",
  },
  {
    id: "C2-8", teil: "C", textId: "C2", thema: "Schlussfolgerung", quelle: "generiert", schwierigkeit: 2,
    stem: "Welche ==Schlussfolgerungen== erlaubt der letzte Absatz?",
    aussagen: [
      { text: "Vorhersagbarkeit und Kontrolle verringern die Stärke der Stressreaktion.", istRichtig: true },
      { text: "Patienten vorab über den Ablauf eines Eingriffs zu informieren, passt zu diesem Prinzip.", istRichtig: true },
      { text: "Die Reaktion sinkt laut Text nur dann, wenn das belastende Ereignis selbst verändert wird.", istRichtig: false },
      { text: "Eine große Aufgabe in abschließbare Schritte zu zerlegen, entspricht dem Prinzip der Kontrolle.", istRichtig: true },
    ],
    erklaerung:
      "Absatz 6 nennt ==predictability and control== als die beiden Merkmale, die die Reaktion verlässlich senken (a). Als Beispiele stehen dort die Aufklärung von Patienten (b) und das Zerlegen einer großen Aufgabe in ==steps that can actually be finished== (d). Ausdrücklich wirkt das sogar, wenn das Ereignis ==remains unchanged== — c ist damit falsch.",
    merksatz: "==Wissen, was kommt== und ==etwas mitbestimmen können== senken die Reaktion — auch ohne die Belastung selbst zu ändern.",
  },
  {
    id: "C2-9", teil: "C", textId: "C2", thema: "Kritisches Lesen", quelle: "generiert", schwierigkeit: 3,
    stem: "Welche Aussagen lassen sich aus dem Text ==NICHT== ableiten (gehen also über ihn hinaus)?",
    aussagen: [
      { text: "Bewertung, Bewältigung und Unterstützung sind Teile des Prozesses, die sich verändern lassen.", istRichtig: false },
      { text: "Wer die passende Bewältigungsstrategie wählt, bleibt von stressbedingten Beschwerden verschont.", istRichtig: true },
      { text: "Lang andauernde Belastung steht mit gesundheitlichen Beeinträchtigungen in Zusammenhang.", istRichtig: false },
      { text: "Stressforschung kann ein Leben ohne Stress ermöglichen.", istRichtig: true },
    ],
    erklaerung:
      "Gefragt ist, was NICHT im Text steht. a steht wörtlich im Schlusssatz und c in Absatz 3 — beide sind ableitbar und hier als falsch zu markieren. Ein ==Verschont-bleiben== durch die richtige Strategie verspricht der Text nirgends, er spricht nur von besserer ==Passung== — b geht darüber hinaus. Und Absatz 6 sagt ausdrücklich, die Forschung verspreche ==no stress-free existence== — d widerspricht dem Text und ist damit ebenfalls nicht ableitbar.",
    merksatz: "==Absolute Heilsversprechen== (verschont, stressfrei, immer) sind fast nie durch den Text gedeckt.",
  },
];
