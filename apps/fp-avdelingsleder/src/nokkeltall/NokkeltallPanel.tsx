import { VStack } from '@navikt/ds-react';

import { OppgaverPerForsteStonadsdagPanel } from './antallBehandlingerPerForsteStonadsdag/OppgaverPerForsteStonadsdagPanel';
import { OppgaverSomErApneEllerPaVentPanel } from './apneOgPaVentBehandlinger/OppgaverSomErApneEllerPaVentPanel';
import { TilBehandlingPanel } from './tilBehandling/TilBehandlingPanel';
import { VentefristUtløperPanel } from './ventefristUtløper/VentefristUtløperPanel';

interface Props {
  valgtAvdelingEnhet: string;
}

export const NokkeltallPanel = ({ valgtAvdelingEnhet }: Props) => {
  const height = 300;

  return (
    <VStack gap="space-16">
      <TilBehandlingPanel height={height} valgtAvdelingEnhet={valgtAvdelingEnhet} />
      <VentefristUtløperPanel height={height} valgtAvdelingEnhet={valgtAvdelingEnhet} />
      <OppgaverPerForsteStonadsdagPanel height={height} valgtAvdelingEnhet={valgtAvdelingEnhet} />
      <OppgaverSomErApneEllerPaVentPanel height={height} valgtAvdelingEnhet={valgtAvdelingEnhet} />
    </VStack>
  );
};
