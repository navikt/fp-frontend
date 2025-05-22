import type {
  AndreKriterierType,
  BehandlingType,
  FagsakStatus,
  FagsakYtelseType,
  KøSortering,
} from '@navikt/fp-kodeverk';

import type { LosKodeverkType } from './kodeverkTypeLos';

//Mapping mellom LosKodeverkType og enums/union-types med verdier
type KodeverkEnumMap = {
  BehandlingType: BehandlingType;
  AndreKriterierType: AndreKriterierType;
  FagsakYtelseType: FagsakYtelseType;
  KøSorteringing: KøSortering;
  FagsakStatus: FagsakStatus;
};

type KøSorteringKodeverk = LosKodeverkMedNavn<'KøSortering'> & {
  felttype: string;
  feltkategori: string;
};

type KodeverkMedSammeVerditype = {
  [K in Exclude<LosKodeverkType, 'KøSortering'>]: LosKodeverkMedNavn<K extends LosKodeverkType ? K : unknown>[];
};

export type AlleKodeverkLos = KodeverkMedSammeVerditype & {
  KøSortering: KøSorteringKodeverk[];
};

type EnumOrUnknown<T extends LosKodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

export type KodeverkLosReturnType<T extends LosKodeverkType> = T extends 'KøSortering'
  ? KøSorteringKodeverk[]
  : LosKodeverkMedNavn<T>[];

export type LosKodeverkMedNavn<T extends LosKodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>;
