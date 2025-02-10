import { Suspense, use } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { parseQueryString } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { ErrorPage } from '@navikt/fp-sak-infosider';
import { notEmpty } from '@navikt/fp-utils';

import { ErrorBoundary } from '../app/ErrorBoundary';
import { useBehandlingApi } from '../data/behandlingApi';
import { useRestApiErrorDispatcher } from '../data/error/RestApiErrorContext';
import { BehandlingPaVent } from './felles/modaler/paVent/BehandlingPaVent';
import { BehandlingDataContext } from './felles/utils/behandlingDataContext';
import { lazyWithRetry } from './lazyUtils';

const ForeldrepengerPaneler = lazyWithRetry(() => import('./foreldrepenger/ForeldrepengerPaneler'));
const EngangsstonadPaneler = lazyWithRetry(() => import('./engangsstonad/EngangsstonadPaneler'));
const SvangerskapspengerPaneler = lazyWithRetry(() => import('./svangerskapspenger/SvangerskapspengerPaneler'));
const KlagePaneler = lazyWithRetry(() => import('./klage/KlagePaneler'));
const InnsynPaneler = lazyWithRetry(() => import('./innsyn/InnsynPaneler'));
const AnkePaneler = lazyWithRetry(() => import('./anke/AnkePaneler'));
const TilbakekrevingPaneler = lazyWithRetry(() => import('./tilbakekreving/TilbakekrevingPaneler'));

export const BehandlingPanelerIndex = () => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { alleKodeverk, behandling, fagsak } = use(BehandlingDataContext);

  const navigate = useNavigate();
  const location = useLocation();

  const erFørstegangssøknadEllerRevurdering =
    behandling.type === BehandlingType.FORSTEGANGSSOKNAD || behandling.type === BehandlingType.REVURDERING;

  const behandlingApi = useBehandlingApi(behandling);

  const arbeidsgivereOversiktQuery = useQuery(
    behandlingApi.arbeidsgiverOversiktOptions(behandling, erFørstegangssøknadEllerRevurdering),
  );
  const behandlingPersonoversiktQuery = useQuery(
    behandlingApi.behandlingPersonoversiktOptions(behandling, erFørstegangssøknadEllerRevurdering),
  );

  if (
    erFørstegangssøknadEllerRevurdering &&
    (arbeidsgivereOversiktQuery.isPending || behandlingPersonoversiktQuery.isPending)
  ) {
    return <LoadingPanel />;
  }

  if (arbeidsgivereOversiktQuery.isError || behandlingPersonoversiktQuery.isError) {
    return <ErrorPage />;
  }

  const arbeidsgivere = notEmpty(arbeidsgivereOversiktQuery.data).arbeidsgivere;
  const personoversikt = notEmpty(behandlingPersonoversiktQuery.data);

  const erTilbakekrevingsbehandling = erTilbakekreving(behandling.type);

  const query = parseQueryString(location.search);

  return (
    <>
      {!erTilbakekrevingsbehandling && (
        <BehandlingPaVent
          behandling={behandling}
          opneSokeside={() => {
            navigate('/');
          }}
          kodeverk={alleKodeverk}
        />
      )}
      {fagsak.fagsakYtelseType === FagsakYtelseType.FORELDREPENGER && erFørstegangssøknadEllerRevurdering && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <ForeldrepengerPaneler
              valgtProsessSteg={query['punkt']}
              valgtFaktaSteg={query['fakta']}
              arbeidsgivere={arbeidsgivere}
              personoversikt={personoversikt}
            />
          </ErrorBoundary>
        </Suspense>
      )}
      {fagsak.fagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER && erFørstegangssøknadEllerRevurdering && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <SvangerskapspengerPaneler
              valgtProsessSteg={query['punkt']}
              valgtFaktaSteg={query['fakta']}
              arbeidsgivere={arbeidsgivere}
              personoversikt={personoversikt}
            />
          </ErrorBoundary>
        </Suspense>
      )}
      {fagsak.fagsakYtelseType === FagsakYtelseType.ENGANGSSTONAD && erFørstegangssøknadEllerRevurdering && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <EngangsstonadPaneler
              valgtProsessSteg={query['punkt']}
              valgtFaktaSteg={query['fakta']}
              arbeidsgivere={arbeidsgivere}
              personoversikt={personoversikt}
            />
          </ErrorBoundary>
        </Suspense>
      )}
      {behandling.type === BehandlingType.DOKUMENTINNSYN && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <InnsynPaneler valgtProsessSteg={query['punkt']} />
          </ErrorBoundary>
        </Suspense>
      )}
      {behandling.type === BehandlingType.ANKE && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <AnkePaneler valgtProsessSteg={query['punkt']} valgtFaktaSteg={query['fakta']} />
          </ErrorBoundary>
        </Suspense>
      )}
      {behandling.type === BehandlingType.KLAGE && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <KlagePaneler valgtProsessSteg={query['punkt']} valgtFaktaSteg={query['fakta']} />
          </ErrorBoundary>
        </Suspense>
      )}
      {erTilbakekrevingsbehandling && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <TilbakekrevingPaneler valgtProsessSteg={query['punkt']} valgtFaktaSteg={query['fakta']} />
          </ErrorBoundary>
        </Suspense>
      )}
    </>
  );
};

const erTilbakekreving = (behandlingTypeKode?: string): boolean =>
  behandlingTypeKode === BehandlingType.TILBAKEKREVING ||
  behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING;
