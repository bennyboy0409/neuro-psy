import type { Fortschritt, FrageStand } from "../types";
import { heute, tageDazwischen } from "./datum";
import { sm2 } from "./srs";

const KEY = "psy-trainer:v1";

export function defaultFortschritt(): Fortschritt {
  return {
    version: 1,
    stand: {},
    streak: { count: 0, letzterTag: null },
    fehlerHeute: { tag: null, ids: [] },
  };
}

export function ladeFortschritt(): Fortschritt {
  try {
    const roh = localStorage.getItem(KEY);
    if (!roh) return defaultFortschritt();
    const parsed = JSON.parse(roh) as Partial<Fortschritt>;
    // defensive Zusammenfuehrung mit Defaults (falls Felder fehlen)
    return { ...defaultFortschritt(), ...parsed } as Fortschritt;
  } catch {
    return defaultFortschritt();
  }
}

export function speichere(f: Fortschritt): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(f));
  } catch {
    // Speicher voll / privater Modus -> still weitermachen
  }
}

function leererStand(): FrageStand {
  return { gesehen: 0, richtig: 0, falsch: 0, zuletzt: null, letzteRichtig: null };
}

function aktualisiereStreak(
  streak: Fortschritt["streak"],
  tag: string
): Fortschritt["streak"] {
  if (streak.letzterTag === tag) return streak; // heute schon gezaehlt
  if (streak.letzterTag === null) return { count: 1, letzterTag: tag };
  const diff = tageDazwischen(streak.letzterTag, tag);
  if (diff === 1) return { count: streak.count + 1, letzterTag: tag };
  if (diff > 1) return { count: 1, letzterTag: tag }; // Kette gerissen
  return { ...streak, letzterTag: tag };
}

/**
 * Kern-Update nach einem Ergebnis. Qualitaet q (0-5, SM-2):
 * richtig gilt ab q >= 3. Aktualisiert Stand, SM-2-Plan, Streak und Fehler-Fokus.
 */
export function mitQualitaet(
  f: Fortschritt,
  id: string,
  q: number
): Fortschritt {
  const tag = heute();
  const richtig = q >= 3;
  const alt = f.stand[id] ?? leererStand();
  const stand: Record<string, FrageStand> = {
    ...f.stand,
    [id]: {
      gesehen: alt.gesehen + 1,
      richtig: alt.richtig + (richtig ? 1 : 0),
      falsch: alt.falsch + (richtig ? 0 : 1),
      zuletzt: new Date().toISOString(),
      letzteRichtig: richtig,
      srs: sm2(alt.srs, q),
    },
  };

  const streak = aktualisiereStreak(f.streak, tag);

  // Fehler-Fokus-Modus: was heute nicht gewusst wurde, wird gesammelt.
  let fehlerHeute = f.fehlerHeute.tag === tag ? f.fehlerHeute : { tag, ids: [] };
  if (!richtig && !fehlerHeute.ids.includes(id)) {
    fehlerHeute = { tag, ids: [...fehlerHeute.ids, id] };
  }

  return { ...f, stand, streak, fehlerHeute };
}

/** Frage beantwortet (alle 4 korrekt?) -> auf SM-2-Qualitaet abgebildet. */
export function mitAntwort(
  f: Fortschritt,
  frageId: string,
  richtig: boolean
): Fortschritt {
  return mitQualitaet(f, frageId, richtig ? 4 : 1);
}

/** IDs, die HEUTE falsch beantwortet wurden. */
export function fehlerHeuteIds(f: Fortschritt): string[] {
  return f.fehlerHeute.tag === heute() ? f.fehlerHeute.ids : [];
}

export function alleZuruecksetzen(): Fortschritt {
  const f = defaultFortschritt();
  speichere(f);
  return f;
}
