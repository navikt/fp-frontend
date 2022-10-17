import React, { FunctionComponent } from 'react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import SistBehandledeSaker from './SistBehandledeSaker';
import SaksbehandlerNokkeltallIndex from '../nokkeltall/SaksbehandlerNokkeltallIndex';

interface OwnProps {
  valgtSakslisteId?: number;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}

/**
 * SaksstottePaneler
 */
const SaksstottePaneler: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  åpneFagsak,
}) => (
  <>
    <SistBehandledeSaker åpneFagsak={åpneFagsak} />
    <VerticalSpacer twentyPx />
    {valgtSakslisteId && (
      <SaksbehandlerNokkeltallIndex valgtSakslisteId={valgtSakslisteId} />
    )}
  </>
);

export default SaksstottePaneler;
