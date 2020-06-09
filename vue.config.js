module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.API_BASE_URL,
        changeOrigin: true,
        pathRewrite(path) {
          return `${path.replace('/api', process.env.API_BASE_URL)}&apiKey=${process.env.API_KEY}`;
        },
      },
    },
  },
};
