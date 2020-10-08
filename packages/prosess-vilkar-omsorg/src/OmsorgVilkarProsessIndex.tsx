import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';

import ErOmsorgVilkaarOppfyltForm from './components/ErOmsorgVilkaarOppfyltForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

const OmsorgVilkarProsessIndex: FunctionComponent<StandardProsessFormProps> = ({
  behandling,
  aksjonspunkter,
  status,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <ErOmsorgVilkaarOppfyltForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingsresultat={behandling.behandlingsresultat}
      aksjonspunkter={aksjonspunkter}
      status={status}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default OmsorgVilkarProsessIndex;
