import React, {
  FunctionComponent, ReactElement, useState,
} from 'react';

import { Behandling } from '@navikt/ft-types';

import { RequestApi } from '@fpsak-frontend/rest-api';

import ProsessContainer from './prosess/ProsessContainer';
import FaktaContainer from './fakta/FaktaContainer';

import ProsessPanelInitProps, { ProsessPanelExtraInitProps } from '../types/prosessPanelInitProps';
import FaktaPanelInitProps from '../types/faktaPanelInitProps';

interface FaktaPanelInfo {
  urlCode: string;
  text: string;
}

interface OwnProps {
  behandling: Behandling;
  hentFaktaPaneler?: ((props: FaktaPanelInitProps) => ReactElement);
  hentProsessPaneler?: ((props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => ReactElement);
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  requestApi: RequestApi;
}

const BehandlingContainer: FunctionComponent<OwnProps> = ({
  behandling,
  hentFaktaPaneler,
  hentProsessPaneler,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  requestApi,
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
        behandlingVersjon={behandling.versjon}
        setApentFaktaPanel={setApentFaktaPanel}
        apentFaktaPanelInfo={apentFaktaPanelInfo}
        requestApi={requestApi}
      />
    </>
  );
};

export default BehandlingContainer;
