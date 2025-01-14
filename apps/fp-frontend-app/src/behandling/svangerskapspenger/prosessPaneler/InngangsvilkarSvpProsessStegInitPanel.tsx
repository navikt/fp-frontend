import { AksessRettigheter } from '@navikt/fp-types';

import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import { InngangsvilkarPanelInitProps } from '../../felles/typer/inngangsvilkarPanelInitProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { OpptjeningInngangsvilkarInitPanel } from './inngangsvilkarPaneler/OpptjeningInngangsvilkarInitPanel';
import { SvangerskapInngangsvilkarInitPanel } from './inngangsvilkarPaneler/SvangerskapInngangsvilkarInitPanel';

interface Props {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  rettigheter: AksessRettigheter;
}

export const InngangsvilkarSvpProsessStegInitPanel = ({
  behandling,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  rettigheter,
}: Props & ProsessPanelInitProps) => {
  const leftPanels = (props: InngangsvilkarPanelInitProps) => (
    <>
      <SvangerskapInngangsvilkarInitPanel {...props} />
      <MedlemskapInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
    </>
  );
  const rightPanels = (props: InngangsvilkarPanelInitProps) => (
    <OpptjeningInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
  );
  return (
    <InngangsvilkarDefaultInitWrapper
      behandling={behandling}
      valgtProsessSteg={valgtProsessSteg}
      registrerProsessPanel={registrerProsessPanel}
      apentFaktaPanelInfo={apentFaktaPanelInfo}
      oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      leftPanels={leftPanels}
      rightPanels={rightPanels}
    />
  );
};
