import type { AndreKriterierType } from '@navikt/fp-types';

type AnnetKriterie = Readonly<{
  andreKriterierType: AndreKriterierType;
  inkluder: boolean;
}>;

export type Saksliste = Readonly<{
  sakslisteId: number;
  navn: string;
  behandlingTyper: string[];
  fagsakYtelseTyper: string[];
  andreKriterier: AnnetKriterie[];
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
}>;
