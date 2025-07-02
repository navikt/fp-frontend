import react from '@vitejs/plugin-react';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { defineConfig, mergeConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createSharedAppConfig = setupFileDirName =>
  mergeConfig(createConfig(setupFileDirName), {
    build: {
      plugins: [
        react({
          include: '**/*.{ts,tsx}',
        }),
      ],
      css: {
        modules: {
          localsConvention: 'camelCase',
        },
      },
      sourcemap: true,
      rollupOptions: {
        plugins: [sourcemaps({ exclude: /@sentry/ })],
      },
    },
  });

export const createSharedPackagesConfig = setupFileDirName => createConfig(setupFileDirName);

export const createConfig = setupFileDirName =>
  defineConfig({
    test: {
      deps: { interopDefault: true },
      environment: 'jsdom',
      css: false,
      globals: true,
      setupFiles: setupFileDirName || path.resolve(__dirname, './vitest-setup'),
      watch: false,
      testTimeout: 20000,
    },
  });
