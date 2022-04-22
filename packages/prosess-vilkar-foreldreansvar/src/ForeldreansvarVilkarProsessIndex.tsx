import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

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
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some((a) => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default ForeldreansvarVilkarProsessIndex;
