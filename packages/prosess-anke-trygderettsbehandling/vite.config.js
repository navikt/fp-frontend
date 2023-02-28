// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mergeConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { dependencies } from './package.json';
// eslint-disable-next-line import/no-relative-packages
import commonConfig from '../../vite.config';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/fp-prosess-anke-trygderettsbehandling',
    },
    rollupOptions: {
      external: Object.keys(dependencies),
    },
  },
});

export default mergeConfig(commonConfig, config);

