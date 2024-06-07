import { UttakVurdering, UttakÅrsak } from '@navikt/fp-types';
import { IntlShape } from 'react-intl';
import assertUnreachable from '../../utils/switchCaseUtils';
import { VurderingsAlternativ } from '../../types';

type RadioProps = {
  value: string;
  label: string;
};

export const lagVurderingsAlternativer = (intl: IntlShape, årsak: UttakÅrsak): RadioProps[] => {
  const vurderingsalternativer: RadioProps[] = [];
  if (årsak === UttakÅrsak.AKTIVITETSKRAV_ARBEID) {
    vurderingsalternativer.push({
      value: VurderingsAlternativ.GODKJENT_OVER75,
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.GodkjentOver75' }),
    });
    vurderingsalternativer.push({
      value: VurderingsAlternativ.GODKJENT_UNDER75,
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.GodkjentUnder75' }),
    });
  } else {
    vurderingsalternativer.push({
      value: VurderingsAlternativ.GODKJENT,
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.Godkjent' }),
    });
  }
  vurderingsalternativer.push({
    value: VurderingsAlternativ.IKKE_GODKJENT,
    label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.IkkeGodkjent' }),
  });

  if (årsak.includes('AKTIVITETSKRAV')) {
    vurderingsalternativer.push({
      value: UttakVurdering.IKKE_DOKUMENTERT.toString(),
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.IkkeDokumentert' }),
    });
  }

  return vurderingsalternativer.sort((k1, k2) => k1.label.localeCompare(k2.label));
};

export function mapVurderingsAlternativTilUttakVurdering(vurdering: VurderingsAlternativ): UttakVurdering {
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

export function mapUttakVurderingTilVurderingsAlternativ(
  vurdering: UttakVurdering,
  årsak: UttakÅrsak,
  morsStillingsprosent?: number,
): VurderingsAlternativ {
  switch (vurdering) {
    case UttakVurdering.GODKJENT: {
      if (årsak === UttakÅrsak.AKTIVITETSKRAV_ARBEID) {
        return !morsStillingsprosent || morsStillingsprosent >= 75
          ? VurderingsAlternativ.GODKJENT_OVER75
          : VurderingsAlternativ.GODKJENT_UNDER75;
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
