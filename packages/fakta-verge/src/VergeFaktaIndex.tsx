import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Aksjonspunkt, Behandling, KodeverkMedNavn } from '@fpsak-frontend/types';

import RegistrereVergeInfoPanel from './components/RegistrereVergeInfoPanel';
import Verge from './types/VergeTsType';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

type OwnProps = {
  behandling: Behandling;
  verge?: Verge;
  aksjonspunkter: Aksjonspunkt[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  submitCallback: (...args: any[]) => any;
  readOnly: boolean;
  harApneAksjonspunkter: boolean;
  submittable: boolean;
};

const VergeFaktaIndex: FunctionComponent<OwnProps> = ({
  behandling,
  verge,
  aksjonspunkter,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
  submittable,
}) => (
  <RawIntlProvider value={intl}>
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
  </RawIntlProvider>
);

VergeFaktaIndex.defaultProps = {
  verge: {},
};

export default VergeFaktaIndex;
