import React, { useState } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import SaksbehandlerDashboard from './components/SaksbehandlerDashboard';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

/**
 * SaksbehandlerIndex
 */
const SaksbehandlerIndex = () => {
  const [valgtSakslisteId, setValgtSakslisteId] = useState<number>();
  return (
    <RawIntlProvider value={intl}>
      <SaksbehandlerDashboard valgtSakslisteId={valgtSakslisteId} setValgtSakslisteId={setValgtSakslisteId} />
    </RawIntlProvider>
  );
};

export default SaksbehandlerIndex;
