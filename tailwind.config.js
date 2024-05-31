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
        "main-gradient": "linear-gradient(90deg, rgba(18,57,212,1) 0%, rgba(30,187,232,1) 100%)",
      },
    },
  },
  plugins: [],
};
