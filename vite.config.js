// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Node/',  // Base path for GitHub Pages
  plugins: [react()],
});
