import { useEffect, useMemo, useRef, useState } from "react";
import type { Teil } from "../types";
import type { Antworten } from "../lib/scoring";
import { bewerteFrage } from "../lib/scoring";
import { fuerPruefung, PRUEFUNG_PLAN, PLATZ_GRENZE_PROZENT } from "../lib/auswahl";
import FrageCard from "../components/FrageCard";
import Icon from "../components/Icon";

interface Props {
  onAntwort: (frageId: string, richtig: boolean) => void;
  onHome: () => void;
}

const LEER: Antworten = [null, null, null, null];
const SEKUNDEN_PRO_FRAGE =
  (PRUEFUNG_PLAN.minuten * 60) / (PRUEFUNG_PLAN.A + PRUEFUNG_PLAN.B + PRUEFUNG_PLAN.C); // 150 s

export default function Pruefung({ onAntwort, onHome }: Props) {
  const satz = useMemo(() => fuerPruefung(), []);
  const gesamtSekunden = Math.max(60, Math.round(satz.fragen.length * SEKUNDEN_PRO_FRAGE));

  const [index, setIndex] = useState(0);
  const [antwortenMap, setAntwortenMap] = useState<Record<string, Antworten>>({});
  const [rest, setRest] = useState(gesamtSekunden);
  const [abgegeben, setAbgegeben] = useState(false);
  const abgegebenRef = useRef(false);

  useEffect(() => {
    if (abgegeben) return;
    const t = setInterval(() => setRest((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(t);
  }, [abgegeben]);

  useEffect(() => {
    if (rest === 0 && !abgegeben) abgeben();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rest, abgegeben]);

  function abgeben() {
    if (abgegebenRef.current) return;
    abgegebenRef.current = true;
    for (const f of satz.fragen) {
      const { alleKorrekt } = bewerteFrage(f, antwortenMap[f.id] ?? LEER);
      onAntwort(f.id, alleKorrekt);
    }
    setAbgegeben(true);
  }

  if (satz.fragen.length === 0) {
    return (
      <div className="mx-auto max-w-md px-4 pt-20 text-center">
        <p className="text-slate-300">Für die Prüfung sind noch keine Fragen vorhanden.</p>
        <button onClick={onHome} className="mt-4 rounded-xl bg-white/10 px-5 py-2.5 text-slate-100">Zurück</button>
      </div>
    );
  }

  if (abgegeben) {
    return <Auswertung satz={satz} antwortenMap={antwortenMap} onHome={onHome} />;
  }

  const frage = satz.fragen[index];
  const antworten = antwortenMap[frage.id] ?? LEER;
  const beantwortet = satz.fragen.filter((f) => (antwortenMap[f.id] ?? LEER).every((x) => x !== null)).length;
  const min = Math.floor(rest / 60);
  const sek = rest % 60;
  const knapp = rest <= 60;
  const progress = Math.round((beantwortet / satz.fragen.length) * 100);

  function setzeAntwort(i: number, wert: boolean) {
    setAntwortenMap((m) => {
      const alt = m[frage.id] ?? LEER;
      const neu = [...alt] as Antworten;
      neu[i] = wert;
      return { ...m, [frage.id]: neu };
    });
  }

  return (
    <div className="mx-auto max-w-md px-4 pb-12">
      <header className="pt-4 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => { if (confirm("Prüfung abbrechen? Dein Zwischenstand geht verloren.")) onHome(); }}
            className="rounded-xl glass w-9 h-9 grid place-items-center text-slate-300 active:scale-90 transition"
            aria-label="Abbrechen"
          >
            <Icon name="x" size={18} />
          </button>
          <div className="flex-1">
            <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Prüfungs-Simulation</p>
            <p className="text-sm text-slate-300 tabular-nums">{beantwortet} / {satz.fragen.length} beantwortet</p>
          </div>
          <div className={`inline-flex items-center gap-1.5 font-mono font-bold tabular-nums rounded-xl px-3 py-2 ${knapp ? "bg-rose-500/20 text-rose-300 ring-1 ring-rose-400/40 animate-pulse" : "glass text-slate-200"}`}>
            <Icon name="timer" size={15} />
            {min}:{String(sek).padStart(2, "0")}
          </div>
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 transition-[width] duration-500" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <div key={frage.id} className="animate-fade-up">
        <FrageCard frage={frage} antworten={antworten} onAntwort={setzeAntwort} geprueft={false} nummer={{ aktuell: index + 1, gesamt: satz.fragen.length }} />
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="rounded-2xl glass px-4 py-3 text-slate-200 disabled:opacity-30 active:scale-95 transition"
        >
          <Icon name="arrowLeft" size={18} />
        </button>
        {index + 1 < satz.fragen.length ? (
          <button onClick={() => setIndex((i) => i + 1)} className="flex-1 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-white font-semibold active:scale-[0.98] transition inline-flex items-center justify-center gap-2">
            Weiter <Icon name="arrowRight" size={18} />
          </button>
        ) : (
          <button onClick={() => { if (confirm("Prüfung jetzt abgeben und auswerten?")) abgeben(); }} className="flex-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-white font-semibold active:scale-[0.98] transition">
            Abgeben & auswerten
          </button>
        )}
      </div>

      {index + 1 < satz.fragen.length && (
        <button onClick={() => { if (confirm("Prüfung jetzt abgeben und auswerten?")) abgeben(); }} className="mt-3 w-full text-sm text-slate-600 hover:text-slate-400 transition">
          Früher abgeben
        </button>
      )}
    </div>
  );
}

function Auswertung({
  satz,
  antwortenMap,
  onHome,
}: {
  satz: ReturnType<typeof fuerPruefung>;
  antwortenMap: Record<string, Antworten>;
  onHome: () => void;
}) {
  const teile: Teil[] = ["A", "B", "C"];
  let gesamtKorrekt = 0;
  const proTeil: Record<Teil, { korrekt: number; gesamt: number }> = {
    A: { korrekt: 0, gesamt: 0 },
    B: { korrekt: 0, gesamt: 0 },
    C: { korrekt: 0, gesamt: 0 },
  };

  for (const f of satz.fragen) {
    const { alleKorrekt } = bewerteFrage(f, antwortenMap[f.id] ?? LEER);
    proTeil[f.teil].gesamt++;
    if (alleKorrekt) { proTeil[f.teil].korrekt++; gesamtKorrekt++; }
  }

  const gesamt = satz.fragen.length;
  const prozent = Math.round((gesamtKorrekt / gesamt) * 100);
  const band =
    prozent >= 75
      ? { text: "Stark! Das liegt im Bereich, den man für einen Platz braucht.", farbe: "text-emerald-300" }
      : prozent >= 55
      ? { text: "Solide Basis — mit gezieltem Üben ist noch Luft nach oben.", farbe: "text-amber-300" }
      : { text: "Da geht noch was. Dranbleiben und die Fehler gezielt wiederholen.", farbe: "text-rose-300" };

  return (
    <div className="mx-auto max-w-md px-4 pb-12">
      <header className="pt-7 pb-4 flex items-center gap-3">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 text-amber-300"><Icon name="trophy" size={20} /></span>
        <h1 className="text-xl font-display font-semibold text-white">Auswertung</h1>
      </header>

      <div className="relative overflow-hidden rounded-3xl glass p-6 text-center animate-pop">
        <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="relative">
          <p className="text-6xl font-display font-semibold text-gradient">{prozent}%</p>
          <p className="text-slate-400 mt-1">{gesamtKorrekt} von {gesamt} komplett richtig</p>
          <p className={`mt-3 text-sm font-medium ${band.farbe}`}>{band.text}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {teile.map((t) => {
          const d = proTeil[t];
          if (d.gesamt === 0) return null;
          const p = Math.round((d.korrekt / d.gesamt) * 100);
          return (
            <div key={t} className="glass rounded-2xl p-3.5">
              <div className="flex justify-between text-sm text-slate-200 mb-2">
                <span className="font-medium">Teil {t}</span>
                <span className="tabular-nums text-slate-400">{d.korrekt}/{d.gesamt} · {p}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-400 transition-[width] duration-700" style={{ width: `${p}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-4 text-xs text-slate-400 leading-relaxed">
        <p>
          <span className="text-slate-200 font-medium">Ehrlich eingeordnet:</span> Für einen Studienplatz
          brauchst du grob die <span className="text-slate-200">Top ~18 %</span>. Ein{" "}
          <span className="text-slate-200">echter Prozentrang</span> lässt sich nur mit vielen Testpersonen
          berechnen — den haben wir hier nicht. Darum oben dein{" "}
          <span className="text-slate-200">Rohwert</span> (% komplett richtig), keine erfundene Zahl.
        </p>
        {!satz.vollstaendig && (
          <p className="mt-2">
            Diese Simulation nutzt aktuell {gesamt} statt {PRUEFUNG_PLAN.A + PRUEFUNG_PLAN.B + PRUEFUNG_PLAN.C} Fragen —
            es kommen noch welche dazu. Richtwert fürs Bestehen: über {PLATZ_GRENZE_PROZENT} % Rohwert.
          </p>
        )}
      </div>

      <button onClick={onHome} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition">
        Zur Startseite
      </button>
    </div>
  );
}
