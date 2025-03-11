/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { max: "480px" },  // Extra small devices (≤479px)
      sm: { max: "640px" },  // Small devices (≤639px)
      md: { max: "768px" },  // Medium devices (≤767px)
      custom: { max: "1200px" },
      lg: { max: "1024px" }, // Large devices (≤1023px)
      xl: { max: "1280px" }, // Extra large devices (≤1279px)
    },
    extend: {
      colors: {
        colorOne: "#FFBB00",
        colorText: "#6D6D6D",
      },
      translate: {
        320 : '320px',
      },
      boxShadow: {
        custom: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.65, 0, 0.076, 1)",
      },
      animation: {
        autoRun: "autoRun 40s linear infinite",
        marqueeReverse: "marqueeReverse 50s linear infinite",
        marquee: "marquee 50s linear infinite",
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
        marqueeReverse: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
