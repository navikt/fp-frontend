import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps } from '@fpsak-frontend/types';

import ErForeldreansvarVilkaarOppfyltForm from './components/ErForeldreansvarVilkaarOppfyltForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

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
}) => (
  <RawIntlProvider value={intl}>
    <ErForeldreansvarVilkaarOppfyltForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingsresultat={behandling.behandlingsresultat}
      isForeldreansvar2Ledd={isForeldreansvar2Ledd}
      isEngangsstonad={isEngangsstonad}
      aksjonspunkter={aksjonspunkter}
      status={status}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default ForeldreansvarVilkarProsessIndex;
