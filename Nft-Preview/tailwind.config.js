/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        Softblue: 'hsl(215, 51%, 70%)',
        Cyan: 'hsl(178, 100%, 50%)',
        Verydarkbluemain: 'hsl(217, 54%, 11%)',
        Verydarkbluecard : 'hsl(216, 50%, 16%)',
        Verydarkblueline: 'hsl(215, 32%, 27%)',
        White: 'hsl(0, 0%, 100%)'
      },
      fontSize:{
        paragraph : '18px'
      },
      fontFamily:{
        'sans':['Outfit']
      }
    },
  },
  plugins: [],
}
