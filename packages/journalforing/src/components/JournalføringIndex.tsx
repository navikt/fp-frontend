import React from 'react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { NavAnsatt } from '@navikt/fp-types';

import { JournalførSubmitValue } from '../typer/ferdigstillJournalføringSubmit';
import { Journalpost } from '../typer/journalpostTsType';
import { Oppgave } from '../typer/oppgaveTsType';
import { ReserverOppgaveType } from '../typer/reserverOppgaveType';
import { JournalpostIndex } from './journalpost/JournalpostIndex';
import { OppgaveTabell } from './oppgaver/OppgaveTabell';

import styles from './journalføringIndex.module.css';

type Props = Readonly<{
  navAnsatt: NavAnsatt;
  velgOppgaveOgHentJournalpost: (oppgave: Oppgave) => void;
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
export const JournalføringIndex = ({
  navAnsatt,
  valgtOppgave,
  valgtJournalpost,
  velgOppgaveOgHentJournalpost,
  avbrytVisningAvJournalpost,
  submitJournalføring,
  reserverOppgave,
  flyttTilGosys,
}: Props) => (
  <div className={styles.container}>
    <VerticalSpacer sixteenPx />
    {!valgtJournalpost && (
      <div className={styles.sentrertInnhold}>
        <OppgaveTabell
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
  </div>
);
