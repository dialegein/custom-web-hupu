import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: "0.0.0.0",
    port: 1333,
    proxy: {
      "/api": {
        target: "https://bbs.mobileapi.hupu.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      /** 代理请求修改header中的REFER字段为 https://bbs.hupu.com/, 以跳过权限检查 */
      "/source": {
        target: "https://i10.hoopchina.com.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/source/, ""),
        configure: (proxy, _options) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader('Referer', 'https://bbs.hupu.com/')
          });
        },
      },
      "/video": {
        target: "https://v.hoopchina.com.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/video/, ""),
        configure: (proxy, _options) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader('Referer', 'https://bbs.hupu.com/')
          });
        },
      },
    },
  },

  build: {
    target: "esnext",
  },
});
