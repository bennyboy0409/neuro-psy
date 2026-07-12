import type { SrsState } from "../types";
import { heute, plusTage } from "./datum";

// ============================================================
//  SM-2 (wie Anki) — plant, wann eine Karte/Frage wieder dran ist.
//  Qualitaet q: 0-5 (0 = keine Ahnung, 5 = sofort & sicher gewusst).
// ============================================================

export const START_EASE = 2.5;

export function sm2(prev: SrsState | undefined, q: number): SrsState {
  let ease = prev?.ease ?? START_EASE;
  let wiederholungen = prev?.wiederholungen ?? 0;
  let intervall: number;

  if (q < 3) {
    // Nicht gewusst -> zurueck auf Anfang (kommt morgen wieder).
    wiederholungen = 0;
    intervall = 1;
  } else {
    if (wiederholungen === 0) intervall = 1;
    else if (wiederholungen === 1) intervall = 6;
    else intervall = Math.round((prev?.intervall ?? 1) * ease);
    wiederholungen += 1;
  }

  // Ease-Anpassung nach SM-2, Untergrenze 1.3.
  ease = ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (ease < 1.3) ease = 1.3;

  return {
    intervall,
    ease: Math.round(ease * 100) / 100,
    wiederholungen,
    faellig: plusTage(heute(), intervall),
  };
}

/** Ist ein Item heute (oder ueberfaellig) dran? Nie gesehene zaehlen als faellig. */
export function istFaellig(srs: SrsState | undefined): boolean {
  if (!srs) return true;
  return srs.faellig <= heute();
}
