import type { StorybookConfig } from '@storybook/react-vite';

//TODO (TOR) Litt hacky løysing med forskjellige relative paths for staticDirs her

export const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../../../.storybook/mock'],
  core: {
    disableTelemetry: true,
  },
};

export const configWithDifferentStaticDirs: StorybookConfig = {
  ...config,
  staticDirs: ['../../../../.storybook/mock'],
};
