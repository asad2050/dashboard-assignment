# Check Box Dashboard

A responsive, full-screen analytics dashboard built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Features

- Dark theme UI with full-screen black layout
- Responsive grid — stacks on mobile, 2-col on tablet, 3-col on desktop
- Sidebar navigation with icon buttons
- Stat cards with a hand-rolled SVG sparkline and dot-grid visualization
- Paired vertical bar chart for product metrics
- Project timeline with color-coded horizontal progress bars
- Filter bar with dropdown pills (Date, Product, Profile)
- Adaptive top navigation — labels hidden on small screens

## Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [lucide-react](https://lucide.dev/) — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects automatically to `/dashboard`.

## Project Structure

```
app/
├── layout.js           # root layout, imports global styles
├── page.js             # redirects to /dashboard
├── globals.css         # Tailwind directives
└── dashboard/
    └── page.js         # full dashboard UI
tailwind.config.js      # custom xs breakpoint + scrollbar-none utility
next.config.mjs         # allows pravatar.cc remote image
```
