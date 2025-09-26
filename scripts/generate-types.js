#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if "lokal" flag is set
const isLokal = process.argv.includes('lokal');

// API endpoints
const URL = 'https://fpsak-api.intern.dev.nav.no/fpsak/api/openapi.json';
const URL_LOKALT = 'http://localhost:8080/fpsak/api/openapi.json';

async function generateTypes() {
  try {
    if (isLokal) {
      console.log('Kjører i lokal modus. Henter token fra VTP.');

      // Get local token
      const tokenCommand = `curl -X POST "http://localhost:8060/rest/azuread/token" -H "Content-Type: application/x-www-form-urlencoded" --data-urlencode "grant_type=authorization_code" --data-urlencode "code=S123456" --data-urlencode "client_id=autotest" --data-urlencode "scope=api://vtp.teamforeldrepenger.vtp/.default"`;
      const tokenResponse = execSync(tokenCommand, { encoding: 'utf-8' });
      const tokenMatch = tokenResponse.match(/"id_token":"([^"]+)"/);

      if (!tokenMatch) {
        throw new Error('Could not extract token from response');
      }

      const tokenLokalt = tokenMatch[1];

      console.log(`Henter OpenAPI fra: ${URL_LOKALT}`);
      const openApiCommand = `curl -X GET "${URL_LOKALT}" -H "Authorization: Bearer ${tokenLokalt}" -H "Accept: application/json" -H "User-Agent: fp-frontend-script/1.0"`;
      const openApiResponse = execSync(openApiCommand, { encoding: 'utf-8' });

      console.log('Oppdaterer swagger.json');
      fs.writeFileSync('swagger.json', openApiResponse);
    } else {
      console.log('Kjører i remote modus. Henter remote token og OpenAPI.');

      // Get remote token
      const tokenCommand = `curl -s -X POST "https://azure-token-generator.intern.dev.nav.no/api/public/m2m" -d "aud=dev-fss:teamforeldrepenger:fpsak"`;
      const token = execSync(tokenCommand, { encoding: 'utf-8' }).trim();

      console.log(`Henter OpenAPI fra: ${URL}`);
      const openApiCommand = `curl -X GET "${URL}" -H "Authorization: Bearer ${token}" -H "Accept: application/json" -H "User-Agent: fp-frontend-script/1.0"`;
      const openApiResponse = execSync(openApiCommand, { encoding: 'utf-8' });

      console.log('Oppdaterer swagger.json');
      fs.writeFileSync('swagger.json', openApiResponse);
    }

    console.log('Genererer TS-typer fra swagger.json');
    execSync('yarn run openapi-ts', { stdio: 'inherit' });

    // Cross-platform file operations
    const isWindows = process.platform === 'win32';

    if (isWindows) {
      // Windows commands
      execSync('copy temp-types\\types.gen.ts packages\\types\\src\\apiDtoGenerert.ts', { stdio: 'inherit' });
      execSync('rmdir /s /q temp-types', { stdio: 'inherit' });
    } else {
      // Unix/Linux commands
      execSync('cp temp-types/types.gen.ts packages/types/src/apiDtoGenerert.ts', { stdio: 'inherit' });
      execSync('rm -rf temp-types', { stdio: 'inherit' });
    }

    // Change to packages/types directory and run prettier
    process.chdir('packages/types');
    execSync('yarn prettier --log-level silent', { stdio: 'pipe' });

    console.log('Script ferdig!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

generateTypes();
