import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IngenBehandlingValgtPanel } from '@navikt/ft-sak-infosider';
import { Behandling } from '@navikt/fp-types';

import { behandlingRoutePath } from '../app/paths';
import BehandlingIndex from './BehandlingIndex';
import FagsakData from '../fagsak/FagsakData';

interface OwnProps {
  fagsakData: FagsakData;
  setBehandling: (behandling: Behandling) => void;
  hentOgSettBehandling: () => void;
  behandling?: Behandling;
  setRequestPendingMessage: (message?: string) => void;
}

export const BehandlingerIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  setBehandling,
  behandling,
  hentOgSettBehandling,
  setRequestPendingMessage,
}) => (
  <Routes>
    <Route
      path={behandlingRoutePath}
      element={
        <BehandlingIndex
          fagsakData={fagsakData}
          behandling={behandling}
          setBehandling={setBehandling}
          hentOgSettBehandling={hentOgSettBehandling}
          setRequestPendingMessage={setRequestPendingMessage}
        />
      }
    />
    <Route path="/" element={<IngenBehandlingValgtPanel numBehandlinger={fagsakData.getAlleBehandlinger().length} />} />
  </Routes>
);

export default BehandlingerIndex;
