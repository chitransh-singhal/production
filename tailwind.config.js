/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colorOne: "#FFBB00",
        colorText: "#6D6D6D",
      },
      perspective: {
        1000: '1000px',
      },
      animation: {
        autoRun: "autoRun 40s linear infinite",
      },
      keyframes: {
        autoRun: {
          "0%": {
            transform: "perspective(1000px) rotateX(-16deg) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(1000px) rotateX(-16deg) rotateY(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
