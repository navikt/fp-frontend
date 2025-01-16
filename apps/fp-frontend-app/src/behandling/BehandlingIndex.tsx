import { Suspense, useEffect } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { Behandling } from '@navikt/fp-types';

import { ErrorBoundary } from '../app/ErrorBoundary';
import { useTrackRouteParam } from '../app/useTrackRouteParam';
import { getAccessRights } from '../app/util/access';
import { useRestApiErrorDispatcher } from '../data/error/RestApiErrorContext';
import { initFetchOptions } from '../data/fagsakApi';
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
  setBehandlingUuidFraUrl: (uuid: string) => void;
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
  setBehandlingUuidFraUrl,
}: Props) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { selected: behandlingUuid } = useTrackRouteParam<string>({
    paramName: 'behandlingUuid',
    parse: behandlingUuidFromUrl => behandlingUuidFromUrl,
  });

  useEffect(() => {
    setBehandlingUuidFraUrl(behandlingUuid);
  }, [behandlingUuid]);

  const initFetchQuery = useQuery(initFetchOptions());

  if (!behandling) {
    return <LoadingPanel />;
  }

  const fagsak = fagsakData.getFagsak();
  const rettigheter = getAccessRights(
    notEmpty(initFetchQuery.data).innloggetBruker,
    fagsak.status,
    behandling?.status,
    behandling?.type,
  );

  if (behandling.erAktivPapirsoknad) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingPapirsoknadIndex
            key={behandling.uuid}
            behandling={behandling}
            setBehandling={setBehandling}
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
        fagsak={fagsak}
        rettigheter={rettigheter}
        setBehandling={setBehandling}
        hentOgSettBehandling={hentOgSettBehandling}
        alleBehandlinger={fagsakData.getAlleBehandlinger()}
      />
    </ErrorBoundary>
  );
};
