import { useEffect, useMemo, useRef, useState } from "react";
import { blitzStrom } from "../lib/lernplan";
import RichText from "../components/RichText";
import Icon from "../components/Icon";

interface Props {
  best: number;
  onFertig: (punkte: number) => void;
  onHome: () => void;
  /** Fuer den Kombi-Modus: nach dem Lauf weiterschalten. */
  onComplete?: () => void;
}

const DAUER = 45;

export default function Blitz({ best, onFertig, onHome, onComplete }: Props) {
  const strom = useMemo(() => blitzStrom(), []);
  const [phase, setPhase] = useState<"intro" | "spiel" | "ende">("intro");
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [rest, setRest] = useState(DAUER);
  const [richtig, setRichtig] = useState(0);
  const [gesamt, setGesamt] = useState(0);
  const [flash, setFlash] = useState<null | "gut" | "schlecht">(null);
  const beendetRef = useRef(false);

  useEffect(() => {
    if (phase !== "spiel") return;
    const t = setInterval(() => setRest((r) => Math.max(0, r - 0.1)), 100);
    return () => clearInterval(t);
  }, [phase]);

  useEffect(() => {
    if (phase === "spiel" && rest <= 0 && !beendetRef.current) {
      beendetRef.current = true;
      onFertig(score);
      setPhase("ende");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rest, phase]);

  function multiplikator(c: number) {
    return Math.min(5, 1 + Math.floor(c / 4));
  }

  function antwort(wahl: boolean) {
    if (phase !== "spiel") return;
    const item = strom[idx];
    const korrekt = wahl === item.istRichtig;
    if (korrekt) {
      const mult = multiplikator(combo);
      setScore((s) => s + 10 * mult);
      setCombo((c) => {
        const nc = c + 1;
        setMaxCombo((m) => Math.max(m, nc));
        return nc;
      });
      setRichtig((r) => r + 1);
      setFlash("gut");
    } else {
      setCombo(0);
      setRest((r) => Math.max(0.1, r - 2));
      setFlash("schlecht");
    }
    setGesamt((g) => g + 1);
    setIdx((i) => (i + 1) % strom.length);
    setTimeout(() => setFlash(null), 150);
  }

  // ---------- Intro ----------
  if (phase === "intro") {
    return (
      <Rahmen onHome={onHome}>
        <div className="glass rounded-3xl p-7 text-center mt-8 animate-pop">
          <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/25 to-rose-400/20 text-amber-300 mb-4">
            <Icon name="bolt" size={30} />
          </span>
          <h1 className="text-2xl font-display font-semibold text-white">Blitz</h1>
          <p className="text-slate-400 mt-2 leading-relaxed text-sm">
            {DAUER} Sekunden. Aussage lesen, <span className="text-emerald-300">Richtig</span> oder{" "}
            <span className="text-rose-300">Falsch</span> — so schnell und so viele wie möglich.
            Serie = <span className="text-amber-300">mehr Punkte</span>.
          </p>
          {best > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-amber-200">
              <Icon name="trophy" size={16} /> Rekord: <span className="font-bold tabular-nums">{best}</span>
            </div>
          )}
          <button
            onClick={() => setPhase("spiel")}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-amber-500 to-rose-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition"
          >
            Los geht's
          </button>
        </div>
      </Rahmen>
    );
  }

  // ---------- Ende ----------
  if (phase === "ende") {
    const rekord = score >= best && score > 0;
    const quote = gesamt > 0 ? Math.round((richtig / gesamt) * 100) : 0;
    return (
      <Rahmen onHome={onHome}>
        <div className="glass rounded-3xl p-7 text-center mt-8 animate-pop">
          {rekord ? (
            <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/30 to-fuchsia-400/25 text-amber-300 mb-3">
              <Icon name="trophy" size={30} />
            </span>
          ) : (
            <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-white/10 text-amber-300 mb-3">
              <Icon name="bolt" size={30} />
            </span>
          )}
          {rekord && <p className="text-amber-300 text-sm font-semibold mb-1">Neuer Rekord!</p>}
          <p className="text-5xl font-display font-semibold text-gradient">{score}</p>
          <p className="text-slate-400 mt-1">Punkte</p>
          <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
            <Stat label="Genauigkeit" wert={`${quote}%`} />
            <Stat label="Beste Serie" wert={`${maxCombo}`} />
            <Stat label="Rekord" wert={`${Math.max(best, score)}`} />
          </div>
          {onComplete ? (
            <button onClick={onComplete} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-white font-semibold active:scale-[0.98] transition">
              Weiter
            </button>
          ) : (
            <div className="mt-5 flex gap-3">
              <button onClick={onHome} className="flex-1 rounded-2xl glass px-4 py-3 text-slate-200 font-medium active:scale-95 transition">Zurück</button>
              <button
                onClick={() => { setScore(0); setCombo(0); setMaxCombo(0); setRest(DAUER); setRichtig(0); setGesamt(0); setIdx(0); beendetRef.current = false; setPhase("spiel"); }}
                className="flex-1 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-500 px-4 py-3 text-white font-semibold active:scale-[0.98] transition"
              >
                Nochmal
              </button>
            </div>
          )}
        </div>
      </Rahmen>
    );
  }

  // ---------- Spiel ----------
  const item = strom[idx];
  const mult = multiplikator(combo);

  return (
    <Rahmen onHome={onHome}>
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-1">
          <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className={`h-full rounded-full transition-[width] duration-100 ${rest <= 8 ? "bg-rose-500" : "bg-gradient-to-r from-amber-400 to-rose-400"}`}
              style={{ width: `${(rest / DAUER) * 100}%` }}
            />
          </div>
        </div>
        <span className={`font-mono font-bold tabular-nums text-lg ${rest <= 8 ? "text-rose-300" : "text-slate-200"}`}>{Math.ceil(rest)}s</span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl font-display font-bold text-white tabular-nums">{score}</span>
        {combo >= 2 ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-3 py-1 text-amber-300 font-bold animate-pop">
            <Icon name="flame" size={15} /> Serie {combo} · ×{mult}
          </span>
        ) : (
          <span className="text-sm text-slate-500">Serie startet ab 2 richtig</span>
        )}
      </div>

      <div
        className={`glass rounded-[26px] p-6 min-h-[210px] flex flex-col justify-center ring-2 transition-colors duration-150 ${
          flash === "gut" ? "ring-emerald-400/70" : flash === "schlecht" ? "ring-rose-400/70" : "ring-transparent"
        }`}
      >
        <p className="text-xs text-slate-500 mb-3 leading-snug">
          <RichText text={item.kontext} />
        </p>
        <p className="text-[19px] leading-snug font-semibold text-white">
          <RichText text={item.text} />
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button onClick={() => antwort(true)} className="rounded-2xl bg-emerald-500/90 px-4 py-4 text-white font-bold text-lg active:scale-95 transition">Richtig</button>
        <button onClick={() => antwort(false)} className="rounded-2xl bg-rose-500/90 px-4 py-4 text-white font-bold text-lg active:scale-95 transition">Falsch</button>
      </div>
    </Rahmen>
  );
}

function Stat({ label, wert }: { label: string; wert: string }) {
  return (
    <div className="rounded-xl bg-white/5 p-2.5">
      <div className="text-lg font-bold text-slate-100 tabular-nums">{wert}</div>
      <div className="text-[11px] text-slate-500">{label}</div>
    </div>
  );
}

function Rahmen({ children, onHome }: { children: React.ReactNode; onHome: () => void }) {
  return (
    <div className="mx-auto max-w-md px-4 pb-12">
      <header className="pt-5 pb-3 flex items-center gap-3">
        <button onClick={onHome} className="rounded-xl glass w-9 h-9 grid place-items-center text-slate-300 active:scale-90 transition" aria-label="Zurück">
          <Icon name="arrowLeft" size={18} />
        </button>
        <span className="text-sm text-slate-500 font-medium">Blitz</span>
      </header>
      {children}
    </div>
  );
}
