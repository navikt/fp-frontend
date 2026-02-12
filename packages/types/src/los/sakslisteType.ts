import type { AndreKriterierType, BehandlingType, FagsakYtelseType, KøSortering } from '@navikt/fp-types';

export type AnnetKriterie = Readonly<{
  inkluder: AndreKriterierType[];
  ekskluder: AndreKriterierType[];
}>;

export type KøSorteringFelt = Readonly<{
  sorteringType: KøSortering;
  feltType: string;
  feltKategori: string;
}>;

export type Statistikk = {
  alleOppgaver: number;
  tilgjengeligeOppgaver: number;
  behandlingerPåVent: number;
};

export type Sortering = {
  sorteringType: KøSortering;
  periodefilter: Periodefilter;
  fra?: number;
  til?: number;
  fomDato?: string;
  tomDato?: string;
};

export type Periodefilter = 'FAST_PERIODE' | 'RELATIV_PERIODE_DAGER' | 'RELATIV_PERIODE_MÅNEDER';

export type SakslisteAvdeling = Readonly<{
  sakslisteId: number;
  navn: string;
  behandlingTyper: BehandlingType[];
  fagsakYtelseTyper: FagsakYtelseType[];
  sortering: Sortering;
  sorteringTyper: KøSorteringFelt[];
  andreKriterie: AnnetKriterie;
  saksbehandlerIdenter: string[];
  gjeldendeStatistikk?: Statistikk;
}>;

export type SakslisteDto = Omit<
  SakslisteAvdeling,
  'sorteringTyper' | 'saksbehandlerIdenter' | 'gjeldendeStatistikk'
> & {
  avdelingEnhet: string;
};
