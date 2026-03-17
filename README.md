# vibhor-srivastava-portfolio

Personal portfolio website for **Vibhor Srivastava** — ML engineer, backend developer, and full-stack builder.  
Live: [vibhor-portfolio.pages.dev](https://vibhor-portfolio.pages.dev)

---

## Architecture & Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js 16 (App Router) | `output: "export"` — fully static |
| Language | TypeScript 5 | strict mode enabled |
| Styling | Tailwind CSS v4 | CSS-first config via `@theme inline {}` |
| Fonts | Space Grotesk + JetBrains Mono | loaded via `next/font/google` |
| Icons | Lucide React | tree-shaken via `optimizePackageImports` |
| Hosting | Cloudflare Pages | edge-served, zero cold-start |
| Deployment | Wrangler CLI | uploads `out/` to Cloudflare Pages |

### Key architecture decisions

**Static export** — `output: "export"` in `next.config.ts` produces a fully pre-rendered HTML/CSS/JS bundle under `out/`. No Node.js runtime is required at the edge.

**CSS-first Tailwind v4** — There is no `tailwind.config.js` consumed at build time¹. All design tokens live in `src/app/globals.css` under `:root {}` and `@theme inline {}`. The companion `tailwind.config.js` at the project root documents the palette for IDE intellisense and can be activated with `@config "./tailwind.config.js"` if needed.

**Client-side live data** — `GitHubWidget.tsx` is a `"use client"` component that fetches the GitHub REST API directly from the browser, preserving the purely static build while showing live repository data.

¹ Tailwind v4 moved config to CSS. The JS file is optional scaffolding.

---

## Design System — Secure-Tech

Tokens are defined as CSS custom properties in `src/app/globals.css`:

```css
/* Background */
--background:     #080c10   /* void-black navy */
--surface:        #0d1117   /* GitHub-dark panel */
--surface-strong: #161b22   /* elevated surface */

/* Accent — Firebase Spark amber */
--accent:         #ff8a00

/* Data metrics */
--data:           #22d3ee   /* icy cyan */
--data-green:     #3fb950   /* contribution green */
```

Typography uses **Space Grotesk** (700-weight geometric headings) paired with **JetBrains Mono** (body, tags, metrics).

Component primitives defined in CSS: `.panel`, `.hover-glow`, `.badge`, `.chip`, `.glass-card`, `.metric`, `.section-kicker`, `.section-title`, `.speaker-rule`, `.reveal` / `.reveal-visible`.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          ← design system (Tailwind v4 @theme)
│   ├── layout.tsx           ← fonts, metadata, OG tags
│   └── page.tsx             ← shell entry point
└── components/
    ├── portfolio-shell.tsx  ← full single-page layout ("use client")
    └── GitHubWidget.tsx     ← live GitHub repo feed ("use client")

public/
├── favicon.svg
├── og-image.svg             ← 1200×630 social preview
├── Vibhor_Srivastava_Resume.html
└── _headers                 ← Cloudflare response headers (CSP, HSTS, …)

tailwind.config.js           ← palette documentation / IDE intellisense
next.config.ts               ← static export, image opts, package imports
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Type-check
npx tsc --noEmit
```

> **SSL note (corporate proxies):** if `npm install` fails with a cipher error, run `npm config set strict-ssl false` once.

---

## Production Build

```bash
npm run build
```

Produces a fully static `out/` directory. Output is verified against TypeScript and Next.js lint rules before the build completes.

```
Route (app)          Size
─────────────────────────
○ /                  7.21 kB
○ /404               0 B
+ First Load JS      ~100 kB
```

---

## Cloudflare Pages Deployment

### First deploy (one-time setup)

```bash
npx wrangler pages project create vibhor-portfolio
npx wrangler pages deploy ./out --project-name=vibhor-portfolio
```

### Subsequent deploys

```bash
npm run build
npx wrangler pages deploy ./out --project-name=vibhor-portfolio
```

Or connect the GitHub repository to Cloudflare Pages for automatic deploys on push (build command: `npm run build`, output dir: `out`).

### Security headers

`public/_headers` applies Cloudflare-enforced response headers to every route:

- `Content-Security-Policy` — restricts script/style/connect sources
- `Strict-Transport-Security` — HSTS max-age 1 year, includeSubDomains
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — disables camera, microphone, geolocation

---

## Environment

No environment variables are required. The GitHub widget fetches the public GitHub API unauthenticated (60 req/h per IP). For higher rate limits, set a `GITHUB_TOKEN` env var in the Cloudflare Pages dashboard and forward it in the fetch headers inside `GitHubWidget.tsx`.

---

## License

MIT — Vibhor Srivastava, 2025
