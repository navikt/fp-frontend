import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import { IngenBehandlingValgtPanel } from '@fpsak-frontend/sak-infosider';

import { behandlingPath } from '../app/paths';
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
      path={behandlingPath}
      element={(
        <BehandlingIndex
          fagsak={fagsak}
          alleBehandlinger={alleBehandlinger}
          setBehandlingUuidOgVersjon={setBehandlingUuidOgVersjon}
          setRequestPendingMessage={setRequestPendingMessage}
        />
      )}
    />
    <Route>
      <IngenBehandlingValgtPanel numBehandlinger={alleBehandlinger.length} />
    </Route>
  </Routes>
);

export default BehandlingerIndex;
