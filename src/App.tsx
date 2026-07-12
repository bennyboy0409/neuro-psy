import { useState } from "react";
import { useFortschritt } from "./hooks/useFortschritt";
import type { UebungFilter } from "./lib/auswahl";
import Home from "./screens/Home";
import Uebung from "./screens/Uebung";
import Pruefung from "./screens/Pruefung";
import Karten from "./screens/Karten";
import Fokus from "./screens/Fokus";

type View =
  | { name: "home" }
  | { name: "fokus" }
  | { name: "uebung"; filter: UebungFilter }
  | { name: "karten"; kapitel?: number }
  | { name: "pruefung" };

export default function App() {
  const { fortschritt, antworten, karteBewerten, zuruecksetzen } = useFortschritt();
  const [view, setView] = useState<View>({ name: "home" });
  const home = () => setView({ name: "home" });

  return (
    <div className="min-h-dvh">
      {view.name === "home" && (
        <Home
          fortschritt={fortschritt}
          onFokus={() => setView({ name: "fokus" })}
          onUebung={(filter) => setView({ name: "uebung", filter })}
          onKarten={(kapitel) => setView({ name: "karten", kapitel })}
          onPruefung={() => setView({ name: "pruefung" })}
          onReset={zuruecksetzen}
        />
      )}

      {view.name === "fokus" && (
        <Fokus fortschritt={fortschritt} onAntwort={antworten} onKarte={karteBewerten} onHome={home} />
      )}

      {view.name === "uebung" && (
        <Uebung fortschritt={fortschritt} filter={view.filter} onAntwort={antworten} onHome={home} />
      )}

      {view.name === "karten" && (
        <Karten fortschritt={fortschritt} kapitel={view.kapitel} onBewerten={karteBewerten} onHome={home} />
      )}

      {view.name === "pruefung" && <Pruefung onAntwort={antworten} onHome={home} />}
    </div>
  );
}
