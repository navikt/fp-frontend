import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps, Soknad } from '@fpsak-frontend/types';

import TilleggsopplysningerInfoPanel from './components/TilleggsopplysningerInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  soknad: Soknad;
}

const TilleggsopplysningerFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  soknad,
  aksjonspunkter,
  harApneAksjonspunkter,
  submitCallback,
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <TilleggsopplysningerInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      tilleggsopplysninger={soknad.tilleggsopplysninger}
      aksjonspunkter={aksjonspunkter}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
    />
  </RawIntlProvider>
);

export default TilleggsopplysningerFaktaIndex;
