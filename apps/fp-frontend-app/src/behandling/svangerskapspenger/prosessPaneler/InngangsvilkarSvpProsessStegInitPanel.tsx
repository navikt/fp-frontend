import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import type { InngangsvilkarPanelInitProps } from '../../felles/typer/inngangsvilkarPanelInitProps';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { OpptjeningInngangsvilkarInitPanel } from './inngangsvilkarPaneler/OpptjeningInngangsvilkarInitPanel';
import { SvangerskapInngangsvilkarInitPanel } from './inngangsvilkarPaneler/SvangerskapInngangsvilkarInitPanel';

interface Props {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarSvpProsessStegInitPanel = ({ apentFaktaPanelInfo }: Props) => {
  const leftPanels = (props: InngangsvilkarPanelInitProps) => (
    <>
      <SvangerskapInngangsvilkarInitPanel {...props} />
      <MedlemskapInngangsvilkarInitPanel {...props} />
    </>
  );
  const rightPanels = (props: InngangsvilkarPanelInitProps) => <OpptjeningInngangsvilkarInitPanel {...props} />;

  return (
    <InngangsvilkarDefaultInitWrapper
      apentFaktaPanelInfo={apentFaktaPanelInfo}
      leftPanels={leftPanels}
      rightPanels={rightPanels}
    />
  );
};
