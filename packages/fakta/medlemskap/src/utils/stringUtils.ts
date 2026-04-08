import { capitalizeFirstLetter } from '@navikt/ft-utils';

export const toTitleCapitalization = (sentence: string): string => {
  return sentence
    .toLowerCase()
    .split(' ')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');
};
