/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#050505',
          deep: '#030305',
          surface: '#07070a',
          elevated: '#0c0c10',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        neon: {
          DEFAULT: '#00FF94',
          mint: '#2FFFB0',
          lime: '#C8F5E8',
          cyan: '#00F5D4',
          blue: '#3B82F6',
          violet: '#8B5CF6',
          amber: '#F59E0B',
        },
        cream: '#F0EDE8',
        offwhite: '#C8F5E8',
        muted: '#A1A1AA',
        subtle: '#7A7068',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-neon': '0 0 35px -5px rgba(0, 255, 148, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(0, 245, 212, 0.35)',
        'glow-blue': '0 0 35px -5px rgba(59, 130, 246, 0.35)',
        'glow-violet': '0 0 35px -5px rgba(139, 92, 246, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.65)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'ping-ring': 'pingRing 2.4s cubic-bezier(0, 0, 0.2, 1) infinite',
        'eq-bar-1': 'eqBar1 0.75s ease-in-out infinite alternate',
        'eq-bar-2': 'eqBar2 0.55s ease-in-out infinite alternate 0.15s',
        'eq-bar-3': 'eqBar3 0.85s ease-in-out infinite alternate 0.05s',
        'eq-bar-4': 'eqBar4 0.65s ease-in-out infinite alternate 0.2s',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%,-40%) scale(1)' },
        },
        pingRing: {
          '0%': { transform: 'scale(0.95)', opacity: '0.85' },
          '70%, 100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        eqBar1: {
          '0%': { height: '3px' },
          '100%': { height: '14px' },
        },
        eqBar2: {
          '0%': { height: '12px' },
          '100%': { height: '4px' },
        },
        eqBar3: {
          '0%': { height: '5px' },
          '100%': { height: '15px' },
        },
        eqBar4: {
          '0%': { height: '13px' },
          '100%': { height: '3px' },
        },
      },
    },
  },
  plugins: [],
}
