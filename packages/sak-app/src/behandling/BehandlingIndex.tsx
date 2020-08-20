import React, {
  Suspense, FunctionComponent, useEffect, useCallback, useMemo,
} from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';

import { useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';
import { featureToggle } from '@fpsak-frontend/konstanter';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import FagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { replaceNorwegianCharacters, parseQueryString } from '@fpsak-frontend/utils';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import {
  KodeverkMedNavn, NavAnsatt, Fagsak,
} from '@fpsak-frontend/types';

import useTrackRouteParam from '../app/useTrackRouteParam';
import BehandlingAppKontekst from './behandlingAppKontekstTsType';
import getAccessRights from '../app/util/access';
import {
  getProsessStegLocation, getFaktaLocation, getLocationWithDefaultProsessStegAndFakta,
} from '../app/paths';
import { FpsakApiKeys, requestApi, restApiHooks } from '../data/fpsakApi';
import behandlingEventHandler from './BehandlingEventHandler';
import ErrorBoundary from './ErrorBoundary';

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

const getOppdaterProsessStegOgFaktaPanelIUrl = (history, location) => (prosessStegId, faktaPanelId) => {
  let newLocation;
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
 * Container-komponent. Er rot for for den delen av hovedvinduet som har innhold for en valgt behandling, og styrer livssyklusen til de mekanismene som er
 * relatert til den valgte behandlingen.
 *
 * Komponenten har ansvar å legge valgt behandlingId fra URL-en i staten.
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
      requestApi.injectPaths(behandling?.links);
      setBehandlingIdOgVersjon(behandlingId, behandlingVersjon);
    }
  }, [behandlingId]);

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const location = useLocation();
  const oppdaterBehandlingVersjon = useCallback((versjon) => setBehandlingIdOgVersjon(behandlingId, versjon), [behandlingId]);

  const fagsakInfo = {
    saksnummer: fagsak.saksnummer,
    fagsakStatus: fagsak.status,
    fagsakPerson: fagsak.person,
    fagsakYtelseType: fagsak.sakstype,
    kanRevurderingOpprettes: fagsak.kanRevurderingOpprettes,
    skalBehandlesAvInfotrygd: fagsak.skalBehandlesAvInfotrygd,
    isForeldrepengerFagsak: fagsak.sakstype.kode === FagsakYtelseType.FORELDREPENGER,
  };

  const kodeverk = restApiHooks.useGlobalStateRestApiData<{[key: string]: [KodeverkMedNavn]}>(FpsakApiKeys.KODEVERK);

  const featureToggles = restApiHooks.useGlobalStateRestApiData<{[key: string]: boolean}>(FpsakApiKeys.FEATURE_TOGGLE);
  const navAnsatt = restApiHooks.useGlobalStateRestApiData<NavAnsatt>(FpsakApiKeys.NAV_ANSATT);
  const rettigheter = useMemo(() => getAccessRights(navAnsatt, fagsak.status, behandling?.status, behandling?.type),
    [fagsak.status, behandlingId, behandling?.status, behandling?.type]);

  const history = useHistory();
  const opneSokeside = useCallback(() => { history.push('/'); }, []);
  const oppdaterProsessStegOgFaktaPanelIUrl = useCallback(getOppdaterProsessStegOgFaktaPanelIUrl(history, location), [location]);

  const query = parseQueryString(location.search);

  const defaultProps = {
    behandlingId,
    oppdaterBehandlingVersjon,
    behandlingEventHandler,
    kodeverk,
    fagsak: fagsakInfo,
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
            alleBehandlinger={fagsakBehandlingerInfo}
            {...defaultProps}
          />
        </ErrorBoundary>
      </Suspense>
    );
  }

  const fagsakBehandlingerInfo = alleBehandlinger
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
            skalBenytteFritekstBrevmal={featureToggles[featureToggle.BENYTT_FRITEKST_BREVMAL_FOR_KLAGE]}
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
            featureToggles={featureToggles}
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
            featureToggles={featureToggles}
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
            featureToggles={featureToggles}
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
