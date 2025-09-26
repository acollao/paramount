import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // important for WSL + ngrok
    headers: {
      'ngrok-skip-browser-warning': 'true'
    },
    allowedHosts: [
      '.ngrok-free.dev' // 👈 put your ngrok host here
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
