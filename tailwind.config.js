/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', '.index.html'],
  theme: {
    extend: {
      fontFamily: {
        Figtree: 'Figtree, sans-serif',
      },
      colors: {
        bg: '#09090A',
      },
    },
  },
  plugins: [],
};
