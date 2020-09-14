require('dotenv')
  .config();

const toggles = {
  'featureToggles': {
  },
};
if (process.env.FEATURE_TOGGLES) {
  process.env.FEATURE_TOGGLES.split(',').forEach(key => {
      toggles.featureToggles[key.trim()] = true;
    });
}
module.exports = function (app) {
  app.all('/fpsak/api/feature-toggle', function (req, res) {
    res.json(toggles);
  });
};
