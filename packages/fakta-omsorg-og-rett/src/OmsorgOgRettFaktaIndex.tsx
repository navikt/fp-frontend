import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  StandardFaktaPanelProps, Personoversikt, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import OmsorgOgRettFaktaForm from './components/OmsorgOgRettFaktaForm';
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
    <OmsorgOgRettFaktaForm
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
  </RawIntlProvider>
);

export default OmsorgFaktaIndex;
