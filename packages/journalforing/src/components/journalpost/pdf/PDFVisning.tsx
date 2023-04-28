import React, { FunctionComponent } from 'react';
import JournalDokument from '../../../typer/journalDokumentTsType';

type OwnProps = Readonly<{
  dokument: JournalDokument;
}>;

/**
 * PDFVisning - Panel for å vise valgt dokument
 */
const PDFVisning: FunctionComponent<OwnProps> = ({ dokument }) => (
  <div>
    <iframe id="iframepdf" src={dokument.lenke} width='100%' height='1000px' title={dokument.tittel} />
  </div>
);

export default PDFVisning;
