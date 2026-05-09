import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/', 
  },
  // Add this block to force Static Generation
  tanstackStart: {
    deployment: {
      target: 'static',
    },
  },
});
