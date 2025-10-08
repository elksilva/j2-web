/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,scss}"],
  theme: {
    extend: {
      colors: {
        primario: '#4F46E5',    // Azul principal
        secundario: '#FACC15',  // Amarillo secundario
        oscuro: '#1E1E1E',      // Fondo oscuro
        claro: '#F9FAFB',       // Fondo claro
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
