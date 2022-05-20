import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AlleKodeverk } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import EgenVirksomhetPanel from './components/EgenVirksomhetPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

const VirksomhetPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <EgenVirksomhetPanel
      readOnly={readOnly}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default VirksomhetPapirsoknadIndex;
