import React, {
  FunctionComponent,
} from 'react';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { AksessRettigheter } from '@fpsak-frontend/types';
import { InngangsvilkarDefaultProsessStegPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles-ny';

import FodselInngangsvilkarInitPanel from './inngangsvilkarPaneler/FodselInngangsvilkarInitPanel';
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
  <InngangsvilkarDefaultProsessStegPanel
    valgtProsessSteg={valgtProsessSteg}
    registrerProsessPanel={registrerProsessPanel}
    apentFaktaPanelInfo={apentFaktaPanelInfo}
    oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
    leftPanels={(props) => (
      <>
        <FodselInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
        <VerticalSpacer thirtyTwoPx />
        <MedlemskapInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
      </>
    )}
    rightPanels={(props) => (
      <OpptjeningInngangsvilkarInitPanel behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
    )}
  />
);

export default InngangsvilkarProsessStegInitPanel;
