import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    css: false,
    globals: true,
    setupFiles: '../../vitest-setup.ts',
    watch: false,
    testTimeout: 7500,
  },
});
