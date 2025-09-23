import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Table } from '@navikt/ds-react';

import type { Dokument } from '@navikt/fp-types';

import { DokumentLink } from '../../../../ui-komponenter';

import styles from './documentListVedtakInnsyn.module.css';

interface Props {
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
export const DocumentListVedtakInnsyn = ({ documents, saksNr }: Props) => {
  if (documents.length === 0) {
    return (
      <BodyShort size="small" className={styles['noDocuments']}>
        <FormattedMessage id="DocumentListVedtakInnsyn.NoDocuments" />
      </BodyShort>
    );
  }

  return (
    <>
      <Detail className={styles['noDocuments']}>
        <FormattedMessage id="DocumentListVedtakInnsyn.InnsynsDok" />
      </Detail>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="DocumentListVedtakInnsyn.Dokument" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {documents.map(document => {
            const dokId = parseInt(document.dokumentId, 10);
            return (
              <Table.Row key={dokId}>
                <Table.DataCell className={styles['linkCol']}>
                  <DokumentLink
                    saksnummer={saksNr}
                    journalpostId={document.journalpostId}
                    dokumentId={document.dokumentId}
                    dokumentTittel={document.tittel ?? undefined}
                  />
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};
