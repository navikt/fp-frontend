import type {
  tjenester_behandling_søknad_ManglendeVedleggDto,
  tjenester_behandling_søknad_SoknadAdopsjonDto,
  tjenester_behandling_søknad_SoknadFodselDto,
  tjenester_behandling_søknad_SøknadsfristDto,
  tjenester_behandling_søknad_UtlandsoppholdDto,
} from './apiDtoGenerert.ts';

export type ManglendeVedleggSoknad = tjenester_behandling_søknad_ManglendeVedleggDto;

export type UtlandsoppholdPeriode = tjenester_behandling_søknad_UtlandsoppholdDto;

export type Søknadsfrist = tjenester_behandling_søknad_SøknadsfristDto;

// TODO: burde løses med tydeligere json subtypes i backend
export type Soknad =
  | ({
      soknadType: 'ST-002';
    } & tjenester_behandling_søknad_SoknadAdopsjonDto)
  | ({
      soknadType: 'ST-001';
    } & tjenester_behandling_søknad_SoknadFodselDto);
