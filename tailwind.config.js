// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        pulseGlow: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '0.8' },
          '50%': { transform: 'scale(1.15) rotate(10deg)', opacity: '0.3' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.8' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
