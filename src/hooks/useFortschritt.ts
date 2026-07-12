import { useCallback, useState } from "react";
import type { Fortschritt } from "../types";
import {
  ladeFortschritt,
  speichere,
  mitAntwort,
  mitQualitaet,
  alleZuruecksetzen,
} from "../lib/fortschritt";

export function useFortschritt() {
  const [fortschritt, setFortschritt] = useState<Fortschritt>(() =>
    ladeFortschritt()
  );

  const antworten = useCallback((frageId: string, richtig: boolean) => {
    setFortschritt((f) => {
      const neu = mitAntwort(f, frageId, richtig);
      speichere(neu);
      return neu;
    });
  }, []);

  // Karteikarte mit SM-2-Qualitaet bewerten (1 = nochmal, 4 = gut, 5 = einfach).
  const karteBewerten = useCallback((id: string, qualitaet: number) => {
    setFortschritt((f) => {
      const neu = mitQualitaet(f, id, qualitaet);
      speichere(neu);
      return neu;
    });
  }, []);

  const zuruecksetzen = useCallback(() => {
    setFortschritt(alleZuruecksetzen());
  }, []);

  return { fortschritt, antworten, karteBewerten, zuruecksetzen };
}
