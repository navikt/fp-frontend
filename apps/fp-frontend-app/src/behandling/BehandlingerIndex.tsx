import { Route, Routes } from 'react-router-dom';

import { IngenBehandlingValgtPanel } from '@navikt/fp-sak-infosider';
import type { Behandling } from '@navikt/fp-types';

import { behandlingRoutePath } from '../app/paths';
import { FagsakData } from '../fagsak/FagsakData';
import { BehandlingIndex } from './BehandlingIndex';

interface Props {
  fagsakData: FagsakData;
  setBehandling: (behandling: Behandling) => void;
  hentOgSettBehandling: () => void;
  behandling?: Behandling;
  setBehandlingUuidFraUrl: (uuid: string) => void;
}

export const BehandlingerIndex = ({
  fagsakData,
  setBehandling,
  behandling,
  hentOgSettBehandling,
  setBehandlingUuidFraUrl,
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
          setBehandlingUuidFraUrl={setBehandlingUuidFraUrl}
        />
      }
    />
    <Route path="/" element={<IngenBehandlingValgtPanel numBehandlinger={fagsakData.getAlleBehandlinger().length} />} />
  </Routes>
);
