import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { ErrorType, useRestApiErrorDispatcher } from '@navikt/fp-app-felles';
import { OppgaveJournalføringIndex } from '@navikt/fp-journalforing-old';
import { SaksbehandlerIndex } from '@navikt/fp-los-saksbehandler';
import { NotFoundPage } from '@navikt/fp-sak-infosider';
import type { NavAnsatt } from '@navikt/fp-types';
import { UtbetalingsdataIs15Index } from '@navikt/fp-utbetalingsdata-is15';
import { notEmpty } from '@navikt/fp-utils';

import { AktørIndex } from '../../aktoer/AktørIndex';
import { useFagsakApi } from '../../data/fagsakApi';
import { RequestPendingProvider } from '../../data/polling/RequestPendingContext';
import { FagsakIndex } from '../../fagsak/FagsakIndex';
import { FagsakSearchIndex } from '../../fagsakSearch/FagsakSearchIndex';
import {
  aktoerRoutePath,
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

  const [erLosTilgjengelig, setErLosTilgjengelig] = useState(true);
  const setLosErIkkeTilgjengelig = () => {
    setErLosTilgjengelig(false);
  };

  useEffect(() => {
    if (!erLosTilgjengelig) {
      addErrorMessage({ type: ErrorType.GENERAL_ERROR, message: intl.formatMessage({ id: 'Los.IkkeTilgjengelig' }) });
    }
  }, [erLosTilgjengelig]);

  const navigate = useNavigate();
  const åpneFagsak = (saksnummer: string, behandlingUuid?: string) => {
    void navigate(getFagsakHref(saksnummer, behandlingUuid));
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
    <div className={styles['content']} style={{ margin: `${headerHeight}px auto 0` }}>
      <Routes>
        <Route
          path="/"
          element={
            erLosTilgjengelig ? (
              <SaksbehandlerIndex
                setLosErIkkeTilgjengelig={setLosErIkkeTilgjengelig}
                åpneFagsak={åpneFagsak}
                navAnsatt={notEmpty(navAnsatt)}
              />
            ) : (
              <FagsakSearchIndex />
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
