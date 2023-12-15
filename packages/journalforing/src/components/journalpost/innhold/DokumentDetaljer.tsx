import React, { FunctionComponent, useState, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, Button, CheckboxGroup, Checkbox, HStack, Spacer } from '@navikt/ds-react';
import { hasValidText, required } from '@navikt/ft-form-validators';
import { TabsAddIcon, PencilIcon } from '@navikt/aksel-icons';
import { InputField, SelectField } from '@navikt/ft-form-hooks';
import JournalDokument from '../../../typer/journalDokumentTsType';
import { listeMedTittler } from '../../../kodeverk/dokumentTittel';
import { erKanalSomErÅpenForEndring } from '../../../kodeverk/journalKanal';
import Journalpost from '../../../typer/journalpostTsType';

import styles from './dokumentDetaljer.module.css';

type OwnProps = Readonly<{
  dokument: JournalDokument;
  docFieldIndex: number;
  journalpost: Journalpost;
  dokumentTittelStyresAvJournalpostTittel: boolean;
}>;

/**
 * DokumentDetaljer - Inneholder detaljer om et dokument på journalposten
 */
const DokumentDetaljer: FunctionComponent<OwnProps> = ({
  dokument,
  docFieldIndex,
  journalpost,
  dokumentTittelStyresAvJournalpostTittel,
}) => {
  const [kanRedigeres, setSkalRedigeres] = useState<boolean>(!dokument.tittel);
  const [harToggletFritekst, setHarToggletFritekst] = useState(false);
  const tittler = listeMedTittler.map(tittel => (
    <option value={tittel} key={tittel}>
      {tittel}
    </option>
  ));

  const endreFritekstToggle = useCallback(() => {
    setHarToggletFritekst(!harToggletFritekst);
  }, [harToggletFritekst]);

  const toggleRedigering = useCallback(() => {
    setSkalRedigeres(!kanRedigeres);
  }, [kanRedigeres]);
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
                selectValues={tittler}
              />
            )}
          </HStack>
          <HStack className={styles.checkbox}>
            <CheckboxGroup
              legend="Brukt fritekst"
              hideLegend
              onChange={endreFritekstToggle}
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
              onClick={toggleRedigering}
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
export default DokumentDetaljer;
