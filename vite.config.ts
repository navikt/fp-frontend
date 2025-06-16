import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
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
          setupFiles: path.resolve(__dirname, 'vitest-setup.ts'),
          env: {
            TEST_MODE: 'jsdom-mode',
          },
        },
      },
      {
        extends: true,
        test: {
          name: 'browser',
          setupFiles: path.resolve(__dirname, 'vitest-setup-browser.ts'),
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
