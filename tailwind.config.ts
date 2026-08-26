import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0c0a09',
        surface: {
          DEFAULT: '#131110',
          '2': '#1a1714',
          '3': '#201d19',
        },
        border: {
          DEFAULT: '#242018',
          '2': '#332e28',
        },
        text: {
          DEFAULT: '#eae5dc',
          '2': '#948b80',
          '3': '#504840',
        },
        accent: {
          DEFAULT: '#c05828',
          hi: '#d96f3e',
          dim: '#5a2814',
        },
        green: {
          DEFAULT: '#5a8a60',
          dim: '#1e3020',
        },
        code: {
          keyword: '#d96f3e',
          type: '#b8a06e',
          string: '#6a9a6e',
          fn: '#8aaccc',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        mono2: ['var(--font-jet-brains-mono)', 'Courier New', 'monospace'],
        mono: ['var(--font-ibm-plex-mono)', 'var(--font-jet-brains-mono)', 'monospace']
      },
      letterSpacing: {
        widest: '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
