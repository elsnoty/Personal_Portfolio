import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './Components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      fontFamily:{
        BlackOps : ["'Black Ops One'", "system-ui"],
        Exo : ["'Exo 2'", "sans-serif"],
        Algera : ["'Alegreya Sans SC'", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config