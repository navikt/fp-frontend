import React, {
  FunctionComponent, useState, useEffect, useCallback,
} from 'react';
import {
  Navigate, NavLink, useLocation, useMatch,
} from 'react-router-dom';
import { Location } from 'history';
import { useIntl } from 'react-intl';
import BehandlingVelgerSakIndex from '@navikt/ft-sak-behandling-velger';
import FagsakProfilSakIndex from '@navikt/ft-sak-fagsak-profil';
import { KodeverkType } from '@navikt/ft-kodeverk';

import { BehandlingAppKontekst } from '@navikt/fp-types';
import UkjentAdresseMeldingIndex from '@navikt/fp-sak-ukjent-adresse';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import {
  getLocationWithDefaultProsessStegAndFakta,
  pathToBehandling,
  pathToBehandlinger,
} from '../app/paths';
import BehandlingMenuIndex from '../behandlingmenu/BehandlingMenuIndex';
import RisikoklassifiseringIndex from './risikoklassifisering/RisikoklassifiseringIndex';
import { useFpSakKodeverkMedNavn, useGetKodeverkFn } from '../data/useKodeverk';
import FagsakData from '../fagsak/FagsakData';
import ErrorBoundary from '../app/ErrorBoundary';

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
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  hentFagsakdataPåNytt: () => void;
}

const FagsakProfileIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  behandlingUuid,
  behandlingVersjon,
  hentFagsakdataPåNytt,
}) => {
  const intl = useIntl();
  const [showAll, setShowAll] = useState(!behandlingUuid);
  const toggleShowAll = useCallback(() => setShowAll(!showAll), [showAll]);

  const getKodeverkFn = useGetKodeverkFn();

  const fagsak = fagsakData.getFagsak();
  const fagsakStatusMedNavn = useFpSakKodeverkMedNavn(fagsak.status, KodeverkType.FAGSAK_STATUS);
  const fagsakYtelseTypeMedNavn = useFpSakKodeverkMedNavn(fagsak.fagsakYtelseType, KodeverkType.FAGSAK_YTELSE);

  const { addErrorMessage } = useRestApiErrorDispatcher();

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
            <ErrorBoundary
              errorMessageCallback={addErrorMessage}
              errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Meny' })}
            >
              <BehandlingMenuIndex
                fagsakData={fagsakData}
                behandlingUuid={behandlingUuid}
                behandlingVersjon={behandlingVersjon}
                hentFagsakdataPåNytt={hentFagsakdataPåNytt}
              />
            </ErrorBoundary>
          )}
          renderBehandlingVelger={() => (
            <ErrorBoundary
              errorMessageCallback={addErrorMessage}
              errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Behandlingsvelger' })}
            >
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
            </ErrorBoundary>
          )}
        />
      )}
      <ErrorBoundary
        errorMessageCallback={addErrorMessage}
        errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Risikoklassifisering' })}
      >
        <RisikoklassifiseringIndex
          fagsakData={fagsakData}
          behandlingUuid={behandlingUuid}
          behandlingVersjon={behandlingVersjon}
        />
      </ErrorBoundary>
    </div>
  );
};

export default FagsakProfileIndex;
