const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        200: "200deg",
        225: "225deg",
        270: "270deg",
        315: "315deg",
        360: "360deg",
      },

      colors: {
        primary: "#5B04C5",
        secondary: "#EFEFFD",
        secondprimary: "#212844",
        borderprimary: "#DEDFEE",
        textsecondary: "#9397BB",
        textsecondprimary: "#9397BB",
        darkprimary: "#1A1B27",
        darksecondary: "#24243E",
        textprimary: "#212844",
        textsecondary: "#9397BB",
        sky: colors.sky,
        stone: colors.stone,
        neutral: colors.neutral,
        gray: colors.gray,
        slate: colors.slate,
        emerald: colors.emerald,
        teal: colors.teal,
        rose: colors.rose,
        amber: colors.amber,
        red: colors.red,
        green: colors.green,
        blue: colors.blue,
      },
      backgroundImage: {
        authBackground: "url('/path-to-your-svg.svg')",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "'Inter'", "sans-serif"],
        inter: ["var(--font-inter)", "'Inter'", "sans-serif"],
        sora: ["var(--font-sora)", "'Sora'", "sans-serif"],
        heading: ["var(--font-sora)", "'Sora'", "sans-serif"],
        "lato-thin": ["var(--font-inter)", "'Inter'", "sans-serif"],
        "lato-light": ["var(--font-inter)", "'Inter'", "sans-serif"],
        "lato-regular": ["var(--font-inter)", "'Inter'", "sans-serif"],
        "lato-bold": ["var(--font-sora)", "'Sora'", "sans-serif"],
        "lato-black": ["var(--font-sora)", "'Sora'", "sans-serif"],
        roboto: ["var(--font-inter)", "'Inter'", "sans-serif"],
      },
      fontWeight: {
        550: "550",
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
        }
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
});
