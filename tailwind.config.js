const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/*.{html,js,css}",
    "./*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Core brand colors
        'brand': {
          secondary: '#1ABC9C', // Teal: secondary buttons, highlights, icon fills
          primary: '#0A3D62',   // Deep Navy: headers, primary buttons, top‐nav backgrounds
          accent: '#C7EA46',    // Lime Green: use sparingly on CTAs, status indicators, key highlights
          charcoal: '#2F3640',  // Charcoal: body text, secondary text, dark backgrounds
          lightGray: '#F5F6FA', // Light Gray: backgrounds, borders, light text
          alert: '#F39C12',     // Orange: use only for error/warning states to avoid diluting the primary palette
        }
      },
      screens: {
        xs: "550px",
        ...defaultTheme.screens,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
