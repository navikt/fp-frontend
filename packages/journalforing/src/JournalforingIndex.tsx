import React, { FunctionComponent, useEffect, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { NavAnsatt } from '@fpsak-frontend/types';
import { Heading } from '@navikt/ds-react';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import messages from '../i18n/nb_NO.json';
import JournalforingPanel from './components/JournalforingPanel';
import OppgaveIndex from './components/OppgaveIndex';
import OppgaveOversikt from './typer/oppgaveOversiktTsType';
import { RestApiPathsKeys, restApiHooks } from './data/fpfordelRestApi';

const intl = createIntl(messages);

interface OwnProps {
  valgtAvdelingEnhet?: string;
  navAnsatt: NavAnsatt;
  behandlendeEnheter?: any;
}

/**
 * JournalforingIndex - Toppkomponent, orkestrerer restkall for journalføring
 */
const JournalforingIndex: FunctionComponent<OwnProps> = ({
  navAnsatt,
}) => {
  if (!navAnsatt) {
    return null;
  }

  const [oppgaver, setOppgaveListe] = useState<OppgaveOversikt[]>([]);
  const alleJournalføringsoppgaverKall = restApiHooks.useRestApi(RestApiPathsKeys.ALLE_JOURNAL_OPPGAVER, { avdelingEnhet: undefined }, { isCachingOn: true });

  useEffect(() => {
    if (alleJournalføringsoppgaverKall.state === RestApiState.SUCCESS) {
      const { data } = alleJournalføringsoppgaverKall;
      if (Array.isArray(data)) {
        setOppgaveListe(alleJournalføringsoppgaverKall.data);
      }
    }
  }, [alleJournalføringsoppgaverKall]);

  return (
    <RawIntlProvider value={intl}>
      <JournalforingPanel>
        <Heading size="medium">
          <FormattedMessage id="Journalforing.Tittel" />
        </Heading>
        <OppgaveIndex oppgaver={oppgaver} />
      </JournalforingPanel>
    </RawIntlProvider>
  );
};

export default JournalforingIndex;
