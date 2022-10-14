import React, {
  FunctionComponent, useState, useEffect, useCallback,
} from 'react';
import {
  Navigate, NavLink, useLocation, useMatch,
} from 'react-router-dom';
import { Location } from 'history';
import BehandlingVelgerSakIndex from '@navikt/ft-sak-behandling-velger';
import FagsakProfilSakIndex from '@navikt/ft-sak-fagsak-profil';
import { KodeverkType } from '@navikt/ft-kodeverk';

import { BehandlingAppKontekst } from '@fpsak-frontend/types';
import UkjentAdresseMeldingIndex from '@fpsak-frontend/sak-ukjent-adresse';

import {
  getLocationWithDefaultProsessStegAndFakta,
  pathToBehandling,
  pathToBehandlinger,
} from '../app/paths';
import BehandlingMenuIndex from '../behandlingmenu/BehandlingMenuIndex';
import RisikoklassifiseringIndex from './risikoklassifisering/RisikoklassifiseringIndex';
import { useFpSakKodeverkMedNavn, useGetKodeverkFn } from '../data/useKodeverk';

import styles from './fagsakProfileIndex.less';

import '@navikt/ft-sak-behandling-velger/dist/style.css';
import FagsakData from '../fagsak/FagsakData';

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
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  oppfriskBehandlinger: () => void;
}

const FagsakProfileIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  behandlingUuid,
  behandlingVersjon,
  oppfriskBehandlinger,
}) => {
  const [showAll, setShowAll] = useState(!behandlingUuid);
  const toggleShowAll = useCallback(() => setShowAll(!showAll), [showAll]);

  const getKodeverkFn = useGetKodeverkFn();

  const fagsak = fagsakData.getFagsak();
  const fagsakStatusMedNavn = useFpSakKodeverkMedNavn(fagsak.status, KodeverkType.FAGSAK_STATUS);
  const fagsakYtelseTypeMedNavn = useFpSakKodeverkMedNavn(fagsak.fagsakYtelseType, KodeverkType.FAGSAK_YTELSE);

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
      {fagsak.brukerManglerAdresse && (
        <UkjentAdresseMeldingIndex />
      )}
      {shouldRedirectToBehandlinger && (
        <Navigate to={findPathToBehandling(fagsak.saksnummer, location, fagsakData.getAlleBehandlinger())} />
      )}
      {!shouldRedirectToBehandlinger && (
        <FagsakProfilSakIndex
          saksnummer={fagsak.saksnummer}
          fagsakYtelseType={fagsakYtelseTypeMedNavn}
          fagsakStatus={fagsakStatusMedNavn}
          dekningsgrad={fagsak.dekningsgrad}
          renderBehandlingMeny={() => (
            <BehandlingMenuIndex
              fagsakData={fagsakData}
              behandlingUuid={behandlingUuid}
              behandlingVersjon={behandlingVersjon}
              oppfriskBehandlinger={oppfriskBehandlinger}
            />
          )}
          renderBehandlingVelger={() => (
            <BehandlingVelgerSakIndex
              behandlinger={fagsakData.getAlleBehandlinger()}
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
        fagsakData={fagsakData}
        behandlingUuid={behandlingUuid}
        behandlingVersjon={behandlingVersjon}
      />
    </div>
  );
};

export default FagsakProfileIndex;
