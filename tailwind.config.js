/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        facebook: "hsl(208, 92%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        twitter: "hsl(203, 89%, 53%)",
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        bgColor: "hsl(0, 0%, 100%)",
        darkBgColor: "hsl(230, 17%, 14%)",
        PatternColorBg: "hsl(225, 100%, 98%)",
        darkPatternColorBg: "hsl(232, 19%, 15%)",
        cardBg: "hsl(227, 47%, 96%)",
        darkCardBg: "hsl(228, 28%, 20%)",
        secondaryText: "hsl(228, 12%, 44%)",
        darkSecondaryText: "hsl(228, 34%, 66%)",
        primaryText: "hsl(0, 0%, 100%)",
        darkPrimaryText: "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
