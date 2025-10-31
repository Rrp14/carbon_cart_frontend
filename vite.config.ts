import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/carbon_cart_frontend/',
  server: {
    proxy: {
      '/api': {
        target: 'https://carbon-app-8hwl.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
