import { VStack } from '@navikt/ds-react';

import { SaksbehandlerNokkeltallPanel } from './nokkeltall/SaksbehandlerNokkeltallPanel';
import { SistBehandledeSaker } from './sistBehandlede/SistBehandledeSaker';

interface Props {
  valgtSakslisteId?: number;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}

export const SaksstøttePaneler = ({ valgtSakslisteId, åpneFagsak }: Props) => (
  <VStack gap="6">
    <SistBehandledeSaker åpneFagsak={åpneFagsak} />
    {!!valgtSakslisteId && <SaksbehandlerNokkeltallPanel valgtSakslisteId={valgtSakslisteId} />}
  </VStack>
);
