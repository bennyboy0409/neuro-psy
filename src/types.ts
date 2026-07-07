// ============================================================
//  Datenmodell fuer den Psycho-Trainer
// ============================================================

export type Teil = "A" | "B" | "C";

/** Eine einzelne Aussage innerhalb einer Frage. */
export interface Aussage {
  text: string;
  istRichtig: boolean;
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
}
