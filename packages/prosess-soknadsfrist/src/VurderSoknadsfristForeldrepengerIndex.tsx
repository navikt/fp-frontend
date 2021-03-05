import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Soknad, UttakPeriodeGrense, StandardProsessPanelProps } from '@fpsak-frontend/types';

import VurderSoknadsfristForeldrepengerForm from './components/VurderSoknadsfristForeldrepengerForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  uttakPeriodeGrense?: UttakPeriodeGrense;
  soknad: Soknad;
}

const VurderSoknadsfristForeldrepengerIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  uttakPeriodeGrense,
  soknad,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  isAksjonspunktOpen,
}) => (
  <RawIntlProvider value={intl}>
    <VurderSoknadsfristForeldrepengerForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      uttakPeriodeGrense={uttakPeriodeGrense}
      mottattDato={soknad.mottattDato}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      isApOpen={isAksjonspunktOpen}
    />
  </RawIntlProvider>
);

export default VurderSoknadsfristForeldrepengerIndex;
