import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import TerminFodselDatoPanel from './components/TerminFodselDatoPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  erForeldrepenger?: boolean;
}

const FodselPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  erForeldrepenger,
}) => (
  <RawIntlProvider value={intl}>
    <TerminFodselDatoPanel
      readOnly={readOnly}
      erForeldrepenger={erForeldrepenger}
    />
  </RawIntlProvider>
);

export default FodselPapirsoknadIndex;
