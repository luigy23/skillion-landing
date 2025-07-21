/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        // Paleta de colores RPG/Gaming inspirada en pixel art
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        gaming: {
          'dark': '#1a0b2e',
          'purple': '#16213e',
          'blue': '#0f3460',
          'cyan': '#533a7b',
          'gold': '#ffd700',
          'silver': '#c0c0c0',
          'bronze': '#cd7f32',
          'health': '#ff6b6b',
          'mana': '#4ecdc4',
          'exp': '#45b7d1',
        },
        pixel: {
          'bg1': '#0f0d1a',
          'bg2': '#1a1625',
          'card': '#252134',
          'border': '#3d3450',
          'text': '#e5e5e5',
          'text-secondary': '#a8a3b8',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'pixel-shimmer': 'pixel-shimmer 1.5s ease-in-out infinite',
        'levelup': 'levelup 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(217, 70, 239, 0.5)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(217, 70, 239, 0.8), 0 0 30px rgba(217, 70, 239, 0.6)' 
          },
        },
        'pixel-shimmer': {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.7 },
          '100%': { opacity: 1 },
        },
        levelup: {
          '0%': { transform: 'scale(1) translateY(0)', opacity: 1 },
          '50%': { transform: 'scale(1.1) translateY(-5px)', opacity: 0.9 },
          '100%': { transform: 'scale(1) translateY(0)', opacity: 1 },
        }
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0, 0, 0, 0.3)',
        'pixel-hover': '6px 6px 0px 0px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(217, 70, 239, 0.3)',
        'glow-strong': '0 0 30px rgba(217, 70, 239, 0.6)',
      },
      backgroundImage: {
        'pixel-gradient': 'linear-gradient(135deg, #1a0b2e 0%, #16213e 50%, #0f3460 100%)',
        'xp-gradient': 'linear-gradient(90deg, #45b7d1 0%, #4ecdc4 100%)',
        'gold-gradient': 'linear-gradient(90deg, #ffd700 0%, #ffed4a 100%)',
      }
    },
  },
  plugins: [],
}
