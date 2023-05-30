import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';

import { FlexColumn, FlexContainer, FlexRow, LoadingPanel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { NavAnsatt } from '@navikt/fp-types';
import { restApiHooks, RestApiPathsKeys } from '../../data/fpfordelRestApi';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import JournalpostDetaljer from './JournalpostDetaljer';
import styles from './journalpostIndex.module.css';
import Journalpost from '../../typer/journalpostTsType';
import JournalDokument from '../../typer/journalDokumentTsType';
import JournalførSubmitValue from '../../typer/ferdigstillJournalføringSubmit';
import DokumentIndex from './pdf/DokumentIndex';
import OppdaterMedBruker from '../../typer/oppdaterBrukerTsType';

type OwnProps = Readonly<{
  oppgave: OppgaveOversikt;
  avbrytVisningAvJournalpost: () => void;
  innhentAlleOppgaver: (param: { ident: string }) => Promise<OppgaveOversikt[] | undefined>;
  navAnsatt: NavAnsatt;
  submitJournalføring: (data: JournalførSubmitValue) => void;
}>;

/**
 * JournalpostIndex - Komponent som holder på og styrer logikk rundt detaljert visning av journalpost
 */
const JournalpostIndex: FunctionComponent<OwnProps> = ({
  oppgave,
  avbrytVisningAvJournalpost,
  submitJournalføring,
}) => {
  const [valgtDokument, setValgtDokument] = useState<JournalDokument | undefined>(undefined);

  const journalpostKall = restApiHooks.useRestApi(RestApiPathsKeys.HENT_JOURNALPOST_DETALJER, {
    journalpostId: oppgave.journalpostId,
  });

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
      hentBrukerKall(data);
    },
    [hentBrukerKall],
  );

  // Åpner første dokument som standard valg når vi er ferdig med å laste
  useEffect(() => {
    if (journalpostKall.state === RestApiState.SUCCESS) {
      const doks = journalpostKall.data?.dokumenter;
      const dok = doks && doks.length > 0 ? doks[0] : undefined;
      setValgtDokument(dok);
    }
  }, [journalpostKall]);

  if (
    journalpostKall.state === RestApiState.NOT_STARTED ||
    journalpostKall.state === RestApiState.LOADING ||
    !journalpostKall.data
  ) {
    return <LoadingPanel />;
  }
  const journalpostFraOppgave: Journalpost = journalpostKall.data;

  return (
    <FlexContainer>
      <FlexRow>
        <FlexColumn className={styles.oppgaveKolonne}>
          <VerticalSpacer sixteenPx />
          <JournalpostDetaljer
            avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
            journalpost={journalpostOppdatertMedSøker || journalpostFraOppgave}
            oppgave={oppgave}
            submitJournalføring={submitJournalføring}
            knyttJournalpostTilBruker={knyttJournalpostTilBruker}
            forhåndsvisBruker={hentBrukerCallback}
            brukerTilForhåndsvisning={hentetNavn}
            lasterBruker={hentBrukerState === RestApiState.LOADING}
          />
        </FlexColumn>
        {valgtDokument && (
          <FlexColumn className={styles.pdfKolonne}>
            <VerticalSpacer sixteenPx />
            <DokumentIndex dokumenter={journalpostFraOppgave.dokumenter} />
          </FlexColumn>
        )}
      </FlexRow>
    </FlexContainer>
  );
};

export default JournalpostIndex;
