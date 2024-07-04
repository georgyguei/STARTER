import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import customTheme from './src/lib/theme';

const config: Config = {
  mode: 'jit',
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: customTheme,
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        noOfLines: value => {
          return {
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: value,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          };
        },
      });
    }),
  ],
};
export default config;
