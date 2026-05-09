import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/', 
    build: {
      outDir: 'dist', // This ensures the folder is named 'dist'
    },
  },
  tanstackStart: {
    deployment: {
      target: 'static', // This generates the index.html you need
    },
  },
});
