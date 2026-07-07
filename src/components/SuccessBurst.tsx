import { useMemo } from "react";

const FARBEN = ["#2ee6a6", "#7c6bff", "#ffcf5c", "#c264ff", "#5cc8ff"];

/**
 * Kurzer Konfetti-Burst. Bei jeder neuen `runId` spielt er einmal ab.
 * `runId = 0` -> nichts (Startzustand).
 */
export default function SuccessBurst({ runId }: { runId: number }) {
  const stuecke = useMemo(() => {
    return Array.from({ length: 16 }, (_, i) => {
      const winkel = (Math.PI * 2 * i) / 16 + Math.random() * 0.4;
      const dist = 60 + Math.random() * 70;
      return {
        dx: Math.cos(winkel) * dist,
        dy: Math.sin(winkel) * dist - 20,
        dr: (Math.random() * 2 - 1) * 240,
        farbe: FARBEN[i % FARBEN.length],
        delay: Math.random() * 0.06,
        size: 6 + Math.random() * 5,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runId]);

  if (runId === 0) return null;

  return (
    <div key={runId} className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 z-20">
      {stuecke.map((s, i) => (
        <span
          key={i}
          className="absolute block rounded-[2px]"
          style={{
            width: s.size,
            height: s.size * 0.6,
            background: s.farbe,
            animation: `confetti-fall 0.75s ${s.delay}s cubic-bezier(0.2, 0.6, 0.3, 1) forwards`,
            ...({ "--dx": `${s.dx}px`, "--dy": `${s.dy}px`, "--dr": `${s.dr}deg` } as React.CSSProperties),
          }}
        />
      ))}
    </div>
  );
}
