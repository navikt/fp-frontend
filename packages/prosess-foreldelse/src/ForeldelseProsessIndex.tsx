import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';
import { FeilutbetalingPerioderWrapper } from '@fpsak-frontend/types';

import ForeldelseForm from './components/ForeldelseForm';

import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  navBrukerKjonn: string;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  beregnBelop: (data: any) => Promise<any>;
}

const ForeldelseProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
  behandling,
  perioderForeldelse,
  navBrukerKjonn,
  alleMerknaderFraBeslutter,
  beregnBelop,
  alleKodeverk,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  aksjonspunkter,
}) => (
  <RawIntlProvider value={intl}>
    <ForeldelseForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      perioderForeldelse={perioderForeldelse}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      apCodes={aksjonspunkter.map((a) => a.definisjon.kode)}
      readOnlySubmitButton={readOnlySubmitButton}
      navBrukerKjonn={navBrukerKjonn}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
      beregnBelop={beregnBelop}
    />
  </RawIntlProvider>
);

export default ForeldelseProsessIndex;
