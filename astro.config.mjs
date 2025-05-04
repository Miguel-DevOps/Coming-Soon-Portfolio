// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    routing: {
      redirectToDefaultLocale: false,
      prefixDefaultLocale: false
    }
  },
  base: '/',
  outDir: './dist',
  site: 'https://developmi.com',
  integrations: [sitemap(), robotsTxt()],
});