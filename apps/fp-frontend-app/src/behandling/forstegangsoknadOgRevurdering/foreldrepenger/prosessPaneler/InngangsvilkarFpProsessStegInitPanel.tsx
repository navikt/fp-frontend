import React, {
  FunctionComponent,
} from 'react';

import { AksessRettigheter } from '@navikt/fp-types';

import FodselInngangsvilkarFpInitPanel from './inngangsvilkarPaneler/FodselInngangsvilkarFpInitPanel';
import AdopsjonInngangsvilkarFpInitPanel from './inngangsvilkarPaneler/AdopsjonInngangsvilkarFpInitPanel';
import OpptjeningInngangsvilkarFpInitPanel from './inngangsvilkarPaneler/OpptjeningInngangsvilkarFpInitPanel';
import OmsorgInngangsvilkarFpInitPanel from './inngangsvilkarPaneler/OmsorgInngangsvilkarFpInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import InngangsvilkarDefaultInitWrapper from '../../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import MedlemskapInngangsvilkarInitPanel from '../../paneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import ForeldreansvarInngangsvilkarInitPanel from '../../paneler/prosess/inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';

interface OwnProps {
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  rettigheter: AksessRettigheter;
}

const InngangsvilkarFpProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
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
        <FodselInngangsvilkarFpInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
        <AdopsjonInngangsvilkarFpInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
        <OmsorgInngangsvilkarFpInitPanel behandlingVersjon={behandling.versjon} {...props} />
        <MedlemskapInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
        <ForeldreansvarInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} {...props} />
      </>
    )}
    rightPanels={(props) => (
      <OpptjeningInngangsvilkarFpInitPanel behandlingVersjon={behandling?.versjon} rettigheter={rettigheter} {...props} />
    )}
  />
);

export default InngangsvilkarFpProsessStegInitPanel;
