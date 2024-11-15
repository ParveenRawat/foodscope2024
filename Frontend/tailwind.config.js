/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "60px",
        },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        cream: "#FFF9ED",
        green: "#A3B9A2",
        forest: "#4D5D4B",
        jade: "#333333",
        sun: "#E27D60",
      },
      fontFamily: {
        // 'sans': ['ui-sans-serif', 'system-ui', ],
        // 'serif': ['ui-serif', 'Georgia', ],
        // 'mono': ['ui-monospace', 'SFMono-Regular', ],
        // 'display': ['Oswald', ],
        // 'body': ['"Open Sans"', ],
        // montserrat: ["Montserrat", "sans-serif"],
        doto: ["Doto", "sans-serif"],
        headings: ["Poppins", "sans-serif"],
        content: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
