import React, { FunctionComponent, useState, useEffect } from 'react';

import {
  FlexColumn, FlexContainer, FlexRow, LoadingPanel,
} from '@navikt/ft-ui-komponenter';
import { RestApiState, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { requestApi, restApiHooks, RestApiPathsKeys } from '../data/fpfordelRestApi';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import OppgaveDetaljertVisning from './OppgaveDetaljertVisning';
import styles from './journalforingPanel.less';
import Journalpost from '../typer/journalpostTsType';
import PDFVisning from './PDFVisning';
import JournalDokument from '../typer/journalDokumentTsType';

type OwnProps = Readonly<{
  oppgave: OppgaveOversikt;
  avbrytCallback: () => void;
}>;

/**
 * OppgaveDetaljertIndex - Komponent som holder på og styrer logikk rundt detaljert visning av oppgave
 */
const OppgaveDetaljertIndex: FunctionComponent<OwnProps> = ({
  oppgave,
  avbrytCallback,
}) => {
  const [valgtDokument, setValgtDokument] = useState<JournalDokument>(undefined);
  const journalpostKall = restApiHooks.useRestApi(RestApiPathsKeys.HENT_JOURNALPOST_DETALJER, { journalpostId: oppgave.journalpostId });
  const { addErrorMessage } = useRestApiErrorDispatcher();
  requestApi.setAddErrorMessageHandler(addErrorMessage);

  useEffect(() => {
    if (journalpostKall.state === RestApiState.SUCCESS) {
      const dok = journalpostKall.data.dokumenter ? journalpostKall.data.dokumenter[0] : undefined;
      setValgtDokument(dok);
    }
  }, [journalpostKall]);

  if (journalpostKall.state === RestApiState.NOT_STARTED || journalpostKall.state === RestApiState.LOADING) {
    return <LoadingPanel />;
  }
  const journalpost: Journalpost = journalpostKall.data;
  if (!journalpost) {
    return null;
  }
  return (
    <FlexContainer>
      <FlexRow>
        <FlexColumn className={styles.oppgaveKolonne}>
          <OppgaveDetaljertVisning
            avbrytCallback={avbrytCallback}
            journalpost={journalpost}
            setValgtDokument={setValgtDokument}
            valgtDokument={valgtDokument}
          />
        </FlexColumn>
        {valgtDokument
          && (
            <FlexColumn className={styles.pdfKolonne}>
              <PDFVisning dokument={valgtDokument} />
            </FlexColumn>
          )}
      </FlexRow>
    </FlexContainer>
  );
};

export default OppgaveDetaljertIndex;
