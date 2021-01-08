# fp-frontend
Monorepo for Frontend kode for vl-foreldrepenger.

[![Build](https://github.com/navikt/fp-frontend/workflows/Build,%20push%20and%20deploy%20Fpsak-frontend/badge.svg)](https://github.com/navikt/fp-frontend/workflows/Build,%20push%20and%20deploy%20Fpsak-frontend/badge.svg)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=navikt_fp-frontend&metric=alert_status)](https://sonarcloud.io/dashboard?id=navikt_fp-frontend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=navikt_fp-frontend&metric=coverage)](https://sonarcloud.io/dashboard?id=navikt_fp-frontend)
[![Known Vulnerabilities](https://snyk.io/test/github/navikt/fp-frontend/badge.svg)](https://snyk.io/test/github/navikt/fp-frontend)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Storybook
https://navikt.github.io/fp-frontend

## For å komme i gang
````
yarn install
yarn dev
yarn build
````

#### TODO
* velge namespace, bruker scoped nå(@fpsak-frontend)
* Sette opp lerna publish for de pakkene som skal være åpne
* gjøre form pakken tilgjengelig med final-form og redux-form
* Legge inn readme for pakkene!

## Intellj og stubs
Disse må installeres manuelt, følg denne tråden:

https://intellij-support.jetbrains.com/hc/en-us/community/posts/207725245-React-import-are-not-resolved-in-WebStrom-and-Intellij-2016-2

## Workspaces
* Common dev dependencies skal kun ligge på roten. ref
https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d
>If you have common dev dependencies, it’s better to specify them in the workspace root package.json.
>For instance, this can be dependencies like Jest, Husky, Storybook, Eslint, Prettier, etc.

## Mocks i dev-serveren
Kan konfigureres via å sette opp en `.env`-fil i roten av prosjektet.
### Feature toggles (webpack/mocks/feature-toggles.js)
Tar en kommaseparert liste med featuretoggles og skrur disse på
```
FEATURE_TOGGLES=my.toggle,my.second.toggle
```

### Overstyr enkeltrute (webpack/mocks/fake-error.js)
Nyttig for å teste feilsituasjoner. Overstyres som følger:
```
FAKE_ERROR_PATH=/fpsak/api/behandling/person/personopplysninger
FAKE_ERROR_CODE=401
FAKE_ERROR_BODY={"error":"dette fikk galt"}
```

### Licenses and attribution
*For updated information, always see LICENSE first!*

### For NAV-ansatte
Interne henvendelser kan sendes via Slack i kanalen **#p2-frontend**.


