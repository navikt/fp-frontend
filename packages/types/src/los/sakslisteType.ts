import type { BehandlingType } from '../behandlingType';
import type { FagsakYtelseType } from '../fagsakYtelseType';
import type { AndreKriterierType } from './andreKriterierType';
import type { KøSortering } from './køSortering';

export type AnnetKriterie = Readonly<{
  inkluder: AndreKriterierType[];
  ekskluder: AndreKriterierType[];
}>;

export type KøSorteringFelt = Readonly<{
  sorteringType: KøSortering;
  feltType: string;
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

export type SaksbehandlerProfil = Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>;

export type SakslisteAvdeling = Readonly<{
  sakslisteId: number;
  navn: string;
  behandlingTyper: BehandlingType[];
  fagsakYtelseTyper: FagsakYtelseType[];
  sortering: Sortering;
  sorteringTyper: KøSorteringFelt[];
  andreKriterie: AnnetKriterie;
  saksbehandlere: SaksbehandlerProfil[];
  gjeldendeStatistikk?: Statistikk;
}>;

export type SakslisteDto = Omit<SakslisteAvdeling, 'sorteringTyper' | 'saksbehandlere' | 'gjeldendeStatistikk'> & {
  avdelingEnhet: string;
};
