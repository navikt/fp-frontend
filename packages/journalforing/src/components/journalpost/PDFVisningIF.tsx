import React, { FunctionComponent } from 'react';
// @ts-ignore Fiks når vi vet hva vi gjør med PDF'er...
import styles from './pdfvisning.less';
import JournalDokument from '../../typer/journalDokumentTsType';

type OwnProps = Readonly<{
  dokument: JournalDokument;
}>;

/**
 * PDFVisningIF - Panel for å vise valgt dokument
 */
const PDFVisningIF: FunctionComponent<OwnProps> = ({
  dokument,
}) => (
  <div className={styles.pdfContainer}>
    <iframe id="iframepdf" src={dokument.lenke} width="1300" height="1200" title={dokument.tittel} />
  </div>
);

export default PDFVisningIF;
