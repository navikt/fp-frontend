import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Soknad, StandardProsessPanelProps } from '@navikt/fp-types';

import VurderSoknadsfristForeldrepengerForm from './components/VurderSoknadsfristForeldrepengerForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  soknad: Soknad;
}

const VurderSoknadsfristForeldrepengerIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  soknad,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  isAksjonspunktOpen,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <VurderSoknadsfristForeldrepengerForm
      mottattDato={soknad.mottattDato}
      søknadsfrist={soknad.søknadsfrist}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      isApOpen={isAksjonspunktOpen}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default VurderSoknadsfristForeldrepengerIndex;
