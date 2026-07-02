import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// The oranburg.law hub, rebuilt as Astro multi-page on the shared platform.
// URL parity with the Jekyll original is a hard constraint: insights keep
// their /insights/YYYY/MM/DD/slug/ permalinks, sections keep their paths,
// and static assets keep their /assets, /images, /fonts URLs.
export default defineConfig({
  site: "https://oranburg.law",
  base: "/",
  integrations: [sitemap()],
});
