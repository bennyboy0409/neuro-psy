import type { Fortschritt } from "../types";
import type { UebungFilter } from "../lib/auswahl";
import { alleFragen, alleKarten, faelligeKarten, kapitelFortschritt } from "../lib/auswahl";
import { fehlerHeuteIds } from "../lib/fortschritt";
import { tageBisTest } from "../lib/datum";
import Icon from "../components/Icon";

interface Props {
  fortschritt: Fortschritt;
  onUebung: (filter: UebungFilter) => void;
  onKarten: (kapitel?: number) => void;
  onPruefung: () => void;
  onReset: () => void;
}

export default function Home({ fortschritt, onUebung, onKarten, onPruefung, onReset }: Props) {
  const fragen = alleFragen();
  const karten = alleKarten();
  const gesamtItems = fragen.length + karten.length;
  const gemeistert =
    fragen.filter((f) => fortschritt.stand[f.id]?.letzteRichtig === true).length +
    karten.filter((k) => fortschritt.stand[k.id]?.letzteRichtig === true).length;
  const prozent = gesamtItems ? Math.round((gemeistert / gesamtItems) * 100) : 0;

  const faellig = faelligeKarten(fortschritt);
  const fehler = fehlerHeuteIds(fortschritt).length;
  const tage = tageBisTest();
  const kapitel = kapitelFortschritt(fortschritt);

  return (
    <div className="mx-auto max-w-md px-4 pb-12">
      {/* Kopf */}
      <header className="pt-7 pb-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display text-gradient font-semibold leading-none">Neuro</h1>
          <p className="text-xs text-slate-500 mt-1">Psychologie-Aufnahmetest · Uni Wien</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full glass px-3 py-2" title="Lern-Streak: Tage in Folge">
          <span className="text-amber-400"><Icon name="flame" size={18} /></span>
          <span className="font-bold text-amber-200 tabular-nums">{fortschritt.streak.count}</span>
        </div>
      </header>

      {/* Countdown-Hero */}
      <div className="relative overflow-hidden rounded-3xl glass p-5 mb-5">
        <div className="absolute -right-8 -top-10 w-40 h-40 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="relative">
          {tage >= 0 ? (
            <div className="flex items-end gap-2">
              <span className="text-5xl font-display font-semibold text-white leading-none">{tage}</span>
              <span className="text-slate-300 mb-1">{tage === 1 ? "Tag" : "Tage"} bis zum Test</span>
            </div>
          ) : (
            <p className="text-white font-semibold">Test-Termin vorbei — viel Erfolg gehabt!</p>
          )}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-slate-400 mb-1.5">
              <span>Gemeistert</span>
              <span className="tabular-nums">{gemeistert} / {gesamtItems}</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 transition-[width] duration-700" style={{ width: `${prozent}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Heute lernen */}
      <h2 className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-2.5 px-1">Heute lernen</h2>

      <button
        onClick={() => onKarten()}
        className="w-full mb-3 rounded-2xl p-4 text-left active:scale-[0.99] transition bg-gradient-to-r from-sky-500/90 to-cyan-500/80 ring-1 ring-white/10 shadow-lg shadow-sky-900/30"
      >
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/15 text-white shrink-0">
            <Icon name="book" size={22} />
          </span>
          <div>
            <p className="font-semibold text-white">Karteikarten</p>
            <p className="text-sm text-white/75">
              {faellig > 0 ? `${faellig} Karten heute fällig` : "alle wiederholt — stark!"}
            </p>
          </div>
          <span className="ml-auto text-white/80"><Icon name="arrowRight" size={20} /></span>
        </div>
      </button>

      {fehler > 0 && (
        <button
          onClick={() => onUebung({ nurFehler: true })}
          className="w-full mb-3 rounded-2xl p-4 text-left active:scale-[0.99] transition bg-gradient-to-br from-rose-500/15 to-amber-500/10 ring-1 ring-rose-400/30"
        >
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-rose-500/20 text-rose-300 shrink-0">
              <Icon name="target" size={20} />
            </span>
            <div>
              <p className="font-semibold text-rose-100">Fehler-Fokus</p>
              <p className="text-sm text-rose-200/70">{fehler} {fehler === 1 ? "Frage" : "Fragen"} von heute nochmal</p>
            </div>
            <span className="ml-auto text-rose-300/60"><Icon name="chevronRight" size={20} /></span>
          </div>
        </button>
      )}

      {/* Fragen üben */}
      <h2 className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-2.5 mt-6 px-1">Fragen üben</h2>
      <button
        onClick={() => onUebung({})}
        className="glass w-full rounded-2xl p-4 text-left active:scale-[0.98] transition hover:bg-white/[0.07] flex items-center gap-3"
      >
        <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400/25 to-violet-400/25 text-sky-200 shrink-0">
          <Icon name="shuffle" size={21} />
        </span>
        <div>
          <div className="font-semibold text-slate-100">Alle Fragen</div>
          <div className="text-xs text-slate-500">4-Aussagen-Format · falsche zuerst</div>
        </div>
        <span className="ml-auto text-slate-600"><Icon name="chevronRight" size={20} /></span>
      </button>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <Kachel icon="brain" titel="Teil A" unterzeile={`${fragen.filter((f) => f.teil === "A").length} · Skript`} onClick={() => onUebung({ teil: "A" })} />
        <Kachel icon="chart" titel="Teil B" unterzeile={`${fragen.filter((f) => f.teil === "B").length} · Methodik`} onClick={() => onUebung({ teil: "B" })} />
      </div>

      {/* Kapitel */}
      <h2 className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-2.5 mt-6 px-1">Kapitel</h2>
      <div className="glass rounded-2xl divide-y divide-white/5 overflow-hidden">
        {kapitel.map((k) => (
          <button
            key={k.kapitel}
            onClick={() => onKarten(k.kapitel)}
            disabled={k.gesamt === 0}
            className="w-full flex items-center gap-3 p-3 text-left active:bg-white/[0.04] transition disabled:opacity-40"
          >
            <span className="grid place-items-center w-7 h-7 rounded-lg bg-white/8 text-slate-300 text-xs font-bold shrink-0">{k.kapitel}</span>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-sm text-slate-200 truncate">{k.titel}</span>
                <span className="text-xs text-slate-500 tabular-nums shrink-0">{k.prozent}%</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-white/8 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" style={{ width: `${k.prozent}%` }} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Prüfung */}
      <button
        onClick={onPruefung}
        className="group mt-6 w-full rounded-2xl p-4 text-left active:scale-[0.99] transition bg-gradient-to-r from-indigo-500/90 to-violet-500/90 ring-1 ring-white/10 shadow-lg shadow-violet-900/40"
      >
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/15 text-white shrink-0">
            <Icon name="timer" size={22} />
          </span>
          <div>
            <p className="font-semibold text-white">Prüfung simulieren</p>
            <p className="text-sm text-white/70">Echtes Timing, Auswertung am Ende</p>
          </div>
          <span className="ml-auto text-white/80 group-active:translate-x-0.5 transition"><Icon name="arrowRight" size={20} /></span>
        </div>
      </button>

      <button
        onClick={() => { if (confirm("Wirklich den ganzen Fortschritt löschen?")) onReset(); }}
        className="mt-6 mx-auto block text-xs text-slate-700 hover:text-slate-500 transition"
      >
        Fortschritt zurücksetzen
      </button>
    </div>
  );
}

function Kachel({
  icon,
  titel,
  unterzeile,
  onClick,
}: {
  icon: Parameters<typeof Icon>[0]["name"];
  titel: string;
  unterzeile: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="glass rounded-2xl p-4 text-left active:scale-[0.97] transition hover:bg-white/[0.07]">
      <span className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 text-slate-200 mb-3">
        <Icon name={icon} size={20} />
      </span>
      <div className="font-semibold text-slate-100">{titel}</div>
      <div className="text-xs text-slate-500 mt-0.5">{unterzeile}</div>
    </button>
  );
}
