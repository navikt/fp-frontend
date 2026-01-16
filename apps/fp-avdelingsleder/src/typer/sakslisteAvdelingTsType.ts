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
  tilgjengligeOppgaver: number;
};

export type SakslisteAvdeling = Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
  fagsakYtelseTyper?: string[];
  sortering?: {
    sorteringType: KøSortering;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  sorteringTyper: KøSorteringFelt[];
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  gjeldendeStatistikk?: Statistikk;
}>;
