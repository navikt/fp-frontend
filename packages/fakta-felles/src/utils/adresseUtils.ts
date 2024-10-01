import { Personadresse } from '@navikt/fp-types';

const PERSON_ADRESSE_LAND_NORGE = 'NORGE';

const emptyIfnull = (text: string | null | undefined): string => (text == null ? '' : text);

export const formaterAdresse = (adresse: Personadresse): string => {
  const { adresselinje1, adresselinje2, adresselinje3, postNummer, poststed, land } = adresse;

  const gateadresse = [adresselinje1, adresselinje2, adresselinje3].filter(linje => !!linje).join(', ');
  const postNummerogSted = `${emptyIfnull(postNummer)} ${emptyIfnull(poststed)}`;
  const adresseLand = land?.toUpperCase() !== PERSON_ADRESSE_LAND_NORGE ? land : undefined;

  return [gateadresse, postNummerogSted, adresseLand]
    .map(linje => linje?.trim())
    .filter(linje => !!linje)
    .join(', ')
    .trim();
};
