import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ShopSmart/', // 👈 necesario para producción en GitHub Pages
  plugins: [react()],
})