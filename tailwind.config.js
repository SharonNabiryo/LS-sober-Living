/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4fb',
          100: '#d9e3f5',
          200: '#b3c6eb',
          300: '#7a9dd8',
          400: '#4a74c2',
          500: '#2d56a8',
          600: '#1e3f8a',
          700: '#162e6b',
          800: '#0f2050',
          900: '#0b1a3d',
          950: '#060f24',
        },
        sage: {
          50:  '#f3f7f3',
          100: '#e2ede2',
          200: '#c5dbc5',
          300: '#9cc09c',
          400: '#6ea16e',
          500: '#4e844e',
          600: '#3b693b',
          700: '#305430',
          800: '#284428',
          900: '#223922',
        },
        sand: {
          50:  '#fdfaf5',
          100: '#f8f0e3',
          200: '#f0dfc0',
          300: '#e6ca96',
          400: '#d9b06a',
          500: '#cc9848',
          600: '#b07d36',
          700: '#8f632c',
          800: '#744f27',
          900: '#5e4122',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
