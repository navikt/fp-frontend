const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (src, shouldTestCss, shouldNotAdd) => {
  let rules = [{
    loader: 'css-loader',
  }, {
    loader: 'less-loader',
    options: {
      lessOptions: {
        modifyVars: {
          nodeModulesPath: '~',
          coreModulePath: '~',
        },
      },
    },
  }];
  if (shouldNotAdd === undefined || shouldNotAdd === false) {
    rules = [{
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: './',
      },
    }].concat(rules);
  }

  return {
    test: shouldTestCss ? /\.(less|css)?$/ : /\.(less)?$/,
    use: rules,
    exclude: [src],
  }
};
