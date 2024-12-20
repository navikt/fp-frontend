import React, { useEffect } from 'react';

import { AksessRettigheter, AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';
import { RegistrerPapirsoknad } from './RegistrerPapirsoknad';

const useSetBehandlingVedEndring = (setBehandling: (behandling: Behandling) => void, behandling?: Behandling): void => {
  useEffect(() => {
    if (behandling) {
      setBehandling(behandling);
    }
  }, [behandling]);
};

type Props = {
  behandling: Behandling;
  setBehandling: (behandling: Behandling) => void;
  kodeverk: AlleKodeverk;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
};

const BehandlingPapirsoknadIndex = ({ behandling, setBehandling, kodeverk, fagsak, rettigheter }: Props) => {
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
