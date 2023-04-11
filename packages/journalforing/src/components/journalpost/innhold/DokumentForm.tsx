import React, { FunctionComponent } from 'react';
import { formHooks } from '@navikt/ft-form-hooks';
import { DokumentTittelSubmitValue } from '../../../typer/ferdigstillJournalføringSubmit';

import JournalDokument from '../../../typer/journalDokumentTsType';
import JournalføringFormValues, { DokumentTittelFormValues } from '../../../typer/journalføringFormValues';
import DokumentDetaljer from './DokumentDetaljer';

export const buildInitialValues = (dokumenter: JournalDokument[]): DokumentTittelFormValues[] => (dokumenter.map((dok) => ({
  dokumentId: dok.dokumentId,
  tittel: dok.tittel,
})));

const finnTittelEllerFeil = (dokVal: DokumentTittelFormValues): string => {
  if (!dokVal.tittel) {
    throw new Error(`Mangler dokumenttittel for dokument med id  ${dokVal.dokumentId}`);
  }
  return dokVal.tittel;
};

export const transformValues = (values: JournalføringFormValues): DokumentTittelSubmitValue[] | undefined => {
  if (!values.journalpostDokumenter) {
    return undefined;
  }
  return values.journalpostDokumenter.map((dokVal) => ({ dokumentId: dokVal.dokumentId, tittel: finnTittelEllerFeil(dokVal) }));
};

const finnMatchendeDokumentForField = (field: DokumentTittelFormValues, dokumenter: JournalDokument[]): JournalDokument => {
  const match = dokumenter.find((doc) => doc.dokumentId === field.dokumentId);
  if (!match) {
    throw new Error(`Finner ikke dokument med id ${field.dokumentId}`);
  }
  return match;
};

type OwnProps = Readonly<{
  dokumenter: JournalDokument[];
}>;

/**
 * DokumentForm - Inneholder form behandling av dokumenter og setter opp visning av hvert dokument
 */
const DokumentForm: FunctionComponent<OwnProps> = ({
  dokumenter,
}) => {
  const { control } = formHooks.useFormContext<JournalføringFormValues>();
  const { fields } = formHooks.useFieldArray({
    control,
    name: 'journalpostDokumenter',
  });
  return (
    <>
      {fields.map((field, index) => (
        <DokumentDetaljer dokument={finnMatchendeDokumentForField(field, dokumenter)} key={field.id} docFieldIndex={index} />
      ))}
    </>
  );
};
export default DokumentForm;
