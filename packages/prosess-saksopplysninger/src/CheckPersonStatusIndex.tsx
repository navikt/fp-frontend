import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';
import { Medlemskap, Personopplysninger } from '@fpsak-frontend/types';

import CheckPersonStatusForm from './components/CheckPersonStatusForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  medlemskap: Medlemskap;
  personopplysninger: Personopplysninger;
}

const CheckPersonStatusIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
  behandling,
  medlemskap,
  personopplysninger,
  aksjonspunkter,
  alleKodeverk,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
}) => (
  <RawIntlProvider value={intl}>
    <CheckPersonStatusForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingHenlagt={behandling.behandlingHenlagt}
      gjeldeneFom={medlemskap.fom}
      personopplysninger={personopplysninger}
      alleKodeverk={alleKodeverk}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
    />
  </RawIntlProvider>
);

export default CheckPersonStatusIndex;
