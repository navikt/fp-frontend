import type {
  tjenester_behandling_dto_behandling_AnnenPartBehandlingDto,
  tjenester_behandling_dto_BehandlingOpprettingDto,
  tjenester_fagsak_dto_FagsakFullDto,
  tjenester_fagsak_dto_FagsakMarkeringDto,
  tjenester_fagsak_dto_FagsakNotatDto,
  tjenester_fagsak_dto_SakHendelseDto,
} from './fpsak.gen';

export type BehandlingOppretting = tjenester_behandling_dto_BehandlingOpprettingDto;

export type FagsakHendelse = tjenester_fagsak_dto_SakHendelseDto;

export type AnnenPartBehandling = tjenester_behandling_dto_behandling_AnnenPartBehandlingDto;

export type Saksnotat = tjenester_fagsak_dto_FagsakNotatDto;

export type Saksmarkering = tjenester_fagsak_dto_FagsakMarkeringDto;

export type Fagsak = tjenester_fagsak_dto_FagsakFullDto;
