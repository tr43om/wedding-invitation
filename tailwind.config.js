// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // проверь путь под свою структуру
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        wedding: ['"Wedding"'],
      },
    },
  },
  plugins: [],
};
