/** @type {import('tailwindcss').Config} */
module.exports = {
  extend: { fontFamily: { custom: ["MiFuentePersonalizada", "sans"] } },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#1BA049"
      }
    }
  },
  plugins: []
};
