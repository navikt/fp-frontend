import { cpSync, existsSync, globSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const DEPLOY_FOLDER = join(scriptDir, '../.storybook-static-build');
const BUILD_FOLDER = '.storybook-static-build';
const PACKAGE_JSON = 'package.json';
const CSS_FILE = 'storybook-monorepo-index.css';

const SECTIONS = [
  { title: 'Apps', matches: ['fp-frontend', 'fp-avdelingsleder', 'fp-journalforing'] },
  { title: 'Faktapaneler', matches: ['fp-fakta'] },
  { title: 'Prosesspaneler', matches: ['fp-prosess'] },
  { title: 'Sak-paneler', matches: ['fp-sak'] },
  { title: 'LOS-paneler', matches: ['fp-los'] },
  { title: 'Andre' },
];
const allMatches = SECTIONS.flatMap(s => s.matches);

const generateRow = packageJson => `
        <a href="${packageJson.name}" class="package" target="${packageJson.name}" rel="noopener">
          <code>${packageJson.name}</code>${packageJson.description ? `<p>${packageJson.description}</p>` : ''}
        </a>
`;

const generateHTML = packages => {
  const sectionHTML = SECTIONS.map(({ title, matches }) => ({
    title,
    packages: packages.filter(p =>
      matches ? matches.some(m => p.name.includes(m)) : !allMatches.some(m => p.name.includes(m)),
    ),
  })).map(
    s => `
    <section>
      <h2>${s.title}</h2>
      <div class="grid-container">
        ${s.packages.map(generateRow).join('')}
      </div>
    </section>`,
  );

  return `<!DOCTYPE html>
  <html lang="nb">
    <head>
      <meta charset="utf-8" />
      <title>Storybook - FP FRONTEND</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" type="text/css" href="${CSS_FILE}">
    </head>
    <body>
      <h1>Storybook for FP-FRONTEND</h1>
      ${sectionHTML.join('')}
    </body>
  </html>
`;
};

const kopierPakke = subPackagePath => {
  const storybookBuildPath = join(subPackagePath, BUILD_FOLDER);

  if (!existsSync(storybookBuildPath)) {
    return null;
  }

  const packageJson = JSON.parse(readFileSync(join(subPackagePath, PACKAGE_JSON), 'utf8'));
  cpSync(storybookBuildPath, join(DEPLOY_FOLDER, packageJson.name), { recursive: true });

  return packageJson;
};

const finnOgKopierPakker = () => {
  return globSync(`{apps,packages}/**/${PACKAGE_JSON}`, {
    exclude: [`**/{node_modules,dist,.turbo,${BUILD_FOLDER}}/**`],
  })
    .map(dirname)
    .map(kopierPakke)
    .filter(Boolean);
};

const startTime = performance.now();

console.log('Kopierer storybook-bygg fra pakkene...');
const packages = finnOgKopierPakker();

console.log('Kopierer CSS...');
cpSync(join(scriptDir, CSS_FILE), join(DEPLOY_FOLDER, CSS_FILE), { recursive: true });

console.log('Genererer index.html...');
writeFileSync(join(DEPLOY_FOLDER, 'index.html'), generateHTML(packages));

const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
console.log(`\nFerdig med å kopiere filer (${elapsed}s)`);
