import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  StandardFaktaPanelProps, Personoversikt, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';

import OmsorgInfoPanel from './components/OmsorgInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  soknad: Soknad;
  personoversikt: Personoversikt;
}

const OmsorgFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
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
