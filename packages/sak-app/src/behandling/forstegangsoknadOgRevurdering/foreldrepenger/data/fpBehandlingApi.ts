import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import {
  DokumentasjonVurderingBehov,
  FaktaArbeidsforhold,
  KontrollerFaktaPeriode,
  PeriodeSoker,
  UttakKontrollerAktivitetskrav,
  UttakKontrollerFaktaPerioderWrapper,
  UttaksresultatPeriode,
  UttakStonadskontoer,
} from '@fpsak-frontend/types';

import { behandlingFellesEndepunkter } from '../../../felles/data/behandlingFellesApi';

type StonadskontoGittUttaksPerioderParams = {
  behandlingUuid: string;
  perioder: PeriodeSoker[];
}

export const FpBehandlingApiKeys = {
  STONADSKONTOER_GITT_UTTAKSPERIODER: new RestKey<void, StonadskontoGittUttaksPerioderParams>('STONADSKONTOER_GITT_UTTAKSPERIODER'),
  FAKTA_ARBEIDSFORHOLD: new RestKey<FaktaArbeidsforhold[], void>('FAKTA_ARBEIDSFORHOLD'),
  UTTAKSRESULTAT_PERIODER: new RestKey<UttaksresultatPeriode, void>('UTTAKSRESULTAT_PERIODER'),
  UTTAK_STONADSKONTOER: new RestKey<UttakStonadskontoer, void>('UTTAK_STONADSKONTOER'),
  UTTAK_KONTROLLER_FAKTA_PERIODER: new RestKey<UttakKontrollerFaktaPerioderWrapper, void>('UTTAK_KONTROLLER_FAKTA_PERIODER'),
  UTTAK_KONTROLLER_FAKTA_PERIODER_V2: new RestKey<KontrollerFaktaPeriode[], void>('UTTAK_KONTROLLER_FAKTA_PERIODER_V2'),
  UTTAK_KONTROLLER_AKTIVITETSKRAV: new RestKey<UttakKontrollerAktivitetskrav[], void>('UTTAK_KONTROLLER_AKTIVITETSKRAV'),
  BEREGNINGSGRUNNLAG_BESTEBEREGNING: new RestKey<UttakKontrollerAktivitetskrav[], void>('BEREGNINGSGRUNNLAG_BESTEBEREGNING'),
  DOKUMENTASJON_VURDERING_BEHOV: new RestKey<DokumentasjonVurderingBehov[], void>('DOKUMENTASJON_VURDERING_BEHOV'),
};

const endepunkter = new RestApiConfigBuilder()

  // behandlingsdata
  .withRel('fakta-arbeidsforhold', FpBehandlingApiKeys.FAKTA_ARBEIDSFORHOLD)
  .withRel('uttaksresultat-perioder', FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER)
  .withRel('uttak-stonadskontoer', FpBehandlingApiKeys.UTTAK_STONADSKONTOER)
  .withRel('uttak-kontroller-fakta-perioder', FpBehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER)
  .withRel('uttak-kontroller-fakta-perioder-v2', FpBehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER_V2)
  .withRel('uttak-kontroller-aktivitetskrav', FpBehandlingApiKeys.UTTAK_KONTROLLER_AKTIVITETSKRAV)
  .withRel('beregningsgrunnlagharbesteberegning', FpBehandlingApiKeys.BEREGNINGSGRUNNLAG_BESTEBEREGNING)
  .withRel('uttak-vurder-dokumentasjon', FpBehandlingApiKeys.DOKUMENTASJON_VURDERING_BEHOV)

  // operasjoner
  .withRel('lagre-stonadskontoer-gitt-uttaksperioder', FpBehandlingApiKeys.STONADSKONTOER_GITT_UTTAKSPERIODER)

  .build();

const alleEndepunkter = endepunkter.concat(behandlingFellesEndepunkter);

export const requestFpApi = createRequestApi(alleEndepunkter);

export const restApiFpHooks = RestApiHooks.initHooks(requestFpApi);
