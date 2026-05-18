import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const DEPLOY_FOLDER = '../.storybook-static-build';

const generateRow = packageJson => `
  <div class="box">
    <a href="${packageJson.name}" class="package-row" target="blank">
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

const findPackageDirs = baseDir => {
  if (!existsSync(baseDir)) return [];
  return readdirSync(baseDir, { withFileTypes: true, recursive: true })
    .filter(entry => entry.name === 'package.json' && !entry.parentPath.includes('node_modules'))
    .map(entry => entry.parentPath);
};

const copyFiles = subPackagePath => {
  const pkgJsonPath = join(subPackagePath, 'package.json');
  const storybookBuildPath = join(subPackagePath, '.storybook-static-build');

  if (!existsSync(pkgJsonPath) || !existsSync(storybookBuildPath)) {
    return null;
  }

  const packageJson = JSON.parse(readFileSync(pkgJsonPath, 'utf8'));
  const destFolder = join(scriptDir, DEPLOY_FOLDER, packageJson.name);

  mkdirSync(destFolder, { recursive: true });
  for (const entry of readdirSync(storybookBuildPath)) {
    cpSync(join(storybookBuildPath, entry), join(destFolder, entry), { recursive: true });
  }

  return packageJson;
};

const createIndexHtml = () => {
  const origDir = process.cwd();

  // Lag folder-struktur for innholdet som skal deployes
  mkdirSync(join(scriptDir, DEPLOY_FOLDER, '@navikt'), { recursive: true });

  // Kopier css fil til folder som skal deployes
  cpSync(join(scriptDir, 'storybook-monorepo-index.css'), join(scriptDir, DEPLOY_FOLDER, 'monorepo-index.css'));

  // For å støtte filer med '_' (Skip Jekyll-prosessering)
  cpSync(join(scriptDir, '.nojekyll'), join(scriptDir, DEPLOY_FOLDER, '.nojekyll'));

  // Kopier storybook fra pakkene og inn i folder som skal deployes
  const packages = [...findPackageDirs(join(origDir, 'apps')), ...findPackageDirs(join(origDir, 'packages'))]
    .map(copyFiles)
    .filter(Boolean);

  // Lag index-fil
  writeFileSync(join(scriptDir, DEPLOY_FOLDER, 'index.html'), generateHTML(packages));

  console.log('Done copying files');
};

createIndexHtml();
