import React, {
  FunctionComponent,
} from 'react';

import { AksessRettigheter } from '@fpsak-frontend/types';

import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import InngangsvilkarDefaultInitWrapper from '../../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import SvangerskapInngangsvilkarInitPanel from './inngangsvilkarPaneler/SvangerskapInngangsvilkarInitPanel';
import MedlemskapInngangsvilkarInitPanel from '../../paneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import OpptjeningInngangsvilkarInitPanel from './inngangsvilkarPaneler/OpptjeningInngangsvilkarInitPanel';

interface OwnProps {
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  rettigheter: AksessRettigheter;
}

const InngangsvilkarSvpProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandling,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  rettigheter,
  requestApi,
}) => (
  <InngangsvilkarDefaultInitWrapper
    behandling={behandling}
    valgtProsessSteg={valgtProsessSteg}
    registrerProsessPanel={registrerProsessPanel}
    apentFaktaPanelInfo={apentFaktaPanelInfo}
    oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
    requestApi={requestApi}
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

export default InngangsvilkarSvpProsessStegInitPanel;
