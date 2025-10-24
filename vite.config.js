import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/SAE3.01-regaudie/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        produit: resolve(__dirname, "pages/produit.html"),
        compte: resolve(__dirname, "pages/compte.html"),
        panier: resolve(__dirname, "pages/panier.html"),
        inscription: resolve(__dirname, "pages/inscription.html"),
      },
    },
  },
});
