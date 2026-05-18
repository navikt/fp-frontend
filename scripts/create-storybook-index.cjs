const path = require('node:path');
const shell = require('shelljs');
const glob = require('glob');
const fs = require('node:fs');

const generateRow = packageJson => `
    <a href="${packageJson.name}" class="package" target="blank">
      <code>${packageJson.name}</code>
      ${packageJson.description ? `<p>${packageJson.description}</p>` : ''}
    </a>
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
    <h1>Storybook for FP-FRONTEND</h1>
    
    <section>
      <h2>Apps</h2>
      <div class="grid-container">
        ${packages
          .filter(
            p =>
              p.name.includes('fp-frontend') ||
              p.name.includes('fp-avdelingsleder') ||
              p.name.includes('fp-journalforing'),
          )
          .map(generateRow)
          .join('')}
      </div>
    </section>
    <section>
      <h2>Faktapaneler</h2>
      <div class="grid-container">
        ${packages
          .filter(p => p.name.includes('fp-fakta'))
          .map(generateRow)
          .join('')}
      </div>
    </section>
 
    <section>
      <h2>Prosesspaneler</h2>
      <div class="grid-container">
        ${packages
          .filter(p => p.name.includes('fp-prosess'))
          .map(generateRow)
          .join('')}
      </div>
    </section>
    
    <section>
      <h2>Sak-paneler</h2>
      <div class="grid-container">
        ${packages
          .filter(p => p.name.includes('fp-sak'))
          .map(generateRow)
          .join('')}
      </div>
    </section>
    
    <section>
      <h2>LOS-paneler</h2>
      <div class="grid-container">
        ${packages
          .filter(p => p.name.includes('fp-los'))
          .map(generateRow)
          .join('')}
      </div>
    </section>
    
    <section>
      <h2>Andre</h2>
      <div class="grid-container">
        ${packages
          .filter(
            p =>
              !p.name.includes('fp-sak') &&
              !p.name.includes('fp-fakta') &&
              !p.name.includes('fp-prosess') &&
              !p.name.includes('fp-los') &&
              !p.name.includes('fp-avdelingsleder') &&
              !p.name.includes('fp-journalforing') &&
              !p.name.includes('fp-frontend'),
          )
          .map(generateRow)
          .join('')}
      </div>
    </section>
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

  // Kopier storybook fra pakkene og inn i folder som skal deployes
  const origDir = process.cwd();
  const packagesApps = glob
    .sync(path.join(origDir, 'apps', '**', 'package.json').split(path.sep).join('/'), {
      ignore: '**/node_modules/**',
    })
    .map(path.dirname)
    .map(copyFiles)
    .filter(Boolean);
  const packagesPackages = glob
    .sync(path.join(origDir, 'packages', '**', 'package.json').split(path.sep).join('/'), {
      ignore: '**/node_modules/**',
    })
    .map(path.dirname)
    .map(copyFiles)
    .filter(Boolean);

  // Lag index-fil
  const index = generateHTML(packagesApps.concat(packagesPackages));
  fs.writeFileSync(path.join(__dirname, DEPLOY_FOLDER, 'index.html'), index);

  console.log('Done copying files');
};

creatIndexHtml();
