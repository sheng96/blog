
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/themes/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT:  '#ffffff'
        },
        night: {
          DEFAULT:  '#111827'
        },
      },
      maxWidth: {
        side: '14rem',
        '9/10': '90%'
      }
    },
  },
  plugins: [],
};
