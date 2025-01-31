import { BehandlingContainer } from '../felles/BehandlingContainer';
import { ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
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

export default InnsynPaneler;
