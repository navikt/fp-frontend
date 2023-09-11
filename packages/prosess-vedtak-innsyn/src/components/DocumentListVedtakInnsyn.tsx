import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Detail } from '@navikt/ds-react';

import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { Dokument } from '@navikt/fp-types';
import { hentDokumentLenke } from '@navikt/fp-konstanter';

import styles from './documentListVedtakInnsyn.module.css';

const headerTextCodes = ['DocumentListVedtakInnsyn.Dokument'];

interface OwnProps {
  saksNr: string;
  documents: ({
    fikkInnsyn: boolean;
  } & Dokument)[];
}

/**
 * DocumentListVedtakInnsyn
 *
 * Presentasjonskomponent. Viser dokumenter  som er valgt til innsyn i en liste . Finnes ingen dokumenter blir det kun vist en label
 * som viser at ingen dokumenter finnes på fagsak.
 */
const DocumentListVedtakInnsyn: FunctionComponent<OwnProps> = ({ documents, saksNr }) => {
  if (documents.length === 0) {
    return (
      <BodyShort size="small" className={styles.noDocuments}>
        <FormattedMessage id="DocumentListVedtakInnsyn.NoDocuments" />
      </BodyShort>
    );
  }

  return (
    <>
      <Detail className={styles.noDocuments}>
        <FormattedMessage id="DocumentListVedtakInnsyn.InnsynsDok" />
      </Detail>
      <Table noHover headerTextCodes={headerTextCodes}>
        {documents.map(document => {
          const dokId = parseInt(document.dokumentId, 10);
          return (
            <TableRow key={dokId} id={dokId}>
              <TableColumn className={styles.linkCol}>
                <a
                  href={hentDokumentLenke(saksNr, document.journalpostId, document.dokumentId)}
                  className="lenke lenke--frittstaende"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {document.tittel}
                </a>
              </TableColumn>
            </TableRow>
          );
        })}
      </Table>
    </>
  );
};

export default DocumentListVedtakInnsyn;
