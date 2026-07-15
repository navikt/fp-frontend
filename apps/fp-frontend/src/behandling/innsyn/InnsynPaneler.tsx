import { ProsessMeny } from '../felles/prosess/ProsessMeny';
import { BehandleInnsynProsessStegInitPanel } from './prosessPaneler/BehandleInnsynProsessStegInitPanel';
import { InnsynVedtakProsessStegInitPanel } from './prosessPaneler/InnsynVedtakProsessStegInitPanel';

interface Props {
  valgtProsessSteg: string | undefined;
}

export const InnsynPaneler = ({ valgtProsessSteg }: Props) => (
  <ProsessMeny valgtProsessSteg={valgtProsessSteg} valgtFaktaSteg={undefined}>
    <BehandleInnsynProsessStegInitPanel />
    <InnsynVedtakProsessStegInitPanel />
  </ProsessMeny>
);
