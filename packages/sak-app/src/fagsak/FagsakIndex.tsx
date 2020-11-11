import React, {
  FunctionComponent, useState, useCallback,
} from 'react';
import { Route, Redirect } from 'react-router-dom';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import VisittkortSakIndex from '@fpsak-frontend/sak-visittkort';
import {
  KodeverkMedNavn, Personopplysninger, FamilieHendelseSamling, Fagsak, FagsakPerson, Kodeverk,
} from '@fpsak-frontend/types';

import { LoadingPanel, DataFetchPendingModal } from '@fpsak-frontend/shared-components';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

import BehandlingerIndex from '../behandling/BehandlingerIndex';
import useBehandlingEndret from '../behandling/useBehandligEndret';
import useTrackRouteParam from '../app/useTrackRouteParam';
import useLocation from '../app/useLocation';
import BehandlingSupportIndex from '../behandlingsupport/BehandlingSupportIndex';
import FagsakProfileIndex from '../fagsakprofile/FagsakProfileIndex';
import {
  pathToMissingPage, erUrlUnderBehandling, erBehandlingValgt, behandlingerPath, pathToAnnenPart,
} from '../app/paths';
import FagsakGrid from './components/FagsakGrid';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import useHentFagsakRettigheter from './useHentFagsakRettigheter';
import useHentAlleBehandlinger from './useHentAlleBehandlinger';
import BehandlingRettigheter from '../behandling/behandlingRettigheterTsType';

type AnnenPartBehandling = {
  saksnr: {
    verdi: number;
  };
  behandlingId: number;
};

const finnLenkeTilAnnenPart = (annenPartBehandling: AnnenPartBehandling): string => pathToAnnenPart(
  annenPartBehandling.saksnr.verdi, annenPartBehandling.behandlingId,
);

const erTilbakekreving = (behandlingType: Kodeverk): boolean => behandlingType && (BehandlingType.TILBAKEKREVING === behandlingType.kode
  || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType.kode);

/**
 * FagsakIndex
 *
 * Container komponent. Er rot for for fagsakdelen av hovedvinduet, og har ansvar å legge valgt saksnummer fra URL-en i staten.
 */
const FagsakIndex: FunctionComponent = () => {
  const [behandlingerTeller, setBehandlingTeller] = useState(0);
  const [requestPendingMessage, setRequestPendingMessage] = useState<string>();

  const [behandlingIdOgVersjon, setIdOgVersjon] = useState({ behandlingId: undefined, behandlingVersjon: undefined });
  const setBehandlingIdOgVersjon = useCallback((behandlingId, behandlingVersjon) => setIdOgVersjon({ behandlingId, behandlingVersjon }), []);
  const { behandlingId, behandlingVersjon } = behandlingIdOgVersjon;

  const oppfriskBehandlinger = useCallback(() => setBehandlingTeller(behandlingerTeller + 1), [behandlingerTeller]);

  const { selected: selectedSaksnummer } = useTrackRouteParam<number>({
    paramName: 'saksnummer',
    parse: (saksnummerFromUrl) => Number.parseInt(saksnummerFromUrl, 10),
  });

  const alleKodeverk = restApiHooks.useGlobalStateRestApiData<{[key: string]: [KodeverkMedNavn]}>(FpsakApiKeys.KODEVERK);

  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingId, behandlingVersjon);

  const { data: fagsakPerson, state: fagsakPersonState } = restApiHooks.useGlobalStateRestApi<FagsakPerson>(FpsakApiKeys.SAK_BRUKER,
    { saksnummer: selectedSaksnummer }, {
      updateTriggers: [selectedSaksnummer],
      suspendRequest: !selectedSaksnummer,
    });

  const { data: fagsak, state: fagsakState } = restApiHooks.useRestApi<Fagsak>(FpsakApiKeys.FETCH_FAGSAK, { saksnummer: selectedSaksnummer }, {
    updateTriggers: [selectedSaksnummer, behandlingId, behandlingVersjon],
    suspendRequest: !selectedSaksnummer || erBehandlingEndretFraUndefined,
    keepData: true,
  });

  const [fagsakRettigheter, harFerdighentetfagsakRettigheter] = useHentFagsakRettigheter(
    selectedSaksnummer, behandlingId, behandlingVersjon,
  );

  const [alleBehandlinger, harFerdighentetAlleBehandlinger] = useHentAlleBehandlinger(
    selectedSaksnummer, behandlingId, behandlingVersjon, behandlingerTeller,
  );

  const location = useLocation();
  const skalIkkeHenteData = !selectedSaksnummer || erUrlUnderBehandling(location) || (erBehandlingValgt(location) && !behandlingId);

  const options = {
    updateTriggers: [skalIkkeHenteData, behandlingId, behandlingVersjon],
    suspendRequest: skalIkkeHenteData,
    keepData: true,
  };

  const {
    data: behandlingPersonopplysninger, state: personopplysningerState,
  } = restApiHooks.useRestApi<Personopplysninger>(FpsakApiKeys.BEHANDLING_PERSONOPPLYSNINGER, undefined, options);
  const {
    data: behandlingFamilieHendelse, state: familieHendelseState,
  } = restApiHooks.useRestApi<FamilieHendelseSamling>(FpsakApiKeys.BEHANDLING_FAMILIE_HENDELSE, undefined, options);
  const {
    data: annenPartBehandling, state: annenPartState,
  } = restApiHooks.useRestApi<AnnenPartBehandling>(FpsakApiKeys.ANNEN_PART_BEHANDLING, { saksnummer: selectedSaksnummer }, options);

  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);

  const { data: behandlingRettigheter } = restApiHooks.useRestApi<BehandlingRettigheter>(
    FpsakApiKeys.BEHANDLING_RETTIGHETER, { uuid: behandling?.uuid }, options,
  );

  if (!fagsak) {
    if (fagsakState === RestApiState.NOT_STARTED || fagsakState === RestApiState.LOADING) {
      return <LoadingPanel />;
    }
    return <Redirect to={pathToMissingPage()} />;
  }
  if (fagsakPersonState === RestApiState.NOT_STARTED || fagsakPersonState === RestApiState.LOADING || !harFerdighentetfagsakRettigheter) {
    return <LoadingPanel />;
  }

  if (fagsak.saksnummer !== selectedSaksnummer) {
    return <Redirect to={pathToMissingPage()} />;
  }

  const harVerge = behandling ? behandling.harVerge : false;

  return (
    <>
      <FagsakGrid
        behandlingContent={(
          <Route
            strict
            path={behandlingerPath}
            render={(props) => (
              <BehandlingerIndex
                {...props}
                fagsak={fagsak}
                alleBehandlinger={alleBehandlinger}
                setBehandlingIdOgVersjon={setBehandlingIdOgVersjon}
                setRequestPendingMessage={setRequestPendingMessage}
              />
            )}
          />
        )}
        profileAndNavigationContent={(
          <FagsakProfileIndex
            fagsak={fagsak}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            alleBehandlinger={alleBehandlinger}
            harHentetBehandlinger={harFerdighentetAlleBehandlinger}
            oppfriskBehandlinger={oppfriskBehandlinger}
            fagsakRettigheter={fagsakRettigheter}
            behandlingRettigheter={behandlingRettigheter}
          />
        )}
        supportContent={(
          <BehandlingSupportIndex
            fagsak={fagsak}
            alleBehandlinger={alleBehandlinger}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            behandlingRettigheter={behandlingRettigheter}
          />
        )}
        visittkortContent={() => {
          if (skalIkkeHenteData) {
            return null;
          }

          if (personopplysningerState === RestApiState.LOADING || familieHendelseState === RestApiState.LOADING || annenPartState === RestApiState.LOADING) {
            return <LoadingPanel />;
          }

          return (
            <VisittkortSakIndex
              personopplysninger={behandlingPersonopplysninger}
              familieHendelse={behandlingFamilieHendelse}
              lenkeTilAnnenPart={annenPartBehandling ? finnLenkeTilAnnenPart(annenPartBehandling) : undefined}
              alleKodeverk={alleKodeverk}
              sprakkode={behandling?.sprakkode}
              fagsak={fagsak}
              fagsakPerson={fagsakPerson}
              harTilbakekrevingVerge={erTilbakekreving(behandling?.type) && harVerge}
            />
          );
        }}
      />
      {requestPendingMessage && <DataFetchPendingModal pendingMessage={requestPendingMessage} />}
    </>
  );
};

export default FagsakIndex;
