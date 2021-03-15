import React, {
  FunctionComponent,
} from 'react';

import { AksessRettigheter } from '@fpsak-frontend/types';
import { InngangsvilkarDefaultInitWrapper, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles-ny';

import FodselInngangsvilkarInitPanel from './inngangsvilkarPaneler/FodselInngangsvilkarInitPanel';
import AdopsjonInngangsvilkarInitPanel from './inngangsvilkarPaneler/AdopsjonInngangsvilkarInitPanel';
import MedlemskapInngangsvilkarInitPanel from './inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import OpptjeningInngangsvilkarInitPanel from './inngangsvilkarPaneler/OpptjeningInngangsvilkarInitPanel';
import ForeldreansvarInngangsvilkarInitPanel from './inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';
import OmsorgInngangsvilkarInitPanel from './inngangsvilkarPaneler/OmsorgInngangsvilkarInitPanel';

interface OwnProps {
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  rettigheter: AksessRettigheter;
}

const InngangsvilkarProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  rettigheter,
}) => (
  <InngangsvilkarDefaultInitWrapper
    valgtProsessSteg={valgtProsessSteg}
    registrerProsessPanel={registrerProsessPanel}
    apentFaktaPanelInfo={apentFaktaPanelInfo}
    oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
    leftPanels={(props) => (
      <>
        <FodselInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
        <AdopsjonInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
        <OmsorgInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} {...props} />
        <MedlemskapInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
        <ForeldreansvarInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} {...props} />
      </>
    )}
    rightPanels={(props) => (
      <OpptjeningInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
    )}
  />
);

export default InngangsvilkarProsessStegInitPanel;
