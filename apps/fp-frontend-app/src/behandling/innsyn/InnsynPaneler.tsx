import { BehandlingContainer } from '../felles/BehandlingContainer';
import type { ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
import { BehandleInnsynProsessStegInitPanel } from './prosessPaneler/BehandleInnsynProsessStegInitPanel';
import { InnsynVedtakProsessStegInitPanel } from './prosessPaneler/InnsynVedtakProsessStegInitPanel';

interface Props {
  valgtProsessSteg?: string;
}

const InnsynPaneler = ({ valgtProsessSteg }: Props) => {
  const hentProsessPaneler = (props: ProsessPanelInitProps) => (
    <>
      <BehandleInnsynProsessStegInitPanel {...props} />
      <InnsynVedtakProsessStegInitPanel {...props} />
    </>
  );

  return <BehandlingContainer valgtProsessSteg={valgtProsessSteg} hentProsessPaneler={hentProsessPaneler} />;
};

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default InnsynPaneler;
