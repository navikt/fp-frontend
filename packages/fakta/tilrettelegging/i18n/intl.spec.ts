import { extract } from '@formatjs/cli-lib/lib_esnext';
import glob from 'fast-glob';

import nb from './nb_NO.json';

// eslint-disable-next-line no-console
const writeToConsole = (text: string) => console.log(text);

describe('intl', () => {
  it('Check that i18n strings in code and in language file match', async () => {
    const files = await glob('src/**/*.{ts,tsx}');

    const foundTranslations = await extract(files, {
      idInterpolationPattern: '[sha512:contenthash:base64:6]',
    });
    const stringsInCode = Object.keys(JSON.parse(foundTranslations) as Record<string, string>);

    const missingKeysBokmål = stringsInCode.filter(key => !Object.keys(nb).includes(key));
    if (missingKeysBokmål.length > 0) {
      writeToConsole('Not found in nb_NO.json:');
    }
    for (const key of missingKeysBokmål) {
      writeToConsole(`key ${key}`);
    }

    const missingKeysCode = Object.keys(nb).filter(key => !stringsInCode.includes(key));
    if (missingKeysCode.length > 0) {
      writeToConsole('Not found in code:');
    }
    for (const key of missingKeysCode) {
      writeToConsole(`key ${key}`);
    }

    expect(missingKeysBokmål.length).toBe(0);
    expect(missingKeysCode.length).toBe(0);
  });
});
