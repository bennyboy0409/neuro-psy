import { useMemo, useState } from "react";
import type { Fortschritt } from "../types";
import { fuerKarten } from "../lib/auswahl";
import Flipkarte from "../components/Flipkarte";
import Icon from "../components/Icon";

interface Props {
  fortschritt: Fortschritt;
  kapitel?: number;
  onBewerten: (id: string, qualitaet: number) => void;
  onHome: () => void;
}

export default function Karten({ fortschritt, kapitel, onBewerten, onHome }: Props) {
  const karten = useMemo(() => fuerKarten(fortschritt, kapitel), []);
  const [index, setIndex] = useState(0);
  const [gedreht, setGedreht] = useState(false);
  const [gewusst, setGewusst] = useState(0);
  const [fertig, setFertig] = useState(false);

  if (karten.length === 0) {
    return (
      <Rahmen onHome={onHome} progress={0} titel="Karteikarten">
        <Leer onHome={onHome} text="Für diese Auswahl gibt es keine Karten." />
      </Rahmen>
    );
  }

  if (fertig) {
    return (
      <Rahmen onHome={onHome} progress={100} titel="Karteikarten">
        <div className="glass rounded-3xl p-7 text-center mt-6 animate-pop">
          <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/25 to-sky-400/20 text-emerald-300 mb-4">
            <Icon name="check" size={30} strokeWidth={2.5} />
          </span>
          <p className="text-white text-xl font-display font-semibold">Stapel durch</p>
          <p className="text-slate-400 mt-1">{gewusst} von {karten.length} auf Anhieb gewusst</p>
          <p className="text-xs text-slate-600 mt-3 leading-relaxed">
            Die App plant jede Karte automatisch wieder ein — je sicherer, desto später.
          </p>
          <button onClick={onHome} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition">
            Fertig
          </button>
        </div>
      </Rahmen>
    );
  }

  const karte = karten[index];
  const progress = Math.round((index / karten.length) * 100);

  function bewerten(q: number) {
    onBewerten(karte.id, q);
    if (q >= 3) setGewusst((g) => g + 1);
    if (index + 1 >= karten.length) {
      setFertig(true);
      return;
    }
    setIndex((i) => i + 1);
    setGedreht(false);
  }

  return (
    <Rahmen onHome={onHome} progress={progress} titel="Karteikarten" zaehler={`${index + 1} / ${karten.length}`}>
      <div className="mt-2">
        <Flipkarte karte={karte} gedreht={gedreht} onToggle={() => setGedreht((g) => !g)} hinweis="Tippen zum Umdrehen" />
      </div>

      {/* Steuerung */}
      <div className="mt-4">
        {!gedreht ? (
          <button
            onClick={() => setGedreht(true)}
            className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition"
          >
            Antwort zeigen
          </button>
        ) : (
          <div className="grid grid-cols-3 gap-2.5 animate-fade-up">
            <RateBtn label="Nochmal" farbe="rose" onClick={() => bewerten(1)} />
            <RateBtn label="Gut" farbe="sky" onClick={() => bewerten(4)} />
            <RateBtn label="Einfach" farbe="emerald" onClick={() => bewerten(5)} />
          </div>
        )}
      </div>
    </Rahmen>
  );
}

function RateBtn({ label, farbe, onClick }: { label: string; farbe: "rose" | "sky" | "emerald"; onClick: () => void }) {
  const stil =
    farbe === "rose"
      ? "bg-rose-500/15 text-rose-200 ring-rose-400/30"
      : farbe === "sky"
      ? "bg-sky-500/15 text-sky-200 ring-sky-400/30"
      : "bg-emerald-500/15 text-emerald-200 ring-emerald-400/30";
  return (
    <button onClick={onClick} className={`rounded-2xl px-2 py-3 font-semibold ring-1 active:scale-95 transition ${stil}`}>
      {label}
    </button>
  );
}

function Leer({ onHome, text }: { onHome: () => void; text: string }) {
  return (
    <div className="glass rounded-3xl p-8 text-center mt-6">
      <p className="text-slate-200">{text}</p>
      <button onClick={onHome} className="mt-4 rounded-xl bg-white/10 px-5 py-2.5 text-slate-100 font-medium">Zurück</button>
    </div>
  );
}

function Rahmen({
  children,
  onHome,
  progress,
  titel,
  zaehler,
}: {
  children: React.ReactNode;
  onHome: () => void;
  progress: number;
  titel: string;
  zaehler?: string;
}) {
  return (
    <div className="mx-auto max-w-md px-4 pb-12">
      <header className="pt-5 pb-3 flex items-center gap-3">
        <button onClick={onHome} className="rounded-xl glass w-9 h-9 grid place-items-center text-slate-300 active:scale-90 transition" aria-label="Zurück">
          <Icon name="arrowLeft" size={18} />
        </button>
        <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-400 transition-[width] duration-500" style={{ width: `${progress}%` }} />
        </div>
        {zaehler ? <span className="text-sm text-slate-500 tabular-nums">{zaehler}</span> : <span className="text-sm text-slate-500">{titel}</span>}
      </header>
      {children}
    </div>
  );
}
