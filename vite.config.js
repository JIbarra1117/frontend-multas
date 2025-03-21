import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@application": path.resolve(__dirname, "./src/application"),
      "@domain": path.resolve(__dirname, "./src/domain"),
      "@infra": path.resolve(__dirname, "./src/infrastructure"),
      "@ui": path.resolve(__dirname, "./src/ui"),   
    },
  },
  server: {
    port: 5173, // Asegurar que Vite use el puerto estándar de React
    open: true, // Abrir automáticamente el navegador al ejecutar `npm run dev`
  },
});
