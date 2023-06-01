import React, { FunctionComponent, ReactElement, useState } from 'react';

import { Behandling } from '@navikt/fp-types';

import ProsessContainer from './prosess/ProsessContainer';
import FaktaContainer from './fakta/FaktaContainer';
import ProsessPanelInitProps, { ProsessPanelExtraInitProps } from './typer/prosessPanelInitProps';
import FaktaPanelInitProps from './typer/faktaPanelInitProps';

interface FaktaPanelInfo {
  urlCode: string;
  text: string;
}

interface OwnProps {
  behandling: Behandling;
  hentFaktaPaneler?: (props: FaktaPanelInitProps) => ReactElement;
  hentProsessPaneler?: (props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => ReactElement;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
}

const BehandlingContainer: FunctionComponent<OwnProps> = ({
  behandling,
  hentFaktaPaneler,
  hentProsessPaneler,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
}) => {
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

export default BehandlingContainer;
