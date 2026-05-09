import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/', 
    build: {
      outDir: 'dist', // Explicitly force the output to 'dist'
    },
  },
  tanstackStart: {
    deployment: {
      target: 'static',
    },
  },
});
