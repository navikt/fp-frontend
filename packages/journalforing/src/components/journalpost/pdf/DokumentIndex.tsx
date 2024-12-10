import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { JournalDokument } from '../../../typer/journalDokumentTsType';
import { DokumentVelger } from './DokumentVelger';
import { PDFVisning } from './PDFVisning';

import styles from './dokumentIndex.module.css';

type Props = {
  dokumenter?: JournalDokument[];
};

export const DokumentIndex = ({ dokumenter }: Props) => {
  const initieltDokumnet = dokumenter && dokumenter.length > 0 ? dokumenter[0] : undefined;
  const [valgtDokument, setValgtDokument] = useState<JournalDokument | undefined>(initieltDokumnet);

  if (!valgtDokument || !dokumenter) {
    return (
      <div>
        <Heading size="small">
          <FormattedMessage id="ValgtOppgave.Dokumenter.Tom" />
        </Heading>
      </div>
    );
  }

  return (
    <div className={styles.pdfContainer}>
      <DokumentVelger setValgtDokument={setValgtDokument} valgtDokument={valgtDokument} dokumenter={dokumenter} />
      <VerticalSpacer sixteenPx />
      <PDFVisning dokument={valgtDokument} />
    </div>
  );
};
