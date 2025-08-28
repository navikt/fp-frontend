import { assertUnreachable } from '@navikt/ft-utils';

import {
  type DokumentasjonVurderingBehov,
  type UttakÅrsak,
  type UttakType,
  type UttakVurdering,
} from '@navikt/fp-types';

import { type FormValues, VurderingsAlternativ } from '../../types/FormValues';

export function erUttaksperiodeMedAktivitetskravArbeid(type: UttakType, årsak: UttakÅrsak) {
  return årsak === 'AKTIVITETSKRAV_ARBEID' && type === 'UTTAK';
}

function mapVurderingsAlternativTilUttakVurdering(vurdering: VurderingsAlternativ): UttakVurdering {
  switch (vurdering) {
    case VurderingsAlternativ.GODKJENT:
    case VurderingsAlternativ.GODKJENT_OVER75:
    case VurderingsAlternativ.GODKJENT_UNDER75:
      return 'GODKJENT';
    case VurderingsAlternativ.IKKE_GODKJENT:
      return 'IKKE_GODKJENT';
    case VurderingsAlternativ.IKKE_DOKUMENTERT:
      return 'IKKE_DOKUMENTERT';
    default:
      return assertUnreachable(vurdering);
  }
}

function mapUttakVurderingTilVurderingsAlternativ(
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov,
): VurderingsAlternativ {
  const vurdering = dokumentasjonVurderingBehov.vurdering!;
  switch (vurdering) {
    case 'GODKJENT_AUTOMATISK':
    case 'GODKJENT': {
      if (erUttaksperiodeMedAktivitetskravArbeid(dokumentasjonVurderingBehov.type, dokumentasjonVurderingBehov.årsak)) {
        return dokumentasjonVurderingBehov.morsStillingsprosent
          ? VurderingsAlternativ.GODKJENT_UNDER75
          : VurderingsAlternativ.GODKJENT_OVER75;
      }
      return VurderingsAlternativ.GODKJENT;
    }
    case 'IKKE_GODKJENT':
      return VurderingsAlternativ.IKKE_GODKJENT;
    case 'IKKE_DOKUMENTERT':
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
        value.vurdering && value.vurdering !== 'GODKJENT_AUTOMATISK'
          ? mapUttakVurderingTilVurderingsAlternativ(value)
          : undefined,
      morsStillingsprosent: erUttaksperiodeMedAktivitetskravArbeid(value.type, value.årsak)
        ? value.morsStillingsprosent
        : undefined,
    },
  ],
});
