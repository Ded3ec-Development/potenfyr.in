/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          charcoal: '#0a0a0a',
          dark: '#111111',
          mid: '#1a1a1a',
          grey: '#222222',
          light: '#2a2a2a',
          silver: '#8a8a8a',
          muted: '#666666',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          glow: '#1e40af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'grain': 'grain 0.5s steps(1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-10%)' },
          '30%': { transform: 'translate(3%,-15%)' },
          '50%': { transform: 'translate(12%,9%)' },
          '70%': { transform: 'translate(9%,4%)' },
          '90%': { transform: 'translate(-1%,7%)' },
        },
      },
    },
  },
  plugins: [],
};
