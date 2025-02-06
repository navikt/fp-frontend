import type { JournalDokument } from '../../../typer/journalDokumentTsType';

import styles from './dokumentIndex.module.css';

type Props = Readonly<{
  dokument: JournalDokument;
}>;

/**
 * PDFVisning - Panel for å vise valgt dokument
 */
export const PDFVisning = ({ dokument }: Props) => (
  <iframe id="iframepdf" src={dokument.lenke} className={styles.iframe} title={dokument.tittel} />
);
