const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Set up proxy for all API requests
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.tolly.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the /api prefix when forwarding
      },
      secure: true,
      logLevel: 'debug',
      onProxyReq: (proxyReq, req, res) => {
        console.log(`Proxying: ${req.method} ${req.url} → ${proxyReq.path}`);
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log(`Proxy response: ${req.url} - ${proxyRes.statusCode}`);
      },
      onError: (err, req, res) => {
        console.error('Proxy error:', err);
        res.status(500).send(`Proxy Error: ${err.message}`);
      }
    })
  );
}; 