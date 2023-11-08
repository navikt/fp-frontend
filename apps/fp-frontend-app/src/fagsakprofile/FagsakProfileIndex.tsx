import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';
import { Navigate, NavLink, useLocation, useMatch } from 'react-router-dom';
import { Location } from 'history';
import { FormattedMessage, useIntl } from 'react-intl';
import { Box, HStack, Spacer, Tag, Link, Heading } from '@navikt/ds-react';
import { BehandlingVelgerSakIndex } from '@navikt/ft-sak-behandling-velger';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { KodeverkType, FagsakMarkeringKode } from '@navikt/fp-kodeverk';
import { Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';
import { UkjentAdresseMeldingIndex } from '@navikt/fp-sak-ukjent-adresse';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { FagsakProfilSakIndex } from '@navikt/ft-sak-fagsak-profil';
import { AAREG_URL, AINNTEKT_URL, GOSYS_URL, MODIA_URL } from '@navikt/fp-konstanter';

import { FagsakApiKeys, restFagsakApiHooks } from '../data/fagsakContextApi';
import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling, pathToBehandlinger } from '../app/paths';
import BehandlingMenuIndex from '../behandlingmenu/BehandlingMenuIndex';
import RisikoklassifiseringIndex from './risikoklassifisering/RisikoklassifiseringIndex';
import { useFpSakKodeverkMedNavn, useGetKodeverkFn } from '../data/useKodeverk';
import FagsakData from '../fagsak/FagsakData';
import ErrorBoundary from '../app/ErrorBoundary';

import styles from './fagsakProfileIndex.module.css';

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

const finnFagsakMarkeringTekst = (fagsak: Fagsak): string | undefined => {
  if (!fagsak.fagsakMarkering || fagsak.fagsakMarkering === FagsakMarkeringKode.NASJONAL) {
    return undefined;
  }
  switch (fagsak.fagsakMarkering) {
    case FagsakMarkeringKode.EØS_BOSATT_NORGE:
      return 'EØS';
    case FagsakMarkeringKode.BOSATT_UTLAND:
      return 'Utland';
    case FagsakMarkeringKode.SAMMENSATT_KONTROLL:
      return 'Kontroll';
    case FagsakMarkeringKode.DØD_DØDFØDSEL:
      return 'Død';
    case FagsakMarkeringKode.SELVSTENDIG_NÆRING:
      return 'Næring';
    default:
      return undefined;
  }
};

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  setBehandling: (behandling: Behandling | undefined) => void;
  hentOgSettBehandling: () => void;
  oppdaterFagsak: () => void;
}

const FagsakProfileIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  behandlingUuid,
  behandlingVersjon,
  setBehandling,
  hentOgSettBehandling,
  oppdaterFagsak,
}) => {
  const intl = useIntl();
  const [showAll, setShowAll] = useState(!behandlingUuid);
  const toggleShowAll = useCallback(() => setShowAll(!showAll), [showAll]);

  const getKodeverkFn = useGetKodeverkFn();

  const fagsak = fagsakData.getFagsak();
  const fagsakStatusMedNavn = useFpSakKodeverkMedNavn(fagsak.status, KodeverkType.FAGSAK_STATUS);
  const fagsakYtelseTypeMedNavn = useFpSakKodeverkMedNavn(fagsak.fagsakYtelseType, KodeverkType.FAGSAK_YTELSE);

  const { sakLinks } = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);

  const location = useLocation();

  const arbeidstakerHref = sakLinks?.find(l => l.rel === 'arbeidstaker-redirect')?.href;
  const ainntektHref = sakLinks?.find(l => l.rel === 'ainntekt-redirect')?.href;

  const { addErrorMessage } = useRestApiErrorDispatcher();

  useEffect(() => {
    setShowAll(!behandlingUuid);
  }, [behandlingUuid]);

  const match = useMatch('/fagsak/:saksnummer/');
  const shouldRedirectToBehandlinger = !!match;

  const getBehandlingLocation = useCallback(
    (valgtBehandlingUuid: string) =>
      getLocationWithDefaultProsessStegAndFakta({
        ...location,
        pathname: pathToBehandling(fagsak.saksnummer, valgtBehandlingUuid),
      }),
    [fagsak.saksnummer],
  );

  return (
    <div className={styles.panelPadding}>
      {fagsak.brukerManglerAdresse && <UkjentAdresseMeldingIndex />}
      {shouldRedirectToBehandlinger && (
        <Navigate to={findPathToBehandling(fagsak.saksnummer, location, fagsakData.getAlleBehandlinger())} />
      )}
      {!shouldRedirectToBehandlinger && (
        <>
          <FlexContainer>
            <FlexRow spaceBetween>
              <FlexColumn>
                <FagsakProfilSakIndex
                  saksnummer={fagsak.saksnummer}
                  fagsakYtelseType={fagsakYtelseTypeMedNavn}
                  fagsakStatus={fagsakStatusMedNavn}
                  dekningsgrad={fagsak.dekningsgrad}
                  fagsakMarkeringTekst={finnFagsakMarkeringTekst(fagsak)}
                />
              </FlexColumn>
              <FlexColumn>
                <ErrorBoundary
                  errorMessageCallback={addErrorMessage}
                  errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Meny' })}
                >
                  <BehandlingMenuIndex
                    fagsakData={fagsakData}
                    behandlingUuid={behandlingUuid}
                    setBehandling={setBehandling}
                    hentOgSettBehandling={hentOgSettBehandling}
                    oppdaterFagsak={oppdaterFagsak}
                  />
                </ErrorBoundary>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
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
              // @ts-ignore TODO Ikkje send med ned heile kodeverket
              getKodeverkMedNavn={getKodeverkFn}
            />
          </ErrorBoundary>
        </>
      )}
      <VerticalSpacer sixteenPx />
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
      <VerticalSpacer sixteenPx />
      <Box padding="4" background="bg-subtle" borderRadius="medium medium medium medium">
        <HStack gap="2">
          <Heading size="xsmall">
            <FormattedMessage id="FagsakProfileIndex.Lenke" />
          </Heading>
          <Spacer />
          <Link href={MODIA_URL} target="_blank">
            <Tag size="small" variant="neutral-filled">
              <FormattedMessage id="FagsakProfileIndex.Modia" />
            </Tag>
          </Link>
          <Link href={GOSYS_URL} target="_blank">
            <Tag size="small" variant="neutral-filled">
              <FormattedMessage id="FagsakProfileIndex.Gosys" />
            </Tag>
          </Link>
          <Link href={ainntektHref ? `${ainntektHref}?saksnummer=${fagsak.saksnummer}` : AINNTEKT_URL} target="_blank">
            <Tag size="small" variant="neutral-filled">
              <FormattedMessage id="FagsakProfileIndex.AInntekt" />
            </Tag>
          </Link>
          <Link
            href={arbeidstakerHref ? `${arbeidstakerHref}?saksnummer=${fagsak.saksnummer}` : AAREG_URL}
            target="_blank"
          >
            <Tag size="small" variant="neutral-filled">
              <FormattedMessage id="FagsakProfileIndex.AAreg" />
            </Tag>
          </Link>
        </HStack>
      </Box>
    </div>
  );
};

export default FagsakProfileIndex;
