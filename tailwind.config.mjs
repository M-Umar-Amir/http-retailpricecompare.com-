/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGreen: '#a5c639',
      },
      keyframes: {
        colorChange: {
          '0%': { color: '#000' }, // Dark Pink
          '50%': { color: '#ffa500' }, // Orange
          '100%': { color: '#fff' }, // Back to Dark Pink
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        colorChange: 'colorChange 3s infinite',
      },
  
    },
  },
  plugins: [],
};
