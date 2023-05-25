import React, { FunctionComponent, useCallback } from 'react';

import { AksessRettigheter } from '@navikt/fp-types';

import FodselInngangsvilkarFpInitPanel from './inngangsvilkarPaneler/FodselInngangsvilkarFpInitPanel';
import AdopsjonInngangsvilkarFpInitPanel from './inngangsvilkarPaneler/AdopsjonInngangsvilkarFpInitPanel';
import OpptjeningInngangsvilkarFpInitPanel from './inngangsvilkarPaneler/OpptjeningInngangsvilkarFpInitPanel';
import OmsorgInngangsvilkarFpInitPanel from './inngangsvilkarPaneler/OmsorgInngangsvilkarFpInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import InngangsvilkarDefaultInitWrapper from '../../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import MedlemskapInngangsvilkarInitPanel from '../../paneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import ForeldreansvarInngangsvilkarInitPanel from '../../paneler/prosess/inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';
import InngangsvilkarPanelInitProps from '../../../felles/typer/inngangsvilkarPanelInitProps';

interface OwnProps {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
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
}) => {
  const leftPanels = useCallback(
    (props: InngangsvilkarPanelInitProps) => (
      <>
        <FodselInngangsvilkarFpInitPanel behandlingVersjon={behandling.versjon} rettigheter={rettigheter} {...props} />
        <AdopsjonInngangsvilkarFpInitPanel
          behandlingVersjon={behandling.versjon}
          rettigheter={rettigheter}
          {...props}
        />
        <OmsorgInngangsvilkarFpInitPanel behandlingVersjon={behandling.versjon} {...props} />
        <MedlemskapInngangsvilkarInitPanel
          behandlingVersjon={behandling.versjon}
          rettigheter={rettigheter}
          {...props}
        />
        <ForeldreansvarInngangsvilkarInitPanel behandlingVersjon={behandling.versjon} {...props} />
      </>
    ),
    [behandling, rettigheter],
  );

  const rightPanels = useCallback(
    (props: InngangsvilkarPanelInitProps) => (
      <OpptjeningInngangsvilkarFpInitPanel
        behandlingVersjon={behandling?.versjon}
        rettigheter={rettigheter}
        {...props}
      />
    ),
    [behandling, rettigheter],
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

export default InngangsvilkarFpProsessStegInitPanel;
