import { VStack } from '@navikt/ds-react';

import { SistBehandledeSaker } from './sistBehandlede/SistBehandledeSaker';

interface Props {
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}

export const SaksstøttePaneler = ({ åpneFagsak }: Props) => (
  <VStack gap="space-24">
    <SistBehandledeSaker åpneFagsak={åpneFagsak} />
  </VStack>
);
