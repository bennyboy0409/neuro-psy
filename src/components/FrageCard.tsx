import type { Frage } from "../types";
import type { Antworten } from "../lib/scoring";

interface Props {
  frage: Frage;
  antworten: Antworten;
  onAntwort: (index: number, wert: boolean) => void;
  /** Wenn true: Feedback + Erklärung anzeigen, Buttons gesperrt. */
  geprueft: boolean;
  nummer?: { aktuell: number; gesamt: number };
}

export default function FrageCard({
  frage,
  antworten,
  onAntwort,
  geprueft,
  nummer,
}: Props) {
  const teilFarbe =
    frage.teil === "A"
      ? "bg-sky-500/15 text-sky-300 ring-sky-500/30"
      : frage.teil === "B"
      ? "bg-violet-500/15 text-violet-300 ring-violet-500/30"
      : "bg-amber-500/15 text-amber-300 ring-amber-500/30";

  return (
    <div className="rounded-2xl bg-slate-800/60 ring-1 ring-slate-700/60 p-4 sm:p-5">
      {/* Kopfzeile */}
      <div className="flex items-center gap-2 flex-wrap mb-3 text-xs">
        <span className={`rounded-full px-2.5 py-1 ring-1 font-medium ${teilFarbe}`}>
          Teil {frage.teil}
          {frage.kapitel ? ` · Kap. ${frage.kapitel}` : ""}
        </span>
        {frage.thema && (
          <span className="rounded-full px-2.5 py-1 bg-slate-700/50 text-slate-300">
            {frage.thema}
          </span>
        )}
        {frage.quelle === "offiziell" && (
          <span
            className="rounded-full px-2.5 py-1 bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30 font-medium"
            title="Offizielle Beispielfrage der Uni Wien"
          >
            ✓ offiziell
          </span>
        )}
        {nummer && (
          <span className="ml-auto text-slate-400">
            {nummer.aktuell} / {nummer.gesamt}
          </span>
        )}
      </div>

      {/* Fragetext */}
      <p className="text-slate-100 leading-relaxed font-medium">{frage.stem}</p>

      {frage.stemZusatz && (
        <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900/70 ring-1 ring-slate-700/60 px-3 py-2 text-sm text-slate-200 whitespace-pre-wrap">
          {frage.stemZusatz}
        </pre>
      )}

      {frage.tabelle && (
        <div className="mt-3 overflow-x-auto">
          <table className="text-sm border-collapse">
            <tbody>
              {[frage.tabelle.kopf, ...frage.tabelle.zeilen].map((zeile, ri) => (
                <tr key={ri}>
                  {zeile.map((zelle, ci) => {
                    const kopf = ri === 0 || ci === 0;
                    return (
                      <td
                        key={ci}
                        className={`border border-slate-700 px-2.5 py-1.5 ${
                          kopf ? "font-semibold text-slate-200 bg-slate-900/50" : "text-slate-300"
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
      <p className="mt-4 mb-2 text-xs uppercase tracking-wide text-slate-400">
        Bewerte jede Aussage einzeln:
      </p>
      <ul className="space-y-2.5">
        {frage.aussagen.map((aussage, i) => {
          const wahl = antworten[i];
          const korrektBewertet = geprueft && wahl === aussage.istRichtig;

          return (
            <li
              key={i}
              className={`rounded-xl p-3 ring-1 transition-colors ${
                geprueft
                  ? korrektBewertet
                    ? "bg-emerald-500/10 ring-emerald-500/40"
                    : "bg-rose-500/10 ring-rose-500/40"
                  : "bg-slate-900/40 ring-slate-700/50"
              }`}
            >
              <div className="flex gap-3">
                <span className="mt-0.5 shrink-0 w-6 h-6 grid place-items-center rounded-full bg-slate-700 text-slate-200 text-xs font-bold">
                  {["a", "b", "c", "d"][i]}
                </span>
                <span className="text-slate-100 text-[15px] leading-snug">
                  {aussage.text}
                </span>
              </div>

              <div className="mt-2.5 flex gap-2 pl-9">
                <ToggleButton
                  label="Richtig"
                  aktiv={wahl === true}
                  farbe="gruen"
                  gesperrt={geprueft}
                  istKorrekteAntwort={geprueft && aussage.istRichtig === true}
                  onClick={() => onAntwort(i, true)}
                />
                <ToggleButton
                  label="Falsch"
                  aktiv={wahl === false}
                  farbe="rot"
                  gesperrt={geprueft}
                  istKorrekteAntwort={geprueft && aussage.istRichtig === false}
                  onClick={() => onAntwort(i, false)}
                />
                {geprueft && (
                  <span
                    className={`ml-auto self-center text-sm font-semibold ${
                      korrektBewertet ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {korrektBewertet ? "✓" : "✗"}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {/* Erklärung nach dem Prüfen */}
      {geprueft && (
        <div className="mt-4 rounded-xl bg-slate-900/60 ring-1 ring-slate-700/60 p-3.5">
          <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
            Erklärung
          </p>
          <p className="text-slate-200 text-sm leading-relaxed">
            {frage.erklaerung}
          </p>
          {frage.beleg && (
            <p className="mt-2 text-xs text-slate-400">Beleg: {frage.beleg}</p>
          )}
        </div>
      )}
    </div>
  );
}

function ToggleButton({
  label,
  aktiv,
  farbe,
  gesperrt,
  istKorrekteAntwort,
  onClick,
}: {
  label: string;
  aktiv: boolean;
  farbe: "gruen" | "rot";
  gesperrt: boolean;
  istKorrekteAntwort: boolean;
  onClick: () => void;
}) {
  const basis =
    "flex-1 rounded-lg px-3 py-2 text-sm font-semibold ring-1 transition-colors select-none";
  let stil: string;

  if (aktiv) {
    stil =
      farbe === "gruen"
        ? "bg-emerald-500 text-white ring-emerald-400"
        : "bg-rose-500 text-white ring-rose-400";
  } else {
    stil = "bg-slate-800 text-slate-300 ring-slate-600 active:bg-slate-700";
  }

  // Nach dem Prüfen: die tatsächlich korrekte Antwort dezent grün umranden.
  const markierung = istKorrekteAntwort && !aktiv ? " ring-2 ring-emerald-400/70" : "";

  return (
    <button
      type="button"
      disabled={gesperrt}
      onClick={onClick}
      className={`${basis} ${stil}${markierung} ${
        gesperrt ? "cursor-default" : "cursor-pointer"
      }`}
    >
      {label}
    </button>
  );
}
