import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import SvangerskapVilkarForm from './components/SvangerskapVilkarForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const SvangerskapVilkarProsessIndex: FunctionComponent<StandardProsessPanelProps> = ({
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
    <ReduxWrapper formName="SvangerskapVilkarProsessIndex" formData={formData} setFormData={setFormData}>
      <SvangerskapVilkarForm
        behandlingsresultat={behandling.behandlingsresultat}
        aksjonspunkter={aksjonspunkter}
        status={status}
        vilkar={vilkar}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        isApOpen={isAksjonspunktOpen}
        alleKodeverk={alleKodeverk}
        erIkkeGodkjentAvBeslutter={aksjonspunkter.some((a) => alleMerknaderFraBeslutter[a.definisjon.kode]?.notAccepted)}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default SvangerskapVilkarProsessIndex;
