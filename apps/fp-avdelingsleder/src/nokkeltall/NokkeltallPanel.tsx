import { VStack } from '@navikt/ds-react';

import { getValueFromLocalStorage } from '../data/localStorageHelper';
import { OppgaverPerForsteStonadsdagPanel } from './antallBehandlingerPerForsteStonadsdag/OppgaverPerForsteStonadsdagPanel';
import { OppgaverSomErApneEllerPaVentPanel } from './apneOgPaVentBehandlinger/OppgaverSomErApneEllerPaVentPanel';
import { FordelingAvBehandlingstypePanel } from './fordelingAvBehandlingstype/FordelingAvBehandlingstypePanel';
import { TilBehandlingPanel } from './tilBehandling/TilBehandlingPanel';
import { VentefristUtløperPanel } from './ventefristUtløper/VentefristUtløperPanel';

interface Props {
  valgtAvdelingEnhet: string;
}

export const NokkeltallPanel = ({ valgtAvdelingEnhet }: Props) => {
  const height = 300;

  return (
    <VStack gap="space-16">
      <TilBehandlingPanel
        height={height}
        valgtAvdelingEnhet={valgtAvdelingEnhet}
        getValueFromLocalStorage={getValueFromLocalStorage}
      />
      <FordelingAvBehandlingstypePanel
        height={height}
        valgtAvdelingEnhet={valgtAvdelingEnhet}
        getValueFromLocalStorage={getValueFromLocalStorage}
      />
      <VentefristUtløperPanel
        height={height}
        valgtAvdelingEnhet={valgtAvdelingEnhet}
        getValueFromLocalStorage={getValueFromLocalStorage}
      />
      <OppgaverPerForsteStonadsdagPanel height={height} valgtAvdelingEnhet={valgtAvdelingEnhet} />
      <OppgaverSomErApneEllerPaVentPanel
        height={height}
        valgtAvdelingEnhet={valgtAvdelingEnhet}
        getValueFromLocalStorage={getValueFromLocalStorage}
      />
    </VStack>
  );
};
