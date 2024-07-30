import BehandlingAppKontekst from './behandlingAppKontekstTsType';
import Historikkinnslag from './historikkinnslagTsType';
import Risikoklassifisering from './risikoklassifiseringTsType';

export type BehandlingOppretting = Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>;

export type FagsakPerson = Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
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

type Fagsak = Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkering?: string;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>;

export default Fagsak;
