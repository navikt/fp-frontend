import type { StorybookConfig } from '@storybook/react-vite';
import react from '@vitejs/plugin-react';

//TODO (TOR) Litt hacky løysing med forskjellige relative paths for staticDirs her

export const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../../../.storybook/mock'],
};

export const configWithDifferentStaticDirs: StorybookConfig = {
  ...config,
  staticDirs: ['../../../../.storybook/mock'],
  async viteFinal(mainConfig) {
    return {
      ...mainConfig,
      plugins: mainConfig.plugins?.concat(react()) ?? [react()],
    };
  },
};
