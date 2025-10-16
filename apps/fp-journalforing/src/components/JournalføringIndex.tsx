import type { JournalførSubmitValue } from '../typer/ferdigstillJournalføringSubmit';
import type { Journalpost } from '../typer/journalpostTsType';
import type { Oppgave } from '../typer/oppgaveTsType';
import type { ReserverOppgaveType } from '../typer/reserverOppgaveType';
import { JournalpostIndex } from './journalpost/JournalpostIndex';
import { OppgaveTabell } from './oppgaver/OppgaveTabell';

import styles from './journalføringIndex.module.css';

type Props = Readonly<{
  ansattIdent: string;
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
  ansattIdent,
  valgtOppgave,
  valgtJournalpost,
  velgOppgaveOgHentJournalpost,
  avbrytVisningAvJournalpost,
  submitJournalføring,
  reserverOppgave,
  flyttTilGosys,
}: Props) => (
  <div>
    {!valgtJournalpost && (
      <div className={styles['sentrertInnhold']}>
        <OppgaveTabell
          velgOppgaveOgHentJournalpost={velgOppgaveOgHentJournalpost}
          ansattIdent={ansattIdent}
          reserverOppgave={reserverOppgave}
        />
      </div>
    )}
    {valgtJournalpost && (
      <JournalpostIndex
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
        oppgave={valgtOppgave}
        journalpost={valgtJournalpost}
        ansattIdent={ansattIdent}
        submitJournalføring={submitJournalføring}
        reserverOppgave={reserverOppgave}
        flyttTilGosys={flyttTilGosys}
      />
    )}
  </div>
);
