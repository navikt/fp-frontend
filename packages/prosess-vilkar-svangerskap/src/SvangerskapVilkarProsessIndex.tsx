import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps } from '@fpsak-frontend/types';

import SvangerskapVilkarForm from './components/SvangerskapVilkarForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

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
}) => (
  <RawIntlProvider value={intl}>
    <SvangerskapVilkarForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingsresultat={behandling.behandlingsresultat}
      aksjonspunkter={aksjonspunkter}
      status={status}
      vilkar={vilkar}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      isApOpen={isAksjonspunktOpen}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default SvangerskapVilkarProsessIndex;
