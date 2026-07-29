import type { Frage, Fortschritt, Karteikarte, Lesetext, Teil } from "../types";
import { fragenOffiziell } from "../data/fragenOffiziell";
import { fragenGeneriert } from "../data/fragenGeneriert";
import { lueckenK4 } from "../data/lueckenK4";
import { lueckenK5 } from "../data/lueckenK5";
import { lueckenK6 } from "../data/lueckenK6";
import { lueckenK7 } from "../data/lueckenK7";
import { lueckenK8 } from "../data/lueckenK8";
import { lueckenK123 } from "../data/lueckenK123";
import { teilB } from "../data/teilB";
import { fragenTeilC, lesetexte } from "../data/teilC";
import { karteikarten } from "../data/karteikarten";
import { fehlerHeuteIds } from "./fortschritt";
import { istFaellig } from "./srs";

/** Alle aktuell verfügbaren Fragen (offiziell + generiert, alle Teile). */
export function alleFragen(): Frage[] {
  return [
    ...fragenOffiziell,
    ...fragenGeneriert,
    ...lueckenK123,
    ...lueckenK4,
    ...lueckenK5,
    ...lueckenK6,
    ...lueckenK7,
    ...lueckenK8,
    ...teilB,
    ...fragenTeilC,
  ];
}

/** Englischer Lesetext zu einer Teil-C-Frage (falls vorhanden). */
export function lesetextZu(frage: Frage): Lesetext | undefined {
  if (!frage.textId) return undefined;
  return lesetexte.find((t) => t.id === frage.textId);
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

// ---------------- Karteikarten ----------------

export function alleKarten(): Karteikarte[] {
  return [...karteikarten];
}

/** Karten fürs Lernen: heute fällige & neue zuerst, dann der Rest. */
export function fuerKarten(
  fortschritt: Fortschritt,
  kapitel?: number
): Karteikarte[] {
  let pool = alleKarten();
  if (kapitel) pool = pool.filter((k) => k.kapitel === kapitel);

  const faellig: Karteikarte[] = [];
  const rest: Karteikarte[] = [];
  for (const k of pool) {
    if (istFaellig(fortschritt.stand[k.id]?.srs)) faellig.push(k);
    else rest.push(k);
  }
  return [...mische(faellig), ...mische(rest)];
}

/** Anzahl heute fälliger Karten (inkl. nie gesehener). */
export function faelligeKarten(fortschritt: Fortschritt): number {
  return alleKarten().filter((k) => istFaellig(fortschritt.stand[k.id]?.srs)).length;
}

// ---------------- Kapitel-Fortschritt ----------------

export const KAPITEL_TITEL: Record<number, string> = {
  1: "Was ist Psychologie",
  2: "Geschichte",
  3: "Methoden & Statistik",
  4: "Biologische Psychologie",
  5: "Allgemeine Psychologie",
  6: "Entwicklung",
  7: "Sozialpsychologie",
  8: "Persönlichkeit",
};

export interface KapitelStat {
  kapitel: number;
  titel: string;
  gesamt: number;
  gemeistert: number;
  prozent: number;
}

/** Meisterschaft pro Kapitel über Fragen (Teil A) + Karteikarten. */
export function kapitelFortschritt(fortschritt: Fortschritt): KapitelStat[] {
  const items: { id: string; kapitel: number }[] = [
    ...alleFragen()
      .filter((f) => f.teil === "A" && f.kapitel)
      .map((f) => ({ id: f.id, kapitel: f.kapitel as number })),
    ...alleKarten().map((k) => ({ id: k.id, kapitel: k.kapitel })),
  ];

  return Object.keys(KAPITEL_TITEL)
    .map(Number)
    .map((kapitel) => {
      const eigene = items.filter((i) => i.kapitel === kapitel);
      const gemeistert = eigene.filter(
        (i) => fortschritt.stand[i.id]?.letzteRichtig === true
      ).length;
      const gesamt = eigene.length;
      return {
        kapitel,
        titel: KAPITEL_TITEL[kapitel],
        gesamt,
        gemeistert,
        prozent: gesamt ? Math.round((gemeistert / gesamt) * 100) : 0,
      };
    });
}
