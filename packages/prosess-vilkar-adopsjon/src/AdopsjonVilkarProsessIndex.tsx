import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import AdopsjonVilkarForm from './components/AdopsjonVilkarForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const AdopsjonVilkarProsessIndex: FunctionComponent<StandardProsessPanelProps> = ({
  behandling,
  aksjonspunkter,
  status,
  vilkar,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  isAksjonspunktOpen,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <AdopsjonVilkarForm
      behandlingsresultat={behandling.behandlingsresultat}
      aksjonspunkter={aksjonspunkter}
      status={status}
      vilkar={vilkar}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      isApOpen={isAksjonspunktOpen}
      alleKodeverk={alleKodeverk}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some((a) => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default AdopsjonVilkarProsessIndex;
