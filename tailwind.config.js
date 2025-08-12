/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neural-dark': '#0a0a0f',
        'neural-navy': '#1a1a2e',
        'neural-blue': '#16213e',
        'neural-electric': '#0f3460',
        'neural-cyan': '#00d4ff',
        'neural-green': '#00ff88',
        'neural-purple': '#6c5ce7',
        'neural-gradient-start': '#0f3460',
        'neural-gradient-end': '#00d4ff',
      },
      fontFamily: {
        'tech': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'neural-pulse': 'neural-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff' },
          '100%': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' },
        },
        'neural-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'neural-gradient': 'linear-gradient(135deg, #0f3460 0%, #00d4ff 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(15, 52, 96, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}