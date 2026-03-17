/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        energy: {
          50:  '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
        },
        sage: {
          50:  '#f8faf5',
          100: '#eef4e8',
          200: '#d9e8cc',
          300: '#b8d4a0',
          400: '#8fb96e',
          500: '#6d9e48',
          600: '#557e35',
        },
        earth: {
          50:  '#faf9f7',
          100: '#f2ede5',
          200: '#e3d9c8',
          300: '#ccbda4',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.4)',
        'glow-green-lg': '0 0 40px rgba(34, 197, 94, 0.3)',
        'organic': '0 20px 60px -10px rgba(21, 128, 61, 0.25)',
        'card': '0 8px 40px -8px rgba(0,0,0,0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
