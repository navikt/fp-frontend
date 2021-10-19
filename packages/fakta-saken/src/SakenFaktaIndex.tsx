import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import SakenFaktaPanel from './components/SakenFaktaPanel';
import messages from '../i18n/nb_NO.json';

interface OwnProps {
  utlandDokStatus?: {
    dokStatus: string;
  };
}

const intl = createIntl(messages);

const SakenFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  aksjonspunkter,
  utlandDokStatus,
  submitCallback,
  submittable,
  harApneAksjonspunkter,
  readOnly,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <SakenFaktaPanel
      aksjonspunkter={aksjonspunkter}
      dokStatus={utlandDokStatus ? utlandDokStatus.dokStatus : undefined}
      harApneAksjonspunkter={harApneAksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      submittable={submittable}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default SakenFaktaIndex;
