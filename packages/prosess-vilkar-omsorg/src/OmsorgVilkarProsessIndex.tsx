import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import ErOmsorgVilkaarOppfyltForm from './components/ErOmsorgVilkaarOppfyltForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const OmsorgVilkarProsessIndex: FunctionComponent<StandardProsessPanelProps> = ({
  behandling,
  aksjonspunkter,
  status,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ErOmsorgVilkaarOppfyltForm
      behandlingsresultat={behandling.behandlingsresultat}
      aksjonspunkter={aksjonspunkter}
      status={status}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      alleKodeverk={alleKodeverk}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some((a) => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default OmsorgVilkarProsessIndex;
