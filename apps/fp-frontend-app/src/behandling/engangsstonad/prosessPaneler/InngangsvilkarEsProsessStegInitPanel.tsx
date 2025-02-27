import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import type { InngangsvilkarPanelInitProps } from '../../felles/typer/inngangsvilkarPanelInitProps';
import { ForeldreansvarInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { AdopsjonInngangsvilkarInitPanel } from './inngangsvilkarPaneler/AdopsjonInngangsvilkarInitPanel';
import { FodselInngangsvilkarInitPanel } from './inngangsvilkarPaneler/FodselInngangsvilkarInitPanel';
import { MedlemskapForutgaendeInngangsvilkarInitPanel } from './inngangsvilkarPaneler/MedlemskapForutgaendeInngangsvilkarInitPanel';
import { OmsorgInngangsvilkarInitPanel } from './inngangsvilkarPaneler/OmsorgInngangsvilkarInitPanel';

interface Props {
  åpentFaktaPanelInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarEsProsessStegInitPanel = ({ åpentFaktaPanelInfo }: Props) => {
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
  return <InngangsvilkarDefaultInitWrapper apentFaktaPanelInfo={åpentFaktaPanelInfo} leftPanels={leftPanels} />;
};
