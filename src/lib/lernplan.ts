import type { Frage, Fortschritt, Karteikarte } from "../types";
import { alleFragen, alleKarten } from "./auswahl";
import { istFaellig } from "./srs";

// ============================================================
//  Lernplan fuer die Fokus-Session:
//  priorisieren (Lernwert) + interleaven (Themen mischen).
// ============================================================

export type LernItem =
  | { kind: "frage"; id: string; thema: string; kapitel?: number; frage: Frage }
  | { kind: "karte"; id: string; thema: string; kapitel: number; karte: Karteikarte };

/** Ab so vielen Fehlversuchen gilt ein Item als "hartnaeckig" (Leech). */
export const LEECH_SCHWELLE = 4;

export function istLeech(f: Fortschritt, id: string): boolean {
  const st = f.stand[id];
  return !!st && st.falsch >= LEECH_SCHWELLE && st.letzteRichtig !== true;
}

/** Kleiner = wichtiger. 9 = aktuell nicht noetig. */
function prioritaet(f: Fortschritt, id: string): number {
  const st = f.stand[id];
  if (istLeech(f, id)) return 0; // hartnaeckig -> unbedingt ran
  if (st && st.letzteRichtig === false) return 1; // zuletzt falsch
  if (!st || st.gesehen === 0) return 2; // neu
  if (istFaellig(st?.srs)) return 3; // faellig zur Wiederholung
  return 9; // sitzt & nicht faellig
}

function mische<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Themen mischen: nie zweimal dasselbe Thema hintereinander, wenn vermeidbar. */
function interleave(items: LernItem[]): LernItem[] {
  const buckets = new Map<string, LernItem[]>();
  for (const it of mische(items)) {
    const key = it.thema || `k${it.kapitel}`;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key)!.push(it);
  }
  const result: LernItem[] = [];
  let last = "";
  while (result.length < items.length) {
    // groesster Bucket, dessen Thema nicht zuletzt dran war
    const kandidaten = [...buckets.entries()]
      .filter(([, arr]) => arr.length > 0)
      .sort((a, b) => b[1].length - a[1].length);
    const pick = kandidaten.find(([key]) => key !== last) ?? kandidaten[0];
    if (!pick) break;
    result.push(pick[1].shift()!);
    last = pick[0];
  }
  return result;
}

function alleLernItems(): LernItem[] {
  const items: LernItem[] = [];
  for (const frage of alleFragen()) {
    items.push({ kind: "frage", id: frage.id, thema: frage.thema ?? `Teil ${frage.teil}`, kapitel: frage.kapitel, frage });
  }
  for (const karte of alleKarten()) {
    items.push({ kind: "karte", id: karte.id, thema: karte.thema, kapitel: karte.kapitel, karte });
  }
  return items;
}

export interface FokusPlan {
  items: LernItem[];
  ziel: number;
  faelligGesamt: number;
}

/** Standard-Groesse einer Fokus-Session (finishbares Ritual). */
export const FOKUS_ZIEL = 24;

export function baueFokus(f: Fortschritt, ziel = FOKUS_ZIEL): FokusPlan {
  const kandidaten = mische(
    alleLernItems()
      .map((it) => ({ it, p: prioritaet(f, it.id) }))
      .filter((x) => x.p <= 3)
  );

  const faelligGesamt = kandidaten.length;

  // stabile Sortierung nach Prioritaet -> gleichrangige bleiben gemischt (Karten & Fragen durchmischt)
  kandidaten.sort((a, b) => a.p - b.p);
  const genommen = kandidaten.slice(0, ziel).map((x) => x.it);

  return { items: interleave(genommen), ziel, faelligGesamt };
}

/** Anzahl aktuell "dran" (fuer die Startseite). */
export function fokusFaellig(f: Fortschritt): number {
  return alleLernItems().filter((it) => prioritaet(f, it.id) <= 3).length;
}

// ---------------- Blitz ----------------

export interface BlitzItem {
  frageId: string;
  kontext: string;
  text: string;
  istRichtig: boolean;
}

/** Alle Aussagen einzeln als Richtig/Falsch-Happen, gemischt (fuer den Blitz-Modus). */
export function blitzStrom(): BlitzItem[] {
  const items: BlitzItem[] = [];
  for (const f of alleFragen()) {
    for (const a of f.aussagen) {
      items.push({ frageId: f.id, kontext: f.stem, text: a.text, istRichtig: a.istRichtig });
    }
  }
  return mische(items);
}
