import type { AndreKriterierType } from './andreKriterierType';
import type { BehandlingType } from './behandlingType';
import type { FagsakStatus } from './fagsakStatus';
import type { FagsakYtelseType } from './fagsakYtelseType';
import type { KøSortering } from './køSortering';
import type { OppgaveBehandlingStatus } from './oppgaveBehandlingStatus';

//Mapping mellom LosKodeverkType og union-types med verdier
type KodeverkEnumMap = {
  BehandlingType: BehandlingType;
  AndreKriterierType: AndreKriterierType;
  FagsakYtelseType: FagsakYtelseType;
  KøSortering: KøSortering;
  FagsakStatus: FagsakStatus;
  OppgaveBehandlingStatus: OppgaveBehandlingStatus;
};

export type LosKodeverkType = keyof KodeverkEnumMap;

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

export type LosKodeverkMedNavn<T extends LosKodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>;
