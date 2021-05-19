import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps, Opptjening } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import OpptjeningVilkarForm from './components/OpptjeningVilkarForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  opptjening: Opptjening;
  lovReferanse?: string;
}

const OpptjeningVilkarProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  opptjening,
  aksjonspunkter,
  status,
  lovReferanse,
  submitCallback,
  isReadOnly,
  isAksjonspunktOpen,
  readOnlySubmitButton,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="OpptjeningVilkarProsessIndex" formData={formData} setFormData={setFormData}>
      <OpptjeningVilkarForm
        behandlingsresultat={behandling.behandlingsresultat}
        fastsattOpptjening={opptjening.fastsattOpptjening}
        status={status}
        lovReferanse={lovReferanse}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        isAksjonspunktOpen={isAksjonspunktOpen}
        readOnlySubmitButton={readOnlySubmitButton}
        erIkkeGodkjentAvBeslutter={aksjonspunkter.some((a) => alleMerknaderFraBeslutter[a.definisjon.kode]?.notAccepted)}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default OpptjeningVilkarProsessIndex;
