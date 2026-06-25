/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#f9f3e8',
          200: '#f2e4cc',
          300: '#e8d0a8',
          400: '#d4b47d',
          500: '#c9a55a',
          600: '#b8943a',
          700: '#9c7830',
          800: '#7f5f2a',
          900: '#684d24',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
