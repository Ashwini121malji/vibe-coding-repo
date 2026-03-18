# Pete McPherson — Portfolio

A minimal, bold portfolio site for Pete McPherson built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Content is placeholder and can be replaced later.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321) in your browser.

## Build

```bash
npm run build
```

Output is written to `dist/` (static HTML, CSS, and assets).

## Deploy to Cloudflare Pages

### Option A: Cloudflare dashboard (recommended)

1. Push this repo to GitHub (or GitLab).
2. In [Cloudflare Dashboard](https://dash.cloudflare.com) go to **Pages** → **Create a project** → **Connect to Git**.
3. Select your repo and configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** leave blank (or set if the project lives in a subfolder).
4. Click **Save and Deploy**. Cloudflare will build and publish the site.

### Option B: Wrangler CLI

1. Install Wrangler: `npm i -g wrangler`
2. Log in: `wrangler login`
3. From the project root, run:

   ```bash
   npm run build
   npx wrangler pages deploy dist --project-name=pete-mcpherson-portfolio
   ```

### After deployment

- In **Pages** → your project → **Settings** → **Builds & deployments**, set **Production branch** if needed.
- Under **Custom domains** you can add your own domain.
- Update `site` in `astro.config.mjs` to your real URL so the sitemap and canonical URLs are correct. Then update `public/robots.txt` with the same domain.

## Project structure

- `src/pages/` — `index.astro` (home), `about.astro`, `projects.astro`
- `src/components/` — `Header.astro`, `Footer.astro`, `NewsletterForm.astro`, `ProjectCard.astro`
- `src/styles/globals.css` — Tailwind base and global styles
- `public/` — Static assets (favicon, `robots.txt`); add images here as needed

All copy and images are placeholders; replace with real content before launch.

## Tech stack

- **Astro** — Static site generator (minimal or no JS by default)
- **Tailwind CSS** — Utility-first styling
- **Fontshare** — Khand (headings), Switzer (body)
- **Hosting** — Cloudflare Pages (static)

The newsletter form is front-end only; connect it to your email or marketing service when ready.
