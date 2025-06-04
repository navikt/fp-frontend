import { Suspense, useEffect, useState } from 'react';
import { type NavigateFunction, useLocation, useNavigate } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { replaceNorwegianCharacters } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';
import type { Location } from 'history';

import type { Behandling } from '@navikt/fp-types';
import { notEmpty, useTrackRouteParam } from '@navikt/fp-utils';

import { ErrorBoundary } from '../app/ErrorBoundary';
import { getFaktaLocation, getLocationWithDefaultProsessStegAndFakta, getProsessStegLocation } from '../app/paths';
import { getAccessRights } from '../app/util/access';
import { useRestApiErrorDispatcher } from '../data/error/RestApiErrorContext';
import { initFetchOptions, useFagsakApi } from '../data/fagsakApi';
import { useBehandlingPollingOperasjoner } from '../data/polling/useBehandlingPollingOperasjoner';
import { FagsakData } from '../fagsak/FagsakData';
import { BehandlingPanelerIndex } from './BehandlingPanelerIndex';
import { BehandlingDataProvider } from './felles/utils/behandlingDataContext';
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
  const { selected: behandlingUuid } = useTrackRouteParam<string>({
    paramName: 'behandlingUuid',
  });

  useEffect(() => {
    setBehandlingUuidFraUrl(behandlingUuid);
  }, [behandlingUuid]);

  if (!behandling) {
    return <LoadingPanel />;
  }

  return (
    <BehandlingIndexWrapper
      behandling={behandling}
      setBehandling={setBehandling}
      hentOgSettBehandling={hentOgSettBehandling}
      fagsakData={fagsakData}
    />
  );
};

interface BehandlingIndexWrapperProps {
  behandling: Behandling;
  setBehandling: (behandling: Behandling) => void;
  hentOgSettBehandling: () => void;
  fagsakData: FagsakData;
}

export const BehandlingIndexWrapper = ({
  behandling,
  setBehandling,
  hentOgSettBehandling,
  fagsakData,
}: BehandlingIndexWrapperProps) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  const initFetchQuery = useQuery(initFetchOptions());

  const fagsak = fagsakData.getFagsak();
  const rettigheter = getAccessRights(
    notEmpty(initFetchQuery.data).innloggetBruker,
    fagsak.status,
    behandling.status,
    behandling.type,
  );

  const [skalOppdatereEtterBekreftelseAvAp, setSkalOppdatereEtterBekreftelseAvAp] = useState(true);

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useBehandlingPollingOperasjoner(
    behandling,
    oppdatertBehandling => {
      if (oppdatertBehandling && skalOppdatereEtterBekreftelseAvAp) {
        setBehandling(oppdatertBehandling);
      }
    },
  );

  const fagsakApi = useFagsakApi();
  const { data: kodeverk } = useQuery(fagsakApi.kodeverkOptions());

  const navigate = useNavigate();
  const location = useLocation();
  const oppdaterProsessStegOgFaktaPanelIUrl = getOppdaterProsessStegOgFaktaPanelIUrl(location, navigate);

  if (kodeverk === undefined) {
    return <LoadingPanel />;
  }

  return (
    <BehandlingDataProvider
      behandling={behandling}
      alleBehandlinger={fagsakData.getAlleBehandlinger()}
      fagsak={fagsak}
      rettigheter={rettigheter}
      alleKodeverk={kodeverk}
      lagreAksjonspunkter={lagreAksjonspunkter}
      lagreOverstyrteAksjonspunkter={lagreOverstyrteAksjonspunkter}
      setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
      hentOgSettBehandling={hentOgSettBehandling}
      oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
    >
      <>
        {behandling.erAktivPapirsoknad && (
          <Suspense fallback={<LoadingPanel />}>
            <ErrorBoundary errorMessageCallback={addErrorMessage}>
              <BehandlingPapirsoknadIndex key={behandling.uuid} />
            </ErrorBoundary>
          </Suspense>
        )}
        {!behandling.erAktivPapirsoknad && (
          <ErrorBoundary errorMessageCallback={addErrorMessage}>
            <BehandlingPanelerIndex key={behandling.uuid} />
          </ErrorBoundary>
        )}
      </>
    </BehandlingDataProvider>
  );
};

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

const formatName = (bpName = ''): string => replaceNorwegianCharacters(bpName.toLowerCase());
