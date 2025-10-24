import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/repo/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        accueil: resolve(__dirname, "pages/accueil.html"),
        plus: resolve(__dirname, "pages/plus.html"),
        // ajoutez d'autres pages si nécessaire
      },
    },
  },
});
