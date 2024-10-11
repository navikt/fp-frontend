import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps, Personoversikt, Ytelsefordeling } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import { OmsorgOgRettInfoPanel } from './components/OmsorgOgRettInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
}

const OmsorgOgRettFaktaIndex = ({
  personoversikt,
  ytelsefordeling,
  aksjonspunkter,
  alleKodeverk,
  readOnly,
  submitCallback,
  formData,
  setFormData,
  alleMerknaderFraBeslutter,
}: Props & StandardFaktaPanelProps) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgRettInfoPanel
      aksjonspunkter={aksjonspunkter}
      personoversikt={personoversikt}
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
