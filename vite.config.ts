import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/", // use "/" because you are using a custom domain
    build: {
      outDir: "dist",
    },
  },

  tanstackStart: {
    deployment: {
      target: "static",
    },
  },
});
