// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Node/', // 👈 This matches your GitHub repo name
  plugins: [react()],
})
