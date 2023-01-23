import React, { FunctionComponent } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { NavAnsatt } from '@fpsak-frontend/types';
import { Heading } from '@navikt/ds-react';
import messages from '../i18n/nb_NO.json';
import JournalforingPanel from './components/JournalforingPanel';
import OppgaveIndex from './components/OppgaveIndex';
import OppgaveOversikt from './typer/oppgaveOversiktTsType';

const intl = createIntl(messages);

interface OwnProps {
  valgtAvdelingEnhet?: string;
  navAnsatt: NavAnsatt;
  behandlendeEnheter?: any;
}

const oppgaver = [
  {
    id: 600,
    tildeltEnhetsnr: '4816',
    journalpostId: '12345125',
    aktoerId: '9996923456799',
    beskrivelse: 'Journalføring',
    tema: 'FOR',
    oppgavetype: 'Journalføring',
    opprettetDato: '2022-01-01',
    frist: '2022-02-01',
    status: 'ÅPEN',
    prioritet: 'NORMAL',
  },
  {
    id: 631,
    tildeltEnhetsnr: '4819',
    journalpostId: '828546',
    aktoerId: '19358140968134',
    beskrivelse: 'Journalføring',
    tema: 'FOR',
    oppgavetype: 'Journalføring',
    opprettetDato: '2022-06-01',
    frist: '2022-08-15',
    status: 'ÅPEN',
    prioritet: 'NORMAL',
  },
  {
    id: 640,
    tildeltEnhetsnr: '4815',
    journalpostId: '4287227',
    aktoerId: '365438761+1',
    beskrivelse: 'Journalføring',
    tema: 'SVP',
    oppgavetype: 'Journalføring',
    opprettetDato: '2022-12-01',
    frist: '2022-12-02',
    status: 'ÅPEN',
    prioritet: 'HØY',
  },
] as OppgaveOversikt[];

/**
 * SaksbehandlerIndex
 */
const JournalforingIndex: FunctionComponent<OwnProps> = ({
  navAnsatt,
}) => {
  if (!navAnsatt) {
    return null;
  }
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
