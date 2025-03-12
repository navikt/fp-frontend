import type { BehandlingAppKontekst } from './behandlingAppKontekstTsType';
import type { Historikkinnslag } from './historikkinnslagTsType';
import type { Person } from './personTsType';
import type { Risikoklassifisering } from './risikoklassifiseringTsType';

export type BehandlingOppretting = Readonly<{
  behandlingType: string;
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
  relasjonsRolleType: string;
};

export type Saksnotat = {
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
};

export type Saksmarkering = {
  fagsakMarkering: string;
  kortNavn?: string;
};

export type Fagsak = Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: Person;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>;
