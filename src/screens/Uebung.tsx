import { useMemo, useState } from "react";
import type { Fortschritt } from "../types";
import type { Antworten } from "../lib/scoring";
import { bewerteFrage, vollstaendig } from "../lib/scoring";
import { fuerUebung, type UebungFilter } from "../lib/auswahl";
import FrageCard from "../components/FrageCard";

interface Props {
  fortschritt: Fortschritt;
  filter: UebungFilter;
  onAntwort: (frageId: string, richtig: boolean) => void;
  onHome: () => void;
}

const LEER: Antworten = [null, null, null, null];

export default function Uebung({ fortschritt, filter, onAntwort, onHome }: Props) {
  // Fragenliste EINMAL beim Start festlegen (nicht mitten in der Session neu mischen).
  const fragen = useMemo(() => fuerUebung(fortschritt, filter), []);

  const [index, setIndex] = useState(0);
  const [antworten, setAntworten] = useState<Antworten>(LEER);
  const [geprueft, setGeprueft] = useState(false);
  const [score, setScore] = useState({ richtig: 0, gesamt: 0 });
  const [fertig, setFertig] = useState(false);

  if (fragen.length === 0) {
    return (
      <Rahmen onHome={onHome} titel="Üben">
        <div className="rounded-2xl bg-slate-800/60 ring-1 ring-slate-700/60 p-6 text-center">
          <p className="text-slate-200">Hier gibt es gerade keine Fragen. 🎉</p>
          <p className="text-sm text-slate-400 mt-1">
            {filter.nurFehler
              ? "Du hast heute noch keine Frage falsch beantwortet."
              : "Für diese Auswahl sind keine Fragen vorhanden."}
          </p>
          <button
            onClick={onHome}
            className="mt-4 rounded-xl bg-slate-700 px-4 py-2 text-slate-100 font-medium"
          >
            Zurück
          </button>
        </div>
      </Rahmen>
    );
  }

  if (fertig) {
    const quote = Math.round((score.richtig / score.gesamt) * 100);
    return (
      <Rahmen onHome={onHome} titel="Üben">
        <div className="rounded-2xl bg-slate-800/60 ring-1 ring-slate-700/60 p-6 text-center">
          <div className="text-4xl mb-2">{quote >= 80 ? "🎉" : quote >= 50 ? "💪" : "📖"}</div>
          <p className="text-slate-100 text-lg font-semibold">Runde geschafft!</p>
          <p className="text-slate-300 mt-1">
            {score.richtig} von {score.gesamt} Fragen komplett richtig ({quote} %)
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Eine Frage zählt nur als richtig, wenn alle 4 Aussagen korrekt bewertet sind.
          </p>
          <button
            onClick={onHome}
            className="mt-5 w-full rounded-xl bg-violet-500 px-4 py-3 text-white font-semibold active:bg-violet-600"
          >
            Zur Startseite
          </button>
        </div>
      </Rahmen>
    );
  }

  const frage = fragen[index];
  const kannPruefen = vollstaendig(antworten);

  function setzeAntwort(i: number, wert: boolean) {
    if (geprueft) return;
    setAntworten((a) => {
      const neu = [...a] as Antworten;
      neu[i] = wert;
      return neu;
    });
  }

  function pruefen() {
    if (!kannPruefen) return;
    const { alleKorrekt } = bewerteFrage(frage, antworten);
    onAntwort(frage.id, alleKorrekt);
    setScore((s) => ({ richtig: s.richtig + (alleKorrekt ? 1 : 0), gesamt: s.gesamt + 1 }));
    setGeprueft(true);
  }

  function weiter() {
    if (index + 1 >= fragen.length) {
      setFertig(true);
      return;
    }
    setIndex((i) => i + 1);
    setAntworten(LEER);
    setGeprueft(false);
  }

  return (
    <Rahmen onHome={onHome} titel="Üben" score={score}>
      <FrageCard
        frage={frage}
        antworten={antworten}
        onAntwort={setzeAntwort}
        geprueft={geprueft}
        nummer={{ aktuell: index + 1, gesamt: fragen.length }}
      />

      <div className="mt-4">
        {!geprueft ? (
          <button
            onClick={pruefen}
            disabled={!kannPruefen}
            className={`w-full rounded-xl px-4 py-3.5 font-semibold transition ${
              kannPruefen
                ? "bg-sky-500 text-white active:bg-sky-600"
                : "bg-slate-700/60 text-slate-500 cursor-not-allowed"
            }`}
          >
            {kannPruefen ? "Prüfen" : "Alle 4 Aussagen bewerten"}
          </button>
        ) : (
          <button
            onClick={weiter}
            className="w-full rounded-xl bg-violet-500 px-4 py-3.5 text-white font-semibold active:bg-violet-600"
          >
            {index + 1 >= fragen.length ? "Runde abschließen" : "Nächste Frage"}
          </button>
        )}
      </div>
    </Rahmen>
  );
}

function Rahmen({
  children,
  onHome,
  titel,
  score,
}: {
  children: React.ReactNode;
  onHome: () => void;
  titel: string;
  score?: { richtig: number; gesamt: number };
}) {
  return (
    <div className="mx-auto max-w-md px-4 pb-10">
      <header className="pt-5 pb-3 flex items-center gap-3">
        <button
          onClick={onHome}
          className="rounded-lg bg-slate-800 ring-1 ring-slate-700 w-9 h-9 grid place-items-center text-slate-300 active:bg-slate-700"
          aria-label="Zurück"
        >
          ←
        </button>
        <h1 className="font-semibold text-slate-100">{titel}</h1>
        {score && score.gesamt > 0 && (
          <span className="ml-auto text-sm text-slate-400">
            {score.richtig}/{score.gesamt} richtig
          </span>
        )}
      </header>
      {children}
    </div>
  );
}
