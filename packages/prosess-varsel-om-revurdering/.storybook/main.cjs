module.exports = {
    stories: ['../src/**/*.stories.@(ts|tsx)'],
    core: {
      builder: "@storybook/builder-vite",
    },
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
