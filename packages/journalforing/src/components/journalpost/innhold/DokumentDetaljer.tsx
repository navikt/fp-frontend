import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { PencilIcon, TabsAddIcon } from '@navikt/aksel-icons';
import { Button, Checkbox, CheckboxGroup, HStack, Label, Spacer } from '@navikt/ds-react';
import { InputField, SelectField } from '@navikt/ft-form-hooks';
import { hasValidText, required } from '@navikt/ft-form-validators';

import { listeMedTittler } from '../../../kodeverk/dokumentTittel';
import { erKanalSomErÅpenForEndring } from '../../../kodeverk/journalKanal';
import type { JournalDokument } from '../../../typer/journalDokumentTsType';
import type { Journalpost } from '../../../typer/journalpostTsType';

import styles from './dokumentDetaljer.module.css';

type Props = Readonly<{
  dokument: JournalDokument;
  docFieldIndex: number;
  journalpost: Journalpost;
  dokumentTittelStyresAvJournalpostTittel: boolean;
}>;

/**
 * DokumentDetaljer - Inneholder detaljer om et dokument på journalposten
 */
export const DokumentDetaljer = ({
  dokument,
  docFieldIndex,
  journalpost,
  dokumentTittelStyresAvJournalpostTittel,
}: Props) => {
  const [kanRedigeres, setKanRedigeres] = useState<boolean>(!dokument.tittel);
  const [harToggletFritekst, setHarToggletFritekst] = useState(false);

  const inputFieldName = dokumentTittelStyresAvJournalpostTittel
    ? 'journalpostTittel'
    : `journalpostDokumenter.${docFieldIndex}.tittel`;
  const nyFaneKnapp = (
    <div className={styles.knappKol}>
      <Button
        as="a"
        href={dokument.lenke}
        target="_blank"
        rel="noreferrer"
        variant="tertiary"
        icon={<TabsAddIcon aria-hidden className={styles.newTabIcon} />}
      />
    </div>
  );
  if (dokumentTittelStyresAvJournalpostTittel) {
    return (
      <div className={styles.dokContainer}>
        <div className={styles.dokumentTittel}>
          <InputField
            name={inputFieldName}
            validate={[required, hasValidText]}
            readOnly={dokumentTittelStyresAvJournalpostTittel}
            maxLength={200}
          />
        </div>
        <Spacer />
        {nyFaneKnapp}
      </div>
    );
  }
  return (
    <div className={styles.dokContainer}>
      {kanRedigeres && (
        <>
          <HStack className={styles.dokumentTittel} gap="1">
            {harToggletFritekst && (
              <InputField
                name={`journalpostDokumenter.${docFieldIndex}.tittel`}
                validate={[required, hasValidText]}
                readOnly={false}
                className={styles.input}
                maxLength={100}
              />
            )}
            {!harToggletFritekst && (
              <SelectField
                readOnly={false}
                name={`journalpostDokumenter.${docFieldIndex}.tittel`}
                label={undefined}
                validate={[required]}
                className={styles.input}
                selectValues={listeMedTittler.map(tittel => (
                  <option value={tittel} key={tittel}>
                    {tittel}
                  </option>
                ))}
              />
            )}
          </HStack>
          <HStack className={styles.checkbox}>
            <CheckboxGroup
              legend="Brukt fritekst"
              hideLegend
              onChange={() => {
                setHarToggletFritekst(!harToggletFritekst);
              }}
              value={[harToggletFritekst]}
            >
              <Checkbox value>
                <FormattedMessage id="Journal.Tittel.Fritekst" />
              </Checkbox>
            </CheckboxGroup>
          </HStack>
        </>
      )}
      {!kanRedigeres && (
        <HStack className={styles.dokumentTittel}>
          <Label>{dokument.tittel}</Label>
          {erKanalSomErÅpenForEndring(journalpost.kanal) && (
            <Button
              icon={<PencilIcon aria-hidden />}
              className={styles.editButton}
              onClick={() => {
                setKanRedigeres(!kanRedigeres);
              }}
              type="button"
              variant="tertiary"
            />
          )}
        </HStack>
      )}
      <Spacer />
      {nyFaneKnapp}
    </div>
  );
};
