import react from '@vitejs/plugin-react';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{ts,tsx}',
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    port: 9010,
    cors: {
        origin: ["https://fpsak.intern.dev.nav.no", "https://fpsak.intern.nav.no", "http://localhost:9000"],
    },
    proxy: {
      '/fpsak/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fptilbake/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fplos/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fpfordel/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fpformidling/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      plugins: [sourcemaps({ exclude: /@sentry/ })],
    },
  },
  test: {
    environment: 'jsdom',
    css: false,
    globals: true,
    setupFiles: 'vitest-setup.ts',
    watch: false,
    testTimeout: 15000,
  },
});
