// vite.config.js
import react from "file:///C:/develop/fp-frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import sourcemaps from "file:///C:/develop/fp-frontend/node_modules/rollup-plugin-sourcemaps/dist/index.js";
import { defineConfig } from "file:///C:/develop/fp-frontend/node_modules/vitest/dist/config.js";
var vite_config_default = defineConfig({
  plugins: [
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: "**/*.{ts,tsx}"
    })
  ],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  },
  server: {
    port: 9010,
    proxy: {
      "/fpsak/api": {
        target: "http://127.0.0.1:9000",
        changeOrigin: false,
        secure: false
      },
      "/fptilbake/api": {
        target: "http://127.0.0.1:9000",
        changeOrigin: false,
        secure: false
      },
      "/fplos/api": {
        target: "http://127.0.0.1:9000",
        changeOrigin: false,
        secure: false
      },
      "/fpfordel/api": {
        target: "http://127.0.0.1:9000",
        changeOrigin: false,
        secure: false
      },
      "/fpformidling/api": {
        target: "http://127.0.0.1:9000",
        changeOrigin: false,
        secure: false
      }
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      plugins: [sourcemaps({ exclude: /@sentry/ })]
    }
  },
  test: {
    environment: "jsdom",
    css: false,
    globals: true,
    setupFiles: "vitest-setup.ts",
    watch: false,
    testTimeout: 15e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxkZXZlbG9wXFxcXGZwLWZyb250ZW5kXFxcXGFwcHNcXFxcZnAtZnJvbnRlbmQtYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxkZXZlbG9wXFxcXGZwLWZyb250ZW5kXFxcXGFwcHNcXFxcZnAtZnJvbnRlbmQtYXBwXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9kZXZlbG9wL2ZwLWZyb250ZW5kL2FwcHMvZnAtZnJvbnRlbmQtYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBzb3VyY2VtYXBzIGZyb20gJ3JvbGx1cC1wbHVnaW4tc291cmNlbWFwcyc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KHtcbiAgICAgIC8vIFVzZSBSZWFjdCBwbHVnaW4gaW4gYWxsICouanN4IGFuZCAqLnRzeCBmaWxlc1xuICAgICAgaW5jbHVkZTogJyoqLyoue3RzLHRzeH0nLFxuICAgIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICBsb2NhbHNDb252ZW50aW9uOiAnY2FtZWxDYXNlJyxcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA5MDEwLFxuICAgIHByb3h5OiB7XG4gICAgICAnL2Zwc2FrL2FwaSc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzEyNy4wLjAuMTo5MDAwJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiBmYWxzZSxcbiAgICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAnL2ZwdGlsYmFrZS9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMjcuMC4wLjE6OTAwMCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogZmFsc2UsXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgJy9mcGxvcy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMjcuMC4wLjE6OTAwMCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogZmFsc2UsXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgJy9mcGZvcmRlbC9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMjcuMC4wLjE6OTAwMCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogZmFsc2UsXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgJy9mcGZvcm1pZGxpbmcvYXBpJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vMTI3LjAuMC4xOjkwMDAnLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IGZhbHNlLFxuICAgICAgICBzZWN1cmU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBwbHVnaW5zOiBbc291cmNlbWFwcyh7IGV4Y2x1ZGU6IC9Ac2VudHJ5LyB9KV0sXG4gICAgfSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIGNzczogZmFsc2UsXG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBzZXR1cEZpbGVzOiAndml0ZXN0LXNldHVwLnRzJyxcbiAgICB3YXRjaDogZmFsc2UsXG4gICAgdGVzdFRpbWVvdXQ6IDE1MDAwLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZULE9BQU8sV0FBVztBQUMvVSxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUU3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxNQUVKLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxrQkFBa0I7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLGNBQWM7QUFBQSxRQUNaLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQSxrQkFBa0I7QUFBQSxRQUNoQixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0EsY0FBYztBQUFBLFFBQ1osUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLGlCQUFpQjtBQUFBLFFBQ2YsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLHFCQUFxQjtBQUFBLFFBQ25CLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxVQUFVLENBQUMsQ0FBQztBQUFBLElBQzlDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osYUFBYTtBQUFBLElBQ2IsS0FBSztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLElBQ1osT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLEVBQ2Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
