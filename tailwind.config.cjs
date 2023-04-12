/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "20px 10px 30px -10px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' }
        },
        scaleup: {
          '0%': {
            transform: 'scale(0.5)',
          },
          '100% ': {
            transform: ' scale(1)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        scaleup: 'scaleup 1s ease-in-out'
      },
    },
  },
  plugins: [],
};
