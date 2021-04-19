import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import SakenFaktaPanel from './components/SakenFaktaPanel';
import messages from '../i18n/nb_NO.json';

interface OwnProps {
  utlandDokStatus?: {
    dokStatus: string;
  };
}

const intl = createIntl(messages);

const SakenFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  aksjonspunkter,
  utlandDokStatus,
  submitCallback,
  submittable,
  harApneAksjonspunkter,
  readOnly,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="SakenFaktaIndex" formData={formData} setFormData={setFormData}>
      <SakenFaktaPanel
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        aksjonspunkter={aksjonspunkter}
        dokStatus={utlandDokStatus ? utlandDokStatus.dokStatus : undefined}
        harApneAksjonspunkter={harApneAksjonspunkter}
        submitCallback={submitCallback}
        readOnly={readOnly}
        submittable={submittable}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default SakenFaktaIndex;
