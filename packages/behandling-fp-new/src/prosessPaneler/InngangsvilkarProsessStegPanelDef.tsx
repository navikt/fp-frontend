import React, {
  FunctionComponent,
} from 'react';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { AksessRettigheter } from '@fpsak-frontend/types';
import { ProsessPanelMenyData, InngangsvilkarDefaultProsessStegPanel } from '@fpsak-frontend/behandling-felles-ny';

import FodselPanelDef from './inngangsvilkarPaneler/FodselPanelDef';
import MedlemskapPanelDef from './inngangsvilkarPaneler/MedlemskapPanelDef';
import OpptjeningPanelDef from './inngangsvilkarPaneler/OpptjeningPanelDef';

interface OwnProps {
  behandlingVersjon?: number;
  valgtProsessSteg: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  rettigheter: AksessRettigheter;
}

const InngangsvilkarProsessStegPanelDef: FunctionComponent<OwnProps> = ({
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
        <FodselPanelDef behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
        <VerticalSpacer thirtyTwoPx />
        <MedlemskapPanelDef behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
      </>
    )}
    rightPanels={(props) => (
      <OpptjeningPanelDef behandlingVersjon={behandlingVersjon} rettigheter={rettigheter} {...props} />
    )}
  />
);

export default InngangsvilkarProsessStegPanelDef;
