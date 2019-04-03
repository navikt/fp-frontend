module.exports = function (api) {
  api.cache(true);
  const presets = ['@babel/react', ['@babel/env', { modules: false }], '@babel/typescript'];
  const plugins = ['@babel/plugin-proposal-class-properties'];

  return {
    presets,
    plugins,
  };
};
