import React, { FunctionComponent } from 'react';
import JournalDokument from '../../../typer/journalDokumentTsType';
import styles from './dokumentIndex.module.css';

type OwnProps = Readonly<{
  dokument: JournalDokument;
}>;

/**
 * PDFVisning - Panel for å vise valgt dokument
 */
const PDFVisning: FunctionComponent<OwnProps> = ({ dokument }) => (
  <iframe id="iframepdf" src={dokument.lenke} className={styles.iframe} title={dokument.tittel} />
);

export default PDFVisning;
