/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Legacy colors (keeping for transition)
        navy: '#031472',
        gold: '#ebde41',
        ivory: '#f8f8f5',
        text: '#1a1a1a',
        eco: '#4a8f47',
        'light-grey': '#e0e0e0',
        
        // New Pastel Palette
        'soft-lavender': '#E8E2F7',
        'powder-blue': '#E1F0FF',
        'mint-green': '#E8F5E8',
        'peach': '#FFE8E1',
        'light-coral': '#FFF0F3',
        'soft-gold': '#F9F1C7',
        'gentle-rose': '#F7E8F0',
        'lavender-mist': '#F0EBFF',
        'soft-charcoal': '#4A4A4A',
        'medium-gray': '#6B6B6B',
        'light-gray': '#E5E5E5',
        'pure-white': '#FFFFFF',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E8E2F7 0%, #E1F0FF 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #E8F5E8 0%, #FFE8E1 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F9F1C7 0%, #F7E8F0 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FFF0F3 0%, #F0EBFF 100%)',
        'gradient-hero': 'linear-gradient(135deg, #E8E2F7 0%, #E1F0FF 50%, #E8F5E8 100%)',
        'gradient-card': 'linear-gradient(135deg, #FFFFFF 0%, #F0EBFF 100%)',
      },
      scale: {
        '102': '1.02',
      },
      transitionDuration: {
        '400': '400ms',
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(232, 226, 247, 0.3)',
        'pastel': '0 8px 30px rgba(225, 240, 255, 0.4)',
        'gradient': '0 10px 40px rgba(248, 245, 232, 0.3)',
      },
    },
  },
  plugins: [],
}