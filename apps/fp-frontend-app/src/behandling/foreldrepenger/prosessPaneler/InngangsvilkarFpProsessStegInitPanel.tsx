import React, { useCallback } from 'react';

import { AksessRettigheter } from '@navikt/fp-types';

import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import { InngangsvilkarPanelInitProps } from '../../felles/typer/inngangsvilkarPanelInitProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { ForeldreansvarInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { AdopsjonInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/AdopsjonInngangsvilkarFpInitPanel';
import { FodselInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/FodselInngangsvilkarFpInitPanel';
import { OmsorgInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/OmsorgInngangsvilkarFpInitPanel';
import { OpptjeningInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/OpptjeningInngangsvilkarFpInitPanel';

interface Props {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  rettigheter: AksessRettigheter;
}

export const InngangsvilkarFpProsessStegInitPanel = ({
  behandling,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  rettigheter,
}: Props & ProsessPanelInitProps) => {
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
