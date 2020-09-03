// prettier-ignore
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        "white": "#E1CAB2",
        "red-500": "#CD3040",
        "white-default": "#FFF",
      },
    },
  },
  variants: {},
  plugins: [],
};
