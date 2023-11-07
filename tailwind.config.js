/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle farthest-side at var(--x, 100px) var(--y, 100px), #dc0474 -50%, transparent 100%)",
        shadowImg:
          "https://assets-global.website-files.com/63717dfd25366f06c3ed64cc/63717dfd25366f6797ed65c2_inner-section-dark-bg-blur-codely-webflow-ecommerce-template.png",
      },
      fontFamily: {
        "font-heading": "'Cousine', monospace",
      },
      boxShadow: {
        "custom-pink": "0 4px 25px -4px #dc0474, 0 0px 20px -6px #006bb7",
      },
    },
  },
  plugins: [],
};
