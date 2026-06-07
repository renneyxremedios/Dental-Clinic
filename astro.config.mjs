// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://example.com",
  integrations: [preact(), sitemap()],
  vite: {
    // @tailwindcss/vite@4 ships Vite 8 types, Astro 5 ships Vite 6.
    // Runtime is compatible; cast resolves the peer-dep type clash.
    plugins: [.../** @type {any} */ (tailwindcss())],
  },
});
