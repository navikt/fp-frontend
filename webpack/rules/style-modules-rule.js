const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (src) => ({
  test: /\.(less|css)?$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: './',
      },
    }, {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
          localIdentName: '[name]_[local]_[contenthash:base64:5]',
        },
      },
    }, {
      loader: 'less-loader',
      options: {
        lessOptions: {
          modules: true,
          localIdentName: '[name]_[local]_[contenthash:base64:5]',
          modifyVars: {
            nodeModulesPath: '~',
            coreModulePath: '~',
          },
        },
      },
    }],
  include: [src],
});
