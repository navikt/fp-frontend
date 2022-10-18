const path = require('path');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonDevAndProd = require('./webpack.common');

const vtpLogin = require("./mocks/login");
const sentryMock = require("./mocks/sentry");
const fakeError = require("./mocks/fake-error");
const axios = require("axios");
const qs = require("querystring");
const deps = require('../package.json').dependencies;

const vtpAccessTokenUrl = 'http://127.0.0.1:8060/rest/isso/oauth2/access_token';

const PUBLIC_PATH = '/'

const config = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    path.resolve(path.join(__dirname, '../packages'), 'sak-app/src') + '/index.ts',
  ],
  output: {
    path: path.resolve(__dirname, './public'),
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
    historyApiFallback: false,
    port: 3000,
    open: false,
    static: {
      directory: 'packages',
      watch: true,
    },
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      middlewares.unshift({
        name: 'login-page',
        path: '/login-with-vtp',
        middleware: (req, res) => {
          const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
          const roles = ['beslut', 'klageb', 'oversty', 'saksbeh', 'saksbeh6', 'saksbeh7', 'veil'];
          const urls = {};
          roles.forEach((role) => {
            const url = new URL(fullUrl + '/redirect');
            url.searchParams.append('code', role);
            urls[role] = url.toString();
          });
          res.json(urls);
        }
      });
      middlewares.unshift({
        name: 'login-page-redirect',
        path: '/login-with-vtp/redirect',
        middleware: (req, res) => {
          const redirectUri = req.query.redirect_uri ? req.query.redirect_uri : '/';
          axios.post(vtpAccessTokenUrl, qs.stringify({
            grant_type: 'code',
            code: req.query.code,
          }), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
            .then(result => {
              res.cookie('ID_token', result.data.id_token, {
                maxAge: 86400000,
                httpOnly: true,
              });
              res.redirect(redirectUri);
            });
        }
      });

      //vtpLogin(devServer.app);
      sentryMock(devServer.app);
      fakeError(devServer.app);

      return middlewares
    },
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      const port = devServer.server.address().port;
      console.log('Listening on port:', port);
    },
    proxy: [
      {
        context: ['/fpoppdrag/api', '/fptilbake/api', '/fplos/api', '/fpsak/api', '/fpformidling/api'],
        target: process.env.BACKEND_URL || 'http://localhost:8000',
        secure: false,
        changeOrigin: (!!process.env.BACKEND_URL),
        headers: {
          'Authorization': 'Bearer eyJraWQiOiIxIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwOi8vdnRwOjgwNjAvcmVzdC9pc3NvL29hdXRoMiIsImV4cCI6MTY2NjEyNDkwNywianRpIjoiTEVqenJsWF93REc2Z3dtNlFucnpmZyIsImlhdCI6MTY2NjEwMzMwNywic3ViIjoic2Frc2JlaCIsImF1ZCI6Ik9JREMiLCJhY3IiOiJMZXZlbDQiLCJhenAiOiJPSURDIn0.HtKNNtD8SdXR6JV4QAhCxqAf5dDH6NI7LExdJ4k34z58Y4E8-v61XrZjN3FXQiCsJDe9jLvy1iFCGq235hRUNoDGgNMl_GGAVkItbYYdf44_1NXbGY6NmehjZdUiQCz4zWPbFABpS1DAJEpNQj_b2v0xH-on44Yt_nBYbv0EbsWU-iPf391YOCsqYSIQlgM1FHITBDWBKjAdqhY4LWExnKwOLZzv9F-fRH8pJPI_-O4yjzSJ_nk_AIUFpXGm8wOCZAyI-uJUybzyRBoyIAoBLMqe_S2KlXWCV32jtp9gMz51vgehOHQ93ucgNOl6TDOT7a-y2lY-ECps2Pdr4xUthw'
        }
      }
    ],
    devMiddleware: {
      publicPath: PUBLIC_PATH,
      stats: {
        children: false,
        colors: true,
      },
    },
  },
};


if (process.argv.includes('--no-fix')) {
  console.warn('Setting eslint-loader option \'fix\' to false');
  config.module.rules.find(rules => rules.loader === 'eslint-loader').options.fix = false;
}

module.exports = merge(commonDevAndProd, config);
