import { useMemo, useState, useEffect, useRef } from "react";
import type { Karteikarte } from "../types";
import { alleKarten, KAPITEL_TITEL } from "../lib/auswahl";
import RichText from "../components/RichText";
import Icon from "../components/Icon";

interface Props {
  kapitel?: number;
  onBewerten: (id: string, qualitaet: number) => void;
  onHome: () => void;
  /** Fuer den Kombi-Modus: nach der Auswertung weiterschalten. */
  onComplete?: () => void;
}

const DAUER = 120;

export default function BrainDump({ kapitel, onBewerten, onHome, onComplete }: Props) {
  const beenden = onComplete ?? onHome;
  const [phase, setPhase] = useState<"wahl" | "recall" | "check" | "ergebnis">(kapitel ? "recall" : "wahl");
  const [kap, setKap] = useState<number>(kapitel ?? 0);
  const [text, setText] = useState("");
  const [rest, setRest] = useState(DAUER);
  const [gewusst, setGewusst] = useState<Set<string>>(new Set());
  const [aufgedeckt, setAufgedeckt] = useState<Set<string>>(new Set());
  const ausgewertetRef = useRef(false);

  const karten = useMemo<Karteikarte[]>(() => alleKarten().filter((k) => k.kapitel === kap), [kap]);

  useEffect(() => {
    if (phase !== "recall") return;
    const t = setInterval(() => setRest((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(t);
  }, [phase]);

  useEffect(() => {
    if (phase === "recall" && rest <= 0) setPhase("check");
  }, [rest, phase]);

  function auswerten() {
    if (ausgewertetRef.current) return;
    ausgewertetRef.current = true;
    for (const k of karten) onBewerten(k.id, gewusst.has(k.id) ? 5 : 1);
    setPhase("ergebnis");
  }

  // ---------- Kapitelwahl ----------
  if (phase === "wahl") {
    return (
      <Rahmen onHome={onHome}>
        <p className="text-slate-300 text-sm mb-3 mt-2 leading-relaxed">
          Wähle ein Thema. Dann schreibst du <span className="text-white font-medium">aus dem Kopf</span> alles auf, was du dazu weißt — das ist die wirksamste Art zu lernen.
        </p>
        <div className="glass rounded-2xl divide-y divide-white/5 overflow-hidden">
          {Object.keys(KAPITEL_TITEL).map(Number).map((n) => {
            const anz = alleKarten().filter((k) => k.kapitel === n).length;
            return (
              <button key={n} onClick={() => { setKap(n); setPhase("recall"); }} disabled={anz === 0}
                className="w-full flex items-center gap-3 p-3.5 text-left active:bg-white/[0.04] transition disabled:opacity-40">
                <span className="grid place-items-center w-7 h-7 rounded-lg bg-white/8 text-slate-300 text-xs font-bold shrink-0">{n}</span>
                <span className="flex-1 text-sm text-slate-200">{KAPITEL_TITEL[n]}</span>
                <span className="text-xs text-slate-500">{anz} Punkte</span>
                <Icon name="chevronRight" size={18} />
              </button>
            );
          })}
        </div>
      </Rahmen>
    );
  }

  // ---------- Recall (dump) ----------
  if (phase === "recall") {
    return (
      <Rahmen onHome={onHome}>
        <div className="flex items-center gap-3 mb-3 mt-1">
          <span className="text-sm font-medium text-slate-200">{KAPITEL_TITEL[kap]}</span>
          <div className="ml-auto inline-flex items-center gap-1.5 font-mono font-bold tabular-nums rounded-lg px-2.5 py-1 glass text-slate-200">
            <Icon name="timer" size={14} /> {Math.floor(rest / 60)}:{String(rest % 60).padStart(2, "0")}
          </div>
        </div>
        <div className="glass rounded-2xl p-4">
          <p className="text-white font-semibold mb-1">Schreib alles auf, was du weißt.</p>
          <p className="text-xs text-slate-500 mb-3">Stichworte reichen. Nicht spicken — genau das Ringen ums Erinnern lässt es hängen bleiben.</p>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="z. B. Piaget: 4 Stadien … sensomotorisch = Objektpermanenz …"
            className="w-full h-56 rounded-xl bg-black/30 ring-1 ring-white/10 p-3 text-slate-100 text-[15px] leading-relaxed outline-none focus:ring-sky-400/40 resize-none"
          />
        </div>
        <button onClick={() => setPhase("check")} className="mt-4 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition">
          Fertig — jetzt abgleichen
        </button>
      </Rahmen>
    );
  }

  // ---------- Check (self-score) ----------
  if (phase === "check") {
    return (
      <Rahmen onHome={onHome}>
        <p className="text-slate-300 text-sm mb-3 mt-1">
          Hak ab, was du <span className="text-emerald-300 font-medium">hattest</span>. Ehrlich sein bringt dir am meisten.
        </p>
        <div className="space-y-2.5">
          {karten.map((k) => {
            const hat = gewusst.has(k.id);
            const auf = aufgedeckt.has(k.id);
            return (
              <div key={k.id} className={`rounded-2xl p-3.5 ring-1 transition-colors ${hat ? "bg-emerald-400/[0.08] ring-emerald-400/30" : "bg-white/[0.03] ring-white/10"}`}>
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => setGewusst((s) => { const n = new Set(s); n.has(k.id) ? n.delete(k.id) : n.add(k.id); return n; })}
                    className={`mt-0.5 shrink-0 w-6 h-6 rounded-lg grid place-items-center ring-1 transition ${hat ? "bg-emerald-500 text-white ring-emerald-400" : "bg-white/5 text-transparent ring-white/20"}`}
                    aria-label="gewusst"
                  >
                    <Icon name="check" size={14} strokeWidth={3} />
                  </button>
                  <div className="flex-1">
                    <p className="text-[15px] text-slate-100 leading-snug"><RichText text={k.vorderseite} /></p>
                    {auf && <p className="mt-1.5 text-sm text-violet-200 leading-relaxed"><RichText text={k.rueckseite} /></p>}
                  </div>
                  <button onClick={() => setAufgedeckt((s) => { const n = new Set(s); n.has(k.id) ? n.delete(k.id) : n.add(k.id); return n; })}
                    className="shrink-0 text-xs text-slate-500 hover:text-slate-300 underline">
                    {auf ? "zu" : "Lösung"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 sticky bottom-3">
          <button onClick={auswerten} className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition shadow-lg shadow-emerald-900/30">
            Auswerten ({gewusst.size}/{karten.length})
          </button>
        </div>
      </Rahmen>
    );
  }

  // ---------- Ergebnis ----------
  const quote = karten.length ? Math.round((gewusst.size / karten.length) * 100) : 0;
  return (
    <Rahmen onHome={onHome}>
      <div className="glass rounded-3xl p-7 text-center mt-8 animate-pop">
        <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/25 to-sky-400/20 text-emerald-300 mb-3">
          <Icon name="pen" size={28} />
        </span>
        <p className="text-white text-xl font-display font-semibold">{KAPITEL_TITEL[kap]}</p>
        <p className="text-5xl font-display font-semibold text-gradient mt-2">{quote}%</p>
        <p className="text-slate-400 mt-1">{gewusst.size} von {karten.length} aus dem Kopf gewusst</p>
        <p className="text-xs text-slate-600 mt-3 leading-relaxed">
          Was du nicht hattest, plant die App gezielt für die nächsten Wiederholungen ein.
        </p>
        <button onClick={beenden} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition">{onComplete ? "Weiter" : "Fertig"}</button>
      </div>
    </Rahmen>
  );
}

function Rahmen({ children, onHome }: { children: React.ReactNode; onHome: () => void }) {
  return (
    <div className="mx-auto max-w-md px-4 pb-12">
      <header className="pt-5 pb-2 flex items-center gap-3">
        <button onClick={onHome} className="rounded-xl glass w-9 h-9 grid place-items-center text-slate-300 active:scale-90 transition" aria-label="Zurück">
          <Icon name="arrowLeft" size={18} />
        </button>
        <span className="text-sm text-slate-500 font-medium">Brain-Dump</span>
      </header>
      {children}
    </div>
  );
}
