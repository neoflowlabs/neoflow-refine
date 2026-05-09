export default defineConfig({
  vite: {
    base: '/', 
    build: {
      outDir: 'dist', // This forces the folder name to match your deploy.yml
    },
  },
  tanstackStart: {
    deployment: {
      target: 'static',
    },
  },
});
