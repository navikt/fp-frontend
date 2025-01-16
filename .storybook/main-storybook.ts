import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(c) {
    return mergeConfig(c, {
      //@ts-expect-error Kvifor eksisterar ikkje name her?
      plugins: c.plugins?.filter(p => p?.name !== 'vite:dts'),
    });
  },
  staticDirs: ['../../../.storybook/mock'],
};

export default config;
