module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    fontFamily: {
      display: ["Recoleta", "serif"],
      body: ["Barlow", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      colors: {
        secondary: "#5a7672",
        primary: "#c9803a",
        black: "#000",
        dark: "#122025",
        light: "#f8f9fa",
        white: "#fff",
        gray: {
          100: "#f1f1f3",
          200: "#e3e4e8",
          300: "#c7c9d3",
          400: "#aaaebc",
          500: "#9b9dad",
          600: "#717790",
          700: "#5a5f73",
          800: "#444857",
          900: "#1e1f26",
        },
      },
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
}
