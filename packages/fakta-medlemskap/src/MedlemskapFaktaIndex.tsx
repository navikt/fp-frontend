import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps, Soknad, Medlemskap } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import MedlemskapInfoPanel from './components/MedlemskapInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  medlemskap: Medlemskap;
  soknad: Soknad;
}

const MedlemskapFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  soknad,
  medlemskap,
  aksjonspunkter,
  submittable,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="MedlemskapFaktaIndex" formData={formData} setFormData={setFormData}>
      <MedlemskapInfoPanel
        behandlingType={behandling.type}
        soknad={soknad}
        medlemskap={medlemskap}
        aksjonspunkter={aksjonspunkter}
        submittable={submittable}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={alleKodeverk}
        submitCallback={submitCallback}
        readOnly={readOnly}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default MedlemskapFaktaIndex;
