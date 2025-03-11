import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import type { InngangsvilkarPanelInitProps } from '../../felles/typer/inngangsvilkarPanelInitProps';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { OpptjeningInngangsvilkarInitPanel } from './inngangsvilkarPaneler/OpptjeningInngangsvilkarInitPanel';
import { SvangerskapInngangsvilkarInitPanel } from './inngangsvilkarPaneler/SvangerskapInngangsvilkarInitPanel';

interface Props {
  faktaPanelMedÅpentApInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarSvpProsessStegInitPanel = ({ faktaPanelMedÅpentApInfo }: Props) => {
  const leftPanels = (props: InngangsvilkarPanelInitProps) => (
    <>
      <SvangerskapInngangsvilkarInitPanel {...props} />
      <MedlemskapInngangsvilkarInitPanel {...props} />
    </>
  );
  const rightPanels = (props: InngangsvilkarPanelInitProps) => <OpptjeningInngangsvilkarInitPanel {...props} />;

  return (
    <InngangsvilkarDefaultInitWrapper
      faktaPanelMedÅpentApInfo={faktaPanelMedÅpentApInfo}
      leftPanels={leftPanels}
      rightPanels={rightPanels}
    />
  );
};
