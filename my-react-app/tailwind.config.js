/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'introduction-texture': "url('/public/bg-main.jpg')",
      }
    },
  },
  plugins: [],
}

