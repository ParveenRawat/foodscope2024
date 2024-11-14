/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cream': "#FFF9ED",
        
      },
      fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui', ],
      // 'serif': ['ui-serif', 'Georgia', ],
      // 'mono': ['ui-monospace', 'SFMono-Regular', ],
      // 'display': ['Oswald', ],
      // 'body': ['"Open Sans"', ],
      // montserrat: ["Montserrat", "sans-serif"],
      // doto: ["Doto","sans-serif"]
      headings: ["Poppins", "sans-serif"],
      content: ["Roboto", "sans-serif"]
    }
    },
  },
  plugins: [],
};
