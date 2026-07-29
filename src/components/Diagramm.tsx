import type { Grafik } from "../types";

/**
 * Rendert die Teil-B-Diagramme als SVG.
 * Bewusst schlicht/sachlich gehalten — wie die Abbildungen im echten Test.
 */
export default function Diagramm({ grafik, klein = false }: { grafik: Grafik; klein?: boolean }) {
  if (grafik.art === "linien") return <Linien g={grafik} klein={klein} />;
  if (grafik.art === "balken") return <Balken g={grafik} klein={klein} />;
  return <Kurven g={grafik} />;
}

const ACHSE = "rgba(255,255,255,0.35)";
const TEXT = "rgba(226,232,240,0.85)";
const RASTER = "rgba(255,255,255,0.10)";

// ---------------- Liniendiagramm (2 Messzeitpunkte) ----------------
function Linien({ g, klein }: { g: Extract<Grafik, { art: "linien" }>; klein: boolean }) {
  const B = klein ? 210 : 260;
  const H = klein ? 130 : 160;
  const L = 34, R = 74, T = 12, U = 26; // Raender (rechts Platz fuer Legende)
  const px = (i: number) => L + (i === 0 ? 0.22 : 0.78) * (B - L - R);
  const py = (v: number) => T + (1 - v / g.yMax) * (H - T - U);

  return (
    <svg viewBox={`0 0 ${B} ${H}`} className="w-full h-auto" role="img">
      {/* Rahmen + Raster */}
      <rect x={L} y={T} width={B - L - R} height={H - T - U} fill="none" stroke={ACHSE} strokeWidth="1" />
      {[0, g.yMax / 2, g.yMax].map((v) => (
        <g key={v}>
          <line x1={L} y1={py(v)} x2={B - R} y2={py(v)} stroke={RASTER} strokeWidth="1" />
          <text x={L - 5} y={py(v) + 3.5} fontSize="9" fill={TEXT} textAnchor="end">{v}</text>
        </g>
      ))}
      {/* x-Beschriftung */}
      {g.xLabels.map((lab, i) => (
        <text key={lab} x={px(i)} y={H - U + 13} fontSize="9" fill={TEXT} textAnchor="middle">{lab}</text>
      ))}
      {/* Serien */}
      {g.serien.map((s, si) => (
        <g key={s.name}>
          <line
            x1={px(0)} y1={py(s.werte[0])} x2={px(1)} y2={py(s.werte[1])}
            stroke="#e2e8f0" strokeWidth="1.8"
            strokeDasharray={s.stil === "gestrichelt" ? "5 3" : undefined}
          />
          {[0, 1].map((i) =>
            s.stil === "gestrichelt" ? (
              <rect key={i} x={px(i) - 4} y={py(s.werte[i]) - 4} width="8" height="8" fill="#e2e8f0" transform={`rotate(45 ${px(i)} ${py(s.werte[i])})`} />
            ) : (
              <circle key={i} cx={px(i)} cy={py(s.werte[i])} r="4.5" fill="#e2e8f0" />
            )
          )}
          {/* Legende */}
          <line x1={B - R + 6} y1={T + 12 + si * 15} x2={B - R + 24} y2={T + 12 + si * 15}
            stroke="#e2e8f0" strokeWidth="1.8" strokeDasharray={s.stil === "gestrichelt" ? "5 3" : undefined} />
          <text x={B - R + 28} y={T + 15 + si * 15} fontSize="9" fill={TEXT}>{s.name}</text>
        </g>
      ))}
      {g.yLabel && (
        <text x={9} y={T + (H - T - U) / 2} fontSize="8.5" fill={TEXT} textAnchor="middle"
          transform={`rotate(-90 9 ${T + (H - T - U) / 2})`}>{g.yLabel}</text>
      )}
    </svg>
  );
}

// ---------------- Balkendiagramm (Differenzen, auch negativ) ----------------
function Balken({ g, klein }: { g: Extract<Grafik, { art: "balken" }>; klein: boolean }) {
  const B = klein ? 220 : 270;
  const zeile = klein ? 19 : 22;
  const T = 22, U = 22, L = 52, R = 8;
  const H = T + g.kategorien.length * zeile + U;
  const breite = B - L - R;
  const xv = (v: number) => L + ((v - g.min) / (g.max - g.min)) * breite;
  const x0 = xv(0);

  return (
    <svg viewBox={`0 0 ${B} ${H}`} className="w-full h-auto" role="img">
      <text x={B / 2} y={12} fontSize="9.5" fill={TEXT} textAnchor="middle" fontWeight="600">{g.titel}</text>
      <rect x={L} y={T - 4} width={breite} height={g.kategorien.length * zeile + 4} fill="none" stroke={ACHSE} strokeWidth="1" />
      {/* Nulllinie */}
      <line x1={x0} y1={T - 4} x2={x0} y2={T + g.kategorien.length * zeile} stroke={ACHSE} strokeWidth="1" />
      {g.kategorien.map((kat, i) => {
        const v = g.werte[i];
        const y = T + i * zeile + 2;
        const hoehe = zeile - 8;
        const von = Math.min(x0, xv(v));
        const bis = Math.max(x0, xv(v));
        return (
          <g key={kat}>
            <rect x={von} y={y} width={Math.max(1, bis - von)} height={hoehe} fill="rgba(226,232,240,0.55)" stroke="rgba(226,232,240,0.8)" strokeWidth="0.8" />
            <text x={x0 + (v >= 0 ? -4 : 4)} y={y + hoehe - 2} fontSize="8.5" fill={TEXT}
              textAnchor={v >= 0 ? "end" : "start"}>{kat}</text>
          </g>
        );
      })}
      {/* x-Achsenbeschriftung */}
      {[g.min, g.min / 2, 0, g.max / 2, g.max].map((v) => (
        <text key={v} x={xv(v)} y={H - 6} fontSize="8" fill={TEXT} textAnchor="middle">{v}</text>
      ))}
    </svg>
  );
}

// ---------------- Logistische Kurven (Item-Charakteristik) ----------------
function Kurven({ g }: { g: Extract<Grafik, { art: "kurven" }> }) {
  const B = 290, H = 175;
  const L = 40, R = 12, T = 14, U = 30;
  const xMin = -8, xMax = 9;
  const px = (x: number) => L + ((x - xMin) / (xMax - xMin)) * (B - L - R);
  const py = (p: number) => T + (1 - p) * (H - T - U);

  const dash: Record<string, string | undefined> = {
    voll: undefined, punkte: "1.5 2.5", gestrichelt: "6 3", strichpunkt: "7 3 2 3",
  };

  const pfad = (wende: number) => {
    const pts: string[] = [];
    for (let x = xMin; x <= xMax; x += 0.25) {
      const p = 1 / (1 + Math.exp(-1.6 * (x - wende)));
      pts.push(`${px(x).toFixed(1)},${py(p).toFixed(1)}`);
    }
    return "M" + pts.join(" L");
  };

  return (
    <svg viewBox={`0 0 ${B} ${H}`} className="w-full h-auto" role="img">
      <rect x={L} y={T} width={B - L - R} height={H - T - U} fill="none" stroke={ACHSE} strokeWidth="1" />
      {[0, 0.5, 1].map((p) => (
        <g key={p}>
          <line x1={L} y1={py(p)} x2={B - R} y2={py(p)} stroke={RASTER} strokeWidth="1" strokeDasharray={p === 0.5 ? "3 3" : undefined} />
          <text x={L - 5} y={py(p) + 3.5} fontSize="8.5" fill={TEXT} textAnchor="end">{p.toFixed(2).replace(".", ",")}</text>
        </g>
      ))}
      {[-8, -6, -4, -2, 0, 2, 4, 6, 8].map((x) => (
        <text key={x} x={px(x)} y={H - U + 12} fontSize="8" fill={TEXT} textAnchor="middle">{x}</text>
      ))}
      {g.kurven.map((k, i) => (
        <g key={k.name}>
          <path d={pfad(k.wendepunkt)} fill="none" stroke="#e2e8f0" strokeWidth="1.6" strokeDasharray={dash[k.stil]} />
          <line x1={L + 12} y1={T + 10 + i * 12} x2={L + 34} y2={T + 10 + i * 12}
            stroke="#e2e8f0" strokeWidth="1.6" strokeDasharray={dash[k.stil]} />
          <text x={L + 38} y={T + 13 + i * 12} fontSize="8.5" fill={TEXT}>{k.name}</text>
        </g>
      ))}
      {g.yLabel && <text x={11} y={T + 8} fontSize="8.5" fill={TEXT}>{g.yLabel}</text>}
      {g.xLabel && <text x={(L + B - R) / 2} y={H - 4} fontSize="8.5" fill={TEXT} textAnchor="middle">{g.xLabel}</text>}
    </svg>
  );
}
