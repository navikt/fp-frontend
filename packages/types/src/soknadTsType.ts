import type {
  tjenester_behandling_medlem_MedlemskapDto_Utlandsopphold,
  tjenester_behandling_søknad_ManglendeVedleggDto,
  tjenester_behandling_søknad_SøknadDto,
  tjenester_behandling_søknad_SøknadsfristDto,
} from './apiDtoGenerert';

export type ManglendeVedleggSoknad = tjenester_behandling_søknad_ManglendeVedleggDto;

export type UtlandsoppholdPeriode = tjenester_behandling_medlem_MedlemskapDto_Utlandsopphold;

export type Søknadsfrist = tjenester_behandling_søknad_SøknadsfristDto;

export type Soknad = tjenester_behandling_søknad_SøknadDto;
