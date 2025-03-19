import { assertUnreachable } from '@navikt/ft-utils';

import { type DokumentasjonVurderingBehov, UttakÅrsak, UttakType, UttakVurdering } from '@navikt/fp-types';

import { type FormValues, VurderingsAlternativ } from '../../types/FormValues';

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
    default:
      return assertUnreachable(vurdering);
  }
}

function mapUttakVurderingTilVurderingsAlternativ(
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov,
): VurderingsAlternativ {
  const vurdering = dokumentasjonVurderingBehov.vurdering!;
  switch (vurdering) {
    case UttakVurdering.GODKJENT_AUTOMATISK:
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
    default:
      return assertUnreachable(vurdering);
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
      vurdering:
        value.vurdering && value.vurdering !== UttakVurdering.GODKJENT_AUTOMATISK
          ? mapUttakVurderingTilVurderingsAlternativ(value)
          : undefined,
      morsStillingsprosent: erUttaksperiodeMedAktivitetskravArbeid(value.type, value.årsak)
        ? value.morsStillingsprosent
        : undefined,
    },
  ],
});
