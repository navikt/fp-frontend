import React, {
  FunctionComponent,
} from 'react';

import {
  StandardBehandlingProps, useBehandling, useInitBehandlingHandlinger, useInitRequestApi, useLagreAksjonspunkt,
} from '@fpsak-frontend/behandling-felles';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import RegistrerPapirsoknad from './RegistrerPapirsoknad';
import { requestPapirsoknadApi, PapirsoknadApiKeys } from './data/papirsoknadApi';

interface OwnProps {
  fagsakPersonnummer: string;
}

const BehandlingPapirsoknadIndex: FunctionComponent<OwnProps & StandardBehandlingProps> = ({
  behandlingEventHandler,
  behandlingUuid,
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
    requestPapirsoknadApi, PapirsoknadApiKeys.BEHANDLING_PAPIRSOKNAD, behandlingUuid,
  );

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(
    requestPapirsoknadApi, setBehandling, PapirsoknadApiKeys.SAVE_AKSJONSPUNKT,
  );

  useInitBehandlingHandlinger(requestPapirsoknadApi, PapirsoknadApiKeys, behandlingEventHandler, hentBehandling, setBehandling, behandling);

  if (!behandling) {
    return <LoadingPanel />;
  }

  return (
    <RegistrerPapirsoknad
      behandling={behandling}
      fagsak={fagsak}
      fagsakPersonnummer={fagsakPersonnummer}
      kodeverk={kodeverk}
      rettigheter={rettigheter}
      hentBehandling={hentBehandling}
      lagreAksjonspunkt={lagreAksjonspunkter}
    />
  );
};

export default BehandlingPapirsoknadIndex;
