import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { StarFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Checkbox, HStack, Table } from '@navikt/ds-react';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';

import type { Dokument } from '@navikt/fp-types';
import { DokumentLink } from '@navikt/fp-ui-komponenter';
import { åpneDokument } from '@navikt/fp-utils';

import {
  compareByOrder,
  getDokumentKey,
  getNextSortingDirection,
  type SortConfig,
  type TableHeaders,
} from './documentListUtils';
import { KommunikasjonsretningIkon } from './KommunikasjonsretningIkon';

import styles from './documentList.module.css';

interface Props {
  documents: Dokument[];
  behandlingUuid?: string;
  saksnummer: string;
}

export const DocumentList = ({ documents, behandlingUuid, saksnummer }: Props) => {
  const intl = useIntl();

  const [valgteDokumentKeys, setValgteDokumentKeys] = useState<string[]>([]);
  const toggleValgDokument = (dokument: Dokument) =>
    setValgteDokumentKeys(dokumentKeys => {
      const key = getDokumentKey(dokument);
      return dokumentKeys.includes(key) ? dokumentKeys.filter(id => id !== key) : [...dokumentKeys, key];
    });

  const [sort, setSort] = useState<SortConfig>({ orderBy: 'tidspunkt', direction: 'descending' });

  if (documents.length === 0) {
    return (
      <BodyShort size="small" className={styles['noDocuments']}>
        <FormattedMessage id="DocumentList.NoDocuments" />
      </BodyShort>
    );
  }

  const visGjelderForKolonne = documents.some(d => d.gjelderFor !== undefined);
  const sortedDocuments = documents.toSorted(compareByOrder(sort));

  const handleSort = (sortKey: TableHeaders) => {
    setSort({ orderBy: sortKey, direction: getNextSortingDirection(sortKey, sort) });
  };

  return (
    <HStack gap="space-8">
      {valgteDokumentKeys.length > 0 && (
        <Button
          size="small"
          variant="primary"
          onClick={() => {
            documents
              .filter(d => valgteDokumentKeys.includes(getDokumentKey(d)))
              .forEach(dokument => {
                åpneDokument(saksnummer, dokument.journalpostId, dokument.dokumentId, dokument.tittel ?? undefined);
              });
          }}
        >
          <FormattedMessage id="DocumentList.LastNedKnapp" values={{ antall: valgteDokumentKeys.length }} />
        </Button>
      )}

      <Table size="small" sort={sort} onSortChange={sortKey => handleSort(sortKey as TableHeaders)}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Checkbox
                size="small"
                checked={valgteDokumentKeys.length === sortedDocuments.length}
                indeterminate={valgteDokumentKeys.length > 0 && valgteDokumentKeys.length !== sortedDocuments.length}
                onChange={() =>
                  valgteDokumentKeys.length > 0
                    ? setValgteDokumentKeys([])
                    : setValgteDokumentKeys(sortedDocuments.map(getDokumentKey))
                }
                hideLabel
              >
                Velg alle rader
              </Checkbox>
            </Table.HeaderCell>
            <Table.ColumnHeader sortKey="kommunikasjonsretning" sortable>
              <FormattedMessage id="DocumentList.Direction" />
            </Table.ColumnHeader>
            <Table.ColumnHeader sortKey="tittel" sortable>
              <FormattedMessage id="DocumentList.DocumentType" />
            </Table.ColumnHeader>
            {visGjelderForKolonne && (
              <Table.ColumnHeader sortKey="gjelderFor" sortable>
                <FormattedMessage id="DocumentList.Gjelder" />
              </Table.ColumnHeader>
            )}
            <Table.ColumnHeader sortKey="tidspunkt" sortable>
              <FormattedMessage id="DocumentList.DateTime" />
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedDocuments.map(document => (
            <Table.Row key={getDokumentKey(document)}>
              <Table.DataCell>
                <Checkbox
                  size="small"
                  hideLabel
                  checked={valgteDokumentKeys.includes(getDokumentKey(document))}
                  onChange={() => toggleValgDokument(document)}
                  aria-labelledby={document.tittel ?? undefined}
                >
                  {' '}
                </Checkbox>
              </Table.DataCell>
              <Table.DataCell>
                <KommunikasjonsretningIkon kommunikasjonsretning={document.kommunikasjonsretning} />
              </Table.DataCell>
              <Table.DataCell scope="row">
                <HStack gap="space-4" wrap={false}>
                  {document.behandlingUuidList &&
                    behandlingUuid &&
                    document.behandlingUuidList.includes(behandlingUuid) && (
                      <StarFillIcon
                        color="var(--ax-warning-500)"
                        fontSize="1.25rem"
                        title={intl.formatMessage({ id: 'DocumentList.IBruk' })}
                      />
                    )}
                  <DokumentLink
                    saksnummer={saksnummer}
                    journalpostId={document.journalpostId}
                    dokumentId={document.dokumentId}
                    dokumentTittel={document.tittel ?? undefined}
                  />
                </HStack>
              </Table.DataCell>
              {visGjelderForKolonne && <Table.DataCell>{document.gjelderFor}</Table.DataCell>}
              <Table.DataCell>
                {document.tidspunkt ? (
                  <DateTimeLabel dateTimeString={document.tidspunkt} />
                ) : (
                  <FormattedMessage id="DocumentList.IProduksjon" />
                )}
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </HStack>
  );
};
