import React, {
  useCallback, FunctionComponent, useState, useEffect,
} from 'react';
import {
  Link, Route, Routes, useNavigate,
} from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { Heading } from '@navikt/ds-react';
import { NotFoundPage } from '@navikt/ft-sak-infosider';

import SaksbehandlerIndex from '@navikt/fp-los-saksbehandler';
import JournalforingIndex from '@navikt/fp-journalforing';
import AvdelingslederIndex from '@navikt/fp-los-avdelingsleder';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { NavAnsatt } from '@navikt/fp-types';

import {
  aktoerRoutePath, fagsakRoutePath, getFagsakHref, journalføringRoutePath, avdelingslederRoutePath,
} from '../paths';
import FagsakIndex from '../../fagsak/FagsakIndex';
import AktoerIndex from '../../aktoer/AktoerIndex';
import FagsakSearchIndex from '../../fagsakSearch/FagsakSearchIndex';

import styles from './home.less';

interface OwnProps {
  headerHeight: number;
  navAnsatt?: NavAnsatt;
}

/**
 * Home
 *
 * Wrapper for sideinnholdet som vises under header.
 */
const Home: FunctionComponent<OwnProps> = ({
  headerHeight,
  navAnsatt,
}) => {
  const intl = useIntl();
  const { addErrorMessage } = useRestApiErrorDispatcher();

  const [erLosTilgjengelig, setLosErTilgjengelig] = useState(true);
  const setLosErIkkeTilgjengelig = useCallback(() => { setLosErTilgjengelig(false); }, []);

  useEffect(() => {
    if (!erLosTilgjengelig) {
      addErrorMessage(intl.formatMessage({ id: 'Los.IkkeTilgjengelig' }));
    }
  }, [erLosTilgjengelig]);

  const navigate = useNavigate();
  const åpneFagsak = useCallback((saksnummer: string, behandlingUuid?: string) => {
    navigate(getFagsakHref(saksnummer, behandlingUuid));
  }, [navigate]);

  return (
    <div className={styles.content} style={{ margin: `${headerHeight}px auto 0` }}>
      <Routes>
        <Route
          path="/"
          element={erLosTilgjengelig
            ? <SaksbehandlerIndex setLosErIkkeTilgjengelig={setLosErIkkeTilgjengelig} åpneFagsak={åpneFagsak} kanSaksbehandle={navAnsatt?.kanSaksbehandle} />
            : <FagsakSearchIndex />}
        />
        <Route
          path={avdelingslederRoutePath}
          element={erLosTilgjengelig
            ? <AvdelingslederIndex setLosErIkkeTilgjengelig={setLosErIkkeTilgjengelig} navAnsatt={navAnsatt} />
            : <Heading size="small"><FormattedMessage id="Los.IkkeTilgjengelig" /></Heading>}
        />
        <Route
          path={journalføringRoutePath}
          element={<JournalforingIndex navAnsatt={navAnsatt} åpneFagsak={åpneFagsak} />}
        />
        <Route path={fagsakRoutePath} element={<FagsakIndex />} />
        <Route path={aktoerRoutePath} element={<AktoerIndex />} />
        <Route path="*" element={<NotFoundPage renderSomLenke={(tekst) => <Link to="/">{tekst}</Link>} />} />
      </Routes>
    </div>
  );
};

export default Home;
