/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        montserrat: "Montserrat, sans-serif"
      }, 
      boxShadow: {
        "all-side": "2px 2px 5px rgba(150, 150, 150, 0.8), -2px -2px 5px rgba(150, 150, 150, 0.8), -2px 2px 5px rgba(150, 150, 150, 0.8),2px -2px 5px rgba(150, 150, 150, 0.8)",
  
        "bottom-only" : "0px 2px 6px rgba(123, 123, 123, 0.8)",
  
        "notif": "1px 1px 2px rgba(150, 150, 150, 0.8), -1px -1px 2px rgba(150, 150, 150, 0.8), -1px 1px 2px rgba(150, 150, 150, 0.8), 1px -1px 2px rgba(150, 150, 150, 0.8)",
  
        "as-thiner" : "1px 1px 1px rgba(170, 170, 170, 0.8), -1px -1px 1px rgba(170, 170, 170, 0.8), -1px 1px 1px rgba(170, 170, 170, 0.8),1px -1px 1px rgba(170, 170, 170, 0.8)"
  
  
      }
    }
  },
  plugins: [],
}

