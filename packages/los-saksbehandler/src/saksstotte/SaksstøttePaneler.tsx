import React from 'react';

import { VStack } from '@navikt/ds-react';

import { SaksbehandlerNokkeltallIndex } from './nokkeltall/SaksbehandlerNokkeltallIndex';
import { SistBehandledeSaker } from './sistBehandlede/SistBehandledeSaker';

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
