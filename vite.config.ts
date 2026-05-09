import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/', 
    build: {
      outDir: 'dist', // Explicitly force the output folder name
    },
  },
  tanstackStart: {
    deployment: {
      target: 'static', // Forces TanStack to generate an index.html
    },
  },
});
