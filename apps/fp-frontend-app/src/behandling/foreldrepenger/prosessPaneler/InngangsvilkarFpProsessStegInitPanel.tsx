import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import type { InngangsvilkarPanelInitProps } from '../../felles/typer/inngangsvilkarPanelInitProps';
import { ForeldreansvarInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { AdopsjonInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/AdopsjonInngangsvilkarFpInitPanel';
import { FodselInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/FodselInngangsvilkarFpInitPanel';
import { OmsorgInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/OmsorgInngangsvilkarFpInitPanel';
import { OpptjeningInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/OpptjeningInngangsvilkarFpInitPanel';

interface Props {
  faktaPanelMedÅpentApInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarFpProsessStegInitPanel = ({ faktaPanelMedÅpentApInfo }: Props) => {
  const leftPanels = (props: InngangsvilkarPanelInitProps) => (
    <>
      <FodselInngangsvilkarFpInitPanel {...props} />
      <AdopsjonInngangsvilkarFpInitPanel {...props} />
      <OmsorgInngangsvilkarFpInitPanel {...props} />
      <MedlemskapInngangsvilkarInitPanel {...props} />
      <ForeldreansvarInngangsvilkarInitPanel {...props} />
    </>
  );
  const rightPanels = (props: InngangsvilkarPanelInitProps) => <OpptjeningInngangsvilkarFpInitPanel {...props} />;
  return (
    <InngangsvilkarDefaultInitWrapper
      faktaPanelMedÅpentApInfo={faktaPanelMedÅpentApInfo}
      leftPanels={leftPanels}
      rightPanels={rightPanels}
    />
  );
};
