import react from '@vitejs/plugin-react';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { defineConfig, mergeConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const folder = path.dirname(__filename);

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
      globals: true,
      coverage: {
        include: ['src/**/*'],
        exclude: [],
      },
      testTimeout: 20000,
      projects: [
        {
          extends: true,
          test: {
            name: 'jsdom',
            environment: 'jsdom',
            css: false,
            setupFiles: setupFileDirName || path.resolve(folder, './vitest-setup.ts'),
            env: {
              TEST_MODE: 'jsdom-mode',
            },
          },
        },
        {
          extends: true,
          test: {
            name: 'browser',
            setupFiles: setupFileDirName || path.resolve(folder, './vitest-browser-mode-setup.ts'),
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
