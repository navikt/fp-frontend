# fp-frontend

Monorepo for Frontend kode for foreldrepenger.

[![Build](https://github.com/navikt/fp-frontend/workflows/Build,%20push%20and%20deploy%20Fpsak-frontend/badge.svg)](https://github.com/navikt/fp-frontend/workflows/Build,%20push%20and%20deploy%20Fpsak-frontend/badge.svg)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
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

For å kjøre opp applikasjonen:

```
yarn dev
```

For å kjøre opp storybook. Gå inn i aktuell pakke og kjør:

```
yarn storybook
```

En kan kjøre tester og linting både fra rot og fra de ulike pakkene:

```
yarn test
yarn tsc
yarn eslint
yarn stylelint
```

## Utvikling mot lokal kode i ft-frontend-saksbehandling

```
cd fp-frontend
yarn link <sti til folder på disk>
Eksempel: yarn link ../../../ft-frontend-saksbehandling/packages/sak-fagsak-profil/

cd ft-frontend-saksbehandling
Gå til aktuell pakke og kjør yarn dev
```

yarn link endrer på package.json og lock-filen, så husk å kjør unlink før commit/push

For å gå tilbake til å bruke publisert pakke:

```
cd fp-frontend
yarn unlink <sti til folder på disk>
Eksempel: yarn unlink ../../../ft-frontend-saksbehandling/packages/sak-fagsak-profil/
```

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

## Intellj og stubs

Disse må installeres manuelt, følg denne tråden:

https://intellij-support.jetbrains.com/hc/en-us/community/posts/207725245-React-import-are-not-resolved-in-WebStrom-and-Intellij-2016-2

## Workspaces

- Common dev dependencies skal kun ligge på roten. ref
  https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d
  > If you have common dev dependencies, it’s better to specify them in the workspace root package.json.
  > For instance, this can be dependencies like Jest, Husky, Storybook, Eslint, Prettier, etc.

## Mocks i dev-serveren

Kan konfigureres via å sette opp en `.env`-fil i roten av prosjektet.

### Overstyr enkeltrute (webpack/mocks/fake-error.js)

Nyttig for å teste feilsituasjoner. Overstyres som følger:

```
FAKE_ERROR_PATH=/fpsak/api/behandling/person/personopplysninger
FAKE_ERROR_CODE=401
FAKE_ERROR_BODY={"error":"dette fikk galt"}
```

### Licenses and attribution

_For updated information, always see LICENSE first!_

### For Nav-ansatte

Interne henvendelser kan sendes via Slack i kanalen **#fp-frontend**.
