"use strict";
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');
const { merge } = require('webpack-merge');
const commonDevAndProd = require('./webpack.common');

const config = {
  mode: 'production',
  devtool: 'source-map',
  performance: { hints: false },
  entry: [
    path.resolve(path.resolve(__dirname, '../packages'), 'sak-app/src') + '/index.ts',
  ],
  output: {
    filename: '[name]-[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    path: path.resolve(__dirname, '../dist/public'),
    publicPath: '/public/',
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  stats: {
    children: false,
  },
};

module.exports = merge(commonDevAndProd, config);
