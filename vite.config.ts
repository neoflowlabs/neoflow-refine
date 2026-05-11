import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/",
    build: {
      outDir: "dist",
    },
  },

  tanstackStart: {
    deployment: {
      target: "static",
      outputPath: "dist",
    },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
    },
  },
});