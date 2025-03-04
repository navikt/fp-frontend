import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import type { InngangsvilkarPanelInitProps } from '../../felles/typer/inngangsvilkarPanelInitProps';
import { ForeldreansvarInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { AdopsjonInngangsvilkarInitPanel } from './inngangsvilkarPaneler/AdopsjonInngangsvilkarInitPanel';
import { FodselInngangsvilkarInitPanel } from './inngangsvilkarPaneler/FodselInngangsvilkarInitPanel';
import { MedlemskapForutgaendeInngangsvilkarInitPanel } from './inngangsvilkarPaneler/MedlemskapForutgaendeInngangsvilkarInitPanel';
import { OmsorgInngangsvilkarInitPanel } from './inngangsvilkarPaneler/OmsorgInngangsvilkarInitPanel';

interface Props {
  faktaPanelMedÅpentApInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarEsProsessStegInitPanel = ({ faktaPanelMedÅpentApInfo }: Props) => {
  const leftPanels = (props: InngangsvilkarPanelInitProps) => (
    <>
      <FodselInngangsvilkarInitPanel {...props} />
      <AdopsjonInngangsvilkarInitPanel {...props} />
      <OmsorgInngangsvilkarInitPanel {...props} />
      <MedlemskapInngangsvilkarInitPanel {...props} />
      <MedlemskapForutgaendeInngangsvilkarInitPanel {...props} />
      <ForeldreansvarInngangsvilkarInitPanel {...props} />
    </>
  );
  return (
    <InngangsvilkarDefaultInitWrapper faktaPanelMedÅpentApInfo={faktaPanelMedÅpentApInfo} leftPanels={leftPanels} />
  );
};
