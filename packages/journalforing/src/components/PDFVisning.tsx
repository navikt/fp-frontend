import React, { FunctionComponent, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Loader, Pagination } from '@navikt/ds-react';
import styles from './pdfvisning.less';

const pdfjsWorker = require('pdfjs-dist/build/pdf.worker.entry');

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

type OwnProps = Readonly<{
  pdfRessurs: string;
}>;

/**
 * JournalforingPanel
 */
const PDFVisning: FunctionComponent<OwnProps> = ({
  pdfRessurs,
}) => {
  const [valgtSide, setValgtSide] = useState<number>(1);
  const [antallSider, setAntallSider] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    if (valgtSide > numPages) {
      setValgtSide(numPages);
    }
    setAntallSider(numPages);
  };

  return (
    <div className={styles.pdfContainer}>
      <Pagination
        page={valgtSide}
        count={antallSider}
        onPageChange={setValgtSide}
      />
      <Document
        file={pdfRessurs}
        onLoadSuccess={onDocumentLoadSuccess}
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
