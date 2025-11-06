#!/usr/bin/env node

import fs from 'node:fs';

const isLokal = process.argv.includes('lokal');

const URL = 'https://fpsak-api.intern.dev.nav.no/fpsak/api/openapi.json';
const URL_LOKALT = 'http://localhost:8080/fpsak/api/openapi.json';

async function hentToken(isLokal) {
  if (isLokal) {
    console.log('Henter token fra VTP.');
    const res = await fetch('http://localhost:8060/rest/azuread/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: 'S123456',
        client_id: 'autotest',
        scope: 'api://vtp.teamforeldrepenger.vtp/.default',
      }).toString(),
    });
    const data = await res.json();
    if ('id_token' in data) {
      return data.id_token;
    } else {
      throw new Error('Could not extract id_token from response');
    }
  } else {
    console.log('Henter remote token fra Azure Token Generator.');
    const res = await fetch('https://azure-token-generator.intern.dev.nav.no/api/public/m2m', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        aud: 'dev-fss:teamforeldrepenger:fpsak',
      }).toString(),
    });
    return res.text();
  }
}

async function hentOpenAPISpec(url, token) {
  console.log(`Henter OpenAPI spec fra: ${url}`);
  const res = await fetch(url, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'User-Agent': 'fp-frontend-script/1.0',
    },
  });
  const json = await res.text();
  console.log('Oppdaterer swagger.json');
  fs.writeFileSync('swagger.json', json);
}

(async () => {
  try {
    console.log(`Kjører i ${isLokal ? 'lokal' : 'remote'} modus.`);

    const url = isLokal ? URL_LOKALT : URL;
    const token = await hentToken(isLokal);

    await hentOpenAPISpec(url, token);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
