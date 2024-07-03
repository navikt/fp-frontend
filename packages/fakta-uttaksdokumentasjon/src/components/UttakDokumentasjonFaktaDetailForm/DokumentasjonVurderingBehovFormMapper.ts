import { DokumentasjonVurderingBehov, UttakType, UttakVurdering, UttakÅrsak } from '@navikt/fp-types';
import FormValues, { VurderingsAlternativ } from '../../../types/FormValues';

export function erUttaksperiodeMedAktivitetskravArbeid(type: UttakType, årsak: UttakÅrsak) {
  return årsak === UttakÅrsak.AKTIVITETSKRAV_ARBEID && type === UttakType.UTTAK;
}

function mapVurderingsAlternativTilUttakVurdering(vurdering: VurderingsAlternativ): UttakVurdering {
  switch (vurdering) {
    case VurderingsAlternativ.GODKJENT:
    case VurderingsAlternativ.GODKJENT_OVER75:
    case VurderingsAlternativ.GODKJENT_UNDER75:
      return UttakVurdering.GODKJENT;
    case VurderingsAlternativ.IKKE_GODKJENT:
      return UttakVurdering.IKKE_GODKJENT;
    case VurderingsAlternativ.IKKE_DOKUMENTERT:
      return UttakVurdering.IKKE_DOKUMENTERT;
  }
}

function mapUttakVurderingTilVurderingsAlternativ(
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov,
): VurderingsAlternativ {
  const vurdering = dokumentasjonVurderingBehov.vurdering!;
  switch (vurdering) {
    case UttakVurdering.GODKJENT: {
      if (erUttaksperiodeMedAktivitetskravArbeid(dokumentasjonVurderingBehov.type, dokumentasjonVurderingBehov.årsak)) {
        return dokumentasjonVurderingBehov.morsStillingsprosent
          ? VurderingsAlternativ.GODKJENT_UNDER75
          : VurderingsAlternativ.GODKJENT_OVER75;
      }
      return VurderingsAlternativ.GODKJENT;
    }
    case UttakVurdering.IKKE_GODKJENT:
      return VurderingsAlternativ.IKKE_GODKJENT;
    case UttakVurdering.IKKE_DOKUMENTERT:
      return VurderingsAlternativ.IKKE_DOKUMENTERT;
  }
}

export const fraFormValues = (values: FormValues): { perioder: DokumentasjonVurderingBehov[] } => ({
  perioder: values.perioder.map(periode => ({
    ...periode,
    vurdering: periode.vurdering ? mapVurderingsAlternativTilUttakVurdering(periode.vurdering) : undefined,
    morsStillingsprosent:
      erUttaksperiodeMedAktivitetskravArbeid(periode.type, periode.årsak) &&
      periode.vurdering === VurderingsAlternativ.GODKJENT_UNDER75
        ? periode.morsStillingsprosent
        : undefined,
  })),
});

export const tilFormValues = (value: DokumentasjonVurderingBehov): FormValues => ({
  perioder: [
    {
      ...value,
      vurdering: value.vurdering ? mapUttakVurderingTilVurderingsAlternativ(value) : undefined,
      morsStillingsprosent: erUttaksperiodeMedAktivitetskravArbeid(value.type, value.årsak)
        ? value.morsStillingsprosent
        : undefined,
    },
  ],
});
