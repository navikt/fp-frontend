import React, { FunctionComponent } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { Heading } from '@navikt/ds-react';
import { NavAnsatt } from '@navikt/fp-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import messages from '../i18n/nb_NO.json';
import JournalforingPanel from './components/JournalforingPanel';
import OppgaveIndex from './components/OppgaveIndex';
import { RestApiPathsKeys, restApiHooks, requestApi } from './data/fpfordelRestApi';

const intl = createIntl(messages);

interface OwnProps {
  navAnsatt: NavAnsatt;
}

/**
 * JournalforingIndex - Toppkomponent, orkestrerer restkall for journalføring
 */
const JournalforingIndex: FunctionComponent<OwnProps> = ({
  navAnsatt,
}) => {
  const alleJournalføringsoppgaverKall = restApiHooks.useRestApi(RestApiPathsKeys.ALLE_JOURNAL_OPPGAVER, { avdelingEnhet: undefined });
  const { addErrorMessage } = useRestApiErrorDispatcher();
  requestApi.setAddErrorMessageHandler(addErrorMessage);
  if (alleJournalføringsoppgaverKall.state === RestApiState.NOT_STARTED || alleJournalføringsoppgaverKall.state === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  if (!navAnsatt || alleJournalføringsoppgaverKall.state !== RestApiState.SUCCESS) {
    return null;
  }
  return (
    <RawIntlProvider value={intl}>
      <JournalforingPanel>
        <Heading size="medium">
          <FormattedMessage id="Journalforing.Tittel" />
        </Heading>
        <OppgaveIndex oppgaver={alleJournalføringsoppgaverKall.data} />
      </JournalforingPanel>
    </RawIntlProvider>
  );
};

export default JournalforingIndex;
