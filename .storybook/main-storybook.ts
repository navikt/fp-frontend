import type { StorybookConfig } from '@storybook/react-vite';
import { msw } from 'msw/vite';

export const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal: viteConfig => ({
    ...viteConfig,
    plugins: [...(viteConfig.plugins ?? []), msw({ mode: 'worker-only' })],
  }),
};
