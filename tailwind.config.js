/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-200": "#FFCCC9",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "primary-400": "#FF8985",
        "primary-600": "#E85D58",
        "primary-900": "#9F3835",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "secondary-600": "#5E0000",
        "per-grey": "#e5e7eb",
      },
      boxShadow: {
        pink: "5px 10px 15px rgba(255, 102, 153, 0.5)",
        pinksm: "2px 4px 15px rgba(255, 102, 153, 0.5)",
      },
      dropShadow: {
        black: "10px 10px 20px rgb(82, 81, 81)",
        pink: "5px 10px 15px rgb(255, 102, 153)",
      },
      textShadow: {
        custom: "10px 10px 20px rgb(82, 81, 81)",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
      },
      keyframes: {
        waving: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        jumping: {
          "0%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-6px)" },
          "70%": { transform: "translateY(0)" },
          "80%": { transform: "translateX(-1.2px)" },
          "90%": { transform: "translateX(1.2px)" },
          "95%": { transform: "translateX(-1.2px)" },
        },
      },
      animation: {
        "waving-hand": "waving 2s linear infinite",
        "jumping-icon": "jumping 1.3s infinite",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1400px",
      xl: "1480px",
    },
  },
  plugins: [],
};
