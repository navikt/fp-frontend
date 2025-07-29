#!/bin/bash

# Step 1: Run the command
if ! yarn run openapi-ts; then
  echo "❌ Typegenerering feilet. Sjekk error filen som ble generert."
  echo "👉 Husk at du må ha en swagger.json lokalt."
  echo "1. Kjør opp autotest. Gå til Swagger lokalt på localhost:9200"
  echo "2. Åpne network og kopier openapi.json for relevant tjeneste"
  exit 1
fi

# Step 2: Copy the generated file
cp temp-types/types.gen.ts packages/types/src/apiDtoGenerert.ts

# Step 3: Delete the temp folder
rm -rf temp-types

# Step 4: Format types
cd packages/types
yarn run prettier
