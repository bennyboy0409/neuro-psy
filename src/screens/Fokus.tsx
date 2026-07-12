import { useMemo, useRef, useState } from "react";
import type { Fortschritt } from "../types";
import type { Antworten } from "../lib/scoring";
import { bewerteFrage, vollstaendig } from "../lib/scoring";
import { baueFokus, type LernItem } from "../lib/lernplan";
import FrageCard from "../components/FrageCard";
import Flipkarte from "../components/Flipkarte";
import SuccessBurst from "../components/SuccessBurst";
import Icon from "../components/Icon";

interface Props {
  fortschritt: Fortschritt;
  onAntwort: (frageId: string, richtig: boolean) => void;
  onKarte: (id: string, qualitaet: number) => void;
  onHome: () => void;
}

const LEER: Antworten = [null, null, null, null];
const MAX_VERSUCHE = 3;

export default function Fokus({ fortschritt, onAntwort, onKarte, onHome }: Props) {
  const plan = useMemo(() => baueFokus(fortschritt), []);
  const gesamtUnique = plan.items.length;

  const [queue, setQueue] = useState<LernItem[]>(plan.items);
  const [pos, setPos] = useState(0);
  const [gemeistert, setGemeistert] = useState<Set<string>>(new Set());
  const versuche = useRef<Record<string, number>>({});

  const [antworten, setAntworten] = useState<Antworten>(LEER);
  const [geprueft, setGeprueft] = useState(false);
  const [letztesKorrekt, setLetztesKorrekt] = useState(false);
  const [gedreht, setGedreht] = useState(false);
  const [serie, setSerie] = useState(0);
  const [burstId, setBurstId] = useState(0);
  const [fertig, setFertig] = useState(false);

  if (gesamtUnique === 0) {
    return (
      <Rahmen onHome={onHome} progress={100} serie={0}>
        <div className="glass rounded-3xl p-8 text-center mt-6">
          <span className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-emerald-400/15 text-emerald-300 mb-3">
            <Icon name="check" size={26} strokeWidth={2.5} />
          </span>
          <p className="text-slate-100 font-medium">Für heute alles wiederholt.</p>
          <p className="text-sm text-slate-500 mt-1">Komm morgen wieder — der Algorithmus plant den Rest.</p>
          <button onClick={onHome} className="mt-5 rounded-xl bg-white/10 px-5 py-2.5 text-slate-100 font-medium active:scale-95 transition">Zurück</button>
        </div>
      </Rahmen>
    );
  }

  if (fertig) {
    const offen = gesamtUnique - gemeistert.size;
    return (
      <Rahmen onHome={onHome} progress={100} serie={0}>
        <div className="glass rounded-3xl p-7 text-center mt-6 animate-pop">
          <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/25 to-fuchsia-400/20 text-amber-300 mb-4">
            <Icon name="trophy" size={30} />
          </span>
          <p className="text-white text-xl font-display font-semibold">Session geschafft</p>
          <p className="text-4xl font-display font-semibold text-gradient mt-2">{gemeistert.size}</p>
          <p className="text-slate-400 mt-1">{gemeistert.size === 1 ? "Einheit" : "Einheiten"} sitzen jetzt</p>
          {offen > 0 && (
            <p className="text-xs text-amber-300/80 mt-3 leading-relaxed">
              {offen} {offen === 1 ? "Einheit war" : "Einheiten waren"} heute zäh — die kommen morgen gezielt wieder.
            </p>
          )}
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Jede Einheit wurde so lange wiederholt, bis du sie heute konntest. Genau das lässt es hängen bleiben.
          </p>
          <button onClick={onHome} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition">Fertig</button>
        </div>
      </Rahmen>
    );
  }

  const cur = queue[pos];
  const progress = Math.round((gemeistert.size / gesamtUnique) * 100);

  function anwenden(correct: boolean, karteQ?: number) {
    if (cur.kind === "frage") onAntwort(cur.id, correct);
    else onKarte(cur.id, karteQ ?? (correct ? 4 : 1));

    let nextQueue = queue;
    if (correct) {
      if (!gemeistert.has(cur.id)) {
        const m = new Set(gemeistert);
        m.add(cur.id);
        setGemeistert(m);
      }
      setSerie((s) => s + 1);
      setBurstId((b) => b + 1);
    } else {
      setSerie(0);
      const v = (versuche.current[cur.id] ?? 0) + 1;
      versuche.current[cur.id] = v;
      if (v < MAX_VERSUCHE) {
        nextQueue = [...queue];
        const insertAt = Math.min(pos + 4, nextQueue.length);
        nextQueue.splice(insertAt, 0, cur);
        setQueue(nextQueue);
      }
    }

    const nextPos = pos + 1;
    if (nextPos >= nextQueue.length) {
      setFertig(true);
    } else {
      setPos(nextPos);
      setAntworten(LEER);
      setGeprueft(false);
      setGedreht(false);
    }
  }

  return (
    <Rahmen onHome={onHome} progress={progress} serie={serie} zaehler={`${gemeistert.size}/${gesamtUnique}`}>
      <div className="relative">
        <SuccessBurst runId={burstId} />
        <div key={pos} className="animate-fade-up">
          {cur.kind === "frage" ? (
            <FrageCard frage={cur.frage} antworten={antworten} geprueft={geprueft} onAntwort={(i, w) => { if (!geprueft) setAntworten((a) => { const n = [...a] as Antworten; n[i] = w; return n; }); }} />
          ) : (
            <Flipkarte karte={cur.karte} gedreht={gedreht} onToggle={() => setGedreht((g) => !g)} />
          )}
        </div>
      </div>

      {/* Steuerung */}
      <div className="mt-4">
        {cur.kind === "frage" ? (
          !geprueft ? (
            <button
              onClick={() => {
                if (!vollstaendig(antworten)) return;
                const { alleKorrekt } = bewerteFrage(cur.frage, antworten);
                setLetztesKorrekt(alleKorrekt);
                setGeprueft(true);
              }}
              disabled={!vollstaendig(antworten)}
              className={`w-full rounded-2xl px-4 py-3.5 font-semibold transition-all ${
                vollstaendig(antworten)
                  ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white active:scale-[0.98] shadow-lg shadow-indigo-900/30"
                  : "bg-white/5 text-slate-600 cursor-not-allowed"
              }`}
            >
              {vollstaendig(antworten) ? "Prüfen" : "Alle 4 Aussagen bewerten"}
            </button>
          ) : (
            <button onClick={() => anwenden(letztesKorrekt)} className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition inline-flex items-center justify-center gap-2">
              Weiter <Icon name="arrowRight" size={18} />
            </button>
          )
        ) : !gedreht ? (
          <button onClick={() => setGedreht(true)} className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition">
            Antwort zeigen
          </button>
        ) : (
          <div className="grid grid-cols-3 gap-2.5 animate-fade-up">
            <button onClick={() => anwenden(false, 1)} className="rounded-2xl px-2 py-3 font-semibold ring-1 bg-rose-500/15 text-rose-200 ring-rose-400/30 active:scale-95 transition">Nochmal</button>
            <button onClick={() => anwenden(true, 4)} className="rounded-2xl px-2 py-3 font-semibold ring-1 bg-sky-500/15 text-sky-200 ring-sky-400/30 active:scale-95 transition">Gut</button>
            <button onClick={() => anwenden(true, 5)} className="rounded-2xl px-2 py-3 font-semibold ring-1 bg-emerald-500/15 text-emerald-200 ring-emerald-400/30 active:scale-95 transition">Einfach</button>
          </div>
        )}
      </div>
    </Rahmen>
  );
}

function Rahmen({
  children,
  onHome,
  progress,
  serie,
  zaehler,
}: {
  children: React.ReactNode;
  onHome: () => void;
  progress: number;
  serie: number;
  zaehler?: string;
}) {
  return (
    <div className="mx-auto max-w-md px-4 pb-12">
      <header className="pt-5 pb-3 flex items-center gap-3">
        <button onClick={onHome} className="rounded-xl glass w-9 h-9 grid place-items-center text-slate-300 active:scale-90 transition" aria-label="Zurück">
          <Icon name="arrowLeft" size={18} />
        </button>
        <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 transition-[width] duration-500" style={{ width: `${progress}%` }} />
        </div>
        {serie >= 2 ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-amber-300 text-sm font-bold animate-pop">
            <Icon name="flame" size={14} />{serie}
          </span>
        ) : zaehler ? (
          <span className="text-sm text-slate-500 tabular-nums">{zaehler}</span>
        ) : null}
      </header>
      {children}
    </div>
  );
}
