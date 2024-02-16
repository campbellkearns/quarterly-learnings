/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#80A1D4",
          secondary: "#355834",
          tertiary: "#14281D",
          accent: "#FFDB00",
          neutral: "#6E633D",
        },
        fontFamily : {
          serif: ['Lora', 'serif'],
          sans: ['Manrope', 'sans-serif']
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
};
