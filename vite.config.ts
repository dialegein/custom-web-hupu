import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: "0.0.0.0",
    port: 1333,
    proxy: {
      "/api": {
        target: "https://bbs.mobileapi.hupu.com/3/8.0.32",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  build: {
    target: "esnext",
  },
});
