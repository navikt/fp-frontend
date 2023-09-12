import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { BodyShort, Heading } from '@navikt/ds-react';

import { CheckboxField } from '@navikt/ft-form-hooks';
import { DateTimeLabel, Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { kommunikasjonsretning } from '@navikt/fp-kodeverk';
import { Dokument } from '@navikt/fp-types';
import { hentDokumentLenke } from '@navikt/fp-konstanter';
import { ChevronDownDoubleIcon, ChevronLeftDoubleIcon, ChevronRightDoubleIcon } from '@navikt/aksel-icons';

import styles from './documentListInnsyn.module.css';

const getDirectionImage = (document: Dokument, intl: IntlShape): ReactElement => {
  if (document.kommunikasjonsretning === kommunikasjonsretning.INN) {
    return (
      <ChevronRightDoubleIcon
        title={intl.formatMessage({ id: 'DocumentListInnsyn.Motta' })}
        className={styles.imageInn}
      />
    );
  }
  if (document.kommunikasjonsretning === kommunikasjonsretning.UT) {
    return (
      <ChevronLeftDoubleIcon
        title={intl.formatMessage({ id: 'DocumentListInnsyn.Send' })}
        className={styles.imageSend}
      />
    );
  }
  return (
    <ChevronDownDoubleIcon
      title={intl.formatMessage({ id: 'DocumentListInnsyn.Intern' })}
      className={styles.imageIntern}
    />
  );
};

const noLabelHack = (): ReactElement => <span className={styles.hidden}>-</span>;

interface OwnProps {
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
const DocumentListInnsyn: FunctionComponent<OwnProps> = ({ documents, saksNr, readOnly }) => {
  const intl = useIntl();
  if (documents.length === 0) {
    return (
      <BodyShort size="small" className={styles.noDocuments}>
        <FormattedMessage id="DocumentListInnsyn.NoDocuments" />
      </BodyShort>
    );
  }
  const headerTextCodes = readOnly
    ? ['DocumentListInnsyn.DocumentType']
    : [
        'DocumentListInnsyn.CheckBox',
        'DocumentListInnsyn.Direction',
        'DocumentListInnsyn.DocumentType',
        'DocumentListInnsyn.DateTime',
      ];

  return (
    <>
      <Heading size="small" className={styles.noDocuments}>
        <FormattedMessage id="DocumentListInnsyn.VelgInnsynsDok" />
      </Heading>
      <Table headerTextCodes={headerTextCodes}>
        {documents.map(document => {
          const img = getDirectionImage(document, intl);
          const dokId = parseInt(document.dokumentId, 10);
          return (
            <TableRow key={dokId} id={dokId}>
              <TableColumn className={styles.checkboxCol}>
                <CheckboxField label={noLabelHack()} name={`dokument_${dokId}`} disabled={readOnly} />
              </TableColumn>
              <TableColumn hidden={readOnly}>{img}</TableColumn>
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
              <TableColumn hidden={readOnly}>
                {document.tidspunkt ? (
                  <DateTimeLabel dateTimeString={document.tidspunkt} />
                ) : (
                  <BodyShort size="small">
                    <FormattedMessage id="DocumentListInnsyn.IProduksjon" />
                  </BodyShort>
                )}
              </TableColumn>
            </TableRow>
          );
        })}
      </Table>
    </>
  );
};

DocumentListInnsyn.defaultProps = {
  readOnly: false,
};

export default DocumentListInnsyn;
