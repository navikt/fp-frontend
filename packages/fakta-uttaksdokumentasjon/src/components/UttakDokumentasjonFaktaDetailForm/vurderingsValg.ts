import { UttakVurdering, UttakÅrsak } from '@navikt/fp-types';
import { IntlShape } from 'react-intl';

type RadioProps = {
  value: string;
  label: string;
};

const lagVurderingsAlternativer = (intl: IntlShape, årsak: UttakÅrsak): RadioProps[] => {
  const vurderingsalternativer: RadioProps[] = [
    {
      value: UttakVurdering.GODKJENT,
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.Godkjent' }),
    },
    {
      value: UttakVurdering.IKKE_GODKJENT,
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.IkkeGodkjent' }),
    },
  ];

  if (årsak.includes('AKTIVITETSKRAV')) {
    vurderingsalternativer.push({
      value: UttakVurdering.IKKE_DOKUMENTERT.toString(),
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.IkkeDokumentert' }),
    });
  }

  return vurderingsalternativer;
};

export default lagVurderingsAlternativer;
