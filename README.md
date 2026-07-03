# Check Box Dashboard

A dark analytics dashboard UI built with Next.js 14 (App Router) and Tailwind CSS,
recreating the "Check Box" design: sidebar nav, stat cards with a sparkline and dot
grid, a paired vertical bar chart, and a project timeline with colored progress bars.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects straight to `/dashboard`.

## Project structure

```
app/
  layout.js          # root layout, imports global styles
  page.js             # redirects to /dashboard
  dashboard/
    page.js           # the dashboard UI (all components in one file)
  globals.css         # Tailwind directives
tailwind.config.js
postcss.config.js
next.config.mjs        # allows the pravatar.cc avatar image
```

## Notes

- Icons come from `lucide-react`.
- The sparkline is hand-rolled inline SVG (no charting library) — swap in `recharts`
  or similar if you want it driven by live data later.
- All numbers (percentages, bar values, timeline values) are placeholder data matching
  the reference design — wire these up to your API/backend as needed.
- The avatar image is loaded via `next/image` from `i.pravatar.cc`; swap in a real
  user avatar and update `next.config.mjs`'s `remotePatterns` if you change the domain.
