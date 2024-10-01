import { AdresseType } from '@navikt/fp-kodeverk';
import { Personadresse } from '@navikt/fp-types';
import { formaterAdresse } from '@navikt/fp-fakta-felles';

const PERSON_ADRESSE_LAND_NORGE = 'NORGE';

export type Adresser = { [key in AdresseType]?: string };

const getAddresses = (addresses: Personadresse[] = []): Adresser =>
  addresses.reduce<Adresser>((acc, address) => {
    if (!address.adresseType || address.adresseType === AdresseType.UKJENT_ADRESSE) {
      return {
        ...acc,
        [AdresseType.BOSTEDSADRESSE]: 'UKJENT',
      };
    }

    const currentAddress = [address.adresselinje1, address.adresselinje2, address.adresselinje3]
      .filter(linje => !!linje)
      .join(', ');
    if (!currentAddress) {
      return acc;
    }

    return {
      ...acc,
      [address.adresseType]: formaterAdresse(address).trim(),
    };
  }, {});

export default getAddresses;
