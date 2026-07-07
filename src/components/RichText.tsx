// Rendert leichtes Markup:
//   **fett**        -> hervorgehobener (weisser) Text
//   ==schluessel==  -> gold markiertes Schluesselwort (Merk-Hilfe)

const TOKEN = /(\*\*[^*]+\*\*|==[^=]+==)/g;

export default function RichText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(TOKEN).filter((p) => p !== "");
  return (
    <span className={className}>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-white">
              {p.slice(2, -2)}
            </strong>
          );
        }
        if (p.startsWith("==") && p.endsWith("==")) {
          return (
            <span key={i} className="kw-box">
              {p.slice(2, -2)}
            </span>
          );
        }
        return <span key={i}>{p}</span>;
      })}
    </span>
  );
}
