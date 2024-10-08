/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

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
      textShadow: {
        sm: '0 1px 2px #020617',
        DEFAULT: '0 2px 4px #020617',
        lg: '0 8px 16px #020617',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
