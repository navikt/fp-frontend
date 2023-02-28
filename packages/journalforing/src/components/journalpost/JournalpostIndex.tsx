import React, {
  FunctionComponent, useState, useEffect, useCallback,
} from 'react';

import {
  FlexColumn, FlexContainer, FlexRow, LoadingPanel,
} from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { NavAnsatt } from '@navikt/fp-types';
import { restApiHooks, RestApiPathsKeys } from '../../data/fpfordelRestApi';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import OppgaveDetaljertVisning from './JournalpostDetaljer';
import styles from './journalpostIndex.module.css';
import Journalpost from '../../typer/journalpostTsType';
import JournalDokument from '../../typer/journalDokumentTsType';
import JournalførSubmitValue from '../../typer/ferdigstillJournalføringSubmit';
import DokumentIndex from './pdf/DokumentIndex';

type OwnProps = Readonly<{
  oppgave: OppgaveOversikt;
  avbrytVisningAvJournalpost: () => void;
  innhentAlleOppgaver: (param: { ident: string }) => Promise<OppgaveOversikt[] | undefined>;
  navAnsatt: NavAnsatt;
}>;

/**
 * JournalpostIndex - Komponent som holder på og styrer logikk rundt detaljert visning av journalpost
 */
const JournalpostIndex: FunctionComponent<OwnProps> = ({
  oppgave,
  avbrytVisningAvJournalpost,
  innhentAlleOppgaver,
  navAnsatt,
}) => {
  const [valgtDokument, setValgtDokument] = useState<JournalDokument | undefined>(undefined);
  const journalpostKall = restApiHooks.useRestApi(RestApiPathsKeys.HENT_JOURNALPOST_DETALJER, { journalpostId: oppgave.journalpostId });

  const { startRequest: submitJournalføring } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FERDIGSTILL_JOURNALFØRING);

  const journalførCallback = useCallback((data: JournalførSubmitValue) => {
    submitJournalføring(data)
      .then(() => {
        innhentAlleOppgaver({ ident: navAnsatt.brukernavn });
        avbrytVisningAvJournalpost();
      });
  }, []);

  // Åpner første dokument som standard valg når vi er ferdig med å laste
  useEffect(() => {
    if (journalpostKall.state === RestApiState.SUCCESS) {
      const doks = journalpostKall.data?.dokumenter;
      const dok = doks && doks.length > 0 ? doks[0] : undefined;
      setValgtDokument(dok);
    }
  }, [journalpostKall]);

  if (journalpostKall.state === RestApiState.NOT_STARTED || journalpostKall.state === RestApiState.LOADING || !journalpostKall.data) {
    return <LoadingPanel />;
  }
  const journalpost: Journalpost = journalpostKall.data;
  return (
    <FlexContainer>
      <FlexRow>
        <FlexColumn className={styles.oppgaveKolonne}>
          <OppgaveDetaljertVisning
            avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
            journalpost={journalpost}
            oppgave={oppgave}
            submitJournalføring={journalførCallback}
          />
        </FlexColumn>
        {valgtDokument
          && (
            <FlexColumn className={styles.pdfKolonne}>
              <DokumentIndex dokumenter={journalpost.dokumenter} />
            </FlexColumn>
          )}
      </FlexRow>
    </FlexContainer>
  );
};

export default JournalpostIndex;