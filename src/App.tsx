import { useState } from "react";
import { useFortschritt } from "./hooks/useFortschritt";
import type { UebungFilter } from "./lib/auswahl";
import Home from "./screens/Home";
import Uebung from "./screens/Uebung";
import Pruefung from "./screens/Pruefung";

type View =
  | { name: "home" }
  | { name: "uebung"; filter: UebungFilter }
  | { name: "pruefung" };

export default function App() {
  const { fortschritt, antworten, zuruecksetzen } = useFortschritt();
  const [view, setView] = useState<View>({ name: "home" });

  return (
    <div className="min-h-dvh">
      {view.name === "home" && (
        <Home
          fortschritt={fortschritt}
          onUebung={(filter) => setView({ name: "uebung", filter })}
          onPruefung={() => setView({ name: "pruefung" })}
          onReset={zuruecksetzen}
        />
      )}

      {view.name === "uebung" && (
        <Uebung
          fortschritt={fortschritt}
          filter={view.filter}
          onAntwort={antworten}
          onHome={() => setView({ name: "home" })}
        />
      )}

      {view.name === "pruefung" && (
        <Pruefung onAntwort={antworten} onHome={() => setView({ name: "home" })} />
      )}
    </div>
  );
}
