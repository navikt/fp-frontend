import React, {
  FunctionComponent,
} from 'react';

import { AksessRettigheter } from '@fpsak-frontend/types';
import { InngangsvilkarDefaultInitWrapper, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles-ny';

import SvangerskapInngangsvilkarInitPanel from './inngangsvilkarPaneler/SvangerskapInngangsvilkarInitPanel';
import MedlemskapInngangsvilkarInitPanel from './inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import OpptjeningInngangsvilkarInitPanel from './inngangsvilkarPaneler/OpptjeningInngangsvilkarInitPanel';

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
        <SvangerskapInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} {...props} />
        <MedlemskapInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
      </>
    )}
    rightPanels={(props) => (
      <OpptjeningInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
    )}
  />
);

export default InngangsvilkarProsessStegInitPanel;
