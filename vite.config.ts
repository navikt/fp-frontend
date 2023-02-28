// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config';
// eslint-disable-next-line import/no-extraneous-dependencies
import dts from 'vite-plugin-dts';
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      'react-hook-form': require.resolve('react-hook-form'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    lib: {
      entry: 'index.ts',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
  },
  test: {
    deps: { interopDefault: true },
    environment: 'jsdom',
    css: false,
    globals: true,
    setupFiles: '../../vitest-setup.ts',
    watch: false,
    testTimeout: 15000,
  },
});
