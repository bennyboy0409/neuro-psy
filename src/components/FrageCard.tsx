import { useState } from "react";
import type { Frage } from "../types";
import type { Antworten } from "../lib/scoring";
import { lesetextZu } from "../lib/auswahl";
import RichText from "./RichText";
import Icon from "./Icon";

interface Props {
  frage: Frage;
  antworten: Antworten;
  onAntwort: (index: number, wert: boolean) => void;
  /** Wenn true: Feedback + Erklärung anzeigen, Buttons gesperrt. */
  geprueft: boolean;
  nummer?: { aktuell: number; gesamt: number };
}

const BUCHSTABEN = ["A", "B", "C", "D"];

export default function FrageCard({
  frage,
  antworten,
  onAntwort,
  geprueft,
  nummer,
}: Props) {
  const bewertung = frage.aussagen.map((a, i) => antworten[i] === a.istRichtig);
  const alleKorrekt = geprueft && bewertung.every(Boolean);

  // Teil C: zugehoeriger englischer Lesetext, standardmaessig aufgeklappt
  const text = lesetextZu(frage);
  const [textOffen, setTextOffen] = useState(true);

  const teilStil =
    frage.teil === "A"
      ? "text-sky-300"
      : frage.teil === "B"
      ? "text-violet-300"
      : "text-amber-300";

  return (
    <div className="glass rounded-[26px] p-4 sm:p-5">
      {/* Kopfzeile */}
      <div className="flex items-center gap-2 flex-wrap mb-4 text-xs">
        <span className={`inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 font-medium ${teilStil}`}>
          <Icon name={frage.teil === "B" ? "chart" : frage.teil === "C" ? "book" : "brain"} size={13} strokeWidth={2.2} />
          Teil {frage.teil}
          {frage.kapitel ? ` · K${frage.kapitel}` : ""}
        </span>
        {frage.thema && (
          <span className="rounded-full bg-white/5 px-2.5 py-1 text-slate-300">{frage.thema}</span>
        )}
        {frage.quelle === "offiziell" && (
          <span
            className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-1 text-emerald-300 font-medium ring-1 ring-emerald-400/20"
            title="Offizielle Beispielfrage der Uni Wien"
          >
            <Icon name="check" size={12} strokeWidth={3} /> offiziell
          </span>
        )}
        {nummer && (
          <span className="ml-auto text-slate-500 tabular-nums">
            {nummer.aktuell}<span className="text-slate-600"> / {nummer.gesamt}</span>
          </span>
        )}
      </div>

      {/* Englischer Lesetext (nur Teil C) */}
      {text && (
        <div className="mb-4 rounded-2xl bg-amber-400/[0.05] ring-1 ring-amber-400/20 overflow-hidden">
          <button
            onClick={() => setTextOffen((o) => !o)}
            className="w-full flex items-center gap-2 px-3.5 py-2.5 text-left active:bg-white/[0.03] transition"
          >
            <Icon name="book" size={15} className="text-amber-300 shrink-0" />
            <span className="text-sm font-medium text-amber-100 flex-1">{text.titel}</span>
            <span className={`text-amber-300/70 transition-transform ${textOffen ? "rotate-90" : ""}`}>
              <Icon name="chevronRight" size={16} />
            </span>
          </button>

          {textOffen && (
            <div className="px-3.5 pb-3.5 animate-fade-up">
              <div className="max-h-72 overflow-y-auto pr-1 space-y-2.5">
                {text.absaetze.map((a, i) => (
                  <p key={i} className="text-[14px] leading-relaxed text-slate-200">{a}</p>
                ))}
              </div>
              {text.glossar && text.glossar.length > 0 && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-amber-300/80 mb-1.5">Vokabelhilfe</p>
                  <ul className="space-y-1">
                    {text.glossar.map((g, i) => (
                      <li key={i} className="text-xs text-slate-400">
                        <span className="text-amber-200 font-medium">{g.begriff}</span> — {g.erklaerung}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Fragetext */}
      <p className="text-[19px] leading-snug font-semibold text-white font-display">
        <RichText text={frage.stem} />
      </p>

      {frage.stemZusatz && (
        <pre className="mt-3 overflow-x-auto rounded-xl bg-black/30 ring-1 ring-white/10 px-3 py-2.5 text-sm text-slate-200 whitespace-pre-wrap font-mono">
          {frage.stemZusatz}
        </pre>
      )}

      {frage.tabelle && (
        <div className="mt-3 overflow-x-auto">
          <table className="text-sm border-collapse w-full">
            <tbody>
              {[frage.tabelle.kopf, ...frage.tabelle.zeilen].map((zeile, ri) => (
                <tr key={ri}>
                  {zeile.map((zelle, ci) => {
                    const kopf = ri === 0 || ci === 0;
                    return (
                      <td
                        key={ci}
                        className={`border border-white/10 px-2.5 py-1.5 text-center ${
                          kopf ? "font-semibold text-slate-200 bg-white/[0.03]" : "text-slate-300"
                        }`}
                      >
                        {zelle}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Die 4 Aussagen */}
      <p className="mt-5 mb-2.5 text-[11px] uppercase tracking-[0.14em] text-slate-500">
        Jede Aussage einzeln bewerten
      </p>
      <ul className="space-y-2.5 stagger">
        {frage.aussagen.map((aussage, i) => {
          const wahl = antworten[i];
          const richtigBewertet = geprueft && bewertung[i];

          return (
            <li
              key={`${frage.id}-${i}`}
              className={`rounded-2xl p-3 ring-1 transition-colors ${
                geprueft
                  ? richtigBewertet
                    ? "bg-emerald-400/[0.07] ring-emerald-400/30"
                    : "bg-rose-400/[0.07] ring-rose-400/30"
                  : "bg-white/[0.03] ring-white/10"
              }`}
            >
              <div className="flex gap-3">
                <span
                  className={`mt-0.5 shrink-0 w-6 h-6 grid place-items-center rounded-lg text-[11px] font-bold ${
                    geprueft
                      ? richtigBewertet
                        ? "bg-emerald-400/20 text-emerald-300"
                        : "bg-rose-400/20 text-rose-300"
                      : "bg-white/10 text-slate-300"
                  }`}
                >
                  {BUCHSTABEN[i]}
                </span>
                <span className="text-[15px] leading-snug text-slate-100 pt-0.5">
                  <RichText text={aussage.text} />
                </span>
                {geprueft && (
                  <span className={`ml-auto shrink-0 self-start ${richtigBewertet ? "text-emerald-400" : "text-rose-400"}`}>
                    <Icon name={richtigBewertet ? "check" : "x"} size={18} strokeWidth={2.6} />
                  </span>
                )}
              </div>

              <div className="mt-2.5 pl-9">
                <div className="inline-flex rounded-xl bg-black/25 p-0.5 ring-1 ring-white/10">
                  <Seg
                    label="Richtig"
                    aktiv={wahl === true}
                    ton="gut"
                    gesperrt={geprueft}
                    korrekteAntwort={geprueft && aussage.istRichtig === true}
                    onClick={() => onAntwort(i, true)}
                  />
                  <Seg
                    label="Falsch"
                    aktiv={wahl === false}
                    ton="schlecht"
                    gesperrt={geprueft}
                    korrekteAntwort={geprueft && aussage.istRichtig === false}
                    onClick={() => onAntwort(i, false)}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Merksatz + Erklärung nach dem Prüfen */}
      {geprueft && (
        <div className="mt-4 space-y-3">
          {frage.merksatz && (
            <div
              className={`animate-pop rounded-2xl p-3.5 ring-1 ${
                alleKorrekt
                  ? "bg-emerald-400/[0.08] ring-emerald-400/25"
                  : "bg-gradient-to-br from-amber-400/[0.14] to-fuchsia-400/[0.1] ring-amber-300/40"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={alleKorrekt ? "text-emerald-300" : "text-amber-300"}>
                  <Icon name="bulb" size={16} strokeWidth={2.2} />
                </span>
                <span className={`text-[11px] uppercase tracking-[0.14em] font-semibold ${alleKorrekt ? "text-emerald-300" : "text-amber-300"}`}>
                  {alleKorrekt ? "Merk dir" : "Genau merken"}
                </span>
              </div>
              <p className={`text-[15px] leading-relaxed ${alleKorrekt ? "text-emerald-50/90" : "text-amber-50"}`}>
                <RichText text={frage.merksatz} />
              </p>
            </div>
          )}

          <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-3.5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 mb-1.5">Erklärung</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              <RichText text={frage.erklaerung} />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function Seg({
  label,
  aktiv,
  ton,
  gesperrt,
  korrekteAntwort,
  onClick,
}: {
  label: string;
  aktiv: boolean;
  ton: "gut" | "schlecht";
  gesperrt: boolean;
  korrekteAntwort: boolean;
  onClick: () => void;
}) {
  let stil: string;
  if (aktiv) {
    stil =
      ton === "gut"
        ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/30"
        : "bg-rose-500 text-white shadow-sm shadow-rose-500/30";
  } else if (korrekteAntwort) {
    // nach dem Prüfen: die tatsächlich richtige Antwort dezent markieren
    stil = "text-emerald-300 ring-1 ring-emerald-400/50";
  } else {
    stil = "text-slate-400";
  }

  return (
    <button
      type="button"
      disabled={gesperrt}
      onClick={onClick}
      className={`rounded-[10px] px-4 py-1.5 text-sm font-semibold transition-all duration-150 ${stil} ${
        gesperrt ? "cursor-default" : "cursor-pointer active:scale-95"
      }`}
    >
      {label}
    </button>
  );
}
