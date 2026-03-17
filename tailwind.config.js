/**
 * tailwind.config.js — Secure-Tech Design System
 *
 * NOTE: This project uses Tailwind CSS v4, which is configured
 * CSS-first via `@theme inline {}` in globals.css. This file acts
 * as supporting documentation and supplies the extended colour
 * palette so utility classes like `bg-spark`, `text-data-cyan`,
 * etc. resolve correctly when referenced from JSX.
 *
 * The canonical token source is still globals.css (:root vars).
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // ── Background scale ────────────────────────────────
        void:    "#080c10",   // page background
        surface: {
          DEFAULT: "#0d1117",  // panel surface
          strong:  "#161b22",  // elevated panel / header
        },

        // ── Foreground ──────────────────────────────────────
        ink:   "#e6edf3",     // primary text
        muted: "#8b949e",     // secondary / placeholder

        // ── Borders ─────────────────────────────────────────
        edge: "#21262d",      // hairline border

        // ── Accent — Firebase Spark amber ───────────────────
        spark: {
          DEFAULT: "#ff8a00",
          soft:    "rgba(255,138,0,0.10)",
          glow:    "rgba(255,138,0,0.22)",
          text:    "#0d0700",  // on-amber label
        },

        // ── Data / Metric palette ────────────────────────────
        data: {
          cyan:  "#22d3ee",   // icy cyan — primary metric
          green: "#3fb950",   // positive delta / contrib green
        },
      },

      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        mono:    ["var(--font-body)",    "ui-monospace", "monospace"],
      },

      animation: {
        "pulse-slow": "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
