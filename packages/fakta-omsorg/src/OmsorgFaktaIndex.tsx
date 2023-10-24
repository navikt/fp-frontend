import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { StandardFaktaPanelProps, Personoversikt, Ytelsefordeling } from '@navikt/fp-types';

import OmsorgInfoPanel from './components/OmsorgInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  personoversikt: Personoversikt;
}

const OmsorgFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  ytelsefordeling,
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
    <OmsorgInfoPanel
      aksjonspunkter={aksjonspunkter}
      ytelsefordeling={ytelsefordeling}
      personoversikt={personoversikt}
      alleKodeverk={alleKodeverk}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default OmsorgFaktaIndex;
