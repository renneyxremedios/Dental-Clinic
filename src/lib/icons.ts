/**
 * Lightweight inline SVG icons used across Astro components.
 * Keeps the icon set in one place; the same set is mirrored in the
 * Preact islands via lucide-preact. Astro components use these inline
 * SVGs to ship zero JavaScript for icon rendering.
 */
type IconProps = { class?: string; "stroke-width"?: number };

const make = (paths: string) => (props: IconProps = {}) => {
  const cls = props.class ?? "h-6 w-6";
  const sw = props["stroke-width"] ?? 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" class="${cls}" aria-hidden="true">${paths}</svg>`;
};

export const icons = {
  phone: make(
    `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>`
  ),
  mail: make(
    `<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`
  ),
  mapPin: make(
    `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`
  ),
  clock: make(
    `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`
  ),
  menu: make(
    `<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>`
  ),
  x: make(
    `<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`
  ),
  arrowRight: make(
    `<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>`
  ),
  check: make(
    `<polyline points="20 6 9 17 4 12"/>`
  ),
  sparkles: make(
    `<path d="M12 3v3M12 18v3M5 12H2M22 12h-3M6.34 6.34l-2.12-2.12M19.78 19.78l-2.12-2.12M6.34 17.66l-2.12 2.12M19.78 4.22l-2.12 2.12"/><circle cx="12" cy="12" r="3"/>`
  ),
  shield: make(
    `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`
  ),
  sun: make(
    `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>`
  ),
  crown: make(
    `<path d="M2 19h20M3 9l3 6 6-10 6 10 3-6v9H3z"/>`
  ),
  tooth: make(
    `<path d="M12 2C8 2 5 4 5 8c0 2 1 3 1 6s-1 6 1 7 2-2 3-4 1-2 2-2 1 0 2 2 1 5 3 4 1-4 1-7 1-4 1-6c0-4-3-6-7-6z"/>`
  ),
  smile: make(
    `<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>`
  ),
  align: make(
    `<line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="9" y1="18" x2="15" y2="18"/>`
  ),
  alert: make(
    `<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`
  ),
  heart: make(
    `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`
  ),
  award: make(
    `<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>`
  ),
  zap: make(
    `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`
  ),
  shieldCheck: make(
    `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>`
  ),
  facebook: make(
    `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>`
  ),
  instagram: make(
    `<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>`
  ),
  twitter: make(
    `<path d="M22 4.01s-2 1.32-2.5 1.5C18.5 4.5 17 4 15.5 4c-3 0-5 2.5-5 5.5 0 .5 0 1 .1 1.5C7 11 4 9 2 6c0 0-3 7 5 11-2 1-4 1-6 1 8 5 18 0 18-11 0-.5-.05-1-.1-1.5C20 5 22 4 22 4.01z"/>`
  ),
  star: make(
    `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`
  ),
  quote: make(
    `<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h2c0 4-2 5-3 5z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h2c0 4-2 5-3 5z"/>`
  ),
  send: make(
    `<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>`
  ),
  calendar: make(
    `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`
  ),
};

export type IconName = keyof typeof icons;
