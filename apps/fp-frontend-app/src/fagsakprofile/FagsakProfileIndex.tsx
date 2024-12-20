import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Navigate, NavLink, useLocation, useMatch } from 'react-router-dom';

import { HStack, VStack } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';
import { Location } from 'history';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { BehandlingVelgerSakIndex } from '@navikt/fp-sak-behandling-velger';
import { FagsakProfilSakIndex } from '@navikt/fp-sak-fagsak-profil';
import { UkjentAdresseMeldingIndex } from '@navikt/fp-sak-ukjent-adresse';
import { Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import { ErrorBoundary } from '../app/ErrorBoundary';
import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling, pathToBehandlinger } from '../app/paths';
import { BehandlingMenuIndex } from '../behandlingmenu/BehandlingMenuIndex';
import { initFetchOptions } from '../data/fagsakApi';
import { notEmpty } from '../data/notEmpty';
import { useFpSakKodeverkMedNavn, useGetKodeverkFn } from '../data/useKodeverk';
import { FagsakData } from '../fagsak/FagsakData';
import { EksterneRessurser } from './EksterneRessurser';
import { RisikoklassifiseringIndex } from './risikoklassifisering/RisikoklassifiseringIndex';

import styles from './fagsakProfileIndex.module.css';

const findPathToBehandling = (saksnummer: string, location: Location, alleBehandlinger: BehandlingAppKontekst[]) => {
  if (alleBehandlinger.length === 1) {
    return getLocationWithDefaultProsessStegAndFakta({
      ...location,
      pathname: pathToBehandling(saksnummer, alleBehandlinger[0].uuid),
    });
  }
  return pathToBehandlinger(saksnummer);
};

const finnFagsakMarkeringTekst = (fagsak: Fagsak): string[] => {
  if (!fagsak.fagsakMarkeringer) {
    return [];
  }
  return fagsak.fagsakMarkeringer.map(m => m.kortNavn).filter(navn => !!navn) as string[];
};

interface Props {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  setBehandling: (behandling: Behandling | undefined) => void;
  hentOgSettBehandling: () => void;
}

export const FagsakProfileIndex = ({
  fagsakData,
  behandlingUuid,
  behandlingVersjon,
  setBehandling,
  hentOgSettBehandling,
}: Props) => {
  const intl = useIntl();
  const [showAll, setShowAll] = useState(!behandlingUuid);
  const toggleShowAll = () => setShowAll(!showAll);

  const getKodeverkFn = useGetKodeverkFn();

  const fagsak = fagsakData.getFagsak();
  const fagsakStatusMedNavn = useFpSakKodeverkMedNavn(fagsak.status, KodeverkType.FAGSAK_STATUS);
  const fagsakYtelseTypeMedNavn = useFpSakKodeverkMedNavn(fagsak.fagsakYtelseType, KodeverkType.FAGSAK_YTELSE);

  const { data } = useQuery(initFetchOptions());

  const location = useLocation();

  const sakLinks = notEmpty(data).sakLinks;
  const arbeidstakerHref = sakLinks.find(l => l.rel === 'arbeidstaker-redirect')?.href;
  const ainntektHref = sakLinks.find(l => l.rel === 'ainntekt-redirect')?.href;

  const { addErrorMessage } = useRestApiErrorDispatcher();

  useEffect(() => {
    setShowAll(!behandlingUuid);
  }, [behandlingUuid]);

  const match = useMatch('/fagsak/:saksnummer/');
  const shouldRedirectToBehandlinger = !!match;

  const getBehandlingLocation = (valgtBehandlingUuid: string) =>
    getLocationWithDefaultProsessStegAndFakta({
      ...location,
      pathname: pathToBehandling(fagsak.saksnummer, valgtBehandlingUuid),
    });

  return (
    <div className={styles.panelPadding}>
      {fagsak.brukerManglerAdresse && <UkjentAdresseMeldingIndex />}
      {shouldRedirectToBehandlinger && (
        <Navigate to={findPathToBehandling(fagsak.saksnummer, location, fagsakData.getAlleBehandlinger())} />
      )}
      <VStack gap="5">
        {!shouldRedirectToBehandlinger && (
          <>
            <HStack justify="space-between" align="start">
              <div>
                <FagsakProfilSakIndex
                  saksnummer={fagsak.saksnummer}
                  fagsakYtelseType={fagsakYtelseTypeMedNavn}
                  fagsakStatus={fagsakStatusMedNavn}
                  dekningsgrad={fagsak.dekningsgrad}
                  fagsakMarkeringTekster={finnFagsakMarkeringTekst(fagsak)}
                />
              </div>
              <ErrorBoundary
                errorMessageCallback={addErrorMessage}
                errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Meny' })}
              >
                <BehandlingMenuIndex
                  fagsakData={fagsakData}
                  behandlingUuid={behandlingUuid}
                  setBehandling={setBehandling}
                  hentOgSettBehandling={hentOgSettBehandling}
                />
              </ErrorBoundary>
            </HStack>
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
                  <NavLink className={className} to={getBehandlingLocation(uuid)} onClick={toggleShowAll}>
                    {behandlingInfoKomponent}
                  </NavLink>
                )}
                getKodeverkMedNavn={getKodeverkFn}
              />
            </ErrorBoundary>
          </>
        )}
        <ErrorBoundary
          errorMessageCallback={addErrorMessage}
          errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Risikoklassifisering' })}
        >
          <RisikoklassifiseringIndex
            fagsakData={fagsakData}
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandlingVersjon}
            setBehandling={setBehandling}
          />
        </ErrorBoundary>
        <EksterneRessurser fagsak={fagsak} ainntektHref={ainntektHref} arbeidstakerHref={arbeidstakerHref} />
      </VStack>
      <VerticalSpacer sixteenPx />
    </div>
  );
};
