import { useMemo, useState } from "react";
import type { Fortschritt } from "../types";
import type { Antworten } from "../lib/scoring";
import { bewerteFrage, vollstaendig } from "../lib/scoring";
import { fuerUebung, type UebungFilter } from "../lib/auswahl";
import FrageCard from "../components/FrageCard";
import SuccessBurst from "../components/SuccessBurst";
import Icon from "../components/Icon";

interface Props {
  fortschritt: Fortschritt;
  filter: UebungFilter;
  onAntwort: (frageId: string, richtig: boolean) => void;
  onHome: () => void;
}

const LEER: Antworten = [null, null, null, null];

export default function Uebung({ fortschritt, filter, onAntwort, onHome }: Props) {
  const fragen = useMemo(() => fuerUebung(fortschritt, filter), []);

  const [index, setIndex] = useState(0);
  const [antworten, setAntworten] = useState<Antworten>(LEER);
  const [geprueft, setGeprueft] = useState(false);
  const [score, setScore] = useState({ richtig: 0, gesamt: 0 });
  const [serie, setSerie] = useState(0);
  const [burstId, setBurstId] = useState(0);
  const [fertig, setFertig] = useState(false);

  if (fragen.length === 0) {
    return (
      <Rahmen onHome={onHome} progress={0}>
        <div className="glass rounded-3xl p-8 text-center mt-6">
          <span className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-emerald-400/15 text-emerald-300 mb-3">
            <Icon name="check" size={26} strokeWidth={2.5} />
          </span>
          <p className="text-slate-100 font-medium">Hier ist gerade alles erledigt.</p>
          <p className="text-sm text-slate-500 mt-1">
            {filter.nurFehler ? "Heute noch keine Frage falsch beantwortet." : "Keine Fragen für diese Auswahl."}
          </p>
          <button onClick={onHome} className="mt-5 rounded-xl bg-white/10 px-5 py-2.5 text-slate-100 font-medium active:scale-95 transition">
            Zurück
          </button>
        </div>
      </Rahmen>
    );
  }

  if (fertig) {
    const quote = Math.round((score.richtig / score.gesamt) * 100);
    return (
      <Rahmen onHome={onHome} progress={100}>
        <div className="glass rounded-3xl p-7 text-center mt-6 animate-pop">
          <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/25 to-fuchsia-400/20 text-amber-300 mb-4">
            <Icon name="trophy" size={30} />
          </span>
          <p className="text-white text-xl font-display font-semibold">Runde geschafft</p>
          <p className="text-4xl font-display font-semibold text-gradient mt-2">{quote}%</p>
          <p className="text-slate-400 mt-1">{score.richtig} von {score.gesamt} komplett richtig</p>
          <p className="text-xs text-slate-600 mt-3 leading-relaxed">
            Eine Frage zählt nur, wenn alle 4 Aussagen stimmen — genau wie im echten Test.
          </p>
          <button onClick={onHome} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition">
            Weiter
          </button>
        </div>
      </Rahmen>
    );
  }

  const frage = fragen[index];
  const kannPruefen = vollstaendig(antworten);
  const progress = Math.round((index / fragen.length) * 100);

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
    if (alleKorrekt) {
      setSerie((s) => s + 1);
      setBurstId((b) => b + 1);
    } else {
      setSerie(0);
    }
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
    <Rahmen onHome={onHome} progress={progress} score={score} serie={serie}>
      <div className="relative">
        <SuccessBurst runId={burstId} />
        <div key={frage.id} className="animate-fade-up">
          <FrageCard
            frage={frage}
            antworten={antworten}
            onAntwort={setzeAntwort}
            geprueft={geprueft}
            nummer={{ aktuell: index + 1, gesamt: fragen.length }}
          />
        </div>
      </div>

      <div className="mt-4">
        {!geprueft ? (
          <button
            onClick={pruefen}
            disabled={!kannPruefen}
            className={`w-full rounded-2xl px-4 py-3.5 font-semibold transition-all ${
              kannPruefen
                ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white active:scale-[0.98] shadow-lg shadow-indigo-900/30"
                : "bg-white/5 text-slate-600 cursor-not-allowed"
            }`}
          >
            {kannPruefen ? "Prüfen" : "Alle 4 Aussagen bewerten"}
          </button>
        ) : (
          <button
            onClick={weiter}
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition inline-flex items-center justify-center gap-2"
          >
            {index + 1 >= fragen.length ? "Runde abschließen" : "Nächste Frage"}
            <Icon name="arrowRight" size={18} />
          </button>
        )}
      </div>
    </Rahmen>
  );
}

function Rahmen({
  children,
  onHome,
  progress,
  score,
  serie = 0,
}: {
  children: React.ReactNode;
  onHome: () => void;
  progress: number;
  score?: { richtig: number; gesamt: number };
  serie?: number;
}) {
  return (
    <div className="mx-auto max-w-md px-4 pb-12">
      <header className="pt-5 pb-3 flex items-center gap-3">
        <button
          onClick={onHome}
          className="rounded-xl glass w-9 h-9 grid place-items-center text-slate-300 active:scale-90 transition"
          aria-label="Zurück"
        >
          <Icon name="arrowLeft" size={18} />
        </button>

        {/* Fortschrittsbalken */}
        <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-400 transition-[width] duration-500" style={{ width: `${progress}%` }} />
        </div>

        {serie >= 2 ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-amber-300 text-sm font-bold animate-pop" title="Serie richtiger Antworten">
            <Icon name="flame" size={14} />{serie}
          </span>
        ) : score && score.gesamt > 0 ? (
          <span className="text-sm text-slate-500 tabular-nums">{score.richtig}/{score.gesamt}</span>
        ) : null}
      </header>
      {children}
    </div>
  );
}
