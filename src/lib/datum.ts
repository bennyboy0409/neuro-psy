/**
 * Voraussichtlicher Testtermin. Der genaue Termin wird von den Unis erst im
 * Frühjahr bekanntgegeben — die Prüfung findet traditionell Mitte Juli statt.
 * In der App unter "Termin ändern" anpassbar.
 */
export const TEST_DATUM_STANDARD = "2027-07-13";

const TERMIN_KEY = "psy-trainer:termin";

/** Der aktuell eingestellte Testtermin (eigener oder Standard). */
export function testDatum(): string {
  try {
    const eigen = localStorage.getItem(TERMIN_KEY);
    if (eigen && /^\d{4}-\d{2}-\d{2}$/.test(eigen)) return eigen;
  } catch {
    // localStorage nicht verfügbar -> Standard
  }
  return TEST_DATUM_STANDARD;
}

/** Eigenen Testtermin speichern (leerer String = zurück auf Standard). */
export function setzeTestDatum(datum: string): void {
  try {
    if (datum) localStorage.setItem(TERMIN_KEY, datum);
    else localStorage.removeItem(TERMIN_KEY);
  } catch {
    // ignorieren
  }
}

/** Ganze Tage von heute bis zum Test (kann 0 oder negativ werden). */
export function tageBisTest(): number {
  return tageDazwischen(heute(), testDatum());
}

// Lokales Datum als "yyyy-mm-dd" (ohne Zeitzonen-Verschiebung).
export function heute(): string {
  const d = new Date();
  const jahr = d.getFullYear();
  const monat = String(d.getMonth() + 1).padStart(2, "0");
  const tag = String(d.getDate()).padStart(2, "0");
  return `${jahr}-${monat}-${tag}`;
}

// Datum + n Tage, wieder als "yyyy-mm-dd".
export function plusTage(datum: string, n: number): string {
  const [y, m, d] = datum.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + n);
  const jahr = dt.getUTCFullYear();
  const monat = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const tag = String(dt.getUTCDate()).padStart(2, "0");
  return `${jahr}-${monat}-${tag}`;
}

// Differenz in ganzen Tagen zwischen zwei "yyyy-mm-dd"-Strings (b - a).
export function tageDazwischen(a: string, b: string): number {
  const [ay, am, ad] = a.split("-").map(Number);
  const [by, bm, bd] = b.split("-").map(Number);
  const da = Date.UTC(ay, am - 1, ad);
  const db = Date.UTC(by, bm - 1, bd);
  return Math.round((db - da) / 86_400_000);
}
