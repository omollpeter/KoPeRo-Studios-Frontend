/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#020617',
        light: '#f1f5f9',
        slate400: '#94a3b8',
        slate600: '#7a8a9e',
        slate800: '#334460',
        blue: '#2563eb',
        pink: '#db2778',
      },
    },
  },
  plugins: [],
};
