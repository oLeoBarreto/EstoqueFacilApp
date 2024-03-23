import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
        "true-blue": {
            "200": "#B7C5DB",
            "300": "#92A9C9",
            "400": "#6E8CB7",
            DEFAULT: "#4A6FA5",
            "600": "#3B5984",
            "700": "#2C4363",
            "800": "#1E2C42",
        },
        "raisin-black": {
            "200": "#9EA0A6",
            "300": "#71757B",
            "400": "#454951",
            DEFAULT: "#181D27",
            "600": "#13171F",
            "700": "#0E1117",
            "800": "#0A0C10",
        },
        "seasalt": {
            "200": "#FBFBFB",
            "300": "#FAFAFA",
            "400": "#F8F8F8",
            DEFAULT: "#F6F6F6",
            "600": "#C5C5C5",
            "700": "#949494",
            "800": "#626262",
        },
        "cambridge-blue": {
            "200": "#D3E9DE",
            "300": "#BEDECE",
            "400": "#A8D3BD",
            DEFAULT: "#92C8AD",
            "600": "#77A58E",
            "700": "#5D8370",
            "800": "#426051",
        },
        "hunter-green": {
            "200": "#94B397",
            "300": "#729777",
            "400": "#517B56",
            DEFAULT: "#305F35",
            "600": "#264C2A",
            "700": "#1D3920",
            "800": "#132615",
        },
    },
    fontFamily: {
        "roboto": ["Roboto", "Arial", "sans-serif"],
        "nunito": ["Nunito", "Arial", "sans-serif"],
    }
  },
  plugins: [],
};
export default config;