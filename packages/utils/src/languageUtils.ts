import { Kodeverk } from '@fpsak-frontend/types';

export const replaceNorwegianCharacters = (str: string): string => {
  let result = str.split('æ').join('ae');
  result = result.split('ø').join('oe');
  return result.split('å').join('aa');
};

export const getLanguageCodeFromSprakkode = (sprakkode?: Kodeverk): string => {
  if (!sprakkode) {
    return 'Malform.Bokmal';
  }

  switch (sprakkode.kode) {
    case 'NN':
      return 'Malform.Nynorsk';
    case 'EN':
      return 'Malform.Engelsk';
    default:
      return 'Malform.Bokmal';
  }
};
