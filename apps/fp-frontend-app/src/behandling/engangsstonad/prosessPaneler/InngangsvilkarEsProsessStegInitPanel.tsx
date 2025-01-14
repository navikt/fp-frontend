import { AksessRettigheter } from '@navikt/fp-types';

import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import { InngangsvilkarPanelInitProps } from '../../felles/typer/inngangsvilkarPanelInitProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { ForeldreansvarInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { AdopsjonInngangsvilkarInitPanel } from './inngangsvilkarPaneler/AdopsjonInngangsvilkarInitPanel';
import { FodselInngangsvilkarInitPanel } from './inngangsvilkarPaneler/FodselInngangsvilkarInitPanel';
import { MedlemskapForutgaendeInngangsvilkarInitPanel } from './inngangsvilkarPaneler/MedlemskapForutgaendeInngangsvilkarInitPanel';
import { OmsorgInngangsvilkarInitPanel } from './inngangsvilkarPaneler/OmsorgInngangsvilkarInitPanel';

interface Props {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  rettigheter: AksessRettigheter;
}

export const InngangsvilkarEsProsessStegInitPanel = ({
  behandling,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  rettigheter,
}: Props & ProsessPanelInitProps) => {
  const leftPanels = (props: InngangsvilkarPanelInitProps) => (
    <>
      <FodselInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
      <AdopsjonInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
      <OmsorgInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} {...props} />
      <MedlemskapInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
      <MedlemskapForutgaendeInngangsvilkarInitPanel
        behandlingVersjon={behandling.versjon}
        rettigheter={rettigheter}
        {...props}
      />
      <ForeldreansvarInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} {...props} />
    </>
  );
  return (
    <InngangsvilkarDefaultInitWrapper
      behandling={behandling}
      valgtProsessSteg={valgtProsessSteg}
      registrerProsessPanel={registrerProsessPanel}
      apentFaktaPanelInfo={apentFaktaPanelInfo}
      oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      leftPanels={leftPanels}
    />
  );
};
