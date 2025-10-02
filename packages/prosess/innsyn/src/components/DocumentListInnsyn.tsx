import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { ChevronDownDoubleIcon, ChevronLeftDoubleIcon, ChevronRightDoubleIcon } from '@navikt/aksel-icons';
import { BodyShort, Heading, Table } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';

import type { Dokument } from '@navikt/fp-types';

import { DokumentLink } from '../../../../ui-komponenter';
import type { InnsynFormValues } from './InnsynFormValues';

import styles from './documentListInnsyn.module.css';

const getDirectionImage = (document: Dokument, intl: IntlShape): ReactElement => {
  if (document.kommunikasjonsretning === 'INN') {
    return (
      <ChevronRightDoubleIcon
        title={intl.formatMessage({ id: 'DocumentListInnsyn.Motta' })}
        className={styles['imageInn']}
      />
    );
  }
  if (document.kommunikasjonsretning === 'UT') {
    return (
      <ChevronLeftDoubleIcon
        title={intl.formatMessage({ id: 'DocumentListInnsyn.Send' })}
        className={styles['imageSend']}
      />
    );
  }
  return (
    <ChevronDownDoubleIcon
      title={intl.formatMessage({ id: 'DocumentListInnsyn.Intern' })}
      className={styles['imageIntern']}
    />
  );
};

const noLabelHack = (): ReactElement => <span className={styles['hidden']}>-</span>;

interface Props {
  saksNr: string;
  documents: Dokument[];
  readOnly?: boolean;
}

/**
 * DocumentListInnsyn
 *
 * Presentasjonskomponent. Viser dokumenter i en liste med Checkbox for å velge til innsyn. Tar også inn en callback-funksjon som blir
 * trigget når saksbehandler velger et dokument. Finnes ingen dokumenter blir det kun vist en label
 * som viser at ingen dokumenter finnes på fagsak.
 */
export const DocumentListInnsyn = ({ documents, saksNr, readOnly = false }: Props) => {
  const intl = useIntl();

  const { control } = useFormContext<InnsynFormValues>();

  if (documents.length === 0) {
    return (
      <BodyShort size="small" className={styles['noDocuments']}>
        <FormattedMessage id="DocumentListInnsyn.NoDocuments" />
      </BodyShort>
    );
  }

  return (
    <div>
      <Heading size="small" level="2" className={styles['noDocuments']}>
        <FormattedMessage id="DocumentListInnsyn.VelgInnsynsDok" />
      </Heading>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col" />
            {readOnly && (
              <Table.HeaderCell scope="col">
                <FormattedMessage id="DocumentListInnsyn.DocumentType" />
              </Table.HeaderCell>
            )}
            {!readOnly && (
              <>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="DocumentListInnsyn.Direction" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="DocumentListInnsyn.DocumentType" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="DocumentListInnsyn.DateTime" />
                </Table.HeaderCell>
              </>
            )}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {documents.map(document => {
            const img = getDirectionImage(document, intl);
            const dokId = Number.parseInt(document.dokumentId, 10);
            return (
              <Table.Row key={dokId}>
                <Table.DataCell className={styles['checkboxCol']}>
                  <RhfCheckbox label={noLabelHack()} name={`dokument_${dokId}`} control={control} disabled={readOnly} />
                </Table.DataCell>
                <Table.DataCell hidden={readOnly}>{img}</Table.DataCell>
                <Table.DataCell className={styles['linkCol']}>
                  <DokumentLink
                    saksnummer={saksNr}
                    journalpostId={document.journalpostId}
                    dokumentId={document.dokumentId}
                    dokumentTittel={document.tittel ?? undefined}
                  />
                </Table.DataCell>
                <Table.DataCell hidden={readOnly}>
                  {document.tidspunkt ? (
                    <DateTimeLabel dateTimeString={document.tidspunkt} />
                  ) : (
                    <BodyShort size="small">
                      <FormattedMessage id="DocumentListInnsyn.IProduksjon" />
                    </BodyShort>
                  )}
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
