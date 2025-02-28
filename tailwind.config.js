/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 15s infinite ease-in-out',
      },
      colors: {
        'wind-blue': {
          50: '#e6f7ff',
          100: '#b3e0ff',
          200: '#80caff',
          300: '#4db3ff',
          400: '#1a9dff',
          500: '#0080ff',
          600: '#006acc',
          700: '#004d99',
          800: '#003366',
          900: '#001a33',
        }
      }
    },
  },
  plugins: [],
}
