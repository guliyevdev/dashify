import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
    host: "0.0.0.0",
    proxy: {
      '/backend': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/backend/, ''),
        // eslint-disable-next-line no-unused-vars
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('api proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('api Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('api Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      }
    }
  },
})
