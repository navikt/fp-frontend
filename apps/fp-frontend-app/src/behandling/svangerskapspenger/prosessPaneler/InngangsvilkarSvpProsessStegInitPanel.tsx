import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import { InngangsvilkarPanelInitProps } from '../../felles/typer/inngangsvilkarPanelInitProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { OpptjeningInngangsvilkarInitPanel } from './inngangsvilkarPaneler/OpptjeningInngangsvilkarInitPanel';
import { SvangerskapInngangsvilkarInitPanel } from './inngangsvilkarPaneler/SvangerskapInngangsvilkarInitPanel';

interface Props {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarSvpProsessStegInitPanel = ({
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
}: Props & ProsessPanelInitProps) => {
  const leftPanels = (props: InngangsvilkarPanelInitProps) => (
    <>
      <SvangerskapInngangsvilkarInitPanel {...props} />
      <MedlemskapInngangsvilkarInitPanel {...props} />
    </>
  );
  const rightPanels = (props: InngangsvilkarPanelInitProps) => <OpptjeningInngangsvilkarInitPanel {...props} />;
  return (
    <InngangsvilkarDefaultInitWrapper
      valgtProsessSteg={valgtProsessSteg}
      registrerProsessPanel={registrerProsessPanel}
      apentFaktaPanelInfo={apentFaktaPanelInfo}
      leftPanels={leftPanels}
      rightPanels={rightPanels}
    />
  );
};
