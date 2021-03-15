import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { FeilutbetalingPerioderWrapper, StandardProsessPanelProps } from '@fpsak-frontend/types';

import ForeldelseForm from './components/ForeldelseForm';
import { PeriodeMedBelop } from './components/splittePerioder/PeriodeController';

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
  beregnBelop: (data: { behandlingId: number; perioder: PeriodeMedBelop[]}) => Promise<any>;
}

const ForeldelseProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
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
