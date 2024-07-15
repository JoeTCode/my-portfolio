/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        accentColor: "rgb(151, 106, 249)",
      },
      backgroundImage: {
        'introduction-texture': "url('/public/bg-main.jpg')",
      }
    },
  },
  plugins: [],
}

