const replaceInFiles = require('replace-in-files');

const options = {
  files: '.storybook-static-build/@navikt/**/*',
  from: /\/assets/g,
  to: './assets',
};

const replace = () => {
  replaceInFiles(options).then(() => {
    console.log('Done replacing assets-url');
  });
};

replace();
