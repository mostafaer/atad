// @ts-check
import { defineConfig } from "astro/config";

// الموقع منشور على GitHub Pages تحت /atad.
// لما يبقى فيه دومين خاص: غيّر SITE_URL وخلّي BASE = "/".
const SITE_URL = "https://mostafaer.github.io";
const BASE = "/atad";

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "auto" },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: "hover" },
});
