import { join } from 'path';
import plugin from 'tailwindcss/plugin';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [join(import.meta.dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}')],
  plugins: [
    animate,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.press': {
          transform: 'var(--transform-press)',
        },
      });
    }),
  ],
  darkMode: 'class',
};