import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        darkBg: "#0f172a"
      }
    }
  },
  plugins: []
} satisfies Config;
