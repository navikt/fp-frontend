import type { StorybookConfig } from '@storybook/react-vite';

//TODO (TOR) Litt hacky løysing med forskjellige relative paths for staticDirs her

export const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (viteConfig, { configType }) => {
    if (configType === 'PRODUCTION') {
      // deterministic filenames for caching
      viteConfig.build = {
        ...viteConfig.build,
        rollupOptions: {
          output: {
            entryFileNames: `[name].js`,
            chunkFileNames: `[name].js`,
            assetFileNames: `[name].[ext]`,
          },
        },
        sourcemap: false, // optional: reduce noise in files
      };
    }
    return viteConfig;
  },
  staticDirs: ['../../../.storybook/mock'],
};

export const configWithDifferentStaticDirs: StorybookConfig = {
  ...config,
  staticDirs: ['../../../../.storybook/mock'],
};
