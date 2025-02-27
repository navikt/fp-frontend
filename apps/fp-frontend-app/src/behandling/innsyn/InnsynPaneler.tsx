import { ProsessMeny } from '../felles/prosess/ProsessMeny';
import { BehandleInnsynProsessStegInitPanel } from './prosessPaneler/BehandleInnsynProsessStegInitPanel';
import { InnsynVedtakProsessStegInitPanel } from './prosessPaneler/InnsynVedtakProsessStegInitPanel';

interface Props {
  valgtProsessSteg: string | undefined;
}

const InnsynPaneler = ({ valgtProsessSteg }: Props) => (
  <ProsessMeny valgtProsessSteg={valgtProsessSteg} valgtFaktaSteg={undefined}>
    <BehandleInnsynProsessStegInitPanel />
    <InnsynVedtakProsessStegInitPanel />
  </ProsessMeny>
);

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default InnsynPaneler;
