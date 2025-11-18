import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["react-compiler"], // Enables React Compiler
      },
    }),

    tailwindcss(),
  ],
});
