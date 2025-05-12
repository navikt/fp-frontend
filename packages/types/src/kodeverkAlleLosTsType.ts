import type { KodeverkLosType } from '@navikt/fp-kodeverk';

import type { KodeverkMedNavn } from './kodeverkMedNavnTsType';

type KøSorteringKodeverk = KodeverkMedNavn & {
  felttype: string;
  feltkategori: string;
};

type KodeverkMedSammeVerditype = Record<Exclude<KodeverkLosType, 'KøSortering'>, KodeverkMedNavn[]>;

export type AlleKodeverkLos = KodeverkMedSammeVerditype & {
  KøSortering: KøSorteringKodeverk[];
};

export type KodeverkLosReturnType<T extends KodeverkLosType> = T extends KodeverkLosType.KO_SORTERING
  ? KøSorteringKodeverk[]
  : KodeverkMedNavn[];
