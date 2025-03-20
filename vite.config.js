import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Alias para importar archivos más fácilmente
    },
  },
  server: {
    port: 5173, // Asegurar que Vite use el puerto estándar de React
    open: true, // Abrir automáticamente el navegador al ejecutar `npm run dev`
  },
});
