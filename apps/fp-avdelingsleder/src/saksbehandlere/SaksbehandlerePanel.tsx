import { VStack } from '@navikt/ds-react';

import type { SaksbehandlerProfil } from '@navikt/fp-types';

import { LeggTilSaksbehandlerForm } from './LeggTilSaksbehandlerForm';
import { SaksbehandlereTabell } from './SaksbehandlereTabell';

interface Props {
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
  valgtAvdelingEnhet: string;
}

export const SaksbehandlerePanel = ({ avdelingensSaksbehandlere, valgtAvdelingEnhet }: Props) => (
  <VStack gap="space-16">
    <SaksbehandlereTabell saksbehandlere={avdelingensSaksbehandlere} valgtAvdelingEnhet={valgtAvdelingEnhet} />
    <LeggTilSaksbehandlerForm
      valgtAvdelingEnhet={valgtAvdelingEnhet}
      avdelingensSaksbehandlere={avdelingensSaksbehandlere}
    />
  </VStack>
);
