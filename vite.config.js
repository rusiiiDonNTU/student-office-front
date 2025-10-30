import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Важливо для Azure
  build: {
    outDir: 'dist', // Папка для збірки
    emptyOutDir: true, // Очищати перед збіркою
    sourcemap: false, // Вимкнути sourcemaps для production
  },
  server: {
    port: 5173,
    proxy: {
      // Проксі для API запитів під час розробки
      '/api': {
        target: 'https://localhost:7000', // Ваш ASP.NET Core backend
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
