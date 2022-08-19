import React, {
  FunctionComponent,
} from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import StandardBehandlingProps from '../felles/types/standardBehandlingProps';
import {
  useBehandling, useInitBehandlingHandlinger, useInitRequestApi, useLagreAksjonspunkt,
} from '../felles/utils/indexHooks';
import RegistrerPapirsoknad from './RegistrerPapirsoknad';
import { requestPapirsoknadApi } from './data/papirsoknadApi';

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
  } = useBehandling(requestPapirsoknadApi, behandlingUuid);

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(requestPapirsoknadApi, setBehandling);

  useInitBehandlingHandlinger(requestPapirsoknadApi, behandlingEventHandler, hentBehandling, setBehandling, behandling);

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
