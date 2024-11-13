import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort, Button, Checkbox, Link, SortState, Table } from '@navikt/ds-react';
import {
  ChevronLeftCircleFillIcon,
  ChevronRightCircleFillIcon,
  NotePencilFillIcon,
  StarFillIcon,
} from '@navikt/aksel-icons';

import { Kommunikasjonsretning } from '@navikt/ft-kodeverk';
import { Dokument } from '@navikt/ft-types';

import { DateTimeLabel } from '@navikt/ft-ui-komponenter';
import styles from './documentList.module.css';

export interface OwnProps {
  documents: Dokument[];
  behandlingUuid?: string;
  selectDocumentCallback: (e: React.SyntheticEvent, id?: number | string, dokument?: Dokument) => void;
}

type TableHeaders = 'kommunikasjonsretning' | 'tittel' | 'gjelderFor' | 'tidspunkt';

const KommunikasjonsretningIkon = ({ kommunikasjonsretning }: { kommunikasjonsretning: string }) => {
  const intl = useIntl();
  if (kommunikasjonsretning === Kommunikasjonsretning.INN) {
    return (
      <span className={styles.kommunikasjonsretning}>
        <ChevronRightCircleFillIcon
          color="var(--a-purple-500)"
          width={25}
          height={25}
          title={intl.formatMessage({ id: 'DocumentList.Motta' })}
        />
        <FormattedMessage id="DocumentList.Motta" />
      </span>
    );
  }
  if (kommunikasjonsretning === Kommunikasjonsretning.UT) {
    return (
      <span className={styles.kommunikasjonsretning}>
        <ChevronLeftCircleFillIcon
          color="var(--a-purple-200)"
          width={25}
          height={25}
          title={intl.formatMessage({ id: 'DocumentList.Send' })}
        />
        <FormattedMessage id="DocumentList.Send" />
      </span>
    );
  }
  return (
    <span className={styles.kommunikasjonsretning}>
      <NotePencilFillIcon
        color="var(--a-gray-700)"
        width={25}
        height={25}
        title={intl.formatMessage({ id: 'DocumentList.Intern' })}
      />
      <FormattedMessage id="DocumentList.Intern" />
    </span>
  );
};

/**
 * DocumentList
 *
 * Presentasjonskomponent. Viser dokumenter i en liste. Tar også inn en callback-funksjon som blir
 * trigget når saksbehandler velger et dokument. Finnes ingen dokumenter blir det kun vist en label
 * som viser at ingen dokumenter finnes på fagsak.
 */
const DocumentList: FunctionComponent<OwnProps> = ({ documents, behandlingUuid, selectDocumentCallback }) => {
  const intl = useIntl();

  // Logikk for å toggle checkboxes tilpasset fra Aksel-eksempel: https://aksel.nav.no/komponenter/core/table#tabledemo-selectable
  const [valgteDokumentIder, setValgteDokumentIder] = useState<string[]>([]);
  const toggleValgDokument = (dokumentId: string) =>
    setValgteDokumentIder(dokumentIder =>
      dokumentIder.includes(dokumentId) ? dokumentIder.filter(id => id !== dokumentId) : [...dokumentIder, dokumentId],
    );

  // Logikk for å sortere tabell tilpasset fra Aksel-eksempel: https://aksel.nav.no/komponenter/core/table#tabledemo-sortable
  const [sort, setSort] = useState<SortState | undefined>({ orderBy: 'tidspunkt', direction: 'descending' });
  const handleSort = (sortKey: TableHeaders) => {
    setSort(
      sort && sortKey === sort.orderBy && sort.direction === 'descending'
        ? undefined
        : {
            orderBy: sortKey,
            direction: sort && sortKey === sort.orderBy && sort.direction === 'ascending' ? 'descending' : 'ascending',
          },
    );
  };
  const comparator = (a: Dokument, b: Dokument, orderBy: TableHeaders) => {
    const aValue = a[orderBy];
    const bValue = b[orderBy];

    if (!aValue || !bValue) {
      return -1;
    }

    if (bValue < aValue) {
      return -1;
    }
    if (bValue > aValue) {
      return 1;
    }
    return 0;
  };

  const sortedDocuments = documents.slice().sort((a, b) => {
    if (sort) {
      return sort.direction === 'ascending'
        ? comparator(b, a, sort.orderBy as TableHeaders)
        : comparator(a, b, sort.orderBy as TableHeaders);
    }
    return 1;
  });

  if (documents.length === 0) {
    return (
      <BodyShort size="small" className={styles.noDocuments}>
        <FormattedMessage id="DocumentList.NoDocuments" />
      </BodyShort>
    );
  }
  return (
    <>
      {valgteDokumentIder.length > 0 && (
        <Button
          onClick={event =>
            valgteDokumentIder.forEach(dokumentId =>
              selectDocumentCallback(
                event,
                dokumentId,
                documents.find(document => document.dokumentId === dokumentId),
              ),
            )
          }
          className={styles.openDocumentButton}
          size="small"
          variant="primary"
        >
          <FormattedMessage id="DocumentList.LastNedKnapp" values={{ antall: valgteDokumentIder.length }} />
        </Button>
      )}
      <Table size="small" sort={sort} onSortChange={sortKey => handleSort(sortKey as TableHeaders)}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Checkbox
                checked={valgteDokumentIder.length === sortedDocuments.length}
                indeterminate={valgteDokumentIder.length > 0 && valgteDokumentIder.length !== sortedDocuments.length}
                onChange={() =>
                  valgteDokumentIder.length > 0
                    ? setValgteDokumentIder([])
                    : setValgteDokumentIder(sortedDocuments.map(({ dokumentId }) => dokumentId))
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
            <Table.ColumnHeader sortKey="gjelderFor" sortable>
              <FormattedMessage id="DocumentList.Gjelder" />
            </Table.ColumnHeader>
            <Table.ColumnHeader sortKey="tidspunkt" sortable>
              <FormattedMessage id="DocumentList.DateTime" />
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedDocuments.map(document => (
            <Table.Row key={document.dokumentId}>
              <Table.DataCell>
                <Checkbox
                  hideLabel
                  checked={valgteDokumentIder.includes(document.dokumentId)}
                  onChange={() => toggleValgDokument(document.dokumentId)}
                  aria-labelledby={document.tittel}
                >
                  {' '}
                </Checkbox>
              </Table.DataCell>
              <Table.DataCell>
                <KommunikasjonsretningIkon kommunikasjonsretning={document.kommunikasjonsretning} />
              </Table.DataCell>
              <Table.DataCell scope="row">
                {document.behandlingUuidList &&
                  behandlingUuid &&
                  document.behandlingUuidList.includes(behandlingUuid) && (
                    <StarFillIcon className={styles.image} title={intl.formatMessage({ id: 'DocumentList.IBruk' })} />
                  )}
                {/* Ideelt sett hadde vi brukt en lenke som direkte åpnet dokumentet i ny fane.
                Men fordi denne komponent kun har ansvar for å gi callback på ønsket dokument så må det brukes onClick */}
                <Link
                  className={styles.dokumentlenke}
                  onClick={event => selectDocumentCallback(event, document.dokumentId, document)}
                >
                  {document.tittel}
                </Link>
              </Table.DataCell>
              <Table.DataCell>{document.gjelderFor}</Table.DataCell>
              <Table.DataCell>
                {document.tidspunkt ? (
                  <DateTimeLabel dateTimeString={document.tidspunkt} />
                ) : (
                  <BodyShort size="small">
                    <FormattedMessage id="DocumentList.IProduksjon" />
                  </BodyShort>
                )}
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default DocumentList;
