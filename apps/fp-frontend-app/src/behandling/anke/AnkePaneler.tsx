import { Behandling, BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandlingContainer } from '../felles/BehandlingContainer';
import { FaktaPanelInitProps } from '../felles/typer/faktaPanelInitProps';
import { ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import { AnkeBehandlingProsessStegInitPanel } from './prosessPaneler/AnkeBehandlingProsessStegInitPanel';
import { AnkeResultatProsessStegInitPanel } from './prosessPaneler/AnkeResultatProsessStegInitPanel';
import { AnkeTrygderettsbehandlingProsessStegInitPanel } from './prosessPaneler/AnkeTrygderettsbehandlingProsessStegInitPanel';

interface Props {
  behandling: Behandling;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  alleBehandlinger: BehandlingAppKontekst[];
}

const AnkePaneler = ({
  behandling,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  alleBehandlinger,
}: Props) => {
  return (
    <BehandlingContainer
      behandling={behandling}
      valgtProsessSteg={valgtProsessSteg}
      valgtFaktaSteg={valgtFaktaSteg}
      oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      hentFaktaPaneler={(props: FaktaPanelInitProps) => <VergeFaktaInitPanel {...props} />}
      hentProsessPaneler={(props: ProsessPanelInitProps) => (
        <>
          <AnkeBehandlingProsessStegInitPanel
            {...props}
            alleBehandlinger={alleBehandlinger.filter(b => !b.behandlingHenlagt)}
          />
          <AnkeResultatProsessStegInitPanel {...props} />
          <AnkeTrygderettsbehandlingProsessStegInitPanel {...props} />
        </>
      )}
    />
  );
};

export default AnkePaneler;
