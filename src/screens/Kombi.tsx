import { useMemo, useState } from "react";
import type { Fortschritt } from "../types";
import { kapitelFortschritt, KAPITEL_TITEL } from "../lib/auswahl";
import Icon from "../components/Icon";
import Blitz from "./Blitz";
import Fokus from "./Fokus";
import BrainDump from "./BrainDump";

interface Props {
  fortschritt: Fortschritt;
  onAntwort: (frageId: string, richtig: boolean) => void;
  onKarte: (id: string, qualitaet: number) => void;
  onBlitzFertig: (punkte: number) => void;
  onHome: () => void;
}

interface Config {
  blitz: boolean;
  fokus: boolean;
  fokusN: number;
  dump: boolean;
  dumpKap: number;
}

export default function Kombi({ fortschritt, onAntwort, onKarte, onBlitzFertig, onHome }: Props) {
  // Schwächstes Kapitel als sinnvolle Brain-Dump-Vorgabe.
  const schwaechstes = useMemo(() => {
    const ks = kapitelFortschritt(fortschritt).filter((k) => k.gesamt > 0);
    ks.sort((a, b) => a.prozent - b.prozent || b.gesamt - a.gesamt);
    return ks[0]?.kapitel ?? 1;
  }, []);

  const [cfg, setCfg] = useState<Config>({ blitz: true, fokus: true, fokusN: 16, dump: true, dumpKap: schwaechstes });
  const [phase, setPhase] = useState<"config" | "run" | "done">("config");
  const [blockIndex, setBlockIndex] = useState(0);

  const sequenz = useMemo(() => {
    const s: Array<{ t: "blitz" | "fokus" | "dump" }> = [];
    if (cfg.blitz) s.push({ t: "blitz" });
    if (cfg.fokus) s.push({ t: "fokus" });
    if (cfg.dump) s.push({ t: "dump" });
    return s;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]); // beim Start einfrieren

  const preset = () => setCfg({ blitz: true, fokus: true, fokusN: 16, dump: true, dumpKap: schwaechstes });
  const anzahlBloecke = (cfg.blitz ? 1 : 0) + (cfg.fokus ? 1 : 0) + (cfg.dump ? 1 : 0);

  function advance() {
    if (blockIndex + 1 < sequenz.length) setBlockIndex((i) => i + 1);
    else setPhase("done");
  }

  // ---------- Run ----------
  if (phase === "run") {
    const blk = sequenz[blockIndex];
    const schritt = (
      <div className="mx-auto max-w-md px-4 pt-3">
        <div className="flex items-center gap-2">
          {sequenz.map((_s, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i < blockIndex ? "bg-emerald-400" : i === blockIndex ? "bg-sky-400" : "bg-white/10"}`} />
          ))}
        </div>
        <p className="text-center text-[11px] uppercase tracking-[0.14em] text-slate-500 mt-2">
          Neuro-Plan · Schritt {blockIndex + 1} von {sequenz.length}
        </p>
      </div>
    );

    return (
      <div key={blockIndex}>
        {schritt}
        {blk.t === "blitz" && <Blitz best={fortschritt.blitzRekord ?? 0} onFertig={onBlitzFertig} onHome={onHome} onComplete={advance} />}
        {blk.t === "fokus" && <Fokus fortschritt={fortschritt} onAntwort={onAntwort} onKarte={onKarte} onHome={onHome} limit={cfg.fokusN} onComplete={advance} />}
        {blk.t === "dump" && <BrainDump kapitel={cfg.dumpKap} onBewerten={onKarte} onHome={onHome} onComplete={advance} />}
      </div>
    );
  }

  // ---------- Done ----------
  if (phase === "done") {
    return (
      <div className="mx-auto max-w-md px-4 pb-12">
        <div className="glass rounded-3xl p-7 text-center mt-16 animate-pop">
          <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/25 to-fuchsia-400/20 text-amber-300 mb-4">
            <Icon name="trophy" size={30} />
          </span>
          <p className="text-white text-xl font-display font-semibold">Kombi-Session geschafft</p>
          <p className="text-slate-400 mt-1">Aufwärmen, Kern-Lernen und Vertiefen — alles durch.</p>
          <p className="text-xs text-slate-600 mt-3 leading-relaxed">
            Diese Mischung aus schnellem Abruf, Wiederholung-bis-es-sitzt und freiem Erinnern ist genau das, was die Forschung empfiehlt.
          </p>
          <button onClick={onHome} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3.5 text-white font-semibold active:scale-[0.98] transition">Zur Startseite</button>
        </div>
      </div>
    );
  }

  // ---------- Config ----------
  return (
    <div className="mx-auto max-w-md px-4 pb-12">
      <header className="pt-5 pb-3 flex items-center gap-3">
        <button onClick={onHome} className="rounded-xl glass w-9 h-9 grid place-items-center text-slate-300 active:scale-90 transition" aria-label="Zurück">
          <Icon name="arrowLeft" size={18} />
        </button>
        <span className="text-sm text-slate-500 font-medium">Kombi-Session</span>
      </header>

      <div className="relative overflow-hidden rounded-3xl glass p-5 mb-4">
        <div className="absolute -right-8 -top-10 w-36 h-36 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="relative">
          <h1 className="text-xl font-display font-semibold text-white">Dein Lern-Cocktail</h1>
          <p className="text-sm text-slate-400 mt-1 leading-relaxed">
            Alle Methoden in einer durchdachten Reihenfolge — stell sie dir zusammen oder nimm mein Preset.
          </p>
          <button onClick={preset} className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500/90 to-violet-500/90 px-4 py-2 text-white text-sm font-semibold active:scale-95 transition">
            <Icon name="sparkles" size={15} /> Neuro-Plan laden
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <BlockRow
          icon="bolt" titel="Blitz" untertitel="Aufwärmen · schneller Abruf, 45 s"
          an={cfg.blitz} onToggle={() => setCfg((c) => ({ ...c, blitz: !c.blitz }))}
        />

        <div className={`glass rounded-2xl p-4 transition-opacity ${cfg.fokus ? "" : "opacity-60"}`}>
          <BlockKopf icon="sparkles" titel="Fokus" untertitel="Kern · wiederholen bis es sitzt" an={cfg.fokus} onToggle={() => setCfg((c) => ({ ...c, fokus: !c.fokus }))} />
          {cfg.fokus && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-slate-500">Umfang:</span>
              {[8, 12, 16, 20].map((n) => (
                <button key={n} onClick={() => setCfg((c) => ({ ...c, fokusN: n }))}
                  className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${cfg.fokusN === n ? "bg-sky-500 text-white" : "bg-white/5 text-slate-400"}`}>
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={`glass rounded-2xl p-4 transition-opacity ${cfg.dump ? "" : "opacity-60"}`}>
          <BlockKopf icon="pen" titel="Brain-Dump" untertitel="Vertiefen · freies Erinnern" an={cfg.dump} onToggle={() => setCfg((c) => ({ ...c, dump: !c.dump }))} />
          {cfg.dump && (
            <div className="mt-3">
              <span className="text-xs text-slate-500">Thema:</span>
              <select
                value={cfg.dumpKap}
                onChange={(e) => setCfg((c) => ({ ...c, dumpKap: Number(e.target.value) }))}
                className="mt-1.5 w-full rounded-xl bg-black/30 ring-1 ring-white/10 px-3 py-2.5 text-slate-100 text-sm outline-none focus:ring-sky-400/40"
              >
                {Object.keys(KAPITEL_TITEL).map(Number).map((n) => (
                  <option key={n} value={n} className="bg-slate-900">
                    Kapitel {n}: {KAPITEL_TITEL[n]}{n === schwaechstes ? "  (schwächstes)" : ""}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => { setBlockIndex(0); setPhase("run"); }}
        disabled={anzahlBloecke === 0}
        className={`mt-5 w-full rounded-2xl px-4 py-3.5 font-semibold transition ${anzahlBloecke > 0 ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white active:scale-[0.98]" : "bg-white/5 text-slate-600"}`}
      >
        {anzahlBloecke > 0 ? `Session starten (${anzahlBloecke} ${anzahlBloecke === 1 ? "Schritt" : "Schritte"})` : "Mindestens eine Methode wählen"}
      </button>
    </div>
  );
}

function BlockKopf({ icon, titel, untertitel, an, onToggle }: { icon: Parameters<typeof Icon>[0]["name"]; titel: string; untertitel: string; an: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`grid place-items-center w-10 h-10 rounded-xl shrink-0 ${an ? "bg-white/10 text-slate-100" : "bg-white/5 text-slate-500"}`}>
        <Icon name={icon} size={19} />
      </span>
      <div className="flex-1">
        <div className="font-semibold text-slate-100">{titel}</div>
        <div className="text-xs text-slate-500">{untertitel}</div>
      </div>
      <Schalter an={an} onToggle={onToggle} />
    </div>
  );
}

function BlockRow(props: { icon: Parameters<typeof Icon>[0]["name"]; titel: string; untertitel: string; an: boolean; onToggle: () => void }) {
  return (
    <div className={`glass rounded-2xl p-4 transition-opacity ${props.an ? "" : "opacity-60"}`}>
      <BlockKopf {...props} />
    </div>
  );
}

function Schalter({ an, onToggle }: { an: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} aria-label="an/aus"
      className={`relative w-11 h-6 rounded-full transition-colors ${an ? "bg-emerald-500" : "bg-white/15"}`}>
      <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${an ? "translate-x-5" : "translate-x-0.5"}`} />
    </button>
  );
}
