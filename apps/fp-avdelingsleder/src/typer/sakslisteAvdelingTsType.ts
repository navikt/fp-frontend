import type { AndreKriterierType, BehandlingType, KøSortering } from '@navikt/fp-types';

type AnnetKriterie = Readonly<{
  andreKriterierType: AndreKriterierType;
  inkluder: boolean;
}>;

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
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
}>;
