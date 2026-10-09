import { useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Checkbox, Label, Table, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';
import { DateTimeLabel, LabeledValue } from '@navikt/ft-ui-komponenter';

import type { Dokument } from '@navikt/fp-types';
import { DokumentLink, KommunikasjonsretningIkon } from '@navikt/fp-ui-komponenter';

import type { FormValues } from './formValues';

interface Props {
  saksNr: string;
  documents: Dokument[];
  readOnly?: boolean;
}

export const DocumentListInnsyn = ({ documents, saksNr, readOnly = false }: Props) => {
  const { control, setValue } = useFormContext<FormValues>();
  const formValues = useWatch({ control });

  if (documents.length === 0) {
    return (
      <LabeledValue
        size="small"
        label={<FormattedMessage id="DocumentListInnsyn.InnsynsDok" />}
        value={<FormattedMessage tagName="i" id="DocumentListInnsyn.NoDocuments" />}
      />
    );
  }

  const selectedCount = documents.filter(document => formValues[`dokument_${document.dokumentId}`]).length;
  const allSelected = selectedCount === documents.length;

  return (
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="DocumentListInnsyn.VelgInnsynsDok" />
      </Label>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col" className="w-px whitespace-nowrap">
              {!readOnly && (
                <Checkbox
                  size="small"
                  checked={allSelected}
                  indeterminate={selectedCount > 0 && !allSelected}
                  disabled={readOnly}
                  onChange={() => {
                    documents.forEach(document => {
                      setValue(`dokument_${document.dokumentId}`, !allSelected, { shouldDirty: true });
                    });
                  }}
                  hideLabel
                >
                  <FormattedMessage id="DocumentListInnsyn.VelgAlleDokumenter" />
                </Checkbox>
              )}
            </Table.HeaderCell>

            {!readOnly && (
              <Table.HeaderCell scope="col" textSize="small" className="w-px whitespace-nowrap">
                <FormattedMessage id="DocumentListInnsyn.Direction" />
              </Table.HeaderCell>
            )}
            <Table.HeaderCell scope="col" textSize="small" className={readOnly ? undefined : 'w-px whitespace-nowrap'}>
              <FormattedMessage id="DocumentListInnsyn.DocumentType" />
            </Table.HeaderCell>
            {!readOnly && (
              <Table.HeaderCell scope="col" textSize="small">
                <FormattedMessage id="DocumentListInnsyn.DateTime" />
              </Table.HeaderCell>
            )}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {documents.map(document => {
            const dokId = Number.parseInt(document.dokumentId, 10);
            return (
              <Table.Row
                key={dokId}
                onRowClick={
                  readOnly
                    ? undefined
                    : () => {
                        setValue(`dokument_${dokId}`, !formValues[`dokument_${dokId}`], { shouldDirty: true });
                      }
                }
              >
                <Table.DataCell textSize="small" className="w-px whitespace-nowrap">
                  <RhfCheckbox
                    name={`dokument_${dokId}`}
                    control={control}
                    label={
                      <FormattedMessage id="DocumentListInnsyn.VelgDokument" values={{ tittel: document.tittel }} />
                    }
                    hideLabel
                    disabled={readOnly}
                  />
                </Table.DataCell>
                {!readOnly && (
                  <Table.DataCell textSize="small" className="w-px whitespace-nowrap">
                    <KommunikasjonsretningIkon kommunikasjonsretning={document.kommunikasjonsretning} />
                  </Table.DataCell>
                )}
                <Table.DataCell textSize="small" className={readOnly ? undefined : 'w-px whitespace-nowrap'}>
                  <DokumentLink
                    saksnummer={saksNr}
                    journalpostId={document.journalpostId}
                    dokumentId={document.dokumentId}
                    dokumentTittel={document.tittel ?? undefined}
                  />
                </Table.DataCell>
                {!readOnly && (
                  <Table.DataCell textSize="small">
                    {document.tidspunkt ? (
                      <DateTimeLabel dateTimeString={document.tidspunkt} />
                    ) : (
                      <FormattedMessage id="DocumentListInnsyn.IProduksjon" />
                    )}
                  </Table.DataCell>
                )}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </VStack>
  );
};
