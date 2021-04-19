import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';
import { ArbeidsgiverOpplysningerPerId, Soknad, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { ReduxWrapper } from '@fpsak-frontend/form';

import SokersOpplysningspliktForm from './components/SokersOpplysningspliktForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  soknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const SokersOpplysningspliktVilkarProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  soknad,
  aksjonspunkter,
  status,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="SokersOpplysningspliktVilkarProsessIndex" formData={formData} setFormData={setFormData}>
      <SokersOpplysningspliktForm
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        behandlingsresultat={behandling.behandlingsresultat}
        soknad={soknad}
        aksjonspunkter={aksjonspunkter}
        status={status}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        alleKodeverk={alleKodeverk}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default SokersOpplysningspliktVilkarProsessIndex;
