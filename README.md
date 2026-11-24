# Vedant Ganesh Kokare — Portfolio

Single-page portfolio website for **Vedant Ganesh Kokare**, Full Stack Java Developer, built with React and Vite.

## Running Locally

### Prerequisites
- Node.js 18+ and npm

### Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

Because `vite.config.js` configures `base: '/Portfolio/'` for GitHub Pages, the local dev and preview server serves the app at `http://localhost:5173/Portfolio/`.

---

## Editing Content

All portfolio copy, links, experience rows, project entries, skills, and education items live in:

- **`src/data/content.js`**

Update any field in `portfolioData` and save — changes take effect immediately in development and on the next build.

### Updating the Résumé PDF
Replace **`public/Vedant_Kokare_Resume.pdf`** with an updated PDF of the same filename.

---

## Deployment

### GitHub Pages
This repository is pre-configured with `base: '/Portfolio/'` in `vite.config.js` and the `gh-pages` package in `package.json`.

1. Ensure your Git remote points to `https://github.com/vedantkokare/Portfolio.git`.
2. Run:
   ```bash
   npm run deploy
   ```
   This triggers `predeploy` (`npm run build`) and pushes `dist/` to the `gh-pages` branch.
3. In the GitHub repository go to **Settings → Pages**, select **Deploy from a branch**, and choose `gh-pages` / `/ (root)`.

### Vercel
1. Import the GitHub repository into [Vercel](https://vercel.com/new).
2. Set **Framework Preset** to `Vite`, **Build Command** to `npm run build`, and **Output Directory** to `dist`.
3. Note: Vercel deploys at the root domain (`/`) by default. When deploying to a Vercel root domain rather than `/Portfolio/`, update `base` in `vite.config.js` to `'/'` (or conditionally set `base: process.env.VERCEL ? '/' : '/Portfolio/'`).
4. Click **Deploy**.
