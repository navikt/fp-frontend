import React from 'react';

import { VStack } from '@navikt/ds-react';

import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import { LeggTilSaksbehandlerForm } from './LeggTilSaksbehandlerForm';
import { SaksbehandlereTabell } from './SaksbehandlereTabell';

interface Props {
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
  valgtAvdelingEnhet: string;
}

export const SaksbehandlerePanel = ({ avdelingensSaksbehandlere, valgtAvdelingEnhet }: Props) => (
  <VStack gap="4">
    <SaksbehandlereTabell saksbehandlere={avdelingensSaksbehandlere} valgtAvdelingEnhet={valgtAvdelingEnhet} />
    <LeggTilSaksbehandlerForm
      valgtAvdelingEnhet={valgtAvdelingEnhet}
      avdelingensSaksbehandlere={avdelingensSaksbehandlere}
    />
  </VStack>
);
