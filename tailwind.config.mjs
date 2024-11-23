/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class', 
  theme: {

    extend: {
      colors: {
        customColor1: "#1E201E", // Nombre personalizado para el color
        customColor2: "#3C3D37",
        customColor3: "#697565",
        customColor4: "#ECDFCC",
        customColor5: "#45b23e",
        customColor6: "#d5c2a6"

      },

      animation: {
        float: "float 3s ease-in-out infinite", // Nombre y configuración de la animación
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" }, // Inicio y fin
          "50%": { transform: "translateY(-20px)" }, // Punto medio
        },
      },
    },
  },
  plugins: [],
};
