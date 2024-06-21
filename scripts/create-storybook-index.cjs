const path = require('path');
const shell = require('shelljs');
const glob = require('glob');
const fs = require('fs');

const generateRow = packageJson => `
  <div class="box">
    <a href="${path.join(packageJson.name, 'index.html')}" class="package-row" target="blank">
      <div class="title">
        ${packageJson.name}
      </div>
    </a>
    <div class="description">
      Beskrivelse: ${packageJson.description || '-- Mangler --'}
    </div>
  </div>
`;

const generateHTML = packages => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Storybook - FP FRONTEND</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="monorepo-index.css">
  </head>
  <body>
    <h1 class="main-header">Storybook for FP-FRONTEND</h1>
    <h2 class="header">Faktapaneler:</h3>
    <div class="grid-container">
      ${packages
        .filter(p => p.name.includes('fp-fakta'))
        .map(generateRow)
        .join('')}
    </div>
    <br />
    <h2 class="header">Prosesspaneler:</h3>
    <div class="grid-container">
      ${packages
        .filter(p => p.name.includes('fp-prosess'))
        .map(generateRow)
        .join('')}
    </div>
    <br />
    <h2 class="header">Sak-paneler:</h3>
    <div class="grid-container">
      ${packages
        .filter(p => p.name.includes('fp-sak'))
        .map(generateRow)
        .join('')}
    </div>
    <h2 class="header">LOS-paneler:</h3>
    <div class="grid-container">
      ${packages
        .filter(p => p.name.includes('fp-los'))
        .map(generateRow)
        .join('')}
    </div>
    <h2 class="header">Journalføring-paneler:</h3>
    <div class="grid-container">
      ${packages
        .filter(p => p.name.includes('fp-journalforing'))
        .map(generateRow)
        .join('')}
    </div>
    <h2 class="header">Andre:</h3>
    <div class="grid-container">
      ${packages
        .filter(
          p =>
            !p.name.includes('fp-sak') &&
            !p.name.includes('fp-fakta') &&
            !p.name.includes('fp-prosess') &&
            !p.name.includes('fp-los') &&
            !p.name.includes('fp-journalforing'),
        )
        .map(generateRow)
        .join('')}
    </div>
  </body>
  </html>
`;

const DEPLOY_FOLDER = '../.storybook-static-build';

const copyFiles = subPackage => {
  shell.cd(subPackage);
  if (!fs.existsSync('package.json') || !fs.existsSync('.storybook-static-build')) {
    return null;
  }

  const packagesJson = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf8'));

  const packageDestFolder = path.join(__dirname, DEPLOY_FOLDER, packagesJson.name);
  shell.mkdir(packageDestFolder);
  shell.cp('-r', path.join(subPackage, '.storybook-static-build', '*'), packageDestFolder);

  return packagesJson;
};

const creatIndexHtml = () => {
  // Lag folder-struktur for innholdet som skal deployes
  shell.mkdir(path.join(__dirname, DEPLOY_FOLDER));
  shell.mkdir(path.join(__dirname, DEPLOY_FOLDER, '@navikt'));

  // Kopier css fil til folder som skal deployes
  shell.cp(
    path.join(__dirname, 'storybook-monorepo-index.css'),
    path.join(__dirname, DEPLOY_FOLDER, 'monorepo-index.css'),
  );

  // For å støtte filer med '_' (Skip Jekyll-prosessering)
  shell.cp(path.join(__dirname, '.nojekyll'), path.join(__dirname, DEPLOY_FOLDER, '.nojekyll'));

  // Kopier storybook fra pakkene og inn i folder som skal deployes
  const origDir = process.cwd();
  const packagesApps = glob
    .sync(path.join(origDir, 'apps', '**', 'package.json').split(path.sep).join('/'), {
      ignore: '**/node_modules/**',
    })
    .map(path.dirname)
    .map(copyFiles)
    .filter(subPackage => subPackage);
  const packagesPackages = glob
    .sync(path.join(origDir, 'packages', '**', 'package.json').split(path.sep).join('/'), {
      ignore: '**/node_modules/**',
    })
    .map(path.dirname)
    .map(copyFiles)
    .filter(subPackage => subPackage);

  // Lag index-fil
  const index = generateHTML(packagesApps.concat(packagesPackages));
  fs.writeFileSync(path.join(__dirname, DEPLOY_FOLDER, 'index.html'), index);

  console.log('Done copying files');
};

creatIndexHtml();
