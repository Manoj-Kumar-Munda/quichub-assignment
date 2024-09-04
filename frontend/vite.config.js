import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['papaparse']
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://quichub-assignment.onrender.com',
        changeOrigin: true,
      }
    }
  }
  
})
