import { useState } from "react";
import type { Fortschritt } from "../types";
import type { UebungFilter } from "../lib/auswahl";
import { alleFragen, alleKarten, kapitelFortschritt } from "../lib/auswahl";
import { fokusFaellig } from "../lib/lernplan";
import { fehlerHeuteIds } from "../lib/fortschritt";
import { tageBisTest, testDatum, setzeTestDatum, TEST_DATUM_STANDARD } from "../lib/datum";
import Icon from "../components/Icon";

interface Props {
  fortschritt: Fortschritt;
  onFokus: () => void;
  onBlitz: () => void;
  onBrainDump: () => void;
  onKombi: () => void;
  onUebung: (filter: UebungFilter) => void;
  onKarten: (kapitel?: number) => void;
  onPruefung: () => void;
  onReset: () => void;
}

export default function Home({ fortschritt, onFokus, onBlitz, onBrainDump, onKombi, onUebung, onKarten, onPruefung, onReset }: Props) {
  const fragen = alleFragen();
  const karten = alleKarten();
  const gesamtItems = fragen.length + karten.length;
  const gemeistert =
    fragen.filter((f) => fortschritt.stand[f.id]?.letzteRichtig === true).length +
    karten.filter((k) => fortschritt.stand[k.id]?.letzteRichtig === true).length;
  const prozent = gesamtItems ? Math.round((gemeistert / gesamtItems) * 100) : 0;
  const fokusN = fokusFaellig(fortschritt);
  const fehler = fehlerHeuteIds(fortschritt).length;
  const kapitel = kapitelFortschritt(fortschritt);

  const [termin, setTermin] = useState<string>(() => testDatum());
  const [terminOffen, setTerminOffen] = useState(false);
  // haengt an `termin`, damit der Countdown nach dem Aendern sofort stimmt
  const tage = (() => { void termin; return tageBisTest(); })();

  return (
    <div className="mx-auto max-w-md px-4 pb-12">
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
              <span className="text-slate-300 mb-1">{tage === 0 ? "— heute ist Test!" : tage === 1 ? "Tag bis zum Test" : "Tage bis zum Test"}</span>
            </div>
          ) : (
            <p className="text-white font-semibold">Termin liegt in der Vergangenheit — bitte anpassen.</p>
          )}

          <button
            onClick={() => setTerminOffen((o) => !o)}
            className="mt-1.5 text-xs text-slate-500 hover:text-slate-300 transition inline-flex items-center gap-1"
          >
            {new Date(termin).toLocaleDateString("de-AT", { day: "2-digit", month: "long", year: "numeric" })} · Termin ändern
          </button>

          {terminOffen && (
            <div className="mt-2 flex items-center gap-2 animate-fade-up">
              <input
                type="date"
                value={termin}
                onChange={(e) => { setTermin(e.target.value); setzeTestDatum(e.target.value); }}
                className="rounded-lg bg-black/30 ring-1 ring-white/15 px-2.5 py-1.5 text-sm text-slate-100 outline-none focus:ring-sky-400/50"
              />
              <button
                onClick={() => { setzeTestDatum(""); setTermin(TEST_DATUM_STANDARD); }}
                className="text-xs text-slate-500 hover:text-slate-300"
              >
                zurücksetzen
              </button>
            </div>
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

      {/* Heute – geführt */}
      <h2 className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-2.5 px-1">Heute</h2>

      {/* Kombi = Flaggschiff */}
      <button onClick={onKombi} className="relative overflow-hidden w-full mb-3 rounded-2xl p-4 text-left active:scale-[0.99] transition bg-gradient-to-r from-fuchsia-500/90 to-violet-500/90 ring-1 ring-white/10 shadow-lg shadow-fuchsia-900/30">
        <div className="absolute -right-6 -bottom-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex items-center gap-3">
          <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/15 text-white shrink-0"><Icon name="layers" size={22} /></span>
          <div>
            <p className="font-semibold text-white">Kombi-Session</p>
            <p className="text-sm text-white/80">Aufwärmen → Kern → Vertiefen · dein Plan</p>
          </div>
          <span className="ml-auto text-white/85"><Icon name="arrowRight" size={20} /></span>
        </div>
      </button>

      <button onClick={onFokus} className="glass w-full mb-3 rounded-2xl p-3.5 text-left active:scale-[0.98] transition hover:bg-white/[0.07] flex items-center gap-3">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/25 to-teal-400/25 text-emerald-200 shrink-0"><Icon name="sparkles" size={19} /></span>
        <div>
          <p className="font-semibold text-slate-100 text-[15px]">Fokus-Session</p>
          <p className="text-xs text-slate-500">{fokusN > 0 ? `${Math.min(fokusN, 24)} Einheiten · bis sie sitzen` : "alles wiederholt"}</p>
        </div>
        <span className="ml-auto text-slate-600"><Icon name="chevronRight" size={18} /></span>
      </button>

      {fehler > 0 && (
        <button onClick={() => onUebung({ nurFehler: true })} className="w-full mb-3 rounded-2xl p-3.5 text-left active:scale-[0.99] transition bg-gradient-to-br from-rose-500/15 to-amber-500/10 ring-1 ring-rose-400/30 flex items-center gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-rose-500/20 text-rose-300 shrink-0"><Icon name="target" size={19} /></span>
          <div>
            <p className="font-semibold text-rose-100 text-[15px]">Fehler-Fokus</p>
            <p className="text-xs text-rose-200/70">{fehler} von heute nochmal</p>
          </div>
          <span className="ml-auto text-rose-300/60"><Icon name="chevronRight" size={18} /></span>
        </button>
      )}

      {/* Methoden */}
      <h2 className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-2.5 mt-6 px-1">Methoden</h2>
      <div className="grid grid-cols-2 gap-3">
        <Kachel icon="bolt" farbe="from-amber-400/25 to-rose-400/25 text-amber-200" titel="Blitz" unterzeile="Speed-Abruf · Rekord" onClick={onBlitz} />
        <Kachel icon="pen" farbe="from-sky-400/25 to-cyan-400/25 text-sky-200" titel="Brain-Dump" unterzeile="frei erinnern" onClick={onBrainDump} />
        <Kachel icon="book" farbe="from-violet-400/25 to-fuchsia-400/25 text-violet-200" titel="Karteikarten" unterzeile="klassisch pauken" onClick={() => onKarten()} />
        <Kachel icon="timer" farbe="from-indigo-400/25 to-violet-400/25 text-indigo-200" titel="Prüfung" unterzeile="Simulation + Timer" onClick={onPruefung} />
      </div>

      {/* Fragen üben */}
      <h2 className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-2.5 mt-6 px-1">Fragen üben</h2>
      <button onClick={() => onUebung({})} className="glass w-full rounded-2xl p-4 text-left active:scale-[0.98] transition hover:bg-white/[0.07] flex items-center gap-3">
        <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400/25 to-violet-400/25 text-sky-200 shrink-0"><Icon name="shuffle" size={21} /></span>
        <div>
          <div className="font-semibold text-slate-100">Alle Fragen</div>
          <div className="text-xs text-slate-500">4-Aussagen-Format · falsche zuerst</div>
        </div>
        <span className="ml-auto text-slate-600"><Icon name="chevronRight" size={20} /></span>
      </button>
      <div className="grid grid-cols-3 gap-2.5 mt-3">
        <Kachel icon="brain" farbe="from-white/10 to-white/10 text-slate-200" titel="Teil A" unterzeile={`${fragen.filter((f) => f.teil === "A").length} · Skript`} onClick={() => onUebung({ teil: "A" })} />
        <Kachel icon="chart" farbe="from-white/10 to-white/10 text-slate-200" titel="Teil B" unterzeile={`${fragen.filter((f) => f.teil === "B").length} · Methodik`} onClick={() => onUebung({ teil: "B" })} />
        <Kachel icon="book" farbe="from-white/10 to-white/10 text-slate-200" titel="Teil C" unterzeile={`${fragen.filter((f) => f.teil === "C").length} · Englisch`} onClick={() => onUebung({ teil: "C" })} />
      </div>

      {/* Kapitel */}
      <h2 className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-2.5 mt-6 px-1">Kapitel</h2>
      <div className="glass rounded-2xl divide-y divide-white/5 overflow-hidden">
        {kapitel.map((k) => (
          <button key={k.kapitel} onClick={() => onKarten(k.kapitel)} disabled={k.gesamt === 0}
            className="w-full flex items-center gap-3 p-3 text-left active:bg-white/[0.04] transition disabled:opacity-40">
            <span className="grid place-items-center w-7 h-7 rounded-lg bg-white/10 text-slate-300 text-xs font-bold shrink-0">{k.kapitel}</span>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-sm text-slate-200 truncate">{k.titel}</span>
                <span className="text-xs text-slate-500 tabular-nums shrink-0">{k.prozent}%</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" style={{ width: `${k.prozent}%` }} />
              </div>
            </div>
          </button>
        ))}
      </div>

      <button onClick={() => { if (confirm("Wirklich den ganzen Fortschritt löschen?")) onReset(); }}
        className="mt-6 mx-auto block text-xs text-slate-700 hover:text-slate-500 transition">
        Fortschritt zurücksetzen
      </button>
    </div>
  );
}

function Kachel({ icon, farbe, titel, unterzeile, onClick }: { icon: Parameters<typeof Icon>[0]["name"]; farbe: string; titel: string; unterzeile: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="glass rounded-2xl p-4 text-left active:scale-[0.97] transition hover:bg-white/[0.07]">
      <span className={`grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br ${farbe} mb-3`}>
        <Icon name={icon} size={20} />
      </span>
      <div className="font-semibold text-slate-100">{titel}</div>
      <div className="text-xs text-slate-500 mt-0.5">{unterzeile}</div>
    </button>
  );
}
