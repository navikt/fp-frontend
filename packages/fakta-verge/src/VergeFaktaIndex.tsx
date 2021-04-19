import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps, Verge } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import RegistrereVergeInfoPanel from './components/RegistrereVergeInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  verge?: Verge;
};

const VergeFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  verge,
  aksjonspunkter,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
  submittable,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="VergeFaktaIndex" formData={formData} setFormData={setFormData}>
      <RegistrereVergeInfoPanel
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        verge={verge}
        aksjonspunkter={aksjonspunkter}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
        alleKodeverk={alleKodeverk}
        submitCallback={submitCallback}
        readOnly={readOnly}
        submittable={submittable}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

VergeFaktaIndex.defaultProps = {
  verge: {},
};

export default VergeFaktaIndex;
