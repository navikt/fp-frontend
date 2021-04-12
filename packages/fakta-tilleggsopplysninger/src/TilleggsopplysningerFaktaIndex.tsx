import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps, Soknad } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import TilleggsopplysningerInfoPanel from './components/TilleggsopplysningerInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  soknad: Soknad;
}

const TilleggsopplysningerFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  soknad,
  harApneAksjonspunkter,
  submitCallback,
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <TilleggsopplysningerInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      tilleggsopplysninger={soknad.tilleggsopplysninger}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
    />
  </RawIntlProvider>
);

export default TilleggsopplysningerFaktaIndex;
