import React, { FunctionComponent, useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';
import dayjs from 'dayjs';

import { StandardFaktaPanelProps, DokumentasjonVurderingBehov } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import UttakDokumentasjonFaktaForm from './components/UttakDokumentasjonFaktaForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  harApneAksjonspunkter: boolean;
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
}

const UttakDokumentasjonFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  harApneAksjonspunkter,
  dokumentasjonVurderingBehov,
  submitCallback,
  readOnly,
  submittable,
  aksjonspunkter,
  formData,
  setFormData,
}) => {
  const sorterteBehov = useMemo(() => [...dokumentasjonVurderingBehov]
    .sort((krav1, krav2) => dayjs(krav1.fom).diff(dayjs(krav2.fom))), [dokumentasjonVurderingBehov]);
  return (
    <RawIntlProvider value={intl}>
      <UttakDokumentasjonFaktaForm
        harApneAksjonspunkter={harApneAksjonspunkter}
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

export default UttakDokumentasjonFaktaIndex;
