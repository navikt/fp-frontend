import React, { useState, FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import SaksbehandlerDashboard from './components/SaksbehandlerDashboard';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  setLosErIkkeTilgjengelig: () => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  kanSaksbehandle: boolean;
}

/**
 * SaksbehandlerIndex
 */
const SaksbehandlerIndex: FunctionComponent<OwnProps> = ({
  setLosErIkkeTilgjengelig,
  åpneFagsak,
  kanSaksbehandle,
}) => {
  const [valgtSakslisteId, setValgtSakslisteId] = useState<number>();
  return (
    <RawIntlProvider value={intl}>
      <SaksbehandlerDashboard
        valgtSakslisteId={valgtSakslisteId}
        setValgtSakslisteId={setValgtSakslisteId}
        setLosErIkkeTilgjengelig={setLosErIkkeTilgjengelig}
        åpneFagsak={åpneFagsak}
        kanSaksbehandle={kanSaksbehandle}
      />
    </RawIntlProvider>
  );
};

export default SaksbehandlerIndex;
