import React, { FunctionComponent } from 'react';

import { FlexContainer } from '@navikt/ft-ui-komponenter';
import { NavAnsatt } from '@navikt/fp-types';

import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import OppgaveTabell from './oppgaver/OppgaveTabell';
import JournalpostIndex from './journalpost/JournalpostIndex';
import JournalførSubmitValue from '../typer/ferdigstillJournalføringSubmit';
import ReserverOppgaveType from '../typer/reserverOppgaveType';

type OwnProps = Readonly<{
  oppgaver: OppgaveOversikt[];
  innhentAlleOppgaver: (param: { ident: string }) => Promise<OppgaveOversikt[] | undefined>;
  navAnsatt: NavAnsatt;
  setValgtOppgave: (oppgave: OppgaveOversikt) => void;
  avbrytVisningAvJournalpost: () => void;
  valgtOppgave?: OppgaveOversikt;
  submitJournalføring: (data: JournalførSubmitValue) => void;
  reserverOppgave: (data: ReserverOppgaveType) => void;
}>;

/**
 * JournalføringIndex - Styrer logikk rundt valg av oppgave i listen med oppgaver
 */
const JournalføringIndex: FunctionComponent<OwnProps> = ({
  oppgaver,
  innhentAlleOppgaver,
  navAnsatt,
  valgtOppgave,
  setValgtOppgave,
  avbrytVisningAvJournalpost,
  submitJournalføring,
  reserverOppgave,
}) => (
  <FlexContainer>
    {!valgtOppgave && (
      <OppgaveTabell
        oppgaver={oppgaver}
        setValgtOppgave={setValgtOppgave}
        navAnsatt={navAnsatt}
        reserverOppgave={reserverOppgave}
      />
    )}
    {valgtOppgave && (
      <JournalpostIndex
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
        oppgave={valgtOppgave}
        innhentAlleOppgaver={innhentAlleOppgaver}
        navAnsatt={navAnsatt}
        submitJournalføring={submitJournalføring}
        oppdaterValgtOppgave={setValgtOppgave}
        reserverOppgave={reserverOppgave}
      />
    )}
  </FlexContainer>
);
export default JournalføringIndex;
