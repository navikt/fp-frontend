import React, { Suspense, FunctionComponent, useEffect, useMemo } from 'react';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { Behandling } from '@navikt/fp-types';
import useTrackRouteParam from '../app/useTrackRouteParam';
import getAccessRights from '../app/util/access';
import { FagsakApiKeys, restFagsakApiHooks } from '../data/fagsakContextApi';
import { requestBehandlingApi } from '../data/behandlingContextApi';
import ErrorBoundary from '../app/ErrorBoundary';
import FagsakData from '../fagsak/FagsakData';
import BehandlingPanelerIndex from './BehandlingPanelerIndex';
import lazyWithRetry from './lazyUtils';

const BehandlingPapirsoknadIndex = lazyWithRetry(() => import('./papirsoknad/BehandlingPapirsoknadIndex'));

interface OwnProps {
  behandling?: Behandling;
  setBehandling: (behandling: Behandling) => void;
  hentOgSettBehandling: () => void;
  fagsakData: FagsakData;
  setRequestPendingMessage: (message?: string) => void;
  setBehandlingUuid: (uuid: string) => void;
}

/**
 * BehandlingIndex
 *
 * Er rot for for den delen av hovedvinduet som har innhold for en valgt behandling.
 */
const BehandlingIndex: FunctionComponent<OwnProps> = ({
  behandling,
  setBehandling,
  hentOgSettBehandling,
  fagsakData,
  setRequestPendingMessage,
  setBehandlingUuid,
}) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  useEffect(() => {
    requestBehandlingApi.setRequestPendingHandler(setRequestPendingMessage);
    requestBehandlingApi.setAddErrorMessageHandler(addErrorMessage);
  }, []);

  const { selected: behandlingUuid } = useTrackRouteParam<string>({
    paramName: 'behandlingUuid',
    parse: behandlingUuidFromUrl => behandlingUuidFromUrl,
  });

  useEffect(() => {
    setBehandlingUuid(behandlingUuid);
  }, [behandlingUuid]);

  const kodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);
  const initFetchData = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);

  const fagsak = fagsakData.getFagsak();
  const rettigheter = useMemo(
    () => getAccessRights(initFetchData.innloggetBruker, fagsak.status, behandling?.status, behandling?.type),
    [fagsak.status, behandlingUuid, behandling?.status, behandling?.type],
  );

  if (!behandlingUuid) {
    return <LoadingPanel />;
  }

  if (behandling) {
    if (behandling?.erAktivPapirsoknad) {
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingPapirsoknadIndex
            key={behandlingUuid}
            behandling={behandling}
            setBehandling={setBehandling}
            kodeverk={kodeverk}
            fagsak={fagsak}
            rettigheter={rettigheter}
          />
        </ErrorBoundary>
      </Suspense>;
    }
    return (
      <ErrorBoundary errorMessageCallback={addErrorMessage}>
        <BehandlingPanelerIndex
          key={behandlingUuid}
          behandling={behandling}
          kodeverk={kodeverk}
          fagsak={fagsak}
          rettigheter={rettigheter}
          setBehandling={setBehandling}
          hentOgSettBehandling={hentOgSettBehandling}
          alleBehandlinger={fagsakData.getAlleBehandlinger()}
        />
      </ErrorBoundary>
    );
  }

  return null;
};

export default BehandlingIndex;
