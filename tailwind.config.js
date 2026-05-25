/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
  colors: {
  primary: "#F3801B",
  primaryHover: "#EA6E00",

  
  secondary: "#38BDF8",
  accent: "#22C55E",

  background: "#FFF8F1",

  sidebar: "#FFFFFF",

  textPrimary: "#0F172A",
  textSecondary: "#64748B",

  borderColor: "#FED7AA",

  card: "#FFFFFF",

  hover: "#FFF1E6",

  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",

  online: "#22C55E",
  offline: "#94A3B8",
},
      
     borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 10px 25px rgba(243, 128, 27, 0.08)",
      },
    },
  },

  plugins: [],
}