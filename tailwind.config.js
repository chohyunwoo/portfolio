/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEF3FF",
          100: "#DCE8FF",
          400: "#5C82FF",
          500: "#3D6BFF",
          600: "#1E4FE0",
          700: "#1638A6"
        }
      }
    }
  },
  plugins: []
};
