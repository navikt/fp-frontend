module.exports = {
    stories: ['../src/**/*.stories.@(ts|tsx)'],
    framework: {
      name: '@storybook/react-vite',
      options: {},
    },
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
