import { Suspense, use } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { parseQueryString } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { ErrorBoundary, useRestApiErrorDispatcher } from '@navikt/fp-app-felles';
import { ErrorPage } from '@navikt/fp-sak-infosider';
import { notEmpty } from '@navikt/fp-utils';

import { useBehandlingApi } from '../data/behandlingApi';
import { BehandlingDataContext } from './felles/context/BehandlingDataContext';
import { BehandlingPaVent } from './felles/modaler/paVent/BehandlingPaVent';
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

  const erFørstegangssøknadEllerRevurdering = behandling.type === 'BT-002' || behandling.type === 'BT-004';

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

  const erTilbakekrevingsbehandling = erTilbakekreving(behandling.type);

  const query = parseQueryString(location.search);

  return (
    <>
      {!erTilbakekrevingsbehandling && (
        <BehandlingPaVent
          behandling={behandling}
          opneSokeside={() => {
            void navigate('/');
          }}
          kodeverk={alleKodeverk}
        />
      )}
      {fagsak.fagsakYtelseType === 'FP' && erFørstegangssøknadEllerRevurdering && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <ForeldrepengerPaneler
              valgtProsessSteg={query['punkt']}
              valgtFaktaSteg={query['fakta']}
              arbeidsgivere={notEmpty(arbeidsgivereOversiktQuery.data).arbeidsgivere}
              personoversikt={notEmpty(behandlingPersonoversiktQuery.data)}
            />
          </ErrorBoundary>
        </Suspense>
      )}
      {fagsak.fagsakYtelseType === 'SVP' && erFørstegangssøknadEllerRevurdering && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <SvangerskapspengerPaneler
              valgtProsessSteg={query['punkt']}
              valgtFaktaSteg={query['fakta']}
              arbeidsgivere={notEmpty(arbeidsgivereOversiktQuery.data).arbeidsgivere}
              personoversikt={notEmpty(behandlingPersonoversiktQuery.data)}
            />
          </ErrorBoundary>
        </Suspense>
      )}
      {fagsak.fagsakYtelseType === 'ES' && erFørstegangssøknadEllerRevurdering && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <EngangsstonadPaneler
              valgtProsessSteg={query['punkt']}
              valgtFaktaSteg={query['fakta']}
              arbeidsgivere={notEmpty(arbeidsgivereOversiktQuery.data).arbeidsgivere}
              personoversikt={notEmpty(behandlingPersonoversiktQuery.data)}
            />
          </ErrorBoundary>
        </Suspense>
      )}
      {behandling.type === 'BT-006' && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <InnsynPaneler valgtProsessSteg={query['punkt']} />
          </ErrorBoundary>
        </Suspense>
      )}
      {behandling.type === 'BT-008' && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <AnkePaneler valgtProsessSteg={query['punkt']} valgtFaktaSteg={query['fakta']} />
          </ErrorBoundary>
        </Suspense>
      )}
      {behandling.type === 'BT-003' && (
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
  behandlingTypeKode === 'BT-007' || behandlingTypeKode === 'BT-009';
