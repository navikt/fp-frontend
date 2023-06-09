import React, { FunctionComponent, useEffect } from 'react';
import { AksessRettigheter, AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';

import RegistrerPapirsoknad from './RegistrerPapirsoknad';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';

const useSetBehandlingVedEndring = (setBehandling: (behandling: Behandling) => void, behandling?: Behandling): void => {
  useEffect(() => {
    if (behandling) {
      setBehandling(behandling);
    }
  }, [behandling]);
};

type OwnProps = {
  behandling: Behandling;
  setBehandling: (behandling: Behandling) => void;
  kodeverk: AlleKodeverk;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
};

const BehandlingPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  behandling,
  setBehandling,
  kodeverk,
  fagsak,
  rettigheter,
}) => {
  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.SAVE_AKSJONSPUNKT,
  );
  useSetBehandlingVedEndring(setBehandling, apBehandlingRes);

  return (
    <RegistrerPapirsoknad
      behandling={behandling}
      fagsak={fagsak}
      kodeverk={kodeverk}
      rettigheter={rettigheter}
      lagreAksjonspunkt={lagreAksjonspunkter}
    />
  );
};

export default BehandlingPapirsoknadIndex;
