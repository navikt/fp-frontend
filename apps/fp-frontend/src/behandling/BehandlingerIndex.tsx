import { Route, Routes } from 'react-router';

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
}

export const BehandlingerIndex = ({ fagsakData, setBehandling, behandling, hentOgSettBehandling }: Props) => (
  <Routes>
    <Route
      path={behandlingRoutePath}
      element={
        <BehandlingIndex
          fagsakData={fagsakData}
          behandling={behandling}
          setBehandling={setBehandling}
          hentOgSettBehandling={hentOgSettBehandling}
        />
      }
    />
    <Route path="/" element={<IngenBehandlingValgtPanel numBehandlinger={fagsakData.getAlleBehandlinger().length} />} />
  </Routes>
);
