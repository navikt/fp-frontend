import { PanelDataPrioritetProvider } from '../felles/prioritet/PanelDataPrioritetContext';
import { ProsessMeny } from '../felles/prosess/ProsessMeny';
import { BehandleInnsynProsessStegInitPanel } from './prosessPaneler/BehandleInnsynProsessStegInitPanel';
import { InnsynVedtakProsessStegInitPanel } from './prosessPaneler/InnsynVedtakProsessStegInitPanel';

interface Props {
  valgtProsessSteg: string | undefined;
}

export const InnsynPaneler = ({ valgtProsessSteg }: Props) => (
  <PanelDataPrioritetProvider>
    <ProsessMeny valgtProsessSteg={valgtProsessSteg} valgtFaktaSteg={undefined}>
      <BehandleInnsynProsessStegInitPanel />
      <InnsynVedtakProsessStegInitPanel />
    </ProsessMeny>
  </PanelDataPrioritetProvider>
);
