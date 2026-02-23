import type { FagsakStatus } from '../fagsakStatus';
import type { oppgave_BehandlingType, oppgave_FagsakYtelseType } from './fplosDtoGenerert';
import type { AndreKriterierType, BehandlingVenteStatus, KøSortering, OppgaveBehandlingStatus } from './index';

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
