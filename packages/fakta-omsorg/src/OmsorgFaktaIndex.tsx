import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt, Behandling, KodeverkMedNavn, Personopplysninger, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';

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
  personopplysninger: Personopplysninger;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (...args: any[]) => any;
  harApneAksjonspunkter: boolean;
  submittable: boolean;
  readOnly: boolean;
}

const OmsorgFaktaIndex: FunctionComponent<OwnProps> = ({
  behandling,
  ytelsefordeling,
  soknad,
  personopplysninger,
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
      personopplysninger={personopplysninger}
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
