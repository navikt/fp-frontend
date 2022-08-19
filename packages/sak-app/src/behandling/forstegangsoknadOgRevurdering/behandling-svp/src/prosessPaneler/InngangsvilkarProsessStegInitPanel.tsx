import React, {
  FunctionComponent,
} from 'react';

import { AksessRettigheter } from '@fpsak-frontend/types';
import { InngangsvilkarDefaultInitWrapper, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';

import SvangerskapInngangsvilkarInitPanel from './inngangsvilkarPaneler/SvangerskapInngangsvilkarInitPanel';
import MedlemskapInngangsvilkarInitPanel from './inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import OpptjeningInngangsvilkarInitPanel from './inngangsvilkarPaneler/OpptjeningInngangsvilkarInitPanel';

interface OwnProps {
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  rettigheter: AksessRettigheter;
}

const InngangsvilkarProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandling,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  rettigheter,
}) => (
  <InngangsvilkarDefaultInitWrapper
    behandling={behandling}
    valgtProsessSteg={valgtProsessSteg}
    registrerProsessPanel={registrerProsessPanel}
    apentFaktaPanelInfo={apentFaktaPanelInfo}
    oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
    leftPanels={(props) => (
      <>
        <SvangerskapInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} {...props} />
        <MedlemskapInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
      </>
    )}
    rightPanels={(props) => (
      <OpptjeningInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
    )}
  />
);

export default InngangsvilkarProsessStegInitPanel;
