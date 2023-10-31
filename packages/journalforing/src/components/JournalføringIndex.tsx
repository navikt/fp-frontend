import React, { FunctionComponent } from 'react';

import { FlexContainer } from '@navikt/ft-ui-komponenter';
import { NavAnsatt } from '@navikt/fp-types';

import Oppgave from '../typer/oppgaveTsType';
import OppgaveTabell from './oppgaver/OppgaveTabell';
import JournalpostIndex from './journalpost/JournalpostIndex';
import JournalførSubmitValue from '../typer/ferdigstillJournalføringSubmit';
import ReserverOppgaveType from '../typer/reserverOppgaveType';

type OwnProps = Readonly<{
  oppgaver: Oppgave[];
  navAnsatt: NavAnsatt;
  velgOppgaveOgHentJournalpost: (oppgave: Oppgave) => void;
  avbrytVisningAvJournalpost: () => void;
  valgtOppgave?: Oppgave;
  submitJournalføring: (data: JournalførSubmitValue) => void;
  reserverOppgave: (data: ReserverOppgaveType) => void;
  flyttTilGosys: (data: string) => void;
}>;

/**
 * JournalføringIndex - Styrer logikk rundt valg av oppgave i listen med oppgaver
 */
const JournalføringIndex: FunctionComponent<OwnProps> = ({
  oppgaver,
  navAnsatt,
  valgtOppgave,
  velgOppgaveOgHentJournalpost,
  avbrytVisningAvJournalpost,
  submitJournalføring,
  reserverOppgave,
  flyttTilGosys,
}) => (
  <FlexContainer>
    {!valgtOppgave && (
      <OppgaveTabell
        oppgaver={oppgaver}
        velgOppgaveOgHentJournalpost={velgOppgaveOgHentJournalpost}
        navAnsatt={navAnsatt}
        reserverOppgave={reserverOppgave}
      />
    )}
    {valgtOppgave && (
      <JournalpostIndex
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
        oppgave={valgtOppgave}
        navAnsatt={navAnsatt}
        submitJournalføring={submitJournalføring}
        reserverOppgave={reserverOppgave}
        flyttTilGosys={flyttTilGosys}
      />
    )}
  </FlexContainer>
);
export default JournalføringIndex;
