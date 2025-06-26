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
      origin: ['https://fpsak.intern.dev.nav.no', 'https://fpsak.intern.nav.no', 'http://localhost:9000'],
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
    watch: false,
    globals: true,
    testTimeout: 20000,
    projects: [
      {
        extends: true,
        test: {
          name: 'jsdom',
          deps: { interopDefault: true },
          environment: 'jsdom',
          css: false,
          setupFiles: 'vitest-setup.ts',
          env: {
            TEST_MODE: 'jsdom-mode',
          },
        },
      },
      {
        extends: true,
        test: {
          name: 'browser',
          setupFiles: 'vitest-setup-browser.ts',
          browser: {
            enabled: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
          env: {
            TEST_MODE: 'browser-mode',
          },
        },
      },
    ],
  },
});
