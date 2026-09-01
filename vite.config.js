import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/awesome-gpt-image-2/',
  plugins: [react()],
  publicDir: 'data',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
