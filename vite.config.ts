import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Combine everything into ONE defineConfig call
export default defineConfig({
  vite: {
    // This tells GitHub Pages where your files live
    base: '/neoflowweb/', 
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
