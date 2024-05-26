import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@routes': resolve(__dirname, 'src/routes'),
      '@pages': resolve(__dirname, 'src/pages')
    }
  },
  plugins: [react()]
})
