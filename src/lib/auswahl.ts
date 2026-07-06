import type { Frage, Fortschritt, Teil } from "../types";
import { fragenOffiziell } from "../data/fragenOffiziell";
import { fehlerHeuteIds } from "./fortschritt";

/** Alle aktuell verfügbaren Fragen (später kommen generierte dazu). */
export function alleFragen(): Frage[] {
  return [...fragenOffiziell];
}

function mische<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export interface UebungFilter {
  teil?: Teil;
  nurFehler?: boolean;
}

/**
 * Reihenfolge fürs Üben: zuletzt FALSCHE zuerst, dann noch nie gesehene,
 * dann der Rest. Innerhalb einer Gruppe zufällig.
 */
export function fuerUebung(
  fortschritt: Fortschritt,
  filter: UebungFilter
): Frage[] {
  let pool = alleFragen();

  if (filter.nurFehler) {
    const ids = new Set(fehlerHeuteIds(fortschritt));
    pool = pool.filter((f) => ids.has(f.id));
  }
  if (filter.teil) {
    pool = pool.filter((f) => f.teil === filter.teil);
  }

  const falsch: Frage[] = [];
  const neu: Frage[] = [];
  const rest: Frage[] = [];
  for (const f of pool) {
    const st = fortschritt.stand[f.id];
    if (st && st.letzteRichtig === false) falsch.push(f);
    else if (!st || st.gesehen === 0) neu.push(f);
    else rest.push(f);
  }

  return [...mische(falsch), ...mische(neu), ...mische(rest)];
}

// ---------------- Prüfung ----------------

/** Zielstruktur der echten Prüfung. Wird gefüllt, sobald genug Fragen da sind. */
export const PRUEFUNG_PLAN = { A: 30, B: 15, C: 15, minuten: 150 } as const;

/** Ab welchem Prozentrang ein Studienplatz realistisch ist (Richtwert). */
export const PLATZ_GRENZE_PROZENT = 82; // ~Top 18 %

export interface PruefungsSatz {
  fragen: Frage[];
  proTeil: Record<Teil, { geplant: number; tatsaechlich: number }>;
  vollstaendig: boolean;
}

/** Stellt einen Prüfungssatz zusammen (so nah wie möglich an 30/15/15). */
export function fuerPruefung(): PruefungsSatz {
  const pool = alleFragen();
  const teile: Teil[] = ["A", "B", "C"];
  const fragen: Frage[] = [];
  const proTeil = {} as PruefungsSatz["proTeil"];
  let vollstaendig = true;

  for (const t of teile) {
    const geplant = PRUEFUNG_PLAN[t];
    const verfuegbar = mische(pool.filter((f) => f.teil === t));
    const genommen = verfuegbar.slice(0, geplant);
    proTeil[t] = { geplant, tatsaechlich: genommen.length };
    if (genommen.length < geplant) vollstaendig = false;
    fragen.push(...genommen);
  }

  return { fragen, proTeil, vollstaendig };
}
