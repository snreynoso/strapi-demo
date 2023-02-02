module.exports = {
  content: [
    './src/pages/**/*.{js, jsx, ts, tsx}',
    './components/**/*.{js, jsx, ts,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
}
