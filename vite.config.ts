import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/', // This is the fix for custom domains!
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
