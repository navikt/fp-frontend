import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import type { InngangsvilkarPanelInitProps } from '../../felles/typer/inngangsvilkarPanelInitProps';
import type { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { ForeldreansvarInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { AdopsjonInngangsvilkarInitPanel } from './inngangsvilkarPaneler/AdopsjonInngangsvilkarInitPanel';
import { FodselInngangsvilkarInitPanel } from './inngangsvilkarPaneler/FodselInngangsvilkarInitPanel';
import { MedlemskapForutgaendeInngangsvilkarInitPanel } from './inngangsvilkarPaneler/MedlemskapForutgaendeInngangsvilkarInitPanel';
import { OmsorgInngangsvilkarInitPanel } from './inngangsvilkarPaneler/OmsorgInngangsvilkarInitPanel';

interface Props {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarEsProsessStegInitPanel = ({
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
}: Props & ProsessPanelInitProps) => {
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
    <InngangsvilkarDefaultInitWrapper
      valgtProsessSteg={valgtProsessSteg}
      registrerProsessPanel={registrerProsessPanel}
      apentFaktaPanelInfo={apentFaktaPanelInfo}
      leftPanels={leftPanels}
    />
  );
};
