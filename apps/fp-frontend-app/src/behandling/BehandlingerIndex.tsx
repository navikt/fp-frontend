import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IngenBehandlingValgtPanel } from '@navikt/ft-sak-infosider';

import { behandlingRoutePath } from '../app/paths';
import BehandlingIndex from './BehandlingIndex';
import FagsakData from '../fagsak/FagsakData';

interface OwnProps {
  fagsakData: FagsakData;
  setBehandlingUuidOgVersjon: (behandlingUuid: string, behandlingVersjon: number) => void;
  setRequestPendingMessage: (message?: string) => void;
}

export const BehandlingerIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  setBehandlingUuidOgVersjon,
  setRequestPendingMessage,
}) => (
  <Routes>
    <Route
      path={behandlingRoutePath}
      element={(
        <BehandlingIndex
          fagsakData={fagsakData}
          setBehandlingUuidOgVersjon={setBehandlingUuidOgVersjon}
          setRequestPendingMessage={setRequestPendingMessage}
        />
      )}
    />
    <Route path="/" element={<IngenBehandlingValgtPanel numBehandlinger={fagsakData.getAlleBehandlinger().length} />} />
  </Routes>
);

export default BehandlingerIndex;
