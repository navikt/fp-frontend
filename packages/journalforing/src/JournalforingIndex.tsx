import React, { FunctionComponent, useEffect } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { Heading } from '@navikt/ds-react';
import { NavAnsatt } from '@navikt/fp-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import messages from '../i18n/nb_NO.json';
import JournalforingPanel from './components/JournalforingPanel';
import OppgaveIndex from './components/oppgaver/OppgaveIndex';
import { RestApiPathsKeys, restApiHooks, requestApi } from './data/fpfordelRestApi';
import OppgaveOversikt from './typer/oppgaveOversiktTsType';

const intl = createIntl(messages);
const TOM_ARRAY: OppgaveOversikt[] = [];

const tilatteBrukere = ['H137440', 'A138225', 'J116396', 'W119202'];

// Mildertidig intill tilganger er avklart og testing er ferdig
const harTilgangTilÅBrukeJournalføring = (navAnsatt: NavAnsatt): boolean => {
  const url = window.location.href;
  const erProd = url.includes('fpsak.intern.nav.no');
  if (!erProd) {
    return true;
  }
  return tilatteBrukere.includes(navAnsatt.brukernavn);
};

interface OwnProps {
  navAnsatt: NavAnsatt;
}

/**
 * JournalforingIndex - Toppkomponent, orkestrerer restkall for journalføring
 */
const JournalforingIndex: FunctionComponent<OwnProps> = ({
  navAnsatt,
}) => {
  const { startRequest: innhentAlleOppgaver, data: alleOppgaver = TOM_ARRAY, state: status } = restApiHooks.useRestApiRunner(RestApiPathsKeys.ALLE_JOURNAL_OPPGAVER);
  const { addErrorMessage } = useRestApiErrorDispatcher();
  requestApi.setAddErrorMessageHandler(addErrorMessage);

  useEffect(() => {
    if (harTilgangTilÅBrukeJournalføring(navAnsatt)) {
      innhentAlleOppgaver({ ident: navAnsatt?.brukernavn });
    }
  }, []);

  if (status === RestApiState.NOT_STARTED || status === RestApiState.LOADING) {
    return <LoadingPanel />;
  }
  if (!navAnsatt || !harTilgangTilÅBrukeJournalføring(navAnsatt)) {
    return (
      <Heading size="medium">
        <FormattedMessage id="Journalforing.Tilgang" />
      </Heading>
    );
  }
  if (status !== RestApiState.SUCCESS) {
    return null;
  }
  return (
    <RawIntlProvider value={intl}>
      <JournalforingPanel>
        <Heading size="medium">
          <FormattedMessage id="Journalforing.Tittel" />
        </Heading>
        <OppgaveIndex oppgaver={alleOppgaver} innhentAlleOppgaver={innhentAlleOppgaver} navAnsatt={navAnsatt} />
      </JournalforingPanel>
    </RawIntlProvider>
  );
};

export default JournalforingIndex;
