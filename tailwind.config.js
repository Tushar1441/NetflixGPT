/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundimage: {
        heropatt: "url('/constants/bodyimg.jpg')",
      },
    },
  },
  plugins: [],
};
