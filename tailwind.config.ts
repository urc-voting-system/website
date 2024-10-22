import type { Config } from "tailwindcss";
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

const config: Config = {
  darkMode: "class", // Use string for dark mode configuration
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#053247",
        secondary: "#yourSecondaryColorHere", // Add your secondary color or remove if not needed
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors, // Correctly add a comma here
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: { addBase: any; theme: any }) {
  const allColors = flattenColorPalette(theme("colors")); // Flatten the color palette
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]) // Map colors to CSS variables
  );

  addBase({
    ":root": newVars, 
  });
}

export default config;
