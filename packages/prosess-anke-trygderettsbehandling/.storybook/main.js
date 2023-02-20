const path = require('path');
const getWebpackStorybookConfig = require('../../../webpack/webpack.storybook.template');

const SRC_DIR = path.resolve(__dirname, '../src');

module.exports = {
    core: {
        builder: "webpack5",
    },
    stories: ['../src/**/*.stories.@(ts|tsx)'],
    webpackFinal: async (config) => getWebpackStorybookConfig(config, SRC_DIR),
};
