import React, { FunctionComponent } from 'react';

import SaksstottePaneler from './components/SaksstottePaneler';

interface OwnProps {
  valgtSakslisteId?: number;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}

/**
 * SaksstotteIndex
 */
const SaksstotteIndex: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  åpneFagsak,
}) => (
  <SaksstottePaneler valgtSakslisteId={valgtSakslisteId} åpneFagsak={åpneFagsak} />
);

export default SaksstotteIndex;
