import { FaktaMeny } from '../felles/fakta/FaktaMeny';
import { ProsessMeny } from '../felles/prosess/ProsessMeny';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import { AnkeBehandlingProsessStegInitPanel } from './prosessPaneler/AnkeBehandlingProsessStegInitPanel';
import { AnkeResultatProsessStegInitPanel } from './prosessPaneler/AnkeResultatProsessStegInitPanel';
import { AnkeTrygderettsbehandlingProsessStegInitPanel } from './prosessPaneler/AnkeTrygderettsbehandlingProsessStegInitPanel';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
}

export const AnkePaneler = ({ valgtProsessSteg, valgtFaktaSteg }: Props) => (
  <>
    <ProsessMeny valgtProsessSteg={valgtProsessSteg} valgtFaktaSteg={valgtFaktaSteg}>
      <AnkeBehandlingProsessStegInitPanel />
      <AnkeResultatProsessStegInitPanel />
      <AnkeTrygderettsbehandlingProsessStegInitPanel />
    </ProsessMeny>
    <FaktaMeny valgtFaktaSteg={valgtFaktaSteg} valgtProsessSteg={valgtProsessSteg}>
      <VergeFaktaInitPanel />
    </FaktaMeny>
  </>
);
