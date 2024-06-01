/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-gradient":
          "linear-gradient(90deg, rgba(18,57,212,1) 0%, rgba(30,187,232,1) 100%)",
        "page-gradient":
          "linear-gradient(49deg, rgba(26,42,74,1) 20%, rgba(20,18,40,1) 100%)",
        "golden-gradient":
          "linear-gradient(150deg, rgba(255,233,161,1) 35%, rgba(252,211,77,1) 50%)",
        "slate-gradient":
          "linear-gradient(150deg, rgba(35,38,59,0.5) 0%, rgba(35,38,59,1) 50%)",
      },
    },
  },
  plugins: [],
};
