/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#15803d', // green-700
          light: '#22c55e',   // green-500
          dark: '#166534',    // green-800
        },
        accent: '#0f172a',     // slate-900
        background: '#f8fafc', // slate-50
        brand: {
          blue: '#1e40af',     // Custom blue if needed
        },
      },
      boxShadow: {
        soft: '0 2px 6px rgba(0, 0, 0, 0.05)',
        hover: '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};