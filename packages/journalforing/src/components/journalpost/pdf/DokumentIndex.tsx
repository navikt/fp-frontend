import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

import type { JournalDokument } from '../../../typer/journalDokumentTsType';
import { DokumentVelger } from './DokumentVelger';
import { PDFVisning } from './PDFVisning';

import styles from './dokumentIndex.module.css';

interface Props {
  dokumenter: JournalDokument[] | undefined;
}

export const DokumentIndex = ({ dokumenter }: Props) => {
  const initieltDokumnet = dokumenter && dokumenter.length > 0 ? dokumenter[0] : undefined;
  const [valgtDokument, setValgtDokument] = useState<JournalDokument | undefined>(initieltDokumnet);

  if (!valgtDokument || !dokumenter) {
    return (
      <Heading size="small">
        <FormattedMessage id="ValgtOppgave.Dokumenter.Tom" />
      </Heading>
    );
  }

  return (
    <VStack gap="4" className={styles.pdfContainer}>
      <DokumentVelger setValgtDokument={setValgtDokument} valgtDokument={valgtDokument} dokumenter={dokumenter} />
      <PDFVisning dokument={valgtDokument} />
    </VStack>
  );
};
