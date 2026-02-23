import { VStack } from '@navikt/ds-react';

import type { SaksbehandlerDto } from '@navikt/fp-types';

import { LeggTilSaksbehandlerForm } from './LeggTilSaksbehandlerForm';
import { SaksbehandlereTabell } from './SaksbehandlereTabell';

interface Props {
  avdelingensSaksbehandlere: SaksbehandlerDto[];
  valgtAvdelingEnhet: string;
}

export const SaksbehandlerePanel = ({ avdelingensSaksbehandlere, valgtAvdelingEnhet }: Props) => (
  <VStack gap="space-16">
    <LeggTilSaksbehandlerForm
      valgtAvdelingEnhet={valgtAvdelingEnhet}
      avdelingensSaksbehandlere={avdelingensSaksbehandlere}
    />
    <SaksbehandlereTabell saksbehandlere={avdelingensSaksbehandlere} valgtAvdelingEnhet={valgtAvdelingEnhet} />
  </VStack>
);
