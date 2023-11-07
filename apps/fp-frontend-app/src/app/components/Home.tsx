import React, { useCallback, FunctionComponent, useState, useEffect } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { Heading } from '@navikt/ds-react';
import { NotFoundPage } from '@navikt/ft-sak-infosider';

import { SaksbehandlerIndex } from '@navikt/fp-los-saksbehandler';
import { OppgaveJournalføringIndex } from '@navikt/fp-journalforing';
import { UtbetalingsdataIs15Index } from '@navikt/fp-utbetalingsdata-is15';
import { AvdelingslederIndex } from '@navikt/fp-los-avdelingsleder';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { NavAnsatt } from '@navikt/fp-types';

import {
  aktoerRoutePath,
  fagsakRoutePath,
  getFagsakHref,
  journalføringRoutePath,
  avdelingslederRoutePath,
  utbetalingsdataIs15RoutePath,
} from '../paths';
import FagsakIndex from '../../fagsak/FagsakIndex';
import AktoerIndex from '../../aktoer/AktoerIndex';
import FagsakSearchIndex from '../../fagsakSearch/FagsakSearchIndex';

import styles from './home.module.css';

interface OwnProps {
  headerHeight: number;
  navAnsatt?: NavAnsatt;
}

/**
 * Home
 *
 * Wrapper for sideinnholdet som vises under header.
 */
const Home: FunctionComponent<OwnProps> = ({ headerHeight, navAnsatt }) => {
  const intl = useIntl();
  const { addErrorMessage, removeErrorMessages } = useRestApiErrorDispatcher();

  const [erLosTilgjengelig, setLosErTilgjengelig] = useState(true);
  const setLosErIkkeTilgjengelig = useCallback(() => {
    setLosErTilgjengelig(false);
  }, []);

  useEffect(() => {
    if (!erLosTilgjengelig) {
      addErrorMessage(intl.formatMessage({ id: 'Los.IkkeTilgjengelig' }));
    }
  }, [erLosTilgjengelig]);

  const navigate = useNavigate();
  const åpneFagsak = useCallback(
    (saksnummer: string, behandlingUuid?: string) => {
      navigate(getFagsakHref(saksnummer, behandlingUuid));
    },
    [navigate],
  );

  const location = useLocation();
  useEffect(() => {
    // Fjern visning av feilmeldinger når en går tilbake til LOS-visning
    if (location.pathname === '/') {
      removeErrorMessages();
    }
  }, [location]);

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
        <Route path={utbetalingsdataIs15RoutePath} element={<UtbetalingsdataIs15Index navAnsatt={navAnsatt} />} />
        <Route path={fagsakRoutePath} element={<FagsakIndex />} />
        <Route path={aktoerRoutePath} element={<AktoerIndex />} />
        <Route path="*" element={<NotFoundPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />} />
      </Routes>
    </div>
  );
};

export default Home;
