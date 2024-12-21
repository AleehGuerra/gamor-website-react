/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-photo' : "url('/src/assets/FondoLogin.webp')",
        'white-bg' : "url(/src/assets/FondoClaro.webp)",
        'black-bg' : "url(/src/assets/FondoOscuro.webp)",
      },
      height: {
        '128': '32rem',
        '200': '40rem',
      },
    },
  },
  
  plugins: [],
}

