import { Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { ErrorBoundary, parseQueryString, useRestApiErrorDispatcher } from '@navikt/fp-app-felles';
import { ErrorPage } from '@navikt/fp-sak-infosider';
import { notEmpty } from '@navikt/fp-utils';

import { getBehandlingApi } from '../data/behandlingApi';
import { finnPanelConfig, skalHenteArbeidsgivere } from './behandlingPanelRegistry';
import { useBehandlingDataContext } from './felles/context/BehandlingDataContext';
import { BehandlingPaVent } from './felles/modaler/paVent/BehandlingPaVent';

export const BehandlingPanelerIndex = () => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { alleKodeverk, behandling, fagsak } = useBehandlingDataContext();

  const navigate = useNavigate();
  const location = useLocation();

  const panelConfig = finnPanelConfig(fagsak.fagsakYtelseType, behandling.type);
  const hentArbeidsgivere = skalHenteArbeidsgivere(panelConfig);
  const skalViseFellesPaVent = panelConfig?.skalViseFellesPaVent ?? true;

  const behandlingApi = getBehandlingApi(behandling);

  const arbeidsgivereOversiktQuery = useQuery(behandlingApi.arbeidsgiverOversiktOptions(behandling, hentArbeidsgivere));

  if (hentArbeidsgivere && arbeidsgivereOversiktQuery.isPending) {
    return <LoadingPanel />;
  }

  if (arbeidsgivereOversiktQuery.isError) {
    return <ErrorPage />;
  }

  const query = parseQueryString(location.search);
  const valgtProsessSteg = query['punkt'];
  const valgtFaktaSteg = query['fakta'];

  return (
    <>
      {skalViseFellesPaVent && (
        <BehandlingPaVent
          behandling={behandling}
          opneSokeside={() => {
            void navigate('/');
          }}
          kodeverk={alleKodeverk}
        />
      )}
      {panelConfig && (
        <Suspense fallback={<LoadingPanel />}>
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            {panelConfig.skalHenteArbeidsgivere
              ? panelConfig.render({
                  valgtProsessSteg,
                  valgtFaktaSteg,
                  arbeidsgivere: notEmpty(arbeidsgivereOversiktQuery.data?.arbeidsgivere),
                })
              : panelConfig.render({
                  valgtProsessSteg,
                  valgtFaktaSteg,
                })}
          </ErrorBoundary>
        </Suspense>
      )}
    </>
  );
};
