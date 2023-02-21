module.exports = {
  devServer: {
    proxy: {
      '/proxyPrefix1': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/proxyPrefix1': '' },
        ws: true, // 用于支持websocket
        changeOrigin: true, // 用于控制请求头中的host值
      },
      '/proxyPrefix2': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/proxyPrefix2': '' },
        ws: true, // 用于支持websocket
        changeOrigin: true, // 用于控制请求头中的host值
      },
    },
  },
};
