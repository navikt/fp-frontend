import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IngenBehandlingValgtPanel } from '@navikt/fp-sak-infosider';
import { Behandling } from '@navikt/fp-types';

import { behandlingRoutePath } from '../app/paths';
import { BehandlingIndex } from './BehandlingIndex';
import { FagsakData } from '../fagsak/FagsakData';

interface Props {
  fagsakData: FagsakData;
  setBehandling: (behandling: Behandling) => void;
  hentOgSettBehandling: () => void;
  behandling?: Behandling;
  setRequestPendingMessage: (message?: string) => void;
  setBehandlingUuid: (uuid: string) => void;
}

export const BehandlingerIndex = ({
  fagsakData,
  setBehandling,
  behandling,
  hentOgSettBehandling,
  setRequestPendingMessage,
  setBehandlingUuid,
}: Props) => (
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
          setBehandlingUuid={setBehandlingUuid}
        />
      }
    />
    <Route path="/" element={<IngenBehandlingValgtPanel numBehandlinger={fagsakData.getAlleBehandlinger().length} />} />
  </Routes>
);
