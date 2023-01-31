const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './index.ts',
  output: {
    publicPath: '',
    filename: 'index.js',
  },
  module: {
    rules: [{
      test: /\.(tsx?|ts?)$/,
      loader: 'babel-loader',
      options: {
        rootMode: 'upward',
      },
    }, {
      test: /\.(svg)$/,
      type: 'asset/inline',
    }],
  },

  plugins: [
    new CleanWebpackPlugin(), 
    new MiniCssExtractPlugin({
      filename: 'style.css',
      ignoreOrder: true,
    }),
  ],

  externalsPresets: { node: true },
  externals: [nodeExternals({
    modulesDir: path.resolve(__dirname, '../node_modules'),
  })],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
  },

  optimization: {
    moduleIds: 'named',
  },
};
