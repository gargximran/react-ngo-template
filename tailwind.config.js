module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
        serif: ["serif"],
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
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/40": "40vh",
        "screen/45": "45vh",
        "screen/60": "60vh",
        "screen/29": "29vh",
        "screen/25": "25vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      colors: {
        primary: "#1C4695",
        secondary: "#EF7267",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        donation: "#5CACA9",
      }),
      minHeight: {
        "150px": "150px",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
