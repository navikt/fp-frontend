const { mergeConfig } = require('vite');

module.exports = {
    stories: ['../src/**/*.stories.@(ts|tsx)'],
    core: {
      builder: "@storybook/builder-vite",
    },
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-css-modules'],
    async viteFinal(config) {
      // Merge custom configuration into the default config
      return mergeConfig(config, {
        // Use the same "resolve" configuration as your app
        resolve: (await import('../vite.config.js')).default.resolve,
        // Add dependencies to pre-optimization
        optimizeDeps: {
          include: ['storybook-dark-mode'],
        },
      });
    },
};
