import type {
  BehandlingType,
  FagsakMarkeringKode,
  FagsakStatus,
  FagsakYtelseType,
  RelasjonsRolleType,
} from '@navikt/fp-kodeverk';

import type { BehandlingAppKontekst } from './behandlingAppKontekstTsType';
import type { Historikkinnslag } from './historikkinnslagTsType';
import type { Person } from './personTsType';
import type { Risikoklassifisering } from './risikoklassifiseringTsType';

export type BehandlingOppretting = Readonly<{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}>;

export type FagsakHendelse = Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>;

export type AnnenPartBehandling = {
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: RelasjonsRolleType;
};

export type Saksnotat = {
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
};

export type Saksmarkering = {
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
};

export type Fagsak = Readonly<{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>;
