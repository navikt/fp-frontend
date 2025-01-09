import { Suspense, useEffect } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { Behandling } from '@navikt/fp-types';

import { ErrorBoundary } from '../app/ErrorBoundary';
import { useTrackRouteParam } from '../app/useTrackRouteParam';
import { getAccessRights } from '../app/util/access';
import { requestBehandlingApi } from '../data/behandlingContextApi';
import { initFetchOptions, useFagsakApi } from '../data/fagsakApi';
import { notEmpty } from '../data/notEmpty';
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

  const api = useFagsakApi();

  const { data: kodeverk } = useQuery(api.kodeverkOptions());
  const initFetchQuery = useQuery(initFetchOptions());

  const fagsak = fagsakData.getFagsak();
  const rettigheter = getAccessRights(
    notEmpty(initFetchQuery.data).innloggetBruker,
    fagsak.status,
    behandling?.status,
    behandling?.type,
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
        kodeverk={notEmpty(kodeverk)}
        fagsak={fagsak}
        rettigheter={rettigheter}
        setBehandling={setBehandling}
        hentOgSettBehandling={hentOgSettBehandling}
        alleBehandlinger={fagsakData.getAlleBehandlinger()}
      />
    </ErrorBoundary>
  );
};
