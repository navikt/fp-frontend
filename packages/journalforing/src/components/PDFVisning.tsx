import React, { FunctionComponent, useState, useCallback } from 'react';
import { Document, Page } from 'react-pdf';
import { Loader, Pagination } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import * as pdfjsLib from 'pdfjs-dist';
import styles from './pdfvisning.less';
import JournalDokument from '../typer/journalDokumentTsType';

pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

type OwnProps = Readonly<{
  dokument: JournalDokument;
}>;

/**
 * JournalforingPanel
 */
const PDFVisning: FunctionComponent<OwnProps> = ({
  dokument,
}) => {
  const [valgtSide, setValgtSide] = useState(1);
  const [antallSider, setAntallSider] = useState(1);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    if (valgtSide > numPages) {
      setValgtSide(numPages);
    }
    setAntallSider(numPages);
  }, [dokument]);

  return (
    <div className={styles.pdfContainer}>
      <Pagination
        page={valgtSide}
        count={antallSider}
        onPageChange={setValgtSide}
      />
      <Document
        file={dokument.lenke}
        onLoadSuccess={onDocumentLoadSuccess}
        error={<FormattedMessage id="ValgtOppgave.PDF.Feil" />}
        loading={
          <Loader size="xlarge" variant="interaction" transparent />
      }
      >
        <Page pageNumber={valgtSide} />
      </Document>
    </div>
  );
};

export default PDFVisning;
