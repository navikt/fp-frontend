import type { AndreKriterierType } from '@navikt/fp-types';

type AnnetKriterie = Readonly<{
  andreKriterierType: AndreKriterierType;
  inkluder: boolean;
}>;

export type Periodefilter = 'FAST_PERIODE' | 'RELATIV_PERIODE_DAGER' | 'RELATIV_PERIODE_MÅNEDER';

export type Saksliste = Readonly<{
  sakslisteId: number;
  navn: string;
  behandlingTyper: string[];
  fagsakYtelseTyper: string[];
  andreKriterier: AnnetKriterie[];
  sortering?: {
    sorteringType: string;
    periodefilter: Periodefilter;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
  };
}>;
