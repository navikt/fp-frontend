import type {
  tjenester_behandling_dto_behandling_BehandlingÅrsakDto,
  tjenester_behandling_dto_behandling_FagsakBehandlingDto,
  tjenester_behandling_dto_BehandlingOperasjonerDto,
  tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto,
} from './fpsak.gen';

export type BehandlingÅrsak = tjenester_behandling_dto_behandling_BehandlingÅrsakDto;

export type TotrinnskontrollSkjermlenkeContext = tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto;

export type BehandlingTillatteOperasjoner = tjenester_behandling_dto_BehandlingOperasjonerDto;

export type FagsakBehandlingDtoFpSak = tjenester_behandling_dto_behandling_FagsakBehandlingDto;

export enum VergeBehandlingmenyValg {
  OPPRETT = 'OPPRETT',
  FJERN = 'FJERN',
  SKJUL = 'SKJUL',
}
