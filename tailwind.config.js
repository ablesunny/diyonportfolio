/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#050507',
          950: '#030305',
          900: '#050507',
          850: '#0a0a0f',
          800: '#121218',
          700: '#1a1a24',
          600: '#262636'
        },
        noir: {
          charcoal: '#121218',
          surface: '#161622',
          card: '#101018',
          border: '#242436',
          muted: '#6b7280'
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FFFDF5',
          100: '#FFF9E5',
          200: '#FDF1BE',
          300: '#F5E28E',
          400: '#E5C158',
          500: '#D4AF37',
          600: '#B89025',
          700: '#8C6B14',
          800: '#61480C',
          900: '#3D2C06'
        },
        script: {
          paper: '#0A0A0E',
          text: '#E2E8F0',
          heading: '#F8FAFC',
          muted: '#94A3B8',
          red: '#C53030'
        }
      },
      fontFamily: {
        screenplay: ['"Courier Prime"', '"Courier New"', 'Courier', 'monospace'],
        display: ['Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'flicker': 'flicker 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'roll': 'roll 30s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '0.97' },
          '25%': { opacity: '0.94' },
          '50%': { opacity: '1' },
          '75%': { opacity: '0.92' },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        roll: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 50px -10px rgba(212, 175, 55, 0.45)',
        'cinematic': '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(212, 175, 55, 0.15)',
        'noir-depth': '0 30px 60px -12px rgba(0, 0, 0, 0.95), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
