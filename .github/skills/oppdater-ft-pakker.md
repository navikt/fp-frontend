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

> Siden pakkene allerede bruker eksakte versjoner er `--recursive` alene tilstrekkelig:

```bash
yarn up --recursive '@navikt/ft-*'
```

### 3. Installer oppdaterte avhengigheter

```bash
yarn install
```

### 4. Finn versjoner som skal brukes for aksel og react-hook-form

Les dependencies direkte fra de installerte ft-pakkene i node_modules:

```bash
node -e "console.log(require('./node_modules/@navikt/ft-form-hooks/package.json').dependencies['@navikt/ds-react'])"
```

```bash
node -e "console.log(require('./node_modules/@navikt/ft-form-hooks/package.json').dependencies['react-hook-form'])"
```

Eksempel på output: `8.5.2` og `7.71.1`. Bruk disse versjonene i neste steg.

### 5. Oppdater peer dependencies med yarn up

Bruk versjonene fra steg 4 direkte med `yarn up --recursive`.
Erstatt `8.5.2` og `7.71.1` med nøyaktig-versjonene fra steg 4 om de har endret seg:

```bash
yarn up --recursive \
  '@navikt/ds-react@8.5.2' \
  '@navikt/ds-css@8.5.2' \
  '@navikt/ds-tailwind@8.5.2' \
  '@navikt/ds-tokens@8.5.2' \
  '@navikt/aksel-icons@8.5.2' \
  '@navikt/aksel-stylelint@8.5.2' \
  'react-hook-form@7.71.1'
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
  --label "dependencies"
```

## Feilsøking

- Hvis `yarn up` ikke finner oppdateringer, kan pakkene allerede være på nyeste versjon. Eventuelt sjekk om når siste
  publisering i ft-frontend-saksbehandling ble kjørt.
  `gh run list --workflow=publish.yml --limit=1 --repo navikt/ft-frontend-saksbehandling`
- Hvis bygget feiler etter oppdatering, sjekk changelog for ft-pakkene for breaking changes.
- Hvis yarn ikke finner ny versjon av react-hook-form, kan dette skyldes `npmMinimalAgeGate`. I såfall midlertidig legg
  til `react-hook-form@x.y.z` under `npmPreapprovedPackages`-seksjonen i `.yarnrc.yml`-filen, der `x.y.z` er den eksakte
  versjonen brukt av ft-pakkene.
- Hvis dependency-versjoner er motstridende mellom ulike ft-pakker, velg den høyeste major-versjonen som er kompatibel
  med alle.
