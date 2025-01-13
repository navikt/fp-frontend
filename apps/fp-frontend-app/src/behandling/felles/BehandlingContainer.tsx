import React, { ReactElement, useState } from 'react';

import { Behandling } from '@navikt/fp-types';

import { FaktaContainer } from './fakta/FaktaContainer';
import { ProsessContainer } from './prosess/ProsessContainer';
import { FaktaPanelInitProps } from './typer/faktaPanelInitProps';
import { ProsessPanelExtraInitProps, ProsessPanelInitProps } from './typer/prosessPanelInitProps';

interface FaktaPanelInfo {
  urlCode: string;
  text: string;
}

interface Props {
  behandling: Behandling;
  hentFaktaPaneler?: (props: FaktaPanelInitProps) => ReactElement;
  hentProsessPaneler?: (props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => ReactElement;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
}

export const BehandlingContainer = ({
  behandling,
  hentFaktaPaneler,
  hentProsessPaneler,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
}: Props) => {
  const [apentFaktaPanelInfo, setApentFaktaPanel] = useState<FaktaPanelInfo>();

  return (
    <>
      <ProsessContainer
        hentPaneler={hentProsessPaneler}
        valgtProsessSteg={valgtProsessSteg}
        valgtFaktaSteg={valgtFaktaSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        behandling={behandling}
        apentFaktaPanelInfo={apentFaktaPanelInfo}
      />
      <FaktaContainer
        hentPaneler={hentFaktaPaneler}
        valgtFaktaSteg={valgtFaktaSteg}
        valgtProsessSteg={valgtProsessSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        behandling={behandling}
        setApentFaktaPanel={setApentFaktaPanel}
        apentFaktaPanelInfo={apentFaktaPanelInfo}
      />
    </>
  );
};
