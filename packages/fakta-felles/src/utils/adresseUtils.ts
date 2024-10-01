import { Personadresse } from '@navikt/fp-types';

const PERSON_ADRESSE_LAND_NORGE = 'NORGE';

const emptyIfnull = (text: string | null | undefined): string => (text == null ? '' : text);

export const formaterAdresse = (adresse: Personadresse): string => {
  const { adresselinje1, adresselinje2, adresselinje3, postNummer, poststed } = adresse;

  const kobinertAdresselinje = [adresselinje1, adresselinje2, adresselinje3].filter(linje => !!linje).join(', ');

  const land = adresse.land?.toUpperCase() !== PERSON_ADRESSE_LAND_NORGE ? adresse.land : undefined;
  return `${emptyIfnull(kobinertAdresselinje)}, ${emptyIfnull(postNummer)} ${emptyIfnull(poststed)} ${emptyIfnull(land)}`.trim();
};
