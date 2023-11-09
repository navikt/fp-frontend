import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { NavAnsatt } from '@navikt/fp-types';
import { restApiHooks, RestApiPathsKeys } from '../../data/fpfordelRestApi';
import OppgaveOversikt from '../../typer/oppgaveTsType';
import JournalpostDetaljer from './JournalpostDetaljer';
import styles from './journalpostIndex.module.css';
import Journalpost from '../../typer/journalpostTsType';
import JournalDokument from '../../typer/journalDokumentTsType';
import JournalførSubmitValue from '../../typer/ferdigstillJournalføringSubmit';
import DokumentIndex from './pdf/DokumentIndex';
import OppdaterMedBruker from '../../typer/oppdaterBrukerTsType';
import ReserverOppgaveType from '../../typer/reserverOppgaveType';

type OwnProps = Readonly<{
  oppgave?: OppgaveOversikt;
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
const JournalpostIndex: FunctionComponent<OwnProps> = ({
  oppgave,
  journalpost,
  avbrytVisningAvJournalpost,
  submitJournalføring,
  navAnsatt,
  reserverOppgave,
  flyttTilGosys,
}) => {
  const [valgtDokument, setValgtDokument] = useState<JournalDokument | undefined>(undefined);

  const { startRequest: oppdaterMedBrukerKall, data: journalpostOppdatertMedSøker } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.OPPDATER_MED_BRUKER,
  );

  const {
    startRequest: hentBrukerKall,
    data: hentetNavn,
    state: hentBrukerState,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.HENT_BRUKER);

  const knyttJournalpostTilBruker = useCallback(
    (data: OppdaterMedBruker) => {
      oppdaterMedBrukerKall(data);
    },
    [oppdaterMedBrukerKall],
  );

  const hentBrukerCallback = useCallback(
    (data: string) => {
      hentBrukerKall({ fødselsnummer: data });
    },
    [hentBrukerKall],
  );

  // Åpner første dokument som standard valg når vi er ferdig med å laste
  useEffect(() => {
    const doks = journalpost.dokumenter;
    const dok = doks && doks.length > 0 ? doks[0] : undefined;
    setValgtDokument(dok);
  }, [journalpost]);

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
          forhåndsvisBruker={hentBrukerCallback}
          brukerTilForhåndsvisning={hentetNavn}
          lasterBruker={hentBrukerState === RestApiState.LOADING}
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

export default JournalpostIndex;
