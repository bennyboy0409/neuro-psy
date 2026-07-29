// Qualitaetspruefung aller Fragen & Karten.
// Aufruf:  node tools/pruefe_fragen.mjs
// Nutzt den TS-Quellcode ueber einen einfachen Import via tsx/vite? -> stattdessen
// pruefen wir die kompilierten Daten, indem wir die TS-Dateien als Text parsen.

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/data";
const dateien = readdirSync(DIR).filter((f) => f.endsWith(".ts"));

let fragen = 0;
let karten = 0;
const ids = new Map();
const probleme = [];

for (const datei of dateien) {
  const pfad = join(DIR, datei);
  const text = readFileSync(pfad, "utf8");

  // Steuerzeichen (Korruptionsspuren)
  const steuer = [...text].filter((c) => c.charCodeAt(0) < 9).length;
  if (steuer) probleme.push(`${datei}: ${steuer} Steuerzeichen (Korruption!)`);

  // Bloecke grob nach "id:" trennen
  const bloecke = text.split(/\n\s*\{\s*\n?\s*id:/).slice(1);
  for (const b of bloecke) {
    const idM = b.match(/^\s*"([^"]+)"/);
    const id = idM ? idM[1] : "?";

    // doppelte IDs
    if (ids.has(id)) probleme.push(`${datei}: doppelte ID "${id}" (auch in ${ids.get(id)})`);
    else ids.set(id, datei);

    // Lesetext (Teil C) — keine Frage, eigene Struktur
    if (/absaetze:/.test(b)) {
      if (!/titel:/.test(b)) probleme.push(`${id}: Lesetext ohne Titel`);
      continue;
    }

    const istKarte = /vorderseite:/.test(b);
    if (istKarte) {
      karten++;
      if (!/rueckseite:\s*"/.test(b)) probleme.push(`${id}: Karte ohne Rueckseite`);
      continue;
    }

    fragen++;
    const anzahlAussagen = (b.match(/istRichtig:/g) || []).length;
    const anzahlRichtig = (b.match(/istRichtig:\s*true/g) || []).length;
    if (anzahlAussagen !== 4) probleme.push(`${id}: ${anzahlAussagen} Aussagen (soll 4)`);
    if (anzahlRichtig < 1) probleme.push(`${id}: keine richtige Aussage`);
    if (!/erklaerung:/.test(b)) probleme.push(`${id}: keine Erklaerung`);

    // == Markierungen muessen paarig sein
    const marker = (b.match(/==/g) || []).length;
    if (marker % 2 !== 0) probleme.push(`${id}: ungerade Anzahl ==Marker== (${marker})`);
  }
}

console.log(`Dateien geprueft: ${dateien.length}`);
console.log(`Fragen: ${fragen} | Karteikarten: ${karten} | IDs gesamt: ${ids.size}`);
if (probleme.length === 0) {
  console.log("\n✓ KEINE PROBLEME GEFUNDEN");
} else {
  console.log(`\n✗ ${probleme.length} PROBLEME:`);
  for (const p of probleme.slice(0, 40)) console.log("  - " + p);
  if (probleme.length > 40) console.log(`  … und ${probleme.length - 40} weitere`);
  process.exitCode = 1;
}
