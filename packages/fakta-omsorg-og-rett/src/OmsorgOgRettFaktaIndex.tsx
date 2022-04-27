import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  StandardFaktaPanelProps, Personoversikt, Ytelsefordeling, Soknad,
} from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import OmsorgOgRettFaktaForm from './components/OmsorgOgRettFaktaForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
  soknad: Soknad;
}

const OmsorgOgRettFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  personoversikt,
  ytelsefordeling,
  soknad,
  aksjonspunkter,
  alleKodeverk,
  readOnly,
  submitCallback,
  formData,
  setFormData,
  alleMerknaderFraBeslutter,
}) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgRettFaktaForm
      aksjonspunkter={aksjonspunkter}
      personoversikt={personoversikt}
      soknad={soknad}
      ytelsefordeling={ytelsefordeling}
      alleKodeverk={alleKodeverk}
      readOnly={readOnly}
      lagreCallback={submitCallback}
      formData={formData}
      setFormData={setFormData}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    />
  </RawIntlProvider>
);

export default OmsorgOgRettFaktaIndex;
