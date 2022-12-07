/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui:{
  //   themes : [
  //     {
  //       doctortheme:{

  //         primary: '#343232',
  //         secondary:'#343232',
  //         accent: "#343232",
          
  //         neutral: "#272626",
                   
  //         "base-100": "#000000",
  //       }
  //     }

  //   ]
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
