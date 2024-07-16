/** @type {import('tailwindcss').Config} */
import { theme } from './src/config'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: { ...theme.colors },
    extend: {
      fontFamily: {
        nunito: 'Nunito'
      },
      fontSize: {
        h1: '2.25rem',
        h2: '1.875rem',
        h3: '1.5rem',
        h4: '1.25rem',
        h5: '1rem',
        h6: '0.875rem'
      }
    }
  },
  plugins: []
}
