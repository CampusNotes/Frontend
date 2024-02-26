import withMT from "@material-tailwind/react/utils/withMT"

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob_animate: 'blob 8s ease-in-out infinite'
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1) translateX(0%) translateY(0%)' },
          '25%': { transform: 'scale(1.3) translateX(20%) translateY(20%)' },
          '50%': { transform: 'scale(1.9) translateX(-20%) translateY(-20%)' },
          '75%': { transform: 'scale(1.3) translateX(10%) translateY(10%)' },
          '100%': { transform: 'scale(1) translateX(0%) translateY(0%)' }
        }
      }
    },
  },
  plugins: [],
})