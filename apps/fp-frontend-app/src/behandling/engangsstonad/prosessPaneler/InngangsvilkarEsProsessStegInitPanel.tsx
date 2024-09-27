import React, { FunctionComponent, useCallback } from 'react';

import { AksessRettigheter } from '@navikt/fp-types';

import FodselInngangsvilkarInitPanel from './inngangsvilkarPaneler/FodselInngangsvilkarInitPanel';
import AdopsjonInngangsvilkarInitPanel from './inngangsvilkarPaneler/AdopsjonInngangsvilkarInitPanel';
import MedlemskapInngangsvilkarInitPanel from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import ForeldreansvarInngangsvilkarInitPanel from '../../fellesPaneler/prosess/inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';
import OmsorgInngangsvilkarInitPanel from './inngangsvilkarPaneler/OmsorgInngangsvilkarInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import InngangsvilkarDefaultInitWrapper from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import InngangsvilkarPanelInitProps from '../../felles/typer/inngangsvilkarPanelInitProps';
import MedlemskapForutgaendeInngangsvilkarInitPanel from './inngangsvilkarPaneler/MedlemskapForutgaendeInngangsvilkarInitPanel';

interface OwnProps {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  rettigheter: AksessRettigheter;
}

const InngangsvilkarEsProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandling,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  rettigheter,
}) => {
  const leftPanels = useCallback(
    (props: InngangsvilkarPanelInitProps) => (
      <>
        <FodselInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
        <AdopsjonInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
        <OmsorgInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} {...props} />
        <MedlemskapInngangsvilkarInitPanel
          behandlingVersjon={behandling.versjon}
          rettigheter={rettigheter}
          {...props}
        />
        <MedlemskapForutgaendeInngangsvilkarInitPanel
          behandlingVersjon={behandling.versjon}
          rettigheter={rettigheter}
          {...props}
        />
        <ForeldreansvarInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} {...props} />
      </>
    ),
    [behandling.versjon, rettigheter],
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

export default InngangsvilkarEsProsessStegInitPanel;
