# Dinner Plan · Week of Jun 2

A weekly dinner plan dashboard built with React + Vite.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173/dinner-plan/

## Deploy to GitHub Pages

**One-time setup:**

1. Create a new repo on GitHub (e.g. `dinner-plan`)
2. In `vite.config.js`, update `base` to match your repo name:
   ```js
   base: '/dinner-plan/',
   ```
3. Push your code:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/dinner-plan.git
   git push -u origin main
   ```

**Deploy:**
```bash
npm run deploy
```

Your dashboard will be live at:
```
https://YOUR_USERNAME.github.io/dinner-plan/
```

## Updating data

All data lives in `src/App.jsx` at the top of the file:

- **`MEALS`** — recipe data per date
- **`DAYS`** — week structure (dates, labels, off/leftovers flags)
- **`CAL_EVENTS`** — calendar events per date
- **`SHOP_ITEMS`** — shopping list grouped by category
- **`AT_HOME`** — items already in the kitchen

After editing, run `npm run deploy` to push live.
