import React, { useState, FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import SaksbehandlerDashboard from './components/SaksbehandlerDashboard';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  setLosErIkkeTilgjengelig: () => void;
  åpneFagsak: (saksnummer: number, behandlingUuid?: string) => void;
}

/**
 * SaksbehandlerIndex
 */
const SaksbehandlerIndex: FunctionComponent<OwnProps> = ({
  setLosErIkkeTilgjengelig,
  åpneFagsak,
}) => {
  const [valgtSakslisteId, setValgtSakslisteId] = useState<number>();
  return (
    <RawIntlProvider value={intl}>
      <SaksbehandlerDashboard
        valgtSakslisteId={valgtSakslisteId}
        setValgtSakslisteId={setValgtSakslisteId}
        setLosErIkkeTilgjengelig={setLosErIkkeTilgjengelig}
        åpneFagsak={åpneFagsak}
      />
    </RawIntlProvider>
  );
};

export default SaksbehandlerIndex;
