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
    extend: {
      backgroundImage: {
        'progress-striped':
          'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
        'progress-indeterminate':
          'linear-gradient(to right, transparent 0%, currentColor 50%, transparent 100%)',
      },
      animation: {
        'progress-indeterminate':
          'progress-indeterminate 1s ease infinite normal none running',
        'progress-striped': 'progress-striped 1s linear infinite',
        'circular-progress-indeterminate':
          'circular-progress-indeterminate 2s linear infinite',
        'circular-progress-indeterminate-stroke':
          'circular-progress-indeterminate-stroke 1.5s linear infinite',
      },
      keyframes: {
        'progress-indeterminate': {
          '0%': { left: '-40%' },
          '100%': { left: '100%' },
        },
        'progress-striped': {
          '0%': { backgroundPosition: '1rem 0' },
          '100%': { backgroundPosition: '0 0' },
        },
        'circular-progress-indeterminate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'circular-progress-indeterminate-stroke': {
          '0%': {
            strokeDasharray: '1, 400',
            strokeDashoffset: '0',
          },
          '50%': {
            strokeDasharray: '400, 400',
            strokeDashoffset: '-100',
          },
          '100%': {
            strokeDasharray: '400, 400',
            strokeDashoffset: '-260',
          },
        },
      },
      ...customTheme,
    },
  },
  plugins: [],
};
export default config;
