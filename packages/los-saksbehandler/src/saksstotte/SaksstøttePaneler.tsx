import React from 'react';

import { SistBehandledeSaker } from './sistBehandlede/SistBehandledeSaker';
import { SaksbehandlerNokkeltallIndex } from './nokkeltall/SaksbehandlerNokkeltallIndex';
import { VStack } from '@navikt/ds-react';

interface Props {
  valgtSakslisteId?: number;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}

export const SaksstøttePaneler = ({ valgtSakslisteId, åpneFagsak }: Props) => (
  <VStack gap="6">
    <SistBehandledeSaker åpneFagsak={åpneFagsak} />
    {valgtSakslisteId && <SaksbehandlerNokkeltallIndex valgtSakslisteId={valgtSakslisteId} />}
  </VStack>
);
