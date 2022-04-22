import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  StandardFaktaPanelProps, Personoversikt, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import OmsorgInfoPanel from './components/OmsorgInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  soknad: Soknad;
  personoversikt: Personoversikt;
}

const OmsorgFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  ytelsefordeling,
  soknad,
  personoversikt,
  aksjonspunkter,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
  submittable,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="OmsorgFaktaIndex" formData={formData} setFormData={setFormData}>
      { /* @ts-ignore Fiks cannot be used as a JSX component */ }
      <OmsorgInfoPanel
        aksjonspunkter={aksjonspunkter}
        ytelsefordeling={ytelsefordeling}
        personoversikt={personoversikt}
        soknad={soknad}
        alleKodeverk={alleKodeverk}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        submitCallback={submitCallback}
        readOnly={readOnly}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
        submittable={submittable}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default OmsorgFaktaIndex;
