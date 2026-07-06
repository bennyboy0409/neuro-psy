import type { Frage } from "../types";

/** true = Nutzer:in hat die Aussage als "richtig" markiert. */
export type Antworten = [boolean | null, boolean | null, boolean | null, boolean | null];

export interface Bewertung {
  /** Pro Aussage: wurde sie korrekt bewertet? */
  proAussage: boolean[];
  /** Nur wenn ALLE 4 korrekt bewertet sind, gilt die Frage als gelöst. */
  alleKorrekt: boolean;
}

export function bewerteFrage(frage: Frage, antworten: Antworten): Bewertung {
  const proAussage = frage.aussagen.map(
    (a, i) => antworten[i] === a.istRichtig
  );
  return { proAussage, alleKorrekt: proAussage.every(Boolean) };
}

/** Sind alle 4 Aussagen beantwortet (nichts mehr null)? */
export function vollstaendig(antworten: Antworten): boolean {
  return antworten.every((a) => a !== null);
}
