import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysningerPerId, Soknad, StandardProsessPanelProps } from '@navikt/fp-types';

import SokersOpplysningspliktForm from './components/SokersOpplysningspliktForm';
import messages from '../i18n/nb_NO.json';

import '@navikt/fp-prosess-felles/dist/style.css';

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
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <SokersOpplysningspliktForm
      behandlingsresultat={behandling.behandlingsresultat}
      soknad={soknad}
      aksjonspunkter={aksjonspunkter}
      status={status}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      alleKodeverk={alleKodeverk}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some((a) => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default SokersOpplysningspliktVilkarProsessIndex;
