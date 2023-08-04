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
      fontSize: {
        "2xs": "0.7rem",
        "3xs": "0.675rem",
        "4xs": "0.65rem",
        "5xs": "0.6rem",
        "6xs": "0.55rem",
        "7xs": "0.5rem",
      },
    },
  },
  plugins: [],
};
