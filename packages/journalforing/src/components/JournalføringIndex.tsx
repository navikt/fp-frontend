import React, { FunctionComponent } from 'react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { NavAnsatt } from '@navikt/fp-types';

import Oppgave from '../typer/oppgaveTsType';
import OppgaveTabell from './oppgaver/OppgaveTabell';
import JournalpostIndex from './journalpost/JournalpostIndex';
import JournalførSubmitValue from '../typer/ferdigstillJournalføringSubmit';
import ReserverOppgaveType from '../typer/reserverOppgaveType';
import Journalpost from '../typer/journalpostTsType';

import styles from './journalføringIndex.module.css';

type OwnProps = Readonly<{
  oppgaver: Oppgave[];
  navAnsatt: NavAnsatt;
  velgOppgaveOgHentJournalpost: (oppgave: Oppgave) => void;
  hentJournalpost: (journalpostId: string) => void;
  avbrytVisningAvJournalpost: () => void;
  valgtOppgave?: Oppgave;
  valgtJournalpost?: Journalpost;
  submitJournalføring: (data: JournalførSubmitValue, erAlleredeJournalført: boolean) => void;
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
  <>
    <VerticalSpacer sixteenPx />
    {!valgtJournalpost && (
      <div className={styles.sentrertInnhold}>
        <OppgaveTabell
          oppgaver={oppgaver}
          velgOppgaveOgHentJournalpost={velgOppgaveOgHentJournalpost}
          navAnsatt={navAnsatt}
          reserverOppgave={reserverOppgave}
        />
      </div>
    )}
    {valgtJournalpost && (
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
  </>
);
export default JournalføringIndex;
