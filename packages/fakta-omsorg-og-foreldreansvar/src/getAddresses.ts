import { adresseType, landkoder as Landkode } from '@navikt/fp-kodeverk';
import { Personadresse } from '@navikt/fp-types';

const emptyIfnull = (text?: string | null): string => (text == null ? '' : text);

const constructAddress = (
  adresse: string,
  postnummer?: string | null,
  poststed?: string | null,
  land?: string,
): string => `${emptyIfnull(adresse)}, ${emptyIfnull(postnummer)} ${emptyIfnull(poststed)} ${emptyIfnull(land)}`;

export type Adresser = { [key in adresseType]?: string };

const getAddresses = (addresses: Personadresse[] = []): Adresser =>
  addresses.reduce<Adresser>((acc, address) => {
    if (!address.adresseType || address.adresseType === adresseType.UKJENT_ADRESSE) {
      return {
        ...acc,
        [adresseType.BOSTEDSADRESSE]: 'UKJENT',
      };
    }

    const currentAddress = [address.adresselinje1, address.adresselinje2, address.adresselinje3]
      .filter(linje => !!linje)
      .join(', ');
    if (!currentAddress) {
      return acc;
    }

    const country = address.land !== Landkode.NORGE ? address.land : undefined;
    return {
      ...acc,
      [address.adresseType]: constructAddress(currentAddress, address.postNummer, address.poststed, country).trim(),
    };
  }, {});

export default getAddresses;
