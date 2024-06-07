import { DokumentasjonVurderingBehov, UttakÅrsak } from '@navikt/fp-types';
import {
  mapUttakVurderingTilVurderingsAlternativ,
  mapVurderingsAlternativTilUttakVurdering,
} from './vurderingsAlternativer';
import { VurderingsAlternativ, VurderingsBehovPeriode } from '../../types';

export type FormValues = {
  perioder: VurderingsBehovPeriode[];
};

export const fraFormValues = (values: FormValues): { perioder: DokumentasjonVurderingBehov[] } => ({
  perioder: values.perioder.map(periode => ({
    ...periode,
    vurdering: periode.vurdering ? mapVurderingsAlternativTilUttakVurdering(periode.vurdering) : undefined,
    morsStillingsprosent:
      periode.årsak === UttakÅrsak.AKTIVITETSKRAV_ARBEID && periode.vurdering === VurderingsAlternativ.GODKJENT_UNDER75
        ? periode.morsStillingsprosent
        : undefined,
  })),
});

export const tilFormValues = (value: DokumentasjonVurderingBehov): FormValues => ({
  perioder: [
    {
      ...value,
      vurdering: value.vurdering
        ? mapUttakVurderingTilVurderingsAlternativ(value.vurdering, value.årsak, value.morsStillingsprosent)
        : undefined,
      morsStillingsprosent: value.årsak === UttakÅrsak.AKTIVITETSKRAV_ARBEID ? value.morsStillingsprosent : undefined,
    },
  ],
});
