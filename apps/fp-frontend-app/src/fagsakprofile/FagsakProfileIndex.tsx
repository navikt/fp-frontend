import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Navigate, NavLink, useLocation, useMatch } from 'react-router-dom';

import { HStack, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';
import type { Location } from 'history';

import { ReservasjonsstatusPanel } from '@navikt/fp-los-saksbehandler';
import { BehandlingVelgerSakIndex } from '@navikt/fp-sak-behandling-velger';
import { FagsakProfilSakIndex } from '@navikt/fp-sak-fagsak-profil';
import { UkjentAdresseMeldingIndex } from '@navikt/fp-sak-ukjent-adresse';
import type { Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { ErrorBoundary } from '../app/ErrorBoundary';
import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling, pathToBehandlinger } from '../app/paths';
import { BehandlingMenuIndex } from '../behandlingmenu/BehandlingMenuIndex';
import { useRestApiErrorDispatcher } from '../data/error/RestApiErrorContext';
import { initFetchOptions, useFagsakApi } from '../data/fagsakApi';
import { useFpSakKodeverk } from '../data/useKodeverk';
import { FagsakData } from '../fagsak/FagsakData';
import { EksterneRessurser } from './EksterneRessurser';
import { RisikoklassifiseringIndex } from './risikoklassifisering/RisikoklassifiseringIndex';

import styles from './fagsakProfileIndex.module.css';

const findPathToBehandling = (saksnummer: string, location: Location, alleBehandlinger: BehandlingAppKontekst[]) => {
  if (alleBehandlinger.length === 1) {
    return getLocationWithDefaultProsessStegAndFakta({
      ...location,
      pathname: pathToBehandling(saksnummer, alleBehandlinger[0]?.uuid),
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
  behandling?: Behandling;
  setBehandling: (behandling: Behandling | undefined) => void;
  hentOgSettBehandling: () => void;
  visSideMeny: boolean;
  toggleSideMeny: () => void;
  visUtvidetBehandlingDetaljer: boolean;
}

export const FagsakProfileIndex = ({
  fagsakData,
  behandlingUuid,
  behandling,
  setBehandling,
  hentOgSettBehandling,
  visSideMeny,
  toggleSideMeny,
  visUtvidetBehandlingDetaljer,
}: Props) => {
  const intl = useIntl();
  const [showAll, setShowAll] = useState(!behandlingUuid);
  const toggleShowAll = () => setShowAll(!showAll);

  const api = useFagsakApi();
  const { data: alleFpSakKodeverk } = useQuery(api.kodeverkOptions());
  const { data: alleKodeverkFpTilbake } = useQuery(api.fptilbake.kodeverkOptions());

  const fagsak = fagsakData.getFagsak();
  const fagsakStatusMedNavn = notEmpty(useFpSakKodeverk('FagsakStatus').find(k => k.kode === fagsak.status));
  const fagsakYtelseTypeMedNavn = notEmpty(
    useFpSakKodeverk('FagsakYtelseType').find(k => k.kode === fagsak.fagsakYtelseType),
  );

  const initFetchQuery = useQuery(initFetchOptions());

  const location = useLocation();

  const { sakLinks } = notEmpty(initFetchQuery.data);
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
      <VStack gap="space-20">
        {fagsak.brukerManglerAdresse && <UkjentAdresseMeldingIndex />}
        {shouldRedirectToBehandlinger && (
          <Navigate to={findPathToBehandling(fagsak.saksnummer, location, fagsakData.getAlleBehandlinger())} />
        )}
        {!shouldRedirectToBehandlinger && (
          <HStack justify="space-between" align="start">
            <div>
              <FagsakProfilSakIndex
                saksnummer={fagsak.saksnummer}
                fagsakYtelseType={fagsakYtelseTypeMedNavn}
                fagsakStatus={fagsakStatusMedNavn}
                dekningsgrad={fagsak.dekningsgrad}
                fagsakMarkeringTekster={finnFagsakMarkeringTekst(fagsak)}
                visSideMeny={visSideMeny}
                toggleSideMeny={toggleSideMeny}
              />
            </div>
            <ErrorBoundary
              errorMessageCallback={addErrorMessage}
              errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Meny' })}
            >
              <VStack gap="space-12">
                <BehandlingMenuIndex
                  fagsakData={fagsakData}
                  behandlingUuid={behandlingUuid}
                  setBehandling={setBehandling}
                  hentOgSettBehandling={hentOgSettBehandling}
                  behandling={behandling}
                />
                <ReservasjonsstatusPanel saksnummer={fagsak.saksnummer} behandlingUuid={behandlingUuid} />
              </VStack>
            </ErrorBoundary>
          </HStack>
        )}

        <VStack
          gap="space-24"
          className={
            visUtvidetBehandlingDetaljer ? styles.skjulUtvidetBehandlingDetaljer : styles.visUtvidetBehandlingDetaljer
          }
        >
          {!shouldRedirectToBehandlinger && (
            <div>
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
                  alleKodeverk={notEmpty(alleFpSakKodeverk)}
                  alleKodeverkTilbakekreving={notEmpty(alleKodeverkFpTilbake)}
                />
              </ErrorBoundary>
            </div>
          )}

          <ErrorBoundary
            errorMessageCallback={addErrorMessage}
            errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Risikoklassifisering' })}
          >
            <RisikoklassifiseringIndex fagsakData={fagsakData} behandling={behandling} setBehandling={setBehandling} />
          </ErrorBoundary>
          <EksterneRessurser fagsak={fagsak} ainntektHref={ainntektHref} arbeidstakerHref={arbeidstakerHref} />
        </VStack>
      </VStack>
    </div>
  );
};
