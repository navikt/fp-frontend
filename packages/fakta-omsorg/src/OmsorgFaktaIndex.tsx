import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Behandling, KodeverkMedNavn, Personoversikt, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { StandardFaktaProps } from '@fpsak-frontend/fakta-felles';

import OmsorgInfoPanel from './components/OmsorgInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  ytelsefordeling: Ytelsefordeling;
  soknad: Soknad;
  personoversikt: Personoversikt;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const OmsorgFaktaIndex: FunctionComponent<OwnProps & StandardFaktaProps> = ({
  behandling,
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
}) => (
  <RawIntlProvider value={intl}>
    <OmsorgInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
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
