import { useEffect, useMemo, useRef, useState } from "react";
import type { Teil } from "../types";
import type { Antworten } from "../lib/scoring";
import { bewerteFrage } from "../lib/scoring";
import { fuerPruefung, PRUEFUNG_PLAN, PLATZ_GRENZE_PROZENT } from "../lib/auswahl";
import FrageCard from "../components/FrageCard";

interface Props {
  onAntwort: (frageId: string, richtig: boolean) => void;
  onHome: () => void;
}

const LEER: Antworten = [null, null, null, null];
const SEKUNDEN_PRO_FRAGE = (PRUEFUNG_PLAN.minuten * 60) / (PRUEFUNG_PLAN.A + PRUEFUNG_PLAN.B + PRUEFUNG_PLAN.C); // = 150 s

export default function Pruefung({ onAntwort, onHome }: Props) {
  const satz = useMemo(() => fuerPruefung(), []);
  const gesamtSekunden = Math.max(60, Math.round(satz.fragen.length * SEKUNDEN_PRO_FRAGE));

  const [index, setIndex] = useState(0);
  const [antwortenMap, setAntwortenMap] = useState<Record<string, Antworten>>({});
  const [rest, setRest] = useState(gesamtSekunden);
  const [abgegeben, setAbgegeben] = useState(false);
  const abgegebenRef = useRef(false);

  // Timer: jede Sekunde runterzählen …
  useEffect(() => {
    if (abgegeben) return;
    const t = setInterval(() => setRest((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(t);
  }, [abgegeben]);

  // … und bei 0 automatisch abgeben (sauber getrennt vom Updater).
  useEffect(() => {
    if (rest === 0 && !abgegeben) abgeben();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rest, abgegeben]);

  function abgeben() {
    if (abgegebenRef.current) return;
    abgegebenRef.current = true;
    // Fortschritt für jede Frage verbuchen
    for (const f of satz.fragen) {
      const { alleKorrekt } = bewerteFrage(f, antwortenMap[f.id] ?? LEER);
      onAntwort(f.id, alleKorrekt);
    }
    setAbgegeben(true);
  }

  if (satz.fragen.length === 0) {
    return (
      <div className="mx-auto max-w-md px-4 pt-16 text-center">
        <p className="text-slate-200">Für die Prüfung sind noch keine Fragen vorhanden.</p>
        <button onClick={onHome} className="mt-4 rounded-xl bg-slate-700 px-4 py-2 text-slate-100">
          Zurück
        </button>
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

  function setzeAntwort(i: number, wert: boolean) {
    setAntwortenMap((m) => {
      const alt = m[frage.id] ?? LEER;
      const neu = [...alt] as Antworten;
      neu[i] = wert;
      return { ...m, [frage.id]: neu };
    });
  }

  return (
    <div className="mx-auto max-w-md px-4 pb-10">
      <header className="pt-4 pb-3 flex items-center gap-3">
        <button
          onClick={() => {
            if (confirm("Prüfung abbrechen? Dein Zwischenstand geht verloren.")) onHome();
          }}
          className="rounded-lg bg-slate-800 ring-1 ring-slate-700 w-9 h-9 grid place-items-center text-slate-300"
          aria-label="Abbrechen"
        >
          ✕
        </button>
        <div>
          <p className="text-xs text-slate-400">Prüfungs-Simulation</p>
          <p className="text-sm text-slate-200">{beantwortet}/{satz.fragen.length} beantwortet</p>
        </div>
        <div
          className={`ml-auto font-mono font-bold text-lg tabular-nums rounded-lg px-3 py-1.5 ring-1 ${
            knapp ? "bg-rose-500/20 text-rose-300 ring-rose-500/40" : "bg-slate-800 text-slate-200 ring-slate-700"
          }`}
        >
          {min}:{String(sek).padStart(2, "0")}
        </div>
      </header>

      <FrageCard
        frage={frage}
        antworten={antworten}
        onAntwort={setzeAntwort}
        geprueft={false}
        nummer={{ aktuell: index + 1, gesamt: satz.fragen.length }}
      />

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="rounded-xl bg-slate-800 ring-1 ring-slate-700 px-4 py-3 text-slate-200 disabled:opacity-40"
        >
          ←
        </button>
        {index + 1 < satz.fragen.length ? (
          <button
            onClick={() => setIndex((i) => i + 1)}
            className="flex-1 rounded-xl bg-sky-500 px-4 py-3 text-white font-semibold active:bg-sky-600"
          >
            Weiter
          </button>
        ) : (
          <button
            onClick={() => {
              if (confirm("Prüfung jetzt abgeben und auswerten?")) abgeben();
            }}
            className="flex-1 rounded-xl bg-emerald-500 px-4 py-3 text-white font-semibold active:bg-emerald-600"
          >
            Abgeben
          </button>
        )}
      </div>

      {index + 1 < satz.fragen.length && (
        <button
          onClick={() => {
            if (confirm("Prüfung jetzt abgeben und auswerten?")) abgeben();
          }}
          className="mt-3 w-full text-sm text-slate-400 hover:text-slate-200"
        >
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
    if (alleKorrekt) {
      proTeil[f.teil].korrekt++;
      gesamtKorrekt++;
    }
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
    <div className="mx-auto max-w-md px-4 pb-10">
      <header className="pt-6 pb-4">
        <h1 className="text-xl font-bold text-slate-100">Auswertung</h1>
      </header>

      <div className="rounded-2xl bg-gradient-to-br from-sky-500/15 to-violet-500/15 ring-1 ring-slate-700/60 p-5 text-center">
        <p className="text-5xl font-extrabold text-white">{prozent} %</p>
        <p className="text-slate-300 mt-1">
          {gesamtKorrekt} von {gesamt} Fragen komplett richtig
        </p>
        <p className={`mt-3 text-sm font-medium ${band.farbe}`}>{band.text}</p>
      </div>

      {/* Pro Teil */}
      <div className="mt-4 space-y-2">
        {teile.map((t) => {
          const d = proTeil[t];
          if (d.gesamt === 0) return null;
          const p = Math.round((d.korrekt / d.gesamt) * 100);
          return (
            <div key={t} className="rounded-xl bg-slate-800/60 ring-1 ring-slate-700/60 p-3">
              <div className="flex justify-between text-sm text-slate-200 mb-1.5">
                <span>Teil {t}</span>
                <span>
                  {d.korrekt}/{d.gesamt} ({p} %)
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                <div className="h-full bg-sky-400" style={{ width: `${p}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Ehrlicher Hinweis */}
      <div className="mt-4 rounded-xl bg-slate-800/40 ring-1 ring-slate-700/50 p-3.5 text-xs text-slate-400 leading-relaxed">
        <p>
          <span className="text-slate-300 font-medium">Ehrlich eingeordnet:</span> Für einen
          Studienplatz brauchst du grob die <span className="text-slate-200">Top ~18 %</span> aller
          Teilnehmenden. Ein <span className="text-slate-200">echter Prozentrang</span> lässt sich
          aber nur mit vielen Testpersonen berechnen — den haben wir hier nicht. Darum siehst du
          oben deinen <span className="text-slate-200">Rohwert</span> (% komplett richtig), nicht
          einen erfundenen Rang.
        </p>
        {!satz.vollstaendig && (
          <p className="mt-2">
            Hinweis: Diese Simulation nutzt aktuell {gesamt} statt der geplanten{" "}
            {PRUEFUNG_PLAN.A + PRUEFUNG_PLAN.B + PRUEFUNG_PLAN.C} Fragen — es kommen noch welche
            dazu. Grober Richtwert fürs Bestehen: über {PLATZ_GRENZE_PROZENT} % Rohwert.
          </p>
        )}
      </div>

      <button
        onClick={onHome}
        className="mt-5 w-full rounded-xl bg-violet-500 px-4 py-3 text-white font-semibold active:bg-violet-600"
      >
        Zur Startseite
      </button>
    </div>
  );
}
