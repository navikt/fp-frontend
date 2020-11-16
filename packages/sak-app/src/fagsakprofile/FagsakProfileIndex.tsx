import React, {
  FunctionComponent, useState, useEffect, useCallback,
} from 'react';
import { Redirect } from 'react-router-dom';
import { Location } from 'history';

import { LoadingPanel, requireProps } from '@fpsak-frontend/shared-components';
import BehandlingVelgerSakIndex from '@fpsak-frontend/sak-behandling-velger';
import FagsakProfilSakIndex from '@fpsak-frontend/sak-fagsak-profil';
import {
  KodeverkMedNavn, Fagsak, Aksjonspunkt, Risikoklassifisering, BehandlingAppKontekst,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import useLocation from '../app/useLocation';
import useRouteMatch from '../app/useRouteMatch';
import {
  getLocationWithDefaultProsessStegAndFakta,
  pathToBehandling,
  pathToBehandlinger,
} from '../app/paths';
import BehandlingMenuIndex from '../behandlingmenu/BehandlingMenuIndex';
import RisikoklassifiseringIndex from './risikoklassifisering/RisikoklassifiseringIndex';
import { FpsakApiKeys, restApiHooks, requestApi } from '../data/fpsakApi';
import { useFpSakKodeverkMedNavn, useGetKodeverkFn } from '../data/useKodeverk';
import SakRettigheter from '../fagsak/sakRettigheterTsType';
import BehandlingRettigheter from '../behandling/behandlingRettigheterTsType';

import styles from './fagsakProfileIndex.less';

const findPathToBehandling = (saksnummer: number, location: Location, alleBehandlinger: BehandlingAppKontekst[]) => {
  if (alleBehandlinger.length === 1) {
    return getLocationWithDefaultProsessStegAndFakta({
      ...location,
      pathname: pathToBehandling(saksnummer, alleBehandlinger[0].id),
    });
  }
  return pathToBehandlinger(saksnummer);
};

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  behandlingId?: number;
  behandlingVersjon?: number;
  harHentetBehandlinger: boolean;
  oppfriskBehandlinger: () => void;
  fagsakRettigheter: SakRettigheter;
  behandlingRettigheter?: BehandlingRettigheter;
}

export const FagsakProfileIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger,
  harHentetBehandlinger,
  behandlingId,
  behandlingVersjon,
  oppfriskBehandlinger,
  fagsakRettigheter,
  behandlingRettigheter,
}) => {
  const [showAll, setShowAll] = useState(!behandlingId);
  const toggleShowAll = useCallback(() => setShowAll(!showAll), [showAll]);

  const getKodeverkFn = useGetKodeverkFn();

  const fagsakStatusMedNavn = useFpSakKodeverkMedNavn<KodeverkMedNavn>(fagsak.status);
  const fagsakYtelseTypeMedNavn = useFpSakKodeverkMedNavn<KodeverkMedNavn>(fagsak.sakstype);

  const { data: risikoAksjonspunkt, state: risikoAksjonspunktState } = restApiHooks.useRestApi<Aksjonspunkt>(FpsakApiKeys.RISIKO_AKSJONSPUNKT, undefined, {
    updateTriggers: [behandlingId, behandlingVersjon],
    suspendRequest: !requestApi.hasPath(FpsakApiKeys.RISIKO_AKSJONSPUNKT),
  });
  const { data: kontrollresultat, state: kontrollresultatState } = restApiHooks.useRestApi<Risikoklassifisering>(FpsakApiKeys.KONTROLLRESULTAT, undefined, {
    updateTriggers: [behandlingId, behandlingVersjon],
    suspendRequest: !requestApi.hasPath(FpsakApiKeys.KONTROLLRESULTAT),
  });

  useEffect(() => {
    setShowAll(!behandlingId);
  }, [behandlingId]);

  const match = useRouteMatch();
  const shouldRedirectToBehandlinger = match.isExact;

  const location = useLocation();
  const getBehandlingLocation = useCallback((valgtBehandlingId) => getLocationWithDefaultProsessStegAndFakta({
    ...location,
    pathname: pathToBehandling(fagsak.saksnummer, valgtBehandlingId),
  }), [fagsak.saksnummer]);

  return (
    <div className={styles.panelPadding}>
      {!harHentetBehandlinger && (
        <LoadingPanel />
      )}
      {harHentetBehandlinger && shouldRedirectToBehandlinger && (
        <Redirect to={findPathToBehandling(fagsak.saksnummer, location, alleBehandlinger)} />
      )}
      {harHentetBehandlinger && !shouldRedirectToBehandlinger && (
        <FagsakProfilSakIndex
          saksnummer={fagsak.saksnummer}
          fagsakYtelseType={fagsakYtelseTypeMedNavn}
          fagsakStatus={fagsakStatusMedNavn}
          dekningsgrad={fagsak.dekningsgrad}
          renderBehandlingMeny={() => {
            if (!fagsakRettigheter) {
              return <LoadingPanel />;
            }
            return (
              <BehandlingMenuIndex
                fagsak={fagsak}
                alleBehandlinger={alleBehandlinger}
                behandlingId={behandlingId}
                behandlingVersjon={behandlingVersjon}
                oppfriskBehandlinger={oppfriskBehandlinger}
                behandlingRettigheter={behandlingRettigheter}
                sakRettigheter={fagsakRettigheter}
              />
            );
          }}
          renderBehandlingVelger={() => (
            <BehandlingVelgerSakIndex
              behandlinger={alleBehandlinger}
              getBehandlingLocation={getBehandlingLocation}
              noExistingBehandlinger={alleBehandlinger.length === 0}
              behandlingId={behandlingId}
              showAll={showAll}
              toggleShowAll={toggleShowAll}
              getKodeverkFn={getKodeverkFn}
            />
          )}
        />
      )}
      {(kontrollresultatState === RestApiState.LOADING || risikoAksjonspunktState === RestApiState.LOADING) && (
        <LoadingPanel />
      )}
      {(kontrollresultatState === RestApiState.SUCCESS && risikoAksjonspunktState === RestApiState.SUCCESS) && (
        <RisikoklassifiseringIndex
          fagsak={fagsak}
          alleBehandlinger={alleBehandlinger}
          risikoAksjonspunkt={risikoAksjonspunkt}
          kontrollresultat={kontrollresultat}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
        />
      )}
    </div>
  );
};

export default requireProps(['fagsak'], <LoadingPanel />)(FagsakProfileIndex);
