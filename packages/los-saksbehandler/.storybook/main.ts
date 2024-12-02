import { mergeConfig } from 'vite';

const config = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(c) {
    return mergeConfig(c, {
      plugins: c.plugins?.filter(p => p?.name !== 'vite:dts'),
    });
  },
  staticDirs: ['./mock'],
};

export default config;
