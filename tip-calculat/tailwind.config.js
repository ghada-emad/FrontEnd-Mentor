/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        Strongcyan: "hsl(172, 67%, 45%)",
        Very_dark_cyan:"hsl(183, 100%, 15%)",
        Dark_grayish_cyan:"hsl(186, 14%, 43%)",
        Grayish_cyan:"hsl(184, 14%, 56%)",
       Light_grayish_cyan: "hsl(185, 41%, 84%)",
       Very_light_grayish_cyan: "hsl(189, 41%, 97%)",
       White: "hsl(0, 0%, 100%)"
      },
      fontSize:{
        form_input:"24px",
      },
      fontFamily:{
        coloringText:['Space Mono']
      }
    },
  },
  plugins: [],
}
