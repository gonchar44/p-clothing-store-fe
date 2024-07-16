import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@config': resolve(__dirname, 'src/config'),
      '@store': resolve(__dirname, 'src/store'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@routes': resolve(__dirname, 'src/routes'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@features': resolve(__dirname, 'src/features'),
      '@services': resolve(__dirname, 'src/services'),
      '@types': resolve(__dirname, 'src/types'),
      '@constants': resolve(__dirname, 'src/constants'),
      '@hooks': resolve(__dirname, 'src/hooks')
    }
  },
  plugins: [react()]
})
