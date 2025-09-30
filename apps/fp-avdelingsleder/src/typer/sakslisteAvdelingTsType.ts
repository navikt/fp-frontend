import type { BehandlingType } from '@navikt/fp-types';

type AnnetKriterie = Readonly<{
  andreKriterierType: string;
  inkluder: boolean;
}>;

export type SakslisteAvdeling = Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
  fagsakYtelseTyper?: string[];
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
}>;
