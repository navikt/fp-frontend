import { UttakType, UttakVurdering, UttakÅrsak } from '@navikt/fp-types';
import { IntlShape } from 'react-intl';
import { erUttaksperiodeMedAktivitetskravArbeid } from './DokumentasjonVurderingBehovFormMapper';
import { VurderingsAlternativ } from '../../../types/FormValues';

type RadioProps = {
  value: string;
  label: string;
};

const lagVurderingsAlternativer = (intl: IntlShape, type: UttakType, årsak: UttakÅrsak): RadioProps[] => {
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
      value: UttakVurdering.IKKE_DOKUMENTERT.toString(),
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.IkkeDokumentert' }),
    });
  }

  return vurderingsalternativer.sort((k1, k2) => k1.label.localeCompare(k2.label));
};

export default lagVurderingsAlternativer;
