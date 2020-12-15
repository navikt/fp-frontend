import { Kodeverk } from '@fpsak-frontend/types';

import getPackageIntl from '../i18n/getPackageIntl';

const intl = getPackageIntl();

export const replaceNorwegianCharacters = (str: string): string => {
  let result = str.split('æ').join('ae');
  result = result.split('ø').join('oe');
  return result.split('å').join('aa');
};

export const getLanguageFromSprakkode = (sprakkode?: Kodeverk): string => {
  if (!sprakkode) {
    return intl.formatMessage({ id: 'Malform.Bokmal' });
  }

  switch (sprakkode.kode) {
    case 'NN':
      return intl.formatMessage({ id: 'Malform.Nynorsk' });
    case 'EN':
      return intl.formatMessage({ id: 'Malform.Engelsk' });
    default:
      return intl.formatMessage({ id: 'Malform.Bokmal' });
  }
};
