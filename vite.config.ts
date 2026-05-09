import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/', // Must be exactly this for a custom domain
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
