import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { Table, TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { Dokument } from '@fpsak-frontend/types';
import { hentDokumentLenke } from '@fpsak-frontend/konstanter';

import styles from './documentListVedtakInnsyn.less';

const headerTextCodes = [
  'DocumentListVedtakInnsyn.Dokument',
];

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
const DocumentListVedtakInnsyn: FunctionComponent<OwnProps> = ({
  documents,
  saksNr,
}) => {
  if (documents.length === 0) {
    return <Normaltekst className={styles.noDocuments}><FormattedMessage id="DocumentListVedtakInnsyn.NoDocuments" /></Normaltekst>;
  }

  return (
    <>
      <Undertekst className={styles.noDocuments}><FormattedMessage id="DocumentListVedtakInnsyn.InnsynsDok" /></Undertekst>
      <Row>
        <Column xs="6">
          <Table noHover headerTextCodes={headerTextCodes}>
            {documents.map((document) => {
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
        </Column>
      </Row>
    </>
  );
};

export default DocumentListVedtakInnsyn;
