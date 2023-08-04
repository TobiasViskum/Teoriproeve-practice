/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "bg-neutral-950",
        light: "bg-slate-50",
        second: "bg-neutral-400",
      },
      textColor: {
        dark: "bg-neutral-950",
        light: "bg-slate-50",
        second: "bg-neutral-400",
      },
    },
  },
  plugins: [],
};
