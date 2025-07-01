import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/eidosdoc/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
