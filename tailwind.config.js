module.exports = {
  purge: ['./pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        "'Plus Jakarta Display'",
        "'Helvetica Neue'",
        'Arial',
        'sans-serif',
      ],
      serif: ["'Nanum Pen Script'", "'Helvetica Neue'", 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
