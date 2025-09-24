import react from '@vitejs/plugin-react';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { defineConfig, mergeConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const folder = path.dirname(__filename);

export const createSharedAppConfig = setupFileDirName =>
  mergeConfig(createConfig(setupFileDirName), {
    build: {
      sourcemap: true,
      rollupOptions: {
        plugins: [sourcemaps({ exclude: /@sentry/ })],
      },
    },
  });

export const createSharedPackagesConfig = setupFileDirName => createConfig(setupFileDirName);

export const createConfig = setupFileDirName =>
  defineConfig({
    plugins: [
      react({
        include: '**/*.{ts,tsx,js,jsx}',
      }),
    ],
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
    test: {
      deps: { interopDefault: true },
      environment: 'jsdom',
      css: false,
      globals: true,
      setupFiles: setupFileDirName || path.resolve(folder, './vitest-setup'),
      watch: false,
      testTimeout: 25000,
    },
  });
