import { useCallback, useState } from "react";
import type { Fortschritt } from "../types";
import {
  ladeFortschritt,
  speichere,
  mitAntwort,
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

  const zuruecksetzen = useCallback(() => {
    setFortschritt(alleZuruecksetzen());
  }, []);

  return { fortschritt, antworten, zuruecksetzen };
}
