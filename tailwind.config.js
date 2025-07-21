/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // 如果你是用 App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // 如果你是用 Page Router
    "./components/**/*.{js,ts,jsx,tsx}", // 通用
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
