import type { Fortschritt } from "../types";
import type { UebungFilter } from "../lib/auswahl";
import { alleFragen } from "../lib/auswahl";
import { fehlerHeuteIds } from "../lib/fortschritt";
import { tageBisTest } from "../lib/datum";

interface Props {
  fortschritt: Fortschritt;
  onUebung: (filter: UebungFilter) => void;
  onPruefung: () => void;
  onReset: () => void;
}

export default function Home({ fortschritt, onUebung, onPruefung, onReset }: Props) {
  const fragen = alleFragen();
  const anzahlA = fragen.filter((f) => f.teil === "A").length;
  const anzahlB = fragen.filter((f) => f.teil === "B").length;
  const geloest = fragen.filter(
    (f) => fortschritt.stand[f.id]?.letzteRichtig === true
  ).length;
  const fehler = fehlerHeuteIds(fortschritt).length;
  const tage = tageBisTest();

  return (
    <div className="mx-auto max-w-md px-4 pb-10">
      {/* Kopf */}
      <header className="pt-6 pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-100">Psycho-Trainer</h1>
          <p className="text-xs text-slate-400">Aufnahmetest Psychologie · Uni Wien</p>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-full bg-orange-500/15 ring-1 ring-orange-500/30 px-3 py-1.5"
          title="Lern-Streak: Tage in Folge"
        >
          <span className="text-lg leading-none">🔥</span>
          <span className="font-bold text-orange-300">{fortschritt.streak.count}</span>
        </div>
      </header>

      {/* Countdown */}
      <div className="rounded-2xl bg-gradient-to-br from-sky-500/15 to-violet-500/15 ring-1 ring-slate-700/60 p-4 mb-5">
        {tage >= 0 ? (
          <p className="text-slate-200">
            <span className="text-3xl font-extrabold text-white">{tage}</span>{" "}
            <span className="text-slate-300">
              {tage === 1 ? "Tag" : "Tage"} bis zum Test
            </span>
          </p>
        ) : (
          <p className="text-slate-200 font-semibold">Test-Termin vorbei — viel Erfolg gehabt! 🍀</p>
        )}
        <p className="mt-1 text-xs text-slate-400">
          {geloest} von {fragen.length} Fragen zuletzt richtig gelöst
        </p>
      </div>

      {/* Fehler-Fokus (nur wenn heute Fehler) */}
      {fehler > 0 && (
        <button
          onClick={() => onUebung({ nurFehler: true })}
          className="w-full mb-4 rounded-2xl bg-rose-500/15 ring-1 ring-rose-500/40 p-4 text-left active:scale-[0.99] transition"
        >
          <p className="font-semibold text-rose-200">🎯 Fehler-Fokus</p>
          <p className="text-sm text-rose-200/80">
            {fehler} {fehler === 1 ? "Frage" : "Fragen"} von heute nochmal — das bringt gerade am meisten.
          </p>
        </button>
      )}

      {/* Üben */}
      <h2 className="text-sm font-semibold text-slate-300 mb-2">Üben</h2>
      <div className="grid grid-cols-2 gap-3 mb-5">
        <ModusKachel
          titel="Alle Fragen"
          unterzeile="gemischt"
          emoji="🧠"
          onClick={() => onUebung({})}
        />
        <ModusKachel
          titel="Teil A"
          unterzeile={`${anzahlA} Fragen · Skript`}
          emoji="📚"
          onClick={() => onUebung({ teil: "A" })}
        />
        <ModusKachel
          titel="Teil B"
          unterzeile={`${anzahlB} Fragen · Methodik`}
          emoji="📊"
          onClick={() => onUebung({ teil: "B" })}
        />
        <ModusKachel
          titel="Prüfung"
          unterzeile="Simulation + Timer"
          emoji="⏱️"
          onClick={onPruefung}
          akzent
        />
      </div>

      <p className="text-xs text-slate-500 text-center leading-relaxed">
        Alle {fragen.length} Fragen sind derzeit{" "}
        <span className="text-emerald-400">offizielle Beispielfragen</span> der Uni
        Wien. Weitere Übungsfragen kommen in den nächsten Schritten dazu.
      </p>

      <button
        onClick={() => {
          if (confirm("Wirklich den ganzen Fortschritt löschen?")) onReset();
        }}
        className="mt-6 mx-auto block text-xs text-slate-600 hover:text-slate-400"
      >
        Fortschritt zurücksetzen
      </button>
    </div>
  );
}

function ModusKachel({
  titel,
  unterzeile,
  emoji,
  onClick,
  akzent,
}: {
  titel: string;
  unterzeile: string;
  emoji: string;
  onClick: () => void;
  akzent?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl p-4 text-left active:scale-[0.98] transition ring-1 ${
        akzent
          ? "bg-violet-500/15 ring-violet-500/40"
          : "bg-slate-800/60 ring-slate-700/60"
      }`}
    >
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="font-semibold text-slate-100">{titel}</div>
      <div className="text-xs text-slate-400">{unterzeile}</div>
    </button>
  );
}
