import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import corsMiddleware from './server.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [corsMiddleware],
  },
})
