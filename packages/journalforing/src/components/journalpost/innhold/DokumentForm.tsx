import React, { FunctionComponent } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { DokumentTittelSubmitValue } from '../../../typer/ferdigstillJournalføringSubmit';

import JournalDokument from '../../../typer/journalDokumentTsType';
import JournalføringFormValues, { DokumentTittelFormValues } from '../../../typer/journalføringFormValues';
import DokumentDetaljer from './DokumentDetaljer';
import Journalpost from '../../../typer/journalpostTsType';

const TOM_DOK_LISTE: JournalDokument[] = [];

export const buildInitialValues = (dokumenter: JournalDokument[]): DokumentTittelFormValues[] =>
  dokumenter.map(dok => ({
    dokumentId: dok.dokumentId,
    tittel: dok.tittel,
  }));

const finnMatchendeDokumentForId = (dokId: string, dokumenter: JournalDokument[]): JournalDokument => {
  const match = dokumenter.find(doc => doc.dokumentId === dokId);
  if (!match) {
    throw new Error(`Finner ikke dokument med id ${dokId}`);
  }
  return match;
};

const finnTittelEllerFeil = (dokVal: DokumentTittelFormValues): string => {
  if (!dokVal.tittel) {
    throw new Error(`Mangler dokumenttittel for dokument med id  ${dokVal.dokumentId}`);
  }
  return dokVal.tittel;
};

const erTittelEndret = (dokVal: DokumentTittelFormValues, dokumenter: JournalDokument[]): boolean => {
  const match = finnMatchendeDokumentForId(dokVal.dokumentId, dokumenter);
  return match.tittel !== dokVal.tittel;
};

export const transformValues = (
  values: JournalføringFormValues,
  dokumenter: JournalDokument[],
): DokumentTittelSubmitValue[] => {
  if (!values.journalpostDokumenter) {
    return [];
  }
  return values.journalpostDokumenter
    .filter(dokVal => erTittelEndret(dokVal, dokumenter))
    .map(dokVal => ({ dokumentId: dokVal.dokumentId, tittel: finnTittelEllerFeil(dokVal) }));
};

type OwnProps = Readonly<{
  journalpost: Journalpost;
  dokumentTittelStyresAvJournalpostTittel: boolean;
}>;

/**
 * DokumentForm - Inneholder form behandling av dokumenter og setter opp visning av hvert dokument
 */
const DokumentForm: FunctionComponent<OwnProps> = ({ journalpost, dokumentTittelStyresAvJournalpostTittel }) => {
  const { control } = useFormContext<JournalføringFormValues>();
  const { fields } = useFieldArray({
    control,
    name: 'journalpostDokumenter',
  });
  return (
    <>
      {fields.map((field, index) => (
        <DokumentDetaljer
          dokument={finnMatchendeDokumentForId(field.dokumentId, journalpost.dokumenter || TOM_DOK_LISTE)}
          key={field.id}
          docFieldIndex={index}
          journalpost={journalpost}
          dokumentTittelStyresAvJournalpostTittel={dokumentTittelStyresAvJournalpostTittel}
        />
      ))}
    </>
  );
};
export default DokumentForm;
