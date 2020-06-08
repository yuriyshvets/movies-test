const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");
const { createProxyMiddleware } = require("http-proxy-middleware");
const dotenv = require("dotenv");

const dotenvResult = dotenv.config();
const env = dotenvResult.parsed;

const app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(
  "/api",
  createProxyMiddleware({
    target: env.API_BASE_URL,
    changeOrigin: true,
    pathRewrite: function(path) {
      return path.replace("/api", env.API_BASE_URL) + `&apiKey=${env.API_KEY}`;
    }
  })
);
const port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);
