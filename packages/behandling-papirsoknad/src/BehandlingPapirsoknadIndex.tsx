import React, {
  FunctionComponent,
} from 'react';

import { ReduxFormStateCleaner } from '@fpsak-frontend/behandling-felles';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import {
  StandardBehandlingProps, useBehandling, useInitBehandlingHandlinger, useInitRequestApi, useLagreAksjonspunkt,
} from '@fpsak-frontend/behandling-felles-ny';

import RegistrerPapirsoknad from './components/RegistrerPapirsoknad';
import { requestPapirsoknadApi, PapirsoknadApiKeys } from './data/papirsoknadApi';

interface OwnProps {
  fagsakPersonnummer: string;
}

const BehandlingPapirsoknadIndex: FunctionComponent<OwnProps & StandardBehandlingProps> = ({
  behandlingEventHandler,
  behandlingId,
  kodeverk,
  fagsak,
  fagsakPersonnummer,
  rettigheter,
  setRequestPendingMessage,
}) => {
  useInitRequestApi(requestPapirsoknadApi, setRequestPendingMessage);

  const {
    behandling, hentBehandling, setBehandling,
  } = useBehandling(
    requestPapirsoknadApi, PapirsoknadApiKeys.BEHANDLING_PAPIRSOKNAD, behandlingId,
  );

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(
    requestPapirsoknadApi, setBehandling, PapirsoknadApiKeys.SAVE_AKSJONSPUNKT,
  );

  useInitBehandlingHandlinger(requestPapirsoknadApi, PapirsoknadApiKeys, behandlingEventHandler, hentBehandling, setBehandling);

  if (!behandling) {
    return <LoadingPanel />;
  }

  return (
    <>
      <ReduxFormStateCleaner
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
      />
      <RegistrerPapirsoknad
        behandling={behandling}
        fagsak={fagsak}
        fagsakPersonnummer={fagsakPersonnummer}
        kodeverk={kodeverk}
        rettigheter={rettigheter}
        hentBehandling={hentBehandling}
        lagreAksjonspunkt={lagreAksjonspunkter}
      />
    </>
  );
};

export default BehandlingPapirsoknadIndex;
