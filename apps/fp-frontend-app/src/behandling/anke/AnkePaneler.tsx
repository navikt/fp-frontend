import { BehandlingContainer } from '../felles/BehandlingContainer';
import type { FaktaPanelInitProps } from '../felles/typer/faktaPanelInitProps';
import type { ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import { AnkeBehandlingProsessStegInitPanel } from './prosessPaneler/AnkeBehandlingProsessStegInitPanel';
import { AnkeResultatProsessStegInitPanel } from './prosessPaneler/AnkeResultatProsessStegInitPanel';
import { AnkeTrygderettsbehandlingProsessStegInitPanel } from './prosessPaneler/AnkeTrygderettsbehandlingProsessStegInitPanel';

interface Props {
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
}

const AnkePaneler = ({ valgtProsessSteg, valgtFaktaSteg }: Props) => {
  const hentFaktaPaneler = (props: FaktaPanelInitProps) => <VergeFaktaInitPanel {...props} />;
  const hentProsessPaneler = (props: ProsessPanelInitProps) => (
    <>
      <AnkeBehandlingProsessStegInitPanel {...props} />
      <AnkeResultatProsessStegInitPanel {...props} />
      <AnkeTrygderettsbehandlingProsessStegInitPanel {...props} />
    </>
  );
  return (
    <BehandlingContainer
      valgtProsessSteg={valgtProsessSteg}
      valgtFaktaSteg={valgtFaktaSteg}
      hentFaktaPaneler={hentFaktaPaneler}
      hentProsessPaneler={hentProsessPaneler}
    />
  );
};

export default AnkePaneler;
