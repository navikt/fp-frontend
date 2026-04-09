---
name: oppdater-ft-pakker
description: >
  Oppdaterer @navikt/ft-* pakker til nyeste versjon og synkroniserer
  peer dependencies (react-hook-form, @navikt/aksel-*, @navikt/ds-*)
  slik at de matcher versjonene brukt av ft-pakkene. Lager en PR med endringene.
---

# Oppdater @navikt/ft-\* pakker og peer dependencies

## Mål

Oppdater alle `@navikt/ft-*` pakker til nyeste versjon, og deretter oppdater
peer dependencies `react-hook-form`, `@navikt/aksel-*` og `@navikt/ds-*`
slik at de matcher versjonskravene spesifisert av de oppdaterte ft-pakkene.

## Steg

### 1. Opprett en ny branch

```bash
git checkout -b oppdater-ft-pakker-$(date +%Y%m%d)
```

### 2. Oppdater alle @navikt/ft-\* pakker i alle workspaces

> **Merk:** `--exact` og `--recursive` kan ikke brukes samtidig i Yarn Berry.
> Siden pakkene allerede bruker eksakte versjoner er `--recursive` alene tilstrekkelig:

```bash
yarn up --recursive '@navikt/ft-*'
```

### 3. Installer oppdaterte avhengigheter

```bash
yarn install
```

### 4. Les peer dependency-krav fra oppdaterte ft-pakker

Kjør dette skriptet for å finne hvilke versjoner av peer dependencies ft-pakkene krever:

```bash
node << 'SCRIPT'
const fs = require('fs');
const path = require('path');
const nm = 'node_modules/@navikt';
const peerPkgs = {};
const dirs = fs.readdirSync(nm).filter(d => d.startsWith('ft-'));
for (const dir of dirs) {
  const pkgPath = path.join(nm, dir, 'package.json');
  if (!fs.existsSync(pkgPath)) continue;
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const peers = pkg.peerDependencies || {};
  for (const [dep, range] of Object.entries(peers)) {
    if (dep.startsWith('@navikt/aksel') || dep.startsWith('@navikt/ds-') || dep === 'react-hook-form') {
      if (!peerPkgs[dep]) peerPkgs[dep] = new Set();
      peerPkgs[dep].add(range);
    }
  }
}
for (const [dep, ranges] of Object.entries(peerPkgs)) {
  console.log(dep + ': ' + [...ranges].join(', '));
}
SCRIPT
```

### 5. Oppdater peer dependencies til riktig versjon

Siden pakkene er eksakt-pinnet i package.json kan ikke `yarn up` bumpe dem uten `--exact`.
Bruk dette Node.js-skriptet til å oppdatere alle package.json-filer direkte.
Tilpass versjonene basert på output fra steg 4 (f.eks. `8.x` → bruk nyeste `8.*` fra npm):

```bash
node << 'SCRIPT'
const fs = require('fs');
const { execSync } = require('child_process');

// Tilpass disse versjonene basert på hva ft-pakkene krever (fra steg 4):
const pkgs = {
  '@navikt/aksel-icons': 'FYLL_INN',      // f.eks. '8.9.1'
  '@navikt/ds-css': 'FYLL_INN',
  '@navikt/ds-react': 'FYLL_INN',
  '@navikt/ds-tailwind': 'FYLL_INN',
  '@navikt/ds-tokens': 'FYLL_INN',
  '@navikt/aksel-stylelint': 'FYLL_INN',
  'react-hook-form': 'FYLL_INN',          // f.eks. '7.72.1'
};

const result = execSync("find . -name 'package.json' -not -path '*/node_modules/*'", { encoding: 'utf8' });
const files = result.trim().split('\n');
let updatedFiles = 0;
for (const file of files) {
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  let changed = false;
  for (const section of ['dependencies', 'devDependencies', 'peerDependencies']) {
    if (!json[section]) continue;
    for (const [pkg, newVer] of Object.entries(pkgs)) {
      if (json[section][pkg] && json[section][pkg] !== newVer) {
        json[section][pkg] = newVer;
        changed = true;
      }
    }
  }
  if (changed) { fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n'); updatedFiles++; }
}
console.log('Oppdaterte ' + updatedFiles + ' filer');
SCRIPT
```

### 6. Installer igjen for å oppdatere yarn.lock

```bash
yarn install
```

### 7. Verifiser at alt bygger

```bash
yarn build --filter=@navikt/fp-frontend
```

### 8. Sjekk hvilke versjoner som ble oppdatert

```bash
git --no-pager diff --stat
```

Verifiser at `package.json`-filer og `yarn.lock` er oppdatert korrekt.

### 9. Commit endringene

```bash
git add -A
git commit -m "deps: oppdater @navikt/ft-* og peer dependencies

Oppdaterer alle @navikt/ft-* pakker til nyeste versjon.
Synkroniserer react-hook-form, @navikt/aksel-* og @navikt/ds-*
slik at de matcher versjonskravene fra ft-pakkene.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

### 10. Push og opprett PR

```bash
git push --set-upstream origin $(git branch --show-current)
```

```bash
gh pr create \
  --title "deps: oppdater @navikt/ft-* og peer dependencies" \
  --body "## Endringer

Oppdaterer alle \`@navikt/ft-*\` pakker til nyeste versjon og synkroniserer peer dependencies.

### Oppdaterte pakker
- \`@navikt/ft-*\` — oppdatert til nyeste versjon
- \`@navikt/aksel-*\` — oppdatert til versjon brukt av ft-pakkene
- \`@navikt/ds-*\` — oppdatert til versjon brukt av ft-pakkene
- \`react-hook-form\` — oppdatert til versjon brukt av ft-pakkene

### Verifisering
- [ ] Bygg passerer
- [ ] Ingen breaking changes i API" \
  --label "dependencies"
```

## Feilsøking

- `--exact` og `--recursive` kan ikke brukes samtidig — bruk `--recursive` alene, og oppdater package.json-filer med Node.js-skriptet i steg 5.
- Hvis `yarn up` ikke finner oppdateringer, kan pakkene allerede være på nyeste versjon.
- Hvis bygget feiler etter oppdatering, sjekk changelog for ft-pakkene for breaking changes.
- Hvis peer dependency-versjoner er motstridende mellom ulike ft-pakker, velg den høyeste major-versjonen som er kompatibel med alle.
