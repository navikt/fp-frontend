import React, {
  Suspense, FunctionComponent, useEffect, useCallback, useMemo,
} from 'react';
import { useNavigate, useLocation, NavigateFunction } from 'react-router-dom';
import { Location } from 'history';

import { useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import FagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { replaceNorwegianCharacters, parseQueryString } from '@fpsak-frontend/utils';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { Fagsak, BehandlingAppKontekst } from '@fpsak-frontend/types';

import useTrackRouteParam from '../app/useTrackRouteParam';
import getAccessRights from '../app/util/access';
import {
  getProsessStegLocation, getFaktaLocation, getLocationWithDefaultProsessStegAndFakta,
} from '../app/paths';
import {
  FpsakApiKeys, requestApi, restApiHooks, LinkCategory,
} from '../data/fpsakApi';
import behandlingEventHandler from './BehandlingEventHandler';
import ErrorBoundary from '../app/ErrorBoundary';

const BehandlingEngangsstonadIndex = React.lazy(() => import('@fpsak-frontend/behandling-es'));
const BehandlingForeldrepengerIndex = React.lazy(() => import('@fpsak-frontend/behandling-fp'));
const BehandlingSvangerskapspengerIndex = React.lazy(() => import('@fpsak-frontend/behandling-svp'));
const BehandlingInnsynIndex = React.lazy(() => import('@fpsak-frontend/behandling-innsyn'));
const BehandlingKlageIndex = React.lazy(() => import('@fpsak-frontend/behandling-klage'));
const BehandlingTilbakekrevingIndex = React.lazy(() => import(
  // @ts-ignore
  'fp_tilbake_frontend/BehandlingTilbakekrevingIndex' // eslint-disable-line import/no-unresolved
));
const BehandlingAnkeIndex = React.lazy(() => import('@fpsak-frontend/behandling-anke'));
const BehandlingPapirsoknadIndex = React.lazy(() => import('@fpsak-frontend/behandling-papirsoknad'));

const erTilbakekreving = (behandlingTypeKode?:string): boolean => behandlingTypeKode === BehandlingType.TILBAKEKREVING
  || behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING;

const formatName = (bpName = ''): string => replaceNorwegianCharacters(bpName.toLowerCase());

const getOppdaterProsessStegOgFaktaPanelIUrl = (
  location: Location,
  navigate: NavigateFunction,
) => (
  prosessStegId?: string,
  faktaPanelId?: string,
): void => {
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
  setBehandlingUuidOgVersjon: (behandlingUuid: string, behandlingVersjon: number) => void;
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  setRequestPendingMessage: (message?: string) => void;
}

/**
 * BehandlingIndex
 *
 * Er rot for for den delen av hovedvinduet som har innhold for en valgt behandling, og styrer livssyklusen til de mekanismene som er
 * relatert til den valgte behandlingen.
 */
const BehandlingIndex: FunctionComponent<OwnProps> = ({
  setBehandlingUuidOgVersjon,
  fagsak,
  alleBehandlinger,
  setRequestPendingMessage,
}) => {
  const { selected: behandlingUuid } = useTrackRouteParam<string>({
    paramName: 'behandlingUuid',
    parse: (behandlingUuidFromUrl) => behandlingUuidFromUrl,
  });

  const behandling = alleBehandlinger.find((b) => b.uuid === behandlingUuid);

  useEffect(() => {
    if (behandling) {
      requestApi.setLinks(behandling.links, LinkCategory.BEHANDLING);
      setBehandlingUuidOgVersjon(behandlingUuid, behandling.versjon);
    }
  }, [behandling]);

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const oppdaterBehandlingVersjon = useCallback((versjon) => setBehandlingUuidOgVersjon(behandlingUuid, versjon), [behandlingUuid]);

  const kodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);

  const fagsakPersoner = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.SAK_PERSONER);

  const navAnsatt = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.NAV_ANSATT);
  const rettigheter = useMemo(() => getAccessRights(navAnsatt, fagsak.status, behandling?.status, behandling?.type),
    [fagsak.status, behandlingUuid, behandling?.status, behandling?.type]);

  const location = useLocation();
  const navigate = useNavigate();
  const opneSokeside = useCallback(() => { navigate('/'); }, []);
  const oppdaterProsessStegOgFaktaPanelIUrl = useCallback(getOppdaterProsessStegOgFaktaPanelIUrl(location, navigate), [location, navigate]);

  const query = parseQueryString(location.search);

  const defaultProps = {
    key: behandlingUuid,
    behandlingUuid,
    oppdaterBehandlingVersjon,
    behandlingEventHandler,
    kodeverk,
    fagsak,
    rettigheter,
    opneSokeside,
    setRequestPendingMessage,
    oppdaterProsessStegOgFaktaPanelIUrl,
    valgtProsessSteg: query.punkt,
    valgtFaktaSteg: query.fakta,
  };
  const behandlingTypeKode = behandling?.type;

  const fagsakBehandlingerInfo = useMemo(() => alleBehandlinger
    .filter((b) => !b.behandlingHenlagt)
    .map((b) => ({
      uuid: b.uuid,
      type: b.type,
      status: b.status,
      opprettet: b.opprettet,
      avsluttet: b.avsluttet,
    })), [alleBehandlinger]);

  if (!behandlingUuid) {
    return <LoadingPanel />;
  }

  if (behandling?.erAktivPapirsoknad) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingPapirsoknadIndex
            {...defaultProps}
            fagsakPersonnummer={fagsakPersoner.bruker.fødselsnummer}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  if (behandlingTypeKode === BehandlingType.DOKUMENTINNSYN) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingInnsynIndex {...defaultProps} />
        </ErrorBoundary>
      </Suspense>
    );
  }

  if (behandlingTypeKode === BehandlingType.KLAGE) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingKlageIndex
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
            harApenRevurdering={fagsakBehandlingerInfo
              .some((b) => b.type === BehandlingType.REVURDERING && b.status !== BehandlingStatus.AVSLUTTET)}
            fagsakKjønn={fagsakPersoner.bruker.kjønn}
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  if (!!behandling && fagsak.fagsakYtelseType === FagsakYtelseType.ENGANGSSTONAD) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingEngangsstonadIndex
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  if (!!behandling && fagsak.fagsakYtelseType === FagsakYtelseType.FORELDREPENGER) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingForeldrepengerIndex
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  if (!!behandling && fagsak.fagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={addErrorMessage}>
          <BehandlingSvangerskapspengerIndex
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
