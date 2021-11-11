import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import { IngenBehandlingValgtPanel } from '@fpsak-frontend/sak-infosider';

import { behandlingRoutePath } from '../app/paths';
import BehandlingIndex from './BehandlingIndex';

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  setBehandlingUuidOgVersjon: (behandlingUuid: string, behandlingVersjon: number) => void;
  setRequestPendingMessage: (message?: string) => void;
}

export const BehandlingerIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger,
  setBehandlingUuidOgVersjon,
  setRequestPendingMessage,
}) => (
  <Routes>
    <Route
      path={behandlingRoutePath}
      element={(
        <BehandlingIndex
          fagsak={fagsak}
          alleBehandlinger={alleBehandlinger}
          setBehandlingUuidOgVersjon={setBehandlingUuidOgVersjon}
          setRequestPendingMessage={setRequestPendingMessage}
        />
      )}
    />
    <Route path="/" element={<IngenBehandlingValgtPanel numBehandlinger={alleBehandlinger.length} />} />
  </Routes>
);

export default BehandlingerIndex;
