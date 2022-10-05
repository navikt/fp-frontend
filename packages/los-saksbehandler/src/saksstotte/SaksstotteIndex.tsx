import React, { FunctionComponent } from 'react';

import SaksstottePaneler from './components/SaksstottePaneler';

interface OwnProps {
  valgtSakslisteId?: number;
}

/**
 * SaksstotteIndex
 */
const SaksstotteIndex: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
}) => (
  <SaksstottePaneler valgtSakslisteId={valgtSakslisteId} />
);

export default SaksstotteIndex;
