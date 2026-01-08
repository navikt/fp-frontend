import type { BehandlingType } from '../behandlingType';
import type { FagsakStatus } from '../fagsakStatus';
import type { FagsakYtelseType } from '../fagsakYtelseType';
import type { AndreKriterierType } from './andreKriterierType';
import type { BehandlingVenteStatus } from './behandlingVenteStatus';
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
  BehandlingVenteStatus: BehandlingVenteStatus;
};

export type LosKodeverkType = keyof KodeverkEnumMap;

export type AlleKodeverkLos = {
  [K in LosKodeverkType]: LosKodeverkMedNavn<K extends LosKodeverkType ? K : unknown>[];
};

type EnumOrUnknown<T extends LosKodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

export type LosKodeverkMedNavn<T extends LosKodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>;
