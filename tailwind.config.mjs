/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ctp: {
          base: "#1e1e2e",
          mantle: "#181825",
          crust: "#11111b",
          surface0: "#313244",
          surface1: "#45475a",
          surface2: "#585b70",
          overlay0: "#6c7086",
          text: "#cdd6f4",
          subtext1: "#bac2de",
          mauve: "#cba6f7",
          green: "#a6e3a1",
          teal: "#94e2d5",
          blue: "#89b4fa",
          lavender: "#b4befe",
          yellow: "#f9e2af",
          peach: "#fab387",
          red: "#f38ba8",
        },
        coren: {
          accent: "#cba6f7",
          dim: "#45475a",
          bg: "#1e1e2e",
          surface: "#313244",
        },
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', "monospace"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
