const { createProxyMiddleware} = require('http-proxy-middleware')
const app = require('express')()
app.use(
  "/api",
  createProxyMiddleware({
    pathRewrite: {
      "^/api": "",
    },
    target: "https://bbs.mobileapi.hupu.com",
    changeOrigin: true,
  })
);

app.use(
  "/source",
  createProxyMiddleware({
    pathRewrite: {
      "^/source": "",
    },
    target: "https://i10.hoopchina.com.cn",
    changeOrigin: true,
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader("Referer", "https://bbs.hupu.com/");
    },
  })
);

app.use(
  "/video",
  createProxyMiddleware({
    pathRewrite: {
      "^/video": "",
    },
    target: "https://v.hoopchina.com.cn",
    changeOrigin: true,
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader("Referer", "https://bbs.hupu.com/");
    },
  })
);


module.exports = app