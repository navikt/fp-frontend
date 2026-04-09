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

Bruk `yarn up --exact --recursive` for å oppdatere i alle workspaces:

```bash
yarn up --exact --recursive '@navikt/ft-*'
```

### 3. Installer oppdaterte avhengigheter

```bash
yarn install
```

### 4. Les peer dependency-krav fra oppdaterte ft-pakker

Kjør dette skriptet for å finne hvilke versjoner av peer dependencies ft-pakkene krever:

```bash
node -e "
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
"
```

### 5. Oppdater peer dependencies til riktig versjon

Bruk `yarn up --exact --recursive` for å oppdatere peer dependencies.
Versjonene skal matche det ft-pakkene krever (f.eks. `8.x` betyr nyeste `8.*`-versjon).

```bash
yarn up --exact --recursive '@navikt/aksel-*' '@navikt/ds-*' 'react-hook-form'
```

Dersom ft-pakkene krever en spesifikk major (f.eks. `8.x`), bruk:

```bash
yarn up --exact --recursive '@navikt/aksel-*@8' '@navikt/ds-*@8' 'react-hook-form@7'
```

> **Viktig:** Tilpass major-versjonen basert på output fra steg 4. Hvis ft-pakkene
> krever `9.x`, bruk `@9`, osv.

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

- Hvis `yarn up` feiler for enkeltpakker som ikke finnes i alle workspaces, er det normalt — yarn hopper over dem.
- Hvis bygget feiler etter oppdatering, sjekk changelog for ft-pakkene for breaking changes.
- Hvis peer dependency-versjoner er motstridende mellom ulike ft-pakker, velg den høyeste major-versjonen som er kompatibel med alle.
