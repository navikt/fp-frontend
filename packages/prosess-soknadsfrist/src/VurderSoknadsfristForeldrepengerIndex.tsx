import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Soknad, UttakPeriodeGrense, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import VurderSoknadsfristForeldrepengerForm from './components/VurderSoknadsfristForeldrepengerForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  uttakPeriodeGrense?: UttakPeriodeGrense;
  soknad: Soknad;
}

const VurderSoknadsfristForeldrepengerIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  uttakPeriodeGrense,
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
    <ReduxWrapper formName="VurderSoknadsfristForeldrepengerIndex" formData={formData} setFormData={setFormData}>
      <VurderSoknadsfristForeldrepengerForm
        uttakPeriodeGrense={uttakPeriodeGrense}
        mottattDato={soknad.mottattDato}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        isApOpen={isAksjonspunktOpen}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default VurderSoknadsfristForeldrepengerIndex;
