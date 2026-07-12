import type { Karteikarte } from "../types";
import RichText from "./RichText";
import Icon from "./Icon";

interface Props {
  karte: Karteikarte;
  gedreht: boolean;
  onToggle: () => void;
  /** Optionaler Hinweis unten auf der Vorderseite. */
  hinweis?: string;
}

export default function Flipkarte({ karte, gedreht, onToggle, hinweis }: Props) {
  return (
    <div style={{ perspective: "1400px" }}>
      <button onClick={onToggle} className="relative w-full text-left" style={{ minHeight: 300 }} aria-label="Karte umdrehen">
        <div
          className="relative w-full transition-transform duration-500"
          style={{ transformStyle: "preserve-3d", transform: gedreht ? "rotateY(180deg)" : "none", minHeight: 300 }}
        >
          {/* Vorderseite */}
          <div className="glass rounded-[26px] p-6 flex flex-col" style={{ backfaceVisibility: "hidden", minHeight: 300 }}>
            <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-white/5 px-2.5 py-1 text-xs text-sky-300">
              <Icon name="book" size={13} /> Kap. {karte.kapitel} · {karte.thema}
            </span>
            <div className="flex-1 grid place-items-center py-6">
              <p className="text-[22px] leading-snug font-display font-semibold text-white text-center">
                <RichText text={karte.vorderseite} />
              </p>
            </div>
            <p className="text-center text-xs text-slate-500 inline-flex items-center gap-1.5 justify-center">
              <Icon name="rotate" size={13} /> {hinweis ?? "Erst selbst überlegen, dann umdrehen"}
            </p>
          </div>

          {/* Rückseite */}
          <div
            className="absolute inset-0 glass rounded-[26px] p-6 flex flex-col ring-1 ring-violet-400/25"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", minHeight: 300 }}
          >
            <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-violet-400/10 px-2.5 py-1 text-xs text-violet-200">
              Antwort
            </span>
            <div className="flex-1 grid place-items-center py-3">
              <p className="text-[19px] leading-relaxed text-slate-100 text-center">
                <RichText text={karte.rueckseite} />
              </p>
            </div>
            {karte.merksatz && (
              <div className="rounded-2xl bg-gradient-to-br from-amber-400/[0.14] to-fuchsia-400/[0.1] ring-1 ring-amber-300/40 p-3">
                <span className="text-amber-300 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-semibold mb-1">
                  <Icon name="bulb" size={13} /> Merk dir
                </span>
                <p className="text-[14px] leading-relaxed text-amber-50">
                  <RichText text={karte.merksatz} />
                </p>
              </div>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}
