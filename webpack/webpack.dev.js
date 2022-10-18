const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;
const { merge } = require('webpack-merge');
const commonDevAndProd = require('./webpack.common');

const PUBLIC_PATH = '/'

const config = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    path.resolve(path.join(__dirname, '../packages'), 'sak-app/src') + '/index.ts',
  ],
  output: {
    path: path.resolve(__dirname, '../public/client'),
    publicPath: PUBLIC_PATH,
    filename: '[name].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ft_frontend_saksbehandling",
      remotes: {
        ft_fakta_beregning: 'ft_fakta_beregning@http://localhost:9006/remoteEntry.js?[(new Date).getTime()]',
        ft_fakta_fordel_beregningsgrunnlag: 'ft_fakta_fordel_beregningsgrunnlag@http://localhost:9007/remoteEntry.js?[(new Date).getTime()]',
        ft_prosess_beregningsgrunnlag: 'ft_prosess_beregningsgrunnlag@http://localhost:9008/remoteEntry.js?[(new Date).getTime()]',
        ft_fakta_tilbakekreving_feilutbetaling: 'ft_fakta_tilbakekreving_feilutbetaling@http://localhost:9009/remoteEntry.js?[(new Date).getTime()]',
        ft_prosess_tilbakekreving_foreldelse: 'ft_prosess_tilbakekreving_foreldelse@http://localhost:9010/remoteEntry.js?[(new Date).getTime()]',
        ft_prosess_tilbakekreving: 'ft_prosess_tilbakekreving@http://localhost:9011/remoteEntry.js?[(new Date).getTime()]',
        ft_prosess_tilbakekreving_vedtak: 'ft_prosess_tilbakekreving_vedtak@http://localhost:9012/remoteEntry.js?[(new Date).getTime()]',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
  optimization: {
    moduleIds: 'named',
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    historyApiFallback: true,
  },
};

module.exports = merge(commonDevAndProd, config);
