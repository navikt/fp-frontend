import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async config => ({
    ...config,
    // @ts-ignore
    plugins: config.plugins?.filter(p => p?.name !== 'vite:dts'),
  }),
};

export default config;
