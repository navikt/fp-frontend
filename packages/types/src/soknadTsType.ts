import type {
  tjenester_behandling_søknad_ManglendeVedleggDto,
  tjenester_behandling_søknad_SoknadAdopsjonDto,
  tjenester_behandling_søknad_SoknadFodselDto,
  tjenester_behandling_søknad_SøknadsfristDto,
  tjenester_behandling_søknad_UtlandsoppholdDto,
} from './apiDtoGenerert';

export type ManglendeVedleggSoknad = tjenester_behandling_søknad_ManglendeVedleggDto;

export type UtlandsoppholdPeriode = tjenester_behandling_søknad_UtlandsoppholdDto;

export type Søknadsfrist = tjenester_behandling_søknad_SøknadsfristDto;

export type SøknadFødsel = {
  soknadType: 'ST-001';
} & tjenester_behandling_søknad_SoknadFodselDto;

export type SøknadAdopsjon = {
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto;

// TODO: burde løses med tydeligere json subtypes i backend
export type Soknad = SøknadAdopsjon | SøknadFødsel;

export const søknadErAdopsjon = (soknad: Soknad): soknad is SøknadAdopsjon => soknad.soknadType === 'ST-002';
