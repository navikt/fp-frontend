'use strict';
const CircularDependencyPlugin = require('circular-dependency-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const webpack = require('webpack');
const path = require('path');
const PACKAGE = require('../package.json');
const VERSION = PACKAGE.version;

const ROOT_DIR = path.resolve(__dirname, '../public/client');
const CORE_DIR = path.resolve(__dirname, '../node_modules');
const APP_DIR = path.resolve(__dirname, '../packages/sak-app');
const TYPES_DIR = path.resolve(__dirname, '../packages/types');
const PACKAGES_DIR = path.resolve(__dirname, '../packages');

const isDevelopment = JSON.stringify(process.env.NODE_ENV) === '"development"';

const config = {
  module: {
    rules: [
      {
        test: /\.(tsx?|ts?)$/,
        use: [
          { loader: 'cache-loader' },
          {
            loader: 'thread-loader',
            options: {
              workers: process.env.CIRCLE_NODE_TOTAL || require('os')
                .cpus() - 1,
              workerParallelJobs: 50,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
        include: [APP_DIR, TYPES_DIR]
      }, {
        test: /\.(less|css)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: isDevelopment ? './' : '',
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
        include: [APP_DIR],
      }, {
        test: /\.(less|css)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: isDevelopment ? './' : '',
            },
          }, {
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
          }],
        include: [CORE_DIR, PACKAGES_DIR],
        exclude: [APP_DIR],
      }, {
        test: /\.(svg)$/,
        issuer: /\.less?$/,
        type: 'asset/resource',
        generator: {
          filename: '[name]_[contenthash].[ext]',
        },
        include: [APP_DIR],
      }, {
        test: /\.(svg)$/,
        issuer: /\.(tsx)?$/,
        use: [{
          loader: '@svgr/webpack',
        },{
          loader: 'file-loader',
          options: {
            esModule: false,
            name: isDevelopment ? '[name]_[contenthash].[ext]' : '/[name]_[contenthash].[ext]',
          },
        }],
        include: [APP_DIR],
        type: 'javascript/auto',
      },{
        test: /\.(svg)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name]_[contenthash].[ext]',
        },
        include: [CORE_DIR],
      }, {
        test: /\.(js?)$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        include: [CORE_DIR],
      }],
  },

  ignoreWarnings: [/Failed to parse source map/],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
    symlinks: true,
  },

  externals: {
    canvas: 'commonjs canvas',
    cheerio: 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
    bufferutil: 'bufferutil',
    'utf-8-validate': 'utf-8-validate',
  },

  plugins: [
    new ESLintPlugin({
      context: APP_DIR,
      extensions: ['tsx', 'ts'],
      failOnWarning: false,
      failOnError: !isDevelopment,
      fix: isDevelopment,
      overrideConfigFile: path.resolve(__dirname, isDevelopment ? '../eslint/eslintrc.dev.js' : '../eslint/eslintrc.prod.js'),
      lintDirtyModulesOnly: isDevelopment,
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? 'style[name].css' : 'style[name]_[contenthash].css',
      ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      filename: isDevelopment ? 'index.html' : '../index.html',
      favicon: path.join(ROOT_DIR, 'favicon.ico'),
      template: path.join(ROOT_DIR, 'index.html'),
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(VERSION),
    }),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /nb/,
    ),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new ExternalTemplateRemotesPlugin(),
    new webpack.EnvironmentPlugin({ SENTRY_RELEASE: null }),
  ],
};

module.exports = config;
