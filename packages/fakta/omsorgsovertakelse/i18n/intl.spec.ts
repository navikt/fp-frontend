import { extract } from '@formatjs/cli-lib';
import glob from 'fast-glob';

import nb from './nb_NO.json';

// eslint-disable-next-line no-console
const writeToConsole = (text: string) => console.log(text);

const NOT_FOUND_BECAUSE_ID_IS_STRING_UNION_IN_CODE = new Set([
  'LegacyAksjonspunktVisning.Aksjonspunkt.5008',
  'LegacyAksjonspunktVisning.Aksjonspunkt.5054',
  'LegacyAksjonspunktVisning.Aksjonspunkt.5006',
  'LegacyAksjonspunktVisning.Aksjonspunkt.5004',
  'LegacyAksjonspunktVisning.Aksjonspunkt.5005',
  'LegacyAksjonspunktVisning.Aksjonspunkt.5013',
  'LegacyAksjonspunktVisning.Aksjonspunkt.5014',
  'LegacyAksjonspunktVisning.Aksjonspunkt.5011',
  'LegacyAksjonspunktVisning.Aksjonspunkt.6004',
  'LegacyAksjonspunktVisning.Aksjonspunkt.6010',
]);

describe('intl', () => {
  it('Check that i18n strings in code and in language file match', async () => {
    const files = await glob('src/**/*.{ts,tsx}');

    const foundTranslations = await extract(files, {
      idInterpolationPattern: '[sha512:contenthash:base64:6]',
    });

    const stringsInCode = new Set(Object.keys(JSON.parse(foundTranslations) as Record<string, string>));
    const stringsInFile = new Set(Object.keys(nb));

    const missingKeysBokmål = stringsInCode.difference(stringsInFile);
    if (missingKeysBokmål.size > 0) {
      writeToConsole('Not found in nb_NO.json:');
    }
    for (const key of missingKeysBokmål) {
      writeToConsole(`key ${key}`);
    }

    const missingKeysCode = stringsInFile.difference(stringsInCode);

    expect(missingKeysCode.size).toBe(NOT_FOUND_BECAUSE_ID_IS_STRING_UNION_IN_CODE.size);
    for (const key of NOT_FOUND_BECAUSE_ID_IS_STRING_UNION_IN_CODE) {
      missingKeysCode.delete(key);
    }

    if (missingKeysCode.size > 0) {
      writeToConsole('Not found in code:');
    }
    for (const key of missingKeysCode) {
      writeToConsole(`key ${key}`);
    }

    expect(missingKeysBokmål.size).toBe(0);
    expect(missingKeysCode.size).toBe(0);
  });
});
