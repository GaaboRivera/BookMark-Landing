/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        "grayish-blue": "hsl(229, 8%, 60%)",
        "very-darkblue": "hsl(229, 31%, 21%)"
      },
      fontFamily: {
        rubik: ["'Rubik'", "sans-serif"]
      },
      backgroundImage: {
        "open-menu": "url('../images/icon-hamburger.svg')",
        "close-menu": "url('../images/icon-close.svg')"
      }
    }
  },
  plugins: []
};
