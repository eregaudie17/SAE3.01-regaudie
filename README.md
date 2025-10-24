# Mémo : Configuration Vite.js pour GitHub Pages (Multi-pages)

## Structure du projet

```
TW_Start/
├── index.html          # Page d'accueil (racine)
├── pages/
│   ├── accueil.html
│   └── plus.html
├── src/
│   └── style.css
├── public/
└── vite.config.js
```

## Configuration `vite.config.js`

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/nom-du-repo/",  // ⚠️ Remplacer par le nom de votre dépôt GitHub
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        accueil: resolve(__dirname, "pages/accueil.html"),
        plus: resolve(__dirname, "pages/plus.html"),
        // Ajouter d'autres pages ici si nécessaire
      },
    },
  },
});
```

## Points clés

### 1. Base URL
```js
base: "/nom-du-repo/"
```
- **Obligatoire** pour GitHub Pages
- Correspond au nom de votre repository
- Format : `/nom-repo/` (avec les slashes)

### 2. Multi-pages avec rollupOptions
```js
input: {
  main: resolve(__dirname, "index.html"),
  accueil: resolve(__dirname, "pages/accueil.html"),
  // ...
}
```
- Déclarer **toutes** les pages HTML du projet
- `main` : page d'accueil obligatoire
- Autres : utiliser des clés explicites

### 3. Chemins relatifs dans le HTML

**Liens :**
```html
<a href="pages/accueil.html">Accueil</a>
<a href="pages/plus.html">En savoir plus</a>
```

**Images :**
```html
<img src="placeholder.jpg" alt="placeholder" />
<img src="public/image.jpg" alt="image" />
```

**CSS :**
```html
<link rel="stylesheet" href="src/style.css" />
```

## ⚠️ Checklist avant déploiement

- [ ] `base` correspond au nom exact du repo
- [ ] Toutes les pages HTML sont dans `rollupOptions.input`
- [ ] Tous les liens sont en **relatif** (pas de `/` initial)
- [ ] Les images sont dans `public/`
- [ ] Test en local : `npm run build` 
