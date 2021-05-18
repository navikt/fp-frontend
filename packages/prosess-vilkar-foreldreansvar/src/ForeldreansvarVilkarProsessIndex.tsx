import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import ErForeldreansvarVilkaarOppfyltForm from './components/ErForeldreansvarVilkaarOppfyltForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  isForeldreansvar2Ledd: boolean;
  isEngangsstonad: boolean;
}

const ForeldreansvarVilkarProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  aksjonspunkter,
  isEngangsstonad,
  isForeldreansvar2Ledd,
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
    <ReduxWrapper formName="ForeldreansvarVilkarProsessIndex" formData={formData} setFormData={setFormData}>
      <ErForeldreansvarVilkaarOppfyltForm
        behandlingsresultat={behandling.behandlingsresultat}
        isForeldreansvar2Ledd={isForeldreansvar2Ledd}
        isEngangsstonad={isEngangsstonad}
        aksjonspunkter={aksjonspunkter}
        status={status}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        alleKodeverk={alleKodeverk}
        erIkkeGodkjentAvBeslutter={aksjonspunkter.some((a) => alleMerknaderFraBeslutter[a.definisjon.kode]?.notAccepted)}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default ForeldreansvarVilkarProsessIndex;
