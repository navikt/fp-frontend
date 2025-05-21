import type { BehandlingType, KodeverkLosType, KøSortering } from '@navikt/fp-kodeverk';

import type { KodeverkMedNavn } from './kodeverkMedNavnTsType';

type KøSorteringKodeverk = KodeverkMedNavn<KøSortering> & {
  felttype: string;
  feltkategori: string;
};

type KodeverkMedSammeVerditype = Record<Exclude<KodeverkLosType, 'KøSortering'>, KodeverkMedNavn<unknown>[]>;

export type AlleKodeverkLos = KodeverkMedSammeVerditype & {
  KøSortering: KøSorteringKodeverk[];
};

//Mapping mellom KodeverkLosType og enums/union-types med verdier
type KodeverkEnumMap = {
  BehandlingType: BehandlingType;
};

type EnumOrUnknown<T extends KodeverkLosType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

export type KodeverkLosReturnType<T extends KodeverkLosType> = T extends KodeverkLosType.KO_SORTERING
  ? KøSorteringKodeverk[]
  : KodeverkMedNavn<EnumOrUnknown<T>>[];
