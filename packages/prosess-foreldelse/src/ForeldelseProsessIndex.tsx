import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { FeilutbetalingPerioderWrapper, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import ForeldelseForm from './components/ForeldelseForm';
import { PeriodeMedBelop } from './components/splittePerioder/PeriodeController';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

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
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="ForeldelseProsessIndex" formData={formData} setFormData={setFormData}>
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
    </ReduxWrapper>
  </RawIntlProvider>
);

export default ForeldelseProsessIndex;
