#!/bin/bash

# Sjekk om "lokal" flagget er satt
LOKAL=false
for arg in "$@"; do
  if [ "$arg" = "lokal" ]; then
    LOKAL=true
  fi
done

# API endpoint
URL="https://fpsak-api.intern.dev.nav.no/fpsak/api/openapi.json"
URL_LOKALT="http://host.docker.internal:8080/fpsak/api/openapi.json"

if [ "$LOKAL" = true ]; then
  echo "Kjører i lokal modus. Henter lokal token og OpenAPI."
  TOKEN_LOKALT=$(curl -X POST "http://localhost:8060/rest/azuread/token" \
                     -H "Content-Type: application/x-www-form-urlencoded" \
                     --data-urlencode "grant_type=authorization_code" \
                     --data-urlencode "code=S123456" \
                     --data-urlencode "client_id=autotest" \
                     --data-urlencode "scope=api://vtp.teamforeldrepenger.vtp/.default"  | grep -o '"id_token":"[^\"]*"' | sed 's/"id_token":"\([^"]*\)"/\1/')

  echo "Henter OpenAPI fra: $URL_LOKALT"
  OPENAPI_LOKALT=$(curl -X GET "$URL_LOKALT" \
    -H "Authorization: Bearer $TOKEN_LOKALT" \
    -H "Accept: application/json" \
    -H "User-Agent: fp-frontend-script/1.0")

  echo "Oppdaterer swagger.json"
  echo "$OPENAPI_LOKALT" > swagger.json
else
  echo "Kjører i remote modus. Henter remote token og OpenAPI."
  TOKEN=$(curl -s -X POST "https://azure-token-generator.intern.dev.nav.no/api/public/m2m" \
            -d "aud=dev-fss:teamforeldrepenger:fpsak")

  echo "Henter OpenAPI fra: $URL"
  OPENAPI=$(curl -X GET "$URL" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Accept: application/json" \
    -H "User-Agent: fp-frontend-script/1.0")

  echo "Oppdaterer swagger.json"
  echo "$OPENAPI" > swagger.json
fi

echo "Genererer TS-typer fra swagger.json"
yarn run openapi-ts

cp temp-types/types.gen.ts packages/types/src/apiDtoGenerert.ts

rm -rf temp-types

cd packages/types
yarn run prettier
