import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base: "./" -> relative Pfade, damit die App auf GitHub Pages / jedem Unterordner laeuft
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
