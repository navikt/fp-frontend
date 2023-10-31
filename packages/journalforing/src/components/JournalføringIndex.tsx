import React, { FunctionComponent } from 'react';

import { FlexContainer } from '@navikt/ft-ui-komponenter';
import { NavAnsatt } from '@navikt/fp-types';

import Oppgave from '../typer/oppgaveTsType';
import OppgaveTabell from './oppgaver/OppgaveTabell';
import JournalpostIndex from './journalpost/JournalpostIndex';
import JournalførSubmitValue from '../typer/ferdigstillJournalføringSubmit';
import ReserverOppgaveType from '../typer/reserverOppgaveType';
import Journalpost from '../typer/journalpostTsType';

type OwnProps = Readonly<{
  oppgaver: Oppgave[];
  navAnsatt: NavAnsatt;
  velgOppgaveOgHentJournalpost: (oppgave: Oppgave) => void;
  avbrytVisningAvJournalpost: () => void;
  valgtOppgave?: Oppgave;
  valgtJournalpost?: Journalpost;
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
  valgtJournalpost,
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
    {valgtJournalpost && valgtOppgave && (
      <JournalpostIndex
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
        oppgave={valgtOppgave}
        journalpost={valgtJournalpost}
        navAnsatt={navAnsatt}
        submitJournalføring={submitJournalføring}
        reserverOppgave={reserverOppgave}
        flyttTilGosys={flyttTilGosys}
      />
    )}
  </FlexContainer>
);
export default JournalføringIndex;
