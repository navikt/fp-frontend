import OpplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import landkoder from '@fpsak-frontend/kodeverk/src/landkoder';
import { Personadresse } from '@fpsak-frontend/types';

const emptyIfnull = (text?: string): string => (text == null ? '' : text);

const constructAddress = (
  adresse = '',
  postnummer = '',
  poststed = '',
  land = '',
): string => `${emptyIfnull(adresse)}, ${emptyIfnull(postnummer)} ${emptyIfnull(poststed)} ${emptyIfnull(land)}`;

export type Adresser = {[key in OpplysningAdresseType]?: string}

const getAddresses = (addresses: Personadresse[] = []): Adresser => addresses.reduce<Adresser>((acc, address) => {
  if (!address.adresseType || address.adresseType.kode === OpplysningAdresseType.UKJENT) {
    return {
      ...acc,
      [OpplysningAdresseType.BOSTEDSADRESSE]: 'UKJENT',
    };
  }

  const currentAddress = [address.adresselinje1, address.adresselinje2, address.adresselinje3]
    .filter((linje) => !!linje)
    .join(', ');
  if (!currentAddress) {
    return acc;
  }

  const country = address.land !== landkoder.NORGE ? address.land : undefined;
  return {
    ...acc,
    [address.adresseType.kode]: constructAddress(
      currentAddress,
      address.postNummer,
      address.poststed,
      country,
    ).trim(),
  };
}, {});

export default getAddresses;
