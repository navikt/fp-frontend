import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Heading } from '@navikt/ds-react';
import { useMutation } from '@tanstack/react-query';

import { OppgaveJournalføringIndex } from '@navikt/fp-journalforing';
import { AvdelingslederIndex } from '@navikt/fp-los-avdelingsleder';
import { SaksbehandlerIndex } from '@navikt/fp-los-saksbehandler';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api';
import { NotFoundPage } from '@navikt/fp-sak-infosider';
import { NavAnsatt } from '@navikt/fp-types';
import { UtbetalingsdataIs15Index } from '@navikt/fp-utbetalingsdata-is15';

import { AktørIndex } from '../../aktoer/AktørIndex';
import { useFagsakApi } from '../../data/fagsakApi';
import { RequestPendingProvider } from '../../data/polling/RequestPendingContext';
import { FagsakIndex } from '../../fagsak/FagsakIndex';
import { FagsakSearchIndex } from '../../fagsakSearch/FagsakSearchIndex';
import {
  aktoerRoutePath,
  avdelingslederRoutePath,
  fagsakRoutePath,
  getFagsakHref,
  journalføringRoutePath,
  utbetalingsdataIs15RoutePath,
} from '../paths';

import styles from './home.module.css';

interface Props {
  headerHeight: number;
  navAnsatt?: NavAnsatt;
}

/**
 * Home
 *
 * Wrapper for sideinnholdet som vises under header.
 */
export const Home = ({ headerHeight, navAnsatt }: Props) => {
  const intl = useIntl();
  const { søkInfotrygd } = useFagsakApi();
  const { addErrorMessage, removeErrorMessages } = useRestApiErrorDispatcher();

  const [erLosTilgjengelig, setLosErTilgjengelig] = useState(true);
  const setLosErIkkeTilgjengelig = () => {
    setLosErTilgjengelig(false);
  };

  useEffect(() => {
    if (!erLosTilgjengelig) {
      addErrorMessage(intl.formatMessage({ id: 'Los.IkkeTilgjengelig' }));
    }
  }, [erLosTilgjengelig]);

  const navigate = useNavigate();
  const åpneFagsak = (saksnummer: string, behandlingUuid?: string) => {
    navigate(getFagsakHref(saksnummer, behandlingUuid));
  };

  const location = useLocation();
  useEffect(() => {
    // Fjern visning av feilmeldinger når en går tilbake til LOS-visning
    if (location.pathname === '/') {
      removeErrorMessages();
    }
  }, [location]);

  const {
    mutate: søkInfotrygVedtak,
    isPending: søkInfotrygdIsPending,
    isSuccess: søkInfotrygdIsSuccess,
    data: infotrygdVedtak,
  } = useMutation({
    mutationFn: (valuesToSave: { searchString: string }) => søkInfotrygd(valuesToSave.searchString),
  });

  return (
    <div className={styles.content} style={{ margin: `${headerHeight}px auto 0` }}>
      <Routes>
        <Route
          path="/"
          element={
            erLosTilgjengelig ? (
              <SaksbehandlerIndex
                setLosErIkkeTilgjengelig={setLosErIkkeTilgjengelig}
                åpneFagsak={åpneFagsak}
                kanSaksbehandle={navAnsatt?.kanSaksbehandle || false}
              />
            ) : (
              <FagsakSearchIndex />
            )
          }
        />
        <Route
          path={avdelingslederRoutePath}
          element={
            erLosTilgjengelig ? (
              <AvdelingslederIndex setLosErIkkeTilgjengelig={setLosErIkkeTilgjengelig} navAnsatt={navAnsatt} />
            ) : (
              <Heading size="small">
                <FormattedMessage id="Los.IkkeTilgjengelig" />
              </Heading>
            )
          }
        />
        <Route path={journalføringRoutePath} element={<OppgaveJournalføringIndex navAnsatt={navAnsatt} />} />
        <Route
          path={utbetalingsdataIs15RoutePath}
          element={
            <UtbetalingsdataIs15Index
              søkInfotrygdVedtak={søkInfotrygVedtak}
              isPending={søkInfotrygdIsPending}
              isSuccess={søkInfotrygdIsSuccess}
              infotrygdVedtak={infotrygdVedtak}
            />
          }
        />
        <Route
          path={fagsakRoutePath}
          element={
            <RequestPendingProvider>
              <FagsakIndex />
            </RequestPendingProvider>
          }
        />
        <Route path={aktoerRoutePath} element={<AktørIndex />} />
        <Route path="*" element={<NotFoundPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />} />
      </Routes>
    </div>
  );
};
