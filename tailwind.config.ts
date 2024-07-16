/** @type {import('tailwindcss').Config} */
import { theme } from './src/config'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: { ...theme.colors },
    extend: {
      fontFamily: {
        nunito: 'Nunito'
      }
    }
  },
  plugins: []
}
