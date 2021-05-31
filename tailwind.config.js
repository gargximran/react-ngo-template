module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "head-1": "85px",
        "head-2": "77px",
        "head-3": "65px",
        "head-4": "55px",
        "head-5": "48px",
        "head-6": "40px",
        "head-7": "36px",
        "head-8": "35px",
        "sub-head-1": "28px",
        "sub-head-2": "24px",
        "sub-head-3": "21px",
        "sub-head-4": "20px",
        "sub-head-5": "19px",
        "sub-head-6": "17px",
        paragraph: "16px",
        "paragraph-sm": "14px",
      },
      colors: {
        primary: "#1C4695",
        secondary: "#261F1F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};