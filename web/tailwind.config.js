const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.md", "./src/**/*.js", "./.*.js", "./_site/**/*.html"],
  theme: {
    colors: {
      "brand-primary": 'var(--brand-primary)',
      "brand-secondary": 'var(--brand-secondary)',
      "brand-body": 'var(--brand-body)',
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      body: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      display: ['"Frente H1"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'heartbeat': 'heartbeat 5s ease-in-out infinite both',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(0.9)'
          }
        },
      },
      maxWidth: {
        'prose': '75ch',
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
