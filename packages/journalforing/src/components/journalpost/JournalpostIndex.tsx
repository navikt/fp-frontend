import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { useMutation } from '@tanstack/react-query';

import type { NavAnsatt } from '@navikt/fp-types';

import { hentBruker, oppdaterMedBruker } from '../../data/fpFordelApi';
import type { JournalførSubmitValue } from '../../typer/ferdigstillJournalføringSubmit';
import type { Journalpost } from '../../typer/journalpostTsType';
import type { Oppgave } from '../../typer/oppgaveTsType';
import type { ReserverOppgaveType } from '../../typer/reserverOppgaveType';
import { JournalpostDetaljer } from './JournalpostDetaljer';
import { DokumentIndex } from './pdf/DokumentIndex';

import styles from './journalpostIndex.module.css';

type Props = Readonly<{
  oppgave?: Oppgave;
  journalpost: Journalpost;
  avbrytVisningAvJournalpost: () => void;
  navAnsatt: NavAnsatt;
  submitJournalføring: (data: JournalførSubmitValue, erAlleredeJournalført: boolean) => void;
  reserverOppgave: (data: ReserverOppgaveType) => void;
  flyttTilGosys: (data: string) => void;
}>;

/**
 * JournalpostIndex - Komponent som holder på og styrer logikk rundt detaljert visning av journalpost
 */
export const JournalpostIndex = ({
  oppgave,
  journalpost,
  avbrytVisningAvJournalpost,
  submitJournalføring,
  navAnsatt,
  reserverOppgave,
  flyttTilGosys,
}: Props) => {
  const { mutate: knyttJournalpostTilBruker, data: journalpostOppdatertMedSøker } = useMutation({
    mutationFn: oppdaterMedBruker,
  });

  const {
    mutate: hentBrukerKall,
    data: hentetNavn,
    status: hentBrukerState,
  } = useMutation({
    mutationFn: hentBruker,
  });

  // Åpner første dokument som standard valg når vi er ferdig med å laste
  const { dokumenter } = journalpost;
  const valgtDokument = dokumenter && dokumenter.length > 0 ? dokumenter[0] : undefined;

  return (
    <div className={styles.container}>
      <div className={styles.oppgaveKolonne}>
        <VerticalSpacer sixteenPx />
        <JournalpostDetaljer
          avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
          journalpost={journalpostOppdatertMedSøker || journalpost}
          oppgave={oppgave}
          submitJournalføring={submitJournalføring}
          knyttJournalpostTilBruker={knyttJournalpostTilBruker}
          forhåndsvisBruker={(fødselsnummer: string) => {
            hentBrukerKall(fødselsnummer);
          }}
          brukerTilForhåndsvisning={hentetNavn}
          lasterBruker={hentBrukerState === 'pending'}
          reserverOppgave={reserverOppgave}
          navAnsatt={navAnsatt}
          flyttTilGosys={flyttTilGosys}
        />
      </div>
      {valgtDokument && (
        <div className={styles.pdfKolonne}>
          <VerticalSpacer sixteenPx />
          <DokumentIndex dokumenter={journalpost.dokumenter} />
        </div>
      )}
    </div>
  );
};
