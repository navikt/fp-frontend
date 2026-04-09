---
name: oppdater-ft-pakker
description: >
  Oppdaterer @navikt/ft-* pakker til nyeste versjon og synkroniserer
  peer dependencies (react-hook-form, @navikt/aksel-*, @navikt/ds-*)
  slik at de matcher versjonene brukt av ft-pakkene. Lager en PR med endringene.
---

# Oppdater @navikt/ft-* pakker og peer dependencies

## Mål

Oppdater alle `@navikt/ft-*` pakker til nyeste versjon, og deretter oppdater
peer dependencies `react-hook-form`, `@navikt/aksel-*` og `@navikt/ds-*`
slik at de matcher versjonskravene spesifisert av de oppdaterte ft-pakkene.

## Steg

### 1. Opprett en ny branch

```bash
git checkout -b oppdater-ft-pakker-$(date +%Y%m%d)
```

### 2. Oppdater alle @navikt/ft-* pakker i alle workspaces

> **Merk:** `--exact` og `--recursive` kan ikke brukes samtidig i Yarn Berry.
> Siden pakkene allerede bruker eksakte versjoner er `--recursive` alene tilstrekkelig:

```bash
yarn up --recursive '@navikt/ft-*'
```

### 3. Installer oppdaterte avhengigheter

```bash
yarn install
```

### 4. Finn versjoner som skal brukes for aksel og react-hook-form

Les peerDependencies direkte fra de installerte ft-pakkene i node_modules:

```bash
node -e "console.log(require('./node_modules/@navikt/ft-form-hooks/package.json').peerDependencies['@navikt/ds-react'])"
```

```bash
node -e "console.log(require('./node_modules/@navikt/ft-form-hooks/package.json').peerDependencies['react-hook-form'])"
```

Eksempel på output: `8.x` og `7.x`. Bruk disse versjonene i neste steg.

### 5. Oppdater peer dependencies med yarn up

Bruk versjonene fra steg 4 direkte med `yarn up --recursive`.
Erstatt `8` og `7` med major-versjonene fra steg 4 om de har endret seg:

```bash
yarn up --recursive \
  '@navikt/ds-react@8' \
  '@navikt/ds-css@8' \
  '@navikt/ds-tailwind@8' \
  '@navikt/ds-tokens@8' \
  '@navikt/aksel-icons@8' \
  '@navikt/aksel-stylelint@8' \
  'react-hook-form@7'
```

Verifiser de eksakte versjonene som ble installert:

```bash
node -e "console.log(require('./node_modules/@navikt/ds-react/package.json').version)"
node -e "console.log(require('./node_modules/react-hook-form/package.json').version)"
```

### 6. Verifiser at alt bygger

```bash
yarn build --filter=@navikt/fp-frontend
```

### 7. Sjekk hvilke versjoner som ble oppdatert

```bash
git --no-pager diff --stat
```

Verifiser at `package.json`-filer og `yarn.lock` er oppdatert korrekt.

### 8. Commit endringene

```bash
git add -A
git commit -m "deps: oppdater @navikt/ft-* og peer dependencies

Oppdaterer alle @navikt/ft-* pakker til nyeste versjon.
Synkroniserer react-hook-form, @navikt/aksel-* og @navikt/ds-*
slik at de matcher versjonskravene fra ft-pakkene.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

### 9. Push og opprett PR

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

- `--exact` og `--recursive` kan ikke brukes samtidig — bruk `--recursive` med `pkg@major` (f.eks. `react-hook-form@7`).
- Hvis `yarn up` ikke finner oppdateringer, kan pakkene allerede være på nyeste versjon.
- Hvis bygget feiler etter oppdatering, sjekk changelog for ft-pakkene for breaking changes.
- Hvis peer dependency-versjoner er motstridende mellom ulike ft-pakker, velg den høyeste major-versjonen som er kompatibel med alle.
