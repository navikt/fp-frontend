"use strict";
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');
const { merge } = require('webpack-merge');
const commonDevAndProd = require('./webpack.common');

const PACKAGES_DIR = path.resolve(__dirname, '../packages');
const APP_DIR = path.resolve(PACKAGES_DIR, 'sak-app/src');

const config = {
  mode: 'production',
  devtool: 'source-map',
  performance: { hints: false },

  entry: [
    APP_DIR + '/index.ts',
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
