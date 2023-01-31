const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const styleModulesRule = require('./rules/style-modules-rule');
const styleRule = require('./rules/style-rule');

module.exports = (dirname) => ({
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|ts?)$/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
        },
        include: [path.join(dirname, '../src'), dirname],
      }, {
        test: /\.(svg)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name]_[contenthash].[ext]',
        },
      },
      styleModulesRule(path.join(dirname, '../src')),
      styleRule(path.join(dirname, '../src'), true, true)
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      context: path.join(dirname, '../src'),
      extensions: ['tsx', 'ts'],
      failOnWarning: false,
      failOnError: false,
      fix: true,
      overrideConfigFile: path.resolve(__dirname, '../eslint/eslintrc.dev.js'),
      lintDirtyModulesOnly: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
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
});
