const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: './index.ts',
  output: {
    publicPath: 'auto',
    filename: 'index.js',
  },
  watch: true,
  watchOptions: {
    poll: 1000, // Check for changes every second
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|ts?)$/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
        },
      }, {
        test: /\.(svg)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name]_[contenthash].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
  },
  externalsPresets: { node: true },
  externals: [nodeExternals({
    modulesDir: path.resolve(__dirname, '../node_modules'),
  })],

  plugins: [
    new ESLintPlugin({
      context: './src',
      extensions: ['tsx', 'ts'],
      failOnWarning: false,
      failOnError: false,
      fix: true,
      overrideConfigFile: path.resolve(__dirname, '../eslint/eslintrc.dev.js'),
      lintDirtyModulesOnly: true,
      cache: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'style[name].css',
      ignoreOrder: true,
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
  ],
};
