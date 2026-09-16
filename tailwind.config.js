/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream: '#FAF7F2',
        'cream-dark': '#F2EDE4',
        butter: '#F8E7A1',
        peach: '#FFD6C0',
        powder: '#C9E7F5',
        lavender: '#DCCCF5',
        pink: '#F4C7D9',
        mint: '#CDEBD8',
        coral: '#F4A58A',
        ink: '#1E1B18',
        'ink-muted': '#6B655F',
        'ink-light': '#9E978F',
        'warm-border': '#EAE3D8',
      },
      boxShadow: {
        'pastel-sm': '0 2px 8px rgba(30, 27, 24, 0.04)',
        'pastel': '0 8px 24px -4px rgba(30, 27, 24, 0.06)',
        'pastel-lg': '0 16px 36px -6px rgba(30, 27, 24, 0.08)',
        'sticker': '0 4px 12px rgba(30, 27, 24, 0.08), 0 1px 3px rgba(30, 27, 24, 0.04)',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        widest: '0.2em',
      }
    },
  },
  plugins: [],
}
