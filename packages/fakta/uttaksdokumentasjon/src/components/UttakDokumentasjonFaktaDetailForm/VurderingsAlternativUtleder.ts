import { type IntlShape } from 'react-intl';

import { UttakÅrsak, UttakType } from '@navikt/fp-types';

import { VurderingsAlternativ } from '../../types/FormValues';
import { erUttaksperiodeMedAktivitetskravArbeid } from './DokumentasjonVurderingBehovFormMapper';

type RadioProps = {
  value: string;
  label: string;
};

export const lagVurderingsAlternativer = (intl: IntlShape, type: UttakType, årsak: UttakÅrsak): RadioProps[] => {
  const vurderingsalternativer: RadioProps[] = [];
  if (erUttaksperiodeMedAktivitetskravArbeid(type, årsak)) {
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
      value: VurderingsAlternativ.IKKE_DOKUMENTERT,
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.IkkeDokumentert' }),
    });
  }

  return vurderingsalternativer.sort((k1, k2) => k1.label.localeCompare(k2.label));
};
