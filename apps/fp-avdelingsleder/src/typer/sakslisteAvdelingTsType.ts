import type { AndreKriterierType, BehandlingType, KøSortering } from '@navikt/fp-types';

type AnnetKriterie = Readonly<{
  andreKriterierType: AndreKriterierType;
  inkluder: boolean;
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

export enum Periodefilter {
  FAST_PERIODE = 'FAST_PERIODE',
  RELATIV_PERIODE_DAGER = 'RELATIV_PERIODE_DAGER',
  RELATIV_PERIODE_MÅNEDER = 'RELATIV_PERIODE_MÅNEDER',
}

export type SakslisteAvdeling = Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
  fagsakYtelseTyper?: string[];
  sortering?: {
    sorteringType: KøSortering;
    periodefilter: Periodefilter;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
  };
  sorteringTyper: KøSorteringFelt[];
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  gjeldendeStatistikk?: Statistikk;
}>;
