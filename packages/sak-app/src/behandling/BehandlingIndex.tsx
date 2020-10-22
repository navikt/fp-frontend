import React, {
  Suspense, FunctionComponent, useEffect, useCallback, useMemo,
} from 'react';
import { useHistory } from 'react-router-dom';

import { useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import FagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { replaceNorwegianCharacters, parseQueryString } from '@fpsak-frontend/utils';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import {
  KodeverkMedNavn, NavAnsatt, Fagsak, BehandlingAppKontekst,
} from '@fpsak-frontend/types';

import useTrackRouteParam from '../app/useTrackRouteParam';
import getAccessRights from '../app/util/access';
import {
  getProsessStegLocation, getFaktaLocation, getLocationWithDefaultProsessStegAndFakta,
} from '../app/paths';
import { FpsakApiKeys, requestApi, restApiHooks } from '../data/fpsakApi';
import behandlingEventHandler from './BehandlingEventHandler';
import ErrorBoundary from '../app/ErrorBoundary';

const BehandlingEngangsstonadIndex = React.lazy(() => import('@fpsak-frontend/behandling-es'));
const BehandlingForeldrepengerIndex = React.lazy(() => import('@fpsak-frontend/behandling-fp'));
const BehandlingSvangerskapspengerIndex = React.lazy(() => import('@fpsak-frontend/behandling-svp'));
const BehandlingInnsynIndex = React.lazy(() => import('@fpsak-frontend/behandling-innsyn'));
const BehandlingKlageIndex = React.lazy(() => import('@fpsak-frontend/behandling-klage'));
const BehandlingTilbakekrevingIndex = React.lazy(() => import('@fpsak-frontend/behandling-tilbakekreving'));
const BehandlingAnkeIndex = React.lazy(() => import('@fpsak-frontend/behandling-anke'));
const BehandlingPapirsoknadIndex = React.lazy(() => import('@fpsak-frontend/behandling-papirsoknad'));

const erTilbakekreving = (behandlingTypeKode) => behandlingTypeKode === BehandlingType.TILBAKEKREVING
  || behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING;
const formatName = (bpName = '') => replaceNorwegianCharacters(bpName.toLowerCase());

const getOppdaterProsessStegOgFaktaPanelIUrl = (history) => (prosessStegId, faktaPanelId) => {
  let newLocation;
  const { location } = history;
  if (prosessStegId === 'default') {
    newLocation = getLocationWithDefaultProsessStegAndFakta(location);
  } else if (prosessStegId) {
    newLocation = getProsessStegLocation(location)(formatName(prosessStegId));
  } else {
    newLocation = getProsessStegLocation(location)(null);
  }

  if (faktaPanelId === 'default') {
    newLocation = getFaktaLocation(newLocation)('default');
  } else if (faktaPanelId) {
    newLocation = getFaktaLocation(newLocation)(formatName(faktaPanelId));
  } else {
    newLocation = getFaktaLocation(newLocation)(null);
  }

  history.push(newLocation);
};

interface OwnProps {
  setBehandlingIdOgVersjon: (behandlingId: number, behandlingVersjon: number) => void;
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  setRequestPendingMessage: (message: string) => void;
}

/**
 * BehandlingIndex
 *
 * Er rot for for den delen av hovedvinduet som har innhold for en valgt behandling, og styrer livssyklusen til de mekanismene som er
 * relatert til den valgte behandlingen.
 */
const BehandlingIndex: FunctionComponent<OwnProps> = ({
  setBehandlingIdOgVersjon,
  fagsak,
  alleBehandlinger,
  setRequestPendingMessage,
}) => {
  const { selected: behandlingId } = useTrackRouteParam<number>({
    paramName: 'behandlingId',
    parse: (behandlingFromUrl) => Number.parseInt(behandlingFromUrl, 10),
  });

  const behandlingVersjon = alleBehandlinger.some((b) => b.id === behandlingId)
    ? alleBehandlinger.find((b) => b.id === behandlingId).versjon : undefined;

  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);

  useEffect(() => {
    if (behandling) {
      requestApi.addLinks(behandling.links);
      setBehandlingIdOgVersjon(behandlingId, behandlingVersjon);
    }
  }, [behandling]);

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const oppdaterBehandlingVersjon = useCallback((versjon) => setBehandlingIdOgVersjon(behandlingId, versjon), [behandlingId]);

  const kodeverk = restApiHooks.useGlobalStateRestApiData<{[key: string]: [KodeverkMedNavn]}>(FpsakApiKeys.KODEVERK);

  const navAnsatt = restApiHooks.useGlobalStateRestApiData<NavAnsatt>(FpsakApiKeys.NAV_ANSATT);
  const rettigheter = useMemo(() => getAccessRights(navAnsatt, fagsak.status, behandling?.status, behandling?.type),
    [fagsak.status, behandlingId, behandling?.status, behandling?.type]);

  const history = useHistory();
  const opneSokeside = useCallback(() => { history.push('/'); }, []);
  const oppdaterProsessStegOgFaktaPanelIUrl = useCallback(getOppdaterProsessStegOgFaktaPanelIUrl(history), [history]);

  const { location } = history;
  const query = parseQueryString(location.search);

  const defaultProps = {
    key: behandlingId,
    behandlingId,
    oppdaterBehandlingVersjon,
    behandlingEventHandler,
    kodeverk,
    fagsak,
    rettigheter,
    opneSokeside,
    setRequestPendingMessage,
    valgtProsessSteg: query.punkt,
  };
  const behandlingTypeKode = behandling?.type ? behandling.type.kode : undefined;

  if (!behandlingId) {
    return <LoadingPanel />;
  }

  if (behandling?.erAktivPapirsoknad) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingPapirsoknadIndex
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  if (behandlingTypeKode === BehandlingType.DOKUMENTINNSYN) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingInnsynIndex
            oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  const fagsakBehandlingerInfo = alleBehandlinger
    .filter((b) => !b.behandlingHenlagt)
    .map((b) => ({
      id: b.id,
      uuid: b.uuid,
      type: b.type,
      status: b.status,
      opprettet: b.opprettet,
      avsluttet: b.avsluttet,
    }));

  if (behandlingTypeKode === BehandlingType.KLAGE) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingKlageIndex
            oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
            alleBehandlinger={fagsakBehandlingerInfo}
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  if (behandlingTypeKode === BehandlingType.ANKE) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingAnkeIndex
            oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
            alleBehandlinger={fagsakBehandlingerInfo}
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  if (erTilbakekreving(behandlingTypeKode)) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingTilbakekrevingIndex
            oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
            harApenRevurdering={fagsakBehandlingerInfo
              .some((b) => b.type.kode === BehandlingType.REVURDERING && b.status.kode !== BehandlingStatus.AVSLUTTET)}
            valgtFaktaSteg={query.fakta}
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  if (fagsak.sakstype.kode === FagsakYtelseType.ENGANGSSTONAD) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingEngangsstonadIndex
            oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
            valgtFaktaSteg={query.fakta}
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  if (fagsak.sakstype.kode === FagsakYtelseType.FORELDREPENGER) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingForeldrepengerIndex
            oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
            valgtFaktaSteg={query.fakta}
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  if (fagsak.sakstype.kode === FagsakYtelseType.SVANGERSKAPSPENGER) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingSvangerskapspengerIndex
            oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
            valgtFaktaSteg={query.fakta}
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  // Not supported
  return null;
};

export default BehandlingIndex;
