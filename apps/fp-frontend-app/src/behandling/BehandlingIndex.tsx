import React, { Suspense, FunctionComponent, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation, NavigateFunction } from 'react-router-dom';
import { Location } from 'history';
import { replaceNorwegianCharacters, parseQueryString } from '@navikt/ft-utils';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import { Behandling } from '@navikt/fp-types';
import useTrackRouteParam from '../app/useTrackRouteParam';
import getAccessRights from '../app/util/access';
import { getProsessStegLocation, getFaktaLocation, getLocationWithDefaultProsessStegAndFakta } from '../app/paths';
import { FagsakApiKeys, requestFagsakApi, restFagsakApiHooks, LinkCategory } from '../data/fagsakContextApi';
import { requestBehandlingApi } from '../data/behandlingContextApi';
import ErrorBoundary from '../app/ErrorBoundary';
import FagsakData from '../fagsak/FagsakData';
import ValgtBehandlingIndex from './ValgtBehandlingIndex';
import lazyWithRetry from './lazyUtils';

const BehandlingPapirsoknadIndex = lazyWithRetry(() => import('./papirsoknad/BehandlingPapirsoknadIndex'));

const formatName = (bpName = ''): string => replaceNorwegianCharacters(bpName.toLowerCase());

const getOppdaterProsessStegOgFaktaPanelIUrl =
  (location: Location, navigate: NavigateFunction) =>
  (prosessStegId?: string, faktaPanelId?: string): void => {
    let newLocation;
    if (prosessStegId === 'default') {
      newLocation = getLocationWithDefaultProsessStegAndFakta(location);
    } else if (prosessStegId) {
      newLocation = getProsessStegLocation(location)(formatName(prosessStegId));
    } else {
      newLocation = getProsessStegLocation(location)();
    }

    if (faktaPanelId === 'default') {
      newLocation = getFaktaLocation(newLocation)('default');
    } else if (faktaPanelId) {
      newLocation = getFaktaLocation(newLocation)(formatName(faktaPanelId));
    } else {
      newLocation = getFaktaLocation(newLocation)();
    }

    navigate(newLocation);
  };

interface OwnProps {
  setBehandling: (behandling: Behandling) => void;
  behandling?: Behandling;
  fagsakData: FagsakData;
  hentOgSettBehandling: () => void;
  setRequestPendingMessage: (message?: string) => void;
  setBehandlingUuid: (uuid: string) => void;
}

/**
 * BehandlingIndex
 *
 * Er rot for for den delen av hovedvinduet som har innhold for en valgt behandling, og styrer livssyklusen til de mekanismene som er
 * relatert til den valgte behandlingen.
 */
const BehandlingIndex: FunctionComponent<OwnProps> = ({
  setBehandling,
  behandling,
  fagsakData,
  hentOgSettBehandling,
  setRequestPendingMessage,
  setBehandlingUuid,
}) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  useEffect(() => {
    requestBehandlingApi.setRequestPendingHandler(setRequestPendingMessage);
    requestBehandlingApi.setAddErrorMessageHandler(addErrorMessage);
  });

  const { selected: behandlingUuid } = useTrackRouteParam<string>({
    paramName: 'behandlingUuid',
    parse: behandlingUuidFromUrl => behandlingUuidFromUrl,
  });

  useEffect(() => {
    setBehandlingUuid(behandlingUuid);
  }, [behandlingUuid]);

  const fagsak = fagsakData.getFagsak();
  const alleBehandlinger = fagsakData.getAlleBehandlinger();

  useEffect(() => {
    if (behandling) {
      requestFagsakApi.setLinks(behandling.links, LinkCategory.BEHANDLING);
    }
  }, [behandling]);

  const kodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);

  const initFetchData = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const rettigheter = useMemo(
    () => getAccessRights(initFetchData.innloggetBruker, fagsak.status, behandling?.status, behandling?.type),
    [fagsak.status, behandlingUuid, behandling?.status, behandling?.type],
  );

  const location = useLocation();
  const navigate = useNavigate();
  const opneSokeside = useCallback(() => {
    navigate('/');
  }, []);
  const oppdaterProsessStegOgFaktaPanelIUrl = useCallback(getOppdaterProsessStegOgFaktaPanelIUrl(location, navigate), [
    location,
    navigate,
  ]);

  const query = parseQueryString(location.search);

  if (!behandlingUuid) {
    return <LoadingPanel />;
  }

  /* if (erTilbakekreving(behandlingTypeKode)) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingTilbakekrevingIndex
            harApenRevurdering={fagsakBehandlingerInfo.some(
              b => b.type === BehandlingType.REVURDERING && b.status !== BehandlingStatus.AVSLUTTET,
            )}
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  } */

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
        <ValgtBehandlingIndex
          key={behandlingUuid}
          behandling={behandling}
          kodeverk={kodeverk}
          fagsak={fagsak}
          rettigheter={rettigheter}
          opneSokeside={opneSokeside}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
          valgtProsessSteg={query.punkt}
          valgtFaktaSteg={query.fakta}
          setBehandling={setBehandling}
          hentOgSettBehandling={hentOgSettBehandling}
          alleBehandlinger={alleBehandlinger}
        />
      </ErrorBoundary>
    );
  }

  return null;
};

export default BehandlingIndex;
