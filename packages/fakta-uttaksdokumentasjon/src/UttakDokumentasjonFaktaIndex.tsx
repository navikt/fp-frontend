import { useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { DokumentasjonVurderingBehov, StandardFaktaPanelProps } from '@navikt/fp-types';

import UttakDokumentasjonFaktaForm from './components/UttakDokumentasjonFaktaForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
}

export const UttakDokumentasjonFaktaIndex = ({
  dokumentasjonVurderingBehov,
  submitCallback,
  readOnly,
  submittable,
  aksjonspunkter,
  formData,
  setFormData,
}: Props & StandardFaktaPanelProps) => {
  const sorterteBehov = useMemo(
    () => [...dokumentasjonVurderingBehov].sort((krav1, krav2) => dayjs(krav1.fom).diff(dayjs(krav2.fom))),
    [dokumentasjonVurderingBehov],
  );
  return (
    <RawIntlProvider value={intl}>
      <UttakDokumentasjonFaktaForm
        aksjonspunkter={aksjonspunkter}
        dokumentasjonVurderingBehov={sorterteBehov}
        submitCallback={submitCallback}
        readOnly={readOnly || aksjonspunkter.length === 0}
        submittable={submittable}
        formData={formData}
        setFormData={setFormData}
      />
    </RawIntlProvider>
  );
};
