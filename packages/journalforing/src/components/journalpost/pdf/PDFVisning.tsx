import React, { FunctionComponent } from 'react';
import styles from './pdfvisning.less';
import JournalDokument from '../../../typer/journalDokumentTsType';

type OwnProps = Readonly<{
  dokument: JournalDokument;
}>;

/**
 * PDFVisning - Panel for å vise valgt dokument
 */
const PDFVisning: FunctionComponent<OwnProps> = ({
  dokument,
}) => (
  <div className={styles.pdfContainer}>
    <iframe id="iframepdf" src={dokument.lenke} width="1300" height="1000" title={dokument.tittel} />
  </div>
);

export default PDFVisning;
