/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    styled: true,
    // darkTheme: "sunset", // name of one of the included
  },
};
