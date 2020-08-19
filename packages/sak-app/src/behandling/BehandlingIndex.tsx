import React, {
  Suspense, FunctionComponent, useEffect, useCallback, useMemo,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { Location } from 'history';
import { useLocation } from 'react-router';

import { featureToggle } from '@fpsak-frontend/konstanter';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import FagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import errorHandler from '@fpsak-frontend/error-api-redux';
import { replaceNorwegianCharacters, parseQueryString } from '@fpsak-frontend/utils';
import { LoadingPanel, requireProps } from '@fpsak-frontend/shared-components';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import {
  KodeverkMedNavn, NavAnsatt, Fagsak,
} from '@fpsak-frontend/types';

import BehandlingAppKontekst from './behandlingAppKontekstTsType';
import getAccessRights from '../app/util/access';
import {
  getProsessStegLocation, getFaktaLocation, getLocationWithDefaultProsessStegAndFakta,
} from '../app/paths';
import { FpsakApiKeys, requestApi, restApiHooks } from '../data/fpsakApi';
import {
  setUrlBehandlingId, setSelectedBehandlingIdOgVersjon, getUrlBehandlingId,
  oppdaterBehandlingVersjon as oppdaterVersjon,
} from './duck';
import behandlingEventHandler from './BehandlingEventHandler';
import ErrorBoundary from './ErrorBoundary';
import trackRouteParam from '../app/trackRouteParam';

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
  behandlingId: number;
  setBehandlingIdOgVersjon: (behandlingVersjon: number) => void;
  oppdaterBehandlingVersjon: (behandlingVersjon: number) => void;
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  visFeilmelding: (data: any) => void;
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
  behandlingId,
  setBehandlingIdOgVersjon,
  oppdaterBehandlingVersjon,
  fagsak,
  alleBehandlinger,
  visFeilmelding,
}) => {
  const behandlingVersjon = alleBehandlinger.some((b) => b.id === behandlingId)
    ? alleBehandlinger.find((b) => b.id === behandlingId).versjon : undefined;

  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);

  useEffect(() => {
    requestApi.injectPaths(behandling.links);
    setBehandlingIdOgVersjon(behandlingVersjon);
  }, [behandlingId]);

  const location = useLocation<Location>();

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
    valgtProsessSteg: query.punkt,
  };
  const behandlingTypeKode = behandling?.type ? behandling.type.kode : undefined;

  if (behandling?.erAktivPapirsoknad) {
    return (
      <Suspense fallback={<LoadingPanel />}>
        <ErrorBoundary errorMessageCallback={visFeilmelding}>
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
        <ErrorBoundary errorMessageCallback={visFeilmelding}>
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
        <ErrorBoundary errorMessageCallback={visFeilmelding}>
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
        <ErrorBoundary errorMessageCallback={visFeilmelding}>
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
        <ErrorBoundary errorMessageCallback={visFeilmelding}>
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
        <ErrorBoundary errorMessageCallback={visFeilmelding}>
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
        <ErrorBoundary errorMessageCallback={visFeilmelding}>
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
        <ErrorBoundary errorMessageCallback={visFeilmelding}>
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

const mapStateToProps = (state) => ({
  behandlingId: getUrlBehandlingId(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  oppdaterBehandlingVersjon: oppdaterVersjon,
  setBehandlingIdOgVersjon: setSelectedBehandlingIdOgVersjon,
  visFeilmelding: errorHandler.getErrorActionCreator(),
}, dispatch);

export default trackRouteParam({
  paramName: 'behandlingId',
  parse: (behandlingFromUrl) => Number.parseInt(behandlingFromUrl, 10),
  storeParam: setUrlBehandlingId,
  getParamFromStore: getUrlBehandlingId,
})(connect(mapStateToProps, mapDispatchToProps)(requireProps(['behandlingId'])(BehandlingIndex)));
