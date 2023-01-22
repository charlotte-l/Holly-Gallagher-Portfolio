const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.md", "./src/**/*.js", "./.*.js", "./_site/**/*.html"],
  theme: {
    colors: {
      "brand-primary": 'var(--brand-primary)',
      "brand-text": 'var(--brand-text)',
      "brand-link": 'var(--brand-link)',
      "body-bg": 'var(--body-bg)',
      "body-text": 'var(--body-text)',
      "body-link": 'var(--body-link)',
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
      serif: [...defaultTheme.fontFamily.serif],
    },
    container: {
      padding: '2rem',
      center: true,
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
      },
      gridTemplateColumns: {
        'postsList': '1fr 45ch',
      },
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
