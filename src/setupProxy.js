import { createProxyMiddleware } from "http-proxy-middleware";

export default (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: import.meta.env.VITE_BASE_URL,
      changeOrigin: true,
    })
  );
};