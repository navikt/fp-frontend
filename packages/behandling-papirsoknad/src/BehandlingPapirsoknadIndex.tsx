import React, {
  FunctionComponent, useEffect, useState, useCallback,
} from 'react';

import {
  Rettigheter, ReduxFormStateCleaner, useSetBehandlingVedEndring,
} from '@fpsak-frontend/behandling-felles';
import {
  KodeverkMedNavn, Aksjonspunkt, Behandling, Fagsak, FagsakPerson,
} from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';

import RegistrerPapirsoknad from './components/RegistrerPapirsoknad';
import { restApiPapirsoknadHooks, requestPapirsoknadApi, PapirsoknadApiKeys } from './data/papirsoknadApi';

const papirsoknadData = [{ key: PapirsoknadApiKeys.AKSJONSPUNKTER }];

interface DataProps {
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
}

interface OwnProps {
  behandlingId: number;
  fagsak: Fagsak;
  fagsakPerson: FagsakPerson;
  kodeverk: {[key: string]: KodeverkMedNavn[]};
  rettigheter: Rettigheter;
  behandlingEventHandler: {
    setHandler: (events: {[key: string]: (params: any) => Promise<any> }) => void;
    clear: () => void;
  };
  setRequestPendingMessage: (message: string) => void;
}

const BehandlingPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  behandlingEventHandler,
  behandlingId,
  kodeverk,
  fagsak,
  fagsakPerson,
  rettigheter,
  setRequestPendingMessage,
}) => {
  const [nyOgForrigeBehandling, setBehandlinger] = useState<{ current?: Behandling; previous?: Behandling }>({ current: undefined, previous: undefined });
  const behandling = nyOgForrigeBehandling.current;
  const forrigeBehandling = nyOgForrigeBehandling.previous;

  const setBehandling = useCallback((nyBehandling) => {
    requestPapirsoknadApi.resetCache();
    requestPapirsoknadApi.setLinks(nyBehandling.links);
    setBehandlinger((prevState) => ({ current: nyBehandling, previous: prevState.current }));
  }, []);

  const { startRequest: hentBehandling, data: behandlingRes } = restApiPapirsoknadHooks
    .useRestApiRunner<Behandling>(PapirsoknadApiKeys.BEHANDLING_PAPIRSOKNAD);
  useSetBehandlingVedEndring(behandlingRes, setBehandling);

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { startRequest: nyBehandlendeEnhet } = restApiPapirsoknadHooks.useRestApiRunner(PapirsoknadApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET);
  const { startRequest: settBehandlingPaVent } = restApiPapirsoknadHooks.useRestApiRunner(PapirsoknadApiKeys.BEHANDLING_ON_HOLD);
  const { startRequest: taBehandlingAvVent } = restApiPapirsoknadHooks.useRestApiRunner<Behandling>(PapirsoknadApiKeys.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = restApiPapirsoknadHooks.useRestApiRunner(PapirsoknadApiKeys.HENLEGG_BEHANDLING);
  const { startRequest: settPaVent } = restApiPapirsoknadHooks.useRestApiRunner(PapirsoknadApiKeys.UPDATE_ON_HOLD);

  useEffect(() => {
    behandlingEventHandler.setHandler({
      endreBehandlendeEnhet: (params) => nyBehandlendeEnhet(params)
        .then(() => hentBehandling({ behandlingId }, true)),
      settBehandlingPaVent: (params) => settBehandlingPaVent(params)
        .then(() => hentBehandling({ behandlingId }, true)),
      taBehandlingAvVent: (params) => taBehandlingAvVent(params)
        .then((behandlingResTaAvVent) => setBehandling(behandlingResTaAvVent)),
      henleggBehandling: (params) => henleggBehandling(params),
    });

    requestPapirsoknadApi.setRequestPendingHandler(setRequestPendingMessage);
    requestPapirsoknadApi.setAddErrorMessageHandler(addErrorMessage);

    hentBehandling({ behandlingId }, false);

    return () => {
      behandlingEventHandler.clear();
    };
  }, []);

  const { startRequest: lagreAksjonspunkter, state: aksjonspunktState } = restApiPapirsoknadHooks
    .useRestApiRunner<Behandling>(PapirsoknadApiKeys.SAVE_AKSJONSPUNKT);

  const { data, state } = restApiPapirsoknadHooks.useMultipleRestApi<DataProps>(papirsoknadData,
    { keepData: true, updateTriggers: [behandling?.versjon], suspendRequest: !behandling });

  const hasNotFinished = state === RestApiState.LOADING || state === RestApiState.NOT_STARTED;
  if (!behandling || (hasNotFinished && data === undefined)) {
    return <LoadingPanel />;
  }

  return (
    <>
      <ReduxFormStateCleaner
        behandlingId={behandling.id}
        behandlingVersjon={hasNotFinished ? forrigeBehandling.versjon : behandling.versjon}
      />
      <RegistrerPapirsoknad
        behandling={hasNotFinished ? forrigeBehandling : behandling}
        aksjonspunkter={data.aksjonspunkter}
        fagsak={fagsak}
        fagsakPerson={fagsakPerson}
        kodeverk={kodeverk}
        rettigheter={rettigheter}
        settPaVent={settPaVent}
        hentBehandling={hentBehandling}
        lagreAksjonspunkt={lagreAksjonspunkter}
        erAksjonspunktLagret={aksjonspunktState === RestApiState.SUCCESS || aksjonspunktState === RestApiState.ERROR}
      />
    </>
  );
};

export default BehandlingPapirsoknadIndex;
