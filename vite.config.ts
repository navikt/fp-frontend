// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    deps: { interopDefault: true },
    environment: 'jsdom',
    css: false,
    globals: true,
    setupFiles: '../../vitest-setup.ts',
    watch: false,
    testTimeout: 20000,
  },
});
