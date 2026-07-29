// ============================================================
//  Datenmodell fuer den Psycho-Trainer
// ============================================================

export type Teil = "A" | "B" | "C";

/**
 * Diagramm fuer Teil-B-Aufgaben (Diagrammauswertung).
 * Wird als SVG gerendert — bewusst schlicht, wie im echten Test.
 */
export type Grafik =
  | {
      art: "linien";
      /** Beschriftung der beiden x-Positionen, z. B. ["20 Jahre", "80 Jahre"]. */
      xLabels: [string, string];
      yMax: number;
      yLabel?: string;
      xLabel?: string;
      serien: { name: string; stil: "voll" | "gestrichelt"; werte: [number, number] }[];
    }
  | {
      art: "balken";
      titel: string;
      /** Zeilenbeschriftungen von oben nach unten. */
      kategorien: string[];
      /** Werte koennen negativ sein (Differenz-Diagramme). */
      werte: number[];
      min: number;
      max: number;
    }
  | {
      art: "kurven";
      xLabel?: string;
      yLabel?: string;
      /** Logistische Kurven: Wendepunkt auf der x-Achse (-8..9). */
      kurven: { name: string; wendepunkt: number; stil: "voll" | "punkte" | "gestrichelt" | "strichpunkt" }[];
    };

/** Eine einzelne Aussage innerhalb einer Frage. */
export interface Aussage {
  text: string;
  istRichtig: boolean;
  /** Optionale Grafik zur Antwortoption (Diagrammauswahl in Teil B). */
  grafik?: Grafik;
}

/**
 * Eine Pruefungsfrage im offiziellen Format:
 * GENAU 4 Aussagen, jede einzeln als richtig/falsch zu bewerten.
 * Mindestens eine Aussage ist immer richtig.
 */
export interface Frage {
  id: string;
  teil: Teil;
  /** Nur Teil A: Kapitel 1-8 des Lernskripts. */
  kapitel?: number;
  /** Nur Teil B: Art der Aufgabe (z. B. "Datenauswertung"). */
  aufgabentyp?: string;
  /** Kurzes Themen-Label fuer die Anzeige (z. B. "Entwicklung"). */
  thema?: string;
  /** Der Fragetext. */
  stem: string;
  /** Optionaler Zusatz in Monospace (z. B. eine Datenreihe/Angabe). */
  stemZusatz?: string;
  /** Optionale Tabelle (z. B. Teil B Skalenniveau). */
  tabelle?: { kopf: string[]; zeilen: string[][] };
  /** Optionale Grafik zur Angabe (Teil B: Diagramm auswerten). */
  grafik?: Grafik;
  /** Optionale Bildbeschreibung, wenn die Angabe eine Abbildung enthaelt. */
  angabeHinweis?: string;
  /** GENAU 4 Aussagen. */
  aussagen: [Aussage, Aussage, Aussage, Aussage];
  /** Erklaerung, wird nach dem Pruefen gezeigt. Unterstuetzt **fett** und ==schluessel==. */
  erklaerung: string;
  /** Kurzer, praegnanter Merksatz / die Kern-Verbindung. Poppt bei Fehlern auf. */
  merksatz?: string;
  schwierigkeit: 1 | 2 | 3;
  quelle: "offiziell" | "generiert";
  /** Bei generierten Fragen: Skript-Belegstelle (Kapitel/Seite). */
  beleg?: string;
  /** Nur Teil C: ID des englischen Lesetexts, auf den sich die Frage bezieht. */
  textId?: string;
}

/** Englischer Fachtext fuer Pruefungsteil C (Textleseverstaendnis). */
export interface Lesetext {
  id: string;
  titel: string;
  /** Quellenangabe im APA-Stil bzw. Herkunftshinweis. */
  quelle: string;
  /** Absaetze des englischen Texts. */
  absaetze: string[];
  /** Vokabelhilfen: englischer Begriff -> deutsche Erklaerung. */
  glossar?: { begriff: string; erklaerung: string }[];
}

/**
 * Karteikarte fuer schnelles Einpraegen (Fakten-Zuordnungen, Definitionen).
 * vorderseite = Frage/Reiz, rueckseite = Antwort. Unterstuetzt **fett** und ==schluessel==.
 */
export interface Karteikarte {
  id: string;
  kapitel: number;
  thema: string;
  vorderseite: string;
  rueckseite: string;
  merksatz?: string;
  quelle: "offiziell" | "generiert";
}

// ---------------- Fortschritt (localStorage) ----------------

/** Spaced-Repetition-Zustand pro Frage (SM-2), kommt in Stufe 2 voll zum Einsatz. */
export interface SrsState {
  intervall: number; // Tage bis zur naechsten Faelligkeit
  ease: number; // Leichtigkeitsfaktor (min 1.3)
  faellig: string; // ISO-Datum (yyyy-mm-dd)
  wiederholungen: number;
}

/** Lernstand pro Frage. */
export interface FrageStand {
  gesehen: number;
  richtig: number;
  falsch: number;
  zuletzt: string | null; // ISO-Zeit
  letzteRichtig: boolean | null;
  srs?: SrsState;
}

/** Gesamter, im Browser gespeicherter Fortschritt. */
export interface Fortschritt {
  version: number;
  stand: Record<string, FrageStand>;
  streak: { count: number; letzterTag: string | null };
  /** IDs, die heute falsch waren (Fehler-Fokus-Modus). */
  fehlerHeute: { tag: string | null; ids: string[] };
  /** Bester Blitz-Punktestand. */
  blitzRekord?: number;
}
