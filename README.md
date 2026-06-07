# Bright Smile Dental — Static Website

A fast, conversion-focused marketing and booking site for a dental clinic. Built as a fully static site with **Astro 5**, **Tailwind CSS v4**, and **Preact** islands.

## Tech Stack

- **Astro 5** — static site generator
- **Tailwind CSS v4** — styling (CSS-first `@theme` config)
- **Preact** — interactive islands (`AppointmentForm`, `ClinicMap`, `ContactForm`)
- **Leaflet + OpenStreetMap** — clinic location map (no API key)
- **Formspree** — form submissions
- **@astrojs/sitemap** — auto-generated sitemap

## Requirements

- **Node.js** ≥ 20
- **npm** ≥ 10

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:4321
```

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Produce production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run Astro type checking |

## Project Structure

```
src/
├── data/site.ts              # All site content (services, doctors, contact)
├── lib/icons.ts              # Inline SVG icon set
├── styles/global.css         # Tailwind v4 theme + components
├── layouts/BaseLayout.astro  # SEO, JSON-LD, nav, footer
├── components/
│   ├── Navbar.astro          # Pure-CSS hamburger, mobile CTA
│   ├── Footer.astro
│   ├── Hero.astro            # Reusable hero block
│   ├── SectionHeading.astro
│   ├── ServiceCard.astro
│   ├── DoctorCard.astro
│   ├── Testimonials.astro
│   ├── Stats.astro
│   ├── ValueGrid.astro
│   └── islands/              # Preact islands (hydrated on client)
│       ├── AppointmentForm.tsx
│       ├── ClinicMap.tsx
│       └── ContactForm.tsx
└── pages/                    # 6 routes
    ├── index.astro           # /
    ├── services.astro        # /services
    ├── about.astro           # /about
    ├── doctors.astro         # /doctors
    ├── appointment.astro     # /appointment
    └── contact.astro         # /contact
```

## Configuration

All site content (name, address, phone, services, doctors, testimonials, map coordinates, Formspree ID) is centralized in **`src/data/site.ts`**. Edit that file to update the site.

### Required replacements before going live

| What | Where |
|---|---|
| Formspree form ID | `src/data/site.ts` → `formspreeId` |
| Phone, email, address, hours | `src/data/site.ts` |
| Doctor photos | `src/data/site.ts` → `doctors[].photo` |
| Map coordinates | `src/data/site.ts` → `map.{lat,lng,zoom}` |
| Production domain | `astro.config.mjs` → `site` |
| Sitemap URL | `public/robots.txt` |

## Architecture Notes

- **Zero JavaScript** is shipped on `/`, `/about`, `/doctors`, and `/services`.
- `AppointmentForm` hydrates eagerly on `/appointment` (`client:load`).
- `ClinicMap` and `ContactForm` hydrate only when scrolled into view (`client:visible`), so Leaflet (~150 KB / 44 KB gz) never loads unless the user reaches `/contact`.
- Mobile menu uses a `<input type="checkbox">` + Tailwind `peer-checked:` — no JS.
- A persistent bottom-of-screen "Book Appointment" button is always visible on mobile.
- The `<head>` includes canonical, Open Graph, Twitter Card, theme color, and JSON-LD `Dentist` schema on every page.

## Deployment

The `dist/` folder is a fully static bundle. Deploy it to any static host:

- **Netlify** — drag `dist/` onto the dashboard, or connect the repo and set build command `npm run build`, publish dir `dist`.
- **Vercel** — framework preset: Astro. Build command: `npm run build`. Output: `dist`.
- **Cloudflare Pages** — build command `npm run build`, output `dist`.
- **GitHub Pages** — push `dist/` to `gh-pages` branch, or use an Action.

No environment variables are required at build time. The Formspree ID and map coordinates are baked into the static output at build time.

## License

Private project. All rights reserved.
