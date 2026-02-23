import type {  FagsakStatus  } from '../index';
import type { AndreKriterierType } from './andreKriterierType';
import type { BehandlingVenteStatus } from './behandlingVenteStatus';
import type { oppgave_BehandlingType, oppgave_FagsakYtelseType } from './fplos.gen';
import type { KøSortering } from './køSortering';
import type { OppgaveBehandlingStatus } from './oppgaveBehandlingStatus';

//Mapping mellom LosKodeverkType og union-types med verdier
type KodeverkEnumMap = {
  BehandlingType: oppgave_BehandlingType;
  AndreKriterierType: AndreKriterierType;
  FagsakYtelseType: oppgave_FagsakYtelseType;
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
