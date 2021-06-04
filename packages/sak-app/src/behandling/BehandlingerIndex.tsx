import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import { IngenBehandlingValgtPanel } from '@fpsak-frontend/sak-infosider';

import { behandlingPath } from '../app/paths';
import BehandlingIndex from './BehandlingIndex';

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  setBehandlingUuidOgVersjon: (behandlingUuid: string, behandlingVersjon: number) => void;
  setRequestPendingMessage: (message: string) => void;
}

export const BehandlingerIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger,
  setBehandlingUuidOgVersjon,
  setRequestPendingMessage,
}) => (
  <Switch>
    <Route
      strict
      path={behandlingPath}
      render={(props) => (
        <BehandlingIndex
          {...props}
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
  </Switch>
);

export default BehandlingerIndex;
