import React, {
  FunctionComponent, useState, useEffect, useCallback,
} from 'react';
import {
  Navigate, NavLink, useLocation, useMatch,
} from 'react-router-dom';
import { Location } from 'history';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import BehandlingVelgerSakIndex from '@navikt/ft-sak-behandling-velger';
import FagsakProfilSakIndex from '@navikt/ft-sak-fagsak-profil';
import { Fagsak, BehandlingAppKontekst } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import UkjentAdresseMeldingIndex from '@fpsak-frontend/sak-ukjent-adresse';

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

import '@navikt/ft-sak-behandling-velger/dist/style.css';

const findPathToBehandling = (saksnummer: string, location: Location, alleBehandlinger: BehandlingAppKontekst[]) => {
  if (alleBehandlinger.length === 1) {
    return getLocationWithDefaultProsessStegAndFakta({
      ...location,
      pathname: pathToBehandling(saksnummer, alleBehandlinger[0].uuid),
    });
  }
  return pathToBehandlinger(saksnummer);
};

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  behandlingUuid?: string;
  behandlingVersjon?: number;
  harHentetBehandlinger: boolean;
  oppfriskBehandlinger: () => void;
  fagsakRettigheter: SakRettigheter;
  behandlingRettigheter?: BehandlingRettigheter;
  brukerManglerAdresse: boolean;
}

export const FagsakProfileIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger,
  harHentetBehandlinger,
  behandlingUuid,
  behandlingVersjon,
  oppfriskBehandlinger,
  fagsakRettigheter,
  behandlingRettigheter,
  brukerManglerAdresse,
}) => {
  const [showAll, setShowAll] = useState(!behandlingUuid);
  const toggleShowAll = useCallback(() => setShowAll(!showAll), [showAll]);

  const getKodeverkFn = useGetKodeverkFn();

  const fagsakStatusMedNavn = useFpSakKodeverkMedNavn(fagsak.status, KodeverkType.FAGSAK_STATUS);
  const fagsakYtelseTypeMedNavn = useFpSakKodeverkMedNavn(fagsak.fagsakYtelseType, KodeverkType.FAGSAK_YTELSE);

  const { data: risikoAksjonspunkt } = restApiHooks.useRestApi(FpsakApiKeys.RISIKO_AKSJONSPUNKT, undefined, {
    updateTriggers: [behandlingUuid, behandlingVersjon],
    suspendRequest: !requestApi.hasPath(FpsakApiKeys.RISIKO_AKSJONSPUNKT.name),
  });
  const { data: kontrollresultat } = restApiHooks.useRestApi(FpsakApiKeys.KONTROLLRESULTAT, undefined, {
    updateTriggers: [behandlingUuid, behandlingVersjon],
    suspendRequest: !requestApi.hasPath(FpsakApiKeys.KONTROLLRESULTAT.name),
  });

  useEffect(() => {
    setShowAll(!behandlingUuid);
  }, [behandlingUuid]);

  const match = useMatch('/fagsak/:saksnummer/');
  const shouldRedirectToBehandlinger = !!match;

  const location = useLocation();
  const getBehandlingLocation = useCallback((valgtBehandlingUuid) => getLocationWithDefaultProsessStegAndFakta({
    ...location,
    pathname: pathToBehandling(fagsak.saksnummer, valgtBehandlingUuid),
  }), [fagsak.saksnummer]);

  return (
    <div className={styles.panelPadding}>
      {brukerManglerAdresse && (
        <UkjentAdresseMeldingIndex />
      )}
      {!harHentetBehandlinger && (
        <LoadingPanel />
      )}
      {harHentetBehandlinger && shouldRedirectToBehandlinger && (
        <Navigate to={findPathToBehandling(fagsak.saksnummer, location, alleBehandlinger)} />
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
                behandlingUuid={behandlingUuid}
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
              behandlingUuid={behandlingUuid}
              skalViseAlleBehandlinger={showAll}
              toggleVisAlleBehandlinger={toggleShowAll}
              renderRadSomLenke={(className, behandlingInfoKomponent, uuid) => (
                <NavLink
                  className={className}
                  to={getBehandlingLocation(uuid)}
                  onClick={toggleShowAll}
                >
                  {behandlingInfoKomponent}
                </NavLink>
              )}
              getKodeverkMedNavn={getKodeverkFn}
            />
          )}
        />
      )}
      <RisikoklassifiseringIndex
        fagsak={fagsak}
        alleBehandlinger={alleBehandlinger}
        risikoAksjonspunkt={risikoAksjonspunkt}
        kontrollresultat={kontrollresultat}
        behandlingUuid={behandlingUuid}
        behandlingVersjon={behandlingVersjon}
      />
    </div>
  );
};

export default FagsakProfileIndex;
