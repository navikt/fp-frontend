import { defineConfig } from 'vitest/config'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{ts,tsx}',
    }),
    externalizeDeps(),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    port: 9100,
    proxy: {
      '/fpsak/api': {
        target: 'http://localhost:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fptilbake/api': {
        target: 'http://localhost:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fplos/api': {
        target: 'http://localhost:9000',
        changeOrigin: false,
        secure: false,
      },
    },
  },
  build: {
    sourcemap: 'hidden',
  },
  test: {
    environment: 'jsdom',
    css: false,
    globals: true,
    setupFiles: '../../vitest-setup.ts',
    watch: false,
    testTimeout: 15000,
  },
});
