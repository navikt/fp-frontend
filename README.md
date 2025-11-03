# fp-frontend

Monorepo for Frontend kode for foreldrepenger.

[![Build](https://github.com/navikt/fp-frontend/workflows/Build,%20push%20and%20deploy%20Fpsak-frontend/badge.svg)](https://github.com/navikt/fp-frontend/workflows/Build,%20push%20and%20deploy%20Fpsak-frontend/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=navikt_fp-frontend&metric=alert_status)](https://sonarcloud.io/dashboard?id=navikt_fp-frontend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=navikt_fp-frontend&metric=coverage)](https://sonarcloud.io/dashboard?id=navikt_fp-frontend)
[![Known Vulnerabilities](https://snyk.io/test/github/navikt/fp-frontend/badge.svg)](https://snyk.io/test/github/navikt/fp-frontend)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Storybook

https://navikt.github.io/fp-frontend

## For å komme i gang

Lag en .yarnrc.yml-fil i hjemmefolderen din: (Bytt ut <token> med ditt genererte token)

```
npmRegistries:
  https://npm.pkg.github.com:
    npmAlwaysAuth: true
    npmAuthToken: <token>
```

Kjør så desse kommandoene for å installere og bygge applikasjonen:

```
yarn install
yarn build
```

En kan kjøre tester og linting både fra rot og fra de ulike pakkene:

```
yarn test
yarn tsc
yarn eslint
yarn stylelint
```

## Utvikling

### 1. Vite Mode

Vi har en utviklingsmetode vi kaller for "Vite mode".
Den gjør at du kan bruke server som er deployet (eller i autotest) som utgangspunkt.
Fordelen er at du får brukt helt "ekte" dev data, men med frontend servert fra din localhost.

1. cd til appen `cd apps/fp-frontend`
2. Kjør `yarn dev`. Nå har du lokal vite-server kjørende på `localhost:9010`
3. Gå til ingress i dev (https://fpsak.intern.dev.nav.no/) eller autotest (http://localhost:9000/)
4. **Aktiver Vite-mode**:

- Legg til `/vite-on` i slutten av URL-en du bruker i nettleseren (fra steg 3)
- Dette setter en cookie kalt `use-local-vite-server` i nettleseren din
- Cookien instruerer den deployede serveren til å sende deg en spesiell `index.html`
- Denne HTML-filen laster JavaScript fra din lokale utviklingsserver.
- Du vil nå se endringer du gjør lokalt mens du bruker den deployede backend-en

### 2. Storybook

For å kjøre opp storybook. Gå inn i aktuell pakke og kjør:

```
yarn storybook
```

### Utvikling mot lokal kode i ft-frontend-saksbehandling

Oppskrift: [README - ft-frontend-saksbehandling](https://github.com/navikt/ft-frontend-saksbehandling/blob/main/README.md)

## Utvikle lokalt med autotest

For å utvikle lokalt på fpfrontend mot autotest må man kjøre opp autotest (f.eks.
kjøre [./lokal-utvikling/lokal-utvikling-ide.sh](https://github.com/navikt/fp-autotest/blob/master/lokal-utvikling/lokal-utvikling-ide.sh)
i fp-autotest-repoet). Her er det viktig å understreke at fpfrontend(:9090) også skal spinnes opp i autotest.
Det er fordi man trenger fpfrontend i docker til å få til login. Deretter kan man starte fpfrontend lokalt
på http://localhost:9010 med `yarn dev`.

### Innlogging og utlogging mot autotest

Den lokale frontenden kjører på port 9010, for å logge seg inn må man kalle wonderwall
på http://localhost:9000/oauth2/login?redirect=http://localhost:9010.

Ved innlogging gå til http://localhost:9000/oauth2/login?redirect=http://localhost:9010 - logg inn der med den brukeren
du ønsker å teste med, så fortsett å jobbe videre med den lokale frontenden på http://localhost:9010.

Om man skulle få problemer med at `authserver:8085` ikke finnes så må man legge inn `authserver` i `hosts` fila på
maskinen:
`127.0.0.1 localhost authserver`

#### TODO

- Legge inn readme for pakkene!

## Synkroniser TS-typer for med fpsak DTO-er

Alle DTO-er fra upstream-tjenester (f.eks. fpsak) er samlet i én generert fil med TypeScript-typer.
Synkroniser jevnlig for å holde typene oppdatert.

- **Synkroniser typer i dev:**

```bash
yarn generate-types
```

- **Generer typer for lokale endringer (forutsetter at fpsak kjører på port 8080):**

```bash
  yarn generate-types lokal
```

## Turborepo

- Hovedregelen ved bruk av Turborepo er at dependencies skal installeres i pakkene de blir brukt.
  https://turborepo.com/docs/crafting-your-repository/managing-dependencies

### Licenses and attribution

_For updated information, always see LICENSE first!_

### For Nav-ansatte

Interne henvendelser kan sendes via Slack i kanalen **#fp-frontend**.
