import React, { Suspense, useEffect, useMemo } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { Behandling } from '@navikt/fp-types';

import { ErrorBoundary } from '../app/ErrorBoundary';
import { useTrackRouteParam } from '../app/useTrackRouteParam';
import { getAccessRights } from '../app/util/access';
import { requestBehandlingApi } from '../data/behandlingContextApi';
import { FagsakApiKeys, restFagsakApiHooks } from '../data/fagsakContextApi';
import { FagsakData } from '../fagsak/FagsakData';
import { BehandlingPanelerIndex } from './BehandlingPanelerIndex';
import { lazyWithRetry } from './lazyUtils';

const BehandlingPapirsoknadIndex = lazyWithRetry(() => import('./papirsoknad/BehandlingPapirsoknadIndex'));

interface Props {
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
export const BehandlingIndex = ({
  behandling,
  setBehandling,
  hentOgSettBehandling,
  fagsakData,
  setRequestPendingMessage,
  setBehandlingUuid,
}: Props) => {
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
    [fagsak.status, behandling?.uuid, behandling?.status, behandling?.type],
  );

  if (!behandling) {
    return <LoadingPanel />;
  }

  if (behandling.erAktivPapirsoknad) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingPapirsoknadIndex
            key={behandling.uuid}
            behandling={behandling}
            setBehandling={setBehandling}
            kodeverk={kodeverk}
            fagsak={fagsak}
            rettigheter={rettigheter}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  return (
    <ErrorBoundary errorMessageCallback={addErrorMessage}>
      <BehandlingPanelerIndex
        key={behandling.uuid}
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
};
