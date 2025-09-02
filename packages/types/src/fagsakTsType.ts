import type {
  tjenester_behandling_dto_behandling_AnnenPartBehandlingDto,
  tjenester_behandling_dto_BehandlingOpprettingDto,
  tjenester_fagsak_dto_FagsakFullDto,
  tjenester_fagsak_dto_FagsakMarkeringDto,
  tjenester_fagsak_dto_FagsakNotatDto,
  tjenester_fagsak_dto_SakHendelseDto,
} from './apiDtoGenerert';

export type BehandlingOppretting = tjenester_behandling_dto_BehandlingOpprettingDto;

export type FagsakHendelse = tjenester_fagsak_dto_SakHendelseDto;

export type AnnenPartBehandling = tjenester_behandling_dto_behandling_AnnenPartBehandlingDto;

export type Saksnotat = tjenester_fagsak_dto_FagsakNotatDto;

export type Saksmarkering = tjenester_fagsak_dto_FagsakMarkeringDto;

// export type Fagsak = Readonly<{
//   saksnummer: string;
//   fagsakYtelseType: FagsakYtelseType;
//   relasjonsRolleType: RelasjonsRolleType;
//   status: FagsakStatus;
//   dekningsgrad: number;
//   aktørId: string;
//   harVergeIÅpenBehandling: boolean;
//   sakSkalTilInfotrygd: boolean;
//   behandlingTypeKanOpprettes: BehandlingOppretting[];
//   bruker: Person;
//   annenPart: Person | null;
//   annenpartBehandling: AnnenPartBehandling | null;
//   fagsakMarkeringer?: Saksmarkering[];
//   familiehendelse?: FagsakHendelse;
//   behandlinger: BehandlingAppKontekst[];
//   brukerManglerAdresse: boolean;
//   historikkinnslag: Historikkinnslag[];
//   kontrollResultat: Risikoklassifisering;
//   notater: Saksnotat[];
// }>;
export type Fagsak = tjenester_fagsak_dto_FagsakFullDto;
